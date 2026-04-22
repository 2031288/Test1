
// Progress tracking — Hybrid local file + localStorage persistence
// Data is saved to localStorage AND can be exported/imported via sessions/userdata.js
// This allows progress to be portable across browsers/devices by copying the userdata.js file
window.Progress = (function() {
  const KEY = 'apchem_progress_v1';
  const SESS_KEY = 'apchem_sessions_v1';
  const SKEY = 'apchem_settings_v1';
  const KP_KEY = 'apchem_kpflags_v1';
  const ANNOT_KEY = 'apchem_annotations_v1';
  const NOTEBOOK_KEY = 'apchem_notebook_v1';
  
  // Track if data has changed since last save
  var _dirty = false;
  var _lastSaveTime = Date.now();

  // ═══════════════════════════════════════════════════════════════════
  // CORE DATA FUNCTIONS
  // ═══════════════════════════════════════════════════════════════════
  
  // Initialize from userdata.js if available (loaded before this script)
  function _initFromFile() {
    if (window.USERDATA) {
      try {
        var fileData = window.USERDATA;
        if (fileData.progress) {
          var existing = _loadFromStorage(KEY) || {};
          var merged = Object.assign({}, existing, fileData.progress);
          _saveToStorage(KEY, merged);
        }
        if (fileData.sessions) {
          var existingSess = _loadFromStorage(SESS_KEY) || [];
          var allSess = fileData.sessions.concat(existingSess);
          var seen = {};
          var deduped = allSess.filter(function(s) {
            if (!s.id || seen[s.id]) return false;
            seen[s.id] = true;
            return true;
          });
          deduped.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
          _saveToStorage(SESS_KEY, deduped.slice(0, 100));
        }
        if (fileData.settings) {
          var existingSettings = _loadFromStorage(SKEY) || {};
          _saveToStorage(SKEY, Object.assign({}, existingSettings, fileData.settings));
        }
        if (fileData.keyPointFlags) {
          var existingFlags = _loadFromStorage(KP_KEY) || {};
          _saveToStorage(KP_KEY, Object.assign({}, existingFlags, fileData.keyPointFlags));
        }
        if (fileData.annotations) {
          var existingAnnot = _loadFromStorage(ANNOT_KEY) || [];
          var allAnnot = fileData.annotations.concat(existingAnnot);
          var seenAnnot = {};
          var dedupedAnnot = allAnnot.filter(function(a) {
            if (!a.id || seenAnnot[a.id]) return false;
            seenAnnot[a.id] = true;
            return true;
          });
          _saveToStorage(ANNOT_KEY, dedupedAnnot);
        }
        if (fileData.notebook) {
          var existingNotes = _loadFromStorage(NOTEBOOK_KEY) || [];
          var allNotes = fileData.notebook.concat(existingNotes);
          var seenNotes = {};
          var dedupedNotes = allNotes.filter(function(n) {
            if (!n.id || seenNotes[n.id]) return false;
            seenNotes[n.id] = true;
            return true;
          });
          _saveToStorage(NOTEBOOK_KEY, dedupedNotes);
        }
        console.log('[Progress] Loaded data from userdata.js');
      } catch (e) {
        console.warn('[Progress] Error loading userdata.js:', e);
      }
    }
  }

  function _loadFromStorage(key) {
    try { return JSON.parse(localStorage.getItem(key)); }
    catch(e) { return null; }
  }
  function _saveToStorage(key, data) {
    try { localStorage.setItem(key, JSON.stringify(data)); } catch(e) {}
  }

  function _load() {
    return _loadFromStorage(KEY) || {};
  }
  function _save(data) {
    _saveToStorage(KEY, data);
    _dirty = true;
  }
  function _loadSessions() {
    return _loadFromStorage(SESS_KEY) || [];
  }
  function _saveSessions(arr) {
    _saveToStorage(SESS_KEY, arr);
    _dirty = true;
  }

  // ═══════════════════════════════════════════════════════════════════
  // STATUS TRACKING
  // ═══════════════════════════════════════════════════════════════════

  function getStatus(uid) {
    return (_load()[uid] || {}).status || 'ns';
  }
  function setStatus(uid, status) {
    var data = _load();
    data[uid] = data[uid] || {};
    data[uid].status = status;
    data[uid].lastUpdated = new Date().toISOString();
    _save(data);
  }
  function cycleStatus(uid) {
    var cur = getStatus(uid);
    var next = cur === 'ns' ? 'rv' : cur === 'rv' ? 'cf' : cur === 'cf' ? 'nr' : 'ns';
    setStatus(uid, next);
    return next;
  }
  function getAll() { return _load(); }
  function getStats() {
    var data = _load();
    var all = window.DB ? Object.keys(window.DB.allUnderstandings || {}) : [];
    var total = all.length;
    var ns = 0, rv = 0, cf = 0, nr = 0;
    all.forEach(function(uid) {
      var s = (data[uid] || {}).status || 'ns';
      if (s === 'ns') ns++;
      else if (s === 'rv') rv++;
      else if (s === 'cf') cf++;
      else if (s === 'nr') nr++;
    });
    return { total: total, ns: ns, rv: rv, cf: cf, nr: nr };
  }

  // Notes
  function getNotes(uid) {
    return (_load()[uid] || {}).notes || '';
  }
  function setNotes(uid, notes) {
    var data = _load();
    data[uid] = data[uid] || {};
    data[uid].notes = notes;
    _save(data);
  }
  function getAllNotes() {
    var data = _load();
    var result = {};
    Object.keys(data).forEach(function(uid) {
      if (data[uid] && data[uid].notes) {
        result[uid] = data[uid].notes;
      }
    });
    return result;
  }

  // ═══════════════════════════════════════════════════════════════════
  // KEY POINT FLAGS
  // ═══════════════════════════════════════════════════════════════════

  function getKeyPointFlags() { return _loadFromStorage(KP_KEY) || {}; }
  function isKeyPointFlagged(kpId) { return !!(getKeyPointFlags()[kpId]); }
  function toggleKeyPointFlag(kpId) {
    var flags = getKeyPointFlags();
    if (flags[kpId]) { delete flags[kpId]; _saveToStorage(KP_KEY, flags); _dirty = true; return false; }
    else { flags[kpId] = new Date().toISOString(); _saveToStorage(KP_KEY, flags); _dirty = true; return true; }
  }

  // ═══════════════════════════════════════════════════════════════════
  // IMPORT/EXPORT — PORTABLE DATA
  // ═══════════════════════════════════════════════════════════════════

  function _getAllData() {
    return {
      _format: 'AP Chemistry Progress Data',
      _version: 3,
      _exported: new Date().toISOString(),
      progress: _load(),
      sessions: _loadSessions(),
      settings: getSettings(),
      keyPointFlags: getKeyPointFlags(),
      annotations: _loadFromStorage(ANNOT_KEY) || [],
      notebook: _loadFromStorage(NOTEBOOK_KEY) || []
    };
  }

  function exportJSON() {
    return JSON.stringify(_getAllData(), null, 2);
  }

  // Export as downloadable userdata.js file
  function exportToFile() {
    var data = _getAllData();
    var content = '// AP Chemistry User Data — Place this file in the sessions/ folder\n' +
      '// Last exported: ' + data._exported + '\n' +
      '// To restore progress: copy this file to sessions/userdata.js and reload\n\n' +
      'window.USERDATA = ' + JSON.stringify(data, null, 2) + ';\n';
    
    var blob = new Blob([content], { type: 'application/javascript' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'userdata.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    _dirty = false;
    _lastSaveTime = Date.now();
    return true;
  }

  function importJSON(jsonStr) {
    try {
      var obj = JSON.parse(jsonStr);
      if (obj.progress) _save(obj.progress);
      if (obj.sessions) _saveSessions(obj.sessions);
      if (obj.settings) _saveToStorage(SKEY, obj.settings);
      if (obj.keyPointFlags) _saveToStorage(KP_KEY, obj.keyPointFlags);
      if (obj.annotations) _saveToStorage(ANNOT_KEY, obj.annotations);
      if (obj.notebook) _saveToStorage(NOTEBOOK_KEY, obj.notebook);
      return true;
    } catch(e) { return false; }
  }

  // Import from file input
  function importFromFile(file) {
    return new Promise(function(resolve, reject) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var content = e.target.result;
        var jsonStr = content;
        if (content.includes('window.USERDATA')) {
          var match = content.match(/window\.USERDATA\s*=\s*(\{[\s\S]*\});?\s*$/);
          if (match) jsonStr = match[1];
        }
        if (importJSON(jsonStr)) {
          resolve(true);
        } else {
          reject(new Error('Invalid file format'));
        }
      };
      reader.onerror = function() { reject(new Error('Failed to read file')); };
      reader.readAsText(file);
    });
  }

  // ═══════════════════════════════════════════════════════════════════
  // SESSIONS
  // ═══════════════════════════════════════════════════════════════════

  function saveSess(session) {
    var sessions = _loadSessions();
    sessions.unshift(session);
    if (sessions.length > 100) sessions = sessions.slice(0, 100);
    _saveSessions(sessions);
  }
  function getSessions(limit) {
    var all = _loadSessions();
    return limit ? all.slice(0, limit) : all;
  }
  function clearSessions() { _saveSessions([]); }

  // ═══════════════════════════════════════════════════════════════════
  // SETTINGS — NO 'level' field (AP doesn't have SL/HL)
  // ═══════════════════════════════════════════════════════════════════

  function getSettings() {
    try {
      var def = { timerEnabled: false, timerSeconds: 90, theme: 'auto', accent: 'teal', fontSize: 'medium', compact: false, apiKey: '', defaultView: 'textbook' };
      var saved = _loadFromStorage(SKEY) || {};
      return Object.assign({}, def, saved);
    } catch(e) {
      return { timerEnabled: false, timerSeconds: 90, theme: 'auto', accent: 'teal', fontSize: 'medium', compact: false, apiKey: '', defaultView: 'textbook' };
    }
  }
  function saveSetting(key, val) {
    var s = getSettings();
    s[key] = val;
    _saveToStorage(SKEY, s);
    _dirty = true;
  }

  // ═══════════════════════════════════════════════════════════════════
  // DIRTY STATE (for save reminders)
  // ═══════════════════════════════════════════════════════════════════

  function isDirty() { return _dirty; }
  function getLastSaveTime() { return _lastSaveTime; }
  function markClean() { _dirty = false; _lastSaveTime = Date.now(); }

  // ═══════════════════════════════════════════════════════════════════
  // ANNOTATIONS (inline comments tied to understandings)
  // ═══════════════════════════════════════════════════════════════════
  
  function _loadAnnotations() {
    return _loadFromStorage(ANNOT_KEY) || [];
  }
  function _saveAnnotations(arr) {
    _saveToStorage(ANNOT_KEY, arr);
    _dirty = true;
  }
  
  function addAnnotation(uid, selectedText, comment) {
    var annotations = _loadAnnotations();
    var annot = {
      id: 'annot_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      uid: uid,
      selectedText: selectedText,
      comment: comment,
      created: new Date().toISOString(),
      updated: new Date().toISOString()
    };
    annotations.unshift(annot);
    _saveAnnotations(annotations);
    return annot;
  }
  
  function updateAnnotation(annotId, comment) {
    var annotations = _loadAnnotations();
    var idx = annotations.findIndex(function(a) { return a.id === annotId; });
    if (idx !== -1) {
      annotations[idx].comment = comment;
      annotations[idx].updated = new Date().toISOString();
      _saveAnnotations(annotations);
      return annotations[idx];
    }
    return null;
  }
  
  function deleteAnnotation(annotId) {
    var annotations = _loadAnnotations();
    var filtered = annotations.filter(function(a) { return a.id !== annotId; });
    _saveAnnotations(filtered);
    return filtered.length < annotations.length;
  }
  
  function getAnnotations(uid) {
    var annotations = _loadAnnotations();
    if (uid) {
      return annotations.filter(function(a) { return a.uid === uid; });
    }
    return annotations;
  }
  
  function getAnnotationsBySection() {
    var annotations = _loadAnnotations();
    var grouped = {};
    annotations.forEach(function(a) {
      var section = a.uid.split('.')[0];
      if (!grouped[section]) grouped[section] = [];
      grouped[section].push(a);
    });
    return grouped;
  }

  // ═══════════════════════════════════════════════════════════════════
  // NOTEBOOK (global notes, not tied to specific content)
  // ═══════════════════════════════════════════════════════════════════
  
  function _loadNotebook() {
    return _loadFromStorage(NOTEBOOK_KEY) || [];
  }
  function _saveNotebook(arr) {
    _saveToStorage(NOTEBOOK_KEY, arr);
    _dirty = true;
  }
  
  function addNotebookEntry(title, content, tags) {
    var notebook = _loadNotebook();
    var entry = {
      id: 'note_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      title: title || 'Untitled Note',
      content: content || '',
      tags: tags || [],
      created: new Date().toISOString(),
      updated: new Date().toISOString()
    };
    notebook.unshift(entry);
    _saveNotebook(notebook);
    return entry;
  }
  
  function updateNotebookEntry(noteId, updates) {
    var notebook = _loadNotebook();
    var idx = notebook.findIndex(function(n) { return n.id === noteId; });
    if (idx !== -1) {
      if (updates.title !== undefined) notebook[idx].title = updates.title;
      if (updates.content !== undefined) notebook[idx].content = updates.content;
      if (updates.tags !== undefined) notebook[idx].tags = updates.tags;
      notebook[idx].updated = new Date().toISOString();
      _saveNotebook(notebook);
      return notebook[idx];
    }
    return null;
  }
  
  function deleteNotebookEntry(noteId) {
    var notebook = _loadNotebook();
    var filtered = notebook.filter(function(n) { return n.id !== noteId; });
    _saveNotebook(filtered);
    return filtered.length < notebook.length;
  }
  
  function getNotebook() {
    return _loadNotebook();
  }
  
  function searchNotebook(query) {
    var notebook = _loadNotebook();
    var q = query.toLowerCase();
    return notebook.filter(function(n) {
      return n.title.toLowerCase().includes(q) || 
             n.content.toLowerCase().includes(q) ||
             n.tags.some(function(t) { return t.toLowerCase().includes(q); });
    });
  }

  // Initialize from file on load
  _initFromFile();

  return {
    // Status
    getStatus: getStatus, setStatus: setStatus, cycleStatus: cycleStatus,
    getAll: getAll, getStats: getStats,
    getNotes: getNotes, setNotes: setNotes, getAllNotes: getAllNotes,
    // Import/Export
    exportJSON: exportJSON, importJSON: importJSON,
    exportToFile: exportToFile, importFromFile: importFromFile,
    // Sessions
    saveSess: saveSess, getSessions: getSessions, clearSessions: clearSessions,
    // Settings
    getSettings: getSettings, saveSetting: saveSetting,
    // Key Point Flags
    getKeyPointFlags: getKeyPointFlags, isKeyPointFlagged: isKeyPointFlagged, toggleKeyPointFlag: toggleKeyPointFlag,
    // Dirty state
    isDirty: isDirty, getLastSaveTime: getLastSaveTime, markClean: markClean,
    // Annotations
    addAnnotation: addAnnotation, updateAnnotation: updateAnnotation, deleteAnnotation: deleteAnnotation,
    getAnnotations: getAnnotations, getAnnotationsBySection: getAnnotationsBySection,
    // Notebook
    addNotebookEntry: addNotebookEntry, updateNotebookEntry: updateNotebookEntry, 
    deleteNotebookEntry: deleteNotebookEntry, getNotebook: getNotebook, searchNotebook: searchNotebook
  };
})();
