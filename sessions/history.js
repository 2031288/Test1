// Sessions History — Schema documentation
// Question sessions are stored in localStorage key: 'apchem_sessions_v1'
// This file documents the schema for reference.

/*
SESSION SCHEMA:
{
  id: 'sess_1234567890',     // unique session ID
  date: '2025-01-15T10:30:00.000Z',  // ISO timestamp
  duration: 840,              // total session duration in seconds
  startTime: 1736937000000,  // Date.now() at start
  filter: {                  // filters active during session
    section: 'unit1',
    type: 'all',
    difficulty: 'all'
  },
  total: 15,                 // total questions attempted
  correct: 12,               // correct MCQ answers
  mcqTotal: 12,              // number of MCQ questions
  results: [                 // individual question results
    {
      qid: 'Q001',
      correct: true,         // true/false (MCQ only; undefined for short/extended)
      time: 45,              // seconds taken (from timer, if enabled)
      answered: true         // whether answer was revealed
    }
  ]
}

PROGRESS SCHEMA (key: 'apchem_progress_v1'):
{
  'U1.1.1': {
    status: 'cf',            // 'ns' | 'rv' | 'cf' | 'nr'
    lastUpdated: '2025-01-15T10:30:00.000Z',
    notes: ''
  }
}

SETTINGS SCHEMA (key: 'apchem_settings_v1'):
{
  apiKey: 'sk-ant-...',
  timerEnabled: false,
  timerSeconds: 90,
  theme: 'auto',
  defaultView: 'textbook'
}
*/
