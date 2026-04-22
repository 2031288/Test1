
// Claude API integration
window.API = (function() {
  var MODEL = 'claude-sonnet-4-20250514';

  function _getKey() {
    var fromSettings = Progress.getSettings().apiKey;
    var fromConfig = (window.AP_CONFIG || {}).apiKey || '';
    return fromSettings || fromConfig || '';
  }

  function _hasKey() { return _getKey().startsWith('sk-ant-'); }

  function getStatus() {
    if (_hasKey()) return { ok: true, msg: 'API key loaded \u2713' };
    return { ok: false, msg: 'No valid API key \u2014 enter one in Settings' };
  }

  function generateQuestion(opts, onChunk, onDone, onError) {
    var key = _getKey();
    if (!key) { onError('No API key. Go to Settings to add one.'); return; }

    var u = opts.understanding || {};
    var system = 'You are an expert AP Chemistry examiner. Generate exactly one exam-style question in valid JSON format. Do not include any text outside the JSON object.';
    var prompt = 'Generate a ' + (opts.type || 'mcq') + ' question at ' + (opts.difficulty || 'medium') + ' difficulty for this AP Chemistry understanding:\n\nCode: ' + (u.code || opts.code || '') + '\nStatement: ' + (u.statement || '') + '\nCommand term: ' + (opts.commandTerm || 'calculate') + '\n\nReturn JSON with these exact fields:\n{\n  "stem": "question text",\n  "options": {"A":"...","B":"...","C":"...","D":"..."} (MCQ only, omit for other types),\n  "answer": "A" (the correct option letter for MCQ, or full answer for other types),\n  "markScheme": "mark scheme points, one per line starting with \u2022",\n  "explanation": "detailed explanation for student",\n  "marks": 2\n}';

    var body = JSON.stringify({
      model: MODEL,
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompt }],
      system: system
    });

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.anthropic.com/v1/messages', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('x-api-key', key);
    xhr.setRequestHeader('anthropic-version', '2023-06-01');
    xhr.setRequestHeader('anthropic-dangerous-direct-browser-access', 'true');
    xhr.timeout = 30000;
    xhr.onload = function() {
      if (xhr.status === 200) {
        try {
          var data = JSON.parse(xhr.responseText);
          var text = data.content[0].text;
          var jsonMatch = text.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            var q = JSON.parse(jsonMatch[0]);
            q.id = 'API_' + Date.now();
            q.source = 'api';
            q.type = opts.type || 'mcq';
            q.understandingId = u.id || '';
            q.section = u.section || 'unit1';
            q.concepts = u.concepts || [];
            q.difficulty = opts.difficulty === 'easy' ? 1 : opts.difficulty === 'hard' ? 3 : 2;
            onDone(q);
          } else { onError('Could not parse JSON from response.'); }
        } catch(e) { onError('Parse error: ' + e.message); }
      } else {
        try { var err = JSON.parse(xhr.responseText); onError(err.error && err.error.message || 'API error ' + xhr.status); }
        catch(e) { onError('API error ' + xhr.status); }
      }
    };
    xhr.onerror = function() { onError('Network error \u2014 check your internet connection.'); };
    xhr.ontimeout = function() { onError('Request timed out.'); };
    xhr.send(body);
  }

  return { getStatus: getStatus, hasKey: _hasKey, generateQuestion: generateQuestion };
})();
