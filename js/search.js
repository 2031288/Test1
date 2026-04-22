
// Full-text + tag-based search
window.Search = (function() {
  var idx = [];

  function _buildIndex() {
    idx = [];
    var DB = window.DB;
    if (!DB) return;
    // Index understandings
    Object.values(DB.allUnderstandings || {}).forEach(function(u) {
      idx.push({
        type: 'understanding',
        id: u.id,
        section: u.section,
        title: u.code + ' ' + u.subtopicTitle,
        text: [u.statement, u.code, u.subtopicTitle,
               (u.content && u.content.textbook && u.content.textbook.explanation) || '',
               (u.examTips || []).join(' '),
               (u.concepts || []).join(' ')].join(' ').toLowerCase(),
        tags: (u.concepts || []).concat([u.section, u.subtopic]),
        obj: u
      });
    });
    // Index questions
    (DB.allQuestions || []).forEach(function(q) {
      idx.push({
        type: 'question',
        id: q.id,
        section: q.section,
        title: q.id + ' \u2014 ' + (q.commandTerm || ''),
        text: [q.stem, q.id, q.commandTerm || '', q.explanation || ''].join(' ').toLowerCase(),
        tags: (q.concepts || []).concat([q.section, q.type]),
        obj: q
      });
    });
    // Index misconceptions
    (DB.allMisconceptions || []).forEach(function(m) {
      idx.push({
        type: 'misconception',
        id: m.id,
        section: m.section,
        title: 'Misconception: ' + m.misconception.slice(0, 60),
        text: [m.misconception, m.correction, m.why || ''].join(' ').toLowerCase(),
        tags: (m.concepts || []).concat([m.section]),
        obj: m
      });
    });
  }

  function _highlight(text, query) {
    var safe = text.replace(/</g,'&lt;').replace(/>/g,'&gt;');
    if (!query) return safe;
    var re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')', 'gi');
    return safe.replace(re, '<mark>$1</mark>');
  }

  function _excerpt(fullText, query, maxLen) {
    maxLen = maxLen || 120;
    var lower = fullText.toLowerCase();
    var pos = query ? lower.indexOf(query.toLowerCase()) : -1;
    var start = pos > 40 ? pos - 40 : 0;
    var snippet = fullText.slice(start, start + maxLen);
    if (start > 0) snippet = '...' + snippet;
    if (start + maxLen < fullText.length) snippet += '...';
    return _highlight(snippet, query);
  }

  function query(raw) {
    if (!raw || raw.trim().length < 2) return [];
    if (idx.length === 0) _buildIndex();

    var parts = raw.trim().toLowerCase().split(/\s+/);
    var tagParts = parts.filter(function(p) { return p.startsWith('#'); }).map(function(p) { return p.slice(1); });
    var textParts = parts.filter(function(p) { return !p.startsWith('#'); });
    var textQuery = textParts.join(' ');

    var results = idx.filter(function(item) {
      var textMatch = textParts.length === 0 || textParts.every(function(p) { return item.text.includes(p); });
      var tagMatch = tagParts.length === 0 || tagParts.every(function(t) {
        return item.tags.some(function(tag) { return tag && tag.toLowerCase().includes(t); });
      });
      return textMatch && tagMatch;
    });

    return results.slice(0, 20).map(function(item) {
      return {
        type: item.type,
        id: item.id,
        section: item.section,
        title: item.title,
        excerpt: _excerpt(item.obj.statement || item.obj.stem || item.obj.misconception || '', textQuery),
        obj: item.obj
      };
    });
  }

  function rebuild() { idx = []; _buildIndex(); }

  return { query: query, rebuild: rebuild };
})();
