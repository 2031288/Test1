
// Core app — routing, state, initialization, DB assembly
window.APP = (function() {
  var _section = 'content';
  var _view = 'textbook';
  var _questionView = 'browse';
  var _eqView = 'equations';
  var _currentSection = 'unit1';
  var _sidebarVisible = true;
  var _notebookView = 'notes';
  var _editingNoteId = null;

  // ─ MathJax typesetting helper ───────────────────────────
  function typesetMath() {
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise().catch(function(err) { console.warn('[MathJax]', err); });
    }
  }

  var _sectionShortNames = {
    unit1:'U1', unit2:'U2', unit3:'U3', unit4:'U4', unit5:'U5',
    unit6:'U6', unit7:'U7', unit8:'U8', unit9:'U9'
  };
  var _sectionLongNames = {
    unit1:'Unit 1', unit2:'Unit 2', unit3:'Unit 3', unit4:'Unit 4', unit5:'Unit 5',
    unit6:'Unit 6', unit7:'Unit 7', unit8:'Unit 8', unit9:'Unit 9'
  };

  // ─ DB assembly ──────────────────────────────────────────
  function _assembleDB() {
    var DB = { allUnderstandings: {}, allQuestions: [], allMisconceptions: [], sections: [], concepts: [] };

    // Gather sections from globals
    var sectionGlobals = [
      window.DB_U1_CONTENT, window.DB_U2_CONTENT, window.DB_U3_CONTENT,
      window.DB_U4_CONTENT, window.DB_U5_CONTENT, window.DB_U6_CONTENT,
      window.DB_U7_CONTENT, window.DB_U8_CONTENT, window.DB_U9_CONTENT
    ];
    sectionGlobals.filter(Boolean).forEach(function(sec) {
      DB.sections.push(sec.metadata || {});
      (sec.understandings || []).forEach(function(u) { DB.allUnderstandings[u.id] = u; });
    });

    // Gather questions
    var qGlobals = [window.DB_U1_QUESTIONS, window.DB_U2_QUESTIONS, window.DB_U3_QUESTIONS,
      window.DB_U4_QUESTIONS, window.DB_U5_QUESTIONS, window.DB_U6_QUESTIONS,
      window.DB_U7_QUESTIONS, window.DB_U8_QUESTIONS, window.DB_U9_QUESTIONS];
    qGlobals.filter(Boolean).forEach(function(qs) { DB.allQuestions = DB.allQuestions.concat(qs || []); });

    // Shared data
    if (window.DB_CONCEPTS) DB.concepts = window.DB_CONCEPTS;
    if (window.DB_MISCONCEPTIONS) DB.allMisconceptions = window.DB_MISCONCEPTIONS;

    window.DB = DB;
  }

  // ─ Routing ──────────────────────────────────────────────
  function _setSidebarForSection(sec) {
    var btnSidebar = document.getElementById('btn-sidebar');
    var sidebar = document.getElementById('sidebar');
    if (sec === 'content') {
      if (btnSidebar) btnSidebar.style.display = '';
      if (sidebar) {
        sidebar.classList.toggle('hidden', !_sidebarVisible);
        if (btnSidebar) btnSidebar.classList.toggle('active', _sidebarVisible);
      }
    } else {
      if (sidebar) _sidebarVisible = !sidebar.classList.contains('hidden');
      if (sidebar) sidebar.classList.add('hidden');
      if (btnSidebar) { btnSidebar.style.display = 'none'; btnSidebar.classList.remove('active'); }
    }
  }

  function showSection(sec) {
    _section = sec;
    UI.setActiveTab(sec);
    _setSidebarForSection(sec);
    var ca = document.getElementById('content-area');

    var subtabs = document.getElementById('subtabs');
    if (sec === 'content') {
      subtabs.style.display = 'flex';
      var secName = _sectionLongNames[_currentSection] || _currentSection;
      subtabs.innerHTML =
        '<span style="font-size:11px;font-weight:700;color:var(--primary-d);background:var(--primary-l);' +
        'padding:2px 8px;border-radius:4px;margin-right:8px;cursor:pointer" ' +
        'onclick="APP.showSection(\'content\')">\u25C0 ' + secName + '</span>' +
        '<button class="sub-tab ' + (_view==='textbook'?'active':'') + '" onclick="APP.setView(\'textbook\')">Textbook</button>' +
        '<button class="sub-tab ' + (_view==='studyguide'?'active':'') + '" onclick="APP.setView(\'studyguide\')">Study Guide</button>' +
        '<button class="sub-tab ' + (_view==='concept'?'active':'') + '" onclick="APP.setView(\'concept\')">Concept</button>' +
        '<div class="sub-tab-divider"></div>' +
        '<button class="sub-tab ' + (_view==='diagrams'?'active':'') + '" onclick="APP.setView(\'diagrams\')">Diagrams</button>' +
        '<button class="sub-tab ' + (_view==='labs'?'active':'') + '" onclick="APP.setView(\'labs\')">Labs</button>';
      UI.buildSidebar(_currentSection);
      _renderContent(ca);
      setTimeout(typesetMath, 50);
    } else if (sec === 'questions') {
      subtabs.style.display = 'flex';
      subtabs.innerHTML = '<span id="subtab-label" style="font-size:11px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:.06em;margin-right:6px">Mode:</span>' +
        '<button class="sub-tab ' + (_questionView==='browse'?'active':'') + '" onclick="APP.setQView(\'browse\')">Browse</button>' +
        '<button class="sub-tab ' + (_questionView==='practice'?'active':'') + '" onclick="APP.setQView(\'practice\')">Practice</button>' +
        '<button class="sub-tab ' + (_questionView==='history'?'active':'') + '" onclick="APP.setQView(\'history\')">History</button>' +
        '<button class="sub-tab ' + (_questionView==='mock'?'active':'') + '" onclick="APP.setQView(\'mock\')">Mock Exam</button>' +
        '<button class="sub-tab ' + (_questionView==='api'?'active':'') + '" onclick="APP.setQView(\'api\')">&#10024; AI Generate</button>';
      document.getElementById('sidebar').innerHTML = '';
      ca.innerHTML = Questions.render(_questionView);
      setTimeout(typesetMath, 50);
    } else if (sec === 'misconceptions') {
      subtabs.style.display = 'none';
      document.getElementById('sidebar').innerHTML = '';
      ca.innerHTML = _renderMisconceptions();
    } else if (sec === 'planner') {
      subtabs.style.display = 'none';
      document.getElementById('sidebar').innerHTML = '';
      ca.innerHTML = Planner.render();
    } else if (sec === 'equations') {
      subtabs.style.display = 'flex';
      subtabs.innerHTML = '<span id="subtab-label" style="font-size:11px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:.06em;margin-right:6px">View:</span>' +
        '<button class="sub-tab ' + (_eqView==='equations'?'active':'') + '" onclick="APP.setEqView(\'equations\')">Equations</button>' +
        '<button class="sub-tab ' + (_eqView==='variables'?'active':'') + '" onclick="APP.setEqView(\'variables\')">Variables & Symbols</button>';
      document.getElementById('sidebar').innerHTML = '';
      if (_eqView === 'variables') {
        ca.innerHTML = _renderVariables();
      } else {
        ca.innerHTML = _renderEquations();
      }
      setTimeout(typesetMath, 50);
    } else if (sec === 'examtips') {
      subtabs.style.display = 'none';
      document.getElementById('sidebar').innerHTML = '';
      ca.innerHTML = _renderExamTips();
      setTimeout(typesetMath, 50);
    } else if (sec === 'notebook') {
      subtabs.style.display = 'flex';
      var nbView = _notebookView || 'notes';
      subtabs.innerHTML = '<span id="subtab-label" style="font-size:11px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:.06em;margin-right:6px">View:</span>' +
        '<button class="sub-tab ' + (nbView==='notes'?'active':'') + '" onclick="APP.setNotebookView(\'notes\')">My Notes</button>' +
        '<button class="sub-tab ' + (nbView==='comments'?'active':'') + '" onclick="APP.setNotebookView(\'comments\')">Comments</button>';
      document.getElementById('sidebar').innerHTML = '';
      ca.innerHTML = _renderNotebook(nbView);
    } else if (sec === 'settings') {
      subtabs.style.display = 'none';
      document.getElementById('sidebar').innerHTML = '';
      ca.innerHTML = _renderSettings();
    }
  }

  function setView(view) {
    _view = view;
    showSection('content');
  }

  function setQView(view) {
    _questionView = view;
    showSection('questions');
    if (view === 'practice') { Questions.startPractice(); }
  }

  function setEqView(view) {
    _eqView = view;
    showSection('equations');
  }

  function _renderContent(ca) {
    if (_view === 'concept') {
      ca.innerHTML = Content.renderConceptView();
    } else if (_view === 'labs') {
      ca.innerHTML = _renderLabs();
    } else if (_view === 'diagrams') {
      ca.innerHTML = Content.renderDiagramView(_currentSection);
    } else {
      ca.innerHTML = Content.renderTextbook(_currentSection);
    }
  }

  // ─ Navigation helpers ────────────────────────────────────
  function scrollToUnderstanding(uid) {
    var u = window.DB && window.DB.allUnderstandings && window.DB.allUnderstandings[uid];
    if (u && u.section && u.section !== _currentSection) {
      _currentSection = u.section;
      _view = 'textbook';
    }
    showSection('content');
    setTimeout(function() {
      var el = document.getElementById(uid);
      if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); UI.setSidebarActive(uid); }
    }, 200);
  }

  function jumpToUnderstanding(uid) {
    var u = window.DB && window.DB.allUnderstandings && window.DB.allUnderstandings[uid];
    if (u && u.section) _currentSection = u.section;
    _view = 'textbook';
    showSection('content');
    setTimeout(function() {
      var el = document.getElementById(uid);
      if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); UI.setSidebarActive(uid); }
    }, 200);
  }

  function navigateToSection(secId) { _currentSection = secId; _view = 'textbook'; showSection('content'); }

  // ─ Misconceptions render ─────────────────────────────────
  function _renderMisconceptions() {
    var DB = window.DB;
    var miscs = DB && DB.allMisconceptions || [];
    if (!miscs.length) return '<div class="empty"><h3>No misconceptions loaded</h3></div>';
    var html = '<div class="misc-filters">' +
      '<span style="font-size:11px;color:var(--t3)">Filter:</span>' +
      '<select class="q-fsel" id="misc-filt-section" onchange="APP.filterMisconceptions()">' +
        '<option value="all">All units</option>' +
        '<option value="unit1">Unit 1</option>' +
        '<option value="unit2">Unit 2</option>' +
        '<option value="unit3">Unit 3</option>' +
        '<option value="unit4">Unit 4</option>' +
        '<option value="unit5">Unit 5</option>' +
        '<option value="unit6">Unit 6</option>' +
        '<option value="unit7">Unit 7</option>' +
        '<option value="unit8">Unit 8</option>' +
        '<option value="unit9">Unit 9</option>' +
      '</select>' +
      '<select class="q-fsel" id="misc-filt-rel" onchange="APP.filterMisconceptions()">' +
        '<option value="all">All relevance</option>' +
        '<option value="high">High</option>' +
        '<option value="med">Medium</option>' +
        '<option value="low">Low</option>' +
      '</select>' +
    '</div>';
    html += '<div class="misc-grid" id="misc-grid">';
    html += _miscCards(miscs);
    html += '</div>';
    return html;
  }

  function _miscCards(miscs) {
    return miscs.map(function(m) {
      var relClass = m.examRelevance === 'high' ? 'rel-high' : m.examRelevance === 'low' ? 'rel-low' : 'rel-med';
      var relLabel = (m.examRelevance || 'med').charAt(0).toUpperCase() + (m.examRelevance || 'med').slice(1) + ' priority';
      return '<div class="misc-card">' +
        '<div class="misc-head">' +
          '<span class="misc-icon">\u26a0\ufe0f</span>' +
          '<span class="misc-wrong">' + m.misconception + '</span>' +
          '<span class="rel-badge ' + relClass + '">' + relLabel + '</span>' +
        '</div>' +
        '<div class="misc-body">' +
          '<div class="misc-correction"><strong>Correction:</strong> ' + m.correction + '</div>' +
          (m.why ? '<div class="misc-why">Why students think this: ' + m.why + '</div>' : '') +
          '<div class="misc-code">' + (m.understandingId || '') + '</div>' +
        '</div></div>';
    }).join('');
  }

  function filterMisconceptions() {
    var DB = window.DB;
    var miscs = DB && DB.allMisconceptions || [];
    var sec = document.getElementById('misc-filt-section') && document.getElementById('misc-filt-section').value || 'all';
    var rel = document.getElementById('misc-filt-rel') && document.getElementById('misc-filt-rel').value || 'all';
    var filtered = miscs.filter(function(m) {
      if (sec !== 'all' && m.section !== sec) return false;
      if (rel !== 'all' && m.examRelevance !== rel) return false;
      return true;
    });
    var grid = document.getElementById('misc-grid');
    if (grid) grid.innerHTML = _miscCards(filtered);
  }

  // ─ Labs render ───────────────────────────────────────────
  function _renderLabs() {
    var DB = window.DB;
    var labKey = _currentSection.replace('unit','u') + 'labs';
    var labs = DB && DB[labKey];
    var secTitle = _sectionLongNames[_currentSection] || _currentSection;
    if (!labs || !labs.length) return '<div class="c-page"><h2>' + secTitle + ' \u2014 Labs</h2><div class="empty"><h3>No labs available for this unit yet.</h3><p>Labs are fully built for Unit 1. Check back as content is added to other units.</p></div></div>';
    var html = '<div class="c-page"><h2>' + secTitle + ' \u2014 Experimental Activities</h2>' +
      '<p class="guiding">Inquiry-based labs aligned to ' + secTitle + ' understandings. Each lab targets specific skills and AP exam preparation.</p>';
    labs.forEach(function(lab, i) {
      html += '<div class="lab-card">' +
        '<div class="lab-head" onclick="this.nextElementSibling.classList.toggle(\'closed\')">' +
          '<div>' +
            '<div class="lab-title">' + lab.title + '</div>' +
            '<div class="lab-meta">' + (lab.type || '') + ' \u00b7 ' + (lab.duration || '') + ' \u00b7 ' + (lab.linkedUnderstandings || []).join(', ') + '</div>' +
          '</div>' +
          '<span style="font-size:11px;color:var(--t3)">&#9660;</span>' +
        '</div>' +
        '<div class="lab-body">' +
          (lab.aim ? '<div class="lab-st">Aim</div><p style="font-size:12px;color:var(--t2);line-height:1.6">' + lab.aim + '</p>' : '') +
          (lab.safetyPoints && lab.safetyPoints.length ? '<div class="lab-st">Safety</div><ul class="safety-list">' + lab.safetyPoints.map(function(s){ return '<li>' + s + '</li>'; }).join('') + '</ul>' : '') +
          (lab.skills && lab.skills.length ? '<div class="lab-st">Skills developed</div><div class="lab-skills">' + lab.skills.map(function(s){ return '<span class="skill-chip">' + s + '</span>'; }).join('') + '</div>' : '') +
          (lab.method && lab.method.length ? '<div class="lab-st">Method (abbreviated)</div><ol class="method-ol">' + lab.method.map(function(s){ return '<li>' + s + '</li>'; }).join('') + '</ol>' : '') +
          (lab.expectedResults ? '<div class="lab-st">Expected results</div><p style="font-size:12px;color:var(--t2);line-height:1.6">' + lab.expectedResults + '</p>' : '') +
          (lab.discussionPoints && lab.discussionPoints.length ? '<div class="lab-st">Discussion / Evaluation</div><ul class="q-list">' + lab.discussionPoints.map(function(s){ return '<li>' + s + '</li>'; }).join('') + '</ul>' : '') +
        '</div></div>';
    });
    html += '</div>';
    return html;
  }

  // ─ Equations render ──────────────────────────────────────
  function _renderEquations() {
    return '<div class="c-page">' +
      '<h2>AP Chemistry Equation Sheet</h2>' +
      '<p class="guiding">Key formulae for the AP Chemistry exam. These equations and constants are provided on the AP exam reference sheet \u2014 learn to use them efficiently.</p>' +

      '<div class="eq-section"><div class="eq-section-title">Atomic Structure &amp; General (Units 1\u20132)</div>' +
      '<table class="eq-table"><thead><tr><th>Formula</th><th>Name</th><th>Symbols / units</th><th>When to use</th></tr></thead><tbody>' +
      '<tr><td class="eq-f">n = m / M</td><td class="eq-name">Moles from mass</td><td class="eq-units">n (mol), m (g), M (g mol<sup>\u22121</sup>)</td><td class="eq-when">Finding moles from a given mass</td></tr>' +
      '<tr><td class="eq-f">c = n / V</td><td class="eq-name">Molarity</td><td class="eq-units">c (mol L<sup>\u22121</sup>), n (mol), V (L)</td><td class="eq-when">Solution concentration calculations</td></tr>' +
      '<tr><td class="eq-f">M\u2081V\u2081 = M\u2082V\u2082</td><td class="eq-name">Dilution</td><td class="eq-units">M (mol/L), V (L)</td><td class="eq-when">Dilution of solutions</td></tr>' +
      '<tr><td class="eq-f">E = hf = hc/\u03bb</td><td class="eq-name">Photon energy</td><td class="eq-units">h = 6.626 \u00d7 10<sup>\u221234</sup> J\u00b7s, c = 3.00 \u00d7 10<sup>8</sup> m/s</td><td class="eq-when">Energy of electromagnetic radiation</td></tr>' +
      '<tr><td class="eq-f">c = \u03bb\u03bd</td><td class="eq-name">Speed of light</td><td class="eq-units">c (m/s), \u03bb (m), \u03bd (Hz)</td><td class="eq-when">Relating wavelength and frequency</td></tr>' +
      '<tr><td class="eq-f">\u03bb = h / mv</td><td class="eq-name">de Broglie wavelength</td><td class="eq-units">m = mass (kg), v = velocity (m/s)</td><td class="eq-when">Wave-particle duality of matter</td></tr>' +
      '<tr><td class="eq-f">E<sub>photon</sub> = \u03a6 + KE<sub>electron</sub></td><td class="eq-name">Photoelectric effect</td><td class="eq-units">\u03a6 = work function (J), KE (J)</td><td class="eq-when">Photon ejects electron from metal surface</td></tr>' +
      '<tr><td class="eq-f">% composition = (mass of element / molar mass) \u00d7 100</td><td class="eq-name">Percent composition</td><td class="eq-units">dimensionless (%)</td><td class="eq-when">Elemental composition of a compound</td></tr>' +
      '</tbody></table></div>' +

      '<div class="eq-section"><div class="eq-section-title">Gases, Liquids &amp; Solutions (Unit 3)</div>' +
      '<table class="eq-table"><thead><tr><th>Formula</th><th>Name</th><th>Symbols / units</th><th>When to use</th></tr></thead><tbody>' +
      '<tr><td class="eq-f">PV = nRT</td><td class="eq-name">Ideal gas law</td><td class="eq-units">P (atm), V (L), n (mol), R = 0.08206 L\u00b7atm/(mol\u00b7K), T (K)</td><td class="eq-when">Any ideal gas calculation</td></tr>' +
      '<tr><td class="eq-f">P\u2081V\u2081/T\u2081 = P\u2082V\u2082/T\u2082</td><td class="eq-name">Combined gas law</td><td class="eq-units">Same units throughout</td><td class="eq-when">Changing conditions for fixed amount of gas</td></tr>' +
      '<tr><td class="eq-f">P<sub>total</sub> = P\u2081 + P\u2082 + P\u2083 + \u2026</td><td class="eq-name">Dalton\'s law</td><td class="eq-units">P (atm or kPa)</td><td class="eq-when">Total pressure from partial pressures</td></tr>' +
      '<tr><td class="eq-f">\u03c7<sub>A</sub> = n<sub>A</sub> / n<sub>total</sub> = P<sub>A</sub> / P<sub>total</sub></td><td class="eq-name">Mole fraction</td><td class="eq-units">dimensionless</td><td class="eq-when">Relates moles and partial pressures</td></tr>' +
      '<tr><td class="eq-f">KE<sub>avg</sub> = (3/2)RT</td><td class="eq-name">KMT average KE</td><td class="eq-units">R = 8.314 J/(mol\u00b7K), T (K)</td><td class="eq-when">Average kinetic energy per mole of gas</td></tr>' +
      '<tr><td class="eq-f">u<sub>rms</sub> = \u221a(3RT / M)</td><td class="eq-name">Root mean square speed</td><td class="eq-units">M (kg/mol), T (K)</td><td class="eq-when">Speed of gas molecules</td></tr>' +
      '<tr><td class="eq-f">rate\u2081/rate\u2082 = \u221a(M\u2082/M\u2081)</td><td class="eq-name">Graham\'s law of effusion</td><td class="eq-units">M (g/mol)</td><td class="eq-when">Comparing effusion/diffusion rates</td></tr>' +
      '<tr><td class="eq-f">(P + an\u00b2/V\u00b2)(V \u2212 nb) = nRT</td><td class="eq-name">van der Waals equation</td><td class="eq-units">a, b = gas-specific constants</td><td class="eq-when">Non-ideal gas behavior (real gases)</td></tr>' +
      '<tr><td class="eq-f">KE<sub>avg</sub> = (3/2)k<sub>B</sub>T</td><td class="eq-name">KMT avg KE (per molecule)</td><td class="eq-units">k<sub>B</sub> = 1.381 \u00d7 10<sup>\u221223</sup> J/K, T (K)</td><td class="eq-when">Average kinetic energy per molecule of gas</td></tr>' +
      '<tr><td class="eq-f">A = \u03b5bc</td><td class="eq-name">Beer-Lambert law</td><td class="eq-units">A = absorbance, \u03b5 = molar absorptivity (L mol<sup>\u22121</sup> cm<sup>\u22121</sup>), b = path length (cm), c = concentration (mol/L)</td><td class="eq-when">Spectrophotometry; relating absorbance to concentration</td></tr>' +
      '</tbody></table></div>' +

      '<div class="eq-section"><div class="eq-section-title">Stoichiometry &amp; Reactions (Unit 4)</div>' +
      '<table class="eq-table"><thead><tr><th>Formula</th><th>Name</th><th>Notes</th></tr></thead><tbody>' +
      '<tr><td class="eq-f">% yield = (actual / theoretical) \u00d7 100</td><td class="eq-name">Percent yield</td><td class="eq-when">Actual yield from experiment vs calculated maximum</td></tr>' +
      '<tr><td class="eq-f">Theoretical yield from limiting reagent</td><td class="eq-name">Limiting reagent</td><td class="eq-when">Reagent with smallest moles/coefficient ratio is limiting</td></tr>' +
      '<tr><td class="eq-f">M\u2081V\u2081 = M\u2082V\u2082 (at equivalence)</td><td class="eq-name">Titration</td><td class="eq-when">At equivalence point; adjust for stoichiometry</td></tr>' +
      '<tr><td class="eq-f">Oxidation # rules</td><td class="eq-name">Oxidation states</td><td class="eq-when">Sum of oxidation states = charge of species</td></tr>' +
      '</tbody></table></div>' +

      '<div class="eq-section"><div class="eq-section-title">Kinetics (Unit 5)</div>' +
      '<table class="eq-table"><thead><tr><th>Formula</th><th>Name</th><th>Notes</th></tr></thead><tbody>' +
      '<tr><td class="eq-f">rate = k[A]<sup>m</sup>[B]<sup>n</sup></td><td class="eq-name">Rate law</td><td class="eq-when">k = rate constant; m, n determined experimentally</td></tr>' +
      '<tr><td class="eq-f">ln[A]<sub>t</sub> = \u2212kt + ln[A]\u2080</td><td class="eq-name">1st-order integrated</td><td class="eq-when">Plot ln[A] vs t \u2192 straight line, slope = \u2212k</td></tr>' +
      '<tr><td class="eq-f">1/[A]<sub>t</sub> = kt + 1/[A]\u2080</td><td class="eq-name">2nd-order integrated</td><td class="eq-when">Plot 1/[A] vs t \u2192 straight line, slope = k</td></tr>' +
      '<tr><td class="eq-f">[A]<sub>t</sub> = \u2212kt + [A]\u2080</td><td class="eq-name">Zero-order integrated</td><td class="eq-when">Plot [A] vs t \u2192 straight line, slope = \u2212k</td></tr>' +
      '<tr><td class="eq-f">t<sub>\u00bd</sub> = 0.693 / k</td><td class="eq-name">1st-order half-life</td><td class="eq-when">Independent of initial concentration</td></tr>' +
      '<tr><td class="eq-f">t<sub>\u00bd</sub> = 1 / (k[A]\u2080)</td><td class="eq-name">2nd-order half-life</td><td class="eq-when">Depends on initial concentration</td></tr>' +
      '<tr><td class="eq-f">k = Ae<sup>\u2212E<sub>a</sub>/RT</sup></td><td class="eq-name">Arrhenius equation</td><td class="eq-when">Relates rate constant to temperature</td></tr>' +
      '<tr><td class="eq-f">ln(k\u2082/k\u2081) = (E<sub>a</sub>/R)(1/T\u2081 \u2212 1/T\u2082)</td><td class="eq-name">Two-point Arrhenius</td><td class="eq-when">Compare rate constants at two temperatures</td></tr>' +
      '</tbody></table></div>' +

      '<div class="eq-section"><div class="eq-section-title">Thermodynamics (Units 6 &amp; 9)</div>' +
      '<table class="eq-table"><thead><tr><th>Formula</th><th>Name</th><th>Notes</th></tr></thead><tbody>' +
      '<tr><td class="eq-f">q = mc\u0394T</td><td class="eq-name">Heat (calorimetry)</td><td class="eq-when">q (J), m (g), c (J g<sup>\u22121</sup> \u00b0C<sup>\u22121</sup>), \u0394T (\u00b0C or K)</td></tr>' +
      '<tr><td class="eq-f">\u0394H\u00b0<sub>rxn</sub> = \u03a3\u0394H\u00b0<sub>f</sub>(prod) \u2212 \u03a3\u0394H\u00b0<sub>f</sub>(react)</td><td class="eq-name">Hess\'s law</td><td class="eq-when">Enthalpy from standard enthalpies of formation</td></tr>' +
      '<tr><td class="eq-f">\u0394H = \u03a3D(broken) \u2212 \u03a3D(formed)</td><td class="eq-name">Bond enthalpy</td><td class="eq-when">Estimate \u0394H from average bond energies</td></tr>' +
      '<tr><td class="eq-f">\u0394G\u00b0 = \u0394H\u00b0 \u2212 T\u0394S\u00b0</td><td class="eq-name">Gibbs free energy</td><td class="eq-when">Spontaneous when \u0394G < 0; T in K</td></tr>' +
      '<tr><td class="eq-f">\u0394G\u00b0 = \u2212RT ln K</td><td class="eq-name">Free energy &amp; K</td><td class="eq-when">Relates standard free energy to equilibrium constant</td></tr>' +
      '<tr><td class="eq-f">\u0394G = \u0394G\u00b0 + RT ln Q</td><td class="eq-name">Non-standard \u0394G</td><td class="eq-when">Predict direction of reaction at non-standard conditions</td></tr>' +
      '<tr><td class="eq-f">\u0394S\u00b0 = \u03a3S\u00b0(prod) \u2212 \u03a3S\u00b0(react)</td><td class="eq-name">Entropy change</td><td class="eq-when">Standard molar entropy calculation</td></tr>' +
      '</tbody></table></div>' +

      '<div class="eq-section"><div class="eq-section-title">Equilibrium (Unit 7)</div>' +
      '<table class="eq-table"><thead><tr><th>Formula</th><th>Name</th><th>Notes</th></tr></thead><tbody>' +
      '<tr><td class="eq-f">K<sub>c</sub> = [products]<sup>coeff</sup> / [reactants]<sup>coeff</sup></td><td class="eq-name">Equilibrium expression</td><td class="eq-when">Omit pure solids and liquids from expression</td></tr>' +
      '<tr><td class="eq-f">K<sub>p</sub> = K<sub>c</sub>(RT)<sup>\u0394n</sup></td><td class="eq-name">Pressure equilibrium</td><td class="eq-when">\u0394n = moles gas products \u2212 moles gas reactants</td></tr>' +
      '<tr><td class="eq-f">Q vs K</td><td class="eq-name">Reaction quotient</td><td class="eq-when">Q < K: forward; Q > K: reverse; Q = K: at equilibrium</td></tr>' +
      '<tr><td class="eq-f">K<sub>sp</sub> = [cation]<sup>m</sup>[anion]<sup>n</sup></td><td class="eq-name">Solubility product</td><td class="eq-when">Dissolution of sparingly soluble salts</td></tr>' +
      '</tbody></table></div>' +

      '<div class="eq-section"><div class="eq-section-title">Acids &amp; Bases (Unit 8)</div>' +
      '<table class="eq-table"><thead><tr><th>Formula</th><th>Name</th><th>Notes</th></tr></thead><tbody>' +
      '<tr><td class="eq-f">pH = \u2212log[H<sup>+</sup>]</td><td class="eq-name">pH</td><td class="eq-when">[H<sup>+</sup>] = 10<sup>\u2212pH</sup></td></tr>' +
      '<tr><td class="eq-f">pOH = \u2212log[OH<sup>\u2212</sup>]</td><td class="eq-name">pOH</td><td class="eq-when">pH + pOH = 14 at 25\u00b0C</td></tr>' +
      '<tr><td class="eq-f">K<sub>w</sub> = [H<sup>+</sup>][OH<sup>\u2212</sup>] = 1.0 \u00d7 10<sup>\u221214</sup></td><td class="eq-name">Water autoionization</td><td class="eq-when">At 25\u00b0C</td></tr>' +
      '<tr><td class="eq-f">K<sub>a</sub> = [H<sup>+</sup>][A<sup>\u2212</sup>] / [HA]</td><td class="eq-name">Weak acid K<sub>a</sub></td><td class="eq-when">Acid dissociation constant</td></tr>' +
      '<tr><td class="eq-f">K<sub>b</sub> = [BH<sup>+</sup>][OH<sup>\u2212</sup>] / [B]</td><td class="eq-name">Weak base K<sub>b</sub></td><td class="eq-when">Base dissociation constant</td></tr>' +
      '<tr><td class="eq-f">K<sub>a</sub> \u00d7 K<sub>b</sub> = K<sub>w</sub></td><td class="eq-name">Conjugate pair relationship</td><td class="eq-when">For conjugate acid-base pair</td></tr>' +
      '<tr><td class="eq-f">pK<sub>a</sub> = \u2212log K<sub>a</sub></td><td class="eq-name">pK<sub>a</sub></td><td class="eq-when">Smaller pK<sub>a</sub> = stronger acid</td></tr>' +
      '<tr><td class="eq-f">pK<sub>b</sub> = \u2212log K<sub>b</sub></td><td class="eq-name">pK<sub>b</sub></td><td class="eq-when">Smaller pK<sub>b</sub> = stronger base</td></tr>' +
      '<tr><td class="eq-f">pH = pK<sub>a</sub> + log([A<sup>\u2212</sup>]/[HA])</td><td class="eq-name">Henderson-Hasselbalch</td><td class="eq-when">Buffer pH calculations</td></tr>' +
      '</tbody></table></div>' +

      '<div class="eq-section"><div class="eq-section-title">Electrochemistry (Unit 9)</div>' +
      '<table class="eq-table"><thead><tr><th>Formula</th><th>Name</th><th>Notes</th></tr></thead><tbody>' +
      '<tr><td class="eq-f">E\u00b0<sub>cell</sub> = E\u00b0<sub>cathode</sub> \u2212 E\u00b0<sub>anode</sub></td><td class="eq-name">Standard cell potential</td><td class="eq-when">From standard reduction potentials</td></tr>' +
      '<tr><td class="eq-f">E = E\u00b0 \u2212 (RT/nF) ln Q</td><td class="eq-name">Nernst equation</td><td class="eq-when">F = 96485 C/mol; or E = E\u00b0 \u2212 (0.0592/n) log Q at 25\u00b0C</td></tr>' +
      '<tr><td class="eq-f">\u0394G\u00b0 = \u2212nFE\u00b0</td><td class="eq-name">\u0394G\u00b0 and E\u00b0</td><td class="eq-when">Relates free energy to standard cell potential</td></tr>' +
      '<tr><td class="eq-f">ln K = nFE\u00b0 / (RT)</td><td class="eq-name">K and E\u00b0</td><td class="eq-when">Equilibrium constant from standard cell potential</td></tr>' +
      '<tr><td class="eq-f">I = q / t</td><td class="eq-name">Current</td><td class="eq-when">I (A), q (C), t (s); for electrolysis calculations</td></tr>' +
      '</tbody></table></div>' +

      '<div class="eq-section"><div class="eq-section-title">Important Constants</div>' +
      '<table class="eq-table"><thead><tr><th>Constant</th><th>Value</th></tr></thead><tbody>' +
      '<tr><td class="eq-name">Gas constant (R)</td><td class="eq-when">8.314 J/(mol\u00b7K) or 0.08206 L\u00b7atm/(mol\u00b7K)</td></tr>' +
      '<tr><td class="eq-name">Avogadro\'s number (N<sub>A</sub>)</td><td class="eq-when">6.022 \u00d7 10<sup>23</sup> mol<sup>\u22121</sup></td></tr>' +
      '<tr><td class="eq-name">Planck\'s constant (h)</td><td class="eq-when">6.626 \u00d7 10<sup>\u221234</sup> J\u00b7s</td></tr>' +
      '<tr><td class="eq-name">Speed of light (c)</td><td class="eq-when">3.00 \u00d7 10<sup>8</sup> m/s</td></tr>' +
      '<tr><td class="eq-name">Faraday\'s constant (F)</td><td class="eq-when">96485 C/mol e<sup>\u2212</sup></td></tr>' +
      '<tr><td class="eq-name">Boltzmann constant (k<sub>B</sub>)</td><td class="eq-when">1.381 \u00d7 10<sup>\u221223</sup> J/K</td></tr>' +
      '<tr><td class="eq-name">Standard pressure</td><td class="eq-when">1 atm = 101.325 kPa = 760 mmHg</td></tr>' +
      '<tr><td class="eq-name">Specific heat of water (c)</td><td class="eq-when">4.184 J/(g\u00b7\u00b0C)</td></tr>' +
      '</tbody></table></div>' +
    '</div>';
  }

  // ─ Symbol formatting helper ──────────────────────────────
  function _formatSymbol(sym) {
    // Convert underscore notation to HTML subscripts: N_A -> N<sub>A</sub>
    // Convert ^ notation to superscripts: E° -> E°
    return sym.replace(/([A-Za-zΔδλνε])_\{([^}]+)\}/g, '$1<sub>$2</sub>')
              .replace(/([A-Za-zΔδλνε])_([A-Za-z0-9])/g, '$1<sub>$2</sub>')
              .replace(/\^{([^}]+)}/g, '<sup>$1</sup>')
              .replace(/\^([A-Za-z0-9°])/g, '<sup>$1</sup>');
  }

  // ─ Variables & Symbols render ────────────────────────────
  function _renderVariables() {
    var vars = window.DB_VARIABLES;
    if (!vars || !vars.length) return '<div class="empty"><h3>No variables data loaded</h3></div>';
    var html = '<div class="c-page"><h2>Variables & Symbols</h2>' +
      '<p class="guiding">Key variables, constants, and symbols used in AP Chemistry. Values shown are those provided on the AP exam reference sheet or commonly needed.</p>';
    vars.forEach(function(cat) {
      html += '<div class="eq-section"><div class="eq-section-title">' + cat.category + '</div>' +
        '<table class="eq-table"><thead><tr><th>Symbol</th><th>Name</th><th>Value</th><th>Unit</th><th>Notes</th></tr></thead><tbody>';
      (cat.items || []).forEach(function(v) {
        html += '<tr>' +
          '<td class="eq-f" style="font-size:14px">' + v.symbol + '</td>' +
          '<td class="eq-name">' + v.name + '</td>' +
          '<td class="eq-when">' + (v.value || '\u2014') + '</td>' +
          '<td class="eq-units">' + (v.unit || '\u2014') + '</td>' +
          '<td class="eq-when" style="font-size:11px">' + (v.notes || '') + '</td>' +
          '</tr>';
      });
      html += '</tbody></table></div>';
    });
    html += '</div>';
    return html;
  }

  function setNotebookView(view) { _notebookView = view; showSection('notebook'); }

  // ─ Notebook render ──────────────────────────────────────
  function _renderNotebook(view) {
    if (view === 'comments') {
      return _renderComments();
    }
    return _renderNotes();
  }

  function _renderNotes() {
    var notes = Progress.getNotebook();
    var html = '<div class="c-page">';
    html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">' +
      '<h2 style="font-size:19px;font-weight:500;margin:0">My Notes</h2>' +
      '<button class="btn-primary" onclick="APP.createNote()" style="font-size:12px">+ New Note</button>' +
    '</div>';
    
    html += '<div style="margin-bottom:16px">' +
      '<input type="text" id="note-search" placeholder="Search notes..." ' +
      'oninput="APP.searchNotes(this.value)" ' +
      'style="width:100%;padding:10px 12px;border:1px solid var(--brd2);border-radius:var(--r-lg);font-size:13px;background:var(--bg2)">' +
    '</div>';
    
    html += '<div id="notes-list">';
    if (notes.length === 0) {
      html += '<div class="info-panel" style="text-align:center;padding:40px">' +
        '<div style="font-size:32px;margin-bottom:12px">📓</div>' +
        '<div style="font-size:14px;font-weight:600;color:var(--t1);margin-bottom:6px">No notes yet</div>' +
        '<div style="font-size:12px;color:var(--t3)">Click "New Note" to create your first note</div>' +
      '</div>';
    } else {
      html += _renderNotesList(notes);
    }
    html += '</div></div>';
    return html;
  }

  function _renderNotesList(notes) {
    var html = '';
    notes.forEach(function(note) {
      var date = new Date(note.updated).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
      var preview = note.content.slice(0, 120).replace(/</g, '&lt;').replace(/\n/g, ' ');
      if (note.content.length > 120) preview += '...';
      var tagsHtml = note.tags.map(function(t) { return '<span class="note-tag">' + t + '</span>'; }).join('');
      
      html += '<div class="note-card" onclick="APP.editNote(\'' + note.id + '\')">' +
        '<div class="note-card-header">' +
          '<div class="note-card-title">' + (note.title || 'Untitled') + '</div>' +
          '<div class="note-card-date">' + date + '</div>' +
        '</div>' +
        '<div class="note-card-preview">' + preview + '</div>' +
        (tagsHtml ? '<div class="note-card-tags">' + tagsHtml + '</div>' : '') +
      '</div>';
    });
    return html;
  }

  function _renderComments() {
    // Get all notes from subsections
    var allNotes = Progress.getAllNotes ? Progress.getAllNotes() : {};
    var comments = [];
    
    // Convert to array with uid
    Object.keys(allNotes).forEach(function(uid) {
      if (allNotes[uid] && allNotes[uid].trim()) {
        comments.push({ uid: uid, text: allNotes[uid] });
      }
    });
    
    var html = '<div class="c-page">';
    html += '<h2 style="font-size:19px;font-weight:500;margin-bottom:8px">Comments</h2>';
    html += '<p style="font-size:12px;color:var(--t3);margin-bottom:16px">' +
      'View and manage comments from Content subsections. Click on a section title to jump to it.' +
    '</p>';
    
    if (comments.length === 0) {
      html += '<div class="info-panel" style="text-align:center;padding:40px">' +
        '<div style="font-size:32px;margin-bottom:12px">💬</div>' +
        '<div style="font-size:14px;font-weight:600;color:var(--t1);margin-bottom:6px">No comments yet</div>' +
        '<div style="font-size:12px;color:var(--t3)">Add comments using the "Comments" box at the bottom of each subsection in the Content tab</div>' +
      '</div>';
    } else {
      // Sort by uid
      comments.sort(function(a, b) { return a.uid.localeCompare(b.uid); });
      
      comments.forEach(function(c) {
        var u = window.DB && window.DB.allUnderstandings ? window.DB.allUnderstandings[c.uid] : null;
        var title = u ? (u.code + ' — ' + (u.subtopicTitle || '')) : c.uid;
        var lineCount = c.text.split('\n').filter(function(l) { return l.trim(); }).length;
        
        html += '<div class="comment-section">' +
          '<div class="comment-section-title" onclick="APP.jumpToUnderstanding(\'' + c.uid + '\')" style="cursor:pointer">' +
            '<span style="color:var(--primary)">' + title + '</span>' +
            '<span style="font-size:11px;color:var(--t3);margin-left:8px">(' + lineCount + ' line' + (lineCount !== 1 ? 's' : '') + ')</span>' +
          '</div>';
        
        html += '<div class="comment-card">' +
          '<div class="comment-text" style="white-space:pre-wrap">' + c.text.replace(/</g, '&lt;') + '</div>' +
          '<div class="comment-meta">' +
            '<span class="comment-actions">' +
              '<button onclick="APP.jumpToUnderstanding(\'' + c.uid + '\');event.stopPropagation()" style="font-size:11px;color:var(--primary);background:none;border:none;cursor:pointer">Edit</button>' +
              '<button onclick="APP.clearComment(\'' + c.uid + '\');event.stopPropagation()" style="font-size:11px;color:var(--red);background:none;border:none;cursor:pointer;margin-left:8px">Delete</button>' +
            '</span>' +
          '</div>' +
        '</div>';
        html += '</div>';
      });
    }
    
    html += '</div>';
    return html;
  }
  
  function clearComment(uid) {
    if (confirm('Delete this comment?')) {
      Progress.setNotes(uid, '');
      _renderNotebook(_notebookView);
      UI.toast('Comment deleted', 'success');
    }
  }

  function createNote() {
    var note = Progress.addNotebookEntry('', '', []);
    _editingNoteId = note.id;
    _showNoteEditor(note);
  }

  function editNote(noteId) {
    var notes = Progress.getNotebook();
    var note = notes.find(function(n) { return n.id === noteId; });
    if (note) {
      _editingNoteId = noteId;
      _showNoteEditor(note);
    }
  }

  function _showNoteEditor(note) {
    var ca = document.getElementById('content-area');
    var html = '<div class="c-page">';
    html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">' +
      '<button class="btn-secondary" onclick="APP.setNotebookView(\'notes\')" style="font-size:12px">← Back to Notes</button>' +
      '<div>' +
        '<button class="btn-secondary" onclick="APP.deleteNote(\'' + note.id + '\')" style="font-size:12px;color:var(--red);margin-right:8px">Delete</button>' +
        '<button class="btn-primary" onclick="APP.saveNote()" style="font-size:12px">Save</button>' +
      '</div>' +
    '</div>';
    
    html += '<input type="text" id="note-title" value="' + (note.title || '').replace(/"/g, '&quot;') + '" ' +
      'placeholder="Note title..." ' +
      'style="width:100%;padding:12px;border:1px solid var(--brd2);border-radius:var(--r-lg);font-size:16px;font-weight:600;margin-bottom:12px;background:var(--bg2)">';
    
    html += '<input type="text" id="note-tags" value="' + (note.tags || []).join(', ') + '" ' +
      'placeholder="Tags (comma separated)..." ' +
      'style="width:100%;padding:10px 12px;border:1px solid var(--brd2);border-radius:var(--r-lg);font-size:12px;margin-bottom:12px;background:var(--bg2)">';
    
    html += '<textarea id="note-content" placeholder="Write your notes here... (Markdown supported)" ' +
      'style="width:100%;min-height:400px;padding:12px;border:1px solid var(--brd2);border-radius:var(--r-lg);font-size:13px;line-height:1.6;font-family:var(--mono);background:var(--bg2);resize:vertical">' +
      (note.content || '').replace(/</g, '&lt;') + '</textarea>';
    
    html += '<div style="margin-top:8px;font-size:11px;color:var(--t3)">' +
      'Last updated: ' + new Date(note.updated).toLocaleString() +
    '</div>';
    
    html += '</div>';
    ca.innerHTML = html;
  }

  function saveNote() {
    if (!_editingNoteId) return;
    var title = document.getElementById('note-title').value.trim();
    var content = document.getElementById('note-content').value;
    var tagsStr = document.getElementById('note-tags').value;
    var tags = tagsStr.split(',').map(function(t) { return t.trim(); }).filter(function(t) { return t; });
    
    Progress.updateNotebookEntry(_editingNoteId, { title: title, content: content, tags: tags });
    UI.toast('Note saved', 'success');
    _editingNoteId = null;
    setNotebookView('notes');
  }

  function deleteNote(noteId) {
    if (confirm('Delete this note? This cannot be undone.')) {
      Progress.deleteNotebookEntry(noteId);
      UI.toast('Note deleted', 'info');
      _editingNoteId = null;
      setNotebookView('notes');
    }
  }

  function searchNotes(query) {
    var notes = query ? Progress.searchNotebook(query) : Progress.getNotebook();
    var list = document.getElementById('notes-list');
    if (list) {
      if (notes.length === 0) {
        list.innerHTML = '<div style="text-align:center;padding:20px;color:var(--t3)">No matching notes</div>';
      } else {
        list.innerHTML = _renderNotesList(notes);
      }
    }
  }

  function editComment(annotId) {
    var annotations = Progress.getAnnotations();
    var annot = annotations.find(function(a) { return a.id === annotId; });
    if (!annot) return;
    
    var newComment = prompt('Edit comment:', annot.comment);
    if (newComment !== null) {
      Progress.updateAnnotation(annotId, newComment);
      UI.toast('Comment updated', 'success');
      setNotebookView('comments');
    }
  }

  function deleteComment(annotId) {
    if (confirm('Delete this comment?')) {
      Progress.deleteAnnotation(annotId);
      UI.toast('Comment deleted', 'info');
      setNotebookView('comments');
    }
  }

  // ─ Exam Tips render ─────────────────────────────────────
  function _renderExamTips() {
    var html = '<div class="c-page">';
    html += '<h2>AP Chemistry Exam Tips</h2>';
    html += '<p class="guiding">Strategic advice for maximizing your AP Chemistry exam score. The exam consists of Section I (60 MCQ, 90 min) and Section II (7 FRQ, 105 min).</p>';

    html += '<div class="eq-section"><div class="eq-section-title">General Strategy</div>' +
      '<ul style="list-style:none;padding:0">' +
      '<li class="tip" style="margin-bottom:8px"><div class="tip-title">Time management</div>' +
        'MCQ: ~1.5 min per question. FRQ: ~15 min per long FRQ, ~9 min per short FRQ. Do not spend more than 2 minutes on any single MCQ \u2014 mark it and return.</li>' +
      '<li class="tip" style="margin-bottom:8px"><div class="tip-title">No penalty for guessing</div>' +
        'There is NO penalty for wrong answers on the AP exam. Always answer every question, even if you must guess.</li>' +
      '<li class="tip" style="margin-bottom:8px"><div class="tip-title">FRQ partial credit</div>' +
        'Show all work on FRQs. Partial credit is awarded generously. Write the formula, substitute values, and show units even if you cannot finish the calculation.</li>' +
      '<li class="tip" style="margin-bottom:8px"><div class="tip-title">Significant figures</div>' +
        'Pay attention to sig figs in calculations. The AP exam typically expects answers to the correct number of significant figures. When in doubt, use 3 sig figs.</li>' +
      '</ul></div>';

    html += '<div class="eq-section"><div class="eq-section-title">MCQ Tips</div>' +
      '<ul style="list-style:none;padding:0">' +
      '<li class="tip" style="margin-bottom:8px"><div class="tip-title">Process of elimination</div>' +
        'Eliminate obviously wrong answers first. On conceptual questions, look for answers that contradict fundamental principles (conservation of mass, charge neutrality).</li>' +
      '<li class="tip" style="margin-bottom:8px"><div class="tip-title">Read the question carefully</div>' +
        'Watch for words like "LEAST", "EXCEPT", "NOT", "BEST", and "MOST LIKELY". These change what you are looking for.</li>' +
      '<li class="tip" style="margin-bottom:8px"><div class="tip-title">Periodic table is your friend</div>' +
        'You receive a periodic table. Use it for electronegativity trends, atomic radii, ionization energy patterns \u2014 not just molar masses.</li>' +
      '</ul></div>';

    html += '<div class="eq-section"><div class="eq-section-title">FRQ Tips by Question Type</div>' +
      '<ul style="list-style:none;padding:0">' +
      '<li class="tip" style="margin-bottom:8px"><div class="tip-title">Long FRQ #1: Experimental design / lab</div>' +
        'Describe procedures clearly. State what you would measure, how you would control variables, and how you would analyze data. Reference specific equipment.</li>' +
      '<li class="tip" style="margin-bottom:8px"><div class="tip-title">Long FRQ #2 & #3: Multi-part calculations</div>' +
        'These often combine stoichiometry with equilibrium, thermodynamics, or kinetics. Set up ICE tables clearly. Label all work.</li>' +
      '<li class="tip" style="margin-bottom:8px"><div class="tip-title">Short FRQs: Targeted concepts</div>' +
        'These test specific skills: Lewis structures, periodic trends, acid-base reactions, electrochemistry. Be concise but thorough.</li>' +
      '</ul></div>';

    html += '<div class="eq-section"><div class="eq-section-title">High-Frequency Topics</div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">' +
      '<div class="info" style="margin:0"><strong>Stoichiometry</strong> \u2014 appears on virtually every FRQ. Master limiting reagent, percent yield, and solution stoichiometry.</div>' +
      '<div class="info" style="margin:0"><strong>Equilibrium & ICE tables</strong> \u2014 Units 7-8 are heavily tested. Know when to use the "x is small" approximation.</div>' +
      '<div class="info" style="margin:0"><strong>Thermodynamics</strong> \u2014 Hess\'s law, bond enthalpies, and \\(\\Delta G = \\Delta H - T\\Delta S\\) are exam staples.</div>' +
      '<div class="info" style="margin:0"><strong>Kinetics</strong> \u2014 Rate laws from experimental data, integrated rate laws, and Arrhenius equation.</div>' +
      '<div class="info" style="margin:0"><strong>Acid-base</strong> \u2014 pH calculations, buffer problems, and titration curves appear frequently.</div>' +
      '<div class="info" style="margin:0"><strong>Electrochemistry</strong> \u2014 Cell potential calculations, Nernst equation, and electrolysis stoichiometry.</div>' +
      '</div></div>';

    html += '<div class="eq-section"><div class="eq-section-title">Common Mistakes to Avoid</div>' +
      '<ul style="list-style:none;padding:0">' +
      '<li class="warn" style="margin-bottom:8px"><strong>Forgetting units:</strong> Always include units in your calculations and final answers. Many students lose points for missing units.</li>' +
      '<li class="warn" style="margin-bottom:8px"><strong>Kelvin vs Celsius:</strong> Gas law and thermodynamics calculations MUST use Kelvin. Only calorimetry (q = mc\\(\\Delta\\)T) can use \\(\\degree\\)C because the \\(\\Delta\\) cancels.</li>' +
      '<li class="warn" style="margin-bottom:8px"><strong>Sign conventions:</strong> \\(\\Delta H < 0\\) is exothermic (releases heat). \\(E\\degree_{cell} > 0\\) means spontaneous. \\(\\Delta G < 0\\) means spontaneous. Keep these straight.</li>' +
      '<li class="warn" style="margin-bottom:8px"><strong>Equilibrium expressions:</strong> Do NOT include pure solids or pure liquids in K expressions. This is a frequently tested concept.</li>' +
      '</ul></div>';

    html += '</div>';
    return html;
  }

  // ─ Theme application ─────────────────────────────────────
  function _applyTheme() {
    var s = Progress.getSettings();
    var b = document.body;
    var h = document.documentElement;
    // Theme
    b.classList.remove('theme-light', 'theme-dark');
    if (s.theme === 'light') b.classList.add('theme-light');
    else if (s.theme === 'dark') b.classList.add('theme-dark');
    // Accent
    b.classList.remove('accent-blue', 'accent-purple', 'accent-red', 'accent-amber', 'accent-teal');
    if (s.accent && s.accent !== 'teal') b.classList.add('accent-' + s.accent);
    // Font size (applied to html element for proper cascading)
    h.classList.remove('font-small', 'font-medium', 'font-large', 'font-xlarge');
    if (s.fontSize && s.fontSize !== 'medium') h.classList.add('font-' + s.fontSize);
    // Compact
    b.classList.toggle('compact', !!s.compact);
  }

  // ─ Settings render ───────────────────────────────────────
  function _renderSettings() {
    var s = Progress.getSettings();
    var apiStatus = API.getStatus();
    var themes = ['auto','light','dark'];
    var accents = [
      { id:'teal', color:'#1D9E75' },
      { id:'blue', color:'#2196F3' },
      { id:'purple', color:'#7C4DFF' },
      { id:'red', color:'#E53935' },
      { id:'amber', color:'#FF8F00' }
    ];
    var fontSizes = [
      { id:'small', label:'Small' },
      { id:'medium', label:'Medium' },
      { id:'large', label:'Large' },
      { id:'xlarge', label:'X-Large' }
    ];

    return '<div class="c-page">' +
      '<h2>Settings</h2>' +
      '<div style="margin-top:16px">' +

      // ── Theme ──
      '<div class="set-section">' +
      '<div class="set-sec-title">Theme</div>' +
      '<div class="set-row">' +
        '<div class="set-info"><div class="set-label">Appearance</div><div class="set-desc">Choose light, dark, or follow your system preference</div></div>' +
        '<div style="display:flex;gap:6px">' +
          themes.map(function(t) {
            var label = t.charAt(0).toUpperCase() + t.slice(1);
            if (t === 'auto') label = 'System';
            var sel = (s.theme || 'auto') === t;
            return '<button class="btn-secondary" style="font-size:12px;' + (sel ? 'background:var(--primary-l);border-color:var(--primary);color:var(--primary-d);font-weight:700' : '') + '" onclick="APP.saveSetting(\'theme\',\'' + t + '\');APP.applyTheme();APP.showSection(\'settings\')">' + label + '</button>';
          }).join('') +
        '</div>' +
      '</div>' +
      '</div>' +

      // ── Accent Color ──
      '<div class="set-section">' +
      '<div class="set-sec-title">Accent color</div>' +
      '<div class="set-row">' +
        '<div class="set-info"><div class="set-label">Primary color</div><div class="set-desc">Accent color used throughout the interface</div></div>' +
        '<div style="display:flex;gap:8px;align-items:center">' +
          accents.map(function(a) {
            var sel = (s.accent || 'teal') === a.id;
            return '<div onclick="APP.saveSetting(\'accent\',\'' + a.id + '\');APP.applyTheme();APP.showSection(\'settings\')" style="width:28px;height:28px;border-radius:50%;background:' + a.color + ';cursor:pointer;border:3px solid ' + (sel ? 'var(--t1)' : 'transparent') + ';box-shadow:' + (sel ? '0 0 0 2px var(--bg),0 0 0 4px ' + a.color : 'none') + ';transition:all .15s" data-tt="' + a.id.charAt(0).toUpperCase() + a.id.slice(1) + '"></div>';
          }).join('') +
        '</div>' +
      '</div>' +
      '</div>' +

      // ── Font Size ──
      '<div class="set-section">' +
      '<div class="set-sec-title">Font size</div>' +
      '<div class="set-row">' +
        '<div class="set-info"><div class="set-label">Text size</div><div class="set-desc">Adjust the base font size for readability</div></div>' +
        '<select class="q-fsel" onchange="APP.saveSetting(\'fontSize\',this.value);APP.applyTheme()">' +
          fontSizes.map(function(f) { return '<option value="' + f.id + '"' + ((s.fontSize || 'medium') === f.id ? ' selected' : '') + '>' + f.label + '</option>'; }).join('') +
        '</select>' +
      '</div>' +
      '</div>' +

      // ── Compact Mode ──
      '<div class="set-section">' +
      '<div class="set-sec-title">Layout</div>' +
      '<div class="set-row">' +
        '<div class="set-info"><div class="set-label">Compact mode</div><div class="set-desc">Tighter spacing for more content on screen</div></div>' +
        '<div class="toggle ' + (s.compact ? 'on' : '') + '" onclick="APP.toggleSetting(\'compact\',this);APP.applyTheme()"><div class="toggle-knob"></div></div>' +
      '</div>' +
      '</div>' +

      // ── Timer ──
      '<div class="set-section">' +
      '<div class="set-sec-title">Question practice</div>' +
      '<div class="set-row">' +
        '<div class="set-info"><div class="set-label">Timer enabled</div><div class="set-desc">Show countdown timer in practice mode</div></div>' +
        '<div class="toggle ' + (s.timerEnabled ? 'on' : '') + '" id="toggle-timer" onclick="APP.toggleSetting(\'timerEnabled\',this)"><div class="toggle-knob"></div></div>' +
      '</div>' +
      '<div class="set-row">' +
        '<div class="set-info"><div class="set-label">Timer duration</div><div class="set-desc">Seconds per question</div></div>' +
        '<select class="q-fsel" onchange="APP.saveSetting(\'timerSeconds\',parseInt(this.value))">' +
          [30,45,60,90,120,180].map(function(v){ return '<option value="' + v + '"' + (s.timerSeconds===v?' selected':'') + '>' + v + 's</option>'; }).join('') +
        '</select>' +
      '</div>' +
      '</div>' +

      // ── API Key ──
      '<div class="set-section">' +
      '<div class="set-sec-title">API key (Claude AI)</div>' +
      '<div class="set-row"><div class="set-info"><div class="set-label">Anthropic API key</div><div class="set-desc">Required for AI question generation. Key stored locally in your browser. Get one at anthropic.com/api</div></div></div>' +
      '<div class="api-key-row"><input type="password" id="api-key-input" placeholder="sk-ant-..." value="' + (s.apiKey || '') + '"/><button class="save-btn" onclick="APP.saveAPIKey()">Save</button></div>' +
      '<div id="api-key-status" class="api-key-status ' + (apiStatus.ok ? 'ok' : 'err') + '">' + apiStatus.msg + '</div>' +
      '</div>' +

      // ── Data Management ──
      '<div class="set-section">' +
      '<div class="set-sec-title">Data management</div>' +
      '<div class="set-row" style="background:var(--primary-l);border-radius:var(--r-lg);padding:12px;margin-bottom:12px">' +
        '<div class="set-info"><div class="set-label" style="color:var(--primary)">&#128190; Save progress to file</div>' +
        '<div class="set-desc">Downloads userdata.js — place it in the sessions/ folder to restore progress on any device or browser</div></div>' +
        '<button class="btn-primary" style="font-size:12px" onclick="APP.saveToFile()">Save to File</button>' +
      '</div>' +
      '<div class="set-row">' +
        '<div class="set-info"><div class="set-label">Load from file</div><div class="set-desc">Import progress from a userdata.js or JSON file</div></div>' +
        '<button class="btn-secondary" style="font-size:12px" onclick="APP.importProgress()">Load File</button>' +
      '</div>' +
      '<div class="set-row">' +
        '<div class="set-info"><div class="set-label">Export as JSON</div><div class="set-desc">Download progress as portable JSON (works with Load File)</div></div>' +
        '<button class="btn-secondary" style="font-size:12px" onclick="APP.exportProgress()">Export JSON</button>' +
      '</div>' +
      '<div class="set-row">' +
        '<div class="set-info"><div class="set-label">Reset all progress</div><div class="set-desc">Clear all status marks (cannot be undone)</div></div>' +
        '<button class="btn-secondary" style="font-size:12px;color:var(--red)" onclick="APP.resetProgress()">Reset</button>' +
      '</div>' +
      '</div>' +

      // ── Keyboard Shortcuts ──
      '<div class="set-section">' +
      '<div class="set-sec-title">Keyboard shortcuts</div>' +
      '<div class="sc-grid">' +
        [['/', 'Focus search'],['?', 'Show shortcuts'],['c', 'Content'],['q', 'Questions'],['m', 'Misconceptions'],['p', 'Planner'],
         ['Ctrl+P', 'Print'],['→ / Space', 'Next question (practice)'],['←', 'Previous (practice)'],
         ['1','Not started (practice)'],['2','Reviewing (practice)'],['3','Confident (practice)'],['4','Skip (practice)'],['Esc','Close / exit search']]
        .map(function(s){ return '<span class="sc-key">'+s[0]+'</span><span class="sc-desc">'+s[1]+'</span>'; }).join('') +
      '</div></div>' +

      '</div></div>';
  }

  function saveAPIKey() {
    var key = document.getElementById('api-key-input').value.trim();
    Progress.saveSetting('apiKey', key);
    var st = API.getStatus();
    var el = document.getElementById('api-key-status');
    if (el) { el.textContent = st.msg; el.className = 'api-key-status ' + (st.ok ? 'ok' : 'err'); }
    UI.toast('API key saved', 'success');
  }

  function toggleSetting(key, toggleEl) {
    var cur = Progress.getSettings()[key];
    Progress.saveSetting(key, !cur);
    toggleEl.classList.toggle('on', !cur);
  }

  function saveSetting(key, val) { Progress.saveSetting(key, val); }

  function exportProgress() {
    var json = Progress.exportJSON();
    var blob = new Blob([json], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = 'apchem-progress-' + new Date().toISOString().slice(0,10) + '.json';
    a.click(); URL.revokeObjectURL(url);
  }

  function saveToFile() {
    Progress.exportToFile();
    UI.toast('Progress saved! Place userdata.js in the sessions/ folder.', 'success');
  }

  function importProgress() {
    var inp = document.createElement('input');
    inp.type = 'file'; inp.accept = '.json,.js';
    inp.onchange = function(e) {
      var file = e.target.files[0];
      if (!file) return;
      Progress.importFromFile(file)
        .then(function() {
          UI.toast('Progress imported successfully!', 'success');
          showSection(_section);
        })
        .catch(function(err) {
          UI.toast('Import failed — ' + err.message, 'error');
        });
    };
    inp.click();
  }

  function resetProgress() {
    if (confirm('Reset ALL progress? This cannot be undone.')) {
      localStorage.removeItem('apchem_progress_v1');
      UI.toast('Progress reset', 'info');
      showSection(_section);
    }
  }

  // ─ Init ─────────────────────────────────────────────────
  function init() {
    _assembleDB();
    _applyTheme();
    // Rebuild search index after DB assembly
    if (typeof Search !== 'undefined') {
      if (typeof Search.rebuild === 'function') Search.rebuild();
    }
    UI.initSearch();
    UI.initShortcuts();

    // Wire topbar tab clicks
    document.querySelectorAll('.tb-tab').forEach(function(btn) {
      btn.addEventListener('click', function() {
        showSection(btn.dataset.section);
      });
    });

    showSection('content');
    console.log('[AP Chem DB] Loaded', Object.keys(window.DB.allUnderstandings).length, 'understandings,', window.DB.allQuestions.length, 'questions');
  }

  return {
    init: init,
    showSection: showSection,
    setView: setView,
    setQView: setQView,
    setEqView: setEqView,
    syncSidebarState: function() {
      var s = document.getElementById('sidebar');
      if (s) _sidebarVisible = !s.classList.contains('hidden');
    },
    scrollToUnderstanding: scrollToUnderstanding,
    jumpToUnderstanding: jumpToUnderstanding,
    navigateToSection: navigateToSection,
    filterMisconceptions: filterMisconceptions,
    saveAPIKey: saveAPIKey,
    toggleSetting: toggleSetting,
    saveSetting: saveSetting,
    exportProgress: exportProgress,
    saveToFile: saveToFile,
    importProgress: importProgress,
    resetProgress: resetProgress,
    applyTheme: _applyTheme,
    getCurrentView: function() { return _view; },
    // Notebook
    setNotebookView: setNotebookView,
    createNote: createNote,
    editNote: editNote,
    saveNote: saveNote,
    deleteNote: deleteNote,
    searchNotes: searchNotes,
    // Comments
    editComment: editComment,
    deleteComment: deleteComment,
    clearComment: clearComment
  };
})();

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() { APP.init(); });
// Patch: ensure lab data populated after all data loaded
(function() {
  var orig = APP.init;
  APP.init = function() {
    orig.call(APP);
    if (window.DB) {
      if (window.DB_U1_LABS) window.DB.u1labs = window.DB_U1_LABS;
      if (window.DB_U2_LABS) window.DB.u2labs = window.DB_U2_LABS;
      if (window.DB_U3_LABS) window.DB.u3labs = window.DB_U3_LABS;
      if (window.DB_U4_LABS) window.DB.u4labs = window.DB_U4_LABS;
      if (window.DB_U5_LABS) window.DB.u5labs = window.DB_U5_LABS;
      if (window.DB_U6_LABS) window.DB.u6labs = window.DB_U6_LABS;
      if (window.DB_U7_LABS) window.DB.u7labs = window.DB_U7_LABS;
      if (window.DB_U8_LABS) window.DB.u8labs = window.DB_U8_LABS;
      if (window.DB_U9_LABS) window.DB.u9labs = window.DB_U9_LABS;
    }
  };
})();
