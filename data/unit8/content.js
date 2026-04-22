/*
 *  AP Chemistry – Unit 8: Acids and Bases
 *  Data file: content.js
 *  Auto-generated — do not hand-edit.
 */

window.DB_U8_CONTENT = {

  /* ───────────────────── METADATA ───────────────────── */
  metadata: {
    id: 'unit8',
    title: 'Unit 8',
    longTitle: 'Unit 8 — Acids and Bases',
    description:
      'Acid-base theories, pH calculations for strong and weak acids/bases, equilibria of weak acids and bases, buffers, titrations, Henderson-Hasselbalch equation, molecular structure and acid strength.',
    guidingQuestion:
      'How do the properties of acids and bases arise from proton-transfer equilibria, and how can we quantitatively predict and control pH in chemical systems?',
    examWeight: '11-15%',

    subtopics: [
      /* 8.1 */
      {
        id: 'U8.1', code: '8.1',
        title: 'Introduction to Acids and Bases',
        learningObjectives: ['SAP-9.A'],
        understandings: ['U8.1.1', 'U8.1.2', 'U8.1.3'],
        blocks: [
          { id: 'B8.1', code: '8.1', title: 'Introduction to Acids and Bases', understandings: ['U8.1.1', 'U8.1.2', 'U8.1.3'] }
        ]
      },
      /* 8.2 */
      {
        id: 'U8.2', code: '8.2',
        title: 'pH and pOH of Strong Acids and Bases',
        learningObjectives: ['SAP-9.B'],
        understandings: ['U8.2.1', 'U8.2.2', 'U8.2.3'],
        blocks: [
          { id: 'B8.2', code: '8.2', title: 'pH and pOH of Strong Acids and Bases', understandings: ['U8.2.1', 'U8.2.2', 'U8.2.3'] }
        ]
      },
      /* 8.3 */
      {
        id: 'U8.3', code: '8.3',
        title: 'Weak Acid and Base Equilibria',
        learningObjectives: ['SAP-9.C'],
        understandings: ['U8.3.1', 'U8.3.2', 'U8.3.3'],
        blocks: [
          { id: 'B8.3', code: '8.3', title: 'Weak Acid and Base Equilibria', understandings: ['U8.3.1', 'U8.3.2', 'U8.3.3'] }
        ]
      },
      /* 8.4 */
      {
        id: 'U8.4', code: '8.4',
        title: 'Acid-Base Reactions and Buffers',
        learningObjectives: ['SAP-9.D'],
        understandings: ['U8.4.1', 'U8.4.2', 'U8.4.3'],
        blocks: [
          { id: 'B8.4', code: '8.4', title: 'Acid-Base Reactions and Buffers', understandings: ['U8.4.1', 'U8.4.2', 'U8.4.3'] }
        ]
      },
      /* 8.5 */
      {
        id: 'U8.5', code: '8.5',
        title: 'Acid-Base Titrations',
        learningObjectives: ['SAP-9.E'],
        understandings: ['U8.5.1', 'U8.5.2', 'U8.5.3'],
        blocks: [
          { id: 'B8.5', code: '8.5', title: 'Acid-Base Titrations', understandings: ['U8.5.1', 'U8.5.2', 'U8.5.3'] }
        ]
      },
      /* 8.6 */
      {
        id: 'U8.6', code: '8.6',
        title: 'Molecular Structure of Acids and Bases',
        learningObjectives: ['SAP-9.F'],
        understandings: ['U8.6.1', 'U8.6.2'],
        blocks: [
          { id: 'B8.6', code: '8.6', title: 'Molecular Structure of Acids and Bases', understandings: ['U8.6.1', 'U8.6.2'] }
        ]
      },
      /* 8.7 */
      {
        id: 'U8.7', code: '8.7',
        title: 'pH and pKa',
        learningObjectives: ['SAP-9.G'],
        understandings: ['U8.7.1', 'U8.7.2'],
        blocks: [
          { id: 'B8.7', code: '8.7', title: 'pH and pKa', understandings: ['U8.7.1', 'U8.7.2'] }
        ]
      },
      /* 8.8 */
      {
        id: 'U8.8', code: '8.8',
        title: 'Properties of Buffers',
        learningObjectives: ['SAP-10.A'],
        understandings: ['U8.8.1', 'U8.8.2', 'U8.8.3'],
        blocks: [
          { id: 'B8.8', code: '8.8', title: 'Properties of Buffers', understandings: ['U8.8.1', 'U8.8.2', 'U8.8.3'] }
        ]
      },
      /* 8.9 */
      {
        id: 'U8.9', code: '8.9',
        title: 'Henderson-Hasselbalch Equation',
        learningObjectives: ['SAP-10.B'],
        understandings: ['U8.9.1', 'U8.9.2', 'U8.9.3'],
        blocks: [
          { id: 'B8.9', code: '8.9', title: 'Henderson-Hasselbalch Equation', understandings: ['U8.9.1', 'U8.9.2', 'U8.9.3'] }
        ]
      },
      /* 8.10 */
      {
        id: 'U8.10', code: '8.10',
        title: 'Buffer Capacity',
        learningObjectives: ['SAP-10.C'],
        understandings: ['U8.10.1', 'U8.10.2'],
        blocks: [
          { id: 'B8.10', code: '8.10', title: 'Buffer Capacity', understandings: ['U8.10.1', 'U8.10.2'] }
        ]
      }
    ]
  },

  /* ───────────────────── UNDERSTANDINGS ───────────────────── */
  understandings: [

    /* ============================================================
       8.1  Introduction to Acids and Bases
       ============================================================ */
    {
      id: 'U8.1.1', code: 'Topic 8.1', subtopic: '8.1',
      subtopicTitle: 'Introduction to Acids and Bases', section: 'unit8',
      concepts: ['acid-base', 'arrhenius', 'bronsted-lowry'],
      statement:
        'An Arrhenius acid produces H+ ions in aqueous solution and an Arrhenius base produces OH- ions; the Bronsted-Lowry model broadens this to proton donors (acids) and proton acceptors (bases), applicable in any solvent.',
      content: {
        textbook: {
          explanation:
            '<p>Two principal models describe acid-base behavior in AP Chemistry:</p>' +
            '<h4>Arrhenius Model</h4>' +
            '<ul>' +
            '<li>An <strong>Arrhenius acid</strong> is a substance that dissociates in water to produce H<sup>+</sup> (more precisely, H<sub>3</sub>O<sup>+</sup>) ions. Example: HCl(aq) &rarr; H<sup>+</sup>(aq) + Cl<sup>&minus;</sup>(aq).</li>' +
            '<li>An <strong>Arrhenius base</strong> is a substance that dissociates in water to produce OH<sup>&minus;</sup> ions. Example: NaOH(aq) &rarr; Na<sup>+</sup>(aq) + OH<sup>&minus;</sup>(aq).</li>' +
            '<li>Limitation: This model only works in aqueous solution and cannot explain why NH<sub>3</sub> is a base (it contains no OH<sup>&minus;</sup>).</li>' +
            '</ul>' +
            '<h4>Br&oslash;nsted-Lowry Model</h4>' +
            '<ul>' +
            '<li>A <strong>Br&oslash;nsted-Lowry acid</strong> is a proton (H<sup>+</sup>) <em>donor</em>.</li>' +
            '<li>A <strong>Br&oslash;nsted-Lowry base</strong> is a proton (H<sup>+</sup>) <em>acceptor</em>.</li>' +
            '<li>This model works in any solvent and explains NH<sub>3</sub> as a base: NH<sub>3</sub> + H<sub>2</sub>O &hArr; NH<sub>4</sub><sup>+</sup> + OH<sup>&minus;</sup>. Here NH<sub>3</sub> accepts a proton from water.</li>' +
            '<li>Every Br&oslash;nsted-Lowry acid-base reaction involves a proton transfer from the acid to the base.</li>' +
            '</ul>' +
            '<p>The AP exam uses the Br&oslash;nsted-Lowry model almost exclusively, but you must recognize the Arrhenius definitions as well.</p>',
          keyPoints: [
            'Arrhenius: acids produce H+ in water; bases produce OH- in water.',
            'Bronsted-Lowry: acids donate protons; bases accept protons.',
            'Bronsted-Lowry is more general and works in non-aqueous solvents.',
            'Water acts as a base when it accepts a proton from an acid, and as an acid when it donates a proton to a base.'
          ],
          formulae: [
            '\\[ \\ce{HA(aq) + H2O(l) <=> H3O+(aq) + A-(aq)} \\]',
            '\\[ \\ce{B(aq) + H2O(l) <=> BH+(aq) + OH-(aq)} \\]'
          ],
          workedExamples: [
            {
              title: 'Identifying Bronsted-Lowry Acids and Bases',
              body:
                '<p><strong>Problem:</strong> Identify the Br&oslash;nsted-Lowry acid and base in the reaction: HF(aq) + H<sub>2</sub>O(l) &hArr; F<sup>&minus;</sup>(aq) + H<sub>3</sub>O<sup>+</sup>(aq).</p>' +
                '<p><strong>Solution:</strong> HF donates a proton to H<sub>2</sub>O, so HF is the <strong>acid</strong> and H<sub>2</sub>O is the <strong>base</strong>. After the proton transfer, F<sup>&minus;</sup> is the <strong>conjugate base</strong> of HF, and H<sub>3</sub>O<sup>+</sup> is the <strong>conjugate acid</strong> of H<sub>2</sub>O.</p>'
            }
          ],
          warnings: [
            'Do not confuse "strong" with "concentrated." A strong acid dissociates completely; concentration refers to molarity.',
            'The Lewis acid-base model (electron-pair acceptor/donor) is NOT tested on the AP Chemistry exam.'
          ],
          diagrams: ['phScale']
        },
        studyGuide: {
          essentials:
            'Arrhenius: H+ donor / OH- producer. Bronsted-Lowry: proton donor (acid) / proton acceptor (base). BL is more general and is the primary model on the AP exam.',
          keyPoints: [
            'Every BL acid-base reaction is a proton transfer.',
            'Water can act as either an acid or a base (amphoteric).'
          ],
          formulae: [
            '\\( \\ce{HA + H2O <=> H3O+ + A-} \\)',
            '\\( \\ce{B + H2O <=> BH+ + OH-} \\)'
          ]
        }
      },
      examTips: [
        'The AP exam expects you to identify BL acid/base AND conjugate pairs in any given reaction.',
        'If asked "which model best explains why NH<sub>3</sub> is a base?", the answer is always Bronsted-Lowry, not Arrhenius.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 3: IMFs — proton transfer depends on bond polarity and strength', sec: 'content' },
        { color: 'purple', label: '→ Topic 8.2: Strong acids/bases dissociate completely', sec: 'content' }
      ],
      questionIds: ['U8Q001', 'U8Q002']
    },

    {
      id: 'U8.1.2', code: 'Topic 8.1', subtopic: '8.1',
      subtopicTitle: 'Introduction to Acids and Bases', section: 'unit8',
      concepts: ['conjugate-pairs'],
      statement:
        'In a Bronsted-Lowry acid-base reaction, each acid has a conjugate base (formed when the acid donates a proton) and each base has a conjugate acid (formed when the base accepts a proton). These form conjugate acid-base pairs.',
      content: {
        textbook: {
          explanation:
            '<p>Every Br&oslash;nsted-Lowry reaction involves <strong>two conjugate acid-base pairs</strong>:</p>' +
            '<p style="text-align:center;">HA + B &hArr; A<sup>&minus;</sup> + BH<sup>+</sup></p>' +
            '<ul>' +
            '<li><strong>Pair 1:</strong> HA (acid) and A<sup>&minus;</sup> (conjugate base) — they differ by one proton.</li>' +
            '<li><strong>Pair 2:</strong> B (base) and BH<sup>+</sup> (conjugate acid) — they differ by one proton.</li>' +
            '</ul>' +
            '<p>The <strong>strength relationship</strong> between conjugates is inverse: a strong acid has a very weak conjugate base (too weak to re-accept the proton), while a weak acid has a relatively stronger conjugate base.</p>' +
            '<p>Examples:</p>' +
            '<ul>' +
            '<li>HCl is a strong acid &rarr; Cl<sup>&minus;</sup> is a negligibly weak conjugate base (does not hydrolyze).</li>' +
            '<li>CH<sub>3</sub>COOH is a weak acid &rarr; CH<sub>3</sub>COO<sup>&minus;</sup> is a moderately strong conjugate base (can hydrolyze to make solutions basic).</li>' +
            '</ul>' +
            '<p>This inverse relationship is the key to predicting whether salt solutions are acidic, basic, or neutral.</p>',
          keyPoints: [
            'Conjugate pairs differ by exactly one proton (H+).',
            'Strong acid → very weak conjugate base (negligible basicity).',
            'Weak acid → relatively strong conjugate base.',
            'Strong base → very weak conjugate acid.',
            'Weak base → relatively strong conjugate acid.'
          ],
          formulae: [
            '\\[ K_a \\times K_b = K_w = 1.0 \\times 10^{-14} \\quad (\\text{at 25 °C, conjugate pair}) \\]'
          ],
          workedExamples: [
            {
              title: 'Identifying Conjugate Pairs',
              body:
                '<p><strong>Problem:</strong> In the reaction NH<sub>3</sub>(aq) + H<sub>2</sub>O(l) &hArr; NH<sub>4</sub><sup>+</sup>(aq) + OH<sup>&minus;</sup>(aq), identify both conjugate acid-base pairs.</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<ul>' +
                '<li><strong>Pair 1:</strong> H<sub>2</sub>O (acid, donates H<sup>+</sup>) and OH<sup>&minus;</sup> (conjugate base).</li>' +
                '<li><strong>Pair 2:</strong> NH<sub>3</sub> (base, accepts H<sup>+</sup>) and NH<sub>4</sub><sup>+</sup> (conjugate acid).</li>' +
                '</ul>' +
                '<p>Note that water acts as the acid here, donating a proton to NH<sub>3</sub>.</p>'
            }
          ],
          warnings: [
            'Do not assume conjugate base is always an anion — a neutral molecule can be a conjugate base (e.g., NH<sub>3</sub> is the conjugate base of NH<sub>4</sub><sup>+</sup>).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Conjugate pairs differ by one H+. Strong acid = very weak conjugate base. Ka × Kb = Kw for any conjugate pair.',
          keyPoints: [
            'Two conjugate pairs in every BL reaction.',
            'Inverse strength relationship governs salt hydrolysis predictions.'
          ],
          formulae: ['\\( K_a \\times K_b = K_w = 1.0 \\times 10^{-14} \\)']
        }
      },
      examTips: [
        'AP FRQs frequently ask: "identify the conjugate acid-base pairs" — always list both pairs.',
        'If Ka × Kb = Kw, you can find Kb for any conjugate base from the Ka of its parent acid.'
      ],
      connections: [
        { color: 'orange', label: '→ Topic 8.3: Ka and Kb quantify the strength of weak acids/bases', sec: 'content' },
        { color: 'teal', label: '→ Topic 8.6: Molecular structure determines relative acid strength', sec: 'content' }
      ],
      questionIds: ['U8Q003']
    },

    {
      id: 'U8.1.3', code: 'Topic 8.1', subtopic: '8.1',
      subtopicTitle: 'Introduction to Acids and Bases', section: 'unit8',
      concepts: ['amphoteric'],
      statement:
        'An amphoteric (amphiprotic) substance can act as either a Bronsted-Lowry acid or a Bronsted-Lowry base depending on the reaction partner. Water is the most important example.',
      content: {
        textbook: {
          explanation:
            '<p>An <strong>amphoteric</strong> (or <strong>amphiprotic</strong>) substance is one that can donate or accept a proton, depending on the other reactant present.</p>' +
            '<p><strong>Water</strong> is the classic example:</p>' +
            '<ul>' +
            '<li>With HCl: H<sub>2</sub>O acts as a <em>base</em> (accepts H<sup>+</sup>): HCl + H<sub>2</sub>O &rarr; H<sub>3</sub>O<sup>+</sup> + Cl<sup>&minus;</sup></li>' +
            '<li>With NH<sub>3</sub>: H<sub>2</sub>O acts as an <em>acid</em> (donates H<sup>+</sup>): NH<sub>3</sub> + H<sub>2</sub>O &hArr; NH<sub>4</sub><sup>+</sup> + OH<sup>&minus;</sup></li>' +
            '</ul>' +
            '<p>Water can also react with itself in the <strong>autoionization</strong> (or autoprotolysis) reaction:</p>' +
            '<p style="text-align:center;">2 H<sub>2</sub>O(l) &hArr; H<sub>3</sub>O<sup>+</sup>(aq) + OH<sup>&minus;</sup>(aq)&emsp;&emsp;K<sub>w</sub> = [H<sub>3</sub>O<sup>+</sup>][OH<sup>&minus;</sup>] = 1.0 &times; 10<sup>&minus;14</sup> at 25 &deg;C</p>' +
            '<p>Other amphiprotic species include hydrogen sulfate (HSO<sub>4</sub><sup>&minus;</sup>), bicarbonate (HCO<sub>3</sub><sup>&minus;</sup>), and dihydrogen phosphate (H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup>). These ions have both a proton to donate and a lone pair to accept one.</p>',
          keyPoints: [
            'Amphoteric/amphiprotic = can act as acid OR base.',
            'Water is the most common amphiprotic substance.',
            'Autoionization of water: Kw = [H<sub>3</sub>O<sup>+</sup>][OH<sup>−</sup>] = 1.0 × 10<sup>−</sup><sup>14</sup> at 25 °C.',
            'HSO<sub>4</sub><sup>−</sup>, HCO<sub>3</sub><sup>−</sup>, H<sub>2</sub>PO<sub>4</sub><sup>−</sup> are amphiprotic ions.',
            'Kw changes with temperature — it increases at higher temperatures.'
          ],
          formulae: [
            '\\[ K_w = [\\ce{H3O+}][\\ce{OH-}] = 1.0 \\times 10^{-14} \\quad (\\text{at 25 °C}) \\]',
            '\\[ \\ce{2 H2O(l) <=> H3O+(aq) + OH-(aq)} \\]'
          ],
          workedExamples: [
            {
              title: 'Autoionization and Kw',
              body:
                '<p><strong>Problem:</strong> At 25 &deg;C, what is [OH<sup>&minus;</sup>] in pure water?</p>' +
                '<p><strong>Solution:</strong> In pure water, [H<sub>3</sub>O<sup>+</sup>] = [OH<sup>&minus;</sup>] = x. K<sub>w</sub> = x&sup2; = 1.0 &times; 10<sup>&minus;14</sup>, so x = 1.0 &times; 10<sup>&minus;7</sup> M. Both [H<sub>3</sub>O<sup>+</sup>] and [OH<sup>&minus;</sup>] equal 1.0 &times; 10<sup>&minus;7</sup> M in pure water at 25 &deg;C.</p>'
            },
            {
              title: 'Is HCO<sub>3</sub><sup>−</sup> Amphoteric?',
              body:
                '<p><strong>Problem:</strong> Show that HCO<sub>3</sub><sup>&minus;</sup> is amphoteric by writing two reactions.</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>As an acid: HCO<sub>3</sub><sup>&minus;</sup> + H<sub>2</sub>O &hArr; CO<sub>3</sub><sup>2&minus;</sup> + H<sub>3</sub>O<sup>+</sup> (donates a proton)</p>' +
                '<p>As a base: HCO<sub>3</sub><sup>&minus;</sup> + H<sub>2</sub>O &hArr; H<sub>2</sub>CO<sub>3</sub> + OH<sup>&minus;</sup> (accepts a proton)</p>' +
                '<p>Because HCO<sub>3</sub><sup>&minus;</sup> can do both, it is amphoteric.</p>'
            }
          ],
          warnings: [
            'Kw = 1.0 × 10<sup>−</sup><sup>14</sup> only at 25 °C. At higher temperatures, Kw is larger, and the pH of pure water drops below 7 — but the water is still neutral because [H<sub>3</sub>O<sup>+</sup>] = [OH<sup>−</sup>].'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Amphoteric species can act as acid or base. Water autoionizes: Kw = 1.0 × 10<sup>−</sup><sup>14</sup> at 25 °C. Neutral ≠ pH 7 at all temperatures — neutral means [H<sub>3</sub>O<sup>+</sup>] = [OH<sup>−</sup>].',
          keyPoints: [
            'HSO<sub>4</sub><sup>−</sup>, HCO<sub>3</sub><sup>−</sup>, H<sub>2</sub>PO<sub>4</sub><sup>−</sup> are common amphiprotic ions.',
            'Kw increases with temperature (autoionization is endothermic).'
          ],
          formulae: ['\\( K_w = [\\ce{H3O+}][\\ce{OH-}] = 1.0 \\times 10^{-14} \\)']
        }
      },
      examTips: [
        'The AP exam loves to test whether you know that neutral water does NOT always have pH = 7 — at T > 25 °C, Kw > 10<sup>−</sup><sup>14</sup> and pH < 7 even though the water is neutral.',
        'When asked to identify amphoteric species, look for ions with both a removable H and a lone pair.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 8.2: Kw connects [H<sub>3</sub>O<sup>+</sup>] and [OH<sup>−</sup>] in all aqueous solutions', sec: 'content' },
        { color: 'purple', label: '→ Unit 6: Thermodynamics — autoionization is endothermic, explaining Kw temperature dependence', sec: 'content' }
      ],
      questionIds: ['U8Q004']
    },

    /* ============================================================
       8.2  pH and pOH of Strong Acids and Bases
       ============================================================ */
    {
      id: 'U8.2.1', code: 'Topic 8.2', subtopic: '8.2',
      subtopicTitle: 'pH and pOH of Strong Acids and Bases', section: 'unit8',
      concepts: ['strong-acid', 'strong-base', 'dissociation'],
      statement:
        'Strong acids (HCl, HBr, HI, HNO<sub>3</sub>, H<sub>2</sub>SO<sub>4</sub>, HClO<sub>4</sub>) dissociate completely in water, so [H<sub>3</sub>O<sup>+</sup>] equals the initial acid concentration. Strong bases (Group 1 and 2 hydroxides) also dissociate completely.',
      content: {
        textbook: {
          explanation:
            '<p><strong>Strong acids</strong> ionize completely in aqueous solution &mdash; there is no equilibrium; the reaction goes to completion:</p>' +
            '<p style="text-align:center;">HCl(aq) + H<sub>2</sub>O(l) &rarr; H<sub>3</sub>O<sup>+</sup>(aq) + Cl<sup>&minus;</sup>(aq)&emsp;(100% ionization)</p>' +
            '<p>The six common strong acids you must memorize for AP Chemistry:</p>' +
            '<ul>' +
            '<li><strong>HCl</strong> &mdash; hydrochloric acid</li>' +
            '<li><strong>HBr</strong> &mdash; hydrobromic acid</li>' +
            '<li><strong>HI</strong> &mdash; hydroiodic acid</li>' +
            '<li><strong>HNO<sub>3</sub></strong> &mdash; nitric acid</li>' +
            '<li><strong>H<sub>2</sub>SO<sub>4</sub></strong> &mdash; sulfuric acid (strong for first proton; second is weak, K<sub>a2</sub> = 0.012)</li>' +
            '<li><strong>HClO<sub>4</sub></strong> &mdash; perchloric acid</li>' +
            '</ul>' +
            '<p><strong>Strong bases</strong> also dissociate completely:</p>' +
            '<ul>' +
            '<li>Group 1 hydroxides: LiOH, NaOH, KOH, RbOH, CsOH</li>' +
            '<li>Heavy Group 2 hydroxides: Ca(OH)<sub>2</sub>, Sr(OH)<sub>2</sub>, Ba(OH)<sub>2</sub> (produce 2 mol OH<sup>&minus;</sup> per formula unit)</li>' +
            '</ul>' +
            '<p>Because dissociation is complete, calculating [H<sub>3</sub>O<sup>+</sup>] or [OH<sup>&minus;</sup>] is straightforward &mdash; it equals the initial concentration (times stoichiometric factor for diprotic/dibasic species).</p>',
          keyPoints: [
            'Strong acids: HCl, HBr, HI, HNO<sub>3</sub>, H<sub>2</sub>SO<sub>4</sub>, HClO<sub>4</sub> — memorize all six.',
            'Strong bases: Group 1 hydroxides + Ca(OH)<sub>2</sub>, Sr(OH)<sub>2</sub>, Ba(OH)<sub>2</sub>.',
            '100% dissociation — no Ka is listed because it is essentially infinite.',
            'For strong acids: [H<sub>3</sub>O<sup>+</sup>] = C_acid (initial concentration).',
            'For Ba(OH)<sub>2</sub> or Ca(OH)<sub>2</sub>: [OH<sup>−</sup>] = 2 × C_base.'
          ],
          formulae: [
            '\\[ [\\ce{H3O+}] = C_{\\text{acid}} \\quad (\\text{strong monoprotic acid}) \\]',
            '\\[ [\\ce{H3O+}] \\approx C_{\\text{acid}} \\quad (\\ce{H2SO4}\\text{, first proton complete}) \\]',
            '\\[ [\\ce{OH-}] = C_{\\text{base}} \\quad (\\text{Group 1 hydroxide}) \\]',
            '\\[ [\\ce{OH-}] = 2 \\times C_{\\text{base}} \\quad (\\text{Group 2 hydroxide}) \\]'
          ],
          workedExamples: [
            {
              title: 'Strong Acid [H<sub>3</sub>O<sup>+</sup>] Calculation',
              body:
                '<p><strong>Problem:</strong> Calculate [H<sub>3</sub>O<sup>+</sup>] in 0.025 M HNO<sub>3</sub>.</p>' +
                '<p><strong>Solution:</strong> HNO<sub>3</sub> is a strong acid &mdash; 100% dissociation. [H<sub>3</sub>O<sup>+</sup>] = 0.025 M.</p>'
            },
            {
              title: 'Strong Base [OH<sup>−</sup>] Calculation',
              body:
                '<p><strong>Problem:</strong> Calculate [OH<sup>&minus;</sup>] in 0.010 M Ba(OH)<sub>2</sub>.</p>' +
                '<p><strong>Solution:</strong> Ba(OH)<sub>2</sub> &rarr; Ba<sup>2+</sup> + 2 OH<sup>&minus;</sup>. Each formula unit produces 2 mol OH<sup>&minus;</sup>. [OH<sup>&minus;</sup>] = 2 &times; 0.010 = 0.020 M.</p>'
            }
          ],
          warnings: [
            'H<sub>2</sub>SO<sub>4</sub> is strong only for its FIRST proton. The second ionization (HSO<sub>4</sub><sup>−</sup> → H<sup>+</sup> + SO<sub>4</sub><sup>2</sup><sup>−</sup>) has Ka<sub>2</sub> = 0.012 and must be treated as a weak acid equilibrium.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            '6 strong acids (HCl, HBr, HI, HNO<sub>3</sub>, H<sub>2</sub>SO<sub>4</sub>, HClO<sub>4</sub>), strong bases (Group 1+2 hydroxides). Complete dissociation → [H<sub>3</sub>O<sup>+</sup>] = C_acid.',
          keyPoints: [
            'Everything else is a weak acid or base.',
            'H<sub>2</sub>SO<sub>4</sub> first proton is strong; second is weak (Ka<sub>2</sub> = 0.012).'
          ],
          formulae: ['\\( [\\ce{H3O+}] = C_{\\text{acid}} \\) (strong acid)', '\\( [\\ce{OH-}] = n \\times C_{\\text{base}} \\) (strong base)']
        }
      },
      examTips: [
        'If you are asked to set up an ICE table for a strong acid, the answer is that you do NOT need one — dissociation is complete.',
        'Any acid NOT in the list of six strong acids is weak. This is a common trap in MCQs.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 8.3: Weak acids DO require equilibrium calculations', sec: 'content' },
        { color: 'orange', label: '→ Unit 4: Stoichiometry of strong acid-base neutralization reactions', sec: 'content' }
      ],
      questionIds: ['U8Q005']
    },

    {
      id: 'U8.2.2', code: 'Topic 8.2', subtopic: '8.2',
      subtopicTitle: 'pH and pOH of Strong Acids and Bases', section: 'unit8',
      concepts: ['pH', 'pOH', 'log-scale'],
      statement:
        'pH = -log[H<sub>3</sub>O<sup>+</sup>] and pOH = -log[OH<sup>−</sup>]. At 25 °C, pH + pOH = 14. The pH scale is logarithmic — each unit change represents a tenfold change in [H<sub>3</sub>O<sup>+</sup>].',
      content: {
        textbook: {
          explanation:
            '<p>The <strong>pH scale</strong> provides a compact way to express [H<sub>3</sub>O<sup>+</sup>]:</p>' +
            '<p style="text-align:center;">pH = &minus;log[H<sub>3</sub>O<sup>+</sup>]&emsp;&emsp;&emsp;[H<sub>3</sub>O<sup>+</sup>] = 10<sup>&minus;pH</sup></p>' +
            '<p>Similarly:</p>' +
            '<p style="text-align:center;">pOH = &minus;log[OH<sup>&minus;</sup>]&emsp;&emsp;&emsp;[OH<sup>&minus;</sup>] = 10<sup>&minus;pOH</sup></p>' +
            '<p>At 25 &deg;C, from K<sub>w</sub>:</p>' +
            '<p style="text-align:center;">pH + pOH = pK<sub>w</sub> = 14.00</p>' +
            '<p>Key interpretations:</p>' +
            '<ul>' +
            '<li>pH &lt; 7: acidic&emsp;pH = 7: neutral&emsp;pH &gt; 7: basic (at 25 &deg;C)</li>' +
            '<li>Each pH unit = 10&times; change in [H<sub>3</sub>O<sup>+</sup>]. A solution at pH 3 has 10&times; more [H<sub>3</sub>O<sup>+</sup>] than one at pH 4, and 100&times; more than pH 5.</li>' +
            '<li>Negative pH values are possible for very concentrated strong acids (e.g., 2 M HCl has pH &asymp; &minus;0.30).</li>' +
            '</ul>',
          keyPoints: [
            'pH = -log[H<sub>3</sub>O<sup>+</sup>]; pOH = -log[OH<sup>−</sup>].',
            'pH + pOH = 14.00 at 25 °C.',
            'Each pH unit = 10× change in [H<sub>3</sub>O<sup>+</sup>].',
            'pH < 7 = acidic, pH = 7 = neutral, pH > 7 = basic (at 25 °C only).'
          ],
          formulae: [
            '\\[ \\text{pH} = -\\log[\\ce{H3O+}] \\]',
            '\\[ \\text{pOH} = -\\log[\\ce{OH-}] \\]',
            '\\[ \\text{pH} + \\text{pOH} = 14.00 \\quad (\\text{at 25 °C}) \\]',
            '\\[ [\\ce{H3O+}] = 10^{-\\text{pH}} \\]',
            '\\[ [\\ce{OH-}] = 10^{-\\text{pOH}} \\]'
          ],
          workedExamples: [
            {
              title: 'pH of a Strong Acid',
              body:
                '<p><strong>Problem:</strong> Calculate the pH of 0.0050 M HCl.</p>' +
                '<p><strong>Solution:</strong> HCl is strong, so [H<sub>3</sub>O<sup>+</sup>] = 0.0050 M. pH = &minus;log(0.0050) = &minus;log(5.0 &times; 10<sup>&minus;3</sup>) = &minus;(&minus;2.30) = <strong>2.30</strong>.</p>'
            },
            {
              title: 'pH of a Strong Base',
              body:
                '<p><strong>Problem:</strong> Calculate the pH of 0.0020 M NaOH at 25 &deg;C.</p>' +
                '<p><strong>Solution:</strong> [OH<sup>&minus;</sup>] = 0.0020 M. pOH = &minus;log(0.0020) = 2.70. pH = 14.00 &minus; 2.70 = <strong>11.30</strong>.</p>'
            }
          ],
          warnings: [
            'pH + pOH = 14 only at 25 °C. At other temperatures, use pKw at that temperature.',
            'Significant figures: the digits BEFORE the decimal in a pH value come from the exponent (exact); only the digits AFTER the decimal are significant figures from the concentration.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'pH = -log[H<sub>3</sub>O<sup>+</sup>], pOH = -log[OH<sup>−</sup>], pH + pOH = 14 at 25 °C. Logarithmic scale: each unit = 10× change.',
          keyPoints: [
            'sig figs in pH: number of decimal places = number of sig figs in concentration.',
            'Can calculate [H<sub>3</sub>O<sup>+</sup>] from pH using 10^(-pH).'
          ],
          formulae: ['\\( \\text{pH} = -\\log[\\ce{H3O+}] \\)', '\\( \\text{pOH} = -\\log[\\ce{OH-}] \\)', '\\( \\text{pH} + \\text{pOH} = 14.00 \\)']
        }
      },
      examTips: [
        'The AP exam formula sheet gives you pH = -log[H<sup>+</sup>] and pOH = -log[OH<sup>−</sup>]. Know how to use 10^(-pH) to go backwards.',
        'Watch sig figs! 0.0050 M (2 sig figs) → pH = 2.30 (2 decimal places).'
      ],
      connections: [
        { color: 'purple', label: '→ Topic 8.7: pKa = -log(Ka) uses the same "p" convention', sec: 'content' }
      ],
      questionIds: ['U8Q006', 'U8Q007']
    },

    {
      id: 'U8.2.3', code: 'Topic 8.2', subtopic: '8.2',
      subtopicTitle: 'pH and pOH of Strong Acids and Bases', section: 'unit8',
      concepts: ['Kw', 'ion-product'],
      statement:
        'The ion-product constant of water, Kw = [H<sub>3</sub>O<sup>+</sup>][OH<sup>−</sup>] = 1.0 × 10<sup>−</sup><sup>14</sup> at 25 °C, applies to ALL aqueous solutions (not just pure water). It connects [H<sub>3</sub>O<sup>+</sup>] and [OH<sup>−</sup>] in any aqueous solution.',
      content: {
        textbook: {
          explanation:
            '<p>K<sub>w</sub> is the equilibrium constant for the autoionization of water. It applies to <em>every</em> aqueous solution:</p>' +
            '<p style="text-align:center;">K<sub>w</sub> = [H<sub>3</sub>O<sup>+</sup>][OH<sup>&minus;</sup>] = 1.0 &times; 10<sup>&minus;14</sup>&emsp;(at 25 &deg;C)</p>' +
            '<p>This means that in any aqueous solution at 25 &deg;C, if you know [H<sub>3</sub>O<sup>+</sup>], you can find [OH<sup>&minus;</sup>] and vice versa.</p>' +
            '<p>Key consequences:</p>' +
            '<ul>' +
            '<li>In an acidic solution, [H<sub>3</sub>O<sup>+</sup>] &gt; [OH<sup>&minus;</sup>], but <em>both ions are present</em>.</li>' +
            '<li>Adding acid increases [H<sub>3</sub>O<sup>+</sup>] and <em>decreases</em> [OH<sup>&minus;</sup>] so that their product still equals K<sub>w</sub>.</li>' +
            '<li>K<sub>w</sub> is temperature-dependent. At 37 &deg;C (body temperature), K<sub>w</sub> &asymp; 2.4 &times; 10<sup>&minus;14</sup>.</li>' +
            '</ul>' +
            '<p>The relationship K<sub>a</sub> &times; K<sub>b</sub> = K<sub>w</sub> for a conjugate acid-base pair is derived from K<sub>w</sub>. This is one of the most powerful equations in acid-base chemistry.</p>',
          keyPoints: [
            'Kw applies to ALL aqueous solutions, not just pure water.',
            'Both H<sub>3</sub>O<sup>+</sup> and OH<sup>−</sup> are present in every aqueous solution.',
            'Ka × Kb = Kw for any conjugate acid-base pair.',
            'Kw increases with temperature (endothermic autoionization).'
          ],
          formulae: [
            '\\[ K_w = [\\ce{H3O+}][\\ce{OH-}] = 1.0 \\times 10^{-14} \\quad (\\text{25 °C}) \\]',
            '\\[ K_a \\times K_b = K_w \\quad (\\text{conjugate pair}) \\]',
            '\\[ [\\ce{OH-}] = \\frac{K_w}{[\\ce{H3O+}]} \\]'
          ],
          workedExamples: [
            {
              title: 'Finding [OH<sup>−</sup>] from [H<sub>3</sub>O<sup>+</sup>]',
              body:
                '<p><strong>Problem:</strong> A solution has [H<sub>3</sub>O<sup>+</sup>] = 2.5 &times; 10<sup>&minus;3</sup> M at 25 &deg;C. Find [OH<sup>&minus;</sup>].</p>' +
                '<p><strong>Solution:</strong> [OH<sup>&minus;</sup>] = K<sub>w</sub> / [H<sub>3</sub>O<sup>+</sup>] = (1.0 &times; 10<sup>&minus;14</sup>) / (2.5 &times; 10<sup>&minus;3</sup>) = <strong>4.0 &times; 10<sup>&minus;12</sup> M</strong>.</p>'
            },
            {
              title: 'Ka × Kb = Kw',
              body:
                '<p><strong>Problem:</strong> The K<sub>a</sub> of acetic acid (CH<sub>3</sub>COOH) is 1.8 &times; 10<sup>&minus;5</sup>. Calculate the K<sub>b</sub> of its conjugate base, acetate (CH<sub>3</sub>COO<sup>&minus;</sup>).</p>' +
                '<p><strong>Solution:</strong> K<sub>b</sub> = K<sub>w</sub> / K<sub>a</sub> = (1.0 &times; 10<sup>&minus;14</sup>) / (1.8 &times; 10<sup>&minus;5</sup>) = <strong>5.6 &times; 10<sup>&minus;10</sup></strong>.</p>'
            }
          ],
          warnings: [
            'Ka × Kb = Kw only applies to a CONJUGATE pair — not to any random acid and base.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Kw = [H<sub>3</sub>O<sup>+</sup>][OH<sup>−</sup>] = 1.0 × 10<sup>−</sup><sup>14</sup> at 25 °C. Use Ka × Kb = Kw to find Kb from Ka (or vice versa) for conjugate pairs.',
          keyPoints: [
            'Both H<sub>3</sub>O<sup>+</sup> and OH<sup>−</sup> exist in every aqueous solution.',
            'Kw is temperature-dependent.'
          ],
          formulae: ['\\( K_w = [\\ce{H3O+}][\\ce{OH-}] \\)', '\\( K_a \\times K_b = K_w \\)']
        }
      },
      examTips: [
        'The Ka × Kb = Kw relationship appears on almost every AP exam. Practice using it to convert between Ka and Kb.',
        'If given Ka for an acid, you can always find the Kb of its conjugate base — this is key for salt hydrolysis problems.'
      ],
      connections: [
        { color: 'orange', label: '→ Unit 7: Equilibrium — Kw is an equilibrium constant like any other', sec: 'content' },
        { color: 'teal', label: '→ Topic 8.4: Salt hydrolysis requires Ka × Kb = Kw', sec: 'content' }
      ],
      questionIds: ['U8Q008']
    },

    /* ============================================================
       8.3  Weak Acid and Base Equilibria
       ============================================================ */
    {
      id: 'U8.3.1', code: 'Topic 8.3', subtopic: '8.3',
      subtopicTitle: 'Weak Acid and Base Equilibria', section: 'unit8',
      concepts: ['Ka', 'weak-acid', 'ICE-table'],
      statement:
        'A weak acid only partially ionizes in water. Ka is the equilibrium constant for the ionization, and ICE tables are used to calculate [H<sub>3</sub>O<sup>+</sup>] and pH from the initial acid concentration and Ka.',
      content: {
        textbook: {
          explanation:
            '<p>A <strong>weak acid</strong> does not fully dissociate in water. The ionization establishes an equilibrium:</p>' +
            '<p style="text-align:center;">HA(aq) + H<sub>2</sub>O(l) &hArr; H<sub>3</sub>O<sup>+</sup>(aq) + A<sup>&minus;</sup>(aq)</p>' +
            '<p style="text-align:center;">K<sub>a</sub> = [H<sub>3</sub>O<sup>+</sup>][A<sup>&minus;</sup>] / [HA]</p>' +
            '<p>The smaller the K<sub>a</sub>, the weaker the acid (less dissociation). To find pH, set up an <strong>ICE table</strong>:</p>' +
            '<table border="1" cellpadding="4" style="border-collapse:collapse;text-align:center;">' +
            '<tr><th></th><th>HA</th><th>H<sub>3</sub>O<sup>+</sup></th><th>A<sup>−</sup></th></tr>' +
            '<tr><td>I</td><td>C<sub>0</sub></td><td>0</td><td>0</td></tr>' +
            '<tr><td>C</td><td>−x</td><td>+x</td><td>+x</td></tr>' +
            '<tr><td>E</td><td>C<sub>0</sub> − x</td><td>x</td><td>x</td></tr>' +
            '</table>' +
            '<p>Substituting into K<sub>a</sub>: K<sub>a</sub> = x&sup2; / (C<sub>0</sub> &minus; x)</p>' +
            '<p><strong>The 5% approximation:</strong> If x &lt; 5% of C<sub>0</sub>, you can approximate C<sub>0</sub> &minus; x &asymp; C<sub>0</sub>, giving x = &radic;(K<sub>a</sub> &middot; C<sub>0</sub>). Always verify the approximation: (x/C<sub>0</sub>) &times; 100% &lt; 5%.</p>' +
            '<p>If the approximation fails, solve the full quadratic: x&sup2; + K<sub>a</sub>x &minus; K<sub>a</sub>C<sub>0</sub> = 0.</p>',
          keyPoints: [
            'Ka = [H<sub>3</sub>O<sup>+</sup>][A<sup>−</sup>]/[HA] — water (pure liquid) is not included.',
            'Smaller Ka = weaker acid = less dissociation.',
            'ICE table is the standard method for weak acid pH calculations.',
            '5% rule: if x/C<sub>0</sub> < 0.05, the approximation x ≈ √(Ka·C<sub>0</sub>) is valid.',
            'If 5% rule fails, use the quadratic formula.'
          ],
          formulae: [
            '\\[ K_a = \\frac{[\\ce{H3O+}][\\ce{A-}]}{[\\ce{HA}]} \\]',
            '\\[ x \\approx \\sqrt{K_a \\cdot C_0} \\quad (\\text{when } x \\ll C_0) \\]',
            '\\[ x^2 + K_a x - K_a C_0 = 0 \\]'
          ],
          workedExamples: [
            {
              title: 'pH of a Weak Acid Using ICE Table (with 5% Approximation)',
              body:
                '<p><strong>Problem:</strong> Calculate the pH of 0.100 M acetic acid (CH<sub>3</sub>COOH, K<sub>a</sub> = 1.8 &times; 10<sup>&minus;5</sup>).</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>ICE table:</p>' +
                '<table border="1" cellpadding="4" style="border-collapse:collapse;text-align:center;">' +
                '<tr><th></th><th>CH<sub>3</sub>COOH</th><th>H<sub>3</sub>O<sup>+</sup></th><th>CH<sub>3</sub>COO<sup>−</sup></th></tr>' +
                '<tr><td>I</td><td>0.100</td><td>0</td><td>0</td></tr>' +
                '<tr><td>C</td><td>−x</td><td>+x</td><td>+x</td></tr>' +
                '<tr><td>E</td><td>0.100 − x</td><td>x</td><td>x</td></tr>' +
                '</table>' +
                '<p>K<sub>a</sub> = x&sup2;/(0.100 &minus; x) = 1.8 &times; 10<sup>&minus;5</sup></p>' +
                '<p>Assume x &lt;&lt; 0.100: x&sup2; = 1.8 &times; 10<sup>&minus;5</sup> &times; 0.100 = 1.8 &times; 10<sup>&minus;6</sup></p>' +
                '<p>x = &radic;(1.8 &times; 10<sup>&minus;6</sup>) = 1.34 &times; 10<sup>&minus;3</sup> M</p>' +
                '<p>Check: (1.34 &times; 10<sup>&minus;3</sup> / 0.100) &times; 100% = 1.34% &lt; 5% &#x2714;</p>' +
                '<p>pH = &minus;log(1.34 &times; 10<sup>&minus;3</sup>) = <strong>2.87</strong></p>'
            },
            {
              title: 'Weak Acid pH Without 5% Approximation (Quadratic Required)',
              body:
                '<p><strong>Problem:</strong> Calculate the pH of 0.0010 M HF (K<sub>a</sub> = 6.6 &times; 10<sup>&minus;4</sup>).</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>Try the approximation: x = &radic;(6.6 &times; 10<sup>&minus;4</sup> &times; 0.0010) = &radic;(6.6 &times; 10<sup>&minus;7</sup>) = 8.1 &times; 10<sup>&minus;4</sup></p>' +
                '<p>Check: 8.1 &times; 10<sup>&minus;4</sup> / 0.0010 = 81% &gt;&gt; 5%. Approximation FAILS.</p>' +
                '<p>Use quadratic: x&sup2; + 6.6 &times; 10<sup>&minus;4</sup>x &minus; 6.6 &times; 10<sup>&minus;7</sup> = 0</p>' +
                '<p>x = [&minus;6.6 &times; 10<sup>&minus;4</sup> + &radic;((6.6 &times; 10<sup>&minus;4</sup>)&sup2; + 4(6.6 &times; 10<sup>&minus;7</sup>))] / 2</p>' +
                '<p>x = [&minus;6.6 &times; 10<sup>&minus;4</sup> + &radic;(4.356 &times; 10<sup>&minus;7</sup> + 2.64 &times; 10<sup>&minus;6</sup>)] / 2</p>' +
                '<p>x = [&minus;6.6 &times; 10<sup>&minus;4</sup> + &radic;(3.076 &times; 10<sup>&minus;6</sup>)] / 2 = [&minus;6.6 &times; 10<sup>&minus;4</sup> + 1.754 &times; 10<sup>&minus;3</sup>] / 2</p>' +
                '<p>x = 5.47 &times; 10<sup>&minus;4</sup> M</p>' +
                '<p>pH = &minus;log(5.47 &times; 10<sup>&minus;4</sup>) = <strong>3.26</strong></p>'
            }
          ],
          warnings: [
            'ALWAYS check the 5% approximation. If it fails, you MUST use the quadratic. The AP exam will occasionally give you a problem designed to fail the 5% rule.',
            'Never set up an ICE table for a strong acid — it dissociates completely.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Ka = [H<sub>3</sub>O<sup>+</sup>][A<sup>−</sup>]/[HA]. Use ICE table. 5% rule: if x/C<sub>0</sub> < 5%, approximate C<sub>0</sub> − x ≈ C<sub>0</sub>. Otherwise use quadratic.',
          keyPoints: [
            'Smaller Ka = weaker acid.',
            'The 5% approximation saves time but must be verified.'
          ],
          formulae: ['\\( K_a = \\frac{x^2}{C_0 - x} \\)', '\\( x \\approx \\sqrt{K_a \\cdot C_0} \\) if \\( x \\ll C_0 \\)']
        }
      },
      examTips: [
        'On the AP FRQ, show the ICE table explicitly — even if the problem does not ask for one, it demonstrates your methodology and earns partial credit.',
        'If the 5% check fails and you used the approximation, you will lose points. Always verify.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 7: Equilibrium — ICE tables are the same technique used for Kc problems', sec: 'content' },
        { color: 'orange', label: '→ Topic 8.7: pKa = -log(Ka) provides a convenient scale for comparing acid strength', sec: 'content' }
      ],
      questionIds: ['U8Q009', 'U8Q010']
    },

    {
      id: 'U8.3.2', code: 'Topic 8.3', subtopic: '8.3',
      subtopicTitle: 'Weak Acid and Base Equilibria', section: 'unit8',
      concepts: ['Kb', 'weak-base', 'ICE-table'],
      statement:
        'A weak base partially ionizes in water to produce OH<sup>−</sup>. Kb is the equilibrium constant, and ICE tables are used in the same way as for weak acids, except the variable x represents [OH<sup>−</sup>].',
      content: {
        textbook: {
          explanation:
            '<p>Weak bases accept protons from water, producing OH<sup>&minus;</sup>:</p>' +
            '<p style="text-align:center;">B(aq) + H<sub>2</sub>O(l) &hArr; BH<sup>+</sup>(aq) + OH<sup>&minus;</sup>(aq)</p>' +
            '<p style="text-align:center;">K<sub>b</sub> = [BH<sup>+</sup>][OH<sup>&minus;</sup>] / [B]</p>' +
            '<p>Common weak bases include NH<sub>3</sub>, amines (e.g., CH<sub>3</sub>NH<sub>2</sub>), and conjugate bases of weak acids (e.g., CH<sub>3</sub>COO<sup>&minus;</sup>, F<sup>&minus;</sup>, CN<sup>&minus;</sup>).</p>' +
            '<p>The ICE table procedure is identical to weak acids, but x = [OH<sup>&minus;</sup>], and you calculate pOH first, then convert to pH:</p>' +
            '<table border="1" cellpadding="4" style="border-collapse:collapse;text-align:center;">' +
            '<tr><th></th><th>B</th><th>BH<sup>+</sup></th><th>OH<sup>−</sup></th></tr>' +
            '<tr><td>I</td><td>C<sub>0</sub></td><td>0</td><td>0</td></tr>' +
            '<tr><td>C</td><td>−x</td><td>+x</td><td>+x</td></tr>' +
            '<tr><td>E</td><td>C<sub>0</sub> − x</td><td>x</td><td>x</td></tr>' +
            '</table>' +
            '<p>K<sub>b</sub> = x&sup2;/(C<sub>0</sub> &minus; x). With the 5% approximation: x &asymp; &radic;(K<sub>b</sub> &middot; C<sub>0</sub>).</p>' +
            '<p>Then pOH = &minus;log(x), and pH = 14.00 &minus; pOH.</p>',
          keyPoints: [
            'Kb = [BH<sup>+</sup>][OH<sup>−</sup>]/[B].',
            'x = [OH<sup>−</sup>] in weak base ICE tables.',
            'Calculate pOH first, then pH = 14 − pOH.',
            'Conjugate bases of weak acids are themselves weak bases — use Kb = Kw/Ka.'
          ],
          formulae: [
            '\\[ K_b = \\frac{[\\ce{BH+}][\\ce{OH-}]}{[\\ce{B}]} \\]',
            '\\[ x \\approx \\sqrt{K_b \\cdot C_0} \\]',
            '\\[ \\text{pOH} = -\\log[\\ce{OH-}] \\]',
            '\\[ \\text{pH} = 14.00 - \\text{pOH} \\]'
          ],
          workedExamples: [
            {
              title: 'pH of a Weak Base',
              body:
                '<p><strong>Problem:</strong> Calculate the pH of 0.15 M NH<sub>3</sub> (K<sub>b</sub> = 1.8 &times; 10<sup>&minus;5</sup>).</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>ICE table:</p>' +
                '<table border="1" cellpadding="4" style="border-collapse:collapse;text-align:center;">' +
                '<tr><th></th><th>NH<sub>3</sub></th><th>NH<sub>4</sub><sup>+</sup></th><th>OH<sup>−</sup></th></tr>' +
                '<tr><td>I</td><td>0.15</td><td>0</td><td>0</td></tr>' +
                '<tr><td>C</td><td>−x</td><td>+x</td><td>+x</td></tr>' +
                '<tr><td>E</td><td>0.15 − x</td><td>x</td><td>x</td></tr>' +
                '</table>' +
                '<p>K<sub>b</sub> = x&sup2;/0.15 = 1.8 &times; 10<sup>&minus;5</sup></p>' +
                '<p>x = &radic;(1.8 &times; 10<sup>&minus;5</sup> &times; 0.15) = &radic;(2.7 &times; 10<sup>&minus;6</sup>) = 1.64 &times; 10<sup>&minus;3</sup> M</p>' +
                '<p>Check: 1.64 &times; 10<sup>&minus;3</sup>/0.15 = 1.1% &lt; 5% &#x2714;</p>' +
                '<p>pOH = &minus;log(1.64 &times; 10<sup>&minus;3</sup>) = 2.79</p>' +
                '<p>pH = 14.00 &minus; 2.79 = <strong>11.21</strong></p>'
            }
          ],
          warnings: [
            'A very common mistake is to calculate pOH and report it as pH. Always convert: pH = 14 − pOH.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Weak base ICE table: x = [OH<sup>−</sup>]. Kb = x<sup>2</sup>/(C<sub>0</sub> − x). Then pOH = -log(x), pH = 14 − pOH.',
          keyPoints: [
            'Conjugate bases of weak acids (e.g., F<sup>−</sup>, CH<sub>3</sub>COO<sup>−</sup>) are weak bases with Kb = Kw/Ka.'
          ],
          formulae: ['\\( K_b = \\frac{[\\ce{BH+}][\\ce{OH-}]}{[\\ce{B}]} \\)', '\\( \\text{pH} = 14 - \\text{pOH} \\)']
        }
      },
      examTips: [
        'Salt hydrolysis: NaCH<sub>3</sub>COO dissolves to give CH<sub>3</sub>COO<sup>−</sup>, which is a weak base. Use Kb = Kw/Ka to find its Kb, then do an ICE table.',
        'On the AP exam, if you are given Ka for an acid and asked for the pH of its sodium salt, you must first convert to Kb.'
      ],
      connections: [
        { color: 'purple', label: '→ Topic 8.1: Conjugate base strength is inversely related to acid strength', sec: 'content' },
        { color: 'orange', label: '→ Unit 4: Salt solutions — dissolving a salt with a conjugate base of a weak acid produces a basic solution', sec: 'content' }
      ],
      questionIds: ['U8Q011']
    },

    {
      id: 'U8.3.3', code: 'Topic 8.3', subtopic: '8.3',
      subtopicTitle: 'Weak Acid and Base Equilibria', section: 'unit8',
      concepts: ['percent-ionization'],
      statement:
        'Percent ionization = ([H<sub>3</sub>O<sup>+</sup>]_eq / C<sub>0</sub>) × 100%. For a given weak acid, percent ionization increases as concentration decreases (dilution increases ionization).',
      content: {
        textbook: {
          explanation:
            '<p><strong>Percent ionization</strong> (or percent dissociation) measures how much of the original weak acid actually ionizes:</p>' +
            '<p style="text-align:center;">% ionization = ([H<sub>3</sub>O<sup>+</sup>]<sub>eq</sub> / C<sub>0</sub>) &times; 100%</p>' +
            '<p>Key relationships:</p>' +
            '<ul>' +
            '<li>For a given acid, percent ionization <strong>increases as concentration decreases</strong>. This is because the equilibrium shifts to produce more ions when the solution is diluted (Le Chatelier\'s principle — dilution decreases Q, driving the reaction forward).</li>' +
            '<li>At constant concentration, a stronger acid (larger K<sub>a</sub>) has a higher percent ionization.</li>' +
            '<li>Strong acids always have 100% ionization regardless of concentration.</li>' +
            '</ul>' +
            '<p>The 5% approximation used in ICE tables is essentially asking whether percent ionization is less than 5%.</p>',
          keyPoints: [
            '% ionization = (x / C<sub>0</sub>) × 100%.',
            'Dilution increases percent ionization (Le Chatelier).',
            'Larger Ka → higher percent ionization at the same concentration.',
            '5% rule in ICE tables is a percent ionization check.'
          ],
          formulae: [
            '\\[ \\% \\text{ ionization} = \\frac{[\\ce{H3O+}]_{\\text{eq}}}{C_0} \\times 100\\% \\]'
          ],
          workedExamples: [
            {
              title: 'Percent Ionization Calculation',
              body:
                '<p><strong>Problem:</strong> A 0.100 M solution of a weak acid HA has pH = 2.87. Calculate the percent ionization.</p>' +
                '<p><strong>Solution:</strong> [H<sub>3</sub>O<sup>+</sup>] = 10<sup>&minus;2.87</sup> = 1.35 &times; 10<sup>&minus;3</sup> M.</p>' +
                '<p>% ionization = (1.35 &times; 10<sup>&minus;3</sup> / 0.100) &times; 100% = <strong>1.35%</strong></p>'
            },
            {
              title: 'Effect of Dilution on Percent Ionization',
              body:
                '<p><strong>Problem:</strong> Compare the percent ionization of 0.100 M vs. 0.010 M acetic acid (K<sub>a</sub> = 1.8 &times; 10<sup>&minus;5</sup>).</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>At 0.100 M: x = &radic;(1.8 &times; 10<sup>&minus;5</sup> &times; 0.100) = 1.34 &times; 10<sup>&minus;3</sup>. % ionization = 1.34%.</p>' +
                '<p>At 0.010 M: x = &radic;(1.8 &times; 10<sup>&minus;5</sup> &times; 0.010) = 4.24 &times; 10<sup>&minus;4</sup>. % ionization = 4.24%.</p>' +
                '<p>The more dilute solution has a higher percent ionization, confirming the trend.</p>'
            }
          ],
          warnings: [
            'Percent ionization and Ka are NOT the same thing. Ka is constant at a given temperature; percent ionization changes with concentration.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            '% ionization = [H<sub>3</sub>O<sup>+</sup>]/C<sub>0</sub> × 100%. Increases with dilution. Ka is constant; % ionization is not.',
          keyPoints: [
            'Dilution increases % ionization (Le Chatelier effect).',
            '5% approximation = checking if % ionization < 5%.'
          ],
          formulae: ['\\( \\% \\text{ ionization} = \\frac{x}{C_0} \\times 100\\% \\)']
        }
      },
      examTips: [
        'The AP exam frequently gives you pH and concentration and asks you to calculate Ka. Use % ionization to find x, then plug into Ka = x<sup>2</sup>/(C<sub>0</sub> − x).',
        'If asked how dilution affects pH of a weak acid: pH increases (less acidic), but % ionization also increases — these are not contradictory.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 7: Le Chatelier — dilution shifts equilibrium toward more ions', sec: 'content' }
      ],
      questionIds: ['U8Q012']
    },

    /* ============================================================
       8.4  Acid-Base Reactions and Buffers
       ============================================================ */
    {
      id: 'U8.4.1', code: 'Topic 8.4', subtopic: '8.4',
      subtopicTitle: 'Acid-Base Reactions and Buffers', section: 'unit8',
      concepts: ['neutralization', 'net-ionic'],
      statement:
        'Strong acid + strong base neutralization is a completion reaction producing water and a salt. The net ionic equation is: H<sub>3</sub>O<sup>+</sup>(aq) + OH<sup>−</sup>(aq) → 2 H<sub>2</sub>O(l).',
      content: {
        textbook: {
          explanation:
            '<p>Acid-base <strong>neutralization</strong> reactions are driven to completion by the formation of water, a very stable covalent molecule:</p>' +
            '<p style="text-align:center;">H<sub>3</sub>O<sup>+</sup>(aq) + OH<sup>&minus;</sup>(aq) &rarr; 2 H<sub>2</sub>O(l)&emsp;(net ionic equation)</p>' +
            '<p>For <strong>strong acid + strong base</strong>, the reaction goes essentially to completion. The resulting solution is neutral (pH = 7 at 25 &deg;C) because neither the cation nor the anion hydrolyzes.</p>' +
            '<p>For <strong>strong acid + weak base</strong>, the reaction also goes to completion, but the resulting solution contains the conjugate acid of the weak base, making it acidic (pH &lt; 7).</p>' +
            '<p>For <strong>weak acid + strong base</strong>, the reaction goes to completion, producing the conjugate base of the weak acid, making the solution basic (pH &gt; 7).</p>' +
            '<p>These stoichiometric reactions must be done first (using a BCA or stoichiometry table), and then any remaining equilibrium calculation is done separately.</p>',
          keyPoints: [
            'Strong acid + strong base → neutral salt + water (pH = 7).',
            'Strong acid + weak base → acidic salt (pH < 7).',
            'Weak acid + strong base → basic salt (pH > 7).',
            'Weak acid + weak base → pH depends on relative Ka and Kb.',
            'Neutralization reactions go to completion — then do equilibrium on leftover species.'
          ],
          formulae: [
            '\\[ \\ce{H3O+(aq) + OH-(aq) -> 2 H2O(l)} \\]',
            '\\[ \\ce{HA(aq) + OH-(aq) -> A-(aq) + H2O(l)} \\]',
            '\\[ \\ce{H3O+(aq) + B(aq) -> BH+(aq) + H2O(l)} \\]'
          ],
          workedExamples: [
            {
              title: 'Strong Acid–Strong Base Neutralization',
              body:
                '<p><strong>Problem:</strong> 50.0 mL of 0.100 M HCl is mixed with 50.0 mL of 0.100 M NaOH. What is the pH?</p>' +
                '<p><strong>Solution:</strong> mol HCl = 0.0500 L &times; 0.100 M = 0.00500 mol. mol NaOH = 0.00500 mol. They react 1:1, completely neutralizing each other. No excess acid or base remains. The solution contains only NaCl and water. pH = <strong>7.00</strong>.</p>'
            }
          ],
          warnings: [
            'Always do the stoichiometry first (how much acid and base react), then do the equilibrium calculation on whatever remains.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Neutralization goes to completion. SA+SB → pH 7. SA+WB → pH < 7 (conjugate acid). WA+SB → pH > 7 (conjugate base).',
          keyPoints: [
            'Two-step process: (1) stoichiometry, (2) equilibrium on leftover.',
            'Net ionic: H<sub>3</sub>O<sup>+</sup> + OH<sup>−</sup> → 2 H<sub>2</sub>O.'
          ],
          formulae: ['\\( \\ce{H3O+ + OH- -> 2 H2O} \\)']
        }
      },
      examTips: [
        'On FRQs, always show the stoichiometry step before the equilibrium step. Skipping to equilibrium without neutralization first will lose significant points.',
        'At the equivalence point of a SA+WB titration, the solution is acidic — this is a very common AP question.'
      ],
      connections: [
        { color: 'orange', label: '→ Unit 4: Stoichiometry — use moles, not molarity, for neutralization calculations', sec: 'content' },
        { color: 'purple', label: '→ Topic 8.5: Titration curves show pH at every point during neutralization', sec: 'content' }
      ],
      questionIds: ['U8Q013']
    },

    {
      id: 'U8.4.2', code: 'Topic 8.4', subtopic: '8.4',
      subtopicTitle: 'Acid-Base Reactions and Buffers', section: 'unit8',
      concepts: ['buffer-definition'],
      statement:
        'A buffer is a solution of a weak acid and its conjugate base (or a weak base and its conjugate acid) in comparable amounts. Buffers resist changes in pH when small amounts of strong acid or base are added.',
      content: {
        textbook: {
          explanation:
            '<p>A <strong>buffer solution</strong> resists changes in pH when small amounts of strong acid or strong base are added. It consists of:</p>' +
            '<ul>' +
            '<li>A <strong>weak acid (HA)</strong> and its <strong>conjugate base (A<sup>&minus;</sup>)</strong>, or</li>' +
            '<li>A <strong>weak base (B)</strong> and its <strong>conjugate acid (BH<sup>+</sup>)</strong>.</li>' +
            '</ul>' +
            '<p>How buffers work:</p>' +
            '<ul>' +
            '<li>When <strong>strong acid (H<sub>3</sub>O<sup>+</sup>)</strong> is added: the conjugate base reacts with it: A<sup>&minus;</sup> + H<sub>3</sub>O<sup>+</sup> &rarr; HA + H<sub>2</sub>O. This consumes the added acid.</li>' +
            '<li>When <strong>strong base (OH<sup>&minus;</sup>)</strong> is added: the weak acid reacts with it: HA + OH<sup>&minus;</sup> &rarr; A<sup>&minus;</sup> + H<sub>2</sub>O. This consumes the added base.</li>' +
            '</ul>' +
            '<p>Both components must be present in significant amounts for the buffer to function. If one is consumed, the buffer is <strong>broken</strong> and pH changes rapidly.</p>',
          keyPoints: [
            'Buffer = weak acid + conjugate base (in comparable amounts).',
            'Added H<sub>3</sub>O<sup>+</sup> is consumed by A<sup>−</sup>.',
            'Added OH<sup>−</sup> is consumed by HA.',
            'Both components must be present for the buffer to work.',
            'Buffers cannot neutralize large additions — they have a finite capacity.'
          ],
          formulae: [
            '\\[ \\ce{A- + H3O+ -> HA + H2O} \\quad (\\text{buffer absorbs acid}) \\]',
            '\\[ \\ce{HA + OH- -> A- + H2O} \\quad (\\text{buffer absorbs base}) \\]'
          ],
          workedExamples: [
            {
              title: 'Identifying a Buffer',
              body:
                '<p><strong>Problem:</strong> Which of the following is a buffer? (a) 0.1 M HCl + 0.1 M NaCl, (b) 0.1 M CH<sub>3</sub>COOH + 0.1 M CH<sub>3</sub>COONa, (c) 0.1 M NaOH + 0.1 M NaCl.</p>' +
                '<p><strong>Solution:</strong> (b) is the buffer. It contains a weak acid (CH<sub>3</sub>COOH) and its conjugate base (CH<sub>3</sub>COO<sup>&minus;</sup> from the sodium salt). (a) has a strong acid and its anion — not a buffer. (c) has a strong base and a neutral salt — not a buffer.</p>'
            }
          ],
          warnings: [
            'A solution of a strong acid and its conjugate base (like HCl/NaCl) is NOT a buffer — both species come from a strong acid.',
            'Equal concentrations are not required; "comparable" means the ratio [A<sup>−</sup>]/[HA] is between roughly 0.1 and 10.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Buffer = weak acid + conjugate base. Resists pH change by reacting with added H<sub>3</sub>O<sup>+</sup> or OH<sup>−</sup>.',
          keyPoints: [
            'Cannot be made from strong acid/base pairs.',
            'Both components must be present in significant amounts.'
          ],
          formulae: ['\\( \\ce{A- + H3O+ -> HA + H2O} \\)', '\\( \\ce{HA + OH- -> A- + H2O} \\)']
        }
      },
      examTips: [
        'The AP exam will ask you to identify which mixtures form buffers. Key: must be a WEAK acid + its conjugate base.',
        'Half-equivalence point of a weak acid titration always produces a buffer (see Topic 8.5).'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 8.8: Properties of buffers — how they resist pH change quantitatively', sec: 'content' },
        { color: 'orange', label: '→ Topic 8.9: Henderson-Hasselbalch equation calculates buffer pH', sec: 'content' }
      ],
      questionIds: ['U8Q014']
    },

    {
      id: 'U8.4.3', code: 'Topic 8.4', subtopic: '8.4',
      subtopicTitle: 'Acid-Base Reactions and Buffers', section: 'unit8',
      concepts: ['strong-weak-reaction'],
      statement:
        'When a weak acid reacts with a strong base (or vice versa), the reaction goes to completion. The products include the conjugate of the weak species, which then establishes an equilibrium.',
      content: {
        textbook: {
          explanation:
            '<p>When a <strong>weak acid reacts with a strong base</strong>, the neutralization reaction goes to completion:</p>' +
            '<p style="text-align:center;">HA(aq) + OH<sup>&minus;</sup>(aq) &rarr; A<sup>&minus;</sup>(aq) + H<sub>2</sub>O(l)</p>' +
            '<p>After the stoichiometric reaction is complete, the solution contains the conjugate base A<sup>&minus;</sup>, which may hydrolyze to affect pH.</p>' +
            '<p>Three scenarios after mixing:</p>' +
            '<ol>' +
            '<li><strong>Excess weak acid remains:</strong> Solution contains both HA and A<sup>&minus;</sup> &rarr; <em>buffer region</em>. Use Henderson-Hasselbalch.</li>' +
            '<li><strong>Stoichiometric equivalence:</strong> All HA converted to A<sup>&minus;</sup> &rarr; <em>equivalence point</em>. Do a K<sub>b</sub> calculation for A<sup>&minus;</sup>.</li>' +
            '<li><strong>Excess strong base:</strong> Solution contains A<sup>&minus;</sup> and leftover OH<sup>&minus;</sup> &rarr; pH determined by excess OH<sup>&minus;</sup> (ignore A<sup>&minus;</sup> hydrolysis — it is negligible compared to excess OH<sup>&minus;</sup>).</li>' +
            '</ol>',
          keyPoints: [
            'Weak acid + strong base → goes to completion, forming conjugate base.',
            'Before equivalence: buffer region (HA + A<sup>−</sup> present).',
            'At equivalence: only A<sup>−</sup> present → basic pH.',
            'After equivalence: excess OH<sup>−</sup> dominates pH.',
            'Always do stoichiometry FIRST, then equilibrium.'
          ],
          formulae: [
            '\\[ \\ce{HA + OH- -> A- + H2O} \\quad (\\text{completion reaction}) \\]',
            '\\[ \\ce{A- + H2O <=> HA + OH-} \\quad (K_b \\text{ equilibrium at equivalence point}) \\]'
          ],
          workedExamples: [
            {
              title: 'Weak Acid + Strong Base — Before Equivalence (Buffer)',
              body:
                '<p><strong>Problem:</strong> 25.0 mL of 0.200 M CH<sub>3</sub>COOH is mixed with 10.0 mL of 0.200 M NaOH. Find the pH (K<sub>a</sub> = 1.8 &times; 10<sup>&minus;5</sup>).</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>mol HA = 0.0250 &times; 0.200 = 0.00500 mol. mol OH<sup>&minus;</sup> = 0.0100 &times; 0.200 = 0.00200 mol.</p>' +
                '<p>OH<sup>&minus;</sup> reacts with HA: 0.00200 mol HA consumed, forming 0.00200 mol A<sup>&minus;</sup>.</p>' +
                '<p>Remaining: HA = 0.00500 &minus; 0.00200 = 0.00300 mol. A<sup>&minus;</sup> = 0.00200 mol.</p>' +
                '<p>Buffer! Use Henderson-Hasselbalch: pH = pK<sub>a</sub> + log([A<sup>&minus;</sup>]/[HA]) = 4.74 + log(0.00200/0.00300) = 4.74 + (&minus;0.18) = <strong>4.56</strong></p>' +
                '<p>(Note: volumes cancel in the ratio when both species are in the same solution.)</p>'
            }
          ],
          warnings: [
            'The most common FRQ error is forgetting to do the stoichiometric neutralization step before applying Henderson-Hasselbalch or an ICE table.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'WA + SB → completion → conjugate base. Three regions: buffer (before equiv.), equivalence point (Kb calc), excess base (after equiv.).',
          keyPoints: [
            'Stoichiometry first, then equilibrium.',
            'At equivalence point: pH > 7 for WA + SB.'
          ],
          formulae: ['\\( \\ce{HA + OH- -> A- + H2O} \\)']
        }
      },
      examTips: [
        'The AP exam consistently tests the three regions of a WA+SB mixture. Know what calculation to do in each region.',
        'When finding pH in the buffer region, you can use moles directly in H-H (no need to divide by total volume since it cancels).'
      ],
      connections: [
        { color: 'purple', label: '→ Topic 8.5: These three regions map directly to the titration curve', sec: 'content' },
        { color: 'teal', label: '→ Topic 8.9: Henderson-Hasselbalch for buffer region calculations', sec: 'content' }
      ],
      questionIds: ['U8Q015']
    },

    /* ============================================================
       8.5  Acid-Base Titrations
       ============================================================ */
    {
      id: 'U8.5.1', code: 'Topic 8.5', subtopic: '8.5',
      subtopicTitle: 'Acid-Base Titrations', section: 'unit8',
      concepts: ['titration-curve', 'equivalence-point'],
      statement:
        'A titration curve plots pH vs. volume of titrant. The equivalence point is where moles of acid equal moles of base. The shape and equivalence-point pH depend on the strength of the acid and base.',
      content: {
        textbook: {
          explanation:
            '<p>A <strong>titration curve</strong> (pH curve) plots pH on the y-axis against volume of titrant added on the x-axis. The shape reveals the acid-base chemistry:</p>' +
            '<h4>Strong Acid + Strong Base Titration</h4>' +
            '<ul>' +
            '<li>Initial pH: determined by strong acid concentration (e.g., pH &asymp; 1 for 0.1 M HCl).</li>' +
            '<li>Buffer region: there is <em>no</em> buffer region &mdash; pH changes gradually then steeply near the equivalence point.</li>' +
            '<li>Equivalence point: pH = <strong>7.00</strong> (neutral salt formed).</li>' +
            '<li>After equivalence: pH determined by excess strong base.</li>' +
            '<li>The curve is symmetric about the equivalence point.</li>' +
            '</ul>' +
            '<h4>Weak Acid + Strong Base Titration</h4>' +
            '<ul>' +
            '<li>Initial pH: higher than strong acid of same concentration (weak acid partially ionizes).</li>' +
            '<li>Buffer region: between 0% and 100% titration &mdash; solution contains HA and A<sup>&minus;</sup>.</li>' +
            '<li><strong>Half-equivalence point</strong>: exactly halfway to the equivalence point, where [HA] = [A<sup>&minus;</sup>], so pH = pK<sub>a</sub>.</li>' +
            '<li>Equivalence point: pH <strong>&gt; 7</strong> (conjugate base A<sup>&minus;</sup> makes the solution basic). Calculate pH using K<sub>b</sub> for A<sup>&minus;</sup>.</li>' +
            '<li>After equivalence: excess OH<sup>&minus;</sup> dominates pH.</li>' +
            '<li>The curve is NOT symmetric; the buffer region before the equivalence point is relatively flat.</li>' +
            '</ul>' +
            '<h4>Weak Base + Strong Acid Titration</h4>' +
            '<ul>' +
            '<li>Initial pH: above 7 (weak base).</li>' +
            '<li>Buffer region: solution contains B and BH<sup>+</sup>.</li>' +
            '<li>Half-equivalence point: pOH = pK<sub>b</sub>, so pH = 14 &minus; pK<sub>b</sub>.</li>' +
            '<li>Equivalence point: pH <strong>&lt; 7</strong> (conjugate acid BH<sup>+</sup> makes the solution acidic).</li>' +
            '<li>After equivalence: excess H<sub>3</sub>O<sup>+</sup> dominates.</li>' +
            '</ul>',
          keyPoints: [
            'SA + SB: equivalence point pH = 7.',
            'WA + SB: equivalence point pH > 7.',
            'WB + SA: equivalence point pH < 7.',
            'Half-equivalence point: pH = pKa (for WA + SB).',
            'The buffer region is the flat part of the curve before the equivalence point.'
          ],
          formulae: [
            '\\[ \\text{At half-equivalence: } \\text{pH} = \\text{p}K_a \\quad (\\text{because } [\\ce{HA}] = [\\ce{A-}]) \\]',
            '\\[ \\text{At equivalence (WA+SB): } K_b = \\frac{K_w}{K_a} \\text{ for } \\ce{A-} \\]'
          ],
          workedExamples: [
            {
              title: 'Equivalence Point pH for Weak Acid + Strong Base',
              body:
                '<p><strong>Problem:</strong> 25.0 mL of 0.100 M acetic acid (K<sub>a</sub> = 1.8 &times; 10<sup>&minus;5</sup>) is titrated with 0.100 M NaOH. Find the pH at the equivalence point.</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>At equivalence: mol NaOH added = mol CH<sub>3</sub>COOH = 0.00250 mol. Volume of NaOH = 25.0 mL. Total volume = 50.0 mL.</p>' +
                '<p>All acetic acid is converted to acetate: [CH<sub>3</sub>COO<sup>&minus;</sup>] = 0.00250 / 0.0500 = 0.0500 M.</p>' +
                '<p>K<sub>b</sub> for CH<sub>3</sub>COO<sup>&minus;</sup> = K<sub>w</sub>/K<sub>a</sub> = 1.0 &times; 10<sup>&minus;14</sup> / 1.8 &times; 10<sup>&minus;5</sup> = 5.6 &times; 10<sup>&minus;10</sup>.</p>' +
                '<p>ICE for CH<sub>3</sub>COO<sup>&minus;</sup> + H<sub>2</sub>O &hArr; CH<sub>3</sub>COOH + OH<sup>&minus;</sup>:</p>' +
                '<p>x = &radic;(5.6 &times; 10<sup>&minus;10</sup> &times; 0.0500) = &radic;(2.8 &times; 10<sup>&minus;11</sup>) = 5.29 &times; 10<sup>&minus;6</sup> M</p>' +
                '<p>pOH = &minus;log(5.29 &times; 10<sup>&minus;6</sup>) = 5.28. pH = 14.00 &minus; 5.28 = <strong>8.72</strong>.</p>' +
                '<p>The pH is above 7, as expected for a weak acid titrated with a strong base.</p>'
            }
          ],
          warnings: [
            'The equivalence point is NOT always at pH 7. It is pH 7 only for SA + SB titrations. This is the single most common titration misconception.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Titration curve shapes: SA+SB (sym, equiv at pH 7), WA+SB (equiv pH > 7, flat buffer region), WB+SA (equiv pH < 7). Half-equiv: pH = pKa.',
          keyPoints: [
            'Equivalence point = stoichiometric completion.',
            'Half-equivalence point gives you Ka directly from pH.'
          ],
          formulae: ['\\( \\text{pH} = \\text{p}K_a \\) at half-equivalence point', '\\( K_b = K_w / K_a \\) for \\( \\ce{A-} \\) at equivalence']
        }
      },
      examTips: [
        'The AP exam almost always includes a titration curve question. You MUST know the three curve shapes and their equivalence point pH values.',
        'To find Ka from a titration curve, read the pH at the half-equivalence point: Ka = 10^(-pH).'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 8.4: Each region of the titration corresponds to a neutralization scenario', sec: 'content' },
        { color: 'orange', label: '→ Topic 8.9: Henderson-Hasselbalch describes the buffer region of the curve', sec: 'content' }
      ],
      questionIds: ['U8Q016', 'U8Q017']
    },

    {
      id: 'U8.5.2', code: 'Topic 8.5', subtopic: '8.5',
      subtopicTitle: 'Acid-Base Titrations', section: 'unit8',
      concepts: ['indicator-selection'],
      statement:
        'An acid-base indicator changes color over a range of approximately 2 pH units centered on its pKa. The best indicator for a titration has a color change range that includes the equivalence point pH.',
      content: {
        textbook: {
          explanation:
            '<p>An <strong>acid-base indicator</strong> is itself a weak acid (HIn) whose conjugate base (In<sup>&minus;</sup>) has a different color. The indicator changes color when the ratio [In<sup>&minus;</sup>]/[HIn] shifts significantly, which occurs near pH = pK<sub>In</sub>.</p>' +
            '<p>The color transition range is approximately pK<sub>In</sub> &plusmn; 1, meaning the indicator changes over about 2 pH units.</p>' +
            '<p><strong>Indicator selection rules:</strong></p>' +
            '<ul>' +
            '<li>SA + SB titration (equiv pH = 7): almost any indicator works because the steep part of the curve spans several pH units. Bromothymol blue (pK<sub>In</sub> &asymp; 7) is ideal.</li>' +
            '<li>WA + SB titration (equiv pH &gt; 7): use an indicator that changes in the basic range, such as phenolphthalein (pK<sub>In</sub> &asymp; 9, range 8.2&ndash;10.0).</li>' +
            '<li>WB + SA titration (equiv pH &lt; 7): use an indicator that changes in the acidic range, such as methyl red (pK<sub>In</sub> &asymp; 5, range 4.4&ndash;6.2).</li>' +
            '</ul>',
          keyPoints: [
            'Indicator color change range ≈ pKIn ± 1.',
            'Choose indicator whose range includes the equivalence point pH.',
            'SA+SB: any indicator near pH 7 works (steep curve).',
            'WA+SB: phenolphthalein (range 8.2–10.0).',
            'WB+SA: methyl red or methyl orange.'
          ],
          formulae: [
            '\\[ \\text{Color change range} \\approx \\text{p}K_{\\text{In}} \\pm 1 \\]'
          ],
          workedExamples: [
            {
              title: 'Choosing the Right Indicator',
              body:
                '<p><strong>Problem:</strong> A titration of 0.10 M NH<sub>3</sub> with 0.10 M HCl reaches equivalence at pH 5.3. Which indicator should be used: phenolphthalein (range 8.2&ndash;10.0) or methyl red (range 4.4&ndash;6.2)?</p>' +
                '<p><strong>Solution:</strong> The equivalence point pH (5.3) falls within the range of <strong>methyl red</strong> (4.4&ndash;6.2), so methyl red is the correct choice. Phenolphthalein would change color far before the equivalence point is reached.</p>'
            }
          ],
          warnings: [
            'Phenolphthalein is NOT always the right indicator. It only works well when the equivalence point pH is in its range (8.2–10.0).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Indicator range ≈ pKIn ± 1. Must overlap the equivalence point pH. Phenolphthalein for WA+SB; methyl red for WB+SA.',
          keyPoints: [
            'Indicator is itself a weak acid that changes color when deprotonated.'
          ],
          formulae: ['\\( \\text{Indicator transition: } \\text{p}K_{\\text{In}} \\pm 1 \\)']
        }
      },
      examTips: [
        'The AP exam provides a table of indicators with their ranges. You must match the equivalence point pH to the indicator range.',
        'Do NOT memorize all indicator ranges — you will be given them. But do know phenolphthalein (8.2–10.0) as it appears most often.'
      ],
      connections: [
        { color: 'purple', label: '→ Topic 8.5.1: Equivalence point pH determines the indicator choice', sec: 'content' }
      ],
      questionIds: ['U8Q018']
    },

    {
      id: 'U8.5.3', code: 'Topic 8.5', subtopic: '8.5',
      subtopicTitle: 'Acid-Base Titrations', section: 'unit8',
      concepts: ['titration-calculation'],
      statement:
        'At any point during a titration, the pH can be calculated by determining how much acid and base have reacted (stoichiometry) and then performing the appropriate equilibrium or excess-reagent calculation.',
      content: {
        textbook: {
          explanation:
            '<p>Titration pH calculations follow a <strong>two-step approach</strong> at every point:</p>' +
            '<p><strong>Step 1 — Stoichiometry:</strong> Determine moles of acid and base. Identify the limiting reagent. Calculate moles of each species remaining after the neutralization reaction goes to completion.</p>' +
            '<p><strong>Step 2 — Equilibrium (if needed):</strong> Based on what remains, perform the appropriate calculation:</p>' +
            '<ul>' +
            '<li><strong>Before any titrant added:</strong> ICE table for the weak acid (or base).</li>' +
            '<li><strong>Buffer region</strong> (before equivalence): Henderson-Hasselbalch using remaining moles of HA and A<sup>&minus;</sup>.</li>' +
            '<li><strong>Half-equivalence point:</strong> pH = pK<sub>a</sub> (special case of buffer region).</li>' +
            '<li><strong>Equivalence point:</strong> K<sub>b</sub> calculation for A<sup>&minus;</sup> (WA+SB) or K<sub>a</sub> calculation for BH<sup>+</sup> (WB+SA), or pH = 7 (SA+SB).</li>' +
            '<li><strong>After equivalence:</strong> Excess strong reagent dominates pH. Calculate [excess OH<sup>&minus;</sup>] or [excess H<sub>3</sub>O<sup>+</sup>] directly.</li>' +
            '</ul>',
          keyPoints: [
            'Two-step method: stoichiometry first, then equilibrium.',
            'Before equivalence (WA+SB): buffer → Henderson-Hasselbalch.',
            'At equivalence (WA+SB): Kb calculation on conjugate base.',
            'After equivalence: excess strong reagent gives pH directly.',
            'Use moles (not concentrations) for the stoichiometry step.'
          ],
          formulae: [
            '\\[ \\text{mol remaining} = \\text{mol initial} - \\text{mol reacted} \\]',
            '\\[ \\text{pH} = \\text{p}K_a + \\log\\frac{\\text{mol } \\ce{A-}}{\\text{mol HA}} \\quad (\\text{buffer region}) \\]',
            '\\[ K_b = \\frac{K_w}{K_a} \\quad (\\text{equivalence point, ICE on } \\ce{A-}) \\]',
            '\\[ [\\ce{OH-}] = \\frac{\\text{mol excess}}{V_{\\text{total}}} \\quad (\\text{past equivalence}) \\]'
          ],
          workedExamples: [
            {
              title: 'Titration pH After Equivalence Point',
              body:
                '<p><strong>Problem:</strong> 25.0 mL of 0.100 M HCl is titrated with 0.100 M NaOH. Find the pH after 30.0 mL of NaOH has been added.</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>mol HCl = 0.0250 &times; 0.100 = 0.00250 mol. mol NaOH = 0.0300 &times; 0.100 = 0.00300 mol.</p>' +
                '<p>Excess NaOH = 0.00300 &minus; 0.00250 = 0.00050 mol.</p>' +
                '<p>Total volume = 55.0 mL = 0.0550 L. [OH<sup>&minus;</sup>] = 0.00050/0.0550 = 9.09 &times; 10<sup>&minus;3</sup> M.</p>' +
                '<p>pOH = &minus;log(9.09 &times; 10<sup>&minus;3</sup>) = 2.04. pH = 14.00 &minus; 2.04 = <strong>11.96</strong>.</p>'
            }
          ],
          warnings: [
            'After equivalence, ignore the hydrolysis of A<sup>−</sup> when excess OH<sup>−</sup> is present — it is negligible.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Two-step at every titration point: (1) stoichiometry on moles, (2) equilibrium or excess calculation. Before equiv = buffer; at equiv = Kb; after equiv = excess OH<sup>−</sup>.',
          keyPoints: [
            'Use moles, not concentration, for stoichiometry step.',
            'Only convert to concentration for the equilibrium step (divide by total volume).'
          ],
          formulae: ['\\( \\text{pH} = \\text{p}K_a + \\log\\frac{\\text{mol } \\ce{A-}}{\\text{mol HA}} \\)', '\\( [\\ce{OH-}]_{\\text{excess}} = \\frac{\\text{mol excess}}{V_{\\text{total}}} \\)']
        }
      },
      examTips: [
        'AP FRQ titration problems typically ask for pH at 4 points: initial, buffer region, equivalence, after equivalence. Practice all four.',
        'You can use moles directly in Henderson-Hasselbalch (volumes cancel when both species are in the same solution).'
      ],
      connections: [
        { color: 'orange', label: '→ Topic 8.9: Henderson-Hasselbalch is the go-to equation for buffer region', sec: 'content' },
        { color: 'teal', label: '→ Unit 4: Stoichiometry — limiting reagent analysis in titration', sec: 'content' }
      ],
      questionIds: ['U8Q019']
    },

    /* ============================================================
       8.6  Molecular Structure of Acids and Bases
       ============================================================ */
    {
      id: 'U8.6.1', code: 'Topic 8.6', subtopic: '8.6',
      subtopicTitle: 'Molecular Structure of Acids and Bases', section: 'unit8',
      concepts: ['binary-acid-strength', 'bond-strength'],
      statement:
        'For binary acids (HX), acid strength increases down a group (weaker H-X bond, easier to break) and across a period with increasing electronegativity of X. Bond strength is the dominant factor down a group.',
      content: {
        textbook: {
          explanation:
            '<p>The strength of a <strong>binary acid</strong> (HX, where X is a nonmetal) depends on two factors:</p>' +
            '<h4>Down a Group: Bond Strength Dominates</h4>' +
            '<ul>' +
            '<li>As X gets larger down a group, the H&ndash;X bond gets <strong>longer and weaker</strong>.</li>' +
            '<li>A weaker bond means the proton is more easily released &rarr; <strong>stronger acid</strong>.</li>' +
            '<li>Trend: HF &lt; HCl &lt; HBr &lt; HI (acid strength increases down Group 17).</li>' +
            '<li>HF is a weak acid (K<sub>a</sub> = 6.6 &times; 10<sup>&minus;4</sup>) while HCl, HBr, and HI are all strong acids.</li>' +
            '<li>Similarly: H<sub>2</sub>O &lt; H<sub>2</sub>S &lt; H<sub>2</sub>Se &lt; H<sub>2</sub>Te in acid strength.</li>' +
            '</ul>' +
            '<h4>Across a Period: Electronegativity Dominates</h4>' +
            '<ul>' +
            '<li>When atoms are similar in size (same period), the more electronegative X stabilizes the negative charge on X<sup>&minus;</sup> after H<sup>+</sup> leaves.</li>' +
            '<li>Greater electronegativity &rarr; more stable conjugate base &rarr; <strong>stronger acid</strong>.</li>' +
            '<li>Trend: CH<sub>4</sub> &lt; NH<sub>3</sub> &lt; H<sub>2</sub>O &lt; HF (across Period 2).</li>' +
            '</ul>' +
            '<p>The key insight is that <strong>down a group, bond strength trumps electronegativity</strong>. Even though F is more electronegative than I, HI is a much stronger acid because the H&ndash;I bond is so much weaker.</p>',
          keyPoints: [
            'Down a group: bond strength decreases → acid strength increases (HF < HCl < HBr < HI).',
            'Across a period: electronegativity increases → acid strength increases.',
            'Bond strength is the dominant factor when comparing acids in the same group.',
            'HF is the only hydrohalic acid that is weak.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Ranking Binary Acid Strength',
              body:
                '<p><strong>Problem:</strong> Rank in order of increasing acid strength: H<sub>2</sub>O, HF, H<sub>2</sub>S, HCl.</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>H<sub>2</sub>O and HF are in Period 2: HF is stronger (F more electronegative than O).</p>' +
                '<p>H<sub>2</sub>O and H<sub>2</sub>S are in Group 16: H<sub>2</sub>S is stronger (weaker H&ndash;S bond).</p>' +
                '<p>HF and HCl are in Group 17: HCl is stronger (weaker H&ndash;Cl bond). HCl is actually a strong acid.</p>' +
                '<p>Order: <strong>H<sub>2</sub>O &lt; HF &lt; H<sub>2</sub>S &lt; HCl</strong></p>'
            }
          ],
          warnings: [
            'A common misconception is that HF should be a strong acid because F is so electronegative. But the H–F bond is very strong and short, making HF a weak acid.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Down a group: weaker bond = stronger acid. Across a period: higher electronegativity = stronger acid. Bond strength dominates down a group.',
          keyPoints: [
            'HF < HCl < HBr < HI (only HF is weak).',
            'H<sub>2</sub>O < H<sub>2</sub>S < H<sub>2</sub>Se < H<sub>2</sub>Te.'
          ],
          formulae: []
        }
      },
      examTips: [
        'This topic appears frequently as a ranking question on the MCQ section. Know the two trends and which dominates when.',
        'If asked "why is HI a stronger acid than HF?", emphasize bond strength (H–I bond is weaker), NOT electronegativity.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 3: IMFs and bonding — bond length and bond energy determine acid strength', sec: 'content' },
        { color: 'purple', label: '→ Topic 8.6.2: Oxyacid strength follows a different pattern', sec: 'content' }
      ],
      questionIds: ['U8Q020']
    },

    {
      id: 'U8.6.2', code: 'Topic 8.6', subtopic: '8.6',
      subtopicTitle: 'Molecular Structure of Acids and Bases', section: 'unit8',
      concepts: ['oxyacid-strength', 'conjugate-base-stability'],
      statement:
        'For oxyacids with the same central atom, more oxygen atoms mean a stronger acid because the extra electronegative oxygens stabilize the conjugate base through electron withdrawal. Base strength of an anion is inversely related to the acid strength of its conjugate acid.',
      content: {
        textbook: {
          explanation:
            '<p><strong>Oxyacids</strong> have the general structure H&ndash;O&ndash;X(&ndash;O)<sub>n</sub>, where X is the central atom. Their strength depends on:</p>' +
            '<h4>Same Central Atom, Different Number of Oxygens</h4>' +
            '<ul>' +
            '<li>More terminal oxygen atoms = <strong>stronger acid</strong>.</li>' +
            '<li>Each additional O withdraws electron density from the O&ndash;H bond (inductive effect), making it easier to lose the proton.</li>' +
            '<li>The extra O atoms also stabilize the conjugate base by delocalizing the negative charge.</li>' +
            '<li>Example: HClO &lt; HClO<sub>2</sub> &lt; HClO<sub>3</sub> &lt; HClO<sub>4</sub> (perchloric acid is one of the strongest acids known).</li>' +
            '<li>Example: H<sub>2</sub>SO<sub>3</sub> &lt; H<sub>2</sub>SO<sub>4</sub>.</li>' +
            '</ul>' +
            '<h4>Same Structure, Different Central Atom (Same Period)</h4>' +
            '<ul>' +
            '<li>More electronegative central atom = stronger acid (pulls more electron density from O&ndash;H).</li>' +
            '<li>Example: H<sub>3</sub>PO<sub>4</sub> &lt; H<sub>2</sub>SO<sub>4</sub> &lt; HClO<sub>4</sub> (Cl more electronegative than S, which is more electronegative than P).</li>' +
            '</ul>' +
            '<h4>Base Strength of Anions</h4>' +
            '<p>The conjugate base of a strong acid is a very weak base (negligible basicity). The conjugate base of a weak acid is a relatively stronger base. Therefore:</p>' +
            '<ul>' +
            '<li>ClO<sub>4</sub><sup>&minus;</sup> is an extremely weak base (conjugate of a very strong acid).</li>' +
            '<li>ClO<sup>&minus;</sup> (hypochlorite) is a moderately strong base (conjugate of a weak acid, HClO).</li>' +
            '</ul>',
          keyPoints: [
            'More oxygens on same central atom = stronger oxyacid.',
            'More electronegative central atom = stronger oxyacid (same structure).',
            'Extra O atoms stabilize the conjugate base by delocalizing charge.',
            'Base strength of anion = inverse of acid strength of conjugate acid.',
            'HClO < HClO<sub>2</sub> < HClO<sub>3</sub> < HClO<sub>4</sub>.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Ranking Oxyacid Strength',
              body:
                '<p><strong>Problem:</strong> Rank in order of increasing acid strength: HClO<sub>3</sub>, HBrO<sub>3</sub>, HClO<sub>2</sub>.</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>HClO<sub>2</sub> vs. HClO<sub>3</sub>: same central atom (Cl), but HClO<sub>3</sub> has more O atoms &rarr; HClO<sub>3</sub> is stronger.</p>' +
                '<p>HClO<sub>3</sub> vs. HBrO<sub>3</sub>: same number of O atoms, but Cl is more electronegative than Br &rarr; HClO<sub>3</sub> is stronger.</p>' +
                '<p>Order: <strong>HClO<sub>2</sub> &lt; HBrO<sub>3</sub> &lt; HClO<sub>3</sub></strong></p>'
            }
          ],
          warnings: [
            'The number of TERMINAL oxygens (not bonded to H) determines oxyacid strength, not the total number of O atoms. For example, H<sub>3</sub>PO<sub>4</sub> has 4 O atoms but only 1 terminal O (the other 3 have H attached), giving it relatively low acidity.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Oxyacids: more O = stronger acid (same central atom). More electronegative central atom = stronger acid (same structure). Base strength of anion is inverse of conjugate acid strength.',
          keyPoints: [
            'HClO < HClO<sub>2</sub> < HClO<sub>3</sub> < HClO<sub>4</sub>.',
            'Inductive effect of O atoms weakens O–H bond.'
          ],
          formulae: []
        }
      },
      examTips: [
        'Ranking oxyacid strength is a near-guaranteed MCQ topic. Memorize: more O = stronger acid.',
        'If asked to rank base strength of anions, rank the conjugate acids first, then reverse the order.'
      ],
      connections: [
        { color: 'orange', label: '→ Unit 3: Electronegativity and polar bonds — inductive effect determines oxyacid strength', sec: 'content' },
        { color: 'teal', label: '→ Topic 8.1: Conjugate pairs — stronger acid = weaker conjugate base', sec: 'content' }
      ],
      questionIds: ['U8Q021', 'U8Q022']
    },

    /* ============================================================
       8.7  pH and pKa
       ============================================================ */
    {
      id: 'U8.7.1', code: 'Topic 8.7', subtopic: '8.7',
      subtopicTitle: 'pH and pKa', section: 'unit8',
      concepts: ['pKa', 'acid-strength-scale'],
      statement:
        'pKa = -log(Ka). A smaller pKa indicates a stronger acid. The pKa scale converts the wide range of Ka values into a convenient linear scale for comparing acid strengths.',
      content: {
        textbook: {
          explanation:
            '<p>Just as pH converts [H<sub>3</sub>O<sup>+</sup>] to a manageable scale, <strong>pK<sub>a</sub></strong> converts K<sub>a</sub>:</p>' +
            '<p style="text-align:center;">pK<sub>a</sub> = &minus;log(K<sub>a</sub>)&emsp;&emsp;&emsp;K<sub>a</sub> = 10<sup>&minus;pK<sub>a</sub></sup></p>' +
            '<p>Key relationships:</p>' +
            '<ul>' +
            '<li><strong>Smaller pK<sub>a</sub></strong> = larger K<sub>a</sub> = <strong>stronger acid</strong>.</li>' +
            '<li>Strong acids have <strong>negative</strong> pK<sub>a</sub> values (e.g., HCl has pK<sub>a</sub> &asymp; &minus;7).</li>' +
            '<li>Weak acids have positive pK<sub>a</sub> values (e.g., acetic acid has pK<sub>a</sub> = 4.74).</li>' +
            '<li>pK<sub>a</sub> + pK<sub>b</sub> = pK<sub>w</sub> = 14.00 at 25 &deg;C (for a conjugate pair).</li>' +
            '</ul>' +
            '<p>Similarly, pK<sub>b</sub> = &minus;log(K<sub>b</sub>), and a smaller pK<sub>b</sub> indicates a stronger base.</p>',
          keyPoints: [
            'pKa = -log(Ka); smaller pKa = stronger acid.',
            'Strong acids: pKa < 0. Weak acids: pKa > 0.',
            'pKa + pKb = 14 at 25 °C (conjugate pair).',
            'pKa is used in Henderson-Hasselbalch: pH = pKa + log([A<sup>−</sup>]/[HA]).'
          ],
          formulae: [
            '\\[ \\text{p}K_a = -\\log K_a \\]',
            '\\[ K_a = 10^{-\\text{p}K_a} \\]',
            '\\[ \\text{p}K_a + \\text{p}K_b = 14.00 \\quad (\\text{at 25 °C}) \\]',
            '\\[ \\text{p}K_b = -\\log K_b \\]'
          ],
          workedExamples: [
            {
              title: 'Converting Between Ka and pKa',
              body:
                '<p><strong>Problem:</strong> The K<sub>a</sub> of formic acid (HCOOH) is 1.8 &times; 10<sup>&minus;4</sup>. Calculate its pK<sub>a</sub> and the pK<sub>b</sub> of its conjugate base (HCOO<sup>&minus;</sup>).</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>pK<sub>a</sub> = &minus;log(1.8 &times; 10<sup>&minus;4</sup>) = <strong>3.74</strong></p>' +
                '<p>pK<sub>b</sub> = 14.00 &minus; 3.74 = <strong>10.26</strong></p>' +
                '<p>K<sub>b</sub> = 10<sup>&minus;10.26</sup> = 5.5 &times; 10<sup>&minus;11</sup></p>'
            }
          ],
          warnings: [
            'Do not confuse pKa with pH. pKa is a property of the acid (constant at a given T); pH is a property of the solution.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'pKa = -log(Ka). Smaller pKa = stronger acid. pKa + pKb = 14 for conjugate pairs.',
          keyPoints: [
            'At the half-equivalence point of a titration, pH = pKa.',
            'In a buffer with equal [HA] and [A<sup>−</sup>], pH = pKa.'
          ],
          formulae: ['\\( \\text{p}K_a = -\\log K_a \\)', '\\( \\text{p}K_a + \\text{p}K_b = 14 \\)']
        }
      },
      examTips: [
        'The AP exam gives a table of Ka values. Quickly convert to pKa mentally: Ka = 10<sup>−</sup><sup>5</sup> → pKa = 5.',
        'If given two acids and asked which is stronger, compare Ka (larger = stronger) or pKa (smaller = stronger).'
      ],
      connections: [
        { color: 'purple', label: '→ Topic 8.9: Henderson-Hasselbalch uses pKa directly', sec: 'content' },
        { color: 'orange', label: '→ Topic 8.5: At the half-equivalence point, pH = pKa', sec: 'content' }
      ],
      questionIds: ['U8Q023']
    },

    {
      id: 'U8.7.2', code: 'Topic 8.7', subtopic: '8.7',
      subtopicTitle: 'pH and pKa', section: 'unit8',
      concepts: ['Ka-determination'],
      statement:
        'Ka can be experimentally determined from pH measurements of solutions of known concentration, or from the half-equivalence point of a titration curve where pH = pKa.',
      content: {
        textbook: {
          explanation:
            '<p>There are two common experimental methods to determine K<sub>a</sub>:</p>' +
            '<h4>Method 1: pH of a Known Concentration</h4>' +
            '<p>If you know the initial concentration C<sub>0</sub> and measure the pH, you can calculate [H<sub>3</sub>O<sup>+</sup>] = 10<sup>&minus;pH</sup> = x. Then:</p>' +
            '<p style="text-align:center;">K<sub>a</sub> = x&sup2; / (C<sub>0</sub> &minus; x)</p>' +
            '<h4>Method 2: Half-Equivalence Point of a Titration</h4>' +
            '<p>At the half-equivalence point, exactly half of the weak acid has been neutralized, so [HA] = [A<sup>&minus;</sup>]. From Henderson-Hasselbalch:</p>' +
            '<p style="text-align:center;">pH = pK<sub>a</sub> + log(1) = pK<sub>a</sub></p>' +
            '<p>Therefore, K<sub>a</sub> = 10<sup>&minus;pH</sup> at the half-equivalence point. This is the easiest method and appears frequently on the AP exam.</p>',
          keyPoints: [
            'Method 1: Measure pH of known concentration → Ka = x<sup>2</sup>/(C<sub>0</sub> − x).',
            'Method 2: Read pH at half-equivalence point → pKa = pH, Ka = 10^(-pH).',
            'Half-equivalence point is the most reliable method.',
            'Ka is temperature-dependent but concentration-independent.'
          ],
          formulae: [
            '\\[ K_a = \\frac{x^2}{C_0 - x} \\quad \\text{where } x = 10^{-\\text{pH}} \\]',
            '\\[ \\text{At half-equivalence: } K_a = 10^{-\\text{pH}} \\]'
          ],
          workedExamples: [
            {
              title: 'Finding Ka from the Half-Equivalence Point',
              body:
                '<p><strong>Problem:</strong> A titration curve for a weak acid shows that the half-equivalence point occurs at pH = 4.74. What is K<sub>a</sub>?</p>' +
                '<p><strong>Solution:</strong> At the half-equivalence point, pH = pK<sub>a</sub>. Therefore pK<sub>a</sub> = 4.74 and K<sub>a</sub> = 10<sup>&minus;4.74</sup> = <strong>1.8 &times; 10<sup>&minus;5</sup></strong>.</p>' +
                '<p>(This is the K<sub>a</sub> of acetic acid.)</p>'
            }
          ],
          warnings: [
            'When using Method 1, do NOT forget to subtract x from C<sub>0</sub> in the denominator if percent ionization exceeds 5%.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Ka from pH: Ka = x<sup>2</sup>/(C<sub>0</sub> − x). Ka from titration: at half-equiv point, pH = pKa, so Ka = 10^(-pH).',
          keyPoints: [
            'Half-equivalence point is the easiest way to find Ka experimentally.'
          ],
          formulae: ['\\( K_a = 10^{-\\text{pH}} \\) at half-equivalence point']
        }
      },
      examTips: [
        'On the AP exam, if given a titration curve and asked to determine Ka, find the half-equivalence point (half the volume to equivalence) and read the pH.',
        'This type of question appears on virtually every AP Chemistry exam.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 8.5: Titration curves — reading the half-equivalence point', sec: 'content' },
        { color: 'orange', label: '→ Topic 8.3: Ka is used in ICE table calculations', sec: 'content' }
      ],
      questionIds: ['U8Q024']
    },

    /* ============================================================
       8.8  Properties of Buffers
       ============================================================ */
    {
      id: 'U8.8.1', code: 'Topic 8.8', subtopic: '8.8',
      subtopicTitle: 'Properties of Buffers', section: 'unit8',
      concepts: ['buffer-mechanism'],
      statement:
        'A buffer resists pH change because added H<sub>3</sub>O<sup>+</sup> is consumed by the conjugate base (A<sup>−</sup> + H<sub>3</sub>O<sup>+</sup> → HA + H<sub>2</sub>O) and added OH<sup>−</sup> is consumed by the weak acid (HA + OH<sup>−</sup> → A<sup>−</sup> + H<sub>2</sub>O). Both reactions go to completion.',
      content: {
        textbook: {
          explanation:
            '<p>The mechanism by which a buffer resists pH change involves <strong>two neutralization reactions</strong>:</p>' +
            '<h4>When Strong Acid is Added</h4>' +
            '<p style="text-align:center;">A<sup>&minus;</sup>(aq) + H<sub>3</sub>O<sup>+</sup>(aq) &rarr; HA(aq) + H<sub>2</sub>O(l)</p>' +
            '<p>The conjugate base <strong>neutralizes</strong> the added acid. [A<sup>&minus;</sup>] decreases and [HA] increases, but the ratio [A<sup>&minus;</sup>]/[HA] changes only slightly &mdash; so pH changes only slightly.</p>' +
            '<h4>When Strong Base is Added</h4>' +
            '<p style="text-align:center;">HA(aq) + OH<sup>&minus;</sup>(aq) &rarr; A<sup>&minus;</sup>(aq) + H<sub>2</sub>O(l)</p>' +
            '<p>The weak acid neutralizes the added base. [HA] decreases and [A<sup>&minus;</sup>] increases.</p>' +
            '<p>After the neutralization, use Henderson-Hasselbalch with the new amounts to find the new pH. The change in pH is small as long as both HA and A<sup>&minus;</sup> remain in significant amounts.</p>' +
            '<p><strong>Quantitative example:</strong> A buffer with 0.100 mol HA and 0.100 mol A<sup>&minus;</sup> (pH = pK<sub>a</sub>). Add 0.010 mol HCl:</p>' +
            '<ul>' +
            '<li>0.010 mol A<sup>&minus;</sup> reacts with 0.010 mol H<sub>3</sub>O<sup>+</sup>: A<sup>&minus;</sup> goes from 0.100 to 0.090 mol, HA goes from 0.100 to 0.110 mol.</li>' +
            '<li>New pH = pK<sub>a</sub> + log(0.090/0.110) = pK<sub>a</sub> &minus; 0.087.</li>' +
            '<li>pH changed by only 0.087 units! Without the buffer, 0.010 mol HCl in 1 L would give pH &asymp; 2.</li>' +
            '</ul>',
          keyPoints: [
            'Added H<sub>3</sub>O<sup>+</sup> reacts with A<sup>−</sup> → HA (completion).',
            'Added OH<sup>−</sup> reacts with HA → A<sup>−</sup> (completion).',
            'The ratio [A<sup>−</sup>]/[HA] changes slightly → small pH change.',
            'Both neutralization reactions go to completion — then recalculate pH with H-H.'
          ],
          formulae: [
            '\\[ \\ce{A- + H3O+ -> HA + H2O} \\]',
            '\\[ \\ce{HA + OH- -> A- + H2O} \\]',
            '\\[ \\text{pH}_{\\text{new}} = \\text{p}K_a + \\log\\frac{\\text{mol } \\ce{A-}_{\\text{new}}}{\\text{mol HA}_{\\text{new}}} \\]'
          ],
          workedExamples: [
            {
              title: 'Buffer pH After Adding Strong Acid',
              body:
                '<p><strong>Problem:</strong> A buffer contains 0.200 mol CH<sub>3</sub>COOH and 0.250 mol CH<sub>3</sub>COO<sup>&minus;</sup> in 1.00 L (K<sub>a</sub> = 1.8 &times; 10<sup>&minus;5</sup>, pK<sub>a</sub> = 4.74). What is the pH after adding 0.050 mol HCl?</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>Step 1 — Stoichiometry: 0.050 mol H<sub>3</sub>O<sup>+</sup> reacts with CH<sub>3</sub>COO<sup>&minus;</sup>.</p>' +
                '<p>New mol CH<sub>3</sub>COO<sup>&minus;</sup> = 0.250 &minus; 0.050 = 0.200 mol.</p>' +
                '<p>New mol CH<sub>3</sub>COOH = 0.200 + 0.050 = 0.250 mol.</p>' +
                '<p>Step 2 — Henderson-Hasselbalch:</p>' +
                '<p>pH = 4.74 + log(0.200/0.250) = 4.74 + (&minus;0.097) = <strong>4.64</strong></p>' +
                '<p>The pH dropped by only 0.10 units despite adding 0.050 mol of strong acid.</p>'
            }
          ],
          warnings: [
            'Always do the stoichiometry step FIRST (neutralization goes to completion), then apply Henderson-Hasselbalch to the remaining amounts.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Buffer mechanism: A<sup>−</sup> consumes added H<sub>3</sub>O<sup>+</sup>; HA consumes added OH<sup>−</sup>. Do stoichiometry first, then H-H.',
          keyPoints: [
            'pH change is small as long as neither component is fully consumed.',
            'After neutralization, use new moles in H-H (volumes cancel).'
          ],
          formulae: ['\\( \\text{pH}_{\\text{new}} = \\text{p}K_a + \\log\\frac{\\text{mol } \\ce{A-}_{\\text{new}}}{\\text{mol HA}_{\\text{new}}} \\)']
        }
      },
      examTips: [
        'AP FRQ: "Explain how this buffer resists pH change when HCl is added." Always write the reaction equation (A<sup>−</sup> + H<sub>3</sub>O<sup>+</sup> → HA + H<sub>2</sub>O) and explain that the ratio changes only slightly.',
        'If all of one component is consumed, state that the buffer has been broken and pH will change dramatically.'
      ],
      connections: [
        { color: 'purple', label: '→ Topic 8.9: Henderson-Hasselbalch quantifies the buffer pH', sec: 'content' },
        { color: 'teal', label: '→ Topic 8.10: Buffer capacity determines how much acid/base can be absorbed', sec: 'content' }
      ],
      questionIds: ['U8Q025']
    },

    {
      id: 'U8.8.2', code: 'Topic 8.8', subtopic: '8.8',
      subtopicTitle: 'Properties of Buffers', section: 'unit8',
      concepts: ['effective-buffer-range'],
      statement:
        'A buffer is most effective when pH ≈ pKa (i.e., [HA] ≈ [A<sup>−</sup>]). The effective buffer range is typically pKa ± 1, corresponding to [A<sup>−</sup>]/[HA] ratios between 0.1 and 10.',
      content: {
        textbook: {
          explanation:
            '<p>A buffer works best when the ratio [A<sup>&minus;</sup>]/[HA] is close to 1 (i.e., pH &asymp; pK<sub>a</sub>). At this point, the buffer has equal capacity to absorb added acid or base.</p>' +
            '<p>The <strong>effective buffer range</strong> is generally pK<sub>a</sub> &plusmn; 1:</p>' +
            '<ul>' +
            '<li>When [A<sup>&minus;</sup>]/[HA] = 10: pH = pK<sub>a</sub> + 1. Beyond this, too little HA remains to absorb added base.</li>' +
            '<li>When [A<sup>&minus;</sup>]/[HA] = 0.1: pH = pK<sub>a</sub> &minus; 1. Beyond this, too little A<sup>&minus;</sup> remains to absorb added acid.</li>' +
            '</ul>' +
            '<p>To prepare a buffer at a target pH, choose a weak acid whose pK<sub>a</sub> is close to the target pH. Then adjust the [A<sup>&minus;</sup>]/[HA] ratio using Henderson-Hasselbalch.</p>',
          keyPoints: [
            'Optimal buffering at pH = pKa (equal amounts of HA and A<sup>−</sup>).',
            'Effective range: pKa ± 1.',
            'Choose acid with pKa ≈ target pH when designing a buffer.',
            '[A<sup>−</sup>]/[HA] ratio between 0.1 and 10 for effective buffering.'
          ],
          formulae: [
            '\\[ \\text{p}K_a - 1 \\leq \\text{pH} \\leq \\text{p}K_a + 1 \\]'
          ],
          workedExamples: [
            {
              title: 'Choosing an Acid for a Buffer',
              body:
                '<p><strong>Problem:</strong> You need a buffer at pH 9.2. Which acid system would you choose? (a) acetic acid (pK<sub>a</sub> = 4.74), (b) ammonium ion (pK<sub>a</sub> = 9.25), (c) carbonic acid (pK<sub>a1</sub> = 6.35).</p>' +
                '<p><strong>Solution:</strong> Choose (b) NH<sub>4</sub><sup>+</sup>/NH<sub>3</sub> buffer, since pK<sub>a</sub> = 9.25 is closest to the target pH of 9.2. This falls well within the effective range of pK<sub>a</sub> &plusmn; 1 = 8.25 to 10.25.</p>'
            }
          ],
          warnings: [
            'Outside the pKa ± 1 range, the buffer has very little capacity and is essentially non-functional.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Effective buffer range: pKa ± 1. Best buffering when pH = pKa. Choose acid with pKa ≈ target pH.',
          keyPoints: [
            'At pH = pKa: [HA] = [A<sup>−</sup>], equal capacity for acid or base absorption.',
            'Buffer "breaks" when one component is used up.'
          ],
          formulae: ['\\( \\text{Buffer range: } \\text{p}K_a \\pm 1 \\)']
        }
      },
      examTips: [
        'When the AP exam asks you to "select the best buffer system for pH X," always pick the acid with pKa closest to X.',
        'The effective range of pKa ± 1 is a critical concept — memorize it.'
      ],
      connections: [
        { color: 'orange', label: '→ Topic 8.10: Buffer capacity — quantitative measure of how much acid/base a buffer can absorb', sec: 'content' }
      ],
      questionIds: ['U8Q026']
    },

    {
      id: 'U8.8.3', code: 'Topic 8.8', subtopic: '8.8',
      subtopicTitle: 'Properties of Buffers', section: 'unit8',
      concepts: ['buffer-preparation'],
      statement:
        'Buffers can be prepared by mixing a weak acid with a salt of its conjugate base, or by partially neutralizing a weak acid with a strong base (or a weak base with a strong acid).',
      content: {
        textbook: {
          explanation:
            '<p>There are two common methods to prepare a buffer:</p>' +
            '<h4>Method 1: Direct Mixing</h4>' +
            '<p>Mix a weak acid (HA) with a soluble salt of its conjugate base (e.g., NaA). Example: Mix CH<sub>3</sub>COOH with CH<sub>3</sub>COONa to make an acetate buffer.</p>' +
            '<h4>Method 2: Partial Neutralization</h4>' +
            '<p>Add a strong base to a weak acid (less than stoichiometric amount). The OH<sup>&minus;</sup> converts some HA to A<sup>&minus;</sup>, creating both components. Example: Add NaOH to excess CH<sub>3</sub>COOH.</p>' +
            '<p>Similarly, adding strong acid to a weak base creates B and BH<sup>+</sup>.</p>' +
            '<p>The half-equivalence point of any weak acid titration is automatically a buffer with pH = pK<sub>a</sub>.</p>',
          keyPoints: [
            'Method 1: weak acid + salt of conjugate base (direct mixing).',
            'Method 2: weak acid + less-than-stoichiometric strong base (partial neutralization).',
            'Half-equivalence point of a WA+SB titration is a buffer.',
            'The resulting solution must contain BOTH HA and A<sup>−</sup> in significant amounts.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Preparing a Buffer by Partial Neutralization',
              body:
                '<p><strong>Problem:</strong> Describe how to prepare an acetate buffer at pH 5.00 starting with 1.00 L of 0.200 M CH<sub>3</sub>COOH and solid NaOH (pK<sub>a</sub> = 4.74).</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>pH = pK<sub>a</sub> + log([A<sup>&minus;</sup>]/[HA]) &rArr; 5.00 = 4.74 + log([A<sup>&minus;</sup>]/[HA])</p>' +
                '<p>log([A<sup>&minus;</sup>]/[HA]) = 0.26 &rArr; [A<sup>&minus;</sup>]/[HA] = 10<sup>0.26</sup> = 1.82</p>' +
                '<p>Total = [HA] + [A<sup>&minus;</sup>] = 0.200 M (initial acid concentration).</p>' +
                '<p>Let [HA] = y, [A<sup>&minus;</sup>] = 1.82y. Then y + 1.82y = 0.200 &rArr; y = 0.0709 M. [A<sup>&minus;</sup>] = 0.129 M.</p>' +
                '<p>mol NaOH needed = mol A<sup>&minus;</sup> = 0.129 mol (in 1.00 L). Add 0.129 mol NaOH (5.16 g) to the acetic acid solution.</p>'
            }
          ],
          warnings: [
            'If you add equal moles of strong base and weak acid, you end up at the equivalence point — NOT a buffer!'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Two preparation methods: (1) weak acid + conjugate base salt, (2) partial neutralization of weak acid with strong base.',
          keyPoints: [
            'Must have BOTH HA and A<sup>−</sup> present.',
            'Adding stoichiometric (equal mol) strong base destroys the buffer — gives equivalence point.'
          ],
          formulae: []
        }
      },
      examTips: [
        'AP FRQs may ask: "Describe how to prepare a buffer at pH X." State the acid choice (pKa ≈ X) and the method (mixing or partial neutralization).',
        'Know that adding equal moles of NaOH to HA does NOT make a buffer — it makes the conjugate base solution.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 8.5: The buffer region of a titration curve IS a buffer prepared by partial neutralization', sec: 'content' }
      ],
      questionIds: ['U8Q027']
    },

    /* ============================================================
       8.9  Henderson-Hasselbalch Equation
       ============================================================ */
    {
      id: 'U8.9.1', code: 'Topic 8.9', subtopic: '8.9',
      subtopicTitle: 'Henderson-Hasselbalch Equation', section: 'unit8',
      concepts: ['henderson-hasselbalch'],
      statement:
        'The Henderson-Hasselbalch equation, pH = pKa + log([A<sup>−</sup>]/[HA]), relates the pH of a buffer to the pKa of the weak acid and the ratio of conjugate base to weak acid concentrations.',
      content: {
        textbook: {
          explanation:
            '<p>The <strong>Henderson-Hasselbalch (H-H) equation</strong> is derived from the K<sub>a</sub> expression:</p>' +
            '<p style="text-align:center;">K<sub>a</sub> = [H<sub>3</sub>O<sup>+</sup>][A<sup>&minus;</sup>] / [HA]</p>' +
            '<p>Taking &minus;log of both sides:</p>' +
            '<p style="text-align:center;">pK<sub>a</sub> = pH &minus; log([A<sup>&minus;</sup>]/[HA])</p>' +
            '<p>Rearranging:</p>' +
            '<p style="text-align:center;"><strong>pH = pK<sub>a</sub> + log([A<sup>&minus;</sup>]/[HA])</strong></p>' +
            '<p>Key features:</p>' +
            '<ul>' +
            '<li>When [A<sup>&minus;</sup>] = [HA]: log(1) = 0, so <strong>pH = pK<sub>a</sub></strong>.</li>' +
            '<li>When [A<sup>&minus;</sup>] &gt; [HA]: log &gt; 0, so <strong>pH &gt; pK<sub>a</sub></strong>.</li>' +
            '<li>When [A<sup>&minus;</sup>] &lt; [HA]: log &lt; 0, so <strong>pH &lt; pK<sub>a</sub></strong>.</li>' +
            '<li>You can use <strong>moles</strong> instead of concentrations in the ratio, since the volume cancels (both species are in the same solution).</li>' +
            '</ul>' +
            '<p>The H-H equation is <strong>only valid for buffer solutions</strong> (where both HA and A<sup>&minus;</sup> are present in significant amounts). It should NOT be used for strong acid/base solutions or at the equivalence point.</p>',
          keyPoints: [
            'pH = pKa + log([A<sup>−</sup>]/[HA]).',
            'When [A<sup>−</sup>] = [HA]: pH = pKa.',
            'Can use moles instead of concentrations (volume cancels).',
            'Only valid for buffers — NOT for strong acid/base or equivalence point calculations.'
          ],
          formulae: [
            '\\[ \\text{pH} = \\text{p}K_a + \\log\\frac{[\\ce{A-}]}{[\\ce{HA}]} \\]',
            '\\[ \\text{pH} = \\text{p}K_a + \\log\\frac{\\text{mol } \\ce{A-}}{\\text{mol HA}} \\quad (\\text{volumes cancel}) \\]'
          ],
          workedExamples: [
            {
              title: 'Buffer pH Using Henderson-Hasselbalch',
              body:
                '<p><strong>Problem:</strong> Calculate the pH of a buffer containing 0.30 M NH<sub>3</sub> and 0.20 M NH<sub>4</sub>Cl (K<sub>b</sub> for NH<sub>3</sub> = 1.8 &times; 10<sup>&minus;5</sup>).</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>First find pK<sub>a</sub> of NH<sub>4</sub><sup>+</sup>: K<sub>a</sub> = K<sub>w</sub>/K<sub>b</sub> = 1.0 &times; 10<sup>&minus;14</sup> / 1.8 &times; 10<sup>&minus;5</sup> = 5.6 &times; 10<sup>&minus;10</sup>. pK<sub>a</sub> = 9.25.</p>' +
                '<p>The weak acid is NH<sub>4</sub><sup>+</sup> and the conjugate base is NH<sub>3</sub>.</p>' +
                '<p>pH = pK<sub>a</sub> + log([NH<sub>3</sub>]/[NH<sub>4</sub><sup>+</sup>]) = 9.25 + log(0.30/0.20) = 9.25 + 0.18 = <strong>9.43</strong></p>'
            },
            {
              title: 'Buffer pH Using Moles',
              body:
                '<p><strong>Problem:</strong> A solution contains 0.040 mol CH<sub>3</sub>COOH and 0.060 mol CH<sub>3</sub>COONa in 500 mL. Find pH (pK<sub>a</sub> = 4.74).</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>pH = pK<sub>a</sub> + log(mol A<sup>&minus;</sup> / mol HA) = 4.74 + log(0.060/0.040) = 4.74 + log(1.5) = 4.74 + 0.18 = <strong>4.92</strong></p>' +
                '<p>Note: we used moles directly — the 500 mL volume cancels and does not affect the answer.</p>'
            }
          ],
          warnings: [
            'H-H assumes that the amount of acid/base that ionizes is negligible compared to the initial amounts. This is valid for buffers but NOT for very dilute solutions.',
            'Do NOT use H-H at the equivalence point — there is no buffer there.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'pH = pKa + log([A<sup>−</sup>]/[HA]). Use moles or concentrations. Only for buffers. pH = pKa when [A<sup>−</sup>] = [HA].',
          keyPoints: [
            'Most commonly used equation in Unit 8.',
            'For NH<sub>3</sub>/NH<sub>4</sub><sup>+</sup> buffers, the "acid" in H-H is NH<sub>4</sub><sup>+</sup> — find its pKa first.'
          ],
          formulae: ['\\( \\text{pH} = \\text{p}K_a + \\log\\frac{[\\ce{A-}]}{[\\ce{HA}]} \\)']
        }
      },
      examTips: [
        'The Henderson-Hasselbalch equation is on the AP formula sheet. You must be able to use it quickly and correctly.',
        'For the NH<sub>3</sub>/NH<sub>4</sub><sup>+</sup> system, a common error is using Kb in H-H. Always use pKa of the ACID form (NH<sub>4</sub><sup>+</sup>).'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 8.8: Buffer properties — H-H quantifies the buffer mechanism', sec: 'content' },
        { color: 'orange', label: '→ Topic 8.5: H-H describes the buffer region of a titration curve', sec: 'content' }
      ],
      questionIds: ['U8Q028']
    },

    {
      id: 'U8.9.2', code: 'Topic 8.9', subtopic: '8.9',
      subtopicTitle: 'Henderson-Hasselbalch Equation', section: 'unit8',
      concepts: ['buffer-calculations'],
      statement:
        'Henderson-Hasselbalch can be used to calculate the pH of a buffer after adding strong acid or base, by first doing the stoichiometric neutralization and then plugging the new moles into the equation.',
      content: {
        textbook: {
          explanation:
            '<p>The standard workflow for buffer problems with added acid/base:</p>' +
            '<ol>' +
            '<li><strong>Write the neutralization reaction</strong> (goes to completion).</li>' +
            '<li><strong>Calculate new moles</strong> of HA and A<sup>&minus;</sup> after the reaction.</li>' +
            '<li><strong>Apply Henderson-Hasselbalch</strong> with the new moles.</li>' +
            '</ol>' +
            '<p>If all of HA or all of A<sup>&minus;</sup> is consumed, the buffer is <strong>broken</strong>, and H-H no longer applies. In that case, either calculate pH from excess strong reagent or perform an equilibrium (ICE table) calculation.</p>',
          keyPoints: [
            'Three-step process: (1) neutralization stoichiometry, (2) new moles, (3) H-H.',
            'If one component is fully consumed, the buffer is broken.',
            'After breaking, revert to excess-reagent or ICE table calculation.',
            'Moles work directly in H-H — no need to divide by volume.'
          ],
          formulae: [
            '\\[ \\text{mol } \\ce{A-}_{\\text{new}} = \\text{mol } \\ce{A-} - \\text{mol } \\ce{H3O+}; \\quad \\text{mol HA}_{\\text{new}} = \\text{mol HA} + \\text{mol } \\ce{H3O+} \\]',
            '\\[ \\text{mol HA}_{\\text{new}} = \\text{mol HA} - \\text{mol } \\ce{OH-}; \\quad \\text{mol } \\ce{A-}_{\\text{new}} = \\text{mol } \\ce{A-} + \\text{mol } \\ce{OH-} \\]',
            '\\[ \\text{pH} = \\text{p}K_a + \\log\\frac{\\text{mol } \\ce{A-}_{\\text{new}}}{\\text{mol HA}_{\\text{new}}} \\]'
          ],
          workedExamples: [
            {
              title: 'Buffer After Adding Strong Base',
              body:
                '<p><strong>Problem:</strong> A buffer contains 0.100 mol CH<sub>3</sub>COOH and 0.100 mol CH<sub>3</sub>COO<sup>&minus;</sup>. What is the pH after adding 0.030 mol NaOH? (pK<sub>a</sub> = 4.74)</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>NaOH reacts with CH<sub>3</sub>COOH: HA + OH<sup>&minus;</sup> &rarr; A<sup>&minus;</sup> + H<sub>2</sub>O</p>' +
                '<p>New mol HA = 0.100 &minus; 0.030 = 0.070. New mol A<sup>&minus;</sup> = 0.100 + 0.030 = 0.130.</p>' +
                '<p>pH = 4.74 + log(0.130/0.070) = 4.74 + 0.27 = <strong>5.01</strong></p>'
            },
            {
              title: 'Buffer Broken by Excess Acid',
              body:
                '<p><strong>Problem:</strong> The same buffer (0.100 mol HA, 0.100 mol A<sup>&minus;</sup>) has 0.120 mol HCl added. What happens?</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>0.100 mol A<sup>&minus;</sup> is consumed entirely (only 0.100 mol available). Excess HCl = 0.120 &minus; 0.100 = 0.020 mol.</p>' +
                '<p>The buffer is <strong>broken</strong>. The solution now contains 0.200 mol HA (original 0.100 + 0.100 from neutralization) and 0.020 mol excess H<sub>3</sub>O<sup>+</sup>.</p>' +
                '<p>The excess strong acid dominates: pH &asymp; &minus;log([H<sub>3</sub>O<sup>+</sup>]) where [H<sub>3</sub>O<sup>+</sup>] = 0.020 / V<sub>total</sub>. (Need total volume to calculate.)</p>'
            }
          ],
          warnings: [
            'Check that neither component is fully consumed before applying H-H. If one is consumed, the buffer is broken.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Buffer + acid/base: (1) stoichiometry, (2) new moles, (3) H-H. If one component used up, buffer is broken.',
          keyPoints: [
            'Moles directly in H-H — volume cancels.',
            'Broken buffer: revert to excess-reagent calculation.'
          ],
          formulae: ['\\( \\text{pH} = \\text{p}K_a + \\log\\frac{\\text{mol } \\ce{A-}_{\\text{new}}}{\\text{mol HA}_{\\text{new}}} \\)']
        }
      },
      examTips: [
        'AP FRQs love to give a buffer and then add acid or base. The three-step process is essential.',
        'If asked "will the buffer resist this addition?" — calculate whether the added moles exceed either component.'
      ],
      connections: [
        { color: 'purple', label: '→ Topic 8.10: Buffer capacity determines the maximum amount that can be absorbed', sec: 'content' }
      ],
      questionIds: ['U8Q029']
    },

    {
      id: 'U8.9.3', code: 'Topic 8.9', subtopic: '8.9',
      subtopicTitle: 'Henderson-Hasselbalch Equation', section: 'unit8',
      concepts: ['buffer-design'],
      statement:
        'To design a buffer at a target pH: (1) choose a weak acid with pKa close to the target pH, (2) use Henderson-Hasselbalch to determine the required [A<sup>−</sup>]/[HA] ratio.',
      content: {
        textbook: {
          explanation:
            '<p>Designing a buffer at a specific pH is a reverse H-H problem:</p>' +
            '<ol>' +
            '<li>Select a weak acid whose pK<sub>a</sub> is within &plusmn;1 of the target pH.</li>' +
            '<li>Calculate the required ratio: [A<sup>&minus;</sup>]/[HA] = 10<sup>(pH &minus; pK<sub>a</sub>)</sup>.</li>' +
            '<li>Choose total amounts that give adequate buffer capacity (more total moles = higher capacity).</li>' +
            '</ol>',
          keyPoints: [
            'Choose acid with pKa ≈ target pH.',
            '[A<sup>−</sup>]/[HA] = 10^(pH − pKa).',
            'Higher total concentration = greater buffer capacity.',
            'Ratio determines pH; total amount determines capacity.'
          ],
          formulae: [
            '\\[ \\frac{[\\ce{A-}]}{[\\ce{HA}]} = 10^{(\\text{pH} - \\text{p}K_a)} \\]'
          ],
          workedExamples: [
            {
              title: 'Designing a Buffer at pH 4.00',
              body:
                '<p><strong>Problem:</strong> Design a buffer at pH 4.00 using formic acid (HCOOH, pK<sub>a</sub> = 3.74) in 1.00 L with a total formate + formic acid concentration of 0.50 M.</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>[HCOO<sup>&minus;</sup>]/[HCOOH] = 10<sup>(4.00 &minus; 3.74)</sup> = 10<sup>0.26</sup> = 1.82</p>' +
                '<p>Let [HCOOH] = x. Then [HCOO<sup>&minus;</sup>] = 1.82x. Total = x + 1.82x = 2.82x = 0.50 M. x = 0.177 M.</p>' +
                '<p>[HCOOH] = 0.177 M, [HCOO<sup>&minus;</sup>] = 0.323 M.</p>' +
                '<p>Dissolve 0.177 mol HCOOH and 0.323 mol HCOONa in water to make 1.00 L.</p>'
            }
          ],
          warnings: [
            'Do not choose an acid with pKa far from the target pH — the resulting buffer will have poor capacity.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Buffer design: (1) pKa ≈ target pH, (2) ratio = 10^(pH − pKa), (3) total moles for capacity.',
          keyPoints: [
            'Ratio controls pH; amount controls capacity.',
            'pKa within ±1 of target is the rule.'
          ],
          formulae: ['\\( \\frac{[\\ce{A-}]}{[\\ce{HA}]} = 10^{(\\text{pH} - \\text{p}K_a)} \\)']
        }
      },
      examTips: [
        'AP exam: "describe how you would prepare a buffer at pH X." State: choose acid with pKa ≈ X, calculate ratio using H-H, mix components.',
        'This type of problem combines concepts from 8.7, 8.8, and 8.9 — it is a favorite FRQ topic.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 8.8: Effective buffer range pKa ± 1 guides acid selection', sec: 'content' }
      ],
      questionIds: ['U8Q030']
    },

    /* ============================================================
       8.10  Buffer Capacity
       ============================================================ */
    {
      id: 'U8.10.1', code: 'Topic 8.10', subtopic: '8.10',
      subtopicTitle: 'Buffer Capacity', section: 'unit8',
      concepts: ['buffer-capacity'],
      statement:
        'Buffer capacity is the amount of strong acid or base a buffer can absorb before the pH changes significantly. It depends on the total concentration of buffer components — more concentrated buffers have greater capacity.',
      content: {
        textbook: {
          explanation:
            '<p><strong>Buffer capacity</strong> is a quantitative measure of a buffer\'s ability to resist pH change. It is defined as the amount (in moles) of strong acid or strong base that can be added per liter before the pH changes by more than 1 unit (or before the buffer breaks).</p>' +
            '<p>Key factors affecting buffer capacity:</p>' +
            '<ul>' +
            '<li><strong>Total concentration of buffer components:</strong> A buffer with 1.0 M HA + 1.0 M A<sup>&minus;</sup> has 10 times the capacity of one with 0.10 M HA + 0.10 M A<sup>&minus;</sup>. More moles of HA and A<sup>&minus;</sup> mean more acid/base can be neutralized before the buffer is overwhelmed.</li>' +
            '<li><strong>Ratio [A<sup>&minus;</sup>]/[HA]:</strong> Capacity is maximized when [A<sup>&minus;</sup>] &asymp; [HA] (i.e., pH &asymp; pK<sub>a</sub>). At this point, the buffer has equal capacity to absorb acid or base. If the ratio is skewed (e.g., 10:1), the buffer has less capacity for one direction.</li>' +
            '</ul>' +
            '<p>Quantitatively, the <strong>maximum</strong> amount of strong acid a buffer can absorb equals the moles of A<sup>&minus;</sup> present. The maximum amount of strong base it can absorb equals the moles of HA present. When either is exhausted, the buffer is <em>broken</em>.</p>' +
            '<p>Example: A buffer with 0.50 mol HA and 0.30 mol A<sup>&minus;</sup> can absorb up to 0.30 mol HCl (before A<sup>&minus;</sup> is consumed) or up to 0.50 mol NaOH (before HA is consumed).</p>',
          keyPoints: [
            'Buffer capacity increases with total concentration of HA + A<sup>−</sup>.',
            'Maximum acid absorbed = mol A<sup>−</sup> present.',
            'Maximum base absorbed = mol HA present.',
            'Capacity is highest when [A<sup>−</sup>] ≈ [HA].',
            'When either component is fully consumed, the buffer is "broken."'
          ],
          formulae: [
            '\\[ \\text{Max mol acid absorbed} \\approx \\text{mol } \\ce{A-} \\]',
            '\\[ \\text{Max mol base absorbed} \\approx \\text{mol HA} \\]',
            '\\[ \\text{Buffer capacity} \\propto \\text{total mol}(\\ce{HA} + \\ce{A-}) \\]'
          ],
          workedExamples: [
            {
              title: 'Comparing Buffer Capacities',
              body:
                '<p><strong>Problem:</strong> Which buffer has greater capacity? (A) 0.50 M CH<sub>3</sub>COOH / 0.50 M CH<sub>3</sub>COONa, or (B) 0.050 M CH<sub>3</sub>COOH / 0.050 M CH<sub>3</sub>COONa (both in 1.00 L).</p>' +
                '<p><strong>Solution:</strong> Both buffers have the same pH (both have [A<sup>&minus;</sup>]/[HA] = 1, so pH = pK<sub>a</sub> = 4.74). However, buffer A has 0.50 mol of each component, while buffer B has 0.050 mol of each. Buffer A can absorb 10 times as much strong acid or base before breaking. <strong>Buffer A</strong> has greater capacity.</p>'
            },
            {
              title: 'Maximum Addition Before Buffer Breaks',
              body:
                '<p><strong>Problem:</strong> A 1.00 L buffer contains 0.40 mol HA and 0.25 mol A<sup>&minus;</sup>. How much NaOH can be added before the buffer breaks?</p>' +
                '<p><strong>Solution:</strong> NaOH reacts with HA: HA + OH<sup>&minus;</sup> &rarr; A<sup>&minus;</sup> + H<sub>2</sub>O. The buffer breaks when all HA is consumed. Maximum NaOH = <strong>0.40 mol</strong>.</p>'
            }
          ],
          warnings: [
            'Do not confuse buffer capacity (how MUCH acid/base can be absorbed) with buffer range (the pH range over which the buffer is effective).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Buffer capacity = moles of acid/base a buffer can absorb. Increases with total concentration. Max acid ≈ mol A<sup>−</sup>; max base ≈ mol HA.',
          keyPoints: [
            'Higher concentration = greater capacity (same pH).',
            'Buffer breaks when one component is fully consumed.'
          ],
          formulae: ['\\( \\text{Max acid} = \\text{mol } \\ce{A-} \\)', '\\( \\text{Max base} = \\text{mol HA} \\)']
        }
      },
      examTips: [
        'The AP exam may show two buffers at the same pH and ask which has greater capacity — always pick the more concentrated one.',
        'Buffer capacity and buffer range are different concepts. Capacity = how much; range = what pH values.'
      ],
      connections: [
        { color: 'orange', label: '→ Topic 8.9: Henderson-Hasselbalch shows that concentration does not affect pH, only capacity', sec: 'content' },
        { color: 'purple', label: '→ Topic 8.8: Buffer range (pKa ± 1) is a separate concept from capacity', sec: 'content' }
      ],
      questionIds: ['U8Q031']
    },

    {
      id: 'U8.10.2', code: 'Topic 8.10', subtopic: '8.10',
      subtopicTitle: 'Buffer Capacity', section: 'unit8',
      concepts: ['buffer-breakdown'],
      statement:
        'A buffer breaks (ceases to function) when all of one component is consumed by added strong acid or base. After breakdown, the pH changes rapidly with further addition.',
      content: {
        textbook: {
          explanation:
            '<p>A buffer <strong>breaks</strong> (or is overwhelmed) when the added strong acid or base exceeds the buffering capacity:</p>' +
            '<ul>' +
            '<li>Adding more acid than the available moles of A<sup>&minus;</sup> will consume all A<sup>&minus;</sup>. The excess H<sub>3</sub>O<sup>+</sup> is no longer neutralized, and pH drops sharply.</li>' +
            '<li>Adding more base than the available moles of HA will consume all HA. The excess OH<sup>&minus;</sup> is no longer neutralized, and pH rises sharply.</li>' +
            '</ul>' +
            '<p>On a titration curve, buffer breakdown corresponds to reaching the <strong>equivalence point</strong> &mdash; the steep part of the curve where pH changes dramatically with small additions of titrant.</p>' +
            '<p>After breakdown, the solution behaves as if it were a simple strong acid or strong base solution (the small amount of remaining weak species has a negligible effect compared to the excess strong reagent).</p>',
          keyPoints: [
            'Buffer breaks when one component is fully consumed.',
            'After breakdown, pH changes rapidly.',
            'On a titration curve, breakdown = near the equivalence point.',
            'Excess strong reagent dominates pH after breakdown.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Recognizing Buffer Breakdown on a Titration Curve',
              body:
                '<p><strong>Problem:</strong> A titration curve for a weak acid titrated with strong base shows a flat region from 0 to 20 mL of NaOH, then a steep rise around 25 mL. At what point does the buffer break?</p>' +
                '<p><strong>Solution:</strong> The flat region (0&ndash;20 mL) is the buffer region. As the volume approaches the equivalence point (25 mL), the buffer is nearing breakdown &mdash; nearly all HA has been converted to A<sup>&minus;</sup>. At 25 mL, the buffer is fully broken (all HA consumed), and pH rises steeply. Beyond 25 mL, excess NaOH controls the pH.</p>'
            }
          ],
          warnings: [
            'A buffer at the edge of its capacity (e.g., [A<sup>−</sup>]/[HA] = 10) still technically functions but is very vulnerable to breakdown with a small addition.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Buffer breaks when all HA or all A<sup>−</sup> is consumed. After breakdown, pH changes rapidly. Corresponds to the equivalence point region on a titration curve.',
          keyPoints: [
            'Buffer breakdown = steep part of titration curve.',
            'Excess strong reagent controls pH after breakdown.'
          ],
          formulae: []
        }
      },
      examTips: [
        'If an AP FRQ asks "at what point does the buffer stop working?", state when the added moles of acid/base equals the moles of the limiting buffer component.',
        'Connect buffer breakdown to the titration curve — the steep region begins when the buffer is exhausted.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 8.5: Equivalence point on a titration curve = buffer is fully broken', sec: 'content' },
        { color: 'orange', label: '→ Unit 9: Applications of thermodynamics — free energy drives acid-base equilibria', sec: 'content' }
      ],
      questionIds: ['U8Q032']
    }
  ]
};

/* ─── Attach empty labs array for cross-file references ─── */
window.DB = window.DB || {};
if (!window.DB.u8labs) window.DB.u8labs = [];
