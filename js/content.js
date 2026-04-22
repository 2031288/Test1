
// Content rendering — textbook, study guide, concept, labs views
window.Content = (function() {

  // ─ Rendering helpers ──────────────────────────────────
  function fbox(text) {
    if (text.indexOf('\\(') !== -1 || text.indexOf('\\[') !== -1) {
      return '<div class="fbox">' + text.replace(/\n/g,'<br>') + '</div>';
    }
    return '<div class="fbox">' + _esc(text).replace(/\n/g,'<br>') + '</div>';
  }
  function eg(title, body) {
    return '<div class="eg"><div class="eg-title">Worked example \u2014 ' + title + '</div><div>' + body + '</div></div>';
  }
  function kr(title, items, uid) {
    var html = '<div class="kr"><div class="kr-title">' + title + '</div><ul class="kr-list">';
    items.forEach(function(item, idx) {
      var kpId = (uid || 'kp') + '_kp' + idx;
      var flagged = Progress.isKeyPointFlagged ? Progress.isKeyPointFlagged(kpId) : false;
      html += '<li class="kr-item">' +
        '<span class="kr-text">' + item + '</span>' +
        '<button class="kp-flag-btn' + (flagged ? ' flagged' : '') + '" ' +
          'onclick="Content.toggleKPFlag(\'' + kpId + '\',this);event.stopPropagation()" ' +
          'title="' + (flagged ? 'Unflag this key point' : 'Flag for review') + '">' +
          (flagged ? '\u2605' : '\u2606') +
        '</button>' +
      '</li>';
    });
    html += '</ul></div>';
    return html;
  }

  function toggleKPFlag(kpId, el) {
    if (Progress.toggleKeyPointFlag) {
      var nowFlagged = Progress.toggleKeyPointFlag(kpId);
      if (el) {
        el.classList.toggle('flagged', nowFlagged);
        el.textContent = nowFlagged ? '\u2605' : '\u2606';
        el.title = nowFlagged ? 'Unflag this key point' : 'Flag for review';
      }
      if (typeof UI !== 'undefined') UI.toast(nowFlagged ? 'Key point flagged' : 'Flag removed', 'info', 1500);
    }
  }
  function warn(html) { return '<div class="warn">' + html + '</div>'; }
  function tip(title, html) { return '<div class="tip"><div class="tip-title">Exam tip \u2014 ' + title + '</div>' + html + '</div>'; }
  function info(html) { return '<div class="info">' + html + '</div>'; }
  function conns(tags) {
    if (!tags || !tags.length) return '';
    return '<div class="conns"><span class="conn-lbl">Connected \u2192</span>' +
      tags.map(function(t){
        if (typeof t === 'string') {
          return '<span class="ctag">' + t + '</span>';
        }
        return '<span class="ctag ct-' + (t.color || 'teal') + '" onclick="APP.showSection(\'' + (t.sec || 'content') + '\')">' + t.label + '</span>';
      }).join('') + '</div>';
  }
  function _esc(s) {
    return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  // ─ Interactive diagrams ───────────────────────────────
  var DIAGRAMS = {};

  DIAGRAMS.energyLevels = function() {
    return '<div class="diag"><div class="diag-title">Energy level diagram \u2014 Aufbau filling order</div>' +
    '<div class="diag-body">' +
    '<svg width="100%" viewBox="0 0 400 280" style="display:block;overflow:visible">' +
    '<text x="20" y="270" font-size="10" fill="var(--t3)">Energy</text>' +
    '<line x1="20" y1="260" x2="20" y2="20" stroke="var(--t3)" stroke-width="1"/>' +
    '<polygon points="17,25 20,15 23,25" fill="var(--t3)"/>' +
    '<line x1="60" y1="240" x2="140" y2="240" stroke="var(--primary)" stroke-width="2.5"/><text x="150" y="244" font-size="11" fill="var(--t1)" font-weight="600">1s</text>' +
    '<line x1="60" y1="210" x2="140" y2="210" stroke="var(--primary)" stroke-width="2.5"/><text x="150" y="214" font-size="11" fill="var(--t1)" font-weight="600">2s</text>' +
    '<line x1="200" y1="200" x2="280" y2="200" stroke="var(--blue)" stroke-width="2"/><text x="290" y="204" font-size="11" fill="var(--t1)">2p</text>' +
    '<line x1="60" y1="175" x2="140" y2="175" stroke="var(--primary)" stroke-width="2.5"/><text x="150" y="179" font-size="11" fill="var(--t1)" font-weight="600">3s</text>' +
    '<line x1="200" y1="165" x2="280" y2="165" stroke="var(--blue)" stroke-width="2"/><text x="290" y="169" font-size="11" fill="var(--t1)">3p</text>' +
    '<line x1="60" y1="135" x2="140" y2="135" stroke="var(--primary)" stroke-width="2.5"/><text x="150" y="139" font-size="11" fill="var(--t1)" font-weight="600">4s</text>' +
    '<line x1="200" y1="125" x2="280" y2="125" stroke="var(--blue)" stroke-width="2"/><text x="290" y="129" font-size="11" fill="var(--t1)">3d</text>' +
    '<line x1="200" y1="100" x2="280" y2="100" stroke="var(--blue)" stroke-width="2"/><text x="290" y="104" font-size="11" fill="var(--t1)">4p</text>' +
    '<text x="100" y="16" text-anchor="middle" font-size="10" fill="var(--t3)">Filling order: 1s \u2192 2s \u2192 2p \u2192 3s \u2192 3p \u2192 4s \u2192 3d \u2192 4p</text>' +
    '</svg></div></div>';
  };

  DIAGRAMS.enthalpyProfile = function() {
    return '<div class="diag"><div class="diag-title">Energy profile diagrams \u2014 exothermic vs endothermic</div>' +
    '<div class="diag-body" style="display:flex;gap:20px;flex-wrap:wrap;justify-content:center">' +
    '<svg width="220" viewBox="0 0 220 190" style="display:block;overflow:visible">' +
    '<text x="110" y="14" text-anchor="middle" font-size="11" font-weight="600" fill="var(--primary)">Exothermic (\u0394H &lt; 0)</text>' +
    '<line x1="30" y1="165" x2="30" y2="20" stroke="var(--t3)" stroke-width="1"/>' +
    '<text x="25" y="15" font-size="9" fill="var(--t3)" text-anchor="end">E</text>' +
    '<line x1="30" y1="165" x2="200" y2="165" stroke="var(--t3)" stroke-width="1"/>' +
    '<text x="200" y="175" font-size="9" fill="var(--t3)">Progress</text>' +
    '<line x1="40" y1="60" x2="90" y2="60" stroke="var(--t1)" stroke-width="2"/>' +
    '<text x="65" y="55" text-anchor="middle" font-size="10" fill="var(--t2)">Reactants</text>' +
    '<path d="M90,60 Q130,25 160,130" fill="none" stroke="var(--primary)" stroke-width="2"/>' +
    '<line x1="160" y1="130" x2="200" y2="130" stroke="var(--t1)" stroke-width="2"/>' +
    '<text x="180" y="145" text-anchor="middle" font-size="10" fill="var(--t2)">Products</text>' +
    '<line x1="205" y1="60" x2="205" y2="130" stroke="var(--red)" stroke-width="1.5" marker-end="url(#arr)"/>' +
    '<text x="210" y="98" font-size="10" fill="var(--red)" font-weight="600">\u0394H</text>' +
    '<line x1="85" y1="60" x2="85" y2="30" stroke="var(--amber)" stroke-width="1" stroke-dasharray="3 2"/>' +
    '<text x="75" y="42" font-size="9" fill="var(--amber)">E_a</text>' +
    '</svg>' +
    '<svg width="220" viewBox="0 0 220 190" style="display:block;overflow:visible">' +
    '<text x="110" y="14" text-anchor="middle" font-size="11" font-weight="600" fill="var(--red)">Endothermic (\u0394H &gt; 0)</text>' +
    '<line x1="30" y1="165" x2="30" y2="20" stroke="var(--t3)" stroke-width="1"/>' +
    '<text x="25" y="15" font-size="9" fill="var(--t3)" text-anchor="end">E</text>' +
    '<line x1="30" y1="165" x2="200" y2="165" stroke="var(--t3)" stroke-width="1"/>' +
    '<text x="200" y="175" font-size="9" fill="var(--t3)">Progress</text>' +
    '<line x1="40" y1="130" x2="90" y2="130" stroke="var(--t1)" stroke-width="2"/>' +
    '<text x="65" y="145" text-anchor="middle" font-size="10" fill="var(--t2)">Reactants</text>' +
    '<path d="M90,130 Q130,25 160,60" fill="none" stroke="var(--red)" stroke-width="2"/>' +
    '<line x1="160" y1="60" x2="200" y2="60" stroke="var(--t1)" stroke-width="2"/>' +
    '<text x="180" y="55" text-anchor="middle" font-size="10" fill="var(--t2)">Products</text>' +
    '<line x1="205" y1="130" x2="205" y2="60" stroke="var(--red)" stroke-width="1.5"/>' +
    '<text x="210" y="98" font-size="10" fill="var(--red)" font-weight="600">\u0394H</text>' +
    '</svg>' +
    '</div></div>';
  };

  DIAGRAMS.equilibriumRates = function() {
    return '<div class="diag"><div class="diag-title">Dynamic equilibrium \u2014 rates of forward and reverse reactions</div>' +
    '<div class="diag-body">' +
    '<svg width="100%" viewBox="0 0 400 210" style="display:block;overflow:visible">' +
    '<line x1="50" y1="180" x2="50" y2="10" stroke="var(--t3)" stroke-width="1"/>' +
    '<text x="25" y="10" font-size="10" fill="var(--t3)">Rate</text>' +
    '<line x1="50" y1="180" x2="380" y2="180" stroke="var(--t3)" stroke-width="1"/>' +
    '<text x="380" y="195" font-size="10" fill="var(--t3)">Time</text>' +
    '<path d="M50,40 Q150,40 200,100 Q230,100 380,100" fill="none" stroke="var(--primary)" stroke-width="2.5"/>' +
    '<text x="100" y="35" font-size="11" fill="var(--primary)" font-weight="500">Forward rate</text>' +
    '<path d="M50,175 Q150,175 200,100 Q230,100 380,100" fill="none" stroke="var(--red)" stroke-width="2.5"/>' +
    '<text x="85" y="170" font-size="11" fill="var(--red)" font-weight="500">Reverse rate</text>' +
    '<line x1="200" y1="10" x2="200" y2="180" stroke="var(--t3)" stroke-width="1" stroke-dasharray="4 3"/>' +
    '<text x="210" y="25" font-size="11" fill="var(--t2)" font-weight="600">Equilibrium</text>' +
    '<text x="210" y="38" font-size="10" fill="var(--t3)">rates equal</text>' +
    '<text x="300" y="95" font-size="10" fill="var(--t2)">rate_f = rate_r</text>' +
    '</svg></div></div>';
  };

  DIAGRAMS.vseprShapes = function() {
    var shapes = [
      {name:'Linear', angle:'180\u00b0', example:'CO\u2082', domains:2, x:0},
      {name:'Trigonal planar', angle:'120\u00b0', example:'BF\u2083', domains:3, x:1},
      {name:'Tetrahedral', angle:'109.5\u00b0', example:'CH\u2084', domains:4, x:2},
      {name:'Trig. bipyramidal', angle:'90\u00b0/120\u00b0', example:'PCl\u2085', domains:5, x:3},
      {name:'Octahedral', angle:'90\u00b0', example:'SF\u2086', domains:6, x:4}
    ];
    var html = '<div class="diag"><div class="diag-title">VSEPR molecular geometries</div><div class="diag-body" style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center;padding:12px">';
    shapes.forEach(function(s) {
      html += '<div style="text-align:center;min-width:100px">' +
        '<div style="font-size:12px;font-weight:600;color:var(--t1)">' + s.name + '</div>' +
        '<div style="font-size:20px;font-weight:700;color:var(--primary);margin:6px 0">' + s.domains + '</div>' +
        '<div style="font-size:10px;color:var(--t3)">electron domains</div>' +
        '<div style="font-size:11px;color:var(--t2);margin-top:4px">' + s.angle + '</div>' +
        '<div style="font-size:10px;font-family:var(--mono);color:var(--t3);margin-top:2px">' + s.example + '</div>' +
      '</div>';
    });
    html += '</div></div>';
    return html;
  };

  DIAGRAMS.catalystProfile = function() {
    return '<div class="diag"><div class="diag-title">Energy profile — effect of a catalyst</div>' +
    '<div class="diag-body">' +
    '<svg width="100%" viewBox="0 0 400 210" style="display:block;overflow:visible">' +
    '<line x1="40" y1="180" x2="40" y2="10" stroke="var(--t3)" stroke-width="1"/>' +
    '<text x="15" y="15" font-size="10" fill="var(--t3)">Energy</text>' +
    '<line x1="40" y1="180" x2="380" y2="180" stroke="var(--t3)" stroke-width="1"/>' +
    '<text x="370" y="195" font-size="10" fill="var(--t3)">Progress</text>' +
    '<line x1="50" y1="80" x2="110" y2="80" stroke="var(--t1)" stroke-width="2"/>' +
    '<text x="80" y="75" text-anchor="middle" font-size="10" fill="var(--t2)">Reactants</text>' +
    '<path d="M110,80 Q200,15 280,130" fill="none" stroke="var(--primary)" stroke-width="2.5"/>' +
    '<text x="200" y="25" font-size="10" fill="var(--primary)" font-weight="600">Without catalyst</text>' +
    '<path d="M110,80 Q200,45 280,130" fill="none" stroke="var(--amber)" stroke-width="2.5" stroke-dasharray="6 3"/>' +
    '<text x="200" y="55" font-size="10" fill="var(--amber)" font-weight="600">With catalyst (lower E_a)</text>' +
    '<line x1="280" y1="130" x2="360" y2="130" stroke="var(--t1)" stroke-width="2"/>' +
    '<text x="320" y="148" text-anchor="middle" font-size="10" fill="var(--t2)">Products</text>' +
    '<text x="210" y="185" text-anchor="middle" font-size="9" fill="var(--t3)">Catalyst provides alternative pathway with lower activation energy. \u0394H unchanged.</text>' +
    '</svg></div></div>';
  };

  DIAGRAMS.phScale = function() {
    var colors = ['#ff0000','#ff3300','#ff6600','#ff9900','#ffcc00','#cccc00','#99cc00','#66cc00','#33cc33','#00cc66','#00cc99','#0099cc','#0066cc','#0033cc','#0000cc'];
    var html = '<div class="diag"><div class="diag-title">The pH scale</div><div class="diag-body" style="padding:12px">';
    html += '<div style="display:flex;border-radius:6px;overflow:hidden;margin-bottom:8px">';
    for (var i = 0; i <= 14; i++) {
      html += '<div style="flex:1;background:' + colors[i] + ';color:#fff;text-align:center;padding:8px 0;font-size:11px;font-weight:700">' + i + '</div>';
    }
    html += '</div>';
    html += '<div style="display:flex;justify-content:space-between;font-size:11px;color:var(--t2)">' +
      '<span style="color:#ff0000;font-weight:600">\u2190 Strong acid</span>' +
      '<span style="color:#33cc33;font-weight:600">Neutral (pH 7)</span>' +
      '<span style="color:#0033cc;font-weight:600">Strong base \u2192</span></div>';
    html += '<div style="margin-top:8px;font-size:11px;color:var(--t3);text-align:center">[H\u207a] decreases \u2192  |  [OH\u207b] increases \u2192</div>';
    html += '</div></div>';
    return html;
  };

  DIAGRAMS.statesOfMatter = function() {
    return '<div class="diag"><div class="diag-title">States of matter \u2014 interactive particle model</div>' +
    '<div class="diag-body">' +
    '<svg id="states-svg" width="100%" viewBox="0 0 560 170" style="display:block;overflow:visible">' +
    '<defs><marker id="da" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>' +
    '<g id="state-solid"><rect x="10" y="10" width="160" height="140" rx="8" fill="none" stroke="#185FA5" stroke-width="1.5" opacity="0.5"/>' +
    '<text x="90" y="26" text-anchor="middle" font-size="12" font-weight="600" fill="#185FA5">Solid</text>' +
    '<circle cx="45" cy="55" r="9" fill="#185FA5" opacity="0.7"/><circle cx="70" cy="53" r="9" fill="#185FA5" opacity="0.7"/><circle cx="95" cy="55" r="9" fill="#185FA5" opacity="0.7"/><circle cx="120" cy="53" r="9" fill="#185FA5" opacity="0.7"/><circle cx="145" cy="55" r="9" fill="#185FA5" opacity="0.7"/>' +
    '<circle cx="45" cy="78" r="9" fill="#185FA5" opacity="0.7"/><circle cx="70" cy="80" r="9" fill="#185FA5" opacity="0.7"/><circle cx="95" cy="78" r="9" fill="#185FA5" opacity="0.7"/><circle cx="120" cy="80" r="9" fill="#185FA5" opacity="0.7"/><circle cx="145" cy="78" r="9" fill="#185FA5" opacity="0.7"/>' +
    '<circle cx="45" cy="102" r="9" fill="#185FA5" opacity="0.7"/><circle cx="70" cy="104" r="9" fill="#185FA5" opacity="0.7"/><circle cx="95" cy="102" r="9" fill="#185FA5" opacity="0.7"/><circle cx="120" cy="104" r="9" fill="#185FA5" opacity="0.7"/><circle cx="145" cy="102" r="9" fill="#185FA5" opacity="0.7"/>' +
    '<text x="90" y="130" text-anchor="middle" font-size="10" fill="#185FA5">Fixed shape &amp; volume</text></g>' +
    '<g id="state-liquid"><rect x="200" y="10" width="160" height="140" rx="8" fill="none" stroke="#1D9E75" stroke-width="1.5" opacity="0.5"/>' +
    '<text x="280" y="26" text-anchor="middle" font-size="12" font-weight="600" fill="#1D9E75">Liquid</text>' +
    '<circle cx="225" cy="65" r="9" fill="#1D9E75" opacity="0.7"/><circle cx="255" cy="58" r="9" fill="#1D9E75" opacity="0.7"/><circle cx="280" cy="70" r="9" fill="#1D9E75" opacity="0.7"/><circle cx="308" cy="60" r="9" fill="#1D9E75" opacity="0.7"/><circle cx="335" cy="68" r="9" fill="#1D9E75" opacity="0.7"/>' +
    '<circle cx="232" cy="92" r="9" fill="#1D9E75" opacity="0.7"/><circle cx="262" cy="88" r="9" fill="#1D9E75" opacity="0.7"/><circle cx="290" cy="96" r="9" fill="#1D9E75" opacity="0.7"/><circle cx="320" cy="90" r="9" fill="#1D9E75" opacity="0.7"/>' +
    '<circle cx="240" cy="116" r="9" fill="#1D9E75" opacity="0.7"/><circle cx="272" cy="112" r="9" fill="#1D9E75" opacity="0.7"/><circle cx="305" cy="118" r="9" fill="#1D9E75" opacity="0.7"/>' +
    '<text x="280" y="140" text-anchor="middle" font-size="10" fill="#1D9E75">Fixed volume, no fixed shape</text></g>' +
    '<g id="state-gas"><rect x="390" y="10" width="160" height="140" rx="8" fill="none" stroke="#BA7517" stroke-width="1.5" opacity="0.5"/>' +
    '<text x="470" y="26" text-anchor="middle" font-size="12" font-weight="600" fill="#BA7517">Gas</text>' +
    '<circle cx="415" cy="50" r="7" fill="#BA7517" opacity="0.6"/><circle cx="455" cy="80" r="7" fill="#BA7517" opacity="0.6"/><circle cx="510" cy="45" r="7" fill="#BA7517" opacity="0.6"/><circle cx="430" cy="115" r="7" fill="#BA7517" opacity="0.6"/><circle cx="490" cy="100" r="7" fill="#BA7517" opacity="0.6"/><circle cx="540" cy="130" r="7" fill="#BA7517" opacity="0.6"/><circle cx="400" cy="135" r="7" fill="#BA7517" opacity="0.6"/><circle cx="530" cy="60" r="7" fill="#BA7517" opacity="0.6"/>' +
    '<text x="470" y="152" text-anchor="middle" font-size="10" fill="#BA7517">No fixed shape or volume</text></g>' +
    '</svg></div></div>';
  };

  DIAGRAMS.hydrogenSpectrum = function() {
    return '<div class="diag"><div class="diag-title">Hydrogen emission spectrum \u2014 click a transition to see the photon</div>' +
    '<div class="diag-body">' +
    '<svg id="h-spec-svg" width="100%" viewBox="0 0 520 240" style="display:block;overflow:visible;cursor:pointer">' +
    '<defs><marker id="harr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>' +
    '<text x="260" y="14" text-anchor="middle" font-size="11" fill="#9e9d96">Click a coloured arrow to see the photon emitted</text>' +
    '<line x1="60" y1="195" x2="360" y2="195" stroke="#185FA5" stroke-width="2.5"/><text x="370" y="199" font-size="11" fill="#185FA5" font-weight="600">n=1</text>' +
    '<line x1="60" y1="148" x2="360" y2="148" stroke="#666" stroke-width="1.5"/><text x="370" y="152" font-size="11" fill="#888">n=2</text>' +
    '<line x1="60" y1="111" x2="360" y2="111" stroke="#666" stroke-width="1.2"/><text x="370" y="115" font-size="11" fill="#888">n=3</text>' +
    '<line x1="60" y1="83" x2="360" y2="83" stroke="#888" stroke-width="1"/><text x="370" y="87" font-size="11" fill="#888">n=4</text>' +
    '<line x1="60" y1="62" x2="360" y2="62" stroke="#888" stroke-width="0.8"/><text x="370" y="66" font-size="11" fill="#888">n=5</text>' +
    '<line x1="60" y1="45" x2="360" y2="45" stroke="#aaa" stroke-width="0.7"/><text x="370" y="49" font-size="11" fill="#888">n=6</text>' +
    '<line x1="60" y1="32" x2="360" y2="32" stroke="#aaa" stroke-width="0.5" stroke-dasharray="4 3"/><text x="370" y="36" font-size="11" fill="#aaa">n=\u221e</text>' +
    '<line id="ht0" x1="100" y1="111" x2="100" y2="151" stroke="#E24B4A" stroke-width="3" marker-end="url(#harr)" style="cursor:pointer" onclick="Content.showPhoton(\'656 nm \u2014 Red\',\'#E24B4A\')"/>' +
    '<line id="ht1" x1="145" y1="83" x2="145" y2="151" stroke="#1D9E75" stroke-width="3" marker-end="url(#harr)" style="cursor:pointer" onclick="Content.showPhoton(\'486 nm \u2014 Blue-green\',\'#1D9E75\')"/>' +
    '<line id="ht2" x1="190" y1="62" x2="190" y2="151" stroke="#185FA5" stroke-width="3" marker-end="url(#harr)" style="cursor:pointer" onclick="Content.showPhoton(\'434 nm \u2014 Violet\',\'#185FA5\')"/>' +
    '<line id="ht3" x1="235" y1="45" x2="235" y2="151" stroke="#534AB7" stroke-width="3" marker-end="url(#harr)" style="cursor:pointer" onclick="Content.showPhoton(\'410 nm \u2014 Deep violet\',\'#534AB7\')"/>' +
    '<text x="80" y="135" font-size="10" fill="#E24B4A">n=3\u21922</text>' +
    '<text x="124" y="118" font-size="10" fill="#1D9E75">n=4\u21922</text>' +
    '<text x="168" y="108" font-size="10" fill="#185FA5">n=5\u21922</text>' +
    '<text x="213" y="98" font-size="10" fill="#534AB7">n=6\u21922</text>' +
    '<text id="photon-label" x="340" y="120" text-anchor="middle" font-size="12" font-weight="600" fill="#1D9E75" opacity="0"></text>' +
    '<rect id="photon-circle" cx="340" cy="104" rx="30" ry="14" fill="none" stroke="#1D9E75" stroke-width="2" opacity="0" x="310" y="88" width="60" height="28" rx="14"/>' +
    '<text x="260" y="218" text-anchor="middle" font-size="10" fill="#888">Visible series: electrons returning to n=2. Lines converge at higher n.</text>' +
    '</svg></div></div>';
  };

  DIAGRAMS.gasLaws = function() {
    return '<div class="diag"><div class="diag-title">Ideal gas laws \u2014 interactive PV=nRT</div>' +
    '<div class="diag-body" style="padding:14px">' +
    '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:14px">' +
    '<div style="text-align:center"><div style="font-size:22px;font-weight:700;color:var(--t1)" id="gp">100</div><div style="font-size:11px;color:var(--t3)">Pressure (kPa)</div></div>' +
    '<div style="text-align:center"><div style="font-size:22px;font-weight:700;color:var(--t1)" id="gv">24.8</div><div style="font-size:11px;color:var(--t3)">Volume (dm\u00b3)</div></div>' +
    '<div style="text-align:center"><div style="font-size:22px;font-weight:700;color:var(--t1)" id="gt">298</div><div style="font-size:11px;color:var(--t3)">Temperature (K)</div></div>' +
    '</div>' +
    '<div style="margin-bottom:10px"><label style="font-size:11px;color:var(--t2)">n (mol): <b id="gn-val">1.00</b></label><br>' +
    '<input type="range" min="10" max="500" value="100" oninput="Content.updateGasLaw()" id="gas-n" style="width:100%"></div>' +
    '<div style="margin-bottom:10px"><label style="font-size:11px;color:var(--t2)">T (K): <b id="gT-val">298</b></label><br>' +
    '<input type="range" min="100" max="600" value="298" oninput="Content.updateGasLaw()" id="gas-T" style="width:100%"></div>' +
    '<div style="margin-bottom:6px"><label style="font-size:11px;color:var(--t2)">P (kPa): <b id="gP-val">100</b></label><br>' +
    '<input type="range" min="10" max="500" value="100" oninput="Content.updateGasLaw()" id="gas-P" style="width:100%"></div>' +
    '<div style="font-size:11px;color:var(--t3);font-family:var(--mono)">PV = nRT \u2192 V = nRT/P</div>' +
    '</div></div>';
  };

  function showPhoton(label, color) {
    var lbl = document.getElementById('photon-label');
    var circ = document.getElementById('photon-circle');
    if (lbl) { lbl.textContent = label; lbl.setAttribute('fill', color); lbl.setAttribute('opacity','1'); }
    if (circ) { circ.setAttribute('stroke', color); circ.setAttribute('opacity','1'); }
  }

  function updateGasLaw() {
    var n = parseInt(document.getElementById('gas-n').value) / 100;
    var T = parseInt(document.getElementById('gas-T').value);
    var p = parseInt(document.getElementById('gas-P').value);
    var R = 8.31;
    var V = (n * R * T) / (p * 1000) * 1000; // dm3
    document.getElementById('gp').textContent = p;
    document.getElementById('gv').textContent = V.toFixed(1);
    document.getElementById('gt').textContent = T;
    document.getElementById('gn-val').textContent = n.toFixed(2);
    document.getElementById('gT-val').textContent = T;
    document.getElementById('gP-val').textContent = p;
  }

  DIAGRAMS.orbitalFilling = function() {
    var boxes = [
      { label:'1s', x:20, y:140, n:1 },
      { label:'2s', x:20, y:110, n:2 },
      { label:'2p\u2093', x:70, y:110, n:2 },{ label:'2p\u028f', x:115, y:110, n:2 },{ label:'2p\u1d63', x:160, y:110, n:2 },
      { label:'3s', x:20, y:80, n:3 },
      { label:'3p\u2093', x:70, y:80, n:3 },{ label:'3p\u028f', x:115, y:80, n:3 },{ label:'3p\u1d63', x:160, y:80, n:3 },
      { label:'4s', x:20, y:50, n:4 },
      { label:'3d\u2081', x:220, y:60, n:3 },{ label:'3d\u2082', x:265, y:60, n:3 },{ label:'3d\u2083', x:310, y:60, n:3 },{ label:'3d\u2084', x:355, y:60, n:3 },{ label:'3d\u2085', x:400, y:60, n:3 },
    ];
    var orbitals = boxes.map(function(b, i) {
      return '<g id="orb_' + i + '" onclick="Content.fillOrbital(' + i + ')" style="cursor:pointer">' +
        '<rect x="' + b.x + '" y="' + b.y + '" width="38" height="22" rx="3" fill="var(--bg2)" stroke="var(--brd2)" stroke-width="1"/>' +
        '<text id="orb-lbl-' + i + '" x="' + (b.x+19) + '" y="' + (b.y+14) + '" text-anchor="middle" font-size="9" fill="var(--t3)">' + b.label + '</text>' +
        '<text id="orb-e-' + i + '" x="' + (b.x+19) + '" y="' + (b.y+14) + '" text-anchor="middle" font-size="13" fill="var(--primary)" opacity="0"></text>' +
        '</g>';
    });
    return '<div class="diag"><div class="diag-title">Orbital filling diagram \u2014 click orbitals to fill in order (Aufbau + Hund)</div>' +
    '<div class="diag-body">' +
    '<svg id="orb-svg" width="100%" viewBox="0 0 460 200" style="display:block;overflow:visible">' +
    '<text x="8" y="195" font-size="9" fill="var(--t3)">Energy</text>' +
    '<line x1="8" y1="165" x2="8" y2="40" stroke="var(--t3)" stroke-width="1" marker-end="url(#harr)"/>' +
    orbitals.join('') +
    '<text x="230" y="185" text-anchor="middle" font-size="10" fill="var(--t3)" id="orb-count">0 electrons | Click boxes to fill \u2014 follows Aufbau principle</text>' +
    '</svg>' +
    '<div style="padding:6px 10px 2px;display:flex;gap:8px">' +
    '<button onclick="Content.resetOrbitals()" style="padding:4px 12px;border-radius:6px;border:1px solid var(--brd2);background:var(--bg2);color:var(--t2);font-size:12px;cursor:pointer">Reset</button>' +
    '<button onclick="Content.fillNextOrbital()" style="padding:4px 12px;border-radius:6px;border:none;background:var(--primary);color:#fff;font-size:12px;cursor:pointer">Add e\u207b</button>' +
    '</div></div></div>';
  };

  var _orbState = [];
  var _orbOrder = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]; // aufbau order
  function resetOrbitals() {
    _orbState = new Array(15).fill(0);
    for (var i = 0; i < 15; i++) {
      var el = document.getElementById('orb-e-' + i);
      if (el) { el.setAttribute('opacity','0'); el.textContent = ''; }
      var rect = document.getElementById('orb_' + i);
      if (rect) rect.querySelector('rect').setAttribute('fill','var(--bg2)');
    }
    var cnt = document.getElementById('orb-count');
    if (cnt) cnt.textContent = '0 electrons | Click boxes to fill \u2014 follows Aufbau principle';
  }
  function fillOrbital(idx) {
    var state = _orbState[idx] || 0;
    if (state >= 2) return;
    _orbState[idx] = state + 1;
    var el = document.getElementById('orb-e-' + idx);
    var rect = document.getElementById('orb_' + idx);
    if (!el || !rect) return;
    el.textContent = state === 0 ? '\u2191' : '\u2191\u2193';
    el.setAttribute('opacity','1');
    rect.querySelector('rect').setAttribute('fill','var(--primary-l)');
    var total = _orbState.reduce(function(a,b){return a+b;}, 0);
    var cnt = document.getElementById('orb-count');
    if (cnt) cnt.textContent = total + ' electron' + (total===1?'':'s') + ' | Element Z=' + total;
  }
  function fillNextOrbital() {
    for (var i = 0; i < _orbOrder.length; i++) {
      var idx = _orbOrder[i];
      if ((_orbState[idx] || 0) < 2) { fillOrbital(idx); return; }
    }
  }
  if (!_orbState.length) _orbState = new Array(15).fill(0);

  // ─ Toggle understanding collapse ──────────────────────────
  function toggleUnderstanding(uid) {
    var body = document.getElementById('u-body_' + uid);
    var el = document.getElementById(uid);
    if (!body) return;
    body.classList.toggle('closed');
    var chev = el && el.querySelector('.u-chev');
    if (chev) chev.classList.toggle('open');
  }

  // ─ Render an understanding ──────────────────────────────
  function renderUnderstanding(u) {
    if (!u) return '';
    var status = Progress.getStatus(u.id);
    var statusLabels = { ns: 'Not started', rv: 'Reviewing', cf: 'Confident', nr: 'Not relevant' };
    var shortCode = u.code || u.id;
    var view = APP && APP.getCurrentView ? APP.getCurrentView() : 'textbook';
    var ct = u.content ? u.content[view === 'studyguide' ? 'studyGuide' : 'textbook'] : null;
    var html = '<div class="understanding" id="' + u.id + '">';

    // Subsection header
    html += '<div class="u-header" onclick="Content.toggleUnderstanding(\'' + u.id + '\')">' +
      '<span class="u-code">' + shortCode + '</span>' +
      '<span class="u-title">' + (u.subtopicTitle || '') + '</span>' +
      '<span class="status-dot ' + status + '" onclick="UI.handleStatusClick(\'' + u.id + '\',this);event.stopPropagation()" title="' + statusLabels[status] + ' \u2014 click to cycle"></span>' +
      '<span class="u-chev open">&#9660;</span>' +
    '</div>';

    // Body with statement and content
    html += '<div class="u-body" id="u-body_' + u.id + '">';
    html += '<div class="u-stat">' + u.statement + '</div>';
    if (ct) {
      if (ct.explanation) html += '<p>' + ct.explanation + '</p>';
      if (ct.essentials) html += '<p>' + ct.essentials + '</p>';
      if (ct.keyPoints && ct.keyPoints.length) html += kr('Key points', ct.keyPoints, u.id);
      if (ct.formulae && ct.formulae.length) {
        ct.formulae.forEach(function(f) { html += fbox(f); });
      }
      if (ct.workedExamples && ct.workedExamples.length) {
        ct.workedExamples.forEach(function(ex) { html += eg(ex.title, ex.body); });
      }
      if (ct.warnings && ct.warnings.length) {
        ct.warnings.forEach(function(w) { html += warn(w); });
      }
      if (ct.diagrams && ct.diagrams.length) {
        ct.diagrams.forEach(function(d) {
          if (DIAGRAMS[d]) html += DIAGRAMS[d]();
        });
      }
    }
    if (u.examTips && u.examTips.length) {
      u.examTips.forEach(function(t) { html += tip('', t); });
    }
    if (u.connections && u.connections.length) html += conns(u.connections);
    
    // My Notes box
    html += _renderNotesBox(u.id);
    
    html += '</div></div>';
    return html;
  }
  
  // Render collapsible comments box for an understanding
  function _renderNotesBox(uid) {
    var notes = Progress.getNotes(uid) || '';
    var hasNotes = notes.trim().length > 0;
    var html = '<div class="u-notes-box' + (hasNotes ? ' has-notes' : '') + '">';
    html += '<div class="u-notes-toggle" onclick="Content.toggleNotes(\'' + uid + '\')">';
    html += '<span class="u-notes-icon">' + (hasNotes ? '💬' : '📄') + '</span>';
    html += '<span>Comments</span>';
    if (hasNotes) {
      var lineCount = notes.split('\n').filter(function(l) { return l.trim(); }).length;
      html += '<span class="u-notes-count">(' + lineCount + ' line' + (lineCount !== 1 ? 's' : '') + ')</span>';
    }
    html += '<span class="u-notes-arrow">▼</span>';
    html += '</div>';
    html += '<div class="u-notes-content" id="notes_' + uid + '" style="display:none">';
    html += '<textarea class="u-notes-textarea" id="notes-ta_' + uid + '" placeholder="Add your comments here..." onchange="Content.saveNotes(\'' + uid + '\')" onblur="Content.saveNotes(\'' + uid + '\')">' + notes.replace(/</g, '&lt;') + '</textarea>';
    html += '</div>';
    html += '</div>';
    return html;
  }
  
  function toggleNotes(uid) {
    var content = document.getElementById('notes_' + uid);
    var box = content ? content.closest('.u-notes-box') : null;
    if (content) {
      var isHidden = content.style.display === 'none';
      content.style.display = isHidden ? 'block' : 'none';
      if (box) {
        var arrow = box.querySelector('.u-notes-arrow');
        if (arrow) arrow.textContent = isHidden ? '▲' : '▼';
      }
      if (isHidden) {
        var ta = document.getElementById('notes-ta_' + uid);
        if (ta) ta.focus();
      }
    }
  }
  
  function saveNotes(uid) {
    var ta = document.getElementById('notes-ta_' + uid);
    if (ta) {
      var notes = ta.value;
      Progress.setNotes(uid, notes);
      var box = ta.closest('.u-notes-box');
      if (box) {
        var hasNotes = notes.trim().length > 0;
        box.classList.toggle('has-notes', hasNotes);
        var icon = box.querySelector('.u-notes-icon');
        if (icon) icon.textContent = hasNotes ? '📝' : '📄';
        var count = box.querySelector('.u-notes-count');
        if (count) {
          var lineCount = notes.split('\n').filter(function(l) { return l.trim(); }).length;
          count.textContent = hasNotes ? '(' + lineCount + ' line' + (lineCount !== 1 ? 's' : '') + ')' : '';
        } else if (hasNotes) {
          var toggle = box.querySelector('.u-notes-toggle');
          var lineCount = notes.split('\n').filter(function(l) { return l.trim(); }).length;
          var countSpan = document.createElement('span');
          countSpan.className = 'u-notes-count';
          countSpan.textContent = '(' + lineCount + ' line' + (lineCount !== 1 ? 's' : '') + ')';
          toggle.insertBefore(countSpan, toggle.querySelector('.u-notes-arrow'));
        }
      }
    }
  }

  // ─ Render a topic block ─────────────────────────────────
  function renderTopicBlock(block) {
    var uid = block.understandings[0] || block.id;
    var status = Progress.getStatus(uid);
    var html = '<div class="tb" id="tb_' + block.id + '">';
    html += '<div class="tb-head" onclick="Content.toggleBlock(\'' + block.id + '\')">' +
      '<span class="th-code">' + block.code + '</span>' +
      '<span class="th-title">' + block.title + '</span>' +
      '<span class="status-dot ' + status + '" onclick="UI.handleStatusClick(\'' + uid + '\',this);event.stopPropagation()" title="Click to cycle status"></span>' +
      '<span class="th-chev open">&#9660;</span></div>';
    html += '<div class="tb-body" id="tb-body_' + block.id + '">';
    block.understandings.forEach(function(uid) {
      var u = window.DB && window.DB.allUnderstandings[uid];
      if (u) html += renderUnderstanding(u);
    });
    html += '</div></div>';
    return html;
  }

  function toggleBlock(id) {
    var body = document.getElementById('tb-body_' + id);
    var head = document.getElementById('tb_' + id);
    if (!body) return;
    body.classList.toggle('closed');
    var chev = head.querySelector('.th-chev');
    if (chev) chev.classList.toggle('open');
  }

  // ─ Main render functions ─────────────────────────────────
  function renderTextbook(section) {
    var DB = window.DB;
    if (!DB) return '<div class="empty"><h3>No data loaded</h3></div>';
    var sec = DB.sections && DB.sections.find(function(s){ return s.id === section; });
    if (!sec) return '<div class="empty"><h3>Section not found</h3></div>';
    var html = '<div class="c-page">';
    html += '<h2>' + sec.longTitle + '</h2>';
    html += '<p class="guiding">' + (sec.guidingQuestion || sec.description || '') + '</p>';
    if (sec.examWeight) {
      html += '<p class="guiding" style="font-size:11px;color:var(--t3)">AP Exam Weight: ' + sec.examWeight + '</p>';
    }
    (sec.subtopics || []).forEach(function(sub) {
      html += '<div style="font-size:11px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:.07em;margin:18px 0 10px;padding-bottom:5px;border-bottom:1px solid var(--brd)">' +
        sub.code + ' ' + sub.title +
        (sub.learningObjectives && sub.learningObjectives.length ? ' <span style="font-weight:400;color:var(--t4)">\u00b7 ' + sub.learningObjectives.join(', ') + '</span>' : '') +
        '</div>';
      (sub.blocks || []).forEach(function(block) { html += renderTopicBlock(block); });
    });
    html += '</div>';
    return html;
  }

  function renderStudyGuide(section) {
    return renderTextbook(section);
  }

  function renderConceptView() {
    var DB = window.DB;
    if (!DB || !DB.concepts || !DB.concepts.length) return '<div class="empty"><h3>No concept data</h3></div>';
    var html = '<div class="c-page"><h2>Concept View</h2><p class="guiding">Content organised by cross-cutting chemical concept rather than unit order.</p>';
    DB.concepts.forEach(function(concept) {
      html += '<div class="cv-group">';
      html += '<div class="cv-head"><div class="cv-name">' + concept.name + '</div><div class="cv-desc">' + concept.description + '</div></div>';
      html += '<div class="cv-items">';
      (concept.understandingIds || []).forEach(function(uid) {
        var u = DB.allUnderstandings && DB.allUnderstandings[uid];
        if (!u) return;
        var status = Progress.getStatus(uid);
        html += '<div class="cv-item" onclick="APP.jumpToUnderstanding(\'' + uid + '\')">' +
          '<div class="cv-code">' + u.code + ' <span class="sp sp-' + (u.section || '').replace('unit','u') + '">' + u.section + '</span></div>' +
          '<div class="cv-stmt">' + u.statement.slice(0,120) + (u.statement.length > 120 ? '...' : '') + '</div>' +
          '<div style="display:flex;gap:6px;margin-top:3px;align-items:center"><span class="sb-dot ' + status + '"></span><span class="cv-sec">' + u.subtopicTitle + '</span></div>' +
          '</div>';
      });
      html += '</div></div>';
    });
    html += '</div>';
    return html;
  }

  function renderDiagramView(section) {
    var DB = window.DB;
    if (!DB) return '<div class="empty"><h3>No data loaded</h3></div>';
    var sec = DB.sections && DB.sections.find(function(s){ return s.id === section; });
    var secTitle = sec ? sec.longTitle : section;
    var diagrams = [];
    // Collect all diagrams from understandings in this section
    var us = Object.values(DB.allUnderstandings || {});
    us.forEach(function(u) {
      if (u.section !== section) return;
      var view = 'textbook';
      var ct = u.content ? u.content[view] : null;
      if (ct && ct.diagrams && ct.diagrams.length) {
        ct.diagrams.forEach(function(d) {
          if (DIAGRAMS[d]) {
            diagrams.push({ name: d, uid: u.id, code: u.code, statement: u.statement, render: DIAGRAMS[d] });
          }
        });
      }
    });
    if (!diagrams.length) {
      return '<div class="c-page"><h2>' + secTitle + ' \u2014 Diagrams</h2>' +
        '<div class="empty"><h3>No interactive diagrams for this unit</h3>' +
        '<p>Try Unit 1 (Atomic Structure) or Unit 3 (Gases) for interactive diagrams.</p></div></div>';
    }
    var html = '<div class="c-page"><h2>' + secTitle + ' \u2014 Diagrams</h2>' +
      '<p class="guiding">Interactive diagrams from ' + secTitle + '. Click and explore each diagram.</p>';
    diagrams.forEach(function(d) {
      html += '<div class="diag-view-card">' +
        '<div class="diag-view-head">' +
          '<span class="diag-view-code">' + d.code + '</span>' +
          '<span class="diag-view-title">' + d.statement.slice(0, 80) + (d.statement.length > 80 ? '...' : '') + '</span>' +
        '</div>' +
        d.render() +
      '</div>';
    });
    html += '</div>';
    return html;
  }

  function renderOverview() {
    var DB = window.DB;
    if (!DB) return '';
    var stats = Progress.getStats();
    var html = '<div class="c-page">';
    html += '<h2>AP Chemistry \u2014 Interactive Database</h2>';
    html += '<p class="guiding">AP Chemistry \u00b7 9 Units \u00b7 Complete study companion</p>';
    html += '<div class="ov-grid">';
    (DB.sections || []).forEach(function(sec) {
      var secStats = { total: 0, cf: 0 };
      (sec.subtopics || []).forEach(function(sub) {
        (sub.blocks || []).forEach(function(b) {
          (b.understandings || []).forEach(function(uid) {
            secStats.total++;
            if (Progress.getStatus(uid) === 'cf') secStats.cf++;
          });
        });
      });
      var secPct = secStats.total ? Math.round(100 * secStats.cf / secStats.total) : 0;
      html += '<div class="ov-card" onclick="APP.navigateToSection(\'' + sec.id + '\')">' +
        '<div class="ov-num">' + sec.id + '</div>' +
        '<div class="ov-title">' + sec.title + '</div>' +
        '<div class="ov-desc">' + (sec.description || '') + '</div>' +
        (sec.examWeight ? '<div class="ov-hours">Exam weight: ' + sec.examWeight + '</div>' : '') +
        '<div class="ov-pbar"><div class="ov-pbar-fill" style="width:' + secPct + '%"></div></div>' +
        '</div>';
    });
    html += '</div>';
    html += '</div>';
    return html;
  }

  return {
    renderTextbook: renderTextbook,
    renderStudyGuide: renderStudyGuide,
    renderConceptView: renderConceptView,
    renderDiagramView: renderDiagramView,
    renderOverview: renderOverview,
    toggleKPFlag: toggleKPFlag,
    toggleBlock: toggleBlock,
    toggleUnderstanding: toggleUnderstanding,
    toggleNotes: toggleNotes,
    saveNotes: saveNotes,
    showPhoton: showPhoton,
    updateGasLaw: updateGasLaw,
    fillOrbital: fillOrbital,
    fillNextOrbital: fillNextOrbital,
    resetOrbitals: resetOrbitals,
    DIAGRAMS: DIAGRAMS
  };
})();
