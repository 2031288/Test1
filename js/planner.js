
// Planner — progress grid, revision priority, exam predictor
window.Planner = (function() {

  function _getUnderstandings() {
    return window.DB ? Object.values(window.DB.allUnderstandings || {}) : [];
  }

  // --- Render planner ---
  function render() {
    var DB = window.DB;
    if (!DB) return '<div class="empty"><h3>No data</h3></div>';
    var stats = Progress.getStats();
    var pct = stats.total ? Math.round(100 * stats.cf / stats.total) : 0;
    var html = '<div class="c-page">';
    html += '<h2 style="font-size:19px;font-weight:500;margin-bottom:14px">Revision Planner</h2>';

    // Stats
    var relevant = stats.total - stats.nr;
    var pctRel = relevant ? Math.round(100 * stats.cf / relevant) : 0;
    html += '<div class="plan-stats">' +
      '<div class="stat-card"><div class="stat-val">' + stats.cf + '</div><div class="stat-label">Confident (' + pctRel + '% of relevant)</div></div>' +
      '<div class="stat-card s-rv"><div class="stat-val">' + stats.rv + '</div><div class="stat-label">Reviewing</div></div>' +
      '<div class="stat-card"><div class="stat-val">' + stats.ns + '</div><div class="stat-label">Not started</div></div>' +
      '<div class="stat-card" style="opacity:.6"><div class="stat-val" style="color:var(--t3)">' + (stats.nr || 0) + '</div><div class="stat-label">Marked not relevant</div></div>' +
    '</div>';

    // Overall progress bar
    html += '<div style="margin-bottom:20px">' +
      '<div style="display:flex;justify-content:space-between;font-size:11px;color:var(--t3);margin-bottom:5px"><span>Overall mastery</span><span>' + pct + '%</span></div>' +
      '<div style="height:8px;background:var(--bg3);border-radius:4px;overflow:hidden">' +
        '<div style="height:100%;width:' + pct + '%;background:var(--primary);border-radius:4px;transition:width .5s"></div>' +
      '</div></div>';

    // Progress grid
    html += '<div style="font-size:12px;font-weight:600;color:var(--t1);margin-bottom:8px">Understanding status</div>';
    html += '<div style="display:flex;gap:10px;align-items:center;margin-bottom:10px;flex-wrap:wrap">' +
      '<div style="display:flex;align-items:center;gap:4px"><span class="pg-cell ns" style="width:16px;height:16px;display:inline-block;border-radius:3px;border:1.5px solid var(--brd2)"></span><span style="font-size:11px;color:var(--t3)">Not started</span></div>' +
      '<div style="display:flex;align-items:center;gap:4px"><span class="pg-cell rv" style="width:16px;height:16px;display:inline-block;border-radius:3px;border:1.5px solid var(--amber)"></span><span style="font-size:11px;color:var(--t3)">Reviewing</span></div>' +
      '<div style="display:flex;align-items:center;gap:4px"><span class="pg-cell cf" style="width:16px;height:16px;display:inline-block;border-radius:3px;border:1.5px solid var(--primary)"></span><span style="font-size:11px;color:var(--t3)">Confident</span></div>' +
    '</div>';
    html += '<div class="prog-grid">';
    var us = _getUnderstandings();
    us.forEach(function(u) {
      var s = Progress.getStatus(u.id);
      var _idm = u.id.match(/^([A-Z]+\d*)\.(.+)$/);
      var _sp = _idm ? _idm[1] : u.id.slice(0,2);
      var _sn = _idm ? _idm[2] : '?';
      var _cl = s === 'nr' ? '\u2212' :
        '<span style="display:block;font-size:6px;line-height:1.1">' + _sp + '</span>' +
        '<span style="display:block;font-size:7px;line-height:1.1;font-weight:600">' + _sn + '</span>';
      html += '<div class="pg-cell ' + s + '" title="' + u.code + ': ' + u.statement.slice(0,80) + '..." ' +
        'onclick="APP.jumpToUnderstanding(\'' + u.id + '\')">' + _cl + '</div>';
    });
    html += '</div>';

    // Section progress bars — by subtopic for each unit
    html += '<div style="font-size:12px;font-weight:600;color:var(--t1);margin:20px 0 10px">By subtopic</div>';
    var _secAbbrev = {
      unit1:'U1', unit2:'U2', unit3:'U3', unit4:'U4', unit5:'U5',
      unit6:'U6', unit7:'U7', unit8:'U8', unit9:'U9'
    };
    (DB.sections || []).forEach(function(sec) {
      var abbrev = _secAbbrev[sec.id] || sec.id;
      // Section header for the progress bars
      html += '<div style="font-size:10.5px;font-weight:700;color:var(--t3);text-transform:uppercase;' +
        'letter-spacing:.06em;margin:14px 0 6px;padding-bottom:3px;border-bottom:1px solid var(--brd)">' +
        abbrev + ' \u2014 ' + (sec.title || sec.id) + '</div>';
      (sec.subtopics || []).forEach(function(sub) {
        var ids = [];
        (sub.blocks || []).forEach(function(b) { ids = ids.concat(b.understandings || []); });
        if (!ids.length) return;
        var cf = ids.filter(function(uid){ return Progress.getStatus(uid) === 'cf'; }).length;
        var rv = ids.filter(function(uid){ return Progress.getStatus(uid) === 'rv'; }).length;
        var pct2 = Math.round(100 * cf / ids.length);
        var subLabel = abbrev + '.' + sub.code;
        html += '<div style="margin-bottom:8px">' +
          '<div style="display:flex;justify-content:space-between;font-size:11px;color:var(--t2);margin-bottom:3px">' +
            '<span><b>' + subLabel + '</b> ' + sub.title + '</span>' +
            '<span>' + cf + '/' + ids.length + ' confident</span>' +
          '</div>' +
          '<div style="height:5px;background:var(--bg3);border-radius:3px;overflow:hidden;display:flex">' +
            '<div style="width:' + pct2 + '%;background:var(--primary)"></div>' +
            '<div style="width:' + Math.round(100*rv/ids.length) + '%;background:var(--amber)"></div>' +
          '</div>' +
        '</div>';
      });
    });

    // Exam predictor
    html += _renderExamPredictor();

    // Session history summary
    var sessions = Progress.getSessions(5);
    if (sessions.length) {
      html += '<div style="font-size:12px;font-weight:600;color:var(--t1);margin:20px 0 10px">Recent practice sessions</div>';
      html += sessions.map(function(s) {
        var date = new Date(s.date).toLocaleDateString('en-GB', { day:'numeric', month:'short' });
        return '<div style="display:flex;gap:12px;font-size:12px;color:var(--t2);padding:6px 0;border-bottom:1px solid var(--brd3)">' +
          '<span style="color:var(--t3);flex-shrink:0">' + date + '</span>' +
          '<span>' + (s.total || 0) + ' questions</span>' +
          (s.mcqTotal > 0 ? '<span style="color:var(--primary)">' + Math.round(100*s.correct/s.mcqTotal) + '% MCQ</span>' : '') +
          '<span style="color:var(--t3)">' + (s.filter && s.filter.section !== 'all' ? s.filter.section : 'All') + '</span>' +
        '</div>';
      }).join('');
    }

    // Flagged key points for revision
    var kpFlags = Progress.getKeyPointFlags ? Progress.getKeyPointFlags() : {};
    var flaggedIds = Object.keys(kpFlags).filter(function(k) { return kpFlags[k] && kpFlags[k].flagged; });
    if (flaggedIds.length > 0) {
      html += '<div style="font-size:12px;font-weight:600;color:var(--t1);margin:20px 0 10px">&#9873; Flagged key points for revision (' + flaggedIds.length + ')</div>';
      html += '<div style="background:var(--amber-l);border:1px solid var(--amber);border-radius:var(--r-lg);padding:12px;margin-bottom:16px">';
      // Group by understanding
      var byUnderstanding = {};
      flaggedIds.forEach(function(kpId) {
        var parts = kpId.split('-KP');
        var uid = parts[0] || kpId;
        if (!byUnderstanding[uid]) byUnderstanding[uid] = [];
        byUnderstanding[uid].push(kpId);
      });
      Object.keys(byUnderstanding).forEach(function(uid) {
        var u = DB.allUnderstandings && DB.allUnderstandings[uid];
        var title = u ? (u.subtopicTitle || u.code || uid) : uid;
        var code = u ? u.code : uid;
        html += '<div style="margin-bottom:8px">' +
          '<div style="font-size:11px;font-weight:600;color:var(--amber-d);cursor:pointer" onclick="APP.jumpToUnderstanding(\'' + uid + '\')">' +
            code + ' — ' + title + ' (' + byUnderstanding[uid].length + ' flagged)' +
          '</div></div>';
      });
      html += '</div>';
    }

    html += '</div>';
    return html;
  }

  function _renderExamPredictor() {
    var DB = window.DB;
    var us = _getUnderstandings();
    // High-priority understandings: not started or reviewing, with many question connections
    var ns = us.filter(function(u){ var s = Progress.getStatus(u.id); return s !== 'cf' && s !== 'nr'; });
    // Sort: not-started first, then by exam weight (more connections = more important)
    ns.sort(function(a, b) {
      var aScore = (a.questionIds || []).length + (Progress.getStatus(a.id) === 'ns' ? 1 : 0);
      var bScore = (b.questionIds || []).length + (Progress.getStatus(b.id) === 'ns' ? 1 : 0);
      return bScore - aScore;
    });
    var top = ns.slice(0, 8);

    // AP Score prediction (1-5)
    var stats = Progress.getStats();
    var relevant = stats.total - stats.nr;
    var mastery = relevant ? (stats.cf / relevant) : 0;
    var apScore;
    if (mastery >= 0.85) apScore = 5;
    else if (mastery >= 0.70) apScore = 4;
    else if (mastery >= 0.50) apScore = 3;
    else if (mastery >= 0.30) apScore = 2;
    else apScore = 1;

    var html = '<div style="font-size:12px;font-weight:600;color:var(--t1);margin:20px 0 10px">Predicted AP Score</div>';
    html += '<div class="info-panel" style="margin-bottom:16px">' +
      '<div style="display:flex;align-items:center;gap:16px;margin-bottom:10px">' +
        '<div style="font-size:48px;font-weight:700;color:var(--primary)">' + apScore + '</div>' +
        '<div><div style="font-size:13px;font-weight:600;color:var(--t1)">out of 5</div>' +
          '<div style="font-size:11px;color:var(--t3)">' + Math.round(mastery * 100) + '% mastery of relevant content</div></div>' +
      '</div>' +
    '</div>';

    if (!top.length) {
      return html + '<div class="info-panel">' +
        '<div class="info-panel-title">All confident!</div>' +
        '<p style="font-size:12px;color:var(--t2)">You\'ve marked all understandings as confident. Time to do practice questions and consolidate your knowledge!</p></div>';
    }

    html += '<div style="font-size:12px;font-weight:600;color:var(--t1);margin:20px 0 10px">What could be on my exam?</div>' +
      '<div class="info-panel">' +
      '<div class="info-panel-title">Priority revision topics</div>' +
      '<p style="font-size:11.5px;color:var(--t2);margin-bottom:10px">Based on your progress, AP exam weighting, and question frequency:</p>' +
      '<ul class="pred-list">';
    top.forEach(function(u, i) {
      var pri = i < 2 ? 'pp-high' : i < 5 ? 'pp-med' : 'pp-low';
      var priLabel = i < 2 ? '!' : i < 5 ? '~' : '\u2713';
      var status = Progress.getStatus(u.id);
      html += '<li class="pred-item">' +
        '<div class="pred-pri ' + pri + '">' + priLabel + '</div>' +
        '<div><span style="font-family:var(--mono);font-size:10px;color:var(--t3)">' + u.code + '</span>' +
          ' <span class="badge" style="background:var(--amber-l);color:var(--amber)">' + (status==='ns'?'Not started':'Reviewing') + '</span>' +
          '<br><span style="color:var(--t1)">' + u.statement.slice(0,90) + (u.statement.length>90?'...':'') + '</span></div>' +
        '</li>';
    });
    html += '</ul>';
    html += '<div style="margin-top:12px;padding-top:10px;border-top:1px solid var(--brd)">' +
      '<div style="font-size:11px;font-weight:700;color:var(--t2);margin-bottom:6px;text-transform:uppercase;letter-spacing:.04em">AP Exam insight</div>' +
      '<ul style="list-style:none;font-size:12px;color:var(--t2);line-height:1.8">' +
        '<li>&#9632; Stoichiometry appears on virtually every FRQ</li>' +
        '<li>&#9632; Electron configurations frequently tested in MCQ</li>' +
        '<li>&#9632; Periodic trends are high-frequency MCQ topics</li>' +
        '<li>&#9632; Equilibrium and acid-base calculations are significant FRQ components (Units 7-8)</li>' +
      '</ul></div></div>';
    return html;
  }

  return { render: render };
})();
