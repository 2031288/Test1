
// Question engine — browse, practice mode, session history, API generator
window.Questions = (function() {
  var _inPractice = false;
  var _session = null;
  var _currentQ = 0;
  var _queue = [];
  var _revealed = false;
  var _timer = null;
  var _timeLeft = 0;
  var _answered = false;

  function isInPractice() { return _inPractice; }

  // --- Filters ---
  function _getFilters() {
    return {
      section: document.getElementById('q-filt-section') && document.getElementById('q-filt-section').value || 'all',
      type: document.getElementById('q-filt-type') && document.getElementById('q-filt-type').value || 'all',
      difficulty: document.getElementById('q-filt-diff') && document.getElementById('q-filt-diff').value || 'all',
    };
  }

  function _applyFilters(qs, f) {
    return qs.filter(function(q) {
      if (f.section !== 'all' && q.section !== f.section) return false;
      if (f.type !== 'all' && q.type !== f.type) return false;
      if (f.difficulty !== 'all' && String(q.difficulty) !== f.difficulty) return false;
      return true;
    });
  }

  // --- Browse view ---
  function renderBrowse() {
    var DB = window.DB;
    if (!DB) return '<div class="empty"><h3>No questions loaded</h3></div>';
    var allQ = DB.allQuestions || [];
    var html = '<div class="q-filters">' +
      '<span class="q-flabel">Filter:</span>' +
      '<select class="q-fsel" id="q-filt-section" onchange="Questions.refreshBrowse()">' +
        '<option value="all">All units</option>' +
        '<option value="unit1">Unit 1 \u2014 Atomic Structure</option>' +
        '<option value="unit2">Unit 2 \u2014 Molecular &amp; Ionic Compounds</option>' +
        '<option value="unit3">Unit 3 \u2014 Intermolecular Forces</option>' +
        '<option value="unit4">Unit 4 \u2014 Chemical Reactions</option>' +
        '<option value="unit5">Unit 5 \u2014 Kinetics</option>' +
        '<option value="unit6">Unit 6 \u2014 Thermodynamics</option>' +
        '<option value="unit7">Unit 7 \u2014 Equilibrium</option>' +
        '<option value="unit8">Unit 8 \u2014 Acids &amp; Bases</option>' +
        '<option value="unit9">Unit 9 \u2014 Applications of Thermodynamics</option>' +
      '</select>' +
      '<select class="q-fsel" id="q-filt-type" onchange="Questions.refreshBrowse()">' +
        '<option value="all">All types</option>' +
        '<option value="mcq">MCQ</option>' +
        '<option value="short">Short answer</option>' +
        '<option value="extended">Extended</option>' +
      '</select>' +
      '<select class="q-fsel" id="q-filt-diff" onchange="Questions.refreshBrowse()">' +
        '<option value="all">Any difficulty</option>' +
        '<option value="1">Easy</option>' +
        '<option value="2">Medium</option>' +
        '<option value="3">Hard</option>' +
      '</select>' +
      '<button class="q-start" onclick="Questions.startPractice()">&#9654; Practice Mode</button>' +
    '</div>';
    html += '<div id="q-browse-list" class="q-list-wrap">';
    html += _renderQList(allQ);
    html += '</div>';
    return html;
  }

  function _renderQList(qs) {
    var f = _getFilters();
    var filtered = _applyFilters(qs, f);
    if (!filtered.length) return '<div class="empty"><h3>No questions match filters</h3><p>Try adjusting the filters above.</p></div>';
    return filtered.map(function(q) { return _renderQCard(q); }).join('');
  }

  function _renderQCard(q) {
    var typeClass = q.type === 'mcq' ? 'qt-mcq' : q.type === 'short' ? 'qt-short' : 'qt-ext';
    var typeLabel = q.type === 'mcq' ? 'MCQ' : q.type === 'short' ? 'Short' : 'Extended';
    var diffDots = [1,2,3].map(function(n){ return '<span class="' + (n <= q.difficulty ? 'on' : '') + '"></span>'; }).join('');
    var optHtml = '';
    if (q.type === 'mcq' && q.options) {
      optHtml = '<ul class="q-opts" id="opts_' + q.id + '">' +
        ['A','B','C','D'].filter(function(k){ return q.options[k]; }).map(function(k) {
          return '<li onclick="Questions.revealMCQ(\'' + q.id + '\',\'' + k + '\')">' + k + '. ' + q.options[k] + '</li>';
        }).join('') + '</ul>';
    }
    return '<div class="q-card" id="qc_' + q.id + '">' +
      '<div class="q-card-head">' +
        '<span class="q-type ' + typeClass + '">' + typeLabel + '</span>' +
        '<span class="q-code">' + q.id + '</span>' +
        '<span class="q-code">' + (q.commandTerm || '') + '</span>' +
        '<span class="q-diff">' + diffDots + '</span>' +
        '<span class="q-marks">' + q.marks + ' mark' + (q.marks > 1 ? 's' : '') + '</span>' +
      '</div>' +
      '<div class="q-card-body">' +
        '<div class="q-stem">' + q.stem + '</div>' +
        optHtml +
        '<button class="q-reveal" onclick="Questions.revealAnswer(\'' + q.id + '\')">Show answer</button>' +
        '<div class="q-ans" id="ans_' + q.id + '">' +
          (q.explanation || '') +
          (q.markScheme ? '<div class="q-ms">' + q.markScheme + '</div>' : '') +
        '</div>' +
      '</div></div>';
  }

  function refreshBrowse() {
    var listEl = document.getElementById('q-browse-list');
    if (listEl) listEl.innerHTML = _renderQList(window.DB && window.DB.allQuestions || []);
  }

  function revealMCQ(qid, chosen) {
    var q = window.DB && window.DB.allQuestions && window.DB.allQuestions.find(function(x){ return x.id === qid; });
    if (!q) return;
    var opts = document.getElementById('opts_' + qid);
    if (!opts) return;
    opts.querySelectorAll('li').forEach(function(li, i) {
      var key = ['A','B','C','D'][i];
      if (key === q.answer) li.classList.add('correct');
      else if (key === chosen) li.classList.add('wrong');
    });
    revealAnswer(qid);
  }

  function revealAnswer(qid) {
    var ans = document.getElementById('ans_' + qid);
    if (ans) { ans.classList.add('show'); }
  }

  function scrollToQuestion(qid) {
    var el = document.getElementById('qc_' + qid);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // --- Practice mode ---
  function startPractice() {
    var DB = window.DB;
    if (!DB) return;
    var allQ = DB.allQuestions || [];
    var f = _getFilters();
    _queue = _applyFilters(allQ, f);
    if (!_queue.length) { UI.toast('No questions match current filters', 'error'); return; }
    _queue = _shuffle(_queue);
    _currentQ = 0;
    _inPractice = true;
    _session = { id: 'sess_' + Date.now(), date: new Date().toISOString(), results: [], filter: f, startTime: Date.now() };
    _renderPracticeCard();
  }

  function _shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function _renderPracticeCard() {
    var q = _queue[_currentQ];
    if (!q) { _endSession(); return; }
    _revealed = false;
    _answered = false;
    var ca = document.getElementById('content-area');
    var settings = Progress.getSettings();
    var timerEnabled = settings.timerEnabled;
    var timerSecs = settings.timerSeconds || 90;
    var pct = Math.round(100 * _currentQ / _queue.length);
    var typeClass = q.type === 'mcq' ? 'qt-mcq' : q.type === 'short' ? 'qt-short' : 'qt-ext';
    var typeLabel = q.type === 'mcq' ? 'MCQ' : q.type === 'short' ? 'Short' : 'Extended';
    var diffDots = [1,2,3].map(function(n){ return '<span class="' + (n <= q.difficulty ? 'on' : '') + '"></span>'; }).join('');
    var optHtml = '';
    if (q.type === 'mcq' && q.options) {
      optHtml = '<ul class="prac-opts" id="popts">' +
        ['A','B','C','D'].filter(function(k){ return q.options[k]; }).map(function(k) {
          return '<li onclick="Questions.practiceMCQ(\'' + k + '\')">' + k + '. ' + q.options[k] + '</li>';
        }).join('') + '</ul>';
    }
    ca.innerHTML = '<div class="prac-wrap">' +
      '<div class="prac-header">' +
        '<div><div class="prac-counter">Question ' + (_currentQ + 1) + ' of ' + _queue.length + '</div>' +
          '<div class="prac-prog"><div class="prac-prog-fill" style="width:' + pct + '%"></div></div></div>' +
        (timerEnabled ? '<div class="timer-disp" id="timer-disp">' + timerSecs + 's</div>' : '') +
        '<button class="btn-secondary" onclick="Questions.endPractice()">&#9632; End</button>' +
      '</div>' +
      '<div class="prac-card">' +
        '<div class="prac-card-head">' +
          '<span class="q-type ' + typeClass + '">' + typeLabel + '</span>' +
          '<span class="q-code">' + q.id + '</span>' +
          '<span class="q-diff">' + diffDots + '</span>' +
          '<span class="q-marks" style="margin-left:auto">' + q.marks + ' mark' + (q.marks>1?'s':'') + '</span>' +
        '</div>' +
        '<div class="prac-card-body">' +
          '<div class="prac-q">' + q.stem + '</div>' +
          optHtml +
          '<div id="prac-ans" class="q-ans" style="margin-top:10px;display:none">' +
            (q.explanation || '') +
            (q.markScheme ? '<div class="q-ms">' + q.markScheme + '</div>' : '') +
          '</div>' +
        '</div>' +
        '<div class="prac-actions">' +
          '<button class="btn-secondary" onclick="Questions.practiceReveal()" id="reveal-btn">Show answer</button>' +
          '<button class="btn-primary" onclick="Questions.practiceNext()" id="next-btn" style="display:none">Next &#8594;</button>' +
          '<div class="conf-btns" id="conf-btns" style="display:none">' +
            '<button class="conf-btn conf-ns" onclick="Questions.markConfidence(\'ns\')">Not sure (1)</button>' +
            '<button class="conf-btn conf-rv" onclick="Questions.markConfidence(\'rv\')">Getting there (2)</button>' +
            '<button class="conf-btn conf-cf" onclick="Questions.markConfidence(\'cf\')">Confident! (3)</button>' +
            '<button class="conf-btn conf-nr" onclick="Questions.markConfidence(\'nr\')">Not relevant (4)</button>' +
          '</div>' +
        '</div>' +
      '</div></div>';
    if (timerEnabled) _startTimer(timerSecs);
  }

  function _startTimer(secs) {
    _timeLeft = secs;
    if (_timer) clearInterval(_timer);
    _timer = setInterval(function() {
      _timeLeft--;
      var el = document.getElementById('timer-disp');
      if (el) {
        el.textContent = _timeLeft + 's';
        el.className = 'timer-disp' + (_timeLeft <= 10 ? ' danger' : _timeLeft <= 20 ? ' warn' : '');
      }
      if (_timeLeft <= 0) { clearInterval(_timer); if (!_revealed) practiceReveal(); }
    }, 1000);
  }

  function practiceReveal() {
    if (_timer) clearInterval(_timer);
    _revealed = true;
    var ans = document.getElementById('prac-ans');
    if (ans) ans.style.display = 'block';
    var revBtn = document.getElementById('reveal-btn');
    if (revBtn) revBtn.style.display = 'none';
    var nextBtn = document.getElementById('next-btn');
    if (nextBtn) nextBtn.style.display = 'inline-flex';
    var confBtns = document.getElementById('conf-btns');
    if (confBtns) confBtns.style.display = 'flex';
    var q = _queue[_currentQ];
    if (q && _session) {
      _session.results.push({ qid: q.id, time: (Progress.getSettings().timerSeconds || 90) - _timeLeft, answered: false });
    }
  }

  function practiceMCQ(chosen) {
    if (_revealed) return;
    var q = _queue[_currentQ];
    if (!q) return;
    var opts = document.getElementById('popts');
    if (!opts) return;
    opts.querySelectorAll('li').forEach(function(li, i) {
      var key = ['A','B','C','D'][i];
      if (key === q.answer) li.classList.add('correct');
      else if (key === chosen) li.classList.add('wrong');
    });
    var correct = chosen === q.answer;
    if (_session && _session.results.length > 0) {
      _session.results[_session.results.length - 1].correct = correct;
    }
    practiceReveal();
  }

  function practiceNext() {
    _currentQ++;
    if (_currentQ >= _queue.length) { _endSession(); return; }
    _renderPracticeCard();
  }

  function practicePrev() {
    if (_currentQ > 0) { _currentQ--; _renderPracticeCard(); }
  }

  function markConfidence(level) {
    var q = _queue[_currentQ];
    if (!q || !q.understandingId) return;
    Progress.setStatus(q.understandingId, level);
    UI.updateSidebarDots();
    var labels = { ns: 'Marked: not started', rv: 'Marked: reviewing', cf: 'Marked: confident', nr: 'Marked: not relevant' };
    UI.toast(labels[level] || level, level === 'cf' ? 'success' : 'info', 2000);
  }

  function endPractice() {
    if (_timer) clearInterval(_timer);
    _inPractice = false;
    _session = null;
    APP.showSection('questions');
  }

  function closeModal() { endPractice(); }

  function _endSession() {
    if (_timer) clearInterval(_timer);
    _inPractice = false;
    if (!_session) return;
    _session.duration = Math.round((Date.now() - _session.startTime) / 1000);
    _session.total = _session.results.length;
    var mcqResults = _session.results.filter(function(r){ return r.correct !== undefined; });
    _session.correct = mcqResults.filter(function(r){ return r.correct; }).length;
    _session.mcqTotal = mcqResults.length;
    Progress.saveSess(_session);
    var ca = document.getElementById('content-area');
    var score = _session.mcqTotal > 0 ? Math.round(100 * _session.correct / _session.mcqTotal) : null;
    ca.innerHTML = '<div class="prac-wrap"><div class="prac-card"><div class="prac-card-body prac-result">' +
      (score !== null ? '<div class="prac-score">' + score + '%</div><div class="prac-score-label">MCQ accuracy</div>' : '') +
      '<div style="margin-top:16px;font-size:13px;color:var(--t2)">' + _session.total + ' questions completed in ' + _fmtTime(_session.duration) + '</div>' +
      '<div style="margin-top:20px;display:flex;gap:10px;justify-content:center">' +
        '<button class="btn-primary" onclick="APP.showSection(\'questions\')">Back to questions</button>' +
        '<button class="btn-secondary" onclick="Questions.startPractice()">Practice again</button>' +
      '</div></div></div></div>';
    _session = null;
  }

  function _fmtTime(secs) {
    var m = Math.floor(secs / 60), s = secs % 60;
    return m + 'm ' + s + 's';
  }

  // --- History ---
  function renderHistory() {
    var sessions = Progress.getSessions(50);
    if (!sessions.length) return '<div class="empty"><h3>No session history yet</h3><p>Complete a practice session to see your history here.</p></div>';
    var html = '<div style="padding:14px 20px">' +
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">' +
        '<h3 style="font-size:14px;font-weight:500">Session history</h3>' +
        '<button onclick="Questions.clearHistory()" class="btn-secondary" style="font-size:11px">Clear history</button>' +
      '</div>';
    html += sessions.map(function(s) {
      var date = new Date(s.date).toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });
      var score = s.mcqTotal > 0 ? Math.round(100 * s.correct / s.mcqTotal) + '% MCQ' : '';
      return '<div class="sess-card">' +
        '<div class="sess-meta">' +
          '<div class="sess-stat-wrap"><div class="sess-stat-val">' + (s.total || 0) + '</div><div class="sess-stat-label">Questions</div></div>' +
          (s.mcqTotal > 0 ? '<div><div class="sess-stat-val" style="color:var(--primary)">' + Math.round(100*s.correct/s.mcqTotal) + '%</div><div class="sess-stat-label">MCQ accuracy</div></div>' : '') +
          '<div><div class="sess-stat-val">' + _fmtTime(s.duration || 0) + '</div><div class="sess-stat-label">Duration</div></div>' +
        '</div>' +
        '<div style="font-size:11px;color:var(--t3)">' + date + ' \u00b7 ' + (s.filter && s.filter.section !== 'all' ? s.filter.section : 'All units') + '</div>' +
      '</div>';
    }).join('');
    html += '</div>';
    return html;
  }

  function clearHistory() {
    if (confirm('Clear all session history?')) { Progress.clearSessions(); APP.showSection('questions'); }
  }

  // --- API Generator ---
  function renderAPIGenerator() {
    var DB = window.DB;
    var status = API.getStatus();
    var uOptions = DB ? Object.values(DB.allUnderstandings || {}).map(function(u) {
      return '<option value="' + u.id + '">' + u.code + ' \u2014 ' + u.statement.slice(0,55) + '...</option>';
    }).join('') : '';
    return '<div class="api-wrap">' +
      '<h3>AI Question Generator</h3>' +
      '<div class="api-desc">Uses Claude AI to generate new practice questions based on your selected understanding. Requires an API key.</div>' +
      '<div class="api-key-status ' + (status.ok ? 'ok' : 'err') + '">' + status.msg + '</div>' +
      '<div class="form-row"><label class="form-label">Understanding</label>' +
        '<select class="form-sel" id="api-uid">' + uOptions + '</select></div>' +
      '<div class="form-row"><label class="form-label">Question type</label>' +
        '<select class="form-sel" id="api-type"><option value="mcq">MCQ</option><option value="short">Short answer</option><option value="extended">Extended</option></select></div>' +
      '<div class="form-row"><label class="form-label">Difficulty</label>' +
        '<select class="form-sel" id="api-diff"><option value="easy">Easy</option><option value="medium">Medium</option><option value="hard">Hard</option></select></div>' +
      '<button class="btn-primary" onclick="Questions.runAPIGen()">Generate question</button>' +
      '<div id="api-status" class="api-status"></div>' +
      '<div id="api-result"></div>' +
    '</div>';
  }

  function runAPIGen() {
    var uid = document.getElementById('api-uid') && document.getElementById('api-uid').value;
    var DB = window.DB;
    var u = DB && DB.allUnderstandings && DB.allUnderstandings[uid];
    var opts = {
      understanding: u || {},
      type: document.getElementById('api-type').value,
      difficulty: document.getElementById('api-diff').value
    };
    var statusEl = document.getElementById('api-status');
    var resultEl = document.getElementById('api-result');
    statusEl.textContent = 'Generating question...';
    statusEl.className = 'api-status loading';
    resultEl.innerHTML = '';
    API.generateQuestion(opts,
      function(chunk) {},
      function(q) {
        statusEl.textContent = 'Question generated!';
        statusEl.className = 'api-status ok';
        var typeClass = q.type === 'mcq' ? 'qt-mcq' : q.type === 'short' ? 'qt-short' : 'qt-ext';
        var optHtml = '';
        if (q.type === 'mcq' && q.options) {
          optHtml = '<ul style="list-style:none;margin-top:8px">' +
            ['A','B','C','D'].filter(function(k){ return q.options[k]; }).map(function(k) {
              return '<li style="padding:5px 8px;border-radius:4px;font-size:12px;margin-bottom:4px;' +
                (k === q.answer ? 'background:var(--primary-l);color:var(--primary-d);font-weight:500' : 'color:var(--t2)') + '">' + k + '. ' + q.options[k] + '</li>';
            }).join('') + '</ul>';
        }
        resultEl.innerHTML = '<div class="api-result">' +
          '<div style="display:flex;gap:8px;margin-bottom:8px"><span class="q-type ' + typeClass + '">' + q.type.toUpperCase() + '</span><span style="font-size:11px;color:var(--t3)">' + q.marks + ' mark(s)</span></div>' +
          '<div style="font-size:13px;font-weight:500;color:var(--t1);margin-bottom:8px">' + q.stem + '</div>' +
          optHtml +
          '<div style="margin-top:10px;font-size:12px;color:var(--t2)">' + (q.explanation || '') + '</div>' +
          (q.markScheme ? '<div class="q-ms" style="margin-top:8px">' + q.markScheme + '</div>' : '') +
        '</div>';
      },
      function(err) { statusEl.textContent = 'Error: ' + err; statusEl.className = 'api-status error'; }
    );
  }

  // --- Mock Exam Mode ---
  var _mockExamActive = false;
  var _mockSection = null;
  var _mockTimer = null;
  var _mockTimeLeft = 0;
  var _mockQueue = [];
  var _mockCurrentQ = 0;
  var _mockResults = [];

  function renderMockExam() {
    if (_mockExamActive) return _renderMockExamQuestion();
    return '<div class="c-page">' +
      '<h2>Mock Exam Mode</h2>' +
      '<p class="guiding">Simulate the AP Chemistry exam experience with timed sections. Choose a section to practice.</p>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;max-width:600px;margin-top:16px">' +

      '<div class="ov-card" style="cursor:pointer" onclick="Questions.startMockExam(\'mcq\')">' +
        '<div class="ov-num">Section I</div>' +
        '<div class="ov-title">Multiple Choice</div>' +
        '<div class="ov-desc">60 questions \u00b7 90 minutes<br>50% of exam score</div>' +
        '<div style="margin-top:10px"><button class="btn-primary" style="width:100%">Start Section I</button></div>' +
      '</div>' +

      '<div class="ov-card" style="cursor:pointer" onclick="Questions.startMockExam(\'frq\')">' +
        '<div class="ov-num">Section II</div>' +
        '<div class="ov-title">Free Response</div>' +
        '<div class="ov-desc">7 questions (3 long + 4 short) \u00b7 105 minutes<br>50% of exam score</div>' +
        '<div style="margin-top:10px"><button class="btn-primary" style="width:100%">Start Section II</button></div>' +
      '</div>' +

      '<div class="ov-card" style="cursor:pointer;grid-column:1/-1" onclick="Questions.startMockExam(\'full\')">' +
        '<div class="ov-num">Full Exam</div>' +
        '<div class="ov-title">Complete AP Chemistry Exam</div>' +
        '<div class="ov-desc">Section I (60 MCQ, 90 min) + Section II (7 FRQ, 105 min) \u00b7 Total: 195 minutes</div>' +
        '<div style="margin-top:10px"><button class="btn-primary" style="width:100%">Start Full Exam</button></div>' +
      '</div>' +

      '</div>' +

      '<div style="margin-top:20px">' +
      '<div class="info">' +
        '<strong>How it works:</strong> Questions are drawn from the database and presented under timed conditions matching the real AP exam. ' +
        'MCQ questions are auto-scored. FRQ questions show mark schemes for self-assessment. ' +
        'Your results are saved to session history.' +
      '</div></div></div>';
  }

  function startMockExam(section) {
    var DB = window.DB;
    if (!DB) return;
    var allQ = DB.allQuestions || [];
    _mockSection = section;
    _mockResults = [];
    _mockCurrentQ = 0;

    if (section === 'mcq' || section === 'full') {
      // Get MCQ questions
      var mcqs = allQ.filter(function(q) { return q.type === 'mcq'; });
      mcqs = _shuffle(mcqs);
      _mockQueue = mcqs.slice(0, Math.min(60, mcqs.length));
      _mockTimeLeft = 90 * 60; // 90 minutes in seconds
    } else if (section === 'frq') {
      // Get FRQ questions (extended + short)
      var extended = allQ.filter(function(q) { return q.type === 'extended'; });
      var short = allQ.filter(function(q) { return q.type === 'short'; });
      extended = _shuffle(extended);
      short = _shuffle(short);
      _mockQueue = extended.slice(0, Math.min(3, extended.length)).concat(short.slice(0, Math.min(4, short.length)));
      _mockTimeLeft = 105 * 60; // 105 minutes in seconds
    }

    if (!_mockQueue.length) {
      UI.toast('Not enough questions available for this section', 'error');
      return;
    }

    _mockExamActive = true;
    _inPractice = true;
    _session = { id: 'mock_' + Date.now(), date: new Date().toISOString(), results: [], filter: { section: 'mock_' + section }, startTime: Date.now(), isMock: true, mockSection: section };

    // Start timer
    if (_mockTimer) clearInterval(_mockTimer);
    _mockTimer = setInterval(function() {
      _mockTimeLeft--;
      var el = document.getElementById('mock-timer');
      if (el) {
        var mins = Math.floor(_mockTimeLeft / 60);
        var secs = _mockTimeLeft % 60;
        el.textContent = mins + ':' + (secs < 10 ? '0' : '') + secs;
        el.className = 'timer-disp' + (_mockTimeLeft <= 300 ? ' danger' : _mockTimeLeft <= 600 ? ' warn' : '');
      }
      if (_mockTimeLeft <= 0) { clearInterval(_mockTimer); _endMockExam(); }
    }, 1000);

    _renderMockExamQuestion();
  }

  function _renderMockExamQuestion() {
    var q = _mockQueue[_mockCurrentQ];
    if (!q) { _endMockExam(); return; }
    var ca = document.getElementById('content-area');
    var mins = Math.floor(_mockTimeLeft / 60);
    var secs = _mockTimeLeft % 60;
    var pct = Math.round(100 * _mockCurrentQ / _mockQueue.length);
    var sectionLabel = _mockSection === 'mcq' ? 'Section I \u2014 MCQ' : _mockSection === 'frq' ? 'Section II \u2014 FRQ' : 'Full Exam';
    var typeClass = q.type === 'mcq' ? 'qt-mcq' : q.type === 'short' ? 'qt-short' : 'qt-ext';
    var typeLabel = q.type === 'mcq' ? 'MCQ' : q.type === 'short' ? 'Short FRQ' : 'Long FRQ';
    var diffDots = [1,2,3].map(function(n){ return '<span class="' + (n <= q.difficulty ? 'on' : '') + '"></span>'; }).join('');
    var optHtml = '';
    if (q.type === 'mcq' && q.options) {
      optHtml = '<ul class="prac-opts" id="mock-opts">' +
        ['A','B','C','D'].filter(function(k){ return q.options[k]; }).map(function(k) {
          return '<li onclick="Questions.mockMCQ(\'' + k + '\')">' + k + '. ' + q.options[k] + '</li>';
        }).join('') + '</ul>';
    }
    ca.innerHTML = '<div class="prac-wrap">' +
      '<div class="prac-header">' +
        '<div><div class="prac-counter" style="font-weight:600;color:var(--primary)">' + sectionLabel + '</div>' +
          '<div class="prac-counter">Question ' + (_mockCurrentQ + 1) + ' of ' + _mockQueue.length + '</div>' +
          '<div class="prac-prog"><div class="prac-prog-fill" style="width:' + pct + '%"></div></div></div>' +
        '<div class="timer-disp" id="mock-timer">' + mins + ':' + (secs < 10 ? '0' : '') + secs + '</div>' +
        '<button class="btn-secondary" onclick="Questions.endMockExam()">End Exam</button>' +
      '</div>' +
      '<div class="prac-card">' +
        '<div class="prac-card-head">' +
          '<span class="q-type ' + typeClass + '">' + typeLabel + '</span>' +
          '<span class="q-code">' + q.id + '</span>' +
          '<span class="q-diff">' + diffDots + '</span>' +
          '<span class="q-marks" style="margin-left:auto">' + q.marks + ' mark' + (q.marks>1?'s':'') + '</span>' +
        '</div>' +
        '<div class="prac-card-body">' +
          '<div class="prac-q">' + q.stem + '</div>' +
          optHtml +
          '<div id="mock-ans" class="q-ans" style="margin-top:10px;display:none">' +
            (q.explanation || '') +
            (q.markScheme ? '<div class="q-ms">' + q.markScheme + '</div>' : '') +
          '</div>' +
        '</div>' +
        '<div class="prac-actions">' +
          '<button class="btn-secondary" onclick="Questions.mockReveal()" id="mock-reveal-btn">Show answer</button>' +
          '<button class="btn-primary" onclick="Questions.mockNext()" id="mock-next-btn" style="display:none">Next \u2192</button>' +
        '</div>' +
      '</div></div>';
  }

  function mockMCQ(chosen) {
    var q = _mockQueue[_mockCurrentQ];
    if (!q) return;
    var opts = document.getElementById('mock-opts');
    if (!opts) return;
    opts.querySelectorAll('li').forEach(function(li, i) {
      var key = ['A','B','C','D'][i];
      if (key === q.answer) li.classList.add('correct');
      else if (key === chosen) li.classList.add('wrong');
    });
    _mockResults.push({ qid: q.id, chosen: chosen, correct: chosen === q.answer, type: q.type });
    mockReveal();
  }

  function mockReveal() {
    var ans = document.getElementById('mock-ans');
    if (ans) ans.style.display = 'block';
    var revBtn = document.getElementById('mock-reveal-btn');
    if (revBtn) revBtn.style.display = 'none';
    var nextBtn = document.getElementById('mock-next-btn');
    if (nextBtn) nextBtn.style.display = 'inline-flex';
    var q = _mockQueue[_mockCurrentQ];
    // If FRQ and no result recorded yet, record it
    if (q && q.type !== 'mcq' && !_mockResults.find(function(r){ return r.qid === q.id; })) {
      _mockResults.push({ qid: q.id, type: q.type, selfScored: true });
    }
  }

  function mockNext() {
    _mockCurrentQ++;
    if (_mockCurrentQ >= _mockQueue.length) { _endMockExam(); return; }
    _renderMockExamQuestion();
  }

  function _endMockExam() {
    if (_mockTimer) clearInterval(_mockTimer);
    _mockExamActive = false;
    _inPractice = false;
    var mcqResults = _mockResults.filter(function(r){ return r.type === 'mcq' && r.correct !== undefined; });
    var mcqCorrect = mcqResults.filter(function(r){ return r.correct; }).length;
    var totalTime = _mockSection === 'mcq' ? 90*60 : _mockSection === 'frq' ? 105*60 : 195*60;
    var elapsed = totalTime - _mockTimeLeft;
    // Save session
    if (_session) {
      _session.duration = elapsed;
      _session.total = _mockResults.length;
      _session.correct = mcqCorrect;
      _session.mcqTotal = mcqResults.length;
      _session.results = _mockResults;
      Progress.saveSess(_session);
    }
    var ca = document.getElementById('content-area');
    var score = mcqResults.length > 0 ? Math.round(100 * mcqCorrect / mcqResults.length) : null;
    var sectionLabel = _mockSection === 'mcq' ? 'Section I (MCQ)' : _mockSection === 'frq' ? 'Section II (FRQ)' : 'Full Exam';
    ca.innerHTML = '<div class="prac-wrap"><div class="prac-card"><div class="prac-card-body prac-result">' +
      '<div style="font-size:14px;font-weight:600;color:var(--primary);margin-bottom:12px">Mock Exam Complete \u2014 ' + sectionLabel + '</div>' +
      (score !== null ? '<div class="prac-score">' + score + '%</div><div class="prac-score-label">MCQ accuracy (' + mcqCorrect + '/' + mcqResults.length + ')</div>' : '') +
      '<div style="margin-top:16px;font-size:13px;color:var(--t2)">' + _mockResults.length + ' questions completed in ' + _fmtTime(elapsed) + '</div>' +
      '<div style="margin-top:20px;display:flex;gap:10px;justify-content:center">' +
        '<button class="btn-primary" onclick="APP.setQView(\'mock\')">Try another mock</button>' +
        '<button class="btn-secondary" onclick="APP.showSection(\'questions\')">Back to questions</button>' +
      '</div></div></div></div>';
    _session = null;
  }

  function endMockExam() {
    if (confirm('End the mock exam early? Your progress will be saved.')) {
      _endMockExam();
    }
  }

  // --- Main render ---
  function render(view) {
    var subtitle = view || 'browse';
    if (subtitle === 'history') return renderHistory();
    if (subtitle === 'api') return renderAPIGenerator();
    if (subtitle === 'mock') return renderMockExam();
    return renderBrowse();
  }

  return {
    render: render, renderBrowse: renderBrowse, refreshBrowse: refreshBrowse,
    startPractice: startPractice, endPractice: endPractice,
    practiceReveal: practiceReveal, practiceNext: practiceNext, practicePrev: practicePrev,
    practiceMCQ: practiceMCQ, markConfidence: markConfidence,
    revealAnswer: revealAnswer, revealMCQ: revealMCQ,
    scrollToQuestion: scrollToQuestion,
    renderHistory: renderHistory, clearHistory: clearHistory,
    renderAPIGenerator: renderAPIGenerator, runAPIGen: runAPIGen,
    renderMockExam: renderMockExam, startMockExam: startMockExam,
    mockMCQ: mockMCQ, mockReveal: mockReveal, mockNext: mockNext, endMockExam: endMockExam,
    isInPractice: isInPractice, closeModal: closeModal
  };
})();
