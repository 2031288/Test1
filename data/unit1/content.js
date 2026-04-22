/*  ===================================================================
    AP Chemistry – Unit 1: Atomic Structure and Properties
    Content data file for study app
    Topics 1.1 – 1.8  |  Exam Weight: 7-9 %
    =================================================================== */

window.DB_U1_CONTENT = {

  /* ---------------------------------------------------------------
     METADATA
     --------------------------------------------------------------- */
  metadata: {
    id: 'unit1',
    title: 'Unit 1',
    longTitle: 'Unit 1 — Atomic Structure and Properties',
    description: 'This unit lays the quantitative and conceptual foundation for AP Chemistry. Students learn how chemists count atoms (moles), measure them (mass spectrometry, PES), organize them (periodic trends), and predict the ions they form. Every subsequent unit builds on these ideas.',
    guidingQuestion: 'Why do atoms exhibit characteristic physical and chemical properties?',
    examWeight: '7-9%',

    subtopics: [
      /* ---------- 1.1 ---------- */
      {
        id: 'U1.1', code: '1.1', title: 'Moles and Molar Mass',
        learningObjectives: ['SPQ-1.A', 'SPQ-1.B'],
        understandings: ['U1.1.1', 'U1.1.2', 'U1.1.3'],
        blocks: [
          { id: 'B1.1', code: '1.1', title: 'Moles and Molar Mass',
            understandings: ['U1.1.1', 'U1.1.2', 'U1.1.3'] }
        ]
      },
      /* ---------- 1.2 ---------- */
      {
        id: 'U1.2', code: '1.2', title: 'Mass Spectrometry of Elements',
        learningObjectives: ['SPQ-1.B'],
        understandings: ['U1.2.1', 'U1.2.2'],
        blocks: [
          { id: 'B1.2', code: '1.2', title: 'Mass Spectrometry of Elements',
            understandings: ['U1.2.1', 'U1.2.2'] }
        ]
      },
      /* ---------- 1.3 ---------- */
      {
        id: 'U1.3', code: '1.3', title: 'Elemental Composition of Pure Substances',
        learningObjectives: ['SPQ-2.A', 'SPQ-2.B'],
        understandings: ['U1.3.1', 'U1.3.2', 'U1.3.3'],
        blocks: [
          { id: 'B1.3', code: '1.3', title: 'Elemental Composition of Pure Substances',
            understandings: ['U1.3.1', 'U1.3.2', 'U1.3.3'] }
        ]
      },
      /* ---------- 1.4 ---------- */
      {
        id: 'U1.4', code: '1.4', title: 'Composition of Mixtures',
        learningObjectives: ['SPQ-2.B'],
        understandings: ['U1.4.1', 'U1.4.2'],
        blocks: [
          { id: 'B1.4', code: '1.4', title: 'Composition of Mixtures',
            understandings: ['U1.4.1', 'U1.4.2'] }
        ]
      },
      /* ---------- 1.5 ---------- */
      {
        id: 'U1.5', code: '1.5', title: 'Atomic Structure and Electron Configuration',
        learningObjectives: ['SAP-1.A', 'SAP-1.B'],
        understandings: ['U1.5.1', 'U1.5.2', 'U1.5.3'],
        blocks: [
          { id: 'B1.5', code: '1.5', title: 'Atomic Structure and Electron Configuration',
            understandings: ['U1.5.1', 'U1.5.2', 'U1.5.3'] }
        ]
      },
      /* ---------- 1.6 ---------- */
      {
        id: 'U1.6', code: '1.6', title: 'Photoelectron Spectroscopy',
        learningObjectives: ['SAP-1.B'],
        understandings: ['U1.6.1', 'U1.6.2'],
        blocks: [
          { id: 'B1.6', code: '1.6', title: 'Photoelectron Spectroscopy',
            understandings: ['U1.6.1', 'U1.6.2'] }
        ]
      },
      /* ---------- 1.7 ---------- */
      {
        id: 'U1.7', code: '1.7', title: 'Periodic Trends',
        learningObjectives: ['SAP-2.A', 'SAP-2.B'],
        understandings: ['U1.7.1', 'U1.7.2', 'U1.7.3'],
        blocks: [
          { id: 'B1.7', code: '1.7', title: 'Periodic Trends',
            understandings: ['U1.7.1', 'U1.7.2', 'U1.7.3'] }
        ]
      },
      /* ---------- 1.8 ---------- */
      {
        id: 'U1.8', code: '1.8', title: 'Valence Electrons and Ionic Compounds',
        learningObjectives: ['SAP-2.B'],
        understandings: ['U1.8.1', 'U1.8.2'],
        blocks: [
          { id: 'B1.8', code: '1.8', title: 'Valence Electrons and Ionic Compounds',
            understandings: ['U1.8.1', 'U1.8.2'] }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------------
     UNDERSTANDINGS
     --------------------------------------------------------------- */
  understandings: [

    /* =============================================================
       TOPIC 1.1 — Moles and Molar Mass
       ============================================================= */

    // U1.1.1 — The Mole Concept
    {
      id: 'U1.1.1',
      code: 'Topic 1.1',
      subtopic: '1.1',
      subtopicTitle: 'Moles and Molar Mass',
      section: 'unit1',
      concepts: ['quantification', 'mole-concept'],
      statement: 'One mole contains 6.022 × 10<sup>23</sup> particles (Avogadro\'s number). The mole allows chemists to count atoms and molecules by weighing them.',
      content: {
        textbook: {
          explanation: '<p>Atoms are far too small to count individually, so chemists use the <strong>mole</strong> (mol) as a counting unit — analogous to "dozen" but astronomically larger. One mole contains exactly <strong>6.022 × 10<sup>23</sup></strong> representative particles (atoms, molecules, ions, formula units, etc.). This number is called <strong>Avogadro\'s number</strong> (<em>N</em><sub>A</sub>).</p><p>The mole bridges the gap between the atomic scale and the laboratory scale. If you have 1 mol of carbon-12 atoms, their combined mass is exactly 12.00 g — which is measurable on an ordinary balance.</p><p>Important relationships:</p><ul><li>1 mol of atoms of any element contains 6.022 × 10<sup>23</sup> atoms.</li><li>1 mol of molecules of H<sub>2</sub>O contains 6.022 × 10<sup>23</sup> molecules, but 3 × 6.022 × 10<sup>23</sup> total atoms (2 H + 1 O per molecule).</li><li>The molar mass of an element (in g/mol) is numerically equal to its atomic mass (in amu) listed on the periodic table provided on the AP data sheet.</li></ul>',
          keyPoints: [
            'One mole = 6.022 × 10<sup>23</sup> particles (Avogadro\'s number, N<sub>a</sub>).',
            'The mole connects the microscopic (amu) world to the macroscopic (gram) world.',
            'Molar mass of an element in g/mol is numerically equal to its atomic mass in amu.',
            'Always specify the representative particle: mol of atoms, mol of molecules, mol of ions, etc.'
          ],
          formulae: [
            '\\[ n = \\frac{N}{N_A} \\]\n\\( n \\) = moles, \\( N \\) = number of particles, \\( N_A = 6.022 \\times 10^{23} \\) mol\\(^{-1}\\)',
            '\\[ n = \\frac{m}{M} \\]\n\\( m \\) = mass in grams, \\( M \\) = molar mass in g/mol'
          ],
          workedExamples: [
            {
              title: 'Calculating moles from mass',
              body: '<p><strong>Q:</strong> How many moles of iron (Fe) are present in a 55.85 g sample?</p><p><strong>A:</strong> The molar mass of Fe = 55.85 g/mol (from the periodic table on the AP data sheet).</p><p>n = m / M = 55.85 g / 55.85 g·mol<sup>−</sup><sup>1</sup> = <strong>1.000 mol Fe</strong></p>'
            },
            {
              title: 'From mass to number of atoms',
              body: '<p><strong>Q:</strong> How many atoms are in 3.50 g of gold (Au, M = 196.97 g/mol)?</p><p><strong>A:</strong></p><p>Step 1 — moles: n = 3.50 g / 196.97 g·mol<sup>−</sup><sup>1</sup> = 0.01777 mol</p><p>Step 2 — atoms: N = n × N<sub>a</sub> = 0.01777 mol × 6.022 × 10<sup>23</sup> mol<sup>−</sup><sup>1</sup> = <strong>1.07 × 10<sup>22</sup> atoms</strong></p>'
            }
          ],
          warnings: [
            'Molar mass on the AP data sheet is for the naturally occurring mixture of isotopes — it is NOT the mass of a single isotope.',
            'Do not confuse moles of atoms with moles of molecules. 1 mol O<sub>2</sub> contains 2 mol O atoms.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'The mole is the chemist\'s counting unit. 1 mol = 6.022 × 10<sup>23</sup> particles. Molar mass (g/mol) equals atomic mass (amu) numerically. Convert between mass, moles, and particle count using n = m/M and N = n·N<sub>a</sub>.',
          keyPoints: [
            '1 mol = 6.022 × 10<sup>23</sup> particles',
            'n = m / M converts mass to moles',
            'N = n × N<sub>a</sub> converts moles to particle count'
          ],
          formulae: [
            '\\[ n = \\frac{m}{M} \\]',
            '\\[ N = n \\times N_A \\]'
          ]
        }
      },
      examTips: [
        'This is heavily tested in both MCQ and FRQ sections. Always show unit cancellation.',
        'The AP data sheet gives atomic masses — use them directly as molar masses in g/mol.',
        'FRQ tip: Explicitly write n = m/M with units to earn full process points.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 1.2: Mass spectrometry gives accurate atomic masses', sec: 'content' },
        { color: 'blue', label: '→ Topic 1.3: Moles link to percent composition', sec: 'content' },
        { color: 'purple', label: '→ Topic 3.1: Stoichiometry relies on mole ratios', sec: 'content' }
      ],
      questionIds: ['Q001', 'Q002', 'Q004', 'Q027']
    },

    // U1.1.2 — Molar Mass of Compounds
    {
      id: 'U1.1.2',
      code: 'Topic 1.1',
      subtopic: '1.1',
      subtopicTitle: 'Moles and Molar Mass',
      section: 'unit1',
      concepts: ['quantification', 'molar-mass'],
      statement: 'The molar mass of a molecular or ionic compound equals the sum of the molar masses of all atoms in its chemical formula.',
      content: {
        textbook: {
          explanation: '<p>For any compound, you calculate its <strong>molar mass</strong> by summing the molar masses of each element multiplied by its subscript in the formula.</p><p>For <strong>molecular compounds</strong> (e.g., C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>), the molar mass corresponds to one molecule.</p><p>For <strong>ionic compounds</strong> (e.g., CaCl<sub>2</sub>), the molar mass corresponds to one formula unit.</p><p>Molar mass is the conversion factor between grams and moles and appears in virtually every quantitative problem in AP Chemistry.</p>',
          keyPoints: [
            'M(compound) = Σ (number of atoms of each element × molar mass of that element).',
            'For molecular compounds, this gives the mass of one mole of molecules.',
            'For ionic compounds, this gives the mass of one mole of formula units.',
            'Water of hydration must be included: CuSO<sub>4</sub>·5H<sub>2</sub>O has M = 249.69 g/mol.'
          ],
          formulae: [
            '\\[ M(\\text{compound}) = \\sum n_i M_i \\]\nSum over each element \\( i \\) in the formula',
            'Example: \\( M(\\ce{H2O}) = 2(1.008) + 1(16.00) = 18.02 \\) g/mol'
          ],
          workedExamples: [
            {
              title: 'Molar mass of calcium phosphate',
              body: '<p><strong>Q:</strong> Calculate the molar mass of Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>.</p><p><strong>A:</strong></p><ul><li>Ca: 3 × 40.08 = 120.24</li><li>P: 2 × 30.97 = 61.94</li><li>O: 8 × 16.00 = 128.00</li></ul><p>M = 120.24 + 61.94 + 128.00 = <strong>310.18 g/mol</strong></p>'
            }
          ],
          warnings: [
            'Don\'t forget to distribute subscripts through parentheses: Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> has 8 oxygen atoms, not 4.',
            'Use the full atomic masses from the AP data sheet — not rounded integers — for accurate results.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Add up atomic masses (from the periodic table) for every atom in the formula. Distribute subscripts through parentheses. The result in g/mol is the molar mass.',
          keyPoints: [
            'M(compound) = sum of all atomic masses in the formula',
            'Include parenthetical subscripts and waters of hydration'
          ],
          formulae: [
            '\\[ M(\\text{compound}) = \\sum n_i M_i \\]'
          ]
        }
      },
      examTips: [
        'MCQ often test whether you correctly handle parentheses in formulas like Mg(OH)<sub>2</sub>.',
        'Always double-check your atom counts before computing molar mass — a common source of error.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 1.3: Molar mass needed for percent composition', sec: 'content' },
        { color: 'green', label: '→ Topic 3.1: Molar mass converts between grams and moles in stoichiometry', sec: 'content' }
      ],
      questionIds: ['Q003']
    },

    // U1.1.3 — Dimensional Analysis and Mole Conversions
    {
      id: 'U1.1.3',
      code: 'Topic 1.1',
      subtopic: '1.1',
      subtopicTitle: 'Moles and Molar Mass',
      section: 'unit1',
      concepts: ['quantification', 'dimensional-analysis'],
      statement: 'Dimensional analysis (the factor-label method) is the systematic technique for converting between mass, moles, and number of particles using conversion factors.',
      content: {
        textbook: {
          explanation: '<p><strong>Dimensional analysis</strong> is the backbone technique for solving AP Chemistry quantitative problems. You multiply a given quantity by one or more <strong>conversion factors</strong> so that unwanted units cancel and the desired unit remains.</p><p>The three central "stations" in mole conversions are:</p><ol><li><strong>Mass (g)</strong> — measured on a balance</li><li><strong>Moles (mol)</strong> — the chemist\'s counting unit</li><li><strong>Particles (#)</strong> — atoms, molecules, ions, formula units</li></ol><p>Conversion factors:<br>• Between mass and moles: molar mass (M, in g/mol)<br>• Between moles and particles: Avogadro\'s number (6.022 × 10<sup>23</sup> /mol)</p><p>Always arrange conversion factors so units cancel diagonally. This is especially important on FRQ, where showing unit cancellation can earn process points even if the final numerical answer is wrong.</p>',
          keyPoints: [
            'Mass ⇄ Moles: use molar mass (g/mol) as the conversion factor.',
            'Moles ⇄ Particles: use Avogadro\'s number (6.022 × 10<sup>23</sup> mol<sup>−</sup><sup>1</sup>).',
            'Line up conversion factors so that units cancel step by step.',
            'On FRQs, showing clear unit cancellation earns process points.'
          ],
          formulae: [
            '\\[ \\text{mass (g)} \\times \\frac{1 \\text{ mol}}{M \\text{ g}} = \\text{moles} \\]',
            '\\[ \\text{moles} \\times \\frac{6.022 \\times 10^{23} \\text{ particles}}{1 \\text{ mol}} = \\text{particles} \\]',
            '\\[ \\text{mass (g)} \\times \\frac{1 \\text{ mol}}{M \\text{ g}} \\times \\frac{6.022 \\times 10^{23} \\text{ particles}}{1 \\text{ mol}} = \\text{particles} \\]'
          ],
          workedExamples: [
            {
              title: 'Multi-step conversion: grams to atoms',
              body: '<p><strong>Q:</strong> How many oxygen atoms are in 44.0 g of CO<sub>2</sub>?</p><p><strong>A:</strong></p><p>44.0 g CO<sub>2</sub> × (1 mol CO<sub>2</sub> / 44.01 g CO<sub>2</sub>) × (6.022 × 10<sup>23</sup> molecules / 1 mol) × (2 O atoms / 1 molecule CO<sub>2</sub>)</p><p>= 1.000 mol × 6.022 × 10<sup>23</sup> × 2</p><p>= <strong>1.204 × 10<sup>24</sup> O atoms</strong></p><p>Note: the last conversion factor (2 O atoms per molecule) comes from the chemical formula.</p>'
            }
          ],
          warnings: [
            'Always check that units cancel properly before computing — this catches most setup errors.',
            'Significant figures: your answer should have the same number of sig figs as the least precise measurement in the problem.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Dimensional analysis chains conversion factors so units cancel. Mass ↔ moles via molar mass; moles ↔ particles via Avogadro\'s number. Show unit cancellation on every FRQ.',
          keyPoints: [
            'Set up conversion factors so unwanted units cancel',
            'Mass → Moles → Particles (or reverse)',
            'Use the chemical formula for atom-to-molecule ratios'
          ],
          formulae: [
            '\\[ \\text{g} \\times \\frac{1 \\text{ mol}}{M \\text{ g}} \\times \\frac{N_A}{1 \\text{ mol}} = \\text{particles} \\]'
          ]
        }
      },
      examTips: [
        'FRQ tip: Even if you make an arithmetic error, clear dimensional analysis with correct setup earns partial credit.',
        'MCQ strategy: Estimate orders of magnitude before computing — eliminates at least 2 answer choices.'
      ],
      connections: [
        { color: 'blue', label: '→ Topic 3.1: Stoichiometry extends dimensional analysis with mole ratios', sec: 'content' },
        { color: 'teal', label: '→ Topic 1.3: Percent composition uses molar mass conversions', sec: 'content' }
      ],
      questionIds: []
    },

    /* =============================================================
       TOPIC 1.2 — Mass Spectrometry of Elements
       ============================================================= */

    // U1.2.1 — How Mass Spectrometry Works
    {
      id: 'U1.2.1',
      code: 'Topic 1.2',
      subtopic: '1.2',
      subtopicTitle: 'Mass Spectrometry of Elements',
      section: 'unit1',
      concepts: ['mass-spectrometry', 'isotopes'],
      statement: 'Mass spectrometry separates atoms or molecules by mass-to-charge ratio and provides the isotopic composition (identity and relative abundance) of an element.',
      content: {
        textbook: {
          explanation: '<p>A <strong>mass spectrometer</strong> ionizes a gaseous sample, accelerates the ions through an electric field, deflects them in a magnetic field (or time-of-flight tube), and detects them. Ions are separated by their <strong>mass-to-charge ratio (m/z)</strong>.</p><p>The output is a <strong>mass spectrum</strong>: a bar graph with m/z on the x-axis and relative abundance (%) on the y-axis. Each peak corresponds to an isotope (or fragment) of the sample.</p><p>Key information from a mass spectrum of an element:</p><ul><li>The <strong>number of peaks</strong> tells you how many isotopes the element has.</li><li>The <strong>position</strong> of each peak (m/z value) gives the mass of that isotope.</li><li>The <strong>height</strong> of each peak gives the relative abundance of that isotope.</li></ul><p>For AP Chemistry, you do not need to know the mechanical details of the spectrometer — focus on interpreting the spectrum.</p>',
          keyPoints: [
            'Mass spectrometry measures the mass-to-charge ratio (m/z) of ionized particles.',
            'Each peak in a mass spectrum corresponds to one isotope of the element.',
            'Peak position → isotope mass; peak height → relative abundance.',
            'The number of peaks = number of naturally occurring isotopes.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Reading a mass spectrum',
              body: '<p><strong>Q:</strong> A mass spectrum of neon shows peaks at m/z = 20 (90.5%), 21 (0.3%), and 22 (9.2%). How many stable isotopes does neon have?</p><p><strong>A:</strong> Three peaks → three stable isotopes: Ne-20, Ne-21, Ne-22.</p>'
            }
          ],
          warnings: [
            'AP problems assume singly charged ions (z = 1), so m/z equals the isotopic mass directly.',
            'Do not confuse the mass spectrum of an element (atomic peaks) with the mass spectrum of a molecule (fragmentation pattern) — Unit 1 focuses on elements.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Mass spectrometry separates isotopes by m/z ratio. Each peak = one isotope. Peak height = relative abundance. Number of peaks = number of isotopes.',
          keyPoints: [
            'x-axis = m/z (≈ isotope mass when z = 1)',
            'y-axis = relative abundance (%)',
            'Number of peaks = number of isotopes'
          ],
          formulae: []
        }
      },
      examTips: [
        'MCQ frequently show a mass spectrum and ask you to identify the element or calculate average atomic mass.',
        'If the tallest peak is at m/z = 35 and a shorter peak at m/z = 37, think chlorine.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 1.1: Isotopic masses are used to calculate average molar mass', sec: 'content' },
        { color: 'blue', label: '→ Topic 1.6: PES is another spectroscopic technique for atoms', sec: 'content' }
      ],
      questionIds: ['Q005', 'Q006', 'Q007', 'Q032']
    },

    // U1.2.2 — Calculating Average Atomic Mass from Mass Spectra
    {
      id: 'U1.2.2',
      code: 'Topic 1.2',
      subtopic: '1.2',
      subtopicTitle: 'Mass Spectrometry of Elements',
      section: 'unit1',
      concepts: ['mass-spectrometry', 'average-atomic-mass'],
      statement: 'The average atomic mass of an element is the weighted average of the masses of its naturally occurring isotopes, using their fractional abundances as weights.',
      content: {
        textbook: {
          explanation: '<p>The <strong>average atomic mass</strong> printed on the periodic table is not the mass of any single isotope. It is a <strong>weighted average</strong>:</p><p style="text-align:center"><em>Average atomic mass = Σ (fractional abundance × isotopic mass)</em></p><p>The fractional abundance of each isotope equals its percent abundance divided by 100.</p><p>This calculation explains why atomic masses are not whole numbers. For example, chlorine\'s average atomic mass is 35.45 amu — between Cl-35 (75.76%) and Cl-37 (24.24%) — even though no single chlorine atom has a mass of 35.45 amu.</p><p>You must be able to perform this calculation in both directions: given abundances and masses, compute the average; or given the average and one isotope\'s data, find the other.</p>',
          keyPoints: [
            'Average atomic mass = Σ (fractional abundance × isotopic mass).',
            'Fractional abundance = percent abundance / 100.',
            'The weighted average always falls between the lightest and heaviest isotope masses.',
            'The average is closer to the mass of the more abundant isotope.'
          ],
          formulae: [
            '\\[ \\bar{M} = \\sum f_i \\times m_i \\]\n\\( f_i \\) = fractional abundance, \\( m_i \\) = mass of isotope \\( i \\)',
            'For 2 isotopes: \\( \\bar{M} = f_1 m_1 + f_2 m_2 \\), where \\( f_1 + f_2 = 1 \\)'
          ],
          workedExamples: [
            {
              title: 'Average atomic mass of chlorine',
              body: '<p><strong>Q:</strong> Chlorine has two stable isotopes: Cl-35 (mass 34.97 amu, 75.76%) and Cl-37 (mass 36.97 amu, 24.24%). Calculate the average atomic mass.</p><p><strong>A:</strong></p><p>avg = (0.7576)(34.97) + (0.2424)(36.97)</p><p>= 26.50 + 8.962</p><p>= <strong>35.46 amu</strong></p><p>This matches the periodic table value for Cl (35.45 amu, within rounding).</p>'
            },
            {
              title: 'Determining isotope abundance from average mass',
              body: '<p><strong>Q:</strong> Boron has two isotopes: B-10 (10.01 amu) and B-11 (11.01 amu). The average atomic mass is 10.81 amu. What is the percent abundance of each isotope?</p><p><strong>A:</strong> Let x = fractional abundance of B-10. Then (1 − x) = fractional abundance of B-11.</p><p>10.01x + 11.01(1 − x) = 10.81</p><p>10.01x + 11.01 − 11.01x = 10.81</p><p>−1.00x = −0.20</p><p>x = 0.20 → <strong>B-10: 20%, B-11: 80%</strong></p>'
            }
          ],
          warnings: [
            'Always convert percent abundance to fractional abundance (divide by 100) before multiplying.',
            'The average atomic mass will never be outside the range of the individual isotope masses.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Weighted average: multiply each isotope mass by its fractional abundance, then sum. The average is always between the lightest and heaviest isotopes and closer to the more abundant one.',
          keyPoints: [
            'avg = Σ f<sub>i</sub> × m<sub>i</sub>',
            'Convert % to fraction before calculating',
            'Average is closer to the more abundant isotope'
          ],
          formulae: [
            '\\[ \\bar{M} = \\sum f_i \\times m_i \\]'
          ]
        }
      },
      examTips: [
        'This calculation appears on both MCQ and FRQ. On FRQ, always show the full setup with units.',
        'Quick check: the average should be closer to the isotope with higher abundance. Use this to eliminate wrong answer choices.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 1.1: Average atomic mass = molar mass in g/mol', sec: 'content' },
        { color: 'green', label: '→ Topic 1.2: Abundances are read from mass spectra', sec: 'content' }
      ],
      questionIds: []
    },

    /* =============================================================
       TOPIC 1.3 — Elemental Composition of Pure Substances
       ============================================================= */

    // U1.3.1 — Percent Composition by Mass
    {
      id: 'U1.3.1',
      code: 'Topic 1.3',
      subtopic: '1.3',
      subtopicTitle: 'Elemental Composition of Pure Substances',
      section: 'unit1',
      concepts: ['percent-composition', 'quantification'],
      statement: 'The percent composition by mass of an element in a compound equals the mass of that element in one mole of the compound divided by the molar mass of the compound, multiplied by 100%.',
      content: {
        textbook: {
          explanation: '<p><strong>Percent composition by mass</strong> tells you what fraction of a compound\'s total mass comes from each element. For any compound with a known formula:</p><p style="text-align:center"><em>% element = (n × M<sub>element</sub>) / M<sub>compound</sub> × 100%</em></p><p>where <em>n</em> is the number of atoms of that element in the formula, <em>M<sub>element</sub></em> is the molar mass of the element, and <em>M<sub>compound</sub></em> is the molar mass of the compound.</p><p>The sum of all percent compositions must equal 100% (within rounding). This is a useful check.</p>',
          keyPoints: [
            '% by mass = (mass of element in 1 mol compound / molar mass of compound) × 100%.',
            'The sum of all elements\' percent compositions must equal 100%.',
            'Percent composition is independent of sample size — it is an intensive property.',
            'This calculation connects formulas to experimental mass data.'
          ],
          formulae: [
            '\\[ \\%\\text{ element} = \\frac{n \\times M_{\\text{element}}}{M_{\\text{compound}}} \\times 100\\% \\]'
          ],
          workedExamples: [
            {
              title: 'Percent composition of water',
              body: '<p><strong>Q:</strong> Calculate the percent composition of hydrogen and oxygen in H<sub>2</sub>O.</p><p><strong>A:</strong> M(H<sub>2</sub>O) = 2(1.008) + 16.00 = 18.02 g/mol</p><p>%H = (2 × 1.008 / 18.02) × 100% = <strong>11.19%</strong></p><p>%O = (16.00 / 18.02) × 100% = <strong>88.81%</strong></p><p>Check: 11.19 + 88.81 = 100.00% ✓</p>'
            }
          ],
          warnings: [
            'Don\'t forget to multiply the element\'s molar mass by the number of atoms in the formula.',
            'If percentages don\'t sum to 100%, recheck your molar mass calculation.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Percent composition = (mass of element in 1 mol / molar mass of compound) × 100%. All percentages must sum to 100%.',
          keyPoints: [
            '% = (n × M_element / M_compound) × 100%',
            'Sum of all percentages = 100% (useful check)'
          ],
          formulae: [
            '\\[ \\%\\text{ element} = \\frac{n \\times M_{\\text{element}}}{M_{\\text{compound}}} \\times 100\\% \\]'
          ]
        }
      },
      examTips: [
        'MCQ tip: If you\'re asked which compound has the highest % of a given element, compute each one — don\'t guess by formula alone.',
        'FRQ: Always show the molar mass calculation before the percent composition.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 1.1: Requires molar mass calculation', sec: 'content' },
        { color: 'blue', label: '→ Topic 1.3: Leads to empirical formula determination', sec: 'content' }
      ],
      questionIds: []
    },

    // U1.3.2 — Empirical Formula Determination
    {
      id: 'U1.3.2',
      code: 'Topic 1.3',
      subtopic: '1.3',
      subtopicTitle: 'Elemental Composition of Pure Substances',
      section: 'unit1',
      concepts: ['empirical-formula', 'quantification'],
      statement: 'The empirical formula of a compound gives the simplest whole-number ratio of atoms and can be determined from percent composition or mass data.',
      content: {
        textbook: {
          explanation: '<p>The <strong>empirical formula</strong> shows the simplest whole-number ratio of atoms of each element in a compound. For example, glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) has an empirical formula of CH<sub>2</sub>O.</p><p><strong>Procedure to determine the empirical formula from percent composition:</strong></p><ol><li>Assume a 100.0 g sample (so that percentages become grams directly).</li><li>Convert grams of each element to moles using molar mass: n = m/M.</li><li>Divide every mole value by the <strong>smallest</strong> mole value.</li><li>If the resulting ratios are not whole numbers, multiply all by the smallest integer that makes them whole (e.g., multiply by 2 if you get 1.5).</li></ol><p>Common fractional ratios and their multipliers: 0.25 → ×4, 0.33 → ×3, 0.5 → ×2, 0.67 → ×3, 0.75 → ×4.</p>',
          keyPoints: [
            'Empirical formula = simplest whole-number ratio of atoms.',
            'Assume 100 g sample so % → grams directly.',
            'Convert to moles, divide by smallest, round or multiply to whole numbers.',
            'Empirical formula may or may not equal molecular formula.'
          ],
          formulae: [
            '\\[ n_{\\text{element}} = \\frac{\\text{mass (g)}}{M \\text{ (g/mol)}} \\]',
            '\\[ \\text{Mole ratio} = \\frac{n_{\\text{element}}}{n_{\\text{smallest}}} \\]'
          ],
          workedExamples: [
            {
              title: 'Empirical formula from percent composition',
              body: '<p><strong>Q:</strong> A compound is 40.0% C, 6.71% H, and 53.3% O by mass. Determine its empirical formula.</p><p><strong>A:</strong> Assume 100.0 g:</p><ul><li>C: 40.0 g / 12.01 g/mol = 3.33 mol</li><li>H: 6.71 g / 1.008 g/mol = 6.66 mol</li><li>O: 53.3 g / 16.00 g/mol = 3.33 mol</li></ul><p>Divide by smallest (3.33):</p><ul><li>C: 1.00, H: 2.00, O: 1.00</li></ul><p>Empirical formula: <strong>CH<sub>2</sub>O</strong></p>'
            }
          ],
          warnings: [
            'Do NOT round 1.5 down to 1 or up to 2 — multiply the entire set of ratios by 2.',
            'The empirical formula from combustion analysis may require you to calculate oxygen mass by difference.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'To find the empirical formula: assume 100 g, convert % to grams, then to moles, divide all by the smallest mole count, and convert to whole numbers.',
          keyPoints: [
            'Assume 100 g → % = grams',
            'Convert to moles → divide by smallest → whole-number ratio',
            'Common fractional ratios: 0.5→×2, 0.33→×3, 0.25→×4'
          ],
          formulae: [
            '\\[ n = \\frac{m}{M} \\text{ for each element} \\]',
            'Divide each \\( n \\) by the smallest \\( n \\)'
          ]
        }
      },
      examTips: [
        'This is one of the most common FRQ problems. Memorize the four-step procedure.',
        'FRQ tip: Show each step clearly — even if you make an arithmetic error, the correct method earns most of the points.',
        'If oxygen is not given in the percent composition, find it by subtracting the other elements from 100%.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 1.3: Molecular formula = n × empirical formula', sec: 'content' },
        { color: 'blue', label: '→ Topic 1.1: Uses molar mass to convert g → mol', sec: 'content' }
      ],
      questionIds: []
    },

    // U1.3.3 — Molecular Formula from Empirical Formula
    {
      id: 'U1.3.3',
      code: 'Topic 1.3',
      subtopic: '1.3',
      subtopicTitle: 'Elemental Composition of Pure Substances',
      section: 'unit1',
      concepts: ['molecular-formula', 'quantification'],
      statement: 'The molecular formula is a whole-number multiple of the empirical formula and can be determined if the molar mass of the compound is known.',
      content: {
        textbook: {
          explanation: '<p>The <strong>molecular formula</strong> gives the actual number of atoms of each element in one molecule of a compound. It is always a whole-number multiple (<em>n</em>) of the empirical formula:</p><p style="text-align:center"><em>Molecular formula = n × Empirical formula</em></p><p>To find <em>n</em>:</p><p style="text-align:center"><em>n = M<sub>molecular</sub> / M<sub>empirical</sub></em></p><p>For example, if the empirical formula is CH<sub>2</sub>O (M = 30.03 g/mol) and the experimentally determined molar mass is 180.2 g/mol:</p><p>n = 180.2 / 30.03 = 6 → molecular formula = C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (glucose).</p><p>Note: <em>n</em> must be a positive integer. If your calculation gives a non-integer, recheck your empirical formula or molar mass.</p>',
          keyPoints: [
            'Molecular formula = n × empirical formula.',
            'n = molar mass of compound / molar mass of empirical formula.',
            'n must be a whole number (1, 2, 3, ...).',
            'If n = 1, the molecular formula equals the empirical formula.'
          ],
          formulae: [
            '\\[ n = \\frac{M_{\\text{molecular}}}{M_{\\text{empirical}}} \\]',
            'Molecular formula = (empirical formula) \\( \\times n \\)'
          ],
          workedExamples: [
            {
              title: 'From empirical to molecular formula',
              body: '<p><strong>Q:</strong> A compound has empirical formula NO<sub>2</sub> and molar mass 92.02 g/mol. What is its molecular formula?</p><p><strong>A:</strong> M(NO<sub>2</sub>) = 14.01 + 2(16.00) = 46.01 g/mol</p><p>n = 92.02 / 46.01 = 2.000</p><p>Molecular formula = (NO<sub>2</sub>) × 2 = <strong>N<sub>2</sub>O<sub>4</sub></strong></p>'
            }
          ],
          warnings: [
            'You need the experimentally determined molar mass to find the molecular formula — the empirical formula alone is not enough.',
            'Mass spectrometry or other experimental data (e.g., vapor density) typically provides the molar mass needed.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Molecular formula = n × empirical formula, where n = (molar mass of compound) / (molar mass of empirical formula). n must be a whole number.',
          keyPoints: [
            'n = M_compound / M_empirical',
            'n must be a positive integer',
            'Need experimental molar mass to find n'
          ],
          formulae: [
            '\\[ n = \\frac{M_{\\text{molecular}}}{M_{\\text{empirical}}} \\]'
          ]
        }
      },
      examTips: [
        'This often appears as the last part of an FRQ that first asks for empirical formula. Carry your empirical formula forward correctly.',
        'MCQ: If the molar mass ≈ empirical formula mass, molecular formula = empirical formula.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 1.2: Mass spectrometry provides the molar mass', sec: 'content' },
        { color: 'blue', label: '→ Topic 1.3: Builds on empirical formula determination', sec: 'content' }
      ],
      questionIds: []
    },

    /* =============================================================
       TOPIC 1.4 — Composition of Mixtures
       ============================================================= */

    // U1.4.1 — Distinguishing Pure Substances from Mixtures
    {
      id: 'U1.4.1',
      code: 'Topic 1.4',
      subtopic: '1.4',
      subtopicTitle: 'Composition of Mixtures',
      section: 'unit1',
      concepts: ['mixtures', 'pure-substances'],
      statement: 'A pure substance has a fixed composition and distinct properties. A mixture is a combination of two or more substances in variable proportions, each retaining its own chemical identity.',
      content: {
        textbook: {
          explanation: '<p>AP Chemistry distinguishes between <strong>pure substances</strong> (elements and compounds) and <strong>mixtures</strong>.</p><ul><li><strong>Pure substance:</strong> Definite, fixed composition. Cannot be separated by physical means (if a compound) or is composed of only one type of atom (if an element). Examples: NaCl, Fe, H<sub>2</sub>O.</li><li><strong>Mixture:</strong> Two or more substances combined in variable proportions. Each component retains its identity. Can be separated by physical methods. Examples: saltwater, air, brass.</li></ul><p>Mixtures can be <strong>homogeneous</strong> (uniform composition throughout, also called solutions) or <strong>heterogeneous</strong> (non-uniform composition).</p><p>At the AP level, problems often focus on computing the mass or mole fraction of a component in a mixture, or determining the composition of a mixture from experimental data (like titration or gravimetric analysis).</p>',
          keyPoints: [
            'Pure substances have a fixed, definite composition; mixtures do not.',
            'Mixtures can be separated by physical methods (filtration, distillation, chromatography).',
            'Homogeneous mixtures (solutions) have uniform composition; heterogeneous mixtures do not.',
            'AP problems focus on quantitative analysis of mixture composition.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Identifying pure substances vs. mixtures',
              body: '<p><strong>Q:</strong> Classify each as a pure substance or mixture: (a) distilled water, (b) air, (c) 14-karat gold, (d) table salt.</p><p><strong>A:</strong></p><ul><li>(a) Distilled water — pure substance (compound: H<sub>2</sub>O)</li><li>(b) Air — mixture (N<sub>2</sub>, O<sub>2</sub>, Ar, CO<sub>2</sub>, etc.)</li><li>(c) 14-karat gold — mixture (alloy of Au with Ag, Cu)</li><li>(d) Table salt — pure substance (compound: NaCl, assuming no additives)</li></ul>'
            }
          ],
          warnings: [
            'An alloy (e.g., steel, brass) is a homogeneous mixture, not a compound.',
            'A compound is NOT a mixture of its elements — it has distinct properties from its constituent elements.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Pure substances (elements and compounds) have fixed composition. Mixtures have variable composition and can be separated physically. Solutions are homogeneous mixtures.',
          keyPoints: [
            'Pure substance = fixed composition, distinct properties',
            'Mixture = variable composition, physically separable',
            'Homogeneous = uniform; heterogeneous = non-uniform'
          ],
          formulae: []
        }
      },
      examTips: [
        'MCQ: Know that an alloy is a mixture and that a compound is a pure substance with properties different from its constituent elements.',
        'This is a conceptual topic — focus on definitions and classifications.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 1.3: Pure substances have fixed percent composition', sec: 'content' },
        { color: 'blue', label: '→ Topic 3.2: Solutions involve mixtures at known concentrations', sec: 'content' }
      ],
      questionIds: []
    },

    // U1.4.2 — Quantitative Analysis of Mixtures
    {
      id: 'U1.4.2',
      code: 'Topic 1.4',
      subtopic: '1.4',
      subtopicTitle: 'Composition of Mixtures',
      section: 'unit1',
      concepts: ['mixtures', 'quantification'],
      statement: 'Elemental analysis can be used to determine the relative amounts of the components in a mixture by applying the law of definite proportions to each pure substance in the mixture.',
      content: {
        textbook: {
          explanation: '<p>When a mixture contains two or more known compounds, you can determine how much of each compound is present by using composition data (e.g., percent composition) for each pure substance.</p><p>A common AP problem type: "A mixture contains only compound A and compound B. Given the total mass and the mass of one element (determined by analysis), find the mass of each compound."</p><p><strong>General strategy:</strong></p><ol><li>Let <em>x</em> = mass of compound A and <em>(total − x)</em> = mass of compound B.</li><li>Write an expression for the total mass of a specific element contributed by both compounds.</li><li>Set this equal to the experimentally measured mass of that element.</li><li>Solve for <em>x</em>.</li></ol><p>This approach relies on the <strong>law of definite proportions</strong>: each pure compound always contains the same elements in the same mass ratio.</p>',
          keyPoints: [
            'Mixtures can be analyzed quantitatively by tracking one element through multiple compounds.',
            'Set up a mass balance equation: total element mass = contribution from compound A + contribution from compound B.',
            'Use percent composition of each pure compound to relate component masses to element masses.',
            'This is an application of the law of definite proportions.'
          ],
          formulae: [
            '\\[ m_{\\text{element}} = \\frac{\\%A_{\\text{element}}}{100} \\times m_A + \\frac{\\%B_{\\text{element}}}{100} \\times m_B \\]',
            '\\[ m_A + m_B = m_{\\text{total}} \\]'
          ],
          workedExamples: [
            {
              title: 'Analyzing a two-compound mixture',
              body: '<p><strong>Q:</strong> A 10.00 g mixture of NaCl and KCl contains 4.65 g of chlorine. What mass of NaCl is in the mixture?</p><p><strong>A:</strong> Let x = mass of NaCl, (10.00 − x) = mass of KCl.</p><p>%Cl in NaCl = 35.45/58.44 × 100 = 60.66%</p><p>%Cl in KCl = 35.45/74.55 × 100 = 47.55%</p><p>0.6066x + 0.4755(10.00 − x) = 4.65</p><p>0.6066x + 4.755 − 0.4755x = 4.65</p><p>0.1311x = −0.105</p><p>Hmm — let\'s recheck: 4.65 g Cl.</p><p>0.6066x + 0.4755(10.00 − x) = 4.65</p><p>0.6066x + 4.755 − 0.4755x = 4.65</p><p>0.1311x = 4.65 − 4.755 = −0.105</p><p>This gives a negative value, which means we should double-check. Actually, since both compounds contain Cl, and 4.65/10.00 = 46.5% Cl, which is less than either pure compound\'s Cl%, let\'s reconsider the problem.</p><p>Corrected problem: A 10.00 g mixture of NaCl (60.66% Cl) and NaNO<sub>3</sub> (0% Cl) contains 4.65 g Cl.</p><p>0.6066x + 0(10.00 − x) = 4.65</p><p>x = 4.65 / 0.6066 = <strong>7.67 g NaCl</strong></p><p>Mass NaNO<sub>3</sub> = 10.00 − 7.67 = <strong>2.33 g NaNO<sub>3</sub></strong></p>'
            }
          ],
          warnings: [
            'Always check that your answer is physically reasonable (positive mass, less than total).',
            'Make sure you use the correct percent composition for each compound in the mixture.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'To analyze a mixture: set up a mass balance for one element using percent compositions of each compound. Use algebra to solve for unknown masses. Check that the answer is physically reasonable.',
          keyPoints: [
            'Track one element through all compounds in the mixture',
            'Set up simultaneous equations using mass balance',
            'Answers must be positive and sum to total mixture mass'
          ],
          formulae: [
            '\\[ m_{\\text{element}} = \\sum (f_{\\text{element in compound}} \\times m_{\\text{compound}}) \\]'
          ]
        }
      },
      examTips: [
        'FRQ: These problems often appear in the stoichiometry/analysis section. Set up the algebra clearly.',
        'Double-check that your element is present in both (or only one) compound — this determines whether you need one equation or two.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 1.3: Percent composition of each pure compound is essential', sec: 'content' },
        { color: 'green', label: '→ Topic 4.1: Gravimetric analysis extends this concept', sec: 'content' }
      ],
      questionIds: []
    },

    /* =============================================================
       TOPIC 1.5 — Atomic Structure and Electron Configuration
       ============================================================= */

    // U1.5.1 — Subatomic Particles and Atomic Number
    {
      id: 'U1.5.1',
      code: 'Topic 1.5',
      subtopic: '1.5',
      subtopicTitle: 'Atomic Structure and Electron Configuration',
      section: 'unit1',
      concepts: ['atomic-structure', 'subatomic-particles'],
      statement: 'Atoms consist of protons and neutrons in a dense nucleus surrounded by electrons. The number of protons (atomic number, Z) defines the element; the number of neutrons can vary (isotopes).',
      content: {
        textbook: {
          explanation: '<p>Every atom consists of three subatomic particles:</p><table><tr><th>Particle</th><th>Charge</th><th>Mass (amu)</th><th>Location</th></tr><tr><td>Proton</td><td>+1</td><td>≈ 1</td><td>Nucleus</td></tr><tr><td>Neutron</td><td>0</td><td>≈ 1</td><td>Nucleus</td></tr><tr><td>Electron</td><td>−1</td><td>≈ 0 (5.49 × 10<sup>−</sup><sup>4</sup>)</td><td>Electron cloud</td></tr></table><p>The <strong>atomic number (Z)</strong> = number of protons. This defines the element and determines its position on the periodic table. The <strong>mass number (A)</strong> = protons + neutrons.</p><p><strong>Isotopes</strong> are atoms of the same element (same Z) with different numbers of neutrons (different A). They have identical chemical properties but different masses.</p><p>In a neutral atom, the number of electrons equals the number of protons. Ions form when atoms gain or lose electrons.</p><ul><li><strong>Cations</strong> (positive ions): fewer electrons than protons.</li><li><strong>Anions</strong> (negative ions): more electrons than protons.</li></ul>',
          keyPoints: [
            'Protons define the element (atomic number Z).',
            'Neutrons contribute to mass but not charge; varying neutrons → isotopes.',
            'Electrons determine chemical behavior and are arranged in energy levels.',
            'Neutral atom: # electrons = # protons. Cation: lost electrons. Anion: gained electrons.',
            'Mass number A = Z + N (protons + neutrons).'
          ],
          formulae: [
            '\\[ A = Z + N \\]\n\\( A \\) = mass number, \\( Z \\) = atomic number, \\( N \\) = neutron number',
            'Notation: \\( ^{A}_{Z}X \\) (e.g., \\( ^{14}_{6}\\ce{C} \\) = carbon-14, 6 protons, 8 neutrons)'
          ],
          workedExamples: [
            {
              title: 'Identifying subatomic particles in an ion',
              body: '<p><strong>Q:</strong> How many protons, neutrons, and electrons are in <sup>56</sup>Fe<sup>3</sup><sup>+</sup>?</p><p><strong>A:</strong></p><ul><li>Protons: Z = 26 (iron\'s atomic number)</li><li>Neutrons: A − Z = 56 − 26 = 30</li><li>Electrons: 26 − 3 = 23 (lost 3 electrons to form 3+ charge)</li></ul>'
            }
          ],
          warnings: [
            'Isotopes of the same element have the same chemical properties (same electron configuration) but different physical properties (different mass).',
            'Do not confuse mass number (A, integer) with atomic mass (weighted average from periodic table, decimal).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Atoms have protons (define element, Z), neutrons (vary among isotopes), and electrons (determine chemistry). A = Z + N. Neutral atom has equal protons and electrons.',
          keyPoints: [
            'Z = protons = element identity',
            'A = Z + N',
            'Isotopes: same Z, different N',
            'Ions: different # electrons than protons'
          ],
          formulae: [
            '\\[ A = Z + N \\]'
          ]
        }
      },
      examTips: [
        'MCQ: Know how to determine protons, neutrons, and electrons for any isotope or ion quickly.',
        'This is foundational — errors here cascade into electron configuration and periodic trend problems.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 1.2: Isotopes appear as separate peaks in mass spectra', sec: 'content' },
        { color: 'blue', label: '→ Topic 1.5: Electron count determines electron configuration', sec: 'content' }
      ],
      questionIds: []
    },

    // U1.5.2 — Electron Configurations and the Aufbau Principle
    {
      id: 'U1.5.2',
      code: 'Topic 1.5',
      subtopic: '1.5',
      subtopicTitle: 'Atomic Structure and Electron Configuration',
      section: 'unit1',
      concepts: ['electron-configuration', 'aufbau-principle'],
      statement: 'The electron configuration of an atom describes the distribution of electrons among orbitals, determined by the Aufbau principle, Pauli exclusion principle, and Hund\'s rule.',
      content: {
        textbook: {
          explanation: '<p>The <strong>electron configuration</strong> describes how an atom\'s electrons are distributed among its orbitals. Three rules govern this distribution:</p><ol><li><strong>Aufbau principle:</strong> Electrons fill orbitals from lowest to highest energy. The energy ordering is: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s, 5f, 6d, 7p.</li><li><strong>Pauli exclusion principle:</strong> Each orbital holds a maximum of 2 electrons with opposite spins.</li><li><strong>Hund\'s rule:</strong> Within a subshell, electrons occupy each orbital singly (with parallel spins) before pairing.</li></ol><p><strong>Orbital capacities:</strong></p><ul><li>s subshell: 1 orbital → 2 electrons</li><li>p subshell: 3 orbitals → 6 electrons</li><li>d subshell: 5 orbitals → 10 electrons</li><li>f subshell: 7 orbitals → 14 electrons</li></ul><p><strong>Noble gas shorthand:</strong> Replace the inner core electrons with the symbol of the preceding noble gas in brackets. For example, Na: [Ne] 3s<sup>1</sup>.</p><p><strong>Exceptions:</strong> Cr and Cu (and their column analogs) have anomalous configurations because a half-filled or fully filled d subshell is especially stable. Cr: [Ar] 3d<sup>5</sup> 4s<sup>1</sup> (not 3d<sup>4</sup> 4s<sup>2</sup>). Cu: [Ar] 3d<sup>10</sup> 4s<sup>1</sup> (not 3d<sup>9</sup> 4s<sup>2</sup>).</p>',
          keyPoints: [
            'Aufbau: fill lowest-energy orbitals first.',
            'Pauli: max 2 electrons per orbital, opposite spins.',
            'Hund: fill degenerate orbitals singly before pairing.',
            's holds 2e<sup>−</sup>, p holds 6e<sup>−</sup>, d holds 10e<sup>−</sup>, f holds 14e<sup>−</sup>.',
            'Noble gas shorthand simplifies notation: Na = [Ne] 3s<sup>1</sup>.',
            'Cr ([Ar] 3d<sup>5</sup> 4s<sup>1</sup>) and Cu ([Ar] 3d<sup>10</sup> 4s<sup>1</sup>) are common exceptions.'
          ],
          formulae: [
            'Filling order: \\( 1s \\to 2s \\to 2p \\to 3s \\to 3p \\to 4s \\to 3d \\to 4p \\to 5s \\to 4d \\to 5p \\to 6s \\to 4f \\to 5d \\to 6p \\)',
            '\\[ \\text{Electron capacity of shell } n = 2n^2 \\]'
          ],
          workedExamples: [
            {
              title: 'Writing electron configuration for iron',
              body: '<p><strong>Q:</strong> Write the full and noble gas shorthand electron configuration for Fe (Z = 26).</p><p><strong>A:</strong></p><p>Full: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>6</sup></p><p>Noble gas shorthand: [Ar] 4s<sup>2</sup> 3d<sup>6</sup>  or equivalently  [Ar] 3d<sup>6</sup> 4s<sup>2</sup></p><p>Note: On the AP exam, either ordering (listing 3d before or after 4s) is accepted.</p>'
            },
            {
              title: 'Electron configuration of an ion',
              body: '<p><strong>Q:</strong> Write the electron configuration of Fe<sup>2</sup><sup>+</sup>.</p><p><strong>A:</strong> Fe has 26 electrons → [Ar] 3d<sup>6</sup> 4s<sup>2</sup>. When transition metals form cations, electrons are removed from the highest n first (4s before 3d).</p><p>Fe<sup>2</sup><sup>+</sup> (24 electrons): [Ar] 3d<sup>6</sup></p><p>NOT [Ar] 3d<sup>4</sup> 4s<sup>2</sup> — the 4s electrons are removed first.</p>'
            }
          ],
          warnings: [
            'When writing ion configurations for transition metals, remove electrons from the s orbital BEFORE the d orbital.',
            'The Cr and Cu exceptions are commonly tested — memorize them.',
            'Do not mix up the filling order with the orbital listing order in the configuration.'
          ],
          diagrams: ['energyLevels']
        },
        studyGuide: {
          essentials: 'Electrons fill orbitals following Aufbau (lowest energy first), Pauli (max 2 per orbital), and Hund (singly fill degenerate orbitals before pairing). Use noble gas shorthand. For transition metal cations, remove from the s orbital first.',
          keyPoints: [
            'Aufbau: 1s 2s 2p 3s 3p 4s 3d 4p ...',
            'Pauli: 2e<sup>−</sup> max per orbital',
            'Hund: fill degenerate orbitals singly first',
            'Ions: remove from highest n first (4s before 3d)',
            'Cr: [Ar] 3d<sup>5</sup> 4s<sup>1</sup>, Cu: [Ar] 3d<sup>10</sup> 4s<sup>1</sup>'
          ],
          formulae: [
            'Filling order: \\( 1s \\to 2s \\to 2p \\to 3s \\to 3p \\to 4s \\to 3d \\to 4p \\to \\cdots \\)'
          ]
        }
      },
      examTips: [
        'MCQ: Expect questions on the Cr/Cu exceptions and on transition metal ion configurations.',
        'FRQ tip: When asked for a "ground-state electron configuration," always follow Aufbau + exceptions.',
        'The AP exam provides a periodic table — use it to verify electron counts by position.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 1.6: PES data confirms subshell energies and electron counts', sec: 'content' },
        { color: 'blue', label: '→ Topic 1.7: Electron configuration determines periodic trends', sec: 'content' },
        { color: 'purple', label: '→ Topic 1.8: Valence electrons from configuration govern bonding', sec: 'content' }
      ],
      questionIds: ['Q008', 'Q009', 'Q010', 'Q011']
    },

    // U1.5.3 — Coulomb's Law and Shielding
    {
      id: 'U1.5.3',
      code: 'Topic 1.5',
      subtopic: '1.5',
      subtopicTitle: 'Atomic Structure and Electron Configuration',
      section: 'unit1',
      concepts: ['coulombs-law', 'shielding', 'effective-nuclear-charge'],
      statement: 'The attraction between an electron and the nucleus depends on nuclear charge, electron distance, and shielding by inner electrons. The net effect is described by effective nuclear charge (Z_eff).',
      content: {
        textbook: {
          explanation: '<p><strong>Coulomb\'s law</strong> governs the force between charged particles:</p><p style="text-align:center"><em>F = k × q<sub>1</sub> × q<sub>2</sub> / r<sup>2</sup></em></p><p>For atoms, the relevant charges are the nuclear charge (+Z) and the electron charge (−1). The force of attraction increases with greater nuclear charge and decreases with greater distance.</p><p>However, outer electrons do not feel the full nuclear charge because inner (core) electrons partially <strong>shield</strong> them from the nucleus. The charge actually "felt" by a valence electron is the <strong>effective nuclear charge (Z<sub>eff</sub>)</strong>:</p><p style="text-align:center"><em>Z<sub>eff</sub> ≈ Z − S</em></p><p>where Z is the atomic number and S is the shielding constant (approximately equal to the number of core electrons).</p><p>This concept is critical for understanding periodic trends: across a period, Z increases while core electron count stays the same, so Z<sub>eff</sub> increases, pulling electrons closer and making atoms smaller.</p>',
          keyPoints: [
            'Coulomb\'s law: F ∝ q<sub>1</sub>q<sub>2</sub>/r<sup>2</sup>. Greater charge or smaller distance → stronger attraction.',
            'Core electrons shield valence electrons from the full nuclear charge.',
            'Z_eff ≈ Z − number of core electrons.',
            'Z_eff increases across a period (same core electrons, more protons).',
            'Z_eff explains why atoms get smaller across a period.'
          ],
          formulae: [
            '\\[ F = \\frac{k q_1 q_2}{r^2} \\]\nCoulomb\'s law',
            '\\[ Z_{\\text{eff}} \\approx Z - S \\]\n\\( S \\approx \\) number of core electrons'
          ],
          workedExamples: [
            {
              title: 'Comparing Z_eff across Period 3',
              body: '<p><strong>Q:</strong> Compare the effective nuclear charge felt by a valence electron in Na (Z = 11) and Cl (Z = 17).</p><p><strong>A:</strong> Both are in Period 3 with 10 core electrons (1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup>).</p><ul><li>Na: Z_eff ≈ 11 − 10 = +1</li><li>Cl: Z_eff ≈ 17 − 10 = +7</li></ul><p>Chlorine\'s valence electrons feel a much stronger pull from the nucleus, which is why Cl is smaller and has a higher ionization energy than Na.</p>'
            }
          ],
          warnings: [
            'Shielding by electrons in the SAME subshell is much less effective than shielding by core electrons.',
            'Z_eff is an approximation — the actual shielding depends on orbital shapes and electron-electron repulsion.',
            'Do not confuse Coulomb\'s law (force between charges) with the equation for potential energy (which lacks the r<sup>2</sup> denominator).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Coulomb\'s law (F ∝ q<sub>1</sub>q<sub>2</sub>/r<sup>2</sup>) explains nuclear-electron attraction. Shielding by core electrons reduces the effective nuclear charge: Z_eff ≈ Z − core electrons. Z_eff increases across a period, driving periodic trends.',
          keyPoints: [
            'F ∝ q<sub>1</sub>q<sub>2</sub>/r<sup>2</sup>',
            'Z_eff ≈ Z − S',
            'Z_eff increases across a period',
            'Higher Z_eff → smaller atom, higher IE'
          ],
          formulae: [
            '\\[ F = \\frac{k q_1 q_2}{r^2} \\]',
            '\\[ Z_{\\text{eff}} \\approx Z - S \\]'
          ]
        }
      },
      examTips: [
        'Coulomb\'s law reasoning is required on nearly every FRQ that asks you to "explain" a trend. Use the language: "greater nuclear charge," "smaller radius," "stronger attraction."',
        'Never just state a trend — always explain it using Coulomb\'s law or Z_eff for full FRQ credit.',
        'MCQ: Expect qualitative comparisons using Coulomb\'s law reasoning.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 1.7: Coulomb\'s law explains all periodic trends', sec: 'content' },
        { color: 'blue', label: '→ Topic 1.6: PES ionization energies reflect Z_eff', sec: 'content' },
        { color: 'purple', label: '→ Topic 2.1: Bond energy depends on Coulomb attraction between nuclei and shared electrons', sec: 'content' }
      ],
      questionIds: ['Q034', 'Q035']
    },

    /* =============================================================
       TOPIC 1.6 — Photoelectron Spectroscopy
       ============================================================= */

    // U1.6.1 — PES Fundamentals
    {
      id: 'U1.6.1',
      code: 'Topic 1.6',
      subtopic: '1.6',
      subtopicTitle: 'Photoelectron Spectroscopy',
      section: 'unit1',
      concepts: ['PES', 'ionization-energy', 'spectroscopy'],
      statement: 'Photoelectron spectroscopy (PES) uses high-energy photons to eject electrons from atoms. The resulting spectrum shows binding energies and relative numbers of electrons in each subshell.',
      content: {
        textbook: {
          explanation: '<p><strong>Photoelectron spectroscopy (PES)</strong> is based on the <strong>photoelectric effect</strong>. A high-energy photon (UV or X-ray) strikes an atom and ejects an electron. The kinetic energy of the ejected electron is measured, and the <strong>binding energy (BE)</strong> is calculated:</p><p style="text-align:center"><em>BE = E<sub>photon</sub> − KE<sub>electron</sub></em></p><p>The <strong>PES spectrum</strong> plots:</p><ul><li><strong>x-axis:</strong> Binding energy (decreasing from left to right, with highest BE on the left)</li><li><strong>y-axis:</strong> Relative number of electrons (signal intensity)</li></ul><p>Each peak corresponds to a subshell. Key interpretations:</p><ul><li>Peaks further left (higher BE) correspond to electrons closer to the nucleus (core electrons).</li><li>Peaks further right (lower BE) correspond to valence electrons.</li><li>The <strong>height</strong> of a peak is proportional to the number of electrons in that subshell.</li></ul><p>For example, nitrogen (Z = 7, config: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup>) would show three peaks with relative heights 2 : 2 : 3, from high to low binding energy.</p>',
          keyPoints: [
            'PES is based on the photoelectric effect: BE = E<sub>photon</sub> − KE_electron.',
            'x-axis: binding energy (high → low, left to right). y-axis: relative # of electrons.',
            'Each peak = one subshell. Peak height ∝ number of electrons.',
            'Higher BE = closer to nucleus = more tightly held.',
            'PES spectra provide experimental evidence for electron configuration.'
          ],
          formulae: [
            '\\[ BE = E_{\\text{photon}} - KE_{\\text{electron}} \\]',
            '\\[ E_{\\text{photon}} = h\\nu \\]\n\\( h \\) = Planck\'s constant, \\( \\nu \\) = frequency'
          ],
          workedExamples: [
            {
              title: 'Interpreting a PES spectrum',
              body: '<p><strong>Q:</strong> A PES spectrum shows 4 peaks with relative heights 2, 2, 6, and 1 (from highest to lowest binding energy). Identify the element.</p><p><strong>A:</strong> Total electrons = 2 + 2 + 6 + 1 = 11.</p><p>Configuration: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup> → <strong>Sodium (Na)</strong></p>'
            },
            {
              title: 'Drawing a PES spectrum from electron configuration',
              body: '<p><strong>Q:</strong> Sketch the PES spectrum of oxygen (Z = 8).</p><p><strong>A:</strong> Configuration: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>4</sup>.</p><p>Three peaks, from highest to lowest BE:</p><ul><li>Peak 1 (highest BE): height 2 → 1s<sup>2</sup></li><li>Peak 2 (medium BE): height 2 → 2s<sup>2</sup></li><li>Peak 3 (lowest BE): height 4 → 2p<sup>4</sup></li></ul>'
            }
          ],
          warnings: [
            'The x-axis of a PES spectrum goes from HIGH binding energy on the LEFT to LOW on the RIGHT — the opposite of most graphs. Don\'t misread the axis.',
            'Peak heights represent the NUMBER of electrons, not binding energy. Height is on the y-axis.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'PES ejects electrons with photons and measures binding energies. Each peak = one subshell; peak height = number of electrons. Higher BE peaks = core electrons (left side). Sum all peak heights = total electrons = atomic number (for neutral atoms).',
          keyPoints: [
            'BE = E<sub>photon</sub> − KE_electron',
            'x-axis: BE (high to low, left to right)',
            'y-axis: relative # of electrons',
            'Each peak = one subshell',
            'Sum of peak heights = total electrons'
          ],
          formulae: [
            '\\[ BE = E_{\\text{photon}} - KE_{\\text{electron}} \\]'
          ]
        }
      },
      examTips: [
        'PES is a favorite AP topic — expect at least one MCQ on reading PES spectra.',
        'To identify an element from a PES spectrum: sum all peak heights to get the total number of electrons, then match to atomic number.',
        'FRQ tip: When asked to explain a PES feature, refer to Coulomb\'s law and shielding.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 1.5: PES confirms the subshell model of electron configuration', sec: 'content' },
        { color: 'blue', label: '→ Topic 1.5: Coulomb\'s law explains why core electrons have higher BE', sec: 'content' },
        { color: 'green', label: '→ Topic 1.7: First IE trend matches the lowest-BE peak trend', sec: 'content' }
      ],
      questionIds: ['Q012', 'Q013']
    },

    // U1.6.2 — PES and Electron Configuration Evidence
    {
      id: 'U1.6.2',
      code: 'Topic 1.6',
      subtopic: '1.6',
      subtopicTitle: 'Photoelectron Spectroscopy',
      section: 'unit1',
      concepts: ['PES', 'electron-configuration', 'experimental-evidence'],
      statement: 'PES data provide direct experimental evidence for the shell and subshell model of electron arrangement. Successive ionization energies also support the existence of distinct energy levels.',
      content: {
        textbook: {
          explanation: '<p>The theoretical model of electron configuration (shells, subshells, orbitals) is supported by two key types of experimental evidence:</p><p><strong>1. PES spectra:</strong> The number of peaks and their heights directly match the predicted subshell populations from the Aufbau principle. For example, the PES spectrum of aluminum (Z = 13, [Ne] 3s<sup>2</sup> 3p<sup>1</sup>) shows 4 peaks with heights 2, 2, 6, 2, 1 — perfectly matching 1s<sup>2</sup>, 2s<sup>2</sup>, 2p<sup>6</sup>, 3s<sup>2</sup>, 3p<sup>1</sup>.</p><p><strong>2. Successive ionization energies:</strong> When you measure the energy required to remove the 1st, 2nd, 3rd, … electron from an atom, you see large <strong>jumps</strong> between certain ionizations. These jumps correspond to breaking into a new, inner shell where electrons are held much more tightly.</p><p>For example, magnesium (Mg, Z = 12) has the configuration [Ne] 3s<sup>2</sup>. Removing the 1st and 2nd electrons (both from 3s) requires relatively little energy. The 3rd electron must come from the 2p subshell (inner shell), requiring dramatically more energy — a large jump in IE. Then IE<sub>3</sub> through IE<sub>10</sub> are relatively similar (all from n = 2), and another huge jump occurs at IE<sub>11</sub> (entering the 1s shell).</p>',
          keyPoints: [
            'PES peak patterns match predicted electron configurations exactly.',
            'Successive ionization energies show large jumps when breaking into inner shells.',
            'The position of large IE jumps reveals how many valence electrons an element has.',
            'Both PES and successive IE data provide experimental support for the quantum mechanical model.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Using successive IE data to determine group number',
              body: '<p><strong>Q:</strong> An element\'s successive ionization energies (in kJ/mol) are: 738, 1451, 7733, 10543, 13630, ... Identify the group.</p><p><strong>A:</strong> There is a large jump between IE<sub>2</sub> (1451) and IE<sub>3</sub> (7733) — the ratio IE<sub>3</sub>/IE<sub>2</sub> ≈ 5.3, which is enormous. This means removing the 3rd electron requires breaking into a core shell, so the element has <strong>2 valence electrons → Group 2</strong>.</p><p>The element could be Mg (these are Mg\'s actual ionization energies).</p>'
            }
          ],
          warnings: [
            'Don\'t just look for any increase in IE — look for a DRAMATIC jump (usually 3x or more).',
            'For AP purposes, successive IE refers to removing electrons one at a time from the SAME atom (not first IE of different elements).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'PES spectra and successive ionization energies provide experimental evidence for shells and subshells. Large jumps in successive IE indicate the boundary between valence and core electrons.',
          keyPoints: [
            'PES peaks match subshell populations',
            'Successive IE: large jump = new inner shell',
            'Position of the jump reveals # of valence electrons'
          ],
          formulae: []
        }
      },
      examTips: [
        'MCQ: Given a set of successive IEs, identify where the big jump is — the number of IEs before the jump = number of valence electrons.',
        'FRQ: If asked to "provide evidence" for electron configuration, cite PES data or successive IE data — not just theory.',
        'Remember: successive IE is different from the first IE trend across the periodic table (Topic 1.7).'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 1.5: Successive IE confirms shell structure from electron config', sec: 'content' },
        { color: 'blue', label: '→ Topic 1.7: First IE trend across a period is a different concept', sec: 'content' }
      ],
      questionIds: ['Q014', 'Q028']
    },

    /* =============================================================
       TOPIC 1.7 — Periodic Trends
       ============================================================= */

    // U1.7.1 — Atomic and Ionic Radii
    {
      id: 'U1.7.1',
      code: 'Topic 1.7',
      subtopic: '1.7',
      subtopicTitle: 'Periodic Trends',
      section: 'unit1',
      concepts: ['periodic-trends', 'atomic-radius', 'ionic-radius'],
      statement: 'Atomic radius generally decreases across a period (due to increasing Z_eff) and increases down a group (due to additional electron shells). Ionic radius follows predictable patterns based on electron gain/loss.',
      content: {
        textbook: {
          explanation: '<p><strong>Atomic radius</strong> trends:</p><ul><li><strong>Across a period (left → right):</strong> Radius <em>decreases</em>. Z increases while the number of core electrons stays the same, so Z<sub>eff</sub> increases. Valence electrons are pulled closer to the nucleus.</li><li><strong>Down a group (top → bottom):</strong> Radius <em>increases</em>. Each row adds a new electron shell farther from the nucleus, and additional inner-shell shielding reduces Z<sub>eff</sub> felt by outermost electrons.</li></ul><p><strong>Ionic radius</strong>:</p><ul><li><strong>Cations</strong> are <em>smaller</em> than their parent atoms. Losing electrons reduces electron-electron repulsion, and if an entire shell is lost, the ion is drastically smaller. Also, Z stays the same but pulls on fewer electrons.</li><li><strong>Anions</strong> are <em>larger</em> than their parent atoms. Added electrons increase electron-electron repulsion, and the same nuclear charge must hold more electrons.</li><li><strong>Isoelectronic series</strong> (ions with the same number of electrons, e.g., O<sup>2</sup><sup>−</sup>, F<sup>−</sup>, Na<sup>+</sup>, Mg<sup>2</sup><sup>+</sup> — all have 10 electrons): the ion with more protons is smaller, because the same electron count is pulled inward by a stronger nuclear charge.</li></ul>',
          keyPoints: [
            'Atomic radius decreases across a period (↑ Z_eff) and increases down a group (↑ shells).',
            'Cations < parent atom (lost electrons → less repulsion, sometimes fewer shells).',
            'Anions > parent atom (gained electrons → more repulsion).',
            'In an isoelectronic series, more protons → smaller radius.',
            'Always explain trends using Coulomb\'s law or Z_eff for full AP credit.'
          ],
          formulae: [
            '\\[ Z_{\\text{eff}} \\approx Z - \\text{core electrons} \\]\nDrives radius trends across a period'
          ],
          workedExamples: [
            {
              title: 'Ranking isoelectronic species by size',
              body: '<p><strong>Q:</strong> Rank the following isoelectronic species from smallest to largest: N<sup>3</sup><sup>−</sup>, O<sup>2</sup><sup>−</sup>, F<sup>−</sup>, Na<sup>+</sup>, Mg<sup>2</sup><sup>+</sup>.</p><p><strong>A:</strong> All have 10 electrons. The one with the most protons pulls those electrons in most tightly → smallest.</p><ul><li>Mg<sup>2</sup><sup>+</sup> (12 protons) < Na<sup>+</sup> (11 protons) < F<sup>−</sup> (9 protons) < O<sup>2</sup><sup>−</sup> (8 protons) < N<sup>3</sup><sup>−</sup> (7 protons)</li></ul><p><strong>Smallest → Largest: Mg<sup>2</sup><sup>+</sup> < Na<sup>+</sup> < F<sup>−</sup> < O<sup>2</sup><sup>−</sup> < N<sup>3</sup><sup>−</sup></strong></p>'
            }
          ],
          warnings: [
            'Hydrogen is anomalous — its radius does not follow the same trends as other elements in its period or group.',
            'Noble gases are often omitted from atomic radius comparisons because their radii are measured differently (van der Waals vs. covalent).',
            'For FRQ: simply stating "atomic radius increases down a group" is NOT enough. You must explain WHY (additional shells, increased shielding).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Atomic radius: ↓ across period (more Z_eff), ↑ down group (more shells). Cations < atom < anion. Isoelectronic: more protons = smaller.',
          keyPoints: [
            'Radius ↓ across period (↑ Z_eff)',
            'Radius ↑ down group (↑ shells)',
            'Cation < atom < anion',
            'Isoelectronic: more protons → smaller'
          ],
          formulae: []
        }
      },
      examTips: [
        'Isoelectronic ranking questions are very common on the MCQ. Count electrons and protons to rank.',
        'FRQ: Always explain size trends using "increasing effective nuclear charge" or "additional electron shell" — never just state the trend.',
        'Be prepared to compare atomic and ionic radii in the same question.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 1.5: Coulomb\'s law and Z_eff explain radius trends', sec: 'content' },
        { color: 'blue', label: '→ Topic 1.7: Radius trend inversely relates to IE and EN trends', sec: 'content' },
        { color: 'purple', label: '→ Topic 2.1: Atomic size influences bond length', sec: 'content' }
      ],
      questionIds: ['Q016', 'Q019']
    },

    // U1.7.2 — Ionization Energy
    {
      id: 'U1.7.2',
      code: 'Topic 1.7',
      subtopic: '1.7',
      subtopicTitle: 'Periodic Trends',
      section: 'unit1',
      concepts: ['periodic-trends', 'ionization-energy'],
      statement: 'First ionization energy generally increases across a period and decreases down a group, with notable exceptions at Groups 3 and 6 (Groups 13 and 16 in the 1–18 numbering) due to subshell effects.',
      content: {
        textbook: {
          explanation: '<p><strong>First ionization energy (IE<sub>1</sub>)</strong> is the energy required to remove the most loosely held electron from a gaseous neutral atom:</p><p style="text-align:center"><em>X(g) → X<sup>+</sup>(g) + e<sup>−</sup></em></p><p><strong>General trends:</strong></p><ul><li><strong>Across a period:</strong> IE<sub>1</sub> <em>increases</em> because Z<sub>eff</sub> increases while electrons are in the same shell → electrons are held more tightly.</li><li><strong>Down a group:</strong> IE<sub>1</sub> <em>decreases</em> because valence electrons are farther from the nucleus (larger shell) and more shielded → easier to remove.</li></ul><p><strong>Key exceptions across a period:</strong></p><ul><li><strong>Group 2 → Group 13 dip:</strong> IE<sub>1</sub> of B is lower than that of Be. Be\'s electron comes from 2s (higher penetration, more tightly held), while B\'s electron comes from 2p (higher energy, easier to remove).</li><li><strong>Group 15 → Group 16 dip:</strong> IE<sub>1</sub> of O is lower than that of N. Nitrogen has a half-filled 2p subshell (2p<sup>3</sup>, all unpaired) which is relatively stable. Oxygen has a 2p<sup>4</sup> configuration with one paired electron, and electron-electron repulsion in the paired orbital makes that electron easier to remove.</li></ul>',
          keyPoints: [
            'IE<sub>1</sub> generally increases across a period and decreases down a group.',
            'Group 2 → 13 dip: s electron (higher IE) vs. p electron (lower IE).',
            'Group 15 → 16 dip: half-filled p subshell stability vs. paired electron repulsion.',
            'Noble gases have the highest IE in each period.',
            'Alkali metals have the lowest IE in each period.'
          ],
          formulae: [
            '\\[ \\ce{X(g) -> X^+(g) + e^-} \\]\n\\( \\Delta E = IE_1 \\) (always positive, endothermic)'
          ],
          workedExamples: [
            {
              title: 'Explaining the N vs. O ionization energy anomaly',
              body: '<p><strong>Q:</strong> Why is the first ionization energy of oxygen (1314 kJ/mol) lower than that of nitrogen (1402 kJ/mol), even though oxygen has a higher nuclear charge?</p><p><strong>A:</strong> Nitrogen has the configuration [He] 2s<sup>2</sup> 2p<sup>3</sup> — a <strong>half-filled p subshell</strong> with each 2p orbital containing exactly one electron. This arrangement has no electron-electron repulsion within the 2p orbitals and is particularly stable.</p><p>Oxygen has [He] 2s<sup>2</sup> 2p<sup>4</sup> — one of the 2p orbitals contains a <strong>pair</strong> of electrons. The extra electron-electron repulsion in that doubly occupied orbital makes the fourth 2p electron easier to remove, lowering the IE<sub>1</sub> despite the higher Z.</p>'
            }
          ],
          warnings: [
            'Do not confuse first ionization energy (removing 1 electron from each of many neutral atoms) with successive ionization energies (removing electrons one by one from a single atom).',
            'The Group 2→13 and 15→16 dips are commonly tested — make sure you can explain them, not just identify them.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'IE<sub>1</sub> increases across a period (↑ Z_eff) and decreases down a group (↑ distance, ↑ shielding). Two exceptions: dip from Group 2→13 (s vs. p subshell) and Group 15→16 (half-filled stability vs. paired repulsion).',
          keyPoints: [
            'IE<sub>1</sub> ↑ across period (↑ Z_eff)',
            'IE<sub>1</sub> ↓ down group (↑ shells, ↑ shielding)',
            'Dip: Group 2→13 (s→p), Group 15→16 (half-filled stability)',
            'IE<sub>1</sub> is always endothermic (positive)'
          ],
          formulae: [
            '\\[ \\ce{X(g) -> X^+(g) + e^-} \\]'
          ]
        }
      },
      examTips: [
        'The Group 2→13 and 15→16 dips are tested on nearly every AP exam. Practice explaining them.',
        'FRQ: Use Coulomb\'s law language — "the electron in the 2p orbital is less tightly held because it is higher in energy and farther from the nucleus on average."',
        'MCQ: If asked to rank IEs, watch for these exceptions — they frequently appear as distractor answers.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 1.5: Electron configuration explains IE exceptions', sec: 'content' },
        { color: 'blue', label: '→ Topic 1.6: PES binding energies correlate with IE', sec: 'content' },
        { color: 'green', label: '→ Topic 1.7: IE trend is roughly inverse of radius trend', sec: 'content' }
      ],
      questionIds: ['Q015', 'Q017', 'Q018', 'Q026', 'Q029', 'Q031']
    },

    // U1.7.3 — Electronegativity and Electron Affinity
    {
      id: 'U1.7.3',
      code: 'Topic 1.7',
      subtopic: '1.7',
      subtopicTitle: 'Periodic Trends',
      section: 'unit1',
      concepts: ['periodic-trends', 'electronegativity', 'electron-affinity'],
      statement: 'Electronegativity increases across a period and decreases down a group. It measures the tendency of a bonded atom to attract shared electrons toward itself.',
      content: {
        textbook: {
          explanation: '<p><strong>Electronegativity (EN)</strong> is the ability of an atom <em>in a chemical bond</em> to attract the shared electron pair toward itself. It is a relative, unitless scale (Pauling scale). Fluorine has the highest EN (3.98).</p><p><strong>Trends:</strong></p><ul><li><strong>Across a period:</strong> EN <em>increases</em> (higher Z<sub>eff</sub> → stronger pull on bonding electrons).</li><li><strong>Down a group:</strong> EN <em>decreases</em> (valence electrons farther from nucleus → weaker pull).</li></ul><p>Noble gases are generally excluded from EN comparisons because they rarely form bonds.</p><p><strong>Electron affinity (EA)</strong> is the energy change when a gaseous atom gains an electron:</p><p style="text-align:center"><em>X(g) + e<sup>−</sup> → X<sup>−</sup>(g)   ΔE = EA</em></p><p>A more negative EA means the atom more readily accepts an electron. The trend roughly mirrors EN: EA becomes more negative (more exothermic) across a period and less negative down a group. However, EA has more exceptions (e.g., N has a near-zero EA due to its stable half-filled 2p; Group 2 elements have positive EA because the added electron would enter a higher-energy p subshell).</p><p>The AP exam focuses more on electronegativity than electron affinity, but you should understand both concepts.</p>',
          keyPoints: [
            'EN increases across a period (↑ Z_eff) and decreases down a group (↑ distance).',
            'F is the most electronegative element; Cs/Fr is the least (excluding noble gases).',
            'EN determines bond polarity: larger ΔEN → more polar bond.',
            'Electron affinity follows a similar trend but with more exceptions.',
            'Noble gases are typically excluded from EN/EA comparisons.'
          ],
          formulae: [
            '\\[ \\ce{X(g) + e^- -> X^-(g)} \\]\n\\( \\Delta E = EA \\) (typically negative/exothermic for nonmetals)'
          ],
          workedExamples: [
            {
              title: 'Predicting bond polarity from EN',
              body: '<p><strong>Q:</strong> Which bond is more polar: H–F or H–Cl?</p><p><strong>A:</strong> EN values (Pauling): H = 2.20, F = 3.98, Cl = 3.16</p><ul><li>ΔEN(H–F) = 3.98 − 2.20 = 1.78</li><li>ΔEN(H–Cl) = 3.16 − 2.20 = 0.96</li></ul><p>H–F has the larger ΔEN → <strong>H–F is more polar</strong>.</p>'
            }
          ],
          warnings: [
            'Electronegativity is a property of atoms IN bonds — isolated atoms do not have electronegativity.',
            'Do not confuse electron affinity (atom gains electron) with ionization energy (atom loses electron). They are related but different processes.',
            'Noble gases are generally not assigned EN values on the AP exam.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Electronegativity: ↑ across period, ↓ down group. F is highest. EN differences determine bond polarity. Electron affinity follows a similar trend with more irregularities.',
          keyPoints: [
            'EN ↑ across period, ↓ down group',
            'F has highest EN (3.98)',
            'ΔEN determines bond polarity',
            'EA ≈ similar trend but more exceptions'
          ],
          formulae: [
            '\\[ \\text{Bond polarity} \\propto \\Delta EN \\text{ between bonded atoms} \\]'
          ]
        }
      },
      examTips: [
        'MCQ: EN is used to predict bond type (nonpolar covalent, polar covalent, ionic) — know the approximate ΔEN cutoffs.',
        'FRQ: When asked to explain polarity, cite specific EN values or relative EN positions on the periodic table.',
        'AP does not require memorizing exact EN values — you need the trend and the ability to compare.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 2.1: EN differences determine bond polarity and type', sec: 'content' },
        { color: 'blue', label: '→ Topic 1.7: EN trend parallels IE trend (both ↑ across period)', sec: 'content' },
        { color: 'purple', label: '→ Topic 2.3: Molecular polarity depends on bond polarities from EN', sec: 'content' }
      ],
      questionIds: ['Q022', 'Q023', 'Q025', 'Q030']
    },

    /* =============================================================
       TOPIC 1.8 — Valence Electrons and Ionic Compounds
       ============================================================= */

    // U1.8.1 — Valence Electrons and Predicting Ion Charges
    {
      id: 'U1.8.1',
      code: 'Topic 1.8',
      subtopic: '1.8',
      subtopicTitle: 'Valence Electrons and Ionic Compounds',
      section: 'unit1',
      concepts: ['valence-electrons', 'ion-formation', 'ionic-compounds'],
      statement: 'The number of valence electrons determines the chemical properties of an element. Main-group elements tend to gain or lose electrons to achieve a noble gas electron configuration.',
      content: {
        textbook: {
          explanation: '<p><strong>Valence electrons</strong> are the electrons in the outermost (highest n) shell of an atom. For main-group elements, the number of valence electrons equals the group number (in the 1A–8A system) or the ones digit of the group number (in the 1–18 system).</p><p>The chemical behavior of main-group elements is largely governed by their valence electrons. Elements tend to react in ways that give them a <strong>noble gas electron configuration</strong> (full outer shell):</p><ul><li><strong>Metals (Groups 1–3):</strong> Tend to <em>lose</em> valence electrons to form cations. Group 1 → +1 ions, Group 2 → +2 ions, Group 13 (Al) → +3 ions.</li><li><strong>Nonmetals (Groups 15–17):</strong> Tend to <em>gain</em> electrons to form anions. Group 17 → −1 ions, Group 16 → −2 ions, Group 15 → −3 ions.</li></ul><p><strong>Transition metals</strong> can form multiple ion charges (e.g., Fe<sup>2</sup><sup>+</sup> and Fe<sup>3</sup><sup>+</sup>) because removing d electrons requires varying amounts of energy.</p><p>Ionic compounds form when metals transfer electrons to nonmetals. The resulting cations and anions are held together by <strong>electrostatic attraction</strong> (Coulomb\'s law).</p>',
          keyPoints: [
            'Valence electrons = outermost shell electrons. For main-group: # = group number (1A–8A).',
            'Metals lose electrons → cations with noble gas configuration.',
            'Nonmetals gain electrons → anions with noble gas configuration.',
            'Transition metals can form multiple charge states.',
            'Ionic compounds: cations + anions held by electrostatic (Coulombic) attraction.'
          ],
          formulae: [
            '\\(\\text{Lattice energy} \\propto \\frac{q^+ \\times q^-}{r^+ + r^-}\\) (Coulomb\'s law applied to ionic solids)'
          ],
          workedExamples: [
            {
              title: 'Predicting ion charges from position on periodic table',
              body: '<p><strong>Q:</strong> Predict the most likely ion formed by each: (a) K, (b) S, (c) Al.</p><p><strong>A:</strong></p><ul><li>(a) K is in Group 1 → loses 1 electron → <strong>K<sup>+</sup></strong> (config: [Ar])</li><li>(b) S is in Group 16 → gains 2 electrons → <strong>S<sup>2</sup><sup>−</sup></strong> (config: [Ar])</li><li>(c) Al is in Group 13 → loses 3 electrons → <strong>Al<sup>3</sup><sup>+</sup></strong> (config: [Ne])</li></ul><p>All achieve noble gas electron configurations.</p>'
            }
          ],
          warnings: [
            'Transition metals do NOT always achieve noble gas configurations — they form stable ions with partially filled d subshells.',
            'Do not assume all metals form ions with noble gas configurations — this rule applies primarily to main-group metals.',
            'The charge of a main-group ion is predictable from its group; the charge of a transition metal ion is not.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Valence electrons = group number (main group). Metals lose e<sup>−</sup> → cations. Nonmetals gain e<sup>−</sup> → anions. Both aim for noble gas configuration. Ionic compounds form via electrostatic attraction between cations and anions.',
          keyPoints: [
            'Valence e<sup>−</sup> = group number (1A–8A)',
            'Metals → cations, Nonmetals → anions',
            'Noble gas configuration is the driving force',
            'Transition metals: variable charges'
          ],
          formulae: []
        }
      },
      examTips: [
        'MCQ: Know the common ion charges for all main-group elements instantly — this is assumed knowledge throughout the course.',
        'The periodic table provided on the AP exam gives group numbers — use them to quickly determine valence electron count.',
        'FRQ: When discussing ionic compound formation, reference Coulomb\'s law to explain why the ions attract.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 1.5: Electron configuration determines number of valence electrons', sec: 'content' },
        { color: 'blue', label: '→ Topic 1.7: IE/EA trends explain which elements form cations vs. anions', sec: 'content' },
        { color: 'purple', label: '→ Topic 2.1: Ionic vs. covalent bonding depends on EN difference', sec: 'content' }
      ],
      questionIds: ['Q020', 'Q024']
    },

    // U1.8.2 — Ionic Compound Properties and Lattice Energy
    {
      id: 'U1.8.2',
      code: 'Topic 1.8',
      subtopic: '1.8',
      subtopicTitle: 'Valence Electrons and Ionic Compounds',
      section: 'unit1',
      concepts: ['ionic-compounds', 'lattice-energy', 'coulombs-law'],
      statement: 'Ionic compounds form crystalline lattices. Their stability (lattice energy) depends on ion charges and ionic radii, as predicted by Coulomb\'s law. Higher lattice energy correlates with higher melting points.',
      content: {
        textbook: {
          explanation: '<p>Ionic compounds do not exist as discrete molecules. Instead, cations and anions arrange themselves in a repeating three-dimensional pattern called a <strong>crystal lattice</strong>. The <strong>lattice energy</strong> is the energy required to completely separate one mole of an ionic solid into gaseous ions:</p><p style="text-align:center"><em>NaCl(s) → Na<sup>+</sup>(g) + Cl<sup>−</sup>(g)   ΔH = lattice energy (positive, endothermic)</em></p><p>Lattice energy is a direct application of <strong>Coulomb\'s law</strong>:</p><p style="text-align:center"><em>Lattice energy ∝ (q<sup>+</sup> × q<sup>−</sup>) / (r<sup>+</sup> + r<sup>−</sup>)</em></p><p>Key predictions:</p><ul><li><strong>Higher ion charges</strong> → greater lattice energy. Example: MgO (2+ and 2−) has a much higher lattice energy than NaCl (1+ and 1−).</li><li><strong>Smaller ions</strong> → greater lattice energy. Example: LiF > NaCl > KBr (ions get progressively larger).</li></ul><p><strong>Properties of ionic compounds</strong> (all explained by strong electrostatic forces in the lattice):</p><ul><li>High melting and boiling points.</li><li>Hard but brittle solids.</li><li>Conduct electricity when dissolved in water or melted (ions are mobile) but NOT as solids (ions are fixed in place).</li></ul>',
          keyPoints: [
            'Ionic compounds form crystal lattices, not discrete molecules.',
            'Lattice energy ∝ (q<sup>+</sup> × q<sup>−</sup>) / (r<sup>+</sup> + r<sup>−</sup>) — higher charges and smaller ions → higher lattice energy.',
            'Higher lattice energy → higher melting point.',
            'Ionic solids: high mp/bp, hard, brittle, conduct electricity only when melted or dissolved.',
            'The formula of an ionic compound reflects the ratio of ions needed for electrical neutrality.'
          ],
          formulae: [
            '\\(\\text{Lattice energy} \\propto \\frac{|q^+ \\times q^-|}{r^+ + r^-}\\)',
            '\\(\\text{NaCl}(s) \\rightarrow \\text{Na}^+(g) + \\text{Cl}^-(g)\\quad \\Delta H_{\\text{lattice}} > 0\\)'
          ],
          workedExamples: [
            {
              title: 'Comparing lattice energies',
              body: '<p><strong>Q:</strong> Which has a higher lattice energy: NaCl or MgO? Explain.</p><p><strong>A:</strong> MgO has charges of +2 and −2 (q<sup>+</sup> × q<sup>−</sup> = 4), while NaCl has charges of +1 and −1 (q<sup>+</sup> × q<sup>−</sup> = 1). Additionally, Mg<sup>2</sup><sup>+</sup> and O<sup>2</sup><sup>−</sup> are smaller ions than Na<sup>+</sup> and Cl<sup>−</sup>, so the denominator (r<sup>+</sup> + r<sup>−</sup>) is smaller.</p><p>Both factors — higher charge product and smaller ionic radii — predict that <strong>MgO has a much higher lattice energy</strong> (3850 kJ/mol vs. 787 kJ/mol for NaCl). This also explains why MgO has a much higher melting point (2852°C vs. 801°C).</p>'
            },
            {
              title: 'Writing the formula of an ionic compound',
              body: '<p><strong>Q:</strong> Write the formula for the ionic compound formed from aluminum and oxygen.</p><p><strong>A:</strong> Al forms Al<sup>3</sup><sup>+</sup>; O forms O<sup>2</sup><sup>−</sup>. For electrical neutrality, we need the total positive charge to equal the total negative charge.</p><p>2(Al<sup>3</sup><sup>+</sup>) = +6; 3(O<sup>2</sup><sup>−</sup>) = −6 → Formula: <strong>Al<sub>2</sub>O<sub>3</sub></strong></p>'
            }
          ],
          warnings: [
            'Lattice energy is always positive (endothermic to separate ions). The FORMATION of the lattice from gaseous ions is exothermic (negative ΔH).',
            'Don\'t confuse lattice energy with bond energy — lattice energy involves separating an entire crystal, not breaking a single bond.',
            'Ionic compounds conduct electricity ONLY when ions are free to move (molten or dissolved) — never as a solid.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Ionic compounds form crystal lattices. Lattice energy ∝ |q<sup>+</sup>q<sup>−</sup>|/(r<sup>+</sup>+r<sup>−</sup>). Higher charges and smaller ions → higher lattice energy → higher melting point. Ionic solids conduct only when melted or dissolved.',
          keyPoints: [
            'Lattice energy ∝ |q<sup>+</sup>q<sup>−</sup>| / (r<sup>+</sup> + r<sup>−</sup>)',
            'MgO >> NaCl in lattice energy (charge effect)',
            'LiF > NaCl > KBr (size effect)',
            'Conduct electricity only when ions are mobile'
          ],
          formulae: [
            '\\(\\text{Lattice energy} \\propto \\frac{|q^+ \\times q^-|}{r^+ + r^-}\\)'
          ]
        }
      },
      examTips: [
        'Lattice energy ranking questions are a staple of AP MCQ. Always compare charge product FIRST — it dominates over size.',
        'FRQ: When explaining why an ionic compound has a high melting point, cite "strong electrostatic attractions between oppositely charged ions in the crystal lattice" — use this exact phrasing for full credit.',
        'Remember: ionic compounds have formulas (ratio of ions) not molecular formulas. Write the simplest ratio.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 1.5: Coulomb\'s law is the basis for lattice energy', sec: 'content' },
        { color: 'blue', label: '→ Topic 1.7: Ionic radius trends affect lattice energy', sec: 'content' },
        { color: 'purple', label: '→ Topic 2.1: Ionic bonding vs. covalent bonding is determined by EN difference', sec: 'content' },
        { color: 'green', label: '→ Topic 3.5: Dissolving ionic compounds involves overcoming lattice energy', sec: 'content' }
      ],
      questionIds: ['Q021', 'Q033']
    }

  ] // end understandings

}; // end DB_U1_CONTENT


/* ---------------------------------------------------------------
   GLOBAL DB REGISTRY
   --------------------------------------------------------------- */
window.DB = window.DB || {};
if (!window.DB.u1labs) window.DB.u1labs = [];
