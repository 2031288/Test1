// AP Chemistry Database — Configuration
// Edit this file to set your Claude API key
// Alternatively, enter it in the app: Settings > API Key

window.AP_CONFIG = {
  // Paste your Anthropic API key here (starts with "sk-ant-")
  apiKey: "",

  // Claude model to use for question generation
  model: "claude-sonnet-4-20250514",

  // Default settings
  defaults: {
    timerSeconds: 90,
    timerEnabled: false,
    theme: "auto",      // "auto", "light", or "dark"
    defaultView: "textbook"  // "textbook", "studyguide", or "concept"
  }
};
