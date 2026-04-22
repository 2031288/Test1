
// UI helpers, navigation, sidebar, topbar, shortcuts, toast
window.UI = (function() {

  // ─ Toast ────────────────────────────────────────────────
  function toast(msg, type, dur) {
    type = type || 'info'; dur = dur || 2500;
    var t = document.getElementById('toast');
    var el = document.createElement('div');
    el.className = 'toast-item' + (type !== 'info' ? ' ' + type : '');
    el.textContent = msg;
    t.appendChild(el);
    setTimeout(function() { if (el.parentNode) el.parentNode.removeChild(el); }, dur);
  }

  // ─ Panel toggles ────────────────────────────────────────
  function togglePanel(side) {
    if (side === 'right') {
      var p = document.getElementById('right-panel');
      p.classList.toggle('hidden');
      document.getElementById('btn-db').classList.toggle('active');
    } else if (side === 'notebook') {
      var np = document.getElementById('notebook-panel');
      np.classList.toggle('hidden');
      document.getElementById('btn-notebook').classList.toggle('active');
      if (!np.classList.contains('hidden')) {
        _refreshNotebookPanel();
      }
    } else {
      var s = document.getElementById('sidebar');
      s.classList.toggle('hidden');
      document.getElementById('btn-sidebar').classList.toggle('active', !s.classList.contains('hidden'));
      if (window.APP && APP.syncSidebarState) APP.syncSidebarState();
    }
  }

  function _refreshNotebookPanel() {
    var container = document.getElementById('np-notes');
    if (!container) return;
    
    var notes = Progress.getNotebook().slice(0, 5);
    var annotations = Progress.getAnnotations().slice(0, 3);
    
    var html = '';
    
    // Recent notes
    if (notes.length > 0) {
      html += '<div class="np-section-title">Recent Notes</div>';
      notes.forEach(function(note) {
        var preview = (note.title || 'Untitled').slice(0, 25);
        if ((note.title || '').length > 25) preview += '...';
        html += '<div class="np-item" onclick="APP.editNote(\'' + note.id + '\');APP.showSection(\'notebook\')">' +
          '<span class="np-item-icon">📝</span>' +
          '<span class="np-item-text">' + preview + '</span>' +
        '</div>';
      });
    }
    
    // Recent comments
    if (annotations.length > 0) {
      html += '<div class="np-section-title" style="margin-top:12px">Recent Comments</div>';
      annotations.forEach(function(a) {
        var preview = a.comment.slice(0, 30);
        if (a.comment.length > 30) preview += '...';
        html += '<div class="np-item" onclick="APP.jumpToUnderstanding(\'' + a.uid + '\')">' +
          '<span class="np-item-icon">💬</span>' +
          '<span class="np-item-text">' + preview + '</span>' +
          '<span class="np-item-uid">' + a.uid + '</span>' +
        '</div>';
      });
    }
    
    if (notes.length === 0 && annotations.length === 0) {
      html = '<div class="np-empty">No notes or comments yet.<br>Select text in Content to add comments!</div>';
    }
    
    container.innerHTML = html;
  }

  function addQuickNote() {
    var title = prompt('Quick note title:');
    if (title !== null && title.trim()) {
      var note = Progress.addNotebookEntry(title.trim(), '', []);
      _refreshNotebookPanel();
      toast('Note created!', 'success');
    }
  }

  // ─ Topbar tabs ──────────────────────────────────────────
  function setActiveTab(section) {
    document.querySelectorAll('.tb-tab').forEach(function(b) {
      b.classList.toggle('active', b.dataset.section === section);
    });
    var contentSections = ['content'];
    var subtabs = document.getElementById('subtabs');
    subtabs.style.display = contentSections.includes(section) ? 'flex' : 'none';
  }

  // ─ Sub-tabs ─────────────────────────────────────────────
  function setActiveSubtab(view) {
    document.querySelectorAll('.sub-tab').forEach(function(b) {
      b.classList.toggle('active', b.dataset.view === view);
    });
  }

  // ─ Sidebar ──────────────────────────────────────────────
  function buildSidebar(activeSection) {
    var sb = document.getElementById('sidebar');
    if (!sb) return;
    var DB = window.DB;
    if (!DB) { sb.innerHTML = ''; return; }
    var sections = DB.sections || [];
    var html = '';

    var secColors = {
      unit1:'teal', unit2:'blue', unit3:'purple',
      unit4:'amber', unit5:'coral', unit6:'red',
      unit7:'teal', unit8:'blue', unit9:'purple'
    };

    sections.forEach(function(sec) {
      if (!sec || !sec.id) return;
      var isActive = sec.id === activeSection;
      var secLabel = sec.title || sec.id;
      var color = secColors[sec.id] || 'teal';

      html += '<div class="sb-sec-head' + (isActive ? ' active' : '') + '" ' +
        'onclick="APP.navigateToSection(\'' + sec.id + '\')" ' +
        'style="padding:7px 12px;cursor:pointer;display:flex;align-items:center;gap:6px;' +
        'border-bottom:1px solid var(--brd3);user-select:none;' +
        (isActive ? 'background:var(--bg);border-left:3px solid var(--primary);' : 'background:var(--bg2);border-left:3px solid transparent;') + '">' +
        '<span style="font-size:11px;font-weight:700;color:' + (isActive ? 'var(--primary-d)' : 'var(--t2)') + ';flex:1">' + secLabel + '</span>' +
        '<span style="font-size:9px;color:var(--t3)">' + (isActive ? '\u25BC' : '\u25B6') + '</span>' +
        '</div>';

      if (!isActive) return;

      (sec.subtopics || []).forEach(function(sub) {
        if (!sub) return;
        html += '<div class="sb-subtopic" style="padding:5px 12px 2px;font-size:10.5px;font-weight:700;' +
          'color:var(--t3);letter-spacing:.03em;border-bottom:1px solid var(--brd3)">' +
          sub.code + ' \u2014 ' + sub.title + '</div>';

        var uids = [];
        if (sub.blocks) {
          sub.blocks.forEach(function(b) { uids = uids.concat(b.understandings || []); });
        } else if (sub.understandings) {
          uids = sub.understandings;
        }
        var seen = {};
        uids = uids.filter(function(uid) { if (seen[uid]) return false; seen[uid]=true; return true; });

        uids.forEach(function(uid) {
          var u = DB.allUnderstandings[uid];
          if (!u) return;
          var status = Progress.getStatus(uid);
          // Derive numbered code from ID: "U1.5.1" → "1.5.1"
          var shortCode = uid.replace(/^U/, '');
          // Build a concise descriptive title from the statement
          // Take up to the first period, semicolon, or comma-clause, max ~45 chars
          var stmt = u.statement || '';
          var shortTitle = stmt.split(/[.;]/)[0].trim();
          if (shortTitle.length > 50) shortTitle = shortTitle.split(/,/)[0].trim();
          if (shortTitle.length > 50) shortTitle = shortTitle.slice(0, 47) + '\u2026';
          html += '<div class="sb-item" id="sb_' + uid + '" onclick="APP.scrollToUnderstanding(\'' + uid + '\')" title="' + stmt.replace(/"/g,'&quot;').slice(0,150) + '">' +
            '<span class="sb-dot ' + status + '"></span>' +
            '<span class="sb-code" style="min-width:32px">' + shortCode + '</span>' +
            '<span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px">' + shortTitle + '</span>' +
            '</div>';
        });
      });
    });

    sb.innerHTML = html;
  }

  function setSidebarActive(uid) {
    document.querySelectorAll('.sb-item').forEach(function(el) {
      el.classList.toggle('active', el.id === 'sb_' + uid);
    });
  }

  function updateSidebarDots() {
    document.querySelectorAll('.sb-item').forEach(function(el) {
      var uid = el.id.replace('sb_','');
      var dot = el.querySelector('.sb-dot');
      if (dot) { dot.className = 'sb-dot ' + Progress.getStatus(uid); }
    });
  }

  // ─ Search ───────────────────────────────────────────────
  function initSearch() {
    var inp = document.getElementById('search-input');
    var res = document.getElementById('search-results');
    if (!inp || !res) return;
    inp.addEventListener('input', function() {
      var q = inp.value.trim();
      if (q.length < 2) { res.classList.remove('show'); res.innerHTML = ''; return; }
      // Support Search.query() or Search.search() API
      var results;
      if (typeof Search.query === 'function') {
        results = Search.query(q);
      } else if (typeof Search.search === 'function') {
        results = Search.search(q);
      } else {
        results = [];
      }
      if (!results.length) {
        res.innerHTML = '<div class="sr-item"><div class="sr-type">No results</div><div class="sr-title">Try a different search</div></div>';
      } else {
        res.innerHTML = results.map(function(r) {
          var rType = r.type || 'understanding';
          var rId = r.id || '';
          var rSection = r.section || '';
          var rTitle = r.title || '';
          var rExcerpt = r.excerpt || '';
          return '<div class="sr-item" onclick="UI.handleSearchClick(\'' + rType + '\',\'' + rId + '\')">' +
            '<div class="sr-type">' + rType + ' <span class="sp sp-' + rSection.replace('unit','u') + '">' + rSection + '</span></div>' +
            '<div class="sr-title">' + rTitle + '</div>' +
            (rExcerpt ? '<div class="sr-excerpt">' + rExcerpt + '</div>' : '') +
            '</div>';
        }).join('');
      }
      res.classList.add('show');
    });
    document.addEventListener('click', function(e) {
      if (!e.target.closest('#search-wrap')) res.classList.remove('show');
    });
    inp.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') { res.classList.remove('show'); inp.blur(); }
    });
  }

  function handleSearchClick(type, id) {
    document.getElementById('search-results').classList.remove('show');
    document.getElementById('search-input').value = '';
    if (type === 'understanding') {
      APP.showSection('content');
      setTimeout(function() { APP.scrollToUnderstanding(id); }, 100);
    } else if (type === 'question') {
      APP.showSection('questions');
      setTimeout(function() { Questions.scrollToQuestion(id); }, 100);
    } else if (type === 'misconception') {
      APP.showSection('misconceptions');
    }
  }

  // ─ Keyboard shortcuts ───────────────────────────────────
  function initShortcuts() {
    document.addEventListener('keydown', function(e) {
      var tag = document.activeElement && document.activeElement.tagName;
      var inInput = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
      if (e.key === '/' && !inInput) { e.preventDefault(); document.getElementById('search-input').focus(); return; }
      if (e.key === 'Escape') {
        document.getElementById('search-results').classList.remove('show');
        document.getElementById('search-input').blur();
        if (typeof Questions !== 'undefined' && Questions.closeModal) Questions.closeModal();
        return;
      }
      if (inInput) return;
      if (e.key === '?' || (e.key === '/' && e.shiftKey)) { e.preventDefault(); showShortcutsModal(); return; }
      if (e.ctrlKey && e.key === 'p') { e.preventDefault(); window.print(); return; }
      // Practice mode shortcuts
      if (typeof Questions !== 'undefined' && Questions.isInPractice && Questions.isInPractice()) {
        if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); Questions.practiceNext(); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); Questions.practicePrev(); }
        else if (e.key === '1') Questions.markConfidence('ns');
        else if (e.key === '2') Questions.markConfidence('rv');
        else if (e.key === '3') Questions.markConfidence('cf');
        else if (e.key === '4') Questions.markConfidence('nr');
      }
      // Global nav
      if (e.key === 'c' && !e.ctrlKey) APP.showSection('content');
      if (e.key === 'q' && !e.ctrlKey) APP.showSection('questions');
      if (e.key === 'm' && !e.ctrlKey) APP.showSection('misconceptions');
      if (e.key === 'p' && !e.ctrlKey) APP.showSection('planner');
    });
  }

  function showShortcutsModal() {
    var shortcuts = [
      ['/', 'Focus search'],
      ['?', 'Show this panel'],
      ['c', 'Go to Content'],
      ['q', 'Go to Questions'],
      ['m', 'Go to Misconceptions'],
      ['p', 'Go to Planner'],
      ['Ctrl + P', 'Print current section'],
      ['\u2192 / Space', 'Next question (practice)'],
      ['\u2190', 'Previous question (practice)'],
      ['1 / 2 / 3', 'Mark confidence: Not started / Reviewing / Confident'],
      ['4', 'Mark as Skip'],
      ['Esc', 'Close modal / exit search'],
    ];
    var rows = shortcuts.map(function(s) {
      return '<span class="sc-key">' + s[0] + '</span><span class="sc-desc">' + s[1] + '</span>';
    }).join('');
    showModal('Keyboard Shortcuts', '<div class="sc-grid">' + rows + '</div>');
  }

  function showModal(title, bodyHtml, footerHtml) {
    var existing = document.querySelector('.modal-backdrop');
    if (existing) existing.remove();
    var bd = document.createElement('div');
    bd.className = 'modal-backdrop';
    bd.innerHTML = '<div class="modal">' +
      '<div class="modal-head"><span class="modal-title">' + title + '</span>' +
      '<button class="modal-close" onclick="this.closest(\'.modal-backdrop\').remove()">&#10005;</button></div>' +
      '<div class="modal-body">' + bodyHtml + '</div>' +
      (footerHtml ? '<div style="padding:12px 20px;border-top:1px solid var(--brd)">' + footerHtml + '</div>' : '') +
      '</div>';
    bd.addEventListener('click', function(e) { if (e.target === bd) bd.remove(); });
    document.body.appendChild(bd);
  }

  function closeModal() {
    var bd = document.querySelector('.modal-backdrop');
    if (bd) bd.remove();
  }

  // ─ Status dot click handler ─────────────────────────────
  function handleStatusClick(uid, el) {
    // Cycle: ns → rv → cf → nr → ns
    var cur = Progress.getStatus(uid);
    var next;
    if (typeof Progress.cycleStatus === 'function') {
      next = Progress.cycleStatus(uid);
    } else {
      next = cur === 'ns' ? 'rv' : cur === 'rv' ? 'cf' : cur === 'cf' ? 'nr' : 'ns';
      Progress.setStatus(uid, next);
    }
    if (el) el.className = 'status-dot ' + next;
    updateSidebarDots();
    var labels = { ns: 'Not started', rv: 'Reviewing', cf: 'Confident', nr: 'Skip' };
    toast(labels[next] || next, next === 'cf' ? 'success' : 'info', 1500);
  }

  return {
    toast: toast,
    togglePanel: togglePanel,
    setActiveTab: setActiveTab,
    setActiveSubtab: setActiveSubtab,
    buildSidebar: buildSidebar,
    setSidebarActive: setSidebarActive,
    updateSidebarDots: updateSidebarDots,
    initSearch: initSearch,
    handleSearchClick: handleSearchClick,
    initShortcuts: initShortcuts,
    showShortcutsModal: showShortcutsModal,
    showModal: showModal,
    closeModal: closeModal,
    handleStatusClick: handleStatusClick,
    addQuickNote: addQuickNote
  };
})();
