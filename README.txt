AP CHEMISTRY — INTERACTIVE DATABASE
=====================================
Version 1.0 | Unit 1 fully built | Skeletons for Units 2-9

SETUP
-----
1. Open index.html in any modern browser (Chrome recommended)
2. For Claude API question generation: edit config.js and paste your API key
   OR enter it in the app under Settings > API Key

FOLDER STRUCTURE
----------------
index.html       — Main app (open this)
config.js        — API key configuration
css/             — Stylesheets
js/              — Application logic
data/            — All chemistry content (editable JS files)
  shared/        — Cross-unit concepts and misconceptions
  unit1/         — Fully populated (Atomic Structure and Properties)
  unit2-9/       — Skeleton (add content to content.js in each)
sessions/        — Question session history (managed by app)
images/          — Diagram images

AP CHEMISTRY UNITS
------------------
Unit 1:  Atomic Structure and Properties (7-9%)
Unit 2:  Molecular and Ionic Compound Structure and Properties (7-9%)
Unit 3:  Intermolecular Forces and Properties (18-22%)
Unit 4:  Chemical Reactions (7-9%)
Unit 5:  Kinetics (7-9%)
Unit 6:  Thermodynamics (7-9%)
Unit 7:  Equilibrium (7-9%)
Unit 8:  Acids and Bases (11-15%)
Unit 9:  Applications of Thermodynamics (7-9%)

KEYBOARD SHORTCUTS
------------------
/            Focus search
→ / ←        Next / previous question (in practice mode)
Space        Reveal answer (practice mode)
1 / 2 / 3   Mark confidence: Not started / Reviewing / Confident
Esc          Close modal / exit practice mode
Ctrl+P       Print current section
?            Show all shortcuts

ADDING CONTENT FOR OTHER UNITS
-------------------------------
Open data/unit2/skeleton.js (or any other skeleton).
Each topic has a placeholder content object.
Fill in the fields following the same schema as unit1/content.js.
The app will automatically display the new content.

INTERCONNECTED TOPICS
---------------------
Topics are cross-referenced across units using the connections array.
Shared concepts (SPQ, SAP, TRA, ENE, EQN) link related material
across all 9 units. The Concept View shows content organized by
these cross-cutting themes rather than unit order.

LICENSE
-------
This database is for personal educational use.
Content aligned to AP Chemistry Course and Exam Description (CED).
Based on "Chemistry: The Central Science" (Brown, LeMay et al.) 15th Ed.
Original worked examples and questions created for this database.
