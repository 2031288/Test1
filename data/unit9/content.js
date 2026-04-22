/*
 *  AP Chemistry – Unit 9: Applications of Thermodynamics
 *  Data file: content.js
 *  Auto-generated — do not hand-edit.
 */

window.DB_U9_CONTENT = {

  /* ───────────────────── METADATA ───────────────────── */
  metadata: {
    id: 'unit9',
    title: 'Unit 9',
    longTitle: 'Unit 9 — Applications of Thermodynamics',
    description:
      'Entropy, Gibbs free energy, thermodynamic favorability, free energy and equilibrium, coupled reactions, galvanic and electrolytic cells, cell potential, Nernst equation, and electrolysis with Faraday\'s law.',
    guidingQuestion:
      'How can thermodynamic quantities — entropy, enthalpy, and free energy — predict whether a process is thermodynamically favorable, and how do these ideas extend to electrochemical systems?',
    examWeight: '7-9%',

    subtopics: [
      /* 9.1 */
      {
        id: 'U9.1', code: '9.1',
        title: 'Introduction to Entropy',
        learningObjectives: ['ENE-4.A'],
        understandings: ['U9.1.1', 'U9.1.2'],
        blocks: [
          { id: 'B9.1', code: '9.1', title: 'Introduction to Entropy', understandings: ['U9.1.1', 'U9.1.2'] }
        ]
      },
      /* 9.2 */
      {
        id: 'U9.2', code: '9.2',
        title: 'Absolute Entropy and Entropy Change',
        learningObjectives: ['ENE-4.B'],
        understandings: ['U9.2.1', 'U9.2.2', 'U9.2.3'],
        blocks: [
          { id: 'B9.2', code: '9.2', title: 'Absolute Entropy and Entropy Change', understandings: ['U9.2.1', 'U9.2.2', 'U9.2.3'] }
        ]
      },
      /* 9.3 */
      {
        id: 'U9.3', code: '9.3',
        title: 'Gibbs Free Energy and Thermodynamic Favorability',
        learningObjectives: ['ENE-4.C'],
        understandings: ['U9.3.1', 'U9.3.2', 'U9.3.3'],
        blocks: [
          { id: 'B9.3', code: '9.3', title: 'Gibbs Free Energy and Thermodynamic Favorability', understandings: ['U9.3.1', 'U9.3.2', 'U9.3.3'] }
        ]
      },
      /* 9.4 */
      {
        id: 'U9.4', code: '9.4',
        title: 'Thermodynamic and Kinetic Control',
        learningObjectives: ['ENE-4.D'],
        understandings: ['U9.4.1', 'U9.4.2'],
        blocks: [
          { id: 'B9.4', code: '9.4', title: 'Thermodynamic and Kinetic Control', understandings: ['U9.4.1', 'U9.4.2'] }
        ]
      },
      /* 9.5 */
      {
        id: 'U9.5', code: '9.5',
        title: 'Free Energy and Equilibrium',
        learningObjectives: ['ENE-5.A'],
        understandings: ['U9.5.1', 'U9.5.2', 'U9.5.3'],
        blocks: [
          { id: 'B9.5', code: '9.5', title: 'Free Energy and Equilibrium', understandings: ['U9.5.1', 'U9.5.2', 'U9.5.3'] }
        ]
      },
      /* 9.6 */
      {
        id: 'U9.6', code: '9.6',
        title: 'Coupled Reactions',
        learningObjectives: ['ENE-5.B'],
        understandings: ['U9.6.1', 'U9.6.2'],
        blocks: [
          { id: 'B9.6', code: '9.6', title: 'Coupled Reactions', understandings: ['U9.6.1', 'U9.6.2'] }
        ]
      },
      /* 9.7 */
      {
        id: 'U9.7', code: '9.7',
        title: 'Galvanic (Voltaic) and Electrolytic Cells',
        learningObjectives: ['ENE-6.A'],
        understandings: ['U9.7.1', 'U9.7.2', 'U9.7.3'],
        blocks: [
          { id: 'B9.7', code: '9.7', title: 'Galvanic (Voltaic) and Electrolytic Cells', understandings: ['U9.7.1', 'U9.7.2', 'U9.7.3'] }
        ]
      },
      /* 9.8 */
      {
        id: 'U9.8', code: '9.8',
        title: 'Cell Potential and Free Energy',
        learningObjectives: ['ENE-6.B'],
        understandings: ['U9.8.1', 'U9.8.2', 'U9.8.3'],
        blocks: [
          { id: 'B9.8', code: '9.8', title: 'Cell Potential and Free Energy', understandings: ['U9.8.1', 'U9.8.2', 'U9.8.3'] }
        ]
      },
      /* 9.9 */
      {
        id: 'U9.9', code: '9.9',
        title: 'Cell Potential Under Nonstandard Conditions',
        learningObjectives: ['ENE-6.C'],
        understandings: ['U9.9.1', 'U9.9.2'],
        blocks: [
          { id: 'B9.9', code: '9.9', title: 'Cell Potential Under Nonstandard Conditions', understandings: ['U9.9.1', 'U9.9.2'] }
        ]
      },
      /* 9.10 */
      {
        id: 'U9.10', code: '9.10',
        title: 'Electrolysis and Faraday\'s Law',
        learningObjectives: ['ENE-6.D'],
        understandings: ['U9.10.1', 'U9.10.2'],
        blocks: [
          { id: 'B9.10', code: '9.10', title: 'Electrolysis and Faraday\'s Law', understandings: ['U9.10.1', 'U9.10.2'] }
        ]
      }
    ]
  },

  /* ───────────────────── UNDERSTANDINGS ───────────────────── */
  understandings: [

    /* ============================================================
       9.1  Introduction to Entropy
       ============================================================ */
    {
      id: 'U9.1.1', code: 'Topic 9.1', subtopic: '9.1',
      subtopicTitle: 'Introduction to Entropy', section: 'unit9',
      concepts: ['energy', 'entropy'],
      statement:
        'Entropy (S) is a thermodynamic quantity that describes the dispersal of matter and energy in a system. A system with greater dispersal of matter or energy among microstates has higher entropy.',
      content: {
        textbook: {
          explanation:
            '<p><strong>Entropy (S)</strong> is often described as a measure of "disorder," but a more precise definition is the <strong>dispersal of energy</strong> over the available microstates of a system.</p>' +
            '<h4>Microstates</h4>' +
            '<ul>' +
            '<li>A <strong>microstate</strong> is one specific arrangement of particles and their energies. The more microstates available to a system, the higher its entropy.</li>' +
            '<li>The Boltzmann equation relates entropy to microstates: <strong>S = k<sub>B</sub> ln W</strong>, where W is the number of microstates and k<sub>B</sub> is Boltzmann\'s constant (1.38 &times; 10<sup>&minus;23</sup> J/K).</li>' +
            '<li>While you do not need to calculate microstates on the AP exam, understanding that <em>more microstates = higher entropy</em> is essential.</li>' +
            '</ul>' +
            '<h4>Key Principle</h4>' +
            '<ul>' +
            '<li>Entropy is a <strong>state function</strong> — it depends only on the current state, not the path taken to reach it.</li>' +
            '<li>Entropy is always <strong>positive</strong> (S &gt; 0 for any real substance above 0 K) because particles always have some degree of motion and energy dispersal.</li>' +
            '<li>The <strong>Second Law of Thermodynamics</strong> states that for any spontaneous process, the total entropy of the universe increases: &Delta;S<sub>universe</sub> = &Delta;S<sub>system</sub> + &Delta;S<sub>surroundings</sub> &gt; 0.</li>' +
            '</ul>',
          keyPoints: [
            'Entropy measures dispersal of matter and energy over microstates.',
            'More microstates → higher entropy.',
            'S > 0 for any substance above 0 K.',
            'ΔS_universe > 0 for any spontaneous process (Second Law).',
            'Entropy is a state function with units J/(mol·K).'
          ],
          formulae: [
            '\\[ S = k_B \\ln W \\quad (\\text{Boltzmann equation}) \\]',
            '\\[ \\Delta S_{\\text{universe}} = \\Delta S_{\\text{system}} + \\Delta S_{\\text{surroundings}} > 0 \\quad (\\text{spontaneous}) \\]'
          ],
          workedExamples: [
            {
              title: 'Comparing Entropy of Different States',
              body:
                '<p><strong>Problem:</strong> Rank the following in order of increasing entropy at 25 &deg;C and 1 atm: H<sub>2</sub>O(s), H<sub>2</sub>O(l), H<sub>2</sub>O(g).</p>' +
                '<p><strong>Solution:</strong> H<sub>2</sub>O(s) &lt; H<sub>2</sub>O(l) &lt; H<sub>2</sub>O(g). In the solid state, water molecules are locked in a rigid lattice with few microstates. In the liquid, molecules can translate and rotate more freely. In the gas, molecules are widely dispersed with the greatest number of microstates and highest entropy.</p>'
            }
          ],
          warnings: [
            'Do not say entropy = disorder. The AP exam prefers "dispersal of matter and energy."',
            'Entropy is NOT the same as enthalpy — they are independent thermodynamic quantities.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Entropy (S) measures the dispersal of matter and energy. More microstates = higher S. S > 0 always (above 0 K). The Second Law: ΔS_universe > 0 for spontaneous processes.',
          keyPoints: [
            'Gases have higher entropy than liquids, which have higher entropy than solids.',
            'Entropy is a state function measured in J/(mol·K).'
          ],
          formulae: [
            '\\( \\Delta S_{\\text{universe}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} > 0 \\)'
          ]
        }
      },
      examTips: [
        'The AP exam uses "thermodynamically favorable" instead of "spontaneous" — but both mean ΔG < 0.',
        'When asked about entropy, always frame your answer in terms of "dispersal of matter and energy," not "disorder."'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 6: Energy changes — enthalpy is one component of free energy', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.2: Calculating ΔS° from standard molar entropies', sec: 'content' }
      ],
      questionIds: ['U9Q001', 'U9Q002']
    },

    {
      id: 'U9.1.2', code: 'Topic 9.1', subtopic: '9.1',
      subtopicTitle: 'Introduction to Entropy', section: 'unit9',
      concepts: ['energy', 'entropy'],
      statement:
        'Processes that increase the number of available microstates — such as phase changes from solid to liquid to gas, increases in temperature, or increases in volume — result in an increase in entropy.',
      content: {
        textbook: {
          explanation:
            '<p>Several types of processes lead to predictable entropy changes:</p>' +
            '<h4>Factors that Increase Entropy</h4>' +
            '<ul>' +
            '<li><strong>Phase changes toward greater freedom of motion:</strong> solid &rarr; liquid &rarr; gas. Melting and vaporization increase entropy.</li>' +
            '<li><strong>Increasing temperature:</strong> Higher T means more kinetic energy, more accessible energy levels, and more microstates.</li>' +
            '<li><strong>Increasing volume or decreasing pressure (gases):</strong> Gas molecules have more positional microstates in a larger volume.</li>' +
            '<li><strong>Dissolving a solute:</strong> Mixing increases the number of microstates (though there are exceptions for highly hydrated ions).</li>' +
            '<li><strong>Increasing the number of particles:</strong> More particles means more microstates. Reactions that produce more moles of gas than they consume tend to have &Delta;S &gt; 0.</li>' +
            '</ul>' +
            '<h4>Factors that Decrease Entropy</h4>' +
            '<ul>' +
            '<li>Phase changes from gas &rarr; liquid &rarr; solid (condensation, freezing).</li>' +
            '<li>Decreasing temperature or volume.</li>' +
            '<li>Reactions that produce fewer moles of gas.</li>' +
            '</ul>',
          keyPoints: [
            'Melting and vaporization increase entropy; freezing and condensation decrease it.',
            'More moles of gas in products than reactants → ΔS > 0.',
            'Dissolving usually increases entropy (more mixing).',
            'Higher temperature → more entropy.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Predicting the Sign of ΔS',
              body:
                '<p><strong>Problem:</strong> Predict the sign of &Delta;S for: 2 H<sub>2</sub>O(l) &rarr; 2 H<sub>2</sub>(g) + O<sub>2</sub>(g).</p>' +
                '<p><strong>Solution:</strong> &Delta;S &gt; 0. We go from 0 moles of gas on the left to 3 moles of gas on the right. Additionally, we go from the liquid phase to the gas phase, which has far more microstates. Both factors contribute to a large positive entropy change.</p>'
            }
          ],
          warnings: [
            'Dissolving does NOT always increase entropy. Some ions become so heavily hydrated that the ordering of water molecules around them decreases entropy — but for AP purposes, dissolving generally increases S.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Entropy increases with: phase changes toward gas, higher T, more volume, dissolving, and more gas moles in products. Count moles of gas to predict ΔS sign.',
          keyPoints: [
            'ΔS > 0 when moles of gas increase.',
            'ΔS < 0 when moles of gas decrease or condensation/freezing occurs.'
          ],
          formulae: []
        }
      },
      examTips: [
        'On the AP exam, the easiest way to predict the sign of ΔS is to count moles of gas: more gas in products → ΔS > 0.',
        'If a question asks you to rank substances by entropy, remember: gas > liquid > solid, and larger/more complex molecules have higher S° than smaller ones.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 4: Reactions — counting moles in balanced equations', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.2: Using S° values to calculate ΔS°rxn quantitatively', sec: 'content' }
      ],
      questionIds: ['U9Q003']
    },

    /* ============================================================
       9.2  Absolute Entropy and Entropy Change
       ============================================================ */
    {
      id: 'U9.2.1', code: 'Topic 9.2', subtopic: '9.2',
      subtopicTitle: 'Absolute Entropy and Entropy Change', section: 'unit9',
      concepts: ['energy', 'entropy'],
      statement:
        'The Third Law of Thermodynamics states that the entropy of a perfect crystal at 0 K is zero. This provides an absolute reference point, allowing measurement of standard molar entropy S° for any substance.',
      content: {
        textbook: {
          explanation:
            '<p>Unlike enthalpy, for which we can only measure <em>changes</em> (&Delta;H), entropy has an <strong>absolute reference point</strong> thanks to the Third Law of Thermodynamics:</p>' +
            '<h4>Third Law of Thermodynamics</h4>' +
            '<ul>' +
            '<li>The entropy of a <strong>perfect crystalline substance at absolute zero (0 K)</strong> is exactly zero: S(0 K) = 0.</li>' +
            '<li>At 0 K, there is only one microstate (W = 1), so S = k<sub>B</sub> ln 1 = 0.</li>' +
            '<li>This means we can measure <strong>absolute entropies</strong> (S&deg;) — the entropy of a substance at standard conditions (1 atm, usually 298 K) measured from the 0 K reference.</li>' +
            '</ul>' +
            '<h4>Standard Molar Entropy (S&deg;)</h4>' +
            '<ul>' +
            '<li>S&deg; values are always <strong>positive</strong> (unlike &Delta;H&deg;<sub>f</sub>, which can be zero for elements).</li>' +
            '<li>Units: J/(mol&middot;K) — note: joules, not kilojoules!</li>' +
            '<li>Typical values: S&deg;(diamond) = 2.4 J/(mol&middot;K), S&deg;(H<sub>2</sub>O(l)) = 69.9 J/(mol&middot;K), S&deg;(H<sub>2</sub>O(g)) = 188.8 J/(mol&middot;K).</li>' +
            '</ul>',
          keyPoints: [
            'Third Law: S = 0 for a perfect crystal at 0 K.',
            'S° values are always positive for real substances at T > 0.',
            'S° units are J/(mol·K) — watch for kJ vs J conversions with ΔG calculations!',
            'Elements in their standard state have S° > 0 (unlike ΔH°f = 0 for elements).'
          ],
          formulae: [
            '\\[ S(0\\,\\text{K}) = 0 \\quad (\\text{Third Law, perfect crystal}) \\]'
          ],
          workedExamples: [
            {
              title: 'Why S° ≠ 0 for Elements',
              body:
                '<p><strong>Problem:</strong> Explain why S&deg; for O<sub>2</sub>(g) at 298 K is 205.2 J/(mol&middot;K) and not zero, even though O<sub>2</sub> is an element in its standard state.</p>' +
                '<p><strong>Solution:</strong> Standard molar entropies measure the <em>absolute</em> entropy from the 0 K reference point. At 298 K, O<sub>2</sub> molecules have significant translational, rotational, and vibrational motion, giving them many microstates. Only at exactly 0 K in a perfect crystal would S = 0. This is different from &Delta;H&deg;<sub>f</sub>, which is defined as zero for elements in their standard state by convention.</p>'
            }
          ],
          warnings: [
            'A common mistake: S° for elements is NOT zero. Only ΔH°f for elements in standard state is zero.',
            'S° is in J/(mol·K), but ΔH° and ΔG° are typically in kJ/mol. Always convert before combining!'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Third Law: S = 0 at 0 K for a perfect crystal. S° values are always positive. Units: J/(mol·K). Elements have S° > 0 (unlike ΔH°f).',
          keyPoints: [
            'S° is an absolute quantity, not a change.',
            'Watch units: S° in J, ΔH° in kJ — convert before using ΔG° = ΔH° - TΔS°.'
          ],
          formulae: [
            '\\( S(0\\,\\text{K}) = 0 \\) (Third Law)'
          ]
        }
      },
      examTips: [
        'The AP exam commonly tests whether students know that S° for elements is NOT zero — do not confuse with ΔH°f.',
        'Unit conversion between J and kJ is a classic source of errors in ΔG° = ΔH° − TΔS° calculations.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 6: Hess\'s law parallels the summation method for ΔS°', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.3: ΔS° feeds into ΔG° = ΔH° − TΔS°', sec: 'content' }
      ],
      questionIds: ['U9Q004']
    },

    {
      id: 'U9.2.2', code: 'Topic 9.2', subtopic: '9.2',
      subtopicTitle: 'Absolute Entropy and Entropy Change', section: 'unit9',
      concepts: ['energy', 'entropy'],
      statement:
        'The standard entropy change for a reaction is calculated as ΔS°rxn = ΣS°(products) − ΣS°(reactants), analogous to using standard enthalpies of formation for ΔH°rxn.',
      content: {
        textbook: {
          explanation:
            '<p>Because entropy is a state function with an absolute reference, we can calculate the entropy change for any reaction using tabulated S&deg; values:</p>' +
            '<p style="text-align:center;"><strong>&Delta;S&deg;<sub>rxn</sub> = &Sigma; n S&deg;(products) &minus; &Sigma; n S&deg;(reactants)</strong></p>' +
            '<p>where n is the stoichiometric coefficient for each substance.</p>' +
            '<h4>Step-by-Step</h4>' +
            '<ol>' +
            '<li>Write the balanced equation.</li>' +
            '<li>Look up S&deg; for each reactant and product.</li>' +
            '<li>Multiply each S&deg; by its stoichiometric coefficient.</li>' +
            '<li>Subtract the sum for reactants from the sum for products.</li>' +
            '</ol>' +
            '<p>If &Delta;S&deg;<sub>rxn</sub> &gt; 0, the reaction increases entropy (more dispersal). If &Delta;S&deg;<sub>rxn</sub> &lt; 0, the reaction decreases entropy (less dispersal).</p>',
          keyPoints: [
            'ΔS°rxn = Σ nS°(products) − Σ nS°(reactants).',
            'Use stoichiometric coefficients as multipliers.',
            'Positive ΔS° = entropy increases; negative ΔS° = entropy decreases.',
            'This formula parallels ΔH°rxn = Σ nΔH°f(products) − Σ nΔH°f(reactants).'
          ],
          formulae: [
            '\\[ \\Delta S^{\\circ}_{\\text{rxn}} = \\sum n S^{\\circ}(\\text{products}) - \\sum n S^{\\circ}(\\text{reactants}) \\]'
          ],
          workedExamples: [
            {
              title: 'Calculating ΔS°rxn from Standard Molar Entropies',
              body:
                '<p><strong>Problem:</strong> Calculate &Delta;S&deg; for the combustion of methane: CH<sub>4</sub>(g) + 2 O<sub>2</sub>(g) &rarr; CO<sub>2</sub>(g) + 2 H<sub>2</sub>O(g). Given S&deg; values: CH<sub>4</sub>(g) = 186.3, O<sub>2</sub>(g) = 205.2, CO<sub>2</sub>(g) = 213.8, H<sub>2</sub>O(g) = 188.8 J/(mol&middot;K).</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>&Delta;S&deg; = [1(213.8) + 2(188.8)] &minus; [1(186.3) + 2(205.2)]</p>' +
                '<p>&Delta;S&deg; = [591.4] &minus; [596.7] = &minus;5.3 J/(mol&middot;K)</p>' +
                '<p>The small negative value makes sense: we go from 3 moles of gas (1 CH<sub>4</sub> + 2 O<sub>2</sub>) to 3 moles of gas (1 CO<sub>2</sub> + 2 H<sub>2</sub>O), so &Delta;S&deg; is near zero. The slight decrease reflects the difference in molecular complexity.</p>'
            }
          ],
          warnings: [
            'Remember to multiply S° by stoichiometric coefficients — a common source of error.',
            'Do not confuse S° values (always positive) with ΔH°f values (can be zero for elements).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'ΔS°rxn = Σ nS°(products) − Σ nS°(reactants). Multiply by stoichiometric coefficients. Positive means more dispersal.',
          keyPoints: [
            'Analogous to ΔH°rxn calculation but using S° instead of ΔH°f.',
            'Count moles of gas to quickly check if your sign makes sense.'
          ],
          formulae: [
            '\\( \\Delta S^{\\circ}_{\\text{rxn}} = \\sum n S^{\\circ}(\\text{products}) - \\sum n S^{\\circ}(\\text{reactants}) \\)'
          ]
        }
      },
      examTips: [
        'On the AP exam, you will be given a table of S° values. Just plug into the formula — but watch stoichiometric coefficients!',
        'Quick check: if moles of gas increase, ΔS° should be positive.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 6: Hess\'s law — same summation pattern for ΔH°', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.3: ΔS° is the entropy term in ΔG° = ΔH° − TΔS°', sec: 'content' }
      ],
      questionIds: ['U9Q005']
    },

    {
      id: 'U9.2.3', code: 'Topic 9.2', subtopic: '9.2',
      subtopicTitle: 'Absolute Entropy and Entropy Change', section: 'unit9',
      concepts: ['energy', 'entropy'],
      statement:
        'The sign of ΔS for a reaction can be predicted qualitatively by considering changes in phase, number of moles of gas, and mixing/dissolving — without needing tabulated S° values.',
      content: {
        textbook: {
          explanation:
            '<p>While &Delta;S&deg; can be calculated from tables, the AP exam frequently asks you to <strong>predict the sign of &Delta;S</strong> qualitatively. The key rules:</p>' +
            '<h4>Rules for Predicting Sign of &Delta;S</h4>' +
            '<ol>' +
            '<li><strong>Phase changes:</strong> solid &rarr; liquid &rarr; gas increases entropy. Reverse decreases it. Sublimation (s &rarr; g) gives a large positive &Delta;S.</li>' +
            '<li><strong>Moles of gas:</strong> If products have more moles of gas than reactants, &Delta;S &gt; 0. If fewer, &Delta;S &lt; 0. This is the single most important factor.</li>' +
            '<li><strong>Dissolving:</strong> Dissolving a solid or liquid in a solvent generally increases entropy (more mixing). Dissolving a gas in a liquid <em>decreases</em> entropy (gas becomes constrained).</li>' +
            '<li><strong>Temperature increase:</strong> Higher T means more entropy, but this does not apply to &Delta;S<sub>rxn</sub> at constant T — it applies to comparing states.</li>' +
            '<li><strong>Molecular complexity:</strong> More complex molecules (more atoms) generally have higher S&deg; because they have more vibrational modes.</li>' +
            '</ol>' +
            '<p>When multiple factors conflict, the change in moles of gas usually dominates.</p>',
          keyPoints: [
            'Count moles of gas: more gas in products → ΔS > 0.',
            'Phase changes to higher-energy phases increase S.',
            'Dissolving solids/liquids increases S; dissolving gases decreases S.',
            'When factors conflict, moles of gas usually dominates.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Qualitative Entropy Predictions',
              body:
                '<p><strong>Problem:</strong> Predict the sign of &Delta;S for each reaction:</p>' +
                '<p>(a) CaCO<sub>3</sub>(s) &rarr; CaO(s) + CO<sub>2</sub>(g)</p>' +
                '<p>(b) N<sub>2</sub>(g) + 3 H<sub>2</sub>(g) &rarr; 2 NH<sub>3</sub>(g)</p>' +
                '<p>(c) NaCl(s) &rarr; Na<sup>+</sup>(aq) + Cl<sup>&minus;</sup>(aq)</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>(a) &Delta;S &gt; 0. We go from 0 mol gas to 1 mol gas. A solid decomposes to produce a gas.</p>' +
                '<p>(b) &Delta;S &lt; 0. We go from 4 mol gas (1 + 3) to 2 mol gas. Fewer gas molecules means less dispersal.</p>' +
                '<p>(c) &Delta;S &gt; 0. A solid ionic lattice dissolves, releasing ions into solution. The ions are dispersed throughout the solvent, increasing entropy.</p>'
            }
          ],
          warnings: [
            'A reaction can have ΔS < 0 and still be spontaneous if ΔH is sufficiently negative (exothermic enough).',
            'Do not assume dissolving always increases entropy — dissolving a gas in a liquid decreases entropy.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Predict ΔS sign by counting moles of gas (dominant factor), then consider phase changes and dissolving. More gas = +ΔS, less gas = −ΔS.',
          keyPoints: [
            'Moles of gas is the most reliable predictor.',
            'Dissolving solids → +ΔS; dissolving gases → −ΔS.'
          ],
          formulae: []
        }
      },
      examTips: [
        'The AP exam loves "predict the sign of ΔS" questions. Always count moles of gas first — it is the fastest and most reliable method.',
        'If a reaction has the same number of gas moles on both sides, look at molecular complexity or phase changes for the tiebreaker.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 4: Stoichiometry — counting moles from balanced equations', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.3: Sign of ΔS determines temperature dependence of ΔG', sec: 'content' }
      ],
      questionIds: ['U9Q006']
    },

    /* ============================================================
       9.3  Gibbs Free Energy and Thermodynamic Favorability
       ============================================================ */
    {
      id: 'U9.3.1', code: 'Topic 9.3', subtopic: '9.3',
      subtopicTitle: 'Gibbs Free Energy and Thermodynamic Favorability', section: 'unit9',
      concepts: ['energy', 'gibbs-free-energy'],
      statement:
        'The Gibbs free energy change ΔG° = ΔH° − TΔS° combines enthalpy and entropy to determine whether a process is thermodynamically favorable (ΔG° < 0) or unfavorable (ΔG° > 0) at a given temperature.',
      content: {
        textbook: {
          explanation:
            '<p>The <strong>Gibbs free energy</strong> combines enthalpy and entropy into a single criterion for thermodynamic favorability:</p>' +
            '<p style="text-align:center;"><strong>&Delta;G&deg; = &Delta;H&deg; &minus; T&Delta;S&deg;</strong></p>' +
            '<ul>' +
            '<li>If <strong>&Delta;G&deg; &lt; 0</strong>: the process is <strong>thermodynamically favorable</strong> (spontaneous) under standard conditions.</li>' +
            '<li>If <strong>&Delta;G&deg; &gt; 0</strong>: the process is <strong>thermodynamically unfavorable</strong> (non-spontaneous) under standard conditions.</li>' +
            '<li>If <strong>&Delta;G&deg; = 0</strong>: the system is at <strong>equilibrium</strong> under standard conditions.</li>' +
            '</ul>' +
            '<h4>Units</h4>' +
            '<ul>' +
            '<li>&Delta;H&deg; is in kJ/mol, T is in kelvin, &Delta;S&deg; is in J/(mol&middot;K).</li>' +
            '<li><strong>Critical:</strong> Convert &Delta;S&deg; from J to kJ (divide by 1000) before plugging into the equation, or convert &Delta;H&deg; from kJ to J.</li>' +
            '</ul>' +
            '<p>The beauty of &Delta;G is that it accounts for <em>both</em> the energy change (enthalpy) and the dispersal change (entropy) in a single number.</p>',
          keyPoints: [
            'ΔG° = ΔH° − TΔS° is the master equation for thermodynamic favorability.',
            'ΔG° < 0 → thermodynamically favorable (spontaneous).',
            'ΔG° > 0 → thermodynamically unfavorable.',
            'ΔG° = 0 → equilibrium.',
            'T must be in kelvin; convert J and kJ before calculating!'
          ],
          formulae: [
            '\\[ \\Delta G^{\\circ} = \\Delta H^{\\circ} - T\\Delta S^{\\circ} \\]',
            '\\( \\Delta G^{\\circ} < 0 \\): favorable; \\( \\Delta G^{\\circ} > 0 \\): unfavorable; \\( \\Delta G^{\\circ} = 0 \\): equilibrium'
          ],
          workedExamples: [
            {
              title: 'Calculating ΔG° at 298 K',
              body:
                '<p><strong>Problem:</strong> For the reaction 2 Fe<sub>2</sub>O<sub>3</sub>(s) + 3 C(s) &rarr; 4 Fe(s) + 3 CO<sub>2</sub>(g), &Delta;H&deg; = +467.9 kJ/mol and &Delta;S&deg; = +560.7 J/(mol&middot;K). Is this reaction thermodynamically favorable at 298 K?</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>Convert &Delta;S&deg;: 560.7 J/(mol&middot;K) = 0.5607 kJ/(mol&middot;K)</p>' +
                '<p>&Delta;G&deg; = 467.9 &minus; (298)(0.5607) = 467.9 &minus; 167.1 = +300.8 kJ/mol</p>' +
                '<p>Since &Delta;G&deg; &gt; 0, this reaction is <strong>not thermodynamically favorable at 298 K</strong>. However, at high enough temperatures the T&Delta;S term could overcome the positive &Delta;H, making the reaction favorable.</p>'
            }
          ],
          warnings: [
            'ALWAYS convert ΔS° from J to kJ (or vice versa) before calculating ΔG°. This is the #1 calculation error on the AP exam.',
            'The AP exam uses "thermodynamically favorable" instead of "spontaneous." Both mean ΔG < 0.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'ΔG° = ΔH° − TΔS°. Negative ΔG° = favorable. Convert J ↔ kJ before calculating. T in kelvin.',
          keyPoints: [
            'ΔG combines enthalpy and entropy into one criterion.',
            'Unit mismatch (J vs kJ) is the most common calculation error.'
          ],
          formulae: [
            '\\( \\Delta G^{\\circ} = \\Delta H^{\\circ} - T\\Delta S^{\\circ} \\)'
          ]
        }
      },
      examTips: [
        'AP free-response graders specifically look for correct unit conversions in ΔG° = ΔH° − TΔS° calculations. Always show the conversion.',
        'Use "thermodynamically favorable" in your FRQ answers — the AP exam has moved away from "spontaneous."'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 6: ΔH° from Hess\'s law or ΔH°f values feeds into this equation', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.5: ΔG° connects to K via ΔG° = −RT ln K', sec: 'content' }
      ],
      questionIds: ['U9Q007']
    },

    {
      id: 'U9.3.2', code: 'Topic 9.3', subtopic: '9.3',
      subtopicTitle: 'Gibbs Free Energy and Thermodynamic Favorability', section: 'unit9',
      concepts: ['energy', 'gibbs-free-energy'],
      statement:
        'There are four combinations of ΔH and ΔS signs, each with different temperature dependence for ΔG: (1) ΔH < 0, ΔS > 0 → always favorable; (2) ΔH > 0, ΔS < 0 → never favorable; (3) ΔH < 0, ΔS < 0 → favorable at low T; (4) ΔH > 0, ΔS > 0 → favorable at high T.',
      content: {
        textbook: {
          explanation:
            '<p>The sign of &Delta;G = &Delta;H &minus; T&Delta;S depends on the signs of &Delta;H and &Delta;S and the temperature. There are <strong>four cases</strong>:</p>' +
            '<table border="1" cellpadding="6" style="border-collapse:collapse;text-align:center;">' +
            '<tr><th>&Delta;H</th><th>&Delta;S</th><th>&Delta;G</th><th>Favorability</th></tr>' +
            '<tr><td>&minus; (exo)</td><td>+ (more dispersal)</td><td>Always &minus;</td><td><strong>Favorable at ALL temperatures</strong></td></tr>' +
            '<tr><td>+ (endo)</td><td>&minus; (less dispersal)</td><td>Always +</td><td><strong>Unfavorable at ALL temperatures</strong></td></tr>' +
            '<tr><td>&minus; (exo)</td><td>&minus; (less dispersal)</td><td>&minus; at low T, + at high T</td><td><strong>Favorable at LOW temperatures</strong></td></tr>' +
            '<tr><td>+ (endo)</td><td>+ (more dispersal)</td><td>+ at low T, &minus; at high T</td><td><strong>Favorable at HIGH temperatures</strong></td></tr>' +
            '</table>' +
            '<h4>Crossover Temperature</h4>' +
            '<p>For cases 3 and 4, there is a <strong>crossover temperature</strong> where &Delta;G = 0 (the system is at equilibrium):</p>' +
            '<p style="text-align:center;">T<sub>crossover</sub> = &Delta;H&deg; / &Delta;S&deg;</p>' +
            '<p>At this temperature, the process transitions between favorable and unfavorable. Above or below this temperature, one term dominates.</p>' +
            '<h4>Physical Examples</h4>' +
            '<ul>' +
            '<li><strong>Case 1 (always favorable):</strong> Combustion reactions — exothermic and produce more gas moles.</li>' +
            '<li><strong>Case 2 (never favorable):</strong> The reverse of combustion — endothermic and fewer gas moles. Cannot happen on its own.</li>' +
            '<li><strong>Case 3 (low T favorable):</strong> Freezing of water — exothermic (&Delta;H &lt; 0) but decreases entropy (&Delta;S &lt; 0). Favorable below 0 &deg;C.</li>' +
            '<li><strong>Case 4 (high T favorable):</strong> Melting of ice — endothermic (&Delta;H &gt; 0) but increases entropy (&Delta;S &gt; 0). Favorable above 0 &deg;C. Also: decomposition of CaCO<sub>3</sub>.</li>' +
            '</ul>',
          keyPoints: [
            'ΔH < 0, ΔS > 0 → ALWAYS favorable (both terms help).',
            'ΔH > 0, ΔS < 0 → NEVER favorable (both terms oppose).',
            'ΔH < 0, ΔS < 0 → favorable at LOW T (enthalpy driven).',
            'ΔH > 0, ΔS > 0 → favorable at HIGH T (entropy driven).',
            'Crossover temperature: T = ΔH°/ΔS° (where ΔG = 0).'
          ],
          formulae: [
            '\\[ T_{\\text{crossover}} = \\frac{\\Delta H^{\\circ}}{\\Delta S^{\\circ}} \\quad (\\text{where } \\Delta G^{\\circ} = 0) \\]'
          ],
          workedExamples: [
            {
              title: 'Finding the Crossover Temperature',
              body:
                '<p><strong>Problem:</strong> For the decomposition CaCO<sub>3</sub>(s) &rarr; CaO(s) + CO<sub>2</sub>(g), &Delta;H&deg; = +178.3 kJ/mol and &Delta;S&deg; = +160.5 J/(mol&middot;K). At what temperature does this reaction become thermodynamically favorable?</p>' +
                '<p><strong>Solution:</strong> This is Case 4 (&Delta;H &gt; 0, &Delta;S &gt; 0) — favorable at high T.</p>' +
                '<p>At the crossover: &Delta;G&deg; = 0, so T = &Delta;H&deg; / &Delta;S&deg;</p>' +
                '<p>T = 178,300 J/mol &divide; 160.5 J/(mol&middot;K) = <strong>1111 K (838 &deg;C)</strong></p>' +
                '<p>Above 1111 K, the T&Delta;S term exceeds &Delta;H, making &Delta;G &lt; 0 and the reaction favorable. Below 1111 K, the reaction is unfavorable.</p>'
            }
          ],
          warnings: [
            'The four-case table is one of the most heavily tested concepts in Unit 9. Memorize it thoroughly.',
            'When calculating T_crossover, make sure ΔH and ΔS are in the same energy unit (both J or both kJ).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Four cases for ΔG sign: (1) −H,+S → always favorable; (2) +H,−S → never; (3) −H,−S → low T; (4) +H,+S → high T. Crossover T = ΔH/ΔS.',
          keyPoints: [
            'Memorize the four-case table — it is tested almost every year.',
            'Crossover temperature is where ΔG = 0.'
          ],
          formulae: [
            '\\( T_{\\text{crossover}} = \\frac{\\Delta H^{\\circ}}{\\Delta S^{\\circ}} \\)'
          ]
        }
      },
      examTips: [
        'The four-case table appears on nearly every AP Chemistry exam. You MUST be able to determine favorability from the signs of ΔH and ΔS.',
        'FRQ tip: If asked "at what temperature does the reaction become favorable?" — set ΔG = 0 and solve for T.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 6: Endothermic vs exothermic classification determines ΔH sign', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.4: Favorability ≠ speed — kinetics is separate', sec: 'content' }
      ],
      questionIds: ['U9Q008', 'U9Q009']
    },

    {
      id: 'U9.3.3', code: 'Topic 9.3', subtopic: '9.3',
      subtopicTitle: 'Gibbs Free Energy and Thermodynamic Favorability', section: 'unit9',
      concepts: ['energy', 'gibbs-free-energy'],
      statement:
        'ΔG° can also be calculated from standard free energies of formation: ΔG°rxn = ΣΔG°f(products) − ΣΔG°f(reactants), following the same pattern as ΔH°rxn and ΔS°rxn calculations.',
      content: {
        textbook: {
          explanation:
            '<p>Just as &Delta;H&deg;<sub>rxn</sub> can be calculated from &Delta;H&deg;<sub>f</sub> values, &Delta;G&deg;<sub>rxn</sub> can be calculated from <strong>standard free energies of formation</strong> (&Delta;G&deg;<sub>f</sub>):</p>' +
            '<p style="text-align:center;"><strong>&Delta;G&deg;<sub>rxn</sub> = &Sigma; n&Delta;G&deg;<sub>f</sub>(products) &minus; &Sigma; n&Delta;G&deg;<sub>f</sub>(reactants)</strong></p>' +
            '<ul>' +
            '<li>&Delta;G&deg;<sub>f</sub> for elements in their standard state = 0 (same convention as &Delta;H&deg;<sub>f</sub>).</li>' +
            '<li>This provides an alternative route to &Delta;G&deg; when you have tabulated &Delta;G&deg;<sub>f</sub> values instead of &Delta;H&deg; and &Delta;S&deg;.</li>' +
            '</ul>' +
            '<p>Both methods (&Delta;H&deg; &minus; T&Delta;S&deg; and the &Delta;G&deg;<sub>f</sub> summation) should give the same answer at 298 K for the same reaction.</p>',
          keyPoints: [
            'ΔG°rxn = Σ nΔG°f(products) − Σ nΔG°f(reactants).',
            'ΔG°f for elements in standard state = 0.',
            'This is a third method to find ΔG° (alongside ΔH° − TΔS° and −RT ln K).'
          ],
          formulae: [
            '\\[ \\Delta G^{\\circ}_{\\text{rxn}} = \\sum n\\,\\Delta G^{\\circ}_f(\\text{products}) - \\sum n\\,\\Delta G^{\\circ}_f(\\text{reactants}) \\]'
          ],
          workedExamples: [
            {
              title: 'ΔG°rxn from ΔG°f Values',
              body:
                '<p><strong>Problem:</strong> Calculate &Delta;G&deg; for: CH<sub>4</sub>(g) + 2 O<sub>2</sub>(g) &rarr; CO<sub>2</sub>(g) + 2 H<sub>2</sub>O(g). Given: &Delta;G&deg;<sub>f</sub> CH<sub>4</sub>(g) = &minus;50.5, O<sub>2</sub>(g) = 0, CO<sub>2</sub>(g) = &minus;394.4, H<sub>2</sub>O(g) = &minus;228.6 kJ/mol.</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>&Delta;G&deg; = [1(&minus;394.4) + 2(&minus;228.6)] &minus; [1(&minus;50.5) + 2(0)]</p>' +
                '<p>&Delta;G&deg; = [&minus;851.6] &minus; [&minus;50.5] = &minus;801.1 kJ/mol</p>' +
                '<p>The large negative value confirms that combustion of methane is strongly thermodynamically favorable.</p>'
            }
          ],
          warnings: [
            'Do not mix methods — either use ΔG°f summation OR ΔH° − TΔS°, but not both in the same calculation.',
            'ΔG°f = 0 for elements in their standard state (just like ΔH°f = 0).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'ΔG°rxn = Σ nΔG°f(products) − Σ nΔG°f(reactants). ΔG°f = 0 for standard-state elements. Same pattern as ΔH°rxn from ΔH°f values.',
          keyPoints: [
            'Three ways to get ΔG°: (1) ΔH° − TΔS°, (2) ΣΔG°f products − ΣΔG°f reactants, (3) −RT ln K.',
            'All three give the same ΔG° at the same conditions.'
          ],
          formulae: [
            '\\( \\Delta G^{\\circ}_{\\text{rxn}} = \\sum n\\,\\Delta G^{\\circ}_f(\\text{products}) - \\sum n\\,\\Delta G^{\\circ}_f(\\text{reactants}) \\)'
          ]
        }
      },
      examTips: [
        'Know all three methods for calculating ΔG° — the AP exam may give you data suited for any of them.',
        'FRQ graders award credit for clearly showing the products-minus-reactants setup.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 6: ΔH°f summation is the same pattern', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.5: ΔG° = −RT ln K is the third route to ΔG°', sec: 'content' }
      ],
      questionIds: ['U9Q010']
    },

    /* ============================================================
       9.4  Thermodynamic and Kinetic Control
       ============================================================ */
    {
      id: 'U9.4.1', code: 'Topic 9.4', subtopic: '9.4',
      subtopicTitle: 'Thermodynamic and Kinetic Control', section: 'unit9',
      concepts: ['energy', 'kinetics'],
      statement:
        'A thermodynamically favorable reaction (ΔG < 0) is not necessarily fast. Thermodynamics predicts whether a reaction CAN occur, while kinetics determines how quickly it does occur. A reaction can be favorable but kinetically slow due to a high activation energy.',
      content: {
        textbook: {
          explanation:
            '<p>One of the most important distinctions in chemistry is between <strong>thermodynamics</strong> (can it happen?) and <strong>kinetics</strong> (how fast does it happen?):</p>' +
            '<ul>' +
            '<li><strong>Thermodynamics (&Delta;G):</strong> Tells us the direction of the energy "downhill" — whether products are more stable than reactants.</li>' +
            '<li><strong>Kinetics (E<sub>a</sub>, rate):</strong> Tells us how fast the reaction proceeds — determined by the activation energy barrier.</li>' +
            '</ul>' +
            '<h4>Key Examples</h4>' +
            '<ul>' +
            '<li><strong>Diamond &rarr; graphite:</strong> Thermodynamically favorable (&Delta;G &lt; 0) but incredibly slow at room temperature due to an enormous activation energy. Diamonds are "kinetically stable" — they persist because the reaction is too slow to observe.</li>' +
            '<li><strong>Combustion of gasoline:</strong> Strongly favorable (&Delta;G &lt;&lt; 0) but requires a spark (activation energy) to initiate. Once started, the exothermic reaction provides enough energy to overcome E<sub>a</sub> for subsequent molecules.</li>' +
            '<li><strong>Rusting of iron:</strong> Favorable but slow under normal conditions — kinetically limited.</li>' +
            '</ul>' +
            '<p>A <strong>catalyst</strong> lowers E<sub>a</sub> and speeds up the reaction, but it does <strong>not change &Delta;G</strong>. It makes a thermodynamically favorable reaction faster but cannot make an unfavorable reaction favorable.</p>',
          keyPoints: [
            'Thermodynamics: Can the reaction happen? (ΔG sign)',
            'Kinetics: How fast does it happen? (Ea, rate law)',
            'ΔG < 0 does NOT mean the reaction is fast.',
            'Catalysts lower Ea but do not change ΔG.',
            'Kinetically stable ≠ thermodynamically stable.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Thermodynamic vs Kinetic Stability',
              body:
                '<p><strong>Problem:</strong> Explain why a mixture of H<sub>2</sub>(g) and O<sub>2</sub>(g) can persist at room temperature indefinitely, even though the formation of water is thermodynamically favorable (&Delta;G&deg; = &minus;474 kJ/mol).</p>' +
                '<p><strong>Solution:</strong> The reaction 2 H<sub>2</sub>(g) + O<sub>2</sub>(g) &rarr; 2 H<sub>2</sub>O(l) has a large negative &Delta;G&deg;, meaning it is strongly favorable. However, the reaction has a very high activation energy barrier. At room temperature, virtually no molecules have enough kinetic energy to overcome this barrier. The mixture is <strong>kinetically stable</strong> (persists because the reaction is too slow) even though it is <strong>thermodynamically unstable</strong> (products are lower in energy). A spark or catalyst (like Pt) provides the energy to overcome E<sub>a</sub> and initiate the reaction.</p>'
            }
          ],
          warnings: [
            'Never use "spontaneous" to mean "fast." On the AP exam, a thermodynamically favorable reaction may take millions of years.',
            'A catalyst cannot make ΔG negative — it only speeds up reactions that are already thermodynamically favorable in the forward direction (and also speeds up the reverse).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Thermodynamics (ΔG): direction/favorability. Kinetics (Ea): speed/rate. Favorable ≠ fast. Catalysts change rate, not ΔG.',
          keyPoints: [
            'Diamond → graphite: favorable but infinitely slow at room T.',
            'Catalysts lower Ea, not ΔG.'
          ],
          formulae: []
        }
      },
      examTips: [
        'The AP exam frequently asks: "A reaction is thermodynamically favorable but does not proceed at a measurable rate. Explain." Answer: high Ea makes the reaction kinetically slow.',
        'Do NOT confuse catalysts changing ΔG — this is a common wrong answer on MCQs.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 5: Kinetics — activation energy, rate laws, catalysts', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.3: ΔG determines favorability; Ea determines rate', sec: 'content' }
      ],
      questionIds: ['U9Q011']
    },

    {
      id: 'U9.4.2', code: 'Topic 9.4', subtopic: '9.4',
      subtopicTitle: 'Thermodynamic and Kinetic Control', section: 'unit9',
      concepts: ['energy', 'kinetics'],
      statement:
        'The thermodynamic product is the more stable product (lower ΔG), while the kinetic product forms faster (lower Ea). Reaction conditions — especially temperature — determine which product predominates.',
      content: {
        textbook: {
          explanation:
            '<p>When a reaction can form two or more different products, which product accumulates depends on whether the reaction is under <strong>kinetic control</strong> or <strong>thermodynamic control</strong>:</p>' +
            '<ul>' +
            '<li><strong>Kinetic product:</strong> Forms faster because the pathway to it has a <em>lower activation energy</em>. Predominates at <strong>lower temperatures</strong> and shorter reaction times.</li>' +
            '<li><strong>Thermodynamic product:</strong> Is more stable (lower Gibbs free energy) but may form more slowly because the pathway has a <em>higher activation energy</em>. Predominates at <strong>higher temperatures</strong> and longer reaction times, where enough energy is available to overcome the larger barrier.</li>' +
            '</ul>' +
            '<p>At low temperature, molecules do not have enough energy to reach the higher-Ea transition state, so the kinetic product dominates. At high temperature, molecules can access both pathways, and the system reaches the more stable thermodynamic product.</p>',
          keyPoints: [
            'Kinetic product: lower Ea, forms faster, favored at low T.',
            'Thermodynamic product: lower ΔG (more stable), favored at high T.',
            'At equilibrium, the thermodynamic product predominates.',
            'Temperature and time determine which product accumulates.'
          ],
          formulae: [],
          workedExamples: [],
          warnings: [
            'This concept is not heavily tested on the AP exam but can appear in FRQ conceptual explanations.',
            'Do not assume the faster-forming product is always the "right" answer — read whether the question asks for kinetic or thermodynamic product.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Kinetic product forms faster (lower Ea), thermodynamic product is more stable (lower ΔG). High T and long time favor thermodynamic product.',
          keyPoints: [
            'Low T → kinetic product; High T → thermodynamic product.',
            'At equilibrium, the thermodynamic product dominates.'
          ],
          formulae: []
        }
      },
      examTips: [
        'If an AP question asks why two different products form at different temperatures, think kinetic vs thermodynamic control.',
        'This topic is lower frequency on the AP exam but can appear as a conceptual question in the MCQ section.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 5: Activation energy and transition states determine kinetic product', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.3: ΔG determines which product is thermodynamically favored', sec: 'content' }
      ],
      questionIds: ['U9Q012']
    },

    /* ============================================================
       9.5  Free Energy and Equilibrium
       ============================================================ */
    {
      id: 'U9.5.1', code: 'Topic 9.5', subtopic: '9.5',
      subtopicTitle: 'Free Energy and Equilibrium', section: 'unit9',
      concepts: ['energy', 'equilibrium'],
      statement:
        'The standard free energy change is related to the equilibrium constant by ΔG° = −RT ln K. This equation connects thermodynamics to equilibrium: when ΔG° < 0, K > 1 (products favored); when ΔG° > 0, K < 1 (reactants favored).',
      content: {
        textbook: {
          explanation:
            '<p>One of the most powerful equations in chemistry links free energy to the equilibrium constant:</p>' +
            '<p style="text-align:center;"><strong>&Delta;G&deg; = &minus;RT ln K</strong></p>' +
            '<ul>' +
            '<li>R = 8.314 J/(mol&middot;K) — the gas constant.</li>' +
            '<li>T = temperature in kelvin.</li>' +
            '<li>K = equilibrium constant (K<sub>p</sub>, K<sub>c</sub>, K<sub>sp</sub>, K<sub>a</sub>, etc.).</li>' +
            '</ul>' +
            '<h4>Relationship between &Delta;G&deg; and K</h4>' +
            '<table border="1" cellpadding="6" style="border-collapse:collapse;text-align:center;">' +
            '<tr><th>&Delta;G&deg;</th><th>K</th><th>Meaning</th></tr>' +
            '<tr><td>&lt; 0</td><td>&gt; 1</td><td>Products favored at equilibrium</td></tr>' +
            '<tr><td>= 0</td><td>= 1</td><td>Neither side favored; roughly equal</td></tr>' +
            '<tr><td>&gt; 0</td><td>&lt; 1</td><td>Reactants favored at equilibrium</td></tr>' +
            '</table>' +
            '<p>A large negative &Delta;G&deg; means a very large K (reaction goes essentially to completion). A large positive &Delta;G&deg; means a very small K (virtually no product at equilibrium).</p>' +
            '<h4>Non-Standard Conditions</h4>' +
            '<p>Under non-standard conditions, the actual free energy change is: <strong>&Delta;G = &Delta;G&deg; + RT ln Q</strong>, where Q is the reaction quotient. At equilibrium, Q = K and &Delta;G = 0.</p>',
          keyPoints: [
            'ΔG° = −RT ln K connects thermodynamics to equilibrium.',
            'ΔG° < 0 ↔ K > 1 (products favored).',
            'ΔG° > 0 ↔ K < 1 (reactants favored).',
            'ΔG° = 0 ↔ K = 1.',
            'At equilibrium: ΔG = 0 (not ΔG°, but ΔG).',
            'R = 8.314 J/(mol·K) — note: joules, not kilojoules!'
          ],
          formulae: [
            '\\[ \\Delta G^{\\circ} = -RT \\ln K \\]',
            '\\[ \\Delta G = \\Delta G^{\\circ} + RT \\ln Q \\]',
            '\\[ \\text{At equilibrium: } \\Delta G = 0 \\text{ and } Q = K \\]'
          ],
          workedExamples: [
            {
              title: 'Calculating K from ΔG°',
              body:
                '<p><strong>Problem:</strong> The standard free energy change for the reaction N<sub>2</sub>O<sub>4</sub>(g) &hArr; 2 NO<sub>2</sub>(g) is &Delta;G&deg; = +4.76 kJ/mol at 298 K. Calculate the equilibrium constant K.</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>&Delta;G&deg; = &minus;RT ln K</p>' +
                '<p>4760 J/mol = &minus;(8.314)(298) ln K &nbsp;&nbsp;[convert kJ to J!]</p>' +
                '<p>4760 = &minus;2477.6 ln K</p>' +
                '<p>ln K = &minus;1.921</p>' +
                '<p>K = e<sup>&minus;1.921</sup> = <strong>0.146</strong></p>' +
                '<p>Since &Delta;G&deg; &gt; 0, we correctly get K &lt; 1, confirming reactants are favored at equilibrium.</p>'
            }
          ],
          warnings: [
            'ΔG° must be in joules when using R = 8.314 J/(mol·K). Convert kJ to J!',
            'Do not confuse ΔG (actual conditions) with ΔG° (standard conditions). ΔG = 0 at equilibrium, but ΔG° ≠ 0 unless K = 1.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'ΔG° = −RT ln K. Negative ΔG° ↔ K > 1. Positive ΔG° ↔ K < 1. Convert kJ to J when using R = 8.314.',
          keyPoints: [
            'At equilibrium: ΔG = 0 (but ΔG° usually ≠ 0).',
            'R = 8.314 J/(mol·K) — always use J, not kJ.'
          ],
          formulae: [
            '\\( \\Delta G^{\\circ} = -RT \\ln K \\)',
            '\\( K = e^{-\\Delta G^{\\circ}/RT} \\)'
          ]
        }
      },
      examTips: [
        'ΔG° = −RT ln K is one of the most frequently tested equations on the AP exam. Practice converting between ΔG° and K.',
        'Common error: forgetting to convert ΔG° from kJ to J. R is in J/(mol·K), so ΔG° must also be in J.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 7: Equilibrium constants K, Kp, Kc, Ksp — all connect to ΔG°', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.8: ΔG° = −nFE° links to electrochemistry', sec: 'content' }
      ],
      questionIds: ['U9Q013', 'U9Q014']
    },

    {
      id: 'U9.5.2', code: 'Topic 9.5', subtopic: '9.5',
      subtopicTitle: 'Free Energy and Equilibrium', section: 'unit9',
      concepts: ['energy', 'equilibrium'],
      statement:
        'The magnitude of K reflects the magnitude of ΔG°: very large K (≫ 1) corresponds to very negative ΔG° (strongly favorable), while very small K (≪ 1) corresponds to very positive ΔG° (strongly unfavorable).',
      content: {
        textbook: {
          explanation:
            '<p>The exponential relationship &Delta;G&deg; = &minus;RT ln K means that <strong>small changes in &Delta;G&deg; correspond to large changes in K</strong>:</p>' +
            '<ul>' +
            '<li>If &Delta;G&deg; = &minus;10 kJ/mol at 298 K: K = e<sup>10000/2478</sup> = e<sup>4.04</sup> &asymp; 57</li>' +
            '<li>If &Delta;G&deg; = &minus;20 kJ/mol at 298 K: K = e<sup>8.07</sup> &asymp; 3200</li>' +
            '<li>If &Delta;G&deg; = &minus;40 kJ/mol at 298 K: K = e<sup>16.14</sup> &asymp; 1.0 &times; 10<sup>7</sup></li>' +
            '</ul>' +
            '<p>Doubling &Delta;G&deg; squares K (approximately). This exponential sensitivity is why reactions with even moderately negative &Delta;G&deg; can have very large equilibrium constants.</p>' +
            '<p>Conversely:</p>' +
            '<ul>' +
            '<li>If &Delta;G&deg; = +10 kJ/mol at 298 K: K &asymp; 0.018 (very small — reactants strongly favored).</li>' +
            '</ul>',
          keyPoints: [
            'The relationship between ΔG° and K is exponential (logarithmic).',
            'Small ΔG° changes → large K changes.',
            'Very negative ΔG° → very large K → reaction essentially goes to completion.',
            'Very positive ΔG° → very small K → very little product at equilibrium.'
          ],
          formulae: [
            '\\[ K = e^{-\\Delta G^{\\circ}/RT} \\]'
          ],
          workedExamples: [
            {
              title: 'Predicting K from the Sign of ΔG°',
              body:
                '<p><strong>Problem:</strong> Without calculating, predict whether K is greater than, less than, or equal to 1 for a reaction with &Delta;G&deg; = &minus;33.0 kJ/mol at 298 K.</p>' +
                '<p><strong>Solution:</strong> Since &Delta;G&deg; &lt; 0, the reaction is thermodynamically favorable. From &Delta;G&deg; = &minus;RT ln K, a negative &Delta;G&deg; requires ln K &gt; 0, which means <strong>K &gt; 1</strong>. Products are favored at equilibrium. In fact, K = e<sup>33000/(8.314 &times; 298)</sup> = e<sup>13.32</sup> &asymp; 6.1 &times; 10<sup>5</sup> — a very large K.</p>'
            }
          ],
          warnings: [],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'K and ΔG° have an exponential relationship. Small ΔG° changes → large K changes. Very negative ΔG° → very large K.',
          keyPoints: [
            'Doubling ΔG° approximately squares K.',
            'Use the sign of ΔG° to quickly predict if K > 1 or K < 1.'
          ],
          formulae: [
            '\\( K = e^{-\\Delta G^{\\circ}/RT} \\)'
          ]
        }
      },
      examTips: [
        'AP MCQs may ask: "If ΔG° is negative, which of the following is true about K?" Answer: K > 1.',
        'You do not always need to calculate K — predicting K > 1 or K < 1 from the sign of ΔG° is often sufficient.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 7: Equilibrium — large K means products heavily favored', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.6: Coupled reactions manipulate effective K', sec: 'content' }
      ],
      questionIds: ['U9Q015']
    },

    {
      id: 'U9.5.3', code: 'Topic 9.5', subtopic: '9.5',
      subtopicTitle: 'Free Energy and Equilibrium', section: 'unit9',
      concepts: ['energy', 'equilibrium'],
      statement:
        'Under non-standard conditions, ΔG = ΔG° + RT ln Q. Comparing Q to K determines the direction toward equilibrium: if Q < K, the forward reaction is favorable (ΔG < 0); if Q > K, the reverse reaction is favorable (ΔG > 0).',
      content: {
        textbook: {
          explanation:
            '<p>Under actual (non-standard) conditions, the free energy change is:</p>' +
            '<p style="text-align:center;"><strong>&Delta;G = &Delta;G&deg; + RT ln Q</strong></p>' +
            '<ul>' +
            '<li>Q is the reaction quotient — the same expression as K but using current (non-equilibrium) concentrations or pressures.</li>' +
            '<li>If <strong>Q &lt; K</strong>: &Delta;G &lt; 0 — the forward reaction is favorable; the system shifts toward products.</li>' +
            '<li>If <strong>Q &gt; K</strong>: &Delta;G &gt; 0 — the reverse reaction is favorable; the system shifts toward reactants.</li>' +
            '<li>If <strong>Q = K</strong>: &Delta;G = 0 — the system is at equilibrium.</li>' +
            '</ul>' +
            '<p>This equation generalizes the equilibrium concept from Unit 7 by assigning a quantitative energy "driving force" to the shift.</p>',
          keyPoints: [
            'ΔG = ΔG° + RT ln Q gives the actual free energy change under any conditions.',
            'Q < K → ΔG < 0 → forward reaction favorable.',
            'Q > K → ΔG > 0 → reverse reaction favorable.',
            'Q = K → ΔG = 0 → at equilibrium.'
          ],
          formulae: [
            '\\[ \\Delta G = \\Delta G^{\\circ} + RT \\ln Q \\]'
          ],
          workedExamples: [],
          warnings: [
            'ΔG (no degree symbol) refers to actual conditions. ΔG° refers to standard conditions. They are different!',
            'At equilibrium, ΔG = 0 but ΔG° is generally not zero (unless K happens to equal 1).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'ΔG = ΔG° + RT ln Q. Compare Q to K: Q < K → forward favorable, Q > K → reverse favorable, Q = K → equilibrium.',
          keyPoints: [
            'ΔG = 0 at equilibrium; ΔG° = 0 only if K = 1.',
            'This connects the Q vs K analysis from Unit 7 to free energy.'
          ],
          formulae: [
            '\\( \\Delta G = \\Delta G^{\\circ} + RT \\ln Q \\)'
          ]
        }
      },
      examTips: [
        'The AP exam may ask you to determine the direction a reaction shifts using Q vs K — ΔG = ΔG° + RT ln Q provides the quantitative basis.',
        'Remember: at equilibrium ΔG = 0, not ΔG°. This distinction is commonly tested.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 7: Q vs K analysis for predicting reaction direction', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.9: Nernst equation is the electrochemical analog of this equation', sec: 'content' }
      ],
      questionIds: ['U9Q016']
    },

    /* ============================================================
       9.6  Coupled Reactions
       ============================================================ */
    {
      id: 'U9.6.1', code: 'Topic 9.6', subtopic: '9.6',
      subtopicTitle: 'Coupled Reactions', section: 'unit9',
      concepts: ['energy', 'coupled-reactions'],
      statement:
        'An unfavorable reaction (ΔG > 0) can be driven forward by coupling it with a favorable reaction (ΔG < 0) that has a sufficiently negative ΔG to make the overall ΔG negative. The free energy changes are additive for coupled reactions.',
      content: {
        textbook: {
          explanation:
            '<p>A thermodynamically unfavorable reaction can be made to proceed if it is <strong>coupled</strong> with a sufficiently favorable reaction:</p>' +
            '<h4>Principle</h4>' +
            '<ul>' +
            '<li>If Reaction 1 has &Delta;G<sub>1</sub> &gt; 0 (unfavorable) and Reaction 2 has &Delta;G<sub>2</sub> &lt; 0 (favorable), the coupled sum has &Delta;G<sub>total</sub> = &Delta;G<sub>1</sub> + &Delta;G<sub>2</sub>.</li>' +
            '<li>If |&Delta;G<sub>2</sub>| &gt; |&Delta;G<sub>1</sub>|, then &Delta;G<sub>total</sub> &lt; 0 and the overall process is favorable.</li>' +
            '<li>The favorable reaction provides the thermodynamic "driving force" to push the unfavorable one forward.</li>' +
            '</ul>' +
            '<h4>Chemical Example</h4>' +
            '<p>Extraction of copper from Cu<sub>2</sub>S:</p>' +
            '<ul>' +
            '<li>Reaction 1: Cu<sub>2</sub>S(s) &rarr; 2 Cu(s) + S(s) &nbsp;&nbsp; &Delta;G&deg; = +86.2 kJ/mol (unfavorable)</li>' +
            '<li>Reaction 2: S(s) + O<sub>2</sub>(g) &rarr; SO<sub>2</sub>(g) &nbsp;&nbsp; &Delta;G&deg; = &minus;300.1 kJ/mol (favorable)</li>' +
            '<li>Overall: Cu<sub>2</sub>S(s) + O<sub>2</sub>(g) &rarr; 2 Cu(s) + SO<sub>2</sub>(g) &nbsp;&nbsp; &Delta;G&deg; = &minus;213.9 kJ/mol (favorable!)</li>' +
            '</ul>' +
            '<p>The strongly favorable oxidation of sulfur drives the otherwise unfavorable decomposition of Cu<sub>2</sub>S.</p>',
          keyPoints: [
            'ΔG values are additive for coupled reactions (Hess\'s law for ΔG).',
            'Coupling works when the favorable reaction\'s |ΔG| exceeds the unfavorable reaction\'s |ΔG|.',
            'The two reactions must share a common intermediate or product.',
            'This is the thermodynamic basis for many industrial and biological processes.'
          ],
          formulae: [
            '\\[ \\Delta G_{\\text{total}} = \\Delta G_1 + \\Delta G_2 < 0 \\quad (\\text{overall favorable}) \\]'
          ],
          workedExamples: [
            {
              title: 'Coupled Reaction Calculation',
              body:
                '<p><strong>Problem:</strong> The reduction of Fe<sub>2</sub>O<sub>3</sub> by carbon monoxide involves two coupled reactions:</p>' +
                '<p>Reaction 1: Fe<sub>2</sub>O<sub>3</sub>(s) &rarr; 2 Fe(s) + 3/2 O<sub>2</sub>(g) &nbsp;&nbsp; &Delta;G&deg; = +742.2 kJ/mol</p>' +
                '<p>Reaction 2: 3 CO(g) + 3/2 O<sub>2</sub>(g) &rarr; 3 CO<sub>2</sub>(g) &nbsp;&nbsp; &Delta;G&deg; = &minus;771.6 kJ/mol</p>' +
                '<p>Calculate &Delta;G&deg; for the overall reaction.</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>Overall: Fe<sub>2</sub>O<sub>3</sub>(s) + 3 CO(g) &rarr; 2 Fe(s) + 3 CO<sub>2</sub>(g)</p>' +
                '<p>&Delta;G&deg;<sub>total</sub> = +742.2 + (&minus;771.6) = &minus;29.4 kJ/mol</p>' +
                '<p>The overall reaction is favorable because the combustion of CO provides enough free energy to drive the reduction of iron oxide.</p>'
            }
          ],
          warnings: [
            'Coupled reactions must share a common species (intermediate) — you cannot just add any two reactions.',
            'Even if ΔG_total < 0, the coupled reaction may still be slow without a catalyst or high temperature.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Couple an unfavorable reaction with a more favorable one so that ΔG_total < 0. Free energies add (Hess\'s law for G). Reactions must share a common intermediate.',
          keyPoints: [
            'ΔG_total = ΔG<sub>1</sub> + ΔG<sub>2</sub>.',
            'The favorable reaction must have |ΔG| > |ΔG| of the unfavorable reaction.'
          ],
          formulae: [
            '\\( \\Delta G_{\\text{total}} = \\Delta G_1 + \\Delta G_2 \\)'
          ]
        }
      },
      examTips: [
        'AP FRQs may give you two reactions and ask you to show that coupling makes the overall process favorable. Just add the ΔG° values.',
        'This concept connects to biological systems (like ATP hydrolysis) — the AP exam occasionally references this.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 6: Hess\'s law — additive property of state functions', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.7: Galvanic cells couple oxidation and reduction half-reactions', sec: 'content' }
      ],
      questionIds: ['U9Q017']
    },

    {
      id: 'U9.6.2', code: 'Topic 9.6', subtopic: '9.6',
      subtopicTitle: 'Coupled Reactions', section: 'unit9',
      concepts: ['energy', 'coupled-reactions'],
      statement:
        'In biological systems, ATP hydrolysis (ΔG° = −30.5 kJ/mol) is the most common coupling reaction, driving otherwise unfavorable biosynthetic reactions forward. This illustrates how living organisms use thermodynamic coupling.',
      content: {
        textbook: {
          explanation:
            '<p>The most famous example of coupled reactions occurs in living cells:</p>' +
            '<h4>ATP Hydrolysis</h4>' +
            '<ul>' +
            '<li>ATP + H<sub>2</sub>O &rarr; ADP + P<sub>i</sub> &nbsp;&nbsp; &Delta;G&deg; = &minus;30.5 kJ/mol</li>' +
            '<li>This strongly favorable reaction is used by cells to drive hundreds of unfavorable reactions: building proteins from amino acids, pumping ions against concentration gradients, contracting muscles.</li>' +
            '</ul>' +
            '<h4>How Coupling Works in Biology</h4>' +
            '<ul>' +
            '<li>An unfavorable biosynthetic reaction (say &Delta;G = +15 kJ/mol) is coupled enzymatically to ATP hydrolysis (&Delta;G = &minus;30.5 kJ/mol).</li>' +
            '<li>Overall &Delta;G = +15 + (&minus;30.5) = &minus;15.5 kJ/mol — the coupled process is favorable.</li>' +
            '<li>The enzyme physically couples the two reactions so that the phosphoryl group transfer from ATP provides the needed energy.</li>' +
            '</ul>' +
            '<p>While the AP Chemistry exam focuses on inorganic examples, understanding ATP coupling demonstrates the universality of thermodynamic principles.</p>',
          keyPoints: [
            'ATP hydrolysis: ΔG° = −30.5 kJ/mol — the universal "energy currency" of cells.',
            'Cells couple ATP hydrolysis to unfavorable reactions to make them proceed.',
            'The principle is identical to inorganic coupled reactions — ΔG values add.',
            'Enzymes serve as catalysts that also physically couple the reactions.'
          ],
          formulae: [
            '\\[ \\ce{ATP + H2O -> ADP + Pi} \\quad (\\Delta G^{\\circ} = -30.5\\,\\text{kJ/mol}) \\]'
          ],
          workedExamples: [],
          warnings: [
            'The AP Chemistry exam rarely asks for specific biological pathways — just understand the principle of coupling.',
            'Do not confuse the role of enzymes (catalysts that lower Ea) with thermodynamic coupling (making ΔG negative).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'ATP hydrolysis (ΔG° = −30.5 kJ/mol) drives unfavorable reactions in cells. Same principle as any coupled reaction: ΔG values add.',
          keyPoints: [
            'ATP is the "energy currency" — its favorable hydrolysis powers cellular work.',
            'Enzymes couple the reactions physically while also lowering Ea.'
          ],
          formulae: []
        }
      },
      examTips: [
        'The AP exam may reference ATP as an example of coupling — know the principle but do not worry about memorizing biological pathways.',
        'If asked for an example of a coupled reaction, ATP hydrolysis is a safe and universally accepted answer.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 5: Enzymes are biological catalysts — they lower Ea', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.6.1: Same principle as inorganic coupled reactions', sec: 'content' }
      ],
      questionIds: ['U9Q018']
    },

    /* ============================================================
       9.7  Galvanic (Voltaic) and Electrolytic Cells
       ============================================================ */
    {
      id: 'U9.7.1', code: 'Topic 9.7', subtopic: '9.7',
      subtopicTitle: 'Galvanic (Voltaic) and Electrolytic Cells', section: 'unit9',
      concepts: ['electrochemistry', 'galvanic-cell'],
      statement:
        'A galvanic (voltaic) cell converts chemical energy into electrical energy through a spontaneous redox reaction. It consists of two half-cells connected by a salt bridge, with oxidation occurring at the anode and reduction at the cathode. Electrons flow through an external circuit from anode to cathode.',
      content: {
        textbook: {
          explanation:
            '<p>A <strong>galvanic (voltaic) cell</strong> produces electrical energy from a spontaneous redox reaction:</p>' +
            '<h4>Components</h4>' +
            '<ul>' +
            '<li><strong>Anode:</strong> The electrode where <strong>oxidation</strong> occurs (loss of electrons). Labeled with a <strong>negative (&minus;)</strong> sign in a galvanic cell. Mnemonic: <em>An Ox</em> (anode = oxidation).</li>' +
            '<li><strong>Cathode:</strong> The electrode where <strong>reduction</strong> occurs (gain of electrons). Labeled with a <strong>positive (+)</strong> sign in a galvanic cell. Mnemonic: <em>Red Cat</em> (reduction = cathode).</li>' +
            '<li><strong>External circuit:</strong> Wire connecting the electrodes through which electrons flow from anode to cathode.</li>' +
            '<li><strong>Salt bridge:</strong> A tube containing an electrolyte solution (e.g., KNO<sub>3</sub>) that allows ion migration to maintain electrical neutrality. Without it, charge buildup would stop the reaction.</li>' +
            '<li><strong>Electrolyte solutions:</strong> Each half-cell contains a solution of ions relevant to its half-reaction.</li>' +
            '</ul>' +
            '<h4>Classic Example: Zn-Cu Cell (Daniell Cell)</h4>' +
            '<ul>' +
            '<li>Anode (oxidation): Zn(s) &rarr; Zn<sup>2+</sup>(aq) + 2e<sup>&minus;</sup></li>' +
            '<li>Cathode (reduction): Cu<sup>2+</sup>(aq) + 2e<sup>&minus;</sup> &rarr; Cu(s)</li>' +
            '<li>Overall: Zn(s) + Cu<sup>2+</sup>(aq) &rarr; Zn<sup>2+</sup>(aq) + Cu(s)</li>' +
            '<li>Electrons flow from Zn anode through the wire to Cu cathode.</li>' +
            '<li>In the salt bridge: anions (NO<sub>3</sub><sup>&minus;</sup>) migrate toward the anode (which is losing positive Zn<sup>2+</sup> into solution), and cations (K<sup>+</sup>) migrate toward the cathode (which is depleting Cu<sup>2+</sup> from solution).</li>' +
            '</ul>' +
            '<h4>Cell Notation</h4>' +
            '<p>Zn(s) | Zn<sup>2+</sup>(aq) || Cu<sup>2+</sup>(aq) | Cu(s)</p>' +
            '<p>Anode on the left, cathode on the right. Single vertical lines separate phases; double vertical lines represent the salt bridge.</p>',
          keyPoints: [
            'Galvanic cell: spontaneous redox → electrical energy (ΔG < 0, E°cell > 0).',
            'Anode = oxidation (− terminal); Cathode = reduction (+ terminal).',
            'Electrons flow from anode to cathode through the external circuit.',
            'Salt bridge maintains electrical neutrality by allowing ion flow.',
            'Cell notation: anode | anode solution || cathode solution | cathode.'
          ],
          formulae: [
            '\\[ \\text{Anode(s)} \\mid \\text{Anode}^{2+}\\text{(aq)} \\| \\text{Cathode}^{2+}\\text{(aq)} \\mid \\text{Cathode(s)} \\]'
          ],
          workedExamples: [
            {
              title: 'Drawing a Galvanic Cell',
              body:
                '<p><strong>Problem:</strong> Describe the galvanic cell for the reaction: Fe(s) + Cu<sup>2+</sup>(aq) &rarr; Fe<sup>2+</sup>(aq) + Cu(s).</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p><strong>Anode (left):</strong> An iron electrode dipped in a solution of FeSO<sub>4</sub>(aq). Fe is oxidized: Fe(s) &rarr; Fe<sup>2+</sup>(aq) + 2e<sup>&minus;</sup>.</p>' +
                '<p><strong>Cathode (right):</strong> A copper electrode dipped in a solution of CuSO<sub>4</sub>(aq). Cu<sup>2+</sup> is reduced: Cu<sup>2+</sup>(aq) + 2e<sup>&minus;</sup> &rarr; Cu(s).</p>' +
                '<p><strong>External circuit:</strong> Wire connects Fe to Cu. Electrons flow from Fe (anode) to Cu (cathode). A voltmeter in the circuit would read E&deg;<sub>cell</sub> = +0.78 V.</p>' +
                '<p><strong>Salt bridge:</strong> Contains KNO<sub>3</sub>. K<sup>+</sup> ions migrate toward the cathode compartment; NO<sub>3</sub><sup>&minus;</sup> ions migrate toward the anode compartment.</p>' +
                '<p><strong>Cell notation:</strong> Fe(s) | Fe<sup>2+</sup>(aq) || Cu<sup>2+</sup>(aq) | Cu(s)</p>'
            }
          ],
          warnings: [
            'In a GALVANIC cell, the anode is negative and cathode is positive. This is REVERSED in an electrolytic cell (anode is positive, cathode is negative).',
            'The salt bridge does NOT allow electrons to flow — only ions. Electrons flow through the external wire only.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Galvanic cell: spontaneous redox produces electricity. Anode = oxidation (−). Cathode = reduction (+). Electrons flow anode → cathode through wire. Salt bridge allows ion flow.',
          keyPoints: [
            'An Ox, Red Cat — anode = oxidation, cathode = reduction.',
            'Salt bridge prevents charge buildup; ions migrate to maintain neutrality.',
            'Cell notation: anode | solution || solution | cathode.'
          ],
          formulae: []
        }
      },
      examTips: [
        'The AP exam LOVES galvanic cell diagrams. Know: which electrode is anode/cathode, direction of electron flow, direction of ion flow in the salt bridge.',
        'Remember: in a GALVANIC cell, anode is (−) and cathode is (+). This is the opposite of electrolytic cells.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 4: Oxidation-reduction reactions — assigning oxidation states', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.8: E°cell from standard reduction potentials', sec: 'content' }
      ],
      questionIds: ['U9Q019', 'U9Q020']
    },

    {
      id: 'U9.7.2', code: 'Topic 9.7', subtopic: '9.7',
      subtopicTitle: 'Galvanic (Voltaic) and Electrolytic Cells', section: 'unit9',
      concepts: ['electrochemistry', 'electrolytic-cell'],
      statement:
        'An electrolytic cell uses electrical energy from an external source to drive a non-spontaneous redox reaction. Oxidation still occurs at the anode and reduction at the cathode, but the polarity of the electrodes is reversed compared to a galvanic cell.',
      content: {
        textbook: {
          explanation:
            '<p>An <strong>electrolytic cell</strong> uses an external power source (battery or power supply) to force a non-spontaneous redox reaction to occur:</p>' +
            '<h4>Key Differences from Galvanic Cells</h4>' +
            '<table border="1" cellpadding="6" style="border-collapse:collapse;text-align:center;">' +
            '<tr><th>Feature</th><th>Galvanic Cell</th><th>Electrolytic Cell</th></tr>' +
            '<tr><td>Reaction type</td><td>Spontaneous (&Delta;G &lt; 0)</td><td>Non-spontaneous (&Delta;G &gt; 0)</td></tr>' +
            '<tr><td>E&deg;<sub>cell</sub></td><td>Positive (+)</td><td>Negative (&minus;)</td></tr>' +
            '<tr><td>Energy conversion</td><td>Chemical &rarr; electrical</td><td>Electrical &rarr; chemical</td></tr>' +
            '<tr><td>Anode sign</td><td>Negative (&minus;)</td><td>Positive (+)</td></tr>' +
            '<tr><td>Cathode sign</td><td>Positive (+)</td><td>Negative (&minus;)</td></tr>' +
            '<tr><td>Salt bridge</td><td>Yes (two separate solutions)</td><td>Often not needed (single solution)</td></tr>' +
            '</table>' +
            '<h4>What Stays the Same</h4>' +
            '<ul>' +
            '<li>Oxidation ALWAYS occurs at the anode (in both cell types).</li>' +
            '<li>Reduction ALWAYS occurs at the cathode (in both cell types).</li>' +
            '<li>Electrons flow from anode to cathode through the external circuit (in both cell types).</li>' +
            '</ul>' +
            '<h4>Common Electrolysis Examples</h4>' +
            '<ul>' +
            '<li><strong>Electrolysis of molten NaCl:</strong> 2 NaCl(l) &rarr; 2 Na(l) + Cl<sub>2</sub>(g). Na<sup>+</sup> is reduced at cathode; Cl<sup>&minus;</sup> is oxidized at anode.</li>' +
            '<li><strong>Electrolysis of aqueous CuSO<sub>4</sub>:</strong> Cu<sup>2+</sup> is reduced at cathode (Cu deposits); water is oxidized at anode (O<sub>2</sub> produced).</li>' +
            '<li><strong>Electroplating:</strong> The object to be plated is the cathode, and the plating metal is the anode.</li>' +
            '</ul>',
          keyPoints: [
            'Electrolytic cell: external energy drives non-spontaneous reaction (ΔG > 0).',
            'Oxidation still at anode, reduction still at cathode — this NEVER changes.',
            'Electrode signs are reversed compared to galvanic cells.',
            'Electrolytic cells often use a single solution (no salt bridge needed).',
            'Applications: electroplating, purifying metals, producing chemicals.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Galvanic vs Electrolytic Cell Identification',
              body:
                '<p><strong>Problem:</strong> A cell is set up with two copper electrodes in CuSO<sub>4</sub> solution, connected to a 9 V battery. Is this galvanic or electrolytic?</p>' +
                '<p><strong>Solution:</strong> This is an <strong>electrolytic cell</strong>. The external battery provides energy to drive the reaction. With identical electrodes (both Cu) and the same solution, there is no spontaneous potential difference. The battery forces Cu<sup>2+</sup> to be reduced at the cathode (Cu deposits) and Cu to be oxidized at the anode (Cu dissolves). This is the basis of <strong>copper electrorefining</strong>.</p>'
            }
          ],
          warnings: [
            'The most common exam mistake: saying oxidation occurs at the cathode. OXIDATION IS ALWAYS AT THE ANODE regardless of cell type.',
            'Do not confuse electrode sign with reaction type. Anode sign differs between galvanic and electrolytic, but oxidation is always at the anode.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Electrolytic cell: external energy drives non-spontaneous reaction. Anode = oxidation (+), Cathode = reduction (−). Electrode signs are opposite of galvanic cell.',
          keyPoints: [
            'Oxidation = anode and Reduction = cathode in ALL cells.',
            'Galvanic: E° > 0, ΔG < 0. Electrolytic: E° < 0, ΔG > 0.'
          ],
          formulae: []
        }
      },
      examTips: [
        'AP exam: "In which type of cell is the anode positive?" Answer: electrolytic cell.',
        'The comparison table between galvanic and electrolytic cells is a perennial exam favorite. Know it cold.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 4: Redox reactions — same half-reactions in both cell types', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.10: Faraday\'s law applies to electrolytic cells', sec: 'content' }
      ],
      questionIds: ['U9Q021']
    },

    {
      id: 'U9.7.3', code: 'Topic 9.7', subtopic: '9.7',
      subtopicTitle: 'Galvanic (Voltaic) and Electrolytic Cells', section: 'unit9',
      concepts: ['electrochemistry'],
      statement:
        'In a galvanic cell, the salt bridge allows ions to migrate between half-cells to maintain electrical neutrality. Cations flow toward the cathode and anions flow toward the anode through the salt bridge.',
      content: {
        textbook: {
          explanation:
            '<p>The <strong>salt bridge</strong> is essential for a galvanic cell to function. Without it, the cell would stop producing current almost immediately:</p>' +
            '<h4>Why the Salt Bridge is Needed</h4>' +
            '<ul>' +
            '<li>At the <strong>anode</strong>, oxidation produces cations (e.g., Zn &rarr; Zn<sup>2+</sup>). The solution gains positive charge.</li>' +
            '<li>At the <strong>cathode</strong>, reduction removes cations (e.g., Cu<sup>2+</sup> &rarr; Cu). The solution loses positive charge.</li>' +
            '<li>Without a salt bridge, charge would build up rapidly, creating an electric field that opposes further electron flow.</li>' +
            '<li>The salt bridge provides a pathway for ions to flow, balancing the charge in each compartment.</li>' +
            '</ul>' +
            '<h4>Ion Flow in the Salt Bridge</h4>' +
            '<ul>' +
            '<li><strong>Anions</strong> (e.g., NO<sub>3</sub><sup>&minus;</sup>) migrate from the salt bridge <strong>toward the anode</strong> to balance the buildup of positive Zn<sup>2+</sup> ions.</li>' +
            '<li><strong>Cations</strong> (e.g., K<sup>+</sup>) migrate from the salt bridge <strong>toward the cathode</strong> to replace the depleted Cu<sup>2+</sup> ions.</li>' +
            '</ul>' +
            '<p>Common salt bridge electrolytes: KNO<sub>3</sub>, KCl, or NaNO<sub>3</sub> — chosen because their ions do not react with the cell components.</p>',
          keyPoints: [
            'Salt bridge maintains electrical neutrality in both half-cells.',
            'Anions flow toward the anode; cations flow toward the cathode.',
            'Without a salt bridge, charge buildup would halt the reaction.',
            'Salt bridge completes the circuit for ion flow (wire is for electron flow).'
          ],
          formulae: [],
          workedExamples: [],
          warnings: [
            'Ions in the salt bridge do NOT carry electrons — they maintain charge balance.',
            'Electrons ONLY flow through the wire, NEVER through the solution or salt bridge.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Salt bridge: anions → anode, cations → cathode. Maintains neutrality. Without it, charge buildup stops the cell.',
          keyPoints: [
            'Electrons flow through the wire; ions flow through the salt bridge.',
            'The salt bridge completes the internal circuit.'
          ],
          formulae: []
        }
      },
      examTips: [
        'AP exam favorite: "What is the purpose of the salt bridge?" Answer: to maintain electrical neutrality in each half-cell by allowing ion migration.',
        'Know the direction of ion flow in the salt bridge — anions toward anode, cations toward cathode.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 3: Ionic compounds dissociate — ions in solution carry charge', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.7.1: Salt bridge is a key component of the galvanic cell', sec: 'content' }
      ],
      questionIds: ['U9Q022']
    },

    /* ============================================================
       9.8  Cell Potential and Free Energy
       ============================================================ */
    {
      id: 'U9.8.1', code: 'Topic 9.8', subtopic: '9.8',
      subtopicTitle: 'Cell Potential and Free Energy', section: 'unit9',
      concepts: ['electrochemistry', 'cell-potential'],
      statement:
        'The standard cell potential is calculated as E°cell = E°cathode − E°anode, using standard reduction potentials from a reference table. A positive E°cell indicates a spontaneous (galvanic) cell; a negative value indicates a non-spontaneous (electrolytic) cell.',
      content: {
        textbook: {
          explanation:
            '<p>Each half-reaction has a <strong>standard reduction potential</strong> (E&deg;) measured relative to the standard hydrogen electrode (SHE), which is defined as E&deg; = 0.00 V.</p>' +
            '<h4>Calculating E&deg;<sub>cell</sub></h4>' +
            '<p style="text-align:center;"><strong>E&deg;<sub>cell</sub> = E&deg;<sub>cathode</sub> &minus; E&deg;<sub>anode</sub></strong></p>' +
            '<ul>' +
            '<li>Both E&deg; values are looked up as <em>reduction</em> potentials. Do <strong>NOT</strong> flip the sign for the anode — the formula already accounts for the reversal.</li>' +
            '<li>E&deg; values are <strong>intensive</strong> — they do NOT change when you multiply a half-reaction by a coefficient. (Doubling the half-reaction does not double E&deg;.)</li>' +
            '</ul>' +
            '<h4>Interpreting E&deg;<sub>cell</sub></h4>' +
            '<ul>' +
            '<li>E&deg;<sub>cell</sub> &gt; 0: Reaction is spontaneous &rarr; galvanic cell.</li>' +
            '<li>E&deg;<sub>cell</sub> &lt; 0: Reaction is non-spontaneous &rarr; would require electrolysis.</li>' +
            '<li>E&deg;<sub>cell</sub> = 0: At equilibrium.</li>' +
            '</ul>' +
            '<h4>Identifying Anode and Cathode</h4>' +
            '<p>The half-reaction with the <strong>more positive (or less negative) E&deg;</strong> occurs as <strong>reduction (cathode)</strong>. The other occurs as <strong>oxidation (anode)</strong>.</p>',
          keyPoints: [
            'E°cell = E°cathode − E°anode (both as reduction potentials).',
            'Do NOT flip signs — the formula handles the reversal.',
            'E° is intensive — does not change with stoichiometric coefficients.',
            'E°cell > 0 → spontaneous (galvanic); E°cell < 0 → non-spontaneous (electrolytic).',
            'More positive E° → better oxidizing agent → acts as cathode.'
          ],
          formulae: [
            '\\[ E^{\\circ}_{\\text{cell}} = E^{\\circ}_{\\text{cathode}} - E^{\\circ}_{\\text{anode}} \\]',
            '\\( E^{\\circ}_{\\text{cell}} > 0 \\): spontaneous; \\( E^{\\circ}_{\\text{cell}} < 0 \\): non-spontaneous'
          ],
          workedExamples: [
            {
              title: 'Calculating E°cell for a Zn-Cu Cell',
              body:
                '<p><strong>Problem:</strong> Calculate E&deg;<sub>cell</sub> for: Zn(s) + Cu<sup>2+</sup>(aq) &rarr; Zn<sup>2+</sup>(aq) + Cu(s). Given: E&deg;(Cu<sup>2+</sup>/Cu) = +0.34 V, E&deg;(Zn<sup>2+</sup>/Zn) = &minus;0.76 V.</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>Cu<sup>2+</sup> is reduced (cathode): E&deg;<sub>cathode</sub> = +0.34 V</p>' +
                '<p>Zn is oxidized (anode): E&deg;<sub>anode</sub> = &minus;0.76 V</p>' +
                '<p>E&deg;<sub>cell</sub> = E&deg;<sub>cathode</sub> &minus; E&deg;<sub>anode</sub> = (+0.34) &minus; (&minus;0.76) = <strong>+1.10 V</strong></p>' +
                '<p>Positive E&deg;<sub>cell</sub> confirms the reaction is spontaneous (galvanic cell).</p>'
            },
            {
              title: 'Determining Which Metal is Oxidized',
              body:
                '<p><strong>Problem:</strong> Given E&deg;(Ag<sup>+</sup>/Ag) = +0.80 V and E&deg;(Ni<sup>2+</sup>/Ni) = &minus;0.26 V, determine which metal is oxidized and calculate E&deg;<sub>cell</sub>.</p>' +
                '<p><strong>Solution:</strong> Ag<sup>+</sup>/Ag has the more positive E&deg;, so Ag<sup>+</sup> is reduced (cathode). Ni is oxidized (anode).</p>' +
                '<p>E&deg;<sub>cell</sub> = +0.80 &minus; (&minus;0.26) = <strong>+1.06 V</strong></p>' +
                '<p>Overall: Ni(s) + 2 Ag<sup>+</sup>(aq) &rarr; Ni<sup>2+</sup>(aq) + 2 Ag(s)</p>' +
                '<p>Note: We multiplied the Ag half-reaction by 2 to balance electrons, but E&deg; does NOT change because it is intensive.</p>'
            }
          ],
          warnings: [
            'NEVER multiply E° by stoichiometric coefficients. E° is intensive (like temperature or density).',
            'The formula is E°cathode − E°anode. Some textbooks write E°cell = E°reduction + E°oxidation (where E°oxidation = −E°reduction) — both give the same answer, but AP uses the subtraction formula.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'E°cell = E°cathode − E°anode. Use reduction potentials from the table. More positive E° = cathode. E° is intensive (do not multiply). Positive E°cell = spontaneous.',
          keyPoints: [
            'Do not flip signs — just subtract: cathode minus anode.',
            'E° does not change when you multiply a half-reaction to balance electrons.'
          ],
          formulae: [
            '\\( E^{\\circ}_{\\text{cell}} = E^{\\circ}_{\\text{cathode}} - E^{\\circ}_{\\text{anode}} \\)'
          ]
        }
      },
      examTips: [
        'The AP exam provides a table of standard reduction potentials. Practice using it quickly — just identify cathode (more positive E°) and anode (less positive E°), then subtract.',
        'Common trap: multiplying E° by coefficients. NEVER do this — E° is intensive.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 4: Balancing redox reactions — half-reaction method', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.8.2: ΔG° = −nFE° connects cell potential to free energy', sec: 'content' }
      ],
      questionIds: ['U9Q023', 'U9Q024']
    },

    {
      id: 'U9.8.2', code: 'Topic 9.8', subtopic: '9.8',
      subtopicTitle: 'Cell Potential and Free Energy', section: 'unit9',
      concepts: ['electrochemistry', 'gibbs-free-energy'],
      statement:
        'The standard free energy change and standard cell potential are related by ΔG° = −nFE°cell, where n is the number of moles of electrons transferred and F is Faraday\'s constant (96,485 C/mol e<sup>−</sup>). This connects electrochemistry to thermodynamics.',
      content: {
        textbook: {
          explanation:
            '<p>The relationship between cell potential and free energy is:</p>' +
            '<p style="text-align:center;"><strong>&Delta;G&deg; = &minus;nFE&deg;<sub>cell</sub></strong></p>' +
            '<ul>' +
            '<li><strong>n</strong> = number of moles of electrons transferred in the balanced redox reaction.</li>' +
            '<li><strong>F</strong> = Faraday\'s constant = 96,485 C/mol e<sup>&minus;</sup> (the charge of one mole of electrons).</li>' +
            '<li><strong>E&deg;<sub>cell</sub></strong> = standard cell potential in volts (V = J/C).</li>' +
            '<li>&Delta;G&deg; comes out in <strong>joules</strong> (convert to kJ by dividing by 1000).</li>' +
            '</ul>' +
            '<h4>Sign Consistency</h4>' +
            '<ul>' +
            '<li>If E&deg;<sub>cell</sub> &gt; 0 (spontaneous), then &Delta;G&deg; &lt; 0 (favorable). &check;</li>' +
            '<li>If E&deg;<sub>cell</sub> &lt; 0 (non-spontaneous), then &Delta;G&deg; &gt; 0 (unfavorable). &check;</li>' +
            '</ul>' +
            '<h4>The Three-Way Connection</h4>' +
            '<p>We now have three interconnected equations:</p>' +
            '<ol>' +
            '<li>&Delta;G&deg; = &Delta;H&deg; &minus; T&Delta;S&deg;</li>' +
            '<li>&Delta;G&deg; = &minus;RT ln K</li>' +
            '<li>&Delta;G&deg; = &minus;nFE&deg;<sub>cell</sub></li>' +
            '</ol>' +
            '<p>These connect thermodynamics (&Delta;H, &Delta;S), equilibrium (K), and electrochemistry (E&deg;) through &Delta;G&deg; as the central hub.</p>',
          keyPoints: [
            'ΔG° = −nFE°cell connects cell potential to free energy.',
            'n = moles of electrons transferred; F = 96,485 C/mol e<sup>−</sup>.',
            'Positive E°cell → negative ΔG° (consistent signs).',
            'ΔG° is the hub connecting ΔH/ΔS, K, and E°cell.',
            'Result is in joules — convert to kJ if needed.'
          ],
          formulae: [
            '\\[ \\Delta G^{\\circ} = -nFE^{\\circ}_{\\text{cell}} \\]',
            '\\[ F = 96{,}485\\,\\text{C/mol e}^- \\quad (\\text{Faraday\'s constant}) \\]',
            '\\[ \\Delta G^{\\circ} = \\Delta H^{\\circ} - T\\Delta S^{\\circ} = -RT\\ln K = -nFE^{\\circ}_{\\text{cell}} \\]'
          ],
          workedExamples: [
            {
              title: 'Calculating ΔG° from E°cell',
              body:
                '<p><strong>Problem:</strong> For the Zn-Cu cell (E&deg;<sub>cell</sub> = +1.10 V), calculate &Delta;G&deg;. The balanced reaction transfers 2 mol e<sup>&minus;</sup>.</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>&Delta;G&deg; = &minus;nFE&deg;<sub>cell</sub></p>' +
                '<p>&Delta;G&deg; = &minus;(2)(96,485)(1.10)</p>' +
                '<p>&Delta;G&deg; = &minus;212,267 J = <strong>&minus;212.3 kJ/mol</strong></p>' +
                '<p>The large negative value confirms this is a strongly favorable reaction.</p>'
            }
          ],
          warnings: [
            'The n in ΔG° = −nFE° comes from the balanced equation. Make sure to balance the redox reaction to find n.',
            'ΔG° = −nFE° gives joules. Divide by 1000 for kJ. The AP exam may expect either unit.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'ΔG° = −nFE°cell. n = mol electrons transferred. F = 96,485 C/mol. Positive E° → negative ΔG°.',
          keyPoints: [
            'This equation is the bridge between electrochemistry and thermodynamics.',
            'Three equations all connect through ΔG°: ΔH−TΔS, −RTlnK, −nFE°.'
          ],
          formulae: [
            '\\( \\Delta G^{\\circ} = -nFE^{\\circ}_{\\text{cell}} \\)',
            '\\( F = 96{,}485\\,\\text{C/mol e}^- \\)'
          ]
        }
      },
      examTips: [
        'AP FRQ graders check that you correctly identify n from the balanced equation. Always show which half-reactions you are using.',
        'The three-way connection (ΔG = ΔH−TΔS = −RTlnK = −nFE°) is a favorite FRQ topic. Know how to navigate between any two quantities.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 9.3: ΔG° = ΔH° − TΔS° is one of the three connected equations', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.5: ΔG° = −RT ln K links equilibrium to cell potential via ΔG°', sec: 'content' }
      ],
      questionIds: ['U9Q025']
    },

    {
      id: 'U9.8.3', code: 'Topic 9.8', subtopic: '9.8',
      subtopicTitle: 'Cell Potential and Free Energy', section: 'unit9',
      concepts: ['electrochemistry', 'cell-potential'],
      statement:
        'Standard reduction potentials indicate the tendency of a species to be reduced. A more positive E° means a stronger oxidizing agent (greater tendency to be reduced). The species with the more positive E° is reduced (cathode) in a galvanic cell.',
      content: {
        textbook: {
          explanation:
            '<p>The <strong>standard reduction potential table</strong> ranks half-reactions by their tendency to undergo reduction:</p>' +
            '<ul>' +
            '<li>Species at the <strong>top of the table</strong> (most positive E&deg;) are the <strong>strongest oxidizing agents</strong> — they are most easily reduced (e.g., F<sub>2</sub>, E&deg; = +2.87 V).</li>' +
            '<li>Species at the <strong>bottom of the table</strong> (most negative E&deg;) are the <strong>strongest reducing agents</strong> — they are most easily oxidized (e.g., Li, E&deg; = &minus;3.04 V).</li>' +
            '</ul>' +
            '<h4>Using the Table</h4>' +
            '<ul>' +
            '<li>Any species on the left of a half-reaction can oxidize any species on the right of a half-reaction <em>below</em> it in the table.</li>' +
            '<li>The further apart two half-reactions are in the table, the larger E&deg;<sub>cell</sub> and the more favorable the reaction.</li>' +
            '</ul>' +
            '<h4>Activity Series Connection</h4>' +
            '<p>The standard reduction potential table is essentially a quantitative version of the activity series from Unit 4. More active metals (lower E&deg;) displace less active metals (higher E&deg;) from solution.</p>',
          keyPoints: [
            'More positive E° → stronger oxidizing agent (wants to be reduced).',
            'More negative E° → stronger reducing agent (wants to be oxidized).',
            'A species can spontaneously oxidize anything below it in the reduction potential table.',
            'The table is a quantitative activity series.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Predicting Spontaneous Reactions from the Table',
              body:
                '<p><strong>Problem:</strong> Will Cu(s) dissolve in 1.0 M HCl? Given: E&deg;(Cu<sup>2+</sup>/Cu) = +0.34 V, E&deg;(H<sup>+</sup>/H<sub>2</sub>) = 0.00 V.</p>' +
                '<p><strong>Solution:</strong> For Cu to dissolve: Cu(s) &rarr; Cu<sup>2+</sup>(aq) + 2e<sup>&minus;</sup> (Cu is oxidized). H<sup>+</sup> would be reduced: 2 H<sup>+</sup>(aq) + 2e<sup>&minus;</sup> &rarr; H<sub>2</sub>(g).</p>' +
                '<p>E&deg;<sub>cell</sub> = E&deg;<sub>cathode</sub> &minus; E&deg;<sub>anode</sub> = 0.00 &minus; (+0.34) = &minus;0.34 V</p>' +
                '<p>Since E&deg;<sub>cell</sub> &lt; 0, the reaction is <strong>not spontaneous</strong>. Cu will not dissolve in HCl. Cu is below H<sub>2</sub> in the activity series, so H<sup>+</sup> is not a strong enough oxidizing agent to oxidize Cu.</p>'
            }
          ],
          warnings: [
            'The standard reduction potential table lists REDUCTION half-reactions. If you need oxidation, reverse the reaction but use E°cathode − E°anode (do not manually flip signs).',
            'E° values apply only under standard conditions (1 M, 1 atm, 25°C). Non-standard conditions require the Nernst equation.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'More positive E° = stronger oxidizing agent. More negative E° = stronger reducing agent. Use the table to predict if a reaction is spontaneous.',
          keyPoints: [
            'A species can oxidize anything below it in the table.',
            'This is the quantitative version of the activity series.'
          ],
          formulae: []
        }
      },
      examTips: [
        'The AP exam provides a reduction potential table. Practice scanning it quickly to identify cathode (more positive) and anode (less positive).',
        'Classic AP question: "Will metal X dissolve in acid?" Use the table to check if E°cell > 0.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 4: Activity series — qualitative version of the reduction potential table', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.8.1: E°cell = E°cathode − E°anode for quantitative analysis', sec: 'content' }
      ],
      questionIds: ['U9Q026']
    },

    /* ============================================================
       9.9  Cell Potential Under Nonstandard Conditions
       ============================================================ */
    {
      id: 'U9.9.1', code: 'Topic 9.9', subtopic: '9.9',
      subtopicTitle: 'Cell Potential Under Nonstandard Conditions', section: 'unit9',
      concepts: ['electrochemistry', 'nernst-equation'],
      statement:
        'The Nernst equation relates the cell potential under non-standard conditions to the standard cell potential and the reaction quotient Q: E = E° − (RT/nF) ln Q. As Q increases (more products), E decreases; as Q approaches K, E approaches zero.',
      content: {
        textbook: {
          explanation:
            '<p>Under non-standard conditions (concentrations &ne; 1 M, pressures &ne; 1 atm), the cell potential changes according to the <strong>Nernst equation</strong>:</p>' +
            '<p style="text-align:center;"><strong>E = E&deg; &minus; (RT/nF) ln Q</strong></p>' +
            '<p>At 25 &deg;C (298 K), this simplifies to:</p>' +
            '<p style="text-align:center;"><strong>E = E&deg; &minus; (0.0257/n) ln Q</strong></p>' +
            '<p>or equivalently using base-10 logarithms:</p>' +
            '<p style="text-align:center;"><strong>E = E&deg; &minus; (0.0592/n) log Q</strong></p>' +
            '<h4>Understanding the Nernst Equation</h4>' +
            '<ul>' +
            '<li>When Q &lt; 1 (excess reactants): ln Q &lt; 0, so E &gt; E&deg;. The cell produces more voltage than standard.</li>' +
            '<li>When Q = 1 (standard conditions): ln Q = 0, so E = E&deg;.</li>' +
            '<li>When Q &gt; 1 (excess products): ln Q &gt; 0, so E &lt; E&deg;. The cell produces less voltage.</li>' +
            '<li>When Q = K (equilibrium): E = 0. The cell is "dead" — no more net reaction.</li>' +
            '</ul>' +
            '<p>This is the electrochemical version of &Delta;G = &Delta;G&deg; + RT ln Q. In fact, dividing both sides of that equation by &minus;nF gives the Nernst equation.</p>',
          keyPoints: [
            'Nernst equation: E = E° − (RT/nF) ln Q.',
            'At 25°C: E = E° − (0.0592/n) log Q.',
            'Q < 1 → E > E° (higher than standard voltage).',
            'Q > 1 → E < E° (lower than standard voltage).',
            'At equilibrium: Q = K and E = 0 (cell is dead).'
          ],
          formulae: [
            '\\[ E = E^{\\circ} - \\frac{RT}{nF}\\ln Q \\]',
            '\\[ E = E^{\\circ} - \\frac{0.0592}{n}\\log Q \\quad (\\text{at 25 °C}) \\]',
            '\\[ \\text{At equilibrium: } E = 0,\\; Q = K \\]'
          ],
          workedExamples: [
            {
              title: 'Nernst Equation Calculation',
              body:
                '<p><strong>Problem:</strong> For the cell Zn(s) | Zn<sup>2+</sup>(0.010 M) || Cu<sup>2+</sup>(2.0 M) | Cu(s), E&deg;<sub>cell</sub> = 1.10 V and n = 2. Calculate E<sub>cell</sub> at 25 &deg;C.</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>Q = [Zn<sup>2+</sup>] / [Cu<sup>2+</sup>] = 0.010 / 2.0 = 0.0050</p>' +
                '<p>E = 1.10 &minus; (0.0592/2) log(0.0050)</p>' +
                '<p>E = 1.10 &minus; (0.0296)(&minus;2.301)</p>' +
                '<p>E = 1.10 + 0.068 = <strong>1.17 V</strong></p>' +
                '<p>The cell potential is higher than E&deg; because Q &lt; 1 (excess reactants drive the reaction harder).</p>'
            }
          ],
          warnings: [
            'Make sure Q is written correctly: products over reactants, each raised to stoichiometric coefficients. Pure solids and liquids are excluded.',
            'At equilibrium, E = 0 (not E°). A dead battery has reached equilibrium.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Nernst equation: E = E° − (0.0592/n) log Q at 25°C. Q < 1 → E > E°. Q = K → E = 0 (dead battery). Derived from ΔG = ΔG° + RT ln Q.',
          keyPoints: [
            'A dead battery = cell at equilibrium = E = 0.',
            'Increasing reactant concentration increases E; increasing product concentration decreases E.'
          ],
          formulae: [
            '\\( E = E^{\\circ} - \\frac{0.0592}{n}\\log Q \\) (at 25 °C)'
          ]
        }
      },
      examTips: [
        'AP exam: if asked "what happens to cell voltage when [Cu<sup>2</sup><sup>+</sup>] increases?" → Q decreases → E increases. Use Le Chatelier or Nernst.',
        'The Nernst equation is provided on the AP formula sheet. Practice plugging in values efficiently.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 9.5: ΔG = ΔG° + RT ln Q — same concept, different variables', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.9.2: Concentration cells are a special Nernst equation application', sec: 'content' }
      ],
      questionIds: ['U9Q027']
    },

    {
      id: 'U9.9.2', code: 'Topic 9.9', subtopic: '9.9',
      subtopicTitle: 'Cell Potential Under Nonstandard Conditions', section: 'unit9',
      concepts: ['electrochemistry', 'nernst-equation'],
      statement:
        'A concentration cell is a galvanic cell where both electrodes are the same metal but the electrolyte concentrations differ. E° = 0, but E > 0 because the Nernst equation accounts for the concentration difference (Q ≠ 1). The cell runs until concentrations equalize.',
      content: {
        textbook: {
          explanation:
            '<p>A <strong>concentration cell</strong> has identical electrodes and half-reactions, but <strong>different concentrations</strong> in each compartment:</p>' +
            '<ul>' +
            '<li>E&deg;<sub>cell</sub> = 0 (same half-reactions, same E&deg; values cancel).</li>' +
            '<li>But E<sub>cell</sub> &ne; 0 because Q &ne; 1.</li>' +
            '<li>The Nernst equation gives: E = 0 &minus; (0.0592/n) log Q = &minus;(0.0592/n) log([dilute]/[concentrated]).</li>' +
            '</ul>' +
            '<h4>How It Works</h4>' +
            '<ul>' +
            '<li>The <strong>dilute side is the anode</strong> (metal dissolves to increase ion concentration).</li>' +
            '<li>The <strong>concentrated side is the cathode</strong> (ions are reduced to decrease ion concentration).</li>' +
            '<li>The cell runs until both concentrations equalize, at which point Q = 1, E = 0, and the cell is dead.</li>' +
            '</ul>' +
            '<p>Concentration cells demonstrate that cells can generate electricity purely from a concentration difference — no different metals needed.</p>',
          keyPoints: [
            'Concentration cell: same electrodes, different concentrations.',
            'E° = 0, but E > 0 from the Nernst equation.',
            'Dilute side = anode (metal dissolves); concentrated side = cathode (ions deposit).',
            'Cell runs until concentrations equalize (Q = 1, E = 0).'
          ],
          formulae: [
            '\\[ E = -\\frac{0.0592}{n}\\log\\frac{[\\text{dilute}]}{[\\text{concentrated}]} \\quad (\\text{at 25 °C}) \\]'
          ],
          workedExamples: [
            {
              title: 'Concentration Cell Calculation',
              body:
                '<p><strong>Problem:</strong> A Cu/Cu<sup>2+</sup> concentration cell has [Cu<sup>2+</sup>] = 0.010 M in one half-cell and [Cu<sup>2+</sup>] = 1.0 M in the other. Calculate E<sub>cell</sub>.</p>' +
                '<p><strong>Solution:</strong> The dilute side (0.010 M) is the anode. The concentrated side (1.0 M) is the cathode. n = 2.</p>' +
                '<p>Q = [anode Cu<sup>2+</sup>] / [cathode Cu<sup>2+</sup>] = 0.010 / 1.0 = 0.010</p>' +
                '<p>E = 0 &minus; (0.0592/2) log(0.010) = &minus;(0.0296)(&minus;2) = <strong>+0.059 V</strong></p>' +
                '<p>The cell produces a small but measurable voltage driven entirely by the concentration difference.</p>'
            }
          ],
          warnings: [
            'Concentration cells always have small voltages (typically < 0.1 V) because E° = 0.',
            'The direction of current in a concentration cell always acts to equalize concentrations — consistent with Le Chatelier.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Concentration cell: same metal, different concentrations. E° = 0 but E > 0. Dilute side = anode. Runs until concentrations equalize.',
          keyPoints: [
            'Uses the Nernst equation with E° = 0.',
            'Consistent with Le Chatelier: system drives toward equal concentrations.'
          ],
          formulae: [
            '\\( E = -\\frac{0.0592}{n}\\log Q \\) where \\( Q = \\frac{[\\text{dilute}]}{[\\text{concentrated}]} \\)'
          ]
        }
      },
      examTips: [
        'Concentration cells appear on the AP exam as conceptual questions. Know: which side is the anode (dilute), direction of electron flow, and that E° = 0.',
        'The key insight: even without different metals, a concentration difference provides a driving force.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 7: Le Chatelier — system shifts to equalize concentrations', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.9.1: Nernst equation — concentration cells are a special case', sec: 'content' }
      ],
      questionIds: ['U9Q028']
    },

    /* ============================================================
       9.10  Electrolysis and Faraday's Law
       ============================================================ */
    {
      id: 'U9.10.1', code: 'Topic 9.10', subtopic: '9.10',
      subtopicTitle: 'Electrolysis and Faraday\'s Law', section: 'unit9',
      concepts: ['electrochemistry', 'electrolysis'],
      statement:
        'Faraday\'s law of electrolysis relates the amount of substance produced or consumed at an electrode to the total electric charge passed: moles of substance = (I × t) / (n × F), where I is current in amperes, t is time in seconds, n is electrons per formula unit, and F is Faraday\'s constant.',
      content: {
        textbook: {
          explanation:
            '<p><strong>Faraday\'s law</strong> provides the quantitative link between electric current and the amount of chemical change at an electrode:</p>' +
            '<h4>Key Relationships</h4>' +
            '<ol>' +
            '<li><strong>Charge = Current &times; Time:</strong> q = I &times; t, where q is in coulombs (C), I is in amperes (A = C/s), and t is in seconds (s).</li>' +
            '<li><strong>Moles of electrons:</strong> mol e<sup>&minus;</sup> = q / F = (I &times; t) / F, where F = 96,485 C/mol e<sup>&minus;</sup>.</li>' +
            '<li><strong>Moles of substance:</strong> Use the stoichiometry of the half-reaction. If the half-reaction requires n electrons per formula unit, then mol substance = mol e<sup>&minus;</sup> / n.</li>' +
            '<li><strong>Mass:</strong> mass = mol substance &times; molar mass.</li>' +
            '</ol>' +
            '<h4>Step-by-Step Faraday\'s Law Calculation</h4>' +
            '<ol>' +
            '<li>Calculate total charge: q = I &times; t (make sure t is in seconds!).</li>' +
            '<li>Calculate moles of electrons: mol e<sup>&minus;</sup> = q / 96,485.</li>' +
            '<li>Use the half-reaction to convert mol e<sup>&minus;</sup> to mol substance.</li>' +
            '<li>Convert mol substance to mass using molar mass.</li>' +
            '</ol>',
          keyPoints: [
            'q = I × t  (charge = current × time).',
            'mol e<sup>−</sup> = q / F  (moles of electrons from charge).',
            'Use stoichiometry of half-reaction to find moles of substance deposited/dissolved.',
            'mass = moles × molar mass.',
            'F = 96,485 C/mol e<sup>−</sup>.'
          ],
          formulae: [
            '\\[ q = I \\times t \\quad (\\text{C} = \\text{A} \\times \\text{s}) \\]',
            '\\[ \\text{mol e}^- = \\frac{q}{F} = \\frac{I \\times t}{96{,}485} \\]',
            '\\[ \\text{mol substance} = \\frac{\\text{mol e}^-}{n} \\]',
            '\\[ m = \\frac{ItM}{nF} \\]'
          ],
          workedExamples: [
            {
              title: 'Mass of Copper Deposited by Electrolysis',
              body:
                '<p><strong>Problem:</strong> How many grams of Cu are deposited when a current of 3.00 A is passed through a CuSO<sub>4</sub> solution for 2.00 hours?</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>Step 1: Convert time: 2.00 h &times; 3600 s/h = 7200 s</p>' +
                '<p>Step 2: Calculate charge: q = I &times; t = 3.00 A &times; 7200 s = 21,600 C</p>' +
                '<p>Step 3: Moles of electrons: mol e<sup>&minus;</sup> = 21,600 / 96,485 = 0.2239 mol e<sup>&minus;</sup></p>' +
                '<p>Step 4: Half-reaction: Cu<sup>2+</sup> + 2e<sup>&minus;</sup> &rarr; Cu(s). So n = 2.</p>' +
                '<p>Step 5: Moles of Cu: 0.2239 / 2 = 0.1119 mol Cu</p>' +
                '<p>Step 6: Mass of Cu: 0.1119 &times; 63.55 g/mol = <strong>7.11 g Cu</strong></p>'
            },
            {
              title: 'Time Required for Electrolysis',
              body:
                '<p><strong>Problem:</strong> How long (in minutes) must a current of 5.00 A be applied to deposit 1.50 g of Ag from a AgNO<sub>3</sub> solution?</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>Half-reaction: Ag<sup>+</sup> + e<sup>&minus;</sup> &rarr; Ag(s). n = 1.</p>' +
                '<p>Moles of Ag: 1.50 / 107.87 = 0.01391 mol Ag</p>' +
                '<p>Moles of e<sup>&minus;</sup>: 0.01391 &times; 1 = 0.01391 mol e<sup>&minus;</sup></p>' +
                '<p>Charge: q = 0.01391 &times; 96,485 = 1342 C</p>' +
                '<p>Time: t = q / I = 1342 / 5.00 = 268 s = <strong>4.47 minutes</strong></p>'
            }
          ],
          warnings: [
            'Time MUST be in seconds when using q = I × t. Convert minutes or hours first!',
            'Always identify n from the half-reaction — it is 1 for Ag<sup>+</sup>, 2 for Cu<sup>2</sup><sup>+</sup>, 3 for Al<sup>3</sup><sup>+</sup>, etc.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Faraday\'s law: q = I×t → mol e<sup>−</sup> = q/F → use stoichiometry → mass = mol × M. F = 96,485 C/mol. Time in seconds!',
          keyPoints: [
            'Four-step process: charge → mol e<sup>−</sup> → mol substance → mass.',
            'n comes from the half-reaction (e.g., Cu<sup>2</sup><sup>+</sup> + 2e<sup>−</sup> → Cu, so n = 2).'
          ],
          formulae: [
            '\\( q = I \\times t \\)',
            '\\( \\text{mol e}^- = \\frac{q}{96{,}485} \\)',
            '\\( \\text{mol substance} = \\frac{\\text{mol e}^-}{n} \\)'
          ]
        }
      },
      examTips: [
        'Faraday\'s law problems are a staple of AP Chemistry FRQs. The calculation is straightforward — practice the four-step chain: charge → mol e<sup>−</sup> → mol substance → mass.',
        'Common error: forgetting to convert time to seconds. Always check units!'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 4: Stoichiometry — mol-to-mass conversions', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.7.2: Electrolytic cells are where Faraday\'s law is applied', sec: 'content' }
      ],
      questionIds: ['U9Q029', 'U9Q030']
    },

    {
      id: 'U9.10.2', code: 'Topic 9.10', subtopic: '9.10',
      subtopicTitle: 'Electrolysis and Faraday\'s Law', section: 'unit9',
      concepts: ['electrochemistry', 'electrolysis'],
      statement:
        'In electrolysis of aqueous solutions, water may be oxidized or reduced instead of the dissolved ions. Water is oxidized at the anode (producing O<sub>2</sub>) when the dissolved anion has a more negative E° for oxidation, and water is reduced at the cathode (producing H<sub>2</sub>) when the dissolved cation has a more negative E° for reduction.',
      content: {
        textbook: {
          explanation:
            '<p>When electrolyzing <strong>aqueous solutions</strong> (not molten salts), water itself can participate in the electrode reactions:</p>' +
            '<h4>At the Cathode (Reduction)</h4>' +
            '<ul>' +
            '<li>If the dissolved cation has a <strong>more positive E&deg;</strong> than water reduction (E&deg; = &minus;0.83 V at pH 7), the <strong>cation is reduced</strong>. Example: Cu<sup>2+</sup> (E&deg; = +0.34 V) is reduced in preference to water.</li>' +
            '<li>If the dissolved cation has a <strong>more negative E&deg;</strong> than water, <strong>water is reduced</strong>: 2 H<sub>2</sub>O + 2e<sup>&minus;</sup> &rarr; H<sub>2</sub>(g) + 2 OH<sup>&minus;</sup>(aq). Example: Na<sup>+</sup> (E&deg; = &minus;2.71 V) cannot be reduced from aqueous solution — H<sub>2</sub> forms instead.</li>' +
            '</ul>' +
            '<h4>At the Anode (Oxidation)</h4>' +
            '<ul>' +
            '<li>If the dissolved anion is easily oxidized (like Cl<sup>&minus;</sup>, Br<sup>&minus;</sup>, I<sup>&minus;</sup>), the <strong>anion is oxidized</strong>.</li>' +
            '<li>If the dissolved anion is difficult to oxidize (like SO<sub>4</sub><sup>2&minus;</sup>, NO<sub>3</sub><sup>&minus;</sup>), <strong>water is oxidized</strong>: 2 H<sub>2</sub>O &rarr; O<sub>2</sub>(g) + 4 H<sup>+</sup>(aq) + 4e<sup>&minus;</sup>.</li>' +
            '</ul>' +
            '<p>This is why you cannot electrolyze NaCl(aq) to get Na metal — you get H<sub>2</sub>(g) at the cathode instead. To get Na metal, you must electrolyze <strong>molten</strong> NaCl.</p>',
          keyPoints: [
            'In aqueous electrolysis, water may be oxidized or reduced instead of dissolved ions.',
            'More positive E° → reduced at cathode in preference to water.',
            'Cations with very negative E° (Na<sup>+</sup>, K<sup>+</sup>, Al<sup>3</sup><sup>+</sup>) cannot be reduced from aqueous solution.',
            'Halide ions are typically oxidized at the anode; water is oxidized if the anion is hard to oxidize.',
            'Molten salt electrolysis avoids competing water reactions.'
          ],
          formulae: [
            '\\[ \\ce{2 H2O + 2e- -> H2(g) + 2 OH-(aq)} \\quad (\\text{cathode}) \\]',
            '\\[ \\ce{2 H2O -> O2(g) + 4 H+(aq) + 4e-} \\quad (\\text{anode}) \\]'
          ],
          workedExamples: [
            {
              title: 'Predicting Electrolysis Products',
              body:
                '<p><strong>Problem:</strong> Predict the products at each electrode when aqueous NiSO<sub>4</sub> is electrolyzed.</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p><strong>Cathode:</strong> Ni<sup>2+</sup> (E&deg; = &minus;0.26 V) vs water reduction (E&deg; &asymp; &minus;0.83 V). Ni<sup>2+</sup> has the more positive E&deg;, so <strong>Ni is deposited</strong>: Ni<sup>2+</sup> + 2e<sup>&minus;</sup> &rarr; Ni(s).</p>' +
                '<p><strong>Anode:</strong> SO<sub>4</sub><sup>2&minus;</sup> is very hard to oxidize. Water is oxidized instead: 2 H<sub>2</sub>O &rarr; <strong>O<sub>2</sub>(g)</strong> + 4 H<sup>+</sup> + 4e<sup>&minus;</sup>.</p>'
            }
          ],
          warnings: [
            'The competing water reactions are the most common source of errors in electrolysis predictions.',
            'In practice, overvoltage (extra voltage needed due to kinetic barriers) can change which species reacts — but the AP exam uses standard E° values.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Aqueous electrolysis: water may compete with dissolved ions. More positive E° wins at cathode. Easily oxidized ions (halides) win at anode. Na<sup>+</sup>, K<sup>+</sup> cannot be reduced from water.',
          keyPoints: [
            'Compare E° of dissolved ion vs water to predict the product.',
            'Use molten salt electrolysis for very reactive metals (Na, K, Al).'
          ],
          formulae: [
            '\\( \\ce{2 H2O + 2e- -> H2 + 2 OH-} \\) (cathode)',
            '\\( \\ce{2 H2O -> O2 + 4 H+ + 4e-} \\) (anode)'
          ]
        }
      },
      examTips: [
        'AP FRQ may ask: "What gas is produced at the anode during electrolysis of aqueous Na<sub>2</sub>SO<sub>4</sub>?" Answer: O<sub>2</sub> (from water oxidation, since SO<sub>4</sub><sup>2</sup><sup>−</sup> is not easily oxidized).',
        'Know the common cases: Cu<sup>2</sup><sup>+</sup> deposits from solution, Na<sup>+</sup> does not (H<sub>2</sub> forms instead).'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 9.8: Standard reduction potentials determine competing reactions', sec: 'content' },
        { color: 'purple', label: '→ Topic 9.10.1: Faraday\'s law calculates how much product forms', sec: 'content' }
      ],
      questionIds: ['U9Q031']
    }
  ]
};

/* ── Attach to global DB ── */
window.DB = window.DB || {};
if (!window.DB.u9labs) window.DB.u9labs = [];
