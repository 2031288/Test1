// Unit 5 — Kinetics (FULL CONTENT)
// AP Chemistry CED Topics 5.1–5.11  |  Exam Weight: 7–9%
window.DB_U5_CONTENT = {
  metadata: {
    id: 'unit5',
    title: 'Unit 5',
    longTitle: 'Unit 5 — Kinetics',
    description: 'Reaction rates, rate laws, integrated rate laws, reaction mechanisms, collision theory, energy profiles, and catalysis. This unit explores how fast reactions occur and the molecular-level details of the pathway from reactants to products.',
    guidingQuestion: 'What factors determine how fast a reaction occurs, and how can we describe the pathway from reactants to products?',
    examWeight: '7-9%',
    subtopics: [
      /* 5.1 */
      { id: 'U5.1', code: '5.1', title: 'Reaction Rates',
        learningObjectives: ['TRA-3.A'],
        understandings: ['U5.1.1', 'U5.1.2'],
        blocks: [{ id: 'B5.1', code: '5.1', title: 'Reaction Rates', understandings: ['U5.1.1', 'U5.1.2'] }]
      },
      /* 5.2 */
      { id: 'U5.2', code: '5.2', title: 'Introduction to Rate Law',
        learningObjectives: ['TRA-3.B', 'TRA-3.C'],
        understandings: ['U5.2.1', 'U5.2.2', 'U5.2.3'],
        blocks: [{ id: 'B5.2', code: '5.2', title: 'Introduction to Rate Law', understandings: ['U5.2.1', 'U5.2.2', 'U5.2.3'] }]
      },
      /* 5.3 */
      { id: 'U5.3', code: '5.3', title: 'Concentration Changes Over Time',
        learningObjectives: ['TRA-3.C'],
        understandings: ['U5.3.1', 'U5.3.2', 'U5.3.3'],
        blocks: [{ id: 'B5.3', code: '5.3', title: 'Concentration Changes Over Time', understandings: ['U5.3.1', 'U5.3.2', 'U5.3.3'] }]
      },
      /* 5.4 */
      { id: 'U5.4', code: '5.4', title: 'Elementary Reactions',
        learningObjectives: ['TRA-4.A'],
        understandings: ['U5.4.1', 'U5.4.2'],
        blocks: [{ id: 'B5.4', code: '5.4', title: 'Elementary Reactions', understandings: ['U5.4.1', 'U5.4.2'] }]
      },
      /* 5.5 */
      { id: 'U5.5', code: '5.5', title: 'Collision Model',
        learningObjectives: ['TRA-4.B'],
        understandings: ['U5.5.1', 'U5.5.2'],
        blocks: [{ id: 'B5.5', code: '5.5', title: 'Collision Model', understandings: ['U5.5.1', 'U5.5.2'] }]
      },
      /* 5.6 */
      { id: 'U5.6', code: '5.6', title: 'Reaction Energy Profile',
        learningObjectives: ['TRA-4.C'],
        understandings: ['U5.6.1', 'U5.6.2'],
        blocks: [{ id: 'B5.6', code: '5.6', title: 'Reaction Energy Profile', understandings: ['U5.6.1', 'U5.6.2'] }]
      },
      /* 5.7 */
      { id: 'U5.7', code: '5.7', title: 'Introduction to Reaction Mechanisms',
        learningObjectives: ['TRA-5.A'],
        understandings: ['U5.7.1', 'U5.7.2'],
        blocks: [{ id: 'B5.7', code: '5.7', title: 'Introduction to Reaction Mechanisms', understandings: ['U5.7.1', 'U5.7.2'] }]
      },
      /* 5.8 */
      { id: 'U5.8', code: '5.8', title: 'Reaction Mechanism and Rate Law',
        learningObjectives: ['TRA-5.B'],
        understandings: ['U5.8.1', 'U5.8.2', 'U5.8.3'],
        blocks: [{ id: 'B5.8', code: '5.8', title: 'Reaction Mechanism and Rate Law', understandings: ['U5.8.1', 'U5.8.2', 'U5.8.3'] }]
      },
      /* 5.9 */
      { id: 'U5.9', code: '5.9', title: 'Steady-State Approximation',
        learningObjectives: ['TRA-5.C'],
        understandings: ['U5.9.1', 'U5.9.2'],
        blocks: [{ id: 'B5.9', code: '5.9', title: 'Steady-State Approximation', understandings: ['U5.9.1', 'U5.9.2'] }]
      },
      /* 5.10 */
      { id: 'U5.10', code: '5.10', title: 'Multistep Reaction Energy Profile',
        learningObjectives: ['TRA-5.D'],
        understandings: ['U5.10.1', 'U5.10.2'],
        blocks: [{ id: 'B5.10', code: '5.10', title: 'Multistep Reaction Energy Profile', understandings: ['U5.10.1', 'U5.10.2'] }]
      },
      /* 5.11 */
      { id: 'U5.11', code: '5.11', title: 'Catalysis',
        learningObjectives: ['TRA-5.E'],
        understandings: ['U5.11.1', 'U5.11.2'],
        blocks: [{ id: 'B5.11', code: '5.11', title: 'Catalysis', understandings: ['U5.11.1', 'U5.11.2'] }]
      }
    ]
  },

  understandings: [
    /* ============================================================
       TOPIC 5.1 — Reaction Rates
       ============================================================ */
    {
      id: 'U5.1.1', code: 'Topic 5.1', subtopic: '5.1',
      subtopicTitle: 'Reaction Rates', section: 'unit5',
      concepts: ['transformations', 'tra'],
      statement: 'The rate of a reaction is the change in concentration of a reactant or product per unit time. Rates can be expressed as average rates over an interval or instantaneous rates at a specific moment.',
      content: {
        textbook: {
          explanation: '<p>The <b>rate of a chemical reaction</b> measures how quickly reactant concentrations decrease or product concentrations increase over time. For the general reaction:</p><p style="text-align:center;"><b>aA + bB &rarr; cC + dD</b></p><p>The rate can be expressed in terms of any species:</p><p style="text-align:center;">Rate = &minus;(1/a)(&Delta;[A]/&Delta;t) = &minus;(1/b)(&Delta;[B]/&Delta;t) = +(1/c)(&Delta;[C]/&Delta;t) = +(1/d)(&Delta;[D]/&Delta;t)</p><p>The negative sign for reactants accounts for their decreasing concentration, while products increase. The stoichiometric coefficients normalize the rate so that the same numerical value is obtained regardless of which species is monitored.</p><p><b>Average rate</b> is calculated over a finite time interval &Delta;t. As &Delta;t becomes very small, the average rate approaches the <b>instantaneous rate</b>, which is the slope of the tangent line to the concentration-vs-time curve at a specific point.</p><p>The instantaneous rate at t = 0 is called the <b>initial rate</b> and is particularly important because at t = 0 the concentrations are known exactly (no products have formed, no reverse reaction occurs), making it the cleanest measurement for determining rate laws.</p>',
          keyPoints: [
            'Rate = change in concentration per unit time (mol L<sup>−</sup><sup>1</sup> s<sup>−</sup><sup>1</sup> or M/s).',
            'Reactant rates carry a negative sign; product rates are positive.',
            'Stoichiometric coefficients are used to relate rates of different species.',
            'Average rate is measured over Δt; instantaneous rate is the tangent slope at a point.',
            'Initial rate (at t = 0) is the most useful for determining rate laws.'
          ],
          formulae: [
            '\\[ \\text{Rate} = -\\frac{1}{a}\\frac{\\Delta[A]}{\\Delta t} = +\\frac{1}{c}\\frac{\\Delta[C]}{\\Delta t} \\]',
            '\\[ \\text{Instantaneous rate} = -\\frac{d[A]}{dt} \\]'
          ],
          workedExamples: [
            {
              title: 'Relating Rates of Different Species',
              body: '<p><b>Q:</b> For the reaction 2 NO(g) + O<sub>2</sub>(g) &rarr; 2 NO<sub>2</sub>(g), if &Delta;[O<sub>2</sub>]/&Delta;t = &minus;0.024 M/s, what is the rate of appearance of NO<sub>2</sub>?</p><p><b>A:</b> Rate = &minus;&Delta;[O<sub>2</sub>]/&Delta;t = 0.024 M/s. Since the stoichiometric ratio of O<sub>2</sub> to NO<sub>2</sub> is 1 : 2, the rate of appearance of NO<sub>2</sub> = 2 &times; 0.024 = <b>0.048 M/s</b>.</p><p>Check: &minus;(1/2)(&Delta;[NO]/&Delta;t) = &minus;(1/1)(&Delta;[O<sub>2</sub>]/&Delta;t) = +(1/2)(&Delta;[NO<sub>2</sub>]/&Delta;t). So &Delta;[NO<sub>2</sub>]/&Delta;t = 2 &times; 0.024 = 0.048 M/s. &#10003;</p>'
            }
          ],
          warnings: [
            'Always include stoichiometric coefficients when comparing rates of different species — a common AP error is to forget the 1/coefficient factor.',
            'Units of rate are always concentration per time (M/s, mol L<sup>−</sup><sup>1</sup> s<sup>−</sup><sup>1</sup>), never just mol/s (unless volume is constant and specified).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Rate = change in concentration per unit time. Use stoichiometric coefficients to relate rates of different species. Instantaneous rate = slope of tangent to [X] vs t curve.',
          keyPoints: [
            'Reactant rates are negative (decreasing); product rates are positive.',
            'Initial rate is measured at t = 0 and is the cleanest for rate law determination.',
            'Rate is always a positive quantity; the negative sign for reactants makes it so.'
          ],
          formulae: [
            '\\[ \\text{Rate} = -\\frac{1}{a}\\frac{\\Delta[A]}{\\Delta t} = +\\frac{1}{c}\\frac{\\Delta[C]}{\\Delta t} \\]'
          ]
        }
      },
      examTips: [
        'On the AP exam, you may be given a concentration-vs-time graph and asked to determine the instantaneous rate at a given time — draw the tangent line and calculate its slope.',
        'When comparing rates of different species, always account for stoichiometry. The rate of disappearance of a reactant with coefficient 2 is twice the overall reaction rate.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 5.2: Rate law formalizes how rate depends on concentration', sec: 'content' },
        { color: 'blue', label: '\u2192 Unit 4: Balanced equations provide the stoichiometric ratios', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 6: Thermodynamics determines whether a reaction occurs, kinetics determines how fast', sec: 'content' }
      ],
      questionIds: ['U5Q001', 'U5Q002']
    },
    {
      id: 'U5.1.2', code: 'Topic 5.1', subtopic: '5.1',
      subtopicTitle: 'Reaction Rates', section: 'unit5',
      concepts: ['transformations', 'tra'],
      statement: 'Factors that affect reaction rate include concentration of reactants, temperature, surface area of solid reactants, and the presence of a catalyst.',
      content: {
        textbook: {
          explanation: '<p>Several factors influence how fast a reaction proceeds:</p><ul><li><b>Concentration:</b> Higher concentrations of reactants generally increase the rate because there are more particles per unit volume, leading to more frequent collisions.</li><li><b>Temperature:</b> Increasing temperature increases the average kinetic energy of particles. More particles exceed the activation energy threshold, and collisions are more energetic. As a rough guideline, many reaction rates approximately double for every 10 &deg;C increase.</li><li><b>Surface area:</b> For reactions involving solids, grinding a solid into smaller pieces increases the surface area exposed to the other reactant(s), increasing the collision frequency and thus the rate.</li><li><b>Catalyst:</b> A catalyst provides an alternative reaction pathway with lower activation energy. It speeds up the reaction without being consumed. Catalysts are covered in detail in Topic 5.11.</li><li><b>Nature of reactants:</b> Some reactions are inherently faster (e.g., ionic reactions in solution are nearly instantaneous) while others are slow (e.g., reactions requiring bond rearrangement in covalent molecules).</li></ul>',
          keyPoints: [
            'Increasing concentration increases collision frequency and rate.',
            'Increasing temperature increases both collision frequency and the fraction of collisions with sufficient energy.',
            'Greater surface area of solids increases the rate.',
            'Catalysts lower Ea and speed up the reaction.',
            'The nature of the reactants (ionic vs covalent, bond strengths) also affects rate.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Predicting the Effect of Changes on Rate',
              body: '<p><b>Q:</b> For the reaction Mg(s) + 2 HCl(aq) &rarr; MgCl<sub>2</sub>(aq) + H<sub>2</sub>(g), predict how the rate changes when: (a) Mg ribbon is replaced by Mg powder; (b) [HCl] is doubled; (c) the temperature is decreased by 20 °C.</p><p><b>A:</b> (a) Mg powder has much greater surface area &rarr; rate increases significantly. (b) Doubling [HCl] increases collision frequency &rarr; rate increases (the exact factor depends on the order with respect to HCl). (c) Lowering temperature decreases average KE and collision frequency &rarr; rate decreases (roughly by a factor of 4 if the rule-of-thumb doubling per 10 °C applies).</p>'
            }
          ],
          warnings: [
            'The "doubling per 10 °C" rule is only a rough approximation — actual temperature dependence varies by reaction and is described quantitatively by the Arrhenius equation.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Four main factors affect rate: concentration, temperature, surface area, and catalysts. All work by influencing collision frequency and/or collision energy.',
          keyPoints: [
            'Higher concentration → more collisions → faster rate.',
            'Higher temperature → more energetic collisions and more particles exceeding Ea → faster rate.',
            'Powdered solids react faster than chunks due to greater surface area.',
            'Catalysts provide an alternative pathway with lower Ea.'
          ],
          formulae: []
        }
      },
      examTips: [
        'AP FRQs often ask you to explain why a change increases the rate at the molecular level — always connect to collision theory (frequency and energy of collisions).',
        'Be precise: say "a greater fraction of collisions have energy ≥ Ea," not just "molecules move faster."'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 5.5: Collision model provides the theoretical basis for these factors', sec: 'content' },
        { color: 'blue', label: '\u2192 Topic 5.11: Catalysis — detailed treatment of how catalysts work', sec: 'content' }
      ],
      questionIds: ['U5Q003']
    },

    /* ============================================================
       TOPIC 5.2 — Introduction to Rate Law
       ============================================================ */
    {
      id: 'U5.2.1', code: 'Topic 5.2', subtopic: '5.2',
      subtopicTitle: 'Introduction to Rate Law', section: 'unit5',
      concepts: ['transformations', 'tra'],
      statement: 'The rate law expresses the rate as the product of a rate constant k and reactant concentrations each raised to an experimentally determined exponent (order).',
      content: {
        textbook: {
          explanation: '<p>For a reaction aA + bB &rarr; products, the <b>rate law</b> (or rate equation) has the general form:</p><p style="text-align:center;"><b>Rate = k[A]<sup>m</sup>[B]<sup>n</sup></b></p><p>where:</p><ul><li><b>k</b> is the <b>rate constant</b>, a proportionality factor that depends on temperature (and has units that vary with the overall order).</li><li><b>m</b> and <b>n</b> are the <b>orders</b> of the reaction with respect to A and B, respectively.</li><li>The <b>overall order</b> = m + n.</li></ul><p><b>Key points about orders:</b></p><ul><li>Orders are determined <b>experimentally</b>, not from stoichiometric coefficients (unless the reaction is an elementary step).</li><li>Orders can be 0, 1, 2, or even fractional.</li><li><b>Zero order</b> in a reactant means the rate does not depend on that reactant\'s concentration.</li><li><b>First order</b> means the rate is directly proportional to the concentration.</li><li><b>Second order</b> means the rate is proportional to the square of the concentration.</li></ul><p><b>Units of k</b> depend on the overall order:</p><ul><li>Zero order: k has units of M s<sup>&minus;1</sup></li><li>First order: k has units of s<sup>&minus;1</sup></li><li>Second order: k has units of M<sup>&minus;1</sup> s<sup>&minus;1</sup></li></ul>',
          keyPoints: [
            'Rate = k[A]^m[B]^n — orders m, n are determined experimentally.',
            'Orders are NOT the same as stoichiometric coefficients (except for elementary steps).',
            'Overall order = sum of individual orders.',
            'k depends on temperature; its units depend on the overall order.',
            'Zero-order: rate independent of concentration; first-order: rate ∝ [A]; second-order: rate ∝ [A]<sup>2</sup>.'
          ],
          formulae: [
            '\\[ \\text{Rate} = k[A]^m[B]^n \\]',
            '\\[ \\text{Overall order} = m + n \\]',
            'Units of \\( k \\): \\( \\text{M}^{1-n} \\cdot \\text{s}^{-1} \\) where \\( n \\) = overall order'
          ],
          workedExamples: [
            {
              title: 'Identifying Units of k',
              body: '<p><b>Q:</b> A reaction is second order overall (Rate = k[A][B]). What are the units of k?</p><p><b>A:</b> Rate has units of M/s. [A][B] has units of M &times; M = M<sup>2</sup>. So k = Rate / [A][B] = (M/s) / M<sup>2</sup> = <b>M<sup>&minus;1</sup> s<sup>&minus;1</sup></b> (or L mol<sup>&minus;1</sup> s<sup>&minus;1</sup>).</p>'
            }
          ],
          warnings: [
            'The biggest mistake students make on the AP exam is assuming that the exponents in the rate law equal the coefficients from the balanced equation. They do NOT unless the reaction is a single elementary step.',
            'Product concentrations NEVER appear in a rate law (for the forward reaction).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Rate law: Rate = k[A]^m[B]^n. Orders are experimental, not from coefficients. k depends on T; its units depend on overall order.',
          keyPoints: [
            'Zero order in X means rate does not change when [X] changes.',
            'First order in X means doubling [X] doubles the rate.',
            'Second order in X means doubling [X] quadruples the rate.',
            'Products never appear in a rate law.'
          ],
          formulae: [
            '\\[ \\text{Rate} = k[A]^m[B]^n \\]'
          ]
        }
      },
      examTips: [
        'Always check: if the question says "elementary reaction," you CAN write the rate law from stoichiometry. Otherwise, you need experimental data.',
        'Know the units of k for each order — the AP exam frequently tests this.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 5.3: Integrated rate laws relate [A] to time for each order', sec: 'content' },
        { color: 'blue', label: '\u2192 Topic 5.4: For elementary steps, exponents DO equal stoichiometric coefficients', sec: 'content' }
      ],
      questionIds: ['U5Q004', 'U5Q005']
    },
    {
      id: 'U5.2.2', code: 'Topic 5.2', subtopic: '5.2',
      subtopicTitle: 'Introduction to Rate Law', section: 'unit5',
      concepts: ['transformations', 'tra'],
      statement: 'The method of initial rates uses data from multiple experiments to determine the order with respect to each reactant.',
      content: {
        textbook: {
          explanation: '<p>The <b>method of initial rates</b> is the primary experimental technique for determining reaction orders. The procedure involves:</p><ol><li>Running multiple experiments in which the initial concentration of one reactant is changed while all others are held constant.</li><li>Measuring the initial rate for each experiment.</li><li>Comparing the ratio of rates to the ratio of concentrations to determine the order.</li></ol><p><b>Mathematical approach:</b> Compare two experiments where only [A] changes:</p><p style="text-align:center;">Rate<sub>2</sub>/Rate<sub>1</sub> = ([A]<sub>2</sub>/[A]<sub>1</sub>)<sup>m</sup></p><p>Solve for m by taking logarithms if needed:</p><p style="text-align:center;">m = log(Rate<sub>2</sub>/Rate<sub>1</sub>) / log([A]<sub>2</sub>/[A]<sub>1</sub>)</p><p>Once all orders are known, substitute any experiment\'s data into Rate = k[A]<sup>m</sup>[B]<sup>n</sup> to solve for k.</p>',
          keyPoints: [
            'Change one reactant concentration at a time; hold all others constant.',
            'Compare the factor change in rate to the factor change in concentration.',
            'If rate doubles when [A] doubles → first order in A.',
            'If rate quadruples when [A] doubles → second order in A.',
            'If rate does not change when [A] doubles → zero order in A.',
            'Once orders are known, solve for k using any single experiment.'
          ],
          formulae: [
            '\\[ \\frac{\\text{Rate}_2}{\\text{Rate}_1} = \\left(\\frac{[A]_2}{[A]_1}\\right)^m \\]',
            '\\[ m = \\frac{\\log(\\text{Rate}_2/\\text{Rate}_1)}{\\log([A]_2/[A]_1)} \\]'
          ],
          workedExamples: [
            {
              title: 'Method of Initial Rates — Full Worked Example',
              body: '<p><b>Q:</b> For A + B &rarr; products, the following data were collected:</p><table border="1" cellpadding="4"><tr><th>Exp</th><th>[A] (M)</th><th>[B] (M)</th><th>Initial Rate (M/s)</th></tr><tr><td>1</td><td>0.10</td><td>0.10</td><td>2.0 &times; 10<sup>&minus;3</sup></td></tr><tr><td>2</td><td>0.20</td><td>0.10</td><td>8.0 &times; 10<sup>&minus;3</sup></td></tr><tr><td>3</td><td>0.10</td><td>0.20</td><td>2.0 &times; 10<sup>&minus;3</sup></td></tr></table><p>Determine the rate law and the value of k.</p><p><b>A:</b></p><p><b>Step 1 — Order in A:</b> Compare Exp 1 and 2 ([B] constant):<br>Rate<sub>2</sub>/Rate<sub>1</sub> = 8.0 &times; 10<sup>&minus;3</sup> / 2.0 &times; 10<sup>&minus;3</sup> = 4.0<br>[A]<sub>2</sub>/[A]<sub>1</sub> = 0.20 / 0.10 = 2.0<br>4.0 = 2.0<sup>m</sup> &rarr; m = 2 (second order in A)</p><p><b>Step 2 — Order in B:</b> Compare Exp 1 and 3 ([A] constant):<br>Rate<sub>3</sub>/Rate<sub>1</sub> = 2.0 &times; 10<sup>&minus;3</sup> / 2.0 &times; 10<sup>&minus;3</sup> = 1.0<br>[B]<sub>3</sub>/[B]<sub>1</sub> = 0.20 / 0.10 = 2.0<br>1.0 = 2.0<sup>n</sup> &rarr; n = 0 (zero order in B)</p><p><b>Step 3 — Rate law:</b> Rate = k[A]<sup>2</sup></p><p><b>Step 4 — Find k:</b> Using Exp 1: 2.0 &times; 10<sup>&minus;3</sup> = k(0.10)<sup>2</sup><br>k = 2.0 &times; 10<sup>&minus;3</sup> / 0.010 = <b>0.20 M<sup>&minus;1</sup> s<sup>&minus;1</sup></b></p>'
            },
            {
              title: 'Method of Initial Rates — Non-Integer Order Hint',
              body: '<p><b>Q:</b> If tripling [A] causes the rate to increase by a factor of 3, what is the order in A?</p><p><b>A:</b> 3 = 3<sup>m</sup>, so m = 1 (first order). If instead the rate increased by a factor of 9, then 9 = 3<sup>m</sup>, so m = 2. If the rate increased by a factor of 5.2, then m = log(5.2)/log(3) &asymp; 1.5 — a fractional order (rare on AP but possible).</p>'
            }
          ],
          warnings: [
            'Make sure you compare experiments where only ONE reactant changes. If two reactants change simultaneously, you cannot isolate individual orders.',
            'On AP FRQs, show your work clearly: write the ratio equation, substitute values, and solve. Points are awarded for process, not just the answer.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Method of initial rates: compare experiments where one [reactant] changes. Rate ratio = concentration ratio raised to the order. Then solve for k.',
          keyPoints: [
            'Doubling [A] → rate × 1 = 0th order; × 2 = 1st; × 4 = 2nd; × 8 = 3rd.',
            'Use log ratios for non-obvious factors.',
            'Always verify k is consistent across all experiments.'
          ],
          formulae: [
            '\\[ \\frac{\\text{Rate}_2}{\\text{Rate}_1} = \\left(\\frac{[A]_2}{[A]_1}\\right)^m \\]',
            '\\[ m = \\frac{\\log(\\text{Rate}_2/\\text{Rate}_1)}{\\log([A]_2/[A]_1)} \\]'
          ]
        }
      },
      examTips: [
        'The method of initial rates is one of the MOST tested topics on the AP exam, in both MCQ and FRQ. Practice until the process is automatic.',
        'On FRQs, always show your rate ratio and concentration ratio explicitly — do not just state the order without justification.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 5.8: Rate laws from mechanisms must be consistent with experimental rate law', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 9: Equilibrium constant relates forward and reverse rate constants', sec: 'content' }
      ],
      questionIds: ['U5Q006', 'U5Q007', 'U5Q008']
    },
    {
      id: 'U5.2.3', code: 'Topic 5.2', subtopic: '5.2',
      subtopicTitle: 'Introduction to Rate Law', section: 'unit5',
      concepts: ['transformations', 'tra'],
      statement: 'The rate constant k is specific to a given reaction at a given temperature and encodes information about activation energy and molecular orientation requirements.',
      content: {
        textbook: {
          explanation: '<p>The <b>rate constant k</b> is a fundamental quantity in kinetics that depends on:</p><ul><li><b>Temperature</b> — k increases with temperature (quantified by the Arrhenius equation, Topic 5.5).</li><li><b>Activation energy</b> — reactions with lower E<sub>a</sub> have larger k values.</li><li><b>Molecular orientation (frequency factor)</b> — reactions requiring precise orientation have smaller k values.</li></ul><p>k does <b>not</b> depend on concentration. For a given reaction at a fixed temperature, k is constant regardless of reactant concentrations.</p><p>The <b>units of k</b> vary with the overall reaction order to ensure the rate always has units of M/s:</p><table border="1" cellpadding="4"><tr><th>Overall Order</th><th>Units of k</th></tr><tr><td>0</td><td>M s<sup>&minus;1</sup></td></tr><tr><td>1</td><td>s<sup>&minus;1</sup></td></tr><tr><td>2</td><td>M<sup>&minus;1</sup> s<sup>&minus;1</sup></td></tr><tr><td>3</td><td>M<sup>&minus;2</sup> s<sup>&minus;1</sup></td></tr></table>',
          keyPoints: [
            'k depends on temperature and the nature of the reaction, NOT on concentrations.',
            'Larger k means faster reaction at the same concentrations.',
            'Units of k ensure rate always comes out in M/s.',
            'k encodes both Ea (energy barrier) and A (frequency/orientation factor).'
          ],
          formulae: [
            'Units of \\( k = \\text{M}^{1-n} \\cdot \\text{s}^{-1} \\) where \\( n \\) = overall order'
          ],
          workedExamples: [],
          warnings: [
            'If a question says "the rate constant doubles," it means temperature has changed — not concentration.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'k depends on temperature and reaction identity. k does NOT depend on concentration. Units of k vary with overall order.',
          keyPoints: [
            'Zero order: k in M/s; first order: k in s<sup>−</sup><sup>1</sup>; second order: k in M<sup>−</sup><sup>1</sup>s<sup>−</sup><sup>1</sup>.',
            'A large k means a fast reaction (at given T).'
          ],
          formulae: []
        }
      },
      examTips: [
        'If an AP question gives k with units of s<sup>−</sup><sup>1</sup>, the reaction is first order overall. Use the units of k to determine order.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 5.5/5.6: Arrhenius equation relates k to Ea and temperature', sec: 'content' }
      ],
      questionIds: ['U5Q009']
    },

    /* ============================================================
       TOPIC 5.3 — Concentration Changes Over Time
       ============================================================ */
    {
      id: 'U5.3.1', code: 'Topic 5.3', subtopic: '5.3',
      subtopicTitle: 'Concentration Changes Over Time', section: 'unit5',
      concepts: ['transformations', 'tra'],
      statement: 'Integrated rate laws relate reactant concentration to time. For zero-order: [A] = [A]<sub>0</sub> − kt; for first-order: ln[A] = ln[A]<sub>0</sub> − kt; for second-order: 1/[A] = 1/[A]<sub>0</sub> + kt.',
      content: {
        textbook: {
          explanation: '<p><b>Integrated rate laws</b> are derived by integrating the differential rate law. They allow you to calculate concentrations at any time t, or to determine the order of a reaction from experimental data.</p><h4>Zero-Order Reaction: Rate = k</h4><p>Integrated form: <b>[A] = [A]<sub>0</sub> &minus; kt</b></p><p>This is the equation of a straight line: plotting <b>[A] vs t</b> gives a straight line with slope = &minus;k and y-intercept = [A]<sub>0</sub>.</p><h4>First-Order Reaction: Rate = k[A]</h4><p>Integrated form: <b>ln[A] = ln[A]<sub>0</sub> &minus; kt</b></p><p>Plotting <b>ln[A] vs t</b> gives a straight line with slope = &minus;k and y-intercept = ln[A]<sub>0</sub>.</p><h4>Second-Order Reaction: Rate = k[A]<sup>2</sup></h4><p>Integrated form: <b>1/[A] = 1/[A]<sub>0</sub> + kt</b></p><p>Plotting <b>1/[A] vs t</b> gives a straight line with slope = +k and y-intercept = 1/[A]<sub>0</sub>.</p><p><b>Graphical method for determining order:</b> Plot all three graphs ([A] vs t, ln[A] vs t, 1/[A] vs t). The one that gives a straight line reveals the order.</p>',
          keyPoints: [
            'Each order has a unique integrated form that yields a linear plot.',
            'Zero order: [A] vs t is linear (slope = −k).',
            'First order: ln[A] vs t is linear (slope = −k).',
            'Second order: 1/[A] vs t is linear (slope = +k).',
            'The graphical method is the most reliable way to determine order from concentration-time data.'
          ],
          formulae: [
            'Zero order: \\( [A] = [A]_0 - kt \\)',
            'First order: \\( \\ln[A] = \\ln[A]_0 - kt \\)',
            'Second order: \\( \\frac{1}{[A]} = \\frac{1}{[A]_0} + kt \\)'
          ],
          workedExamples: [
            {
              title: 'Determining Order from Graphs',
              body: '<p><b>Q:</b> The following data were collected for the decomposition of N<sub>2</sub>O<sub>5</sub>:</p><table border="1" cellpadding="4"><tr><th>Time (s)</th><th>[N<sub>2</sub>O<sub>5</sub>] (M)</th><th>ln[N<sub>2</sub>O<sub>5</sub>]</th><th>1/[N<sub>2</sub>O<sub>5</sub>] (M<sup>−</sup><sup>1</sup>)</th></tr><tr><td>0</td><td>0.100</td><td>−2.303</td><td>10.0</td></tr><tr><td>50</td><td>0.0707</td><td>−2.650</td><td>14.1</td></tr><tr><td>100</td><td>0.0500</td><td>−2.996</td><td>20.0</td></tr><tr><td>200</td><td>0.0250</td><td>−3.689</td><td>40.0</td></tr><tr><td>300</td><td>0.0125</td><td>−4.382</td><td>80.0</td></tr></table><p><b>A:</b> Plotting [N<sub>2</sub>O<sub>5</sub>] vs t gives a curve (not linear), so not zero order. Plotting ln[N<sub>2</sub>O<sub>5</sub>] vs t gives a straight line with slope = &minus;0.00693 s<sup>&minus;1</sup>. Therefore, the reaction is <b>first order</b> with k = 6.93 &times; 10<sup>&minus;3</sup> s<sup>&minus;1</sup>.</p><p>Verification: The 1/[N<sub>2</sub>O<sub>5</sub>] vs t plot is not linear (the values 10, 14.1, 20, 40, 80 are not equally spaced), confirming it is not second order.</p>'
            },
            {
              title: 'Calculating Concentration at a Given Time',
              body: '<p><b>Q:</b> For a first-order reaction with k = 0.045 s<sup>&minus;1</sup> and [A]<sub>0</sub> = 0.80 M, find [A] at t = 30 s.</p><p><b>A:</b> ln[A] = ln(0.80) &minus; (0.045)(30) = &minus;0.2231 &minus; 1.35 = &minus;1.573<br>[A] = e<sup>&minus;1.573</sup> = <b>0.207 M</b></p>'
            }
          ],
          warnings: [
            'The integrated rate laws on the AP exam reference table only apply to reactions with a single reactant (or pseudo-first-order conditions). For two-reactant rate laws, the math is more complex.',
            'Do not confuse slope signs: zero-order and first-order plots have negative slopes (−k), while the second-order plot has a positive slope (+k).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Three integrated rate laws: [A] vs t (0th), ln[A] vs t (1st), 1/[A] vs t (2nd). Whichever plot is linear tells you the order. Slope gives k.',
          keyPoints: [
            'Zero and first-order slopes are −k; second-order slope is +k.',
            'Use these equations to calculate [A] at any time t.',
            'The graphical method is commonly tested on the AP exam.'
          ],
          formulae: [
            '\\( [A] = [A]_0 - kt \\) (zero order)',
            '\\( \\ln[A] = \\ln[A]_0 - kt \\) (first order)',
            '\\( \\frac{1}{[A]} = \\frac{1}{[A]_0} + kt \\) (second order)'
          ]
        }
      },
      examTips: [
        'AP frequently gives you data and asks which plot (of three) is linear. Be systematic — calculate all three transformed values and check linearity.',
        'You are given these equations on the AP equation sheet, but you must know WHICH equation goes with WHICH order.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 5.2: Differential rate law is the starting point; integrated form comes from calculus', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 9: First-order kinetics appear in radioactive decay (nuclear chemistry)', sec: 'content' }
      ],
      questionIds: ['U5Q010', 'U5Q011']
    },
    {
      id: 'U5.3.2', code: 'Topic 5.3', subtopic: '5.3',
      subtopicTitle: 'Concentration Changes Over Time', section: 'unit5',
      concepts: ['transformations', 'tra'],
      statement: 'The half-life (t<sub>1</sub>/<sub>2</sub>) is the time required for a reactant concentration to decrease to half its initial value. For first-order reactions, t<sub>1</sub>/<sub>2</sub> = 0.693/k and is independent of initial concentration.',
      content: {
        textbook: {
          explanation: '<p>The <b>half-life</b> (t<sub>1/2</sub>) is the time it takes for [A] to drop to [A]<sub>0</sub>/2. Each order has a different half-life expression:</p><h4>Zero-Order:</h4><p style="text-align:center;">t<sub>1/2</sub> = [A]<sub>0</sub> / (2k)</p><p>Half-life <b>decreases</b> as the reaction proceeds because [A]<sub>0</sub> in the formula refers to the concentration at the start of each half-life interval.</p><h4>First-Order:</h4><p style="text-align:center;">t<sub>1/2</sub> = 0.693 / k = ln 2 / k</p><p>Half-life is <b>constant</b> — it does not depend on concentration. This is the hallmark of first-order kinetics and is the type most commonly tested on the AP exam. Radioactive decay follows first-order kinetics.</p><h4>Second-Order:</h4><p style="text-align:center;">t<sub>1/2</sub> = 1 / (k[A]<sub>0</sub>)</p><p>Half-life <b>increases</b> as the reaction proceeds (as [A] decreases, the next half-life gets longer).</p>',
          keyPoints: [
            'First-order half-life = ln 2 / k = 0.693/k — constant, independent of [A]<sub>0</sub>.',
            'Zero-order half-life = [A]<sub>0</sub>/(2k) — decreases over time.',
            'Second-order half-life = 1/(k[A]<sub>0</sub>) — increases over time.',
            'A constant half-life is diagnostic of first-order kinetics.',
            'After n half-lives, [A] = [A]<sub>0</sub> / 2<sup>n</sup>.'
          ],
          formulae: [
            'First order: \\( t_{1/2} = \\frac{0.693}{k} \\)',
            'Zero order: \\( t_{1/2} = \\frac{[A]_0}{2k} \\)',
            'Second order: \\( t_{1/2} = \\frac{1}{k[A]_0} \\)',
            'After \\( n \\) half-lives: \\( [A] = \\frac{[A]_0}{2^n} \\)'
          ],
          workedExamples: [
            {
              title: 'Half-Life Calculations',
              body: '<p><b>Q:</b> A first-order reaction has k = 0.0350 s<sup>&minus;1</sup>. (a) What is t<sub>1/2</sub>? (b) How long until 87.5% of the reactant has decomposed?</p><p><b>A:</b> (a) t<sub>1/2</sub> = 0.693 / 0.0350 = <b>19.8 s</b>.</p><p>(b) 87.5% decomposed means 12.5% remains. 12.5% = 100%/8 = 100%/2<sup>3</sup>. So 3 half-lives have elapsed: t = 3 &times; 19.8 = <b>59.4 s</b>.</p>'
            }
          ],
          warnings: [
            'Only first-order half-life is concentration-independent. Do not apply t<sub>1</sub>/<sub>2</sub> = 0.693/k to zero or second-order reactions.',
            'Radioactive decay half-lives use the same first-order formula: t<sub>1</sub>/<sub>2</sub> = 0.693/λ where λ is the decay constant.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'First-order half-life = 0.693/k (constant). Zero-order t<sub>1</sub>/<sub>2</sub> decreases over time. Second-order t<sub>1</sub>/<sub>2</sub> increases over time. After n half-lives: [A] = [A]<sub>0</sub>/2<sup>n</sup>.',
          keyPoints: [
            'Constant half-life = first-order reaction.',
            'Use 2<sup>n</sup> shortcut: after 3 half-lives, 1/8 remains.',
            'AP exam frequently tests first-order half-life problems.'
          ],
          formulae: [
            '\\( t_{1/2} = \\frac{0.693}{k} \\) (first order)',
            '\\( [A] = \\frac{[A]_0}{2^n} \\) (after \\( n \\) half-lives)'
          ]
        }
      },
      examTips: [
        'If a question says "the half-life is independent of concentration," the reaction is first order — no calculation needed.',
        'For MCQs: after 2 half-lives, 25% remains; after 3 half-lives, 12.5% remains; after 4, 6.25%. Memorize these fractions.'
      ],
      connections: [
        { color: 'blue', label: '\u2192 Unit 1: Radioactive decay follows first-order kinetics with the same half-life formula', sec: 'content' }
      ],
      questionIds: ['U5Q012', 'U5Q013']
    },
    {
      id: 'U5.3.3', code: 'Topic 5.3', subtopic: '5.3',
      subtopicTitle: 'Concentration Changes Over Time', section: 'unit5',
      concepts: ['transformations', 'tra'],
      statement: 'Pseudo-first-order conditions arise when one reactant is in large excess, simplifying a multi-reactant rate law to first-order behavior.',
      content: {
        textbook: {
          explanation: '<p>When a rate law involves two or more reactants, the integrated rate law becomes complex. A common experimental technique is to use <b>pseudo-first-order conditions</b> (also called the isolation method).</p><p>For Rate = k[A][B], if [B]<sub>0</sub> &Gt; [A]<sub>0</sub> (e.g., 100&times; excess), then [B] barely changes during the reaction and is approximately constant. The rate law simplifies to:</p><p style="text-align:center;">Rate = k\'[A] where k\' = k[B]<sub>0</sub></p><p>The reaction appears first-order in A, so ln[A] vs t is linear with slope = &minus;k\'. The true k is found by dividing k\' by [B]<sub>0</sub>.</p>',
          keyPoints: [
            'Excess of one reactant makes its concentration approximately constant.',
            'The rate law simplifies to pseudo-first-order.',
            'k\' (pseudo rate constant) = k × [excess reactant].',
            'This is the standard technique for studying multi-reactant kinetics.'
          ],
          formulae: [
            '\\[ k\' = k[B]_0 \\]\nPseudo-first-order rate constant'
          ],
          workedExamples: [],
          warnings: [
            'Pseudo-first-order is a simplification — it only works when the excess reactant concentration does not change appreciably (>10× excess typically).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Pseudo-first-order: use large excess of one reactant so its [conc] is ~constant. Rate law simplifies, and you can use first-order integrated rate law.',
          keyPoints: [
            'k_observed = k × [excess reactant].',
            'Common in enzyme kinetics and crystal violet experiments.'
          ],
          formulae: []
        }
      },
      examTips: [
        'The crystal violet/NaOH experiment on the AP exam uses pseudo-first-order conditions — NaOH is in large excess so the reaction appears first order in crystal violet.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 5.11: Enzyme kinetics often use pseudo-first-order analysis', sec: 'content' }
      ],
      questionIds: []
    },

    /* ============================================================
       TOPIC 5.4 — Elementary Reactions
       ============================================================ */
    {
      id: 'U5.4.1', code: 'Topic 5.4', subtopic: '5.4',
      subtopicTitle: 'Elementary Reactions', section: 'unit5',
      concepts: ['transformations', 'tra'],
      statement: 'An elementary reaction occurs in a single step with a single transition state. Its molecularity (unimolecular, bimolecular, or termolecular) describes how many reactant particles are involved.',
      content: {
        textbook: {
          explanation: '<p>An <b>elementary reaction</b> (or elementary step) is a reaction that occurs in a single collision event — there are no intermediates between reactants and products. Most overall reactions are NOT elementary; they consist of a sequence of elementary steps called a mechanism.</p><p><b>Molecularity</b> describes the number of reactant particles involved in an elementary step:</p><ul><li><b>Unimolecular:</b> A single molecule rearranges or decomposes. Example: O<sub>3</sub> &rarr; O<sub>2</sub> + O. Rate = k[O<sub>3</sub>].</li><li><b>Bimolecular:</b> Two molecules collide. Example: NO + O<sub>3</sub> &rarr; NO<sub>2</sub> + O<sub>2</sub>. Rate = k[NO][O<sub>3</sub>].</li><li><b>Termolecular:</b> Three molecules collide simultaneously. Extremely rare because three-body collisions are unlikely. Example: 2 NO + O<sub>2</sub> &rarr; 2 NO<sub>2</sub>. Rate = k[NO]<sup>2</sup>[O<sub>2</sub>].</li></ul>',
          keyPoints: [
            'Elementary reactions occur in one step — no intermediates.',
            'Molecularity = number of reactant molecules in the elementary step.',
            'Unimolecular: 1 molecule, first order. Bimolecular: 2 molecules, second order. Termolecular: 3 molecules (very rare), third order.',
            'Molecularity is always a positive integer (1, 2, or 3); it cannot be zero or fractional.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Molecularity and Rate Law',
              body: '<p><b>Q:</b> An elementary step is: Cl + H<sub>2</sub> &rarr; HCl + H. What is the molecularity and rate law?</p><p><b>A:</b> Two reactant species (Cl and H<sub>2</sub>) &rarr; <b>bimolecular</b>. Rate = k[Cl][H<sub>2</sub>] (exponents equal stoichiometric coefficients because this is elementary).</p>'
            }
          ],
          warnings: [
            'Molecularity applies ONLY to elementary steps, never to overall reactions.',
            'Termolecular steps are so rare that many textbooks consider them negligible — the AP exam rarely tests them.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Elementary reactions: single step, rate law from stoichiometry. Molecularity = number of reactant molecules: unimolecular (1st order), bimolecular (2nd order), termolecular (3rd order, rare).',
          keyPoints: [
            'For elementary steps ONLY, exponents = coefficients.',
            'Molecularity is a theoretical concept; order is experimental.'
          ],
          formulae: []
        }
      },
      examTips: [
        'If the AP exam states "the following elementary reaction," you can write the rate law directly from the equation. This is the ONLY time exponents match coefficients.',
        'Do not confuse molecularity with order — molecularity is for elementary steps only; order is for overall reactions and is always experimental.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 5.7: Mechanisms are sequences of elementary steps', sec: 'content' },
        { color: 'blue', label: '\u2192 Topic 5.8: The rate law of the slow elementary step determines the overall rate law', sec: 'content' }
      ],
      questionIds: ['U5Q014']
    },
    {
      id: 'U5.4.2', code: 'Topic 5.4', subtopic: '5.4',
      subtopicTitle: 'Elementary Reactions', section: 'unit5',
      concepts: ['transformations', 'tra'],
      statement: 'The rate law for an elementary reaction can be written directly from its balanced equation, with the exponents equal to the stoichiometric coefficients of the reactants.',
      content: {
        textbook: {
          explanation: '<p>For an <b>elementary reaction</b> — and ONLY for an elementary reaction — the rate law can be determined directly from the balanced equation. The order with respect to each reactant equals its stoichiometric coefficient in that step.</p><p>Examples:</p><ul><li>A &rarr; products (unimolecular): Rate = k[A]</li><li>A + B &rarr; products (bimolecular): Rate = k[A][B]</li><li>2A &rarr; products (bimolecular): Rate = k[A]<sup>2</sup></li><li>A + B + C &rarr; products (termolecular): Rate = k[A][B][C]</li></ul><p>This property is what makes elementary reactions so useful in kinetics: they provide a direct link between the molecular-level picture and the mathematical rate law.</p>',
          keyPoints: [
            'Elementary step: exponents = stoichiometric coefficients.',
            'This rule does NOT apply to overall (non-elementary) reactions.',
            'This is the fundamental building block for analyzing mechanisms.'
          ],
          formulae: [
            'Elementary step \\( aA + bB \\to \\text{products} \\): \\( \\text{Rate} = k[A]^a[B]^b \\)'
          ],
          workedExamples: [],
          warnings: [
            'Never write a rate law from coefficients of an overall reaction. Only elementary steps allow this.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'For elementary steps only: Rate = k[A]^a[B]^b where a, b are stoichiometric coefficients in that step.',
          keyPoints: [
            'This is the key distinction between elementary and overall reactions.',
            'Combined with the rate-determining step concept, this allows derivation of overall rate laws from mechanisms.'
          ],
          formulae: []
        }
      },
      examTips: [
        'AP tip: If a question asks "write the rate law for the following elementary reaction," use coefficients as exponents. If it says "for the following reaction" (no "elementary"), you need experimental data.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 5.8: Rate law from the rate-determining step uses this principle', sec: 'content' }
      ],
      questionIds: []
    },

    /* ============================================================
       TOPIC 5.5 — Collision Model
       ============================================================ */
    {
      id: 'U5.5.1', code: 'Topic 5.5', subtopic: '5.5',
      subtopicTitle: 'Collision Model', section: 'unit5',
      concepts: ['transformations', 'ene'],
      statement: 'For a reaction to occur, particles must collide with sufficient energy (greater than or equal to the activation energy) and with proper orientation. Only a small fraction of collisions are effective.',
      content: {
        textbook: {
          explanation: '<p>The <b>collision model</b> (also called collision theory) explains reaction rates at the molecular level. It states that for a reaction to occur, two conditions must be met:</p><ol><li><b>Energy requirement:</b> The colliding particles must have kinetic energy &ge; the <b>activation energy</b> (E<sub>a</sub>). E<sub>a</sub> is the minimum energy needed to break bonds in the reactants and begin forming products. Collisions with insufficient energy simply result in the molecules bouncing off each other.</li><li><b>Orientation requirement:</b> The reactant molecules must be oriented correctly at the moment of collision so that the appropriate atoms or functional groups interact. Many geometries lead to unsuccessful collisions even if the energy is sufficient.</li></ol><p>The fraction of collisions that are <b>effective</b> (successful) depends on both factors. At room temperature, typically only a tiny fraction (often &lt; 10<sup>&minus;10</sup>) of all collisions lead to reaction.</p><p>This model explains the effects of concentration, temperature, and catalysts on rate:</p><ul><li><b>Concentration:</b> More particles per volume &rarr; more collisions &rarr; more effective collisions &rarr; faster rate.</li><li><b>Temperature:</b> Higher T &rarr; greater average KE &rarr; larger fraction of molecules exceed E<sub>a</sub> &rarr; faster rate. The Maxwell-Boltzmann distribution shifts to higher energies.</li><li><b>Catalyst:</b> Provides a pathway with lower E<sub>a</sub> &rarr; larger fraction of collisions are effective.</li></ul>',
          keyPoints: [
            'Effective collision = sufficient energy + correct orientation.',
            'Only a tiny fraction of all collisions lead to reaction.',
            'Higher temperature shifts the Maxwell-Boltzmann distribution, increasing the fraction above Ea.',
            'Collision theory explains why rate depends on concentration, temperature, and catalysts.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Maxwell-Boltzmann Distribution and Temperature',
              body: '<p><b>Q:</b> Explain, using the collision model, why increasing temperature from 25 °C to 35 °C approximately doubles the rate of a typical reaction.</p><p><b>A:</b> At the higher temperature, the Maxwell-Boltzmann distribution of molecular kinetic energies shifts to higher values. The fraction of molecules with KE &ge; E<sub>a</sub> increases significantly (approximately doubles for a typical E<sub>a</sub>). Even though the average speed only increases by ~1.7%, the exponential dependence of the fraction above E<sub>a</sub> means a much larger proportion of collisions are effective. This leads to approximately double the reaction rate.</p>'
            }
          ],
          warnings: [
            'On the AP exam, do not just say "molecules move faster" — you must say "a greater fraction of molecules have energy ≥ Ea" to earn full credit.',
            'Orientation factor is often overlooked: even energetically sufficient collisions may fail if the molecules are not oriented correctly.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Effective collisions require both sufficient energy (≥ Ea) and proper orientation. Temperature increases rate by increasing the fraction of molecules above Ea, not just by making them move faster.',
          keyPoints: [
            'Maxwell-Boltzmann distribution: at higher T, the curve flattens and shifts right.',
            'The area under the curve beyond Ea increases dramatically with small T increases.',
            'Orientation factor explains why not all sufficiently energetic collisions succeed.'
          ],
          formulae: []
        }
      },
      examTips: [
        'When explaining temperature effects on FRQs, always reference the Maxwell-Boltzmann distribution and the fraction of molecules with E ≥ Ea. Just saying "more collisions" is not sufficient.',
        'Collision theory is the conceptual framework; the Arrhenius equation is the quantitative framework. Know both.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 5.6: Energy profiles show Ea graphically', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 6: Thermodynamics (ΔH) vs kinetics (Ea) — different concepts', sec: 'content' }
      ],
      questionIds: ['U5Q015']
    },
    {
      id: 'U5.5.2', code: 'Topic 5.5', subtopic: '5.5',
      subtopicTitle: 'Collision Model', section: 'unit5',
      concepts: ['transformations', 'ene'],
      statement: 'The Arrhenius equation k = Ae^(−Ea/RT) quantifies the temperature dependence of the rate constant. The two-point form allows calculation of Ea from k values at two temperatures.',
      content: {
        textbook: {
          explanation: '<p>The <b>Arrhenius equation</b> provides the quantitative relationship between the rate constant k and temperature:</p><p style="text-align:center;"><b>k = A e<sup>&minus;E<sub>a</sub>/RT</sup></b></p><p>where:</p><ul><li><b>A</b> = frequency factor (pre-exponential factor) — relates to collision frequency and orientation; units match those of k.</li><li><b>E<sub>a</sub></b> = activation energy (J/mol).</li><li><b>R</b> = gas constant = 8.314 J mol<sup>&minus;1</sup> K<sup>&minus;1</sup>.</li><li><b>T</b> = absolute temperature (K).</li></ul><p><b>Linearized form:</b> Taking the natural log of both sides:</p><p style="text-align:center;">ln k = ln A &minus; E<sub>a</sub>/(RT)</p><p>Plotting <b>ln k vs 1/T</b> gives a straight line with slope = &minus;E<sub>a</sub>/R and y-intercept = ln A.</p><p><b>Two-point form:</b> Comparing k at two temperatures T<sub>1</sub> and T<sub>2</sub>:</p><p style="text-align:center;">ln(k<sub>2</sub>/k<sub>1</sub>) = (E<sub>a</sub>/R)(1/T<sub>1</sub> &minus; 1/T<sub>2</sub>)</p><p>This is the most commonly used form on the AP exam because it allows calculation of E<sub>a</sub> from two data points, or prediction of k at a new temperature.</p>',
          keyPoints: [
            'k = Ae^(−Ea/RT) — rate constant increases exponentially with temperature.',
            'Plot ln k vs 1/T → straight line, slope = −Ea/R.',
            'Two-point form: ln(k<sub>2</sub>/k<sub>1</sub>) = (Ea/R)(1/T<sub>1</sub> − 1/T<sub>2</sub>).',
            'Ea is always positive; higher Ea means stronger temperature dependence.',
            'A (frequency factor) accounts for collision frequency and orientation.'
          ],
          formulae: [
            '\\[ k = Ae^{-E_a/RT} \\]',
            '\\[ \\ln k = \\ln A - \\frac{E_a}{RT} \\]',
            '\\[ \\ln\\frac{k_2}{k_1} = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right) \\]',
            '\\( R = 8.314 \\) J mol\\(^{-1}\\) K\\(^{-1}\\)'
          ],
          workedExamples: [
            {
              title: 'Arrhenius Equation — Calculating Ea from Two Temperatures',
              body: '<p><b>Q:</b> A reaction has k = 1.2 &times; 10<sup>&minus;3</sup> s<sup>&minus;1</sup> at 25 °C and k = 6.8 &times; 10<sup>&minus;3</sup> s<sup>&minus;1</sup> at 45 °C. Calculate E<sub>a</sub>.</p><p><b>A:</b> T<sub>1</sub> = 298 K, T<sub>2</sub> = 318 K, k<sub>1</sub> = 1.2 &times; 10<sup>&minus;3</sup>, k<sub>2</sub> = 6.8 &times; 10<sup>&minus;3</sup>.</p><p>ln(k<sub>2</sub>/k<sub>1</sub>) = ln(6.8 &times; 10<sup>&minus;3</sup> / 1.2 &times; 10<sup>&minus;3</sup>) = ln(5.667) = 1.735</p><p>1/T<sub>1</sub> &minus; 1/T<sub>2</sub> = 1/298 &minus; 1/318 = 3.356 &times; 10<sup>&minus;3</sup> &minus; 3.145 &times; 10<sup>&minus;3</sup> = 2.11 &times; 10<sup>&minus;4</sup> K<sup>&minus;1</sup></p><p>E<sub>a</sub> = R &times; ln(k<sub>2</sub>/k<sub>1</sub>) / (1/T<sub>1</sub> &minus; 1/T<sub>2</sub>) = 8.314 &times; 1.735 / (2.11 &times; 10<sup>&minus;4</sup>) = <b>6.84 &times; 10<sup>4</sup> J/mol = 68.4 kJ/mol</b></p>'
            },
            {
              title: 'Predicting k at a New Temperature',
              body: '<p><b>Q:</b> Using E<sub>a</sub> = 68.4 kJ/mol and k = 1.2 &times; 10<sup>&minus;3</sup> s<sup>&minus;1</sup> at 298 K, find k at 350 K.</p><p><b>A:</b> ln(k<sub>2</sub>/k<sub>1</sub>) = (68400/8.314)(1/298 &minus; 1/350) = 8226 &times; (3.356 &times; 10<sup>&minus;3</sup> &minus; 2.857 &times; 10<sup>&minus;3</sup>) = 8226 &times; 4.99 &times; 10<sup>&minus;4</sup> = 4.105</p><p>k<sub>2</sub>/k<sub>1</sub> = e<sup>4.105</sup> = 60.7</p><p>k<sub>2</sub> = 60.7 &times; 1.2 &times; 10<sup>&minus;3</sup> = <b>0.073 s<sup>&minus;1</sup></b></p>'
            }
          ],
          warnings: [
            'Always convert temperature to Kelvin for the Arrhenius equation.',
            'Ea must be in J/mol (not kJ/mol) when using R = 8.314 J mol<sup>−</sup><sup>1</sup> K<sup>−</sup><sup>1</sup>. This is a very common AP error.',
            'The two-point form has (1/T<sub>1</sub> − 1/T<sub>2</sub>), not (T<sub>1</sub> − T<sub>2</sub>). Do not mix up.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Arrhenius: k = Ae^(−Ea/RT). Two-point form: ln(k<sub>2</sub>/k<sub>1</sub>) = (Ea/R)(1/T<sub>1</sub> − 1/T<sub>2</sub>). Plot ln k vs 1/T for a straight line with slope = −Ea/R.',
          keyPoints: [
            'Use Kelvin, not Celsius.',
            'Ea in J/mol when R = 8.314 J/(mol·K).',
            'Higher Ea → more sensitive to temperature changes.'
          ],
          formulae: [
            '\\[ k = Ae^{-E_a/RT} \\]',
            '\\[ \\ln\\frac{k_2}{k_1} = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right) \\]'
          ]
        }
      },
      examTips: [
        'The Arrhenius equation is on the AP equation sheet. Practice the two-point form until it is automatic — it appears frequently on FRQs.',
        'Common AP error: forgetting to convert Ea from kJ to J. Double-check units every time.',
        'If asked "how does Ea affect the temperature sensitivity of a reaction?" — higher Ea means rate changes more dramatically with temperature.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 5.6: Ea is the energy barrier shown on energy profile diagrams', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 6: Ea (kinetics) is different from ΔH (thermodynamics)', sec: 'content' }
      ],
      questionIds: ['U5Q016', 'U5Q017']
    },

    /* ============================================================
       TOPIC 5.6 — Reaction Energy Profile
       ============================================================ */
    {
      id: 'U5.6.1', code: 'Topic 5.6', subtopic: '5.6',
      subtopicTitle: 'Reaction Energy Profile', section: 'unit5',
      concepts: ['ene', 'tra'],
      statement: 'A reaction energy profile (potential energy diagram) shows the energy changes along the reaction coordinate, including the activation energy (Ea), transition state, and enthalpy change (ΔH).',
      content: {
        textbook: {
          explanation: '<p>A <b>reaction energy profile</b> (also called a potential energy diagram) plots the potential energy of the system along the <b>reaction coordinate</b> (progress of the reaction from reactants to products).</p><p>Key features:</p><ul><li><b>Reactants</b> are at the starting energy level (left side).</li><li><b>Products</b> are at the final energy level (right side).</li><li><b>Activation energy (E<sub>a</sub>)</b> is the energy difference between the reactants and the highest point on the diagram (the <b>transition state</b>).</li><li><b>Transition state</b> (activated complex): the highest-energy, most unstable configuration along the pathway. It cannot be isolated.</li><li><b>&Delta;H<sub>rxn</sub></b> is the energy difference between reactants and products: &Delta;H = E<sub>products</sub> &minus; E<sub>reactants</sub>.</li></ul><p><b>Exothermic reaction:</b> Products lower than reactants (&Delta;H &lt; 0). The forward E<sub>a</sub> is less than the reverse E<sub>a</sub>.</p><p><b>Endothermic reaction:</b> Products higher than reactants (&Delta;H &gt; 0). The forward E<sub>a</sub> is greater than the reverse E<sub>a</sub>.</p><p><b>Relationship:</b> E<sub>a(forward)</sub> = E<sub>a(reverse)</sub> + &Delta;H (for exothermic) or E<sub>a(forward)</sub> = E<sub>a(reverse)</sub> + |&Delta;H| (for endothermic, since &Delta;H is positive).</p>',
          keyPoints: [
            'Ea = energy of transition state minus energy of reactants.',
            'Transition state = highest point on the diagram; it is NOT an intermediate.',
            'ΔH = E(products) − E(reactants).',
            'Exothermic: products lower; endothermic: products higher.',
            'Ea(forward) + ΔH = Ea(reverse) (for exothermic with ΔH negative).'
          ],
          formulae: [
            '\\[ E_a(\\text{forward}) = E(\\text{transition state}) - E(\\text{reactants}) \\]',
            '\\[ \\Delta H = E(\\text{products}) - E(\\text{reactants}) \\]',
            '\\[ E_a(\\text{reverse}) = E_a(\\text{forward}) - \\Delta H \\]'
          ],
          workedExamples: [
            {
              title: 'Reading an Energy Profile',
              body: '<p><b>Q:</b> An energy profile shows reactants at 50 kJ, a transition state at 120 kJ, and products at 20 kJ. Determine E<sub>a</sub>(forward), E<sub>a</sub>(reverse), and &Delta;H.</p><p><b>A:</b> E<sub>a</sub>(forward) = 120 &minus; 50 = <b>70 kJ</b>. &Delta;H = 20 &minus; 50 = <b>&minus;30 kJ</b> (exothermic). E<sub>a</sub>(reverse) = 120 &minus; 20 = <b>100 kJ</b>. Check: E<sub>a</sub>(reverse) = E<sub>a</sub>(forward) &minus; &Delta;H = 70 &minus; (&minus;30) = 100 kJ &#10003;</p>'
            }
          ],
          warnings: [
            'The transition state is NOT the same as an intermediate. The transition state is at the peak (maximum) of the energy curve; intermediates sit in valleys between peaks.',
            'Ea is always positive — it is the height of the energy barrier, not a signed quantity like ΔH.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Energy profile: x-axis = reaction coordinate, y-axis = PE. Ea = peak − reactants. ΔH = products − reactants. Transition state = peak; intermediate = valley.',
          keyPoints: [
            'Exothermic: products lower than reactants (ΔH < 0).',
            'Endothermic: products higher (ΔH > 0).',
            'Ea(reverse) = Ea(forward) − ΔH.'
          ],
          formulae: [
            '\\[ E_a = E(\\text{transition state}) - E(\\text{reactants}) \\]',
            '\\[ \\Delta H = E(\\text{products}) - E(\\text{reactants}) \\]'
          ]
        }
      },
      examTips: [
        'Energy profiles appear on almost every AP exam. Be able to label Ea, ΔH, transition state, and (for multistep) intermediates.',
        'A catalyst lowers Ea but does NOT change ΔH — on the diagram, the peak is lower but reactant and product energies stay the same.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 5.10: Multistep energy profiles with multiple transition states and intermediates', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 6: ΔH is the same thermodynamic quantity from Hess\'s law and calorimetry', sec: 'content' },
        { color: 'blue', label: '\u2192 Topic 5.11: Catalysts lower Ea on the energy profile', sec: 'content' }
      ],
      questionIds: ['U5Q018', 'U5Q019']
    },
    {
      id: 'U5.6.2', code: 'Topic 5.6', subtopic: '5.6',
      subtopicTitle: 'Reaction Energy Profile', section: 'unit5',
      concepts: ['ene', 'tra'],
      statement: 'A catalyst provides an alternative reaction pathway with a lower activation energy, appearing as a lower peak on the energy profile diagram, while ΔH remains unchanged.',
      content: {
        textbook: {
          explanation: '<p>When a <b>catalyst</b> is present, it provides an <b>alternative reaction pathway</b> with a lower activation energy. On the energy profile:</p><ul><li>The <b>reactant and product energy levels remain the same</b> — &Delta;H is unchanged.</li><li>The <b>peak (transition state) is lower</b>, meaning E<sub>a</sub> is reduced.</li><li>Often the catalyzed pathway has <b>multiple smaller peaks</b> (multiple steps) instead of one large peak.</li></ul><p>The catalyzed and uncatalyzed pathways are often drawn on the same diagram for comparison. The catalyzed curve sits below the uncatalyzed curve but starts and ends at the same energy levels.</p>',
          keyPoints: [
            'Catalyst lowers Ea but does not change ΔH.',
            'On the diagram, the peak is lower but reactant/product levels are identical.',
            'The catalyzed pathway may have multiple smaller peaks (multi-step mechanism).',
            'Both forward and reverse reactions are sped up equally (the reverse Ea is also lowered).'
          ],
          formulae: [],
          workedExamples: [],
          warnings: [
            'A catalyst does NOT shift the equilibrium position — it speeds up both forward and reverse reactions equally, so the system reaches equilibrium faster but the equilibrium concentrations are the same.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Catalyst: lower Ea, same ΔH. On the diagram, the peak drops but endpoints stay fixed. Both forward and reverse reactions speed up equally.',
          keyPoints: [
            'Catalyst does not shift equilibrium — it just helps the system get there faster.',
            'Multi-step catalyzed pathways may show multiple smaller peaks.'
          ],
          formulae: []
        }
      },
      examTips: [
        'A very common AP MCQ: "Which statement is true about a catalyst?" Correct: lowers Ea. Wrong answers often say "increases ΔH," "shifts equilibrium right," or "is consumed."'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 5.11: Detailed treatment of catalysis types and mechanisms', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 9: Catalyst does not change K — it only speeds up approach to equilibrium', sec: 'content' }
      ],
      questionIds: []
    },

    /* ============================================================
       TOPIC 5.7 — Introduction to Reaction Mechanisms
       ============================================================ */
    {
      id: 'U5.7.1', code: 'Topic 5.7', subtopic: '5.7',
      subtopicTitle: 'Introduction to Reaction Mechanisms', section: 'unit5',
      concepts: ['transformations', 'tra'],
      statement: 'A reaction mechanism is a series of elementary steps whose sum gives the overall balanced equation. Species produced in one step and consumed in a later step are intermediates.',
      content: {
        textbook: {
          explanation: '<p>Most chemical reactions do not occur in a single step. Instead, they proceed through a series of <b>elementary steps</b> called a <b>reaction mechanism</b>. The mechanism is a molecular-level description of how reactants become products.</p><p><b>Key features of a valid mechanism:</b></p><ol><li><b>The elementary steps must sum to the overall balanced equation.</b> Add all the steps and cancel species that appear on both sides.</li><li><b>The mechanism must be consistent with the experimentally observed rate law.</b></li></ol><p><b>Intermediates</b> are species that are produced in one step and consumed in a later step. They do not appear in the overall balanced equation but they DO appear in the mechanism. Intermediates are real molecules or ions that exist briefly during the reaction.</p><p><b>Transition states</b> (activated complexes) are NOT intermediates. They exist for only an instant at the peak of the energy barrier and cannot be isolated.</p><p><b>Example mechanism:</b></p><p>Overall: 2 NO<sub>2</sub> + F<sub>2</sub> &rarr; 2 NO<sub>2</sub>F</p><p>Step 1: NO<sub>2</sub> + F<sub>2</sub> &rarr; NO<sub>2</sub>F + F (slow)</p><p>Step 2: NO<sub>2</sub> + F &rarr; NO<sub>2</sub>F (fast)</p><p>Sum: 2 NO<sub>2</sub> + F<sub>2</sub> &rarr; 2 NO<sub>2</sub>F (F cancels — it is the <b>intermediate</b>)</p>',
          keyPoints: [
            'Mechanism = sequence of elementary steps that sum to the overall reaction.',
            'Intermediates: produced in one step, consumed in another; do NOT appear in the overall equation.',
            'Transition states are at energy maxima and cannot be isolated (different from intermediates).',
            'A valid mechanism must sum to the overall equation AND be consistent with the experimental rate law.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Identifying Intermediates and Catalysts',
              body: '<p><b>Q:</b> For the mechanism:<br>Step 1: A + B &rarr; C + D (slow)<br>Step 2: C + E &rarr; F (fast)<br>Overall: A + B + E &rarr; D + F</p><p>Identify the intermediate(s) and write the overall equation.</p><p><b>A:</b> Add the steps: A + B + C + E &rarr; C + D + F. Cancel C (appears on both sides): A + B + E &rarr; D + F. <b>C is the intermediate</b> — it is produced in Step 1 and consumed in Step 2.</p>'
            }
          ],
          warnings: [
            'Intermediates appear in the mechanism but NOT in the overall equation. If a species appears in the overall equation, it is a reactant or product, not an intermediate.',
            'A catalyst appears in the mechanism (consumed in an early step, regenerated in a later step) and also does NOT appear in the overall equation. Distinguish catalysts from intermediates: catalysts are present initially; intermediates are generated during the reaction.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Mechanism = sequence of elementary steps summing to the overall equation. Intermediates are produced then consumed (not in overall equation). Transition states are at energy peaks.',
          keyPoints: [
            'Add all steps and cancel species on both sides to get the overall equation.',
            'Intermediate: produced and consumed. Catalyst: consumed and regenerated.',
            'The mechanism must predict the correct experimental rate law.'
          ],
          formulae: []
        }
      },
      examTips: [
        'AP FRQs frequently ask you to identify intermediates from a mechanism. Systematic approach: list every species — anything that appears as a product in one step and a reactant in a later step is an intermediate.',
        'If asked to distinguish intermediates from transition states: intermediates are at local energy minima (valleys) on the energy profile; transition states are at maxima (peaks).'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 5.8: Deriving rate laws from mechanisms using the rate-determining step', sec: 'content' },
        { color: 'blue', label: '\u2192 Topic 5.10: Multistep energy profiles show intermediates as valleys between peaks', sec: 'content' }
      ],
      questionIds: ['U5Q020']
    },
    {
      id: 'U5.7.2', code: 'Topic 5.7', subtopic: '5.7',
      subtopicTitle: 'Introduction to Reaction Mechanisms', section: 'unit5',
      concepts: ['transformations', 'tra'],
      statement: 'A proposed mechanism can never be proven correct — it can only be shown to be consistent with the experimental rate law. Multiple mechanisms may produce the same rate law.',
      content: {
        textbook: {
          explanation: '<p>An important principle of chemical kinetics is that a <b>mechanism can never be proven</b> — it can only be disproven or shown to be <b>consistent</b> with experimental observations. The criteria for a plausible mechanism are:</p><ol><li>The elementary steps must sum to the overall balanced equation.</li><li>The rate law derived from the mechanism must match the experimentally determined rate law.</li><li>Each elementary step must be reasonable (unimolecular or bimolecular; termolecular steps are very rare).</li></ol><p>It is always possible that another mechanism also satisfies these criteria. Scientists choose the simplest mechanism consistent with the data (parsimony).</p>',
          keyPoints: [
            'A mechanism is a model — it can be supported but never definitively proven.',
            'It must be consistent with: (1) overall stoichiometry, (2) experimental rate law, (3) reasonable elementary steps.',
            'Multiple mechanisms may predict the same rate law.'
          ],
          formulae: [],
          workedExamples: [],
          warnings: [],
          diagrams: []
        },
        studyGuide: {
          essentials: 'A mechanism is consistent with data but never proven. It must sum to the overall equation and predict the correct rate law.',
          keyPoints: [
            'On the AP exam, if asked "does this mechanism prove the reaction occurs this way?" the answer is always no — it only shows consistency.'
          ],
          formulae: []
        }
      },
      examTips: [
        'AP FRQs sometimes ask whether a given mechanism is "correct." Precise language: the mechanism is "consistent with" or "supported by" the data, never "proven."'
      ],
      connections: [],
      questionIds: []
    },

    /* ============================================================
       TOPIC 5.8 — Reaction Mechanism and Rate Law
       ============================================================ */
    {
      id: 'U5.8.1', code: 'Topic 5.8', subtopic: '5.8',
      subtopicTitle: 'Reaction Mechanism and Rate Law', section: 'unit5',
      concepts: ['transformations', 'tra'],
      statement: 'The rate-determining step (RDS) is the slowest elementary step in a mechanism. The overall rate law is determined by the RDS, with intermediates eliminated using prior equilibrium steps if necessary.',
      content: {
        textbook: {
          explanation: '<p>In a multi-step mechanism, the <b>rate-determining step (RDS)</b> is the slowest step. Like the narrowest section of a pipe limiting water flow, the RDS limits the overall rate of the reaction.</p><p><b>Case 1: The slow step is first.</b><br>If the first step is slow, the rate law is simply the rate law for that elementary step.</p><p>Example:<br>Step 1 (slow): NO<sub>2</sub> + F<sub>2</sub> &rarr; NO<sub>2</sub>F + F<br>Step 2 (fast): NO<sub>2</sub> + F &rarr; NO<sub>2</sub>F<br>Rate law = k[NO<sub>2</sub>][F<sub>2</sub>] (from the slow step)</p><p><b>Case 2: A fast step precedes the slow step.</b><br>If a fast equilibrium step comes before the slow step, the rate law for the slow step may contain an <b>intermediate</b>. Since intermediates cannot appear in the final rate law, you must use the equilibrium from the fast step to substitute for the intermediate concentration.</p><p>Example:<br>Step 1 (fast, equilibrium): NO + Br<sub>2</sub> ⇌ NOBr<sub>2</sub><br>Step 2 (slow): NOBr<sub>2</sub> + NO &rarr; 2 NOBr</p><p>Rate from slow step: Rate = k<sub>2</sub>[NOBr<sub>2</sub>][NO]<br>But NOBr<sub>2</sub> is an intermediate. From the fast equilibrium: K = [NOBr<sub>2</sub>]/([NO][Br<sub>2</sub>]) &rarr; [NOBr<sub>2</sub>] = K[NO][Br<sub>2</sub>]<br>Substituting: Rate = k<sub>2</sub>K[NO][Br<sub>2</sub>][NO] = k<sub>obs</sub>[NO]<sup>2</sup>[Br<sub>2</sub>]</p>',
          keyPoints: [
            'The slowest step (RDS) determines the overall rate law.',
            'If the slow step is first, write the rate law directly from it.',
            'If a fast equilibrium precedes the slow step, the intermediate must be eliminated using the equilibrium expression.',
            'The final rate law must contain only reactants (and possibly catalysts), never intermediates.'
          ],
          formulae: [
            '\\( \\text{Rate} = \\) rate law of the slow step',
            'For fast pre-equilibrium: \\( K = \\frac{[\\text{products}]}{[\\text{reactants}]} \\to \\) solve for \\([\\text{intermediate}]\\)'
          ],
          workedExamples: [
            {
              title: 'Rate Law with Slow Step First',
              body: '<p><b>Q:</b> Mechanism:<br>Step 1 (slow): H<sub>2</sub> + ICl &rarr; HI + HCl<br>Step 2 (fast): HI + ICl &rarr; I<sub>2</sub> + HCl<br>Derive the rate law.</p><p><b>A:</b> The slow step is first, so Rate = k[H<sub>2</sub>][ICl]. No intermediates appear, so this is the final rate law: <b>Rate = k[H<sub>2</sub>][ICl]</b>.</p>'
            },
            {
              title: 'Rate Law with Fast Pre-Equilibrium',
              body: '<p><b>Q:</b> Mechanism:<br>Step 1 (fast, eq): 2 NO ⇌ N<sub>2</sub>O<sub>2</sub> (K<sub>1</sub>)<br>Step 2 (slow): N<sub>2</sub>O<sub>2</sub> + H<sub>2</sub> &rarr; N<sub>2</sub>O + H<sub>2</sub>O (k<sub>2</sub>)<br>Step 3 (fast): N<sub>2</sub>O + H<sub>2</sub> &rarr; N<sub>2</sub> + H<sub>2</sub>O<br>Derive the overall rate law.</p><p><b>A:</b> Rate from slow step: Rate = k<sub>2</sub>[N<sub>2</sub>O<sub>2</sub>][H<sub>2</sub>]. N<sub>2</sub>O<sub>2</sub> is an intermediate. From Step 1 equilibrium: K<sub>1</sub> = [N<sub>2</sub>O<sub>2</sub>]/[NO]<sup>2</sup>, so [N<sub>2</sub>O<sub>2</sub>] = K<sub>1</sub>[NO]<sup>2</sup>.</p><p>Substituting: Rate = k<sub>2</sub>K<sub>1</sub>[NO]<sup>2</sup>[H<sub>2</sub>] = <b>k[NO]<sup>2</sup>[H<sub>2</sub>]</b> where k = k<sub>2</sub>K<sub>1</sub>.</p>'
            }
          ],
          warnings: [
            'Intermediates must NEVER appear in the final rate law. If they do, you have not finished the derivation — go back and substitute using the equilibrium expression.',
            'The rate-determining step analogy: think of it as a traffic bottleneck. The overall traffic flow (rate) is limited by the slowest section.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'RDS = slowest step → determines rate law. If RDS is first, write rate law directly. If fast equilibrium precedes RDS, substitute for the intermediate using K from the equilibrium.',
          keyPoints: [
            'Final rate law must contain ONLY reactants and constants.',
            'k_obs = k<sub>2</sub> × K<sub>1</sub> when substituting from a pre-equilibrium.',
            'This is one of the most commonly tested FRQ topics.'
          ],
          formulae: []
        }
      },
      examTips: [
        'Mechanism-to-rate-law derivation is among the highest-frequency FRQ topics. Practice both cases: slow step first, and fast equilibrium before slow step.',
        'Always show the substitution step explicitly on FRQs — write the equilibrium expression, solve for [intermediate], and substitute. Points are awarded for each step.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 5.4: Rate law for each elementary step comes from its molecularity', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 9: The equilibrium expression K<sub>1</sub> used in pre-equilibrium is the same K from Unit 9', sec: 'content' }
      ],
      questionIds: ['U5Q021', 'U5Q022', 'U5Q023']
    },
    {
      id: 'U5.8.2', code: 'Topic 5.8', subtopic: '5.8',
      subtopicTitle: 'Reaction Mechanism and Rate Law', section: 'unit5',
      concepts: ['transformations', 'tra'],
      statement: 'A proposed mechanism is consistent with the experimental data only if the rate law derived from the mechanism matches the experimentally determined rate law.',
      content: {
        textbook: {
          explanation: '<p>The <b>consistency check</b> is the final step in evaluating a proposed mechanism:</p><ol><li>Derive the predicted rate law from the mechanism (using the RDS approach).</li><li>Compare it to the experimentally determined rate law (from initial rates data).</li><li>If they match, the mechanism is <b>consistent</b> with the data.</li><li>If they do not match, the mechanism is <b>not valid</b> and must be rejected or modified.</li></ol><p>Example: If the experimental rate law is Rate = k[A]<sup>2</sup>[B], then a proposed mechanism must predict exactly Rate = k\'[A]<sup>2</sup>[B]. If the mechanism predicts Rate = k\'[A][B]<sup>2</sup>, it is inconsistent and must be rejected.</p>',
          keyPoints: [
            'Derived rate law must exactly match the experimental rate law.',
            'If they match → mechanism is consistent (not proven).',
            'If they don\'t match → mechanism is rejected.',
            'This is a critical thinking skill tested on AP FRQs.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Consistency Check',
              body: '<p><b>Q:</b> The experimental rate law for 2 NO + O<sub>2</sub> &rarr; 2 NO<sub>2</sub> is Rate = k[NO]<sup>2</sup>[O<sub>2</sub>]. Is the following mechanism consistent?<br>Step 1 (fast, eq): 2 NO ⇌ N<sub>2</sub>O<sub>2</sub><br>Step 2 (slow): N<sub>2</sub>O<sub>2</sub> + O<sub>2</sub> &rarr; 2 NO<sub>2</sub></p><p><b>A:</b> From slow step: Rate = k<sub>2</sub>[N<sub>2</sub>O<sub>2</sub>][O<sub>2</sub>]. From equilibrium: [N<sub>2</sub>O<sub>2</sub>] = K<sub>1</sub>[NO]<sup>2</sup>. Substituting: Rate = k<sub>2</sub>K<sub>1</sub>[NO]<sup>2</sup>[O<sub>2</sub>] = k[NO]<sup>2</sup>[O<sub>2</sub>]. This <b>matches</b> the experimental rate law, so the mechanism is <b>consistent</b>. &#10003;</p>'
            }
          ],
          warnings: [
            'Remember: consistency does not equal proof. Other mechanisms might also give the same rate law.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Consistency check: derive rate law from mechanism → compare to experimental rate law → match = consistent, mismatch = rejected.',
          keyPoints: [
            'This is a required step in any mechanism problem on the AP exam.',
            'Show the comparison explicitly in your FRQ answer.'
          ],
          formulae: []
        }
      },
      examTips: [
        'On AP FRQs, after deriving the rate law from a mechanism, always conclude with "This is consistent with the experimental rate law" or "This does not match" — the explicit comparison earns a point.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 5.2: Experimental rate law comes from initial rates data', sec: 'content' }
      ],
      questionIds: ['U5Q024']
    },
    {
      id: 'U5.8.3', code: 'Topic 5.8', subtopic: '5.8',
      subtopicTitle: 'Reaction Mechanism and Rate Law', section: 'unit5',
      concepts: ['transformations', 'tra'],
      statement: 'Catalysts appear in the mechanism as species consumed in one step and regenerated in a later step. They lower the activation energy but do not appear in the overall equation.',
      content: {
        textbook: {
          explanation: '<p>In a mechanism, a <b>catalyst</b> is consumed in an early step and regenerated in a later step. Like intermediates, catalysts cancel when the steps are summed and do not appear in the overall equation. Unlike intermediates, catalysts are <b>present before the reaction begins</b>.</p><p>Example (catalyzed decomposition of H<sub>2</sub>O<sub>2</sub> with I<sup>&minus;</sup>):</p><p>Step 1: H<sub>2</sub>O<sub>2</sub> + I<sup>&minus;</sup> &rarr; H<sub>2</sub>O + IO<sup>&minus;</sup></p><p>Step 2: H<sub>2</sub>O<sub>2</sub> + IO<sup>&minus;</sup> &rarr; H<sub>2</sub>O + O<sub>2</sub> + I<sup>&minus;</sup></p><p>Overall: 2 H<sub>2</sub>O<sub>2</sub> &rarr; 2 H<sub>2</sub>O + O<sub>2</sub></p><p>I<sup>&minus;</sup> is the <b>catalyst</b> (consumed in Step 1, regenerated in Step 2). IO<sup>&minus;</sup> is the <b>intermediate</b> (produced in Step 1, consumed in Step 2).</p>',
          keyPoints: [
            'Catalyst: consumed early, regenerated later. Present initially.',
            'Intermediate: produced in one step, consumed in a later step. Not present initially.',
            'Both cancel when steps are summed.',
            'Catalysts may appear in the rate law if they are involved in the rate-determining step.'
          ],
          formulae: [],
          workedExamples: [],
          warnings: [
            'Do not confuse catalysts and intermediates: both cancel in the overall equation, but catalysts are present at the start and are regenerated, while intermediates are created during the reaction.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Catalyst: consumed then regenerated (present initially). Intermediate: produced then consumed (not present initially). Both cancel in the overall equation.',
          keyPoints: [
            'In the H<sub>2</sub>O<sub>2</sub>/I<sup>−</sup> example: I<sup>−</sup> = catalyst, IO<sup>−</sup> = intermediate.',
            'A catalyst can appear in the rate law if it participates in the RDS.'
          ],
          formulae: []
        }
      },
      examTips: [
        'AP MCQ trap: "Which species is an intermediate?" vs "Which is a catalyst?" Look at what is present initially (given as a reagent) vs what is generated during the reaction.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 5.11: Types and detailed treatment of catalysis', sec: 'content' }
      ],
      questionIds: []
    },

    /* ============================================================
       TOPIC 5.9 — Steady-State Approximation
       ============================================================ */
    {
      id: 'U5.9.1', code: 'Topic 5.9', subtopic: '5.9',
      subtopicTitle: 'Steady-State Approximation', section: 'unit5',
      concepts: ['transformations', 'tra', 'eqn'],
      statement: 'The pre-equilibrium approximation assumes that a fast reversible step reaches equilibrium before the slow step proceeds, allowing the intermediate concentration to be expressed in terms of reactant concentrations.',
      content: {
        textbook: {
          explanation: '<p>The <b>pre-equilibrium approximation</b> is used when a fast reversible step precedes the rate-determining step. The assumption is that the fast step reaches equilibrium much faster than the slow step proceeds, so the equilibrium expression can be applied to find the intermediate concentration.</p><p>This is the approach most commonly used on the AP exam (as seen in Topic 5.8). It is the simpler version of the more general steady-state approximation.</p><p><b>Procedure:</b></p><ol><li>Write the rate law from the slow step (which may contain an intermediate).</li><li>Write the equilibrium expression for the fast preceding step.</li><li>Solve for [intermediate] in terms of reactant concentrations.</li><li>Substitute into the rate law from step 1.</li></ol>',
          keyPoints: [
            'Pre-equilibrium: fast reversible step reaches equilibrium before slow step proceeds.',
            'Use K = [products]/[reactants] from the fast step to eliminate the intermediate.',
            'This is the standard approach for AP Chemistry mechanism problems.',
            'The pre-equilibrium approximation is valid when k<sub>-</sub><sub>1</sub> >> k<sub>2</sub> (reverse of step 1 is much faster than step 2).'
          ],
          formulae: [
            '\\(K_1 = \\frac{k_1}{k_{-1}} = \\frac{[\\text{intermediate}]}{[\\text{reactants}]}\\)',
            '\\([\\text{intermediate}] = K_1 \\times [\\text{reactants}]\\)'
          ],
          workedExamples: [
            {
              title: 'Pre-Equilibrium Worked Example',
              body: '<p><b>Q:</b> Mechanism:<br>Step 1 (fast, eq): Cl<sub>2</sub> ⇌ 2 Cl (K<sub>1</sub>)<br>Step 2 (slow): Cl + CHCl<sub>3</sub> &rarr; HCl + CCl<sub>3</sub> (k<sub>2</sub>)<br>Step 3 (fast): Cl + CCl<sub>3</sub> &rarr; CCl<sub>4</sub><br>Derive the rate law.</p><p><b>A:</b></p><p>Rate from slow step: Rate = k<sub>2</sub>[Cl][CHCl<sub>3</sub>]</p><p>Cl is an intermediate. From Step 1 equilibrium:<br>K<sub>1</sub> = [Cl]<sup>2</sup> / [Cl<sub>2</sub>]<br>[Cl]<sup>2</sup> = K<sub>1</sub>[Cl<sub>2</sub>]<br>[Cl] = (K<sub>1</sub>[Cl<sub>2</sub>])<sup>1/2</sup> = K<sub>1</sub><sup>1/2</sup>[Cl<sub>2</sub>]<sup>1/2</sup></p><p>Substituting:<br>Rate = k<sub>2</sub>K<sub>1</sub><sup>1/2</sup>[Cl<sub>2</sub>]<sup>1/2</sup>[CHCl<sub>3</sub>]</p><p><b>Rate = k[Cl<sub>2</sub>]<sup>1/2</sup>[CHCl<sub>3</sub>]</b> where k = k<sub>2</sub>K<sub>1</sub><sup>1/2</sup></p><p>This gives a fractional order in Cl<sub>2</sub>, which is consistent with the experimental observation.</p>'
            }
          ],
          warnings: [
            'The pre-equilibrium approach can yield fractional orders (as in the chlorination example). This is perfectly valid and sometimes tested on the AP exam.',
            'Do not use pre-equilibrium if the fast step is irreversible — it only works for reversible (equilibrium) steps.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Pre-equilibrium: fast reversible step reaches equilibrium → use K to find [intermediate] → substitute into slow-step rate law.',
          keyPoints: [
            'Can produce fractional orders.',
            'K<sub>1</sub> = k<sub>1</sub>/k<sub>-</sub><sub>1</sub>.',
            'Valid when k<sub>-</sub><sub>1</sub> >> k<sub>2</sub>.'
          ],
          formulae: [
            '\\(K_1 = \\frac{[\\text{intermediate}]}{[\\text{reactants}]}\\)',
            '\\([\\text{intermediate}] = K_1 \\times [\\text{reactants}]\\)'
          ]
        }
      },
      examTips: [
        'The pre-equilibrium approach is the standard method on the AP exam for handling intermediates. The full steady-state approximation (calculus-based) is beyond the scope of AP Chemistry.',
        'If you get a fractional order from the pre-equilibrium approach, do not panic — it is a valid result.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 5.8: Pre-equilibrium is the tool for deriving rate laws when intermediates appear', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 9: The equilibrium constant K connects forward and reverse rate constants', sec: 'content' }
      ],
      questionIds: ['U5Q025']
    },
    {
      id: 'U5.9.2', code: 'Topic 5.9', subtopic: '5.9',
      subtopicTitle: 'Steady-State Approximation', section: 'unit5',
      concepts: ['transformations', 'tra', 'eqn'],
      statement: 'The steady-state approximation assumes that the rate of formation of an intermediate equals its rate of consumption, so its concentration remains approximately constant over time.',
      content: {
        textbook: {
          explanation: '<p>The <b>steady-state approximation (SSA)</b> is a more general approach than the pre-equilibrium method. It assumes that after a brief initial period, the concentration of a reactive intermediate remains approximately constant because it is being produced and consumed at nearly equal rates:</p><p style="text-align:center;">d[intermediate]/dt &asymp; 0</p><p>This gives an algebraic equation that can be solved for [intermediate] and substituted into the rate law.</p><p>The SSA is more mathematically rigorous than the pre-equilibrium approach and applies in more situations, but the algebra is often more complex. On the AP exam, the pre-equilibrium approach is usually sufficient.</p>',
          keyPoints: [
            'd[intermediate]/dt ≈ 0 → rate of formation = rate of consumption.',
            'This gives an algebraic equation to solve for [intermediate].',
            'More general than pre-equilibrium but more complex algebra.',
            'At the AP level, the pre-equilibrium approach is usually sufficient.'
          ],
          formulae: [
            '\\(\\frac{d[\\text{intermediate}]}{dt} = 0\\) (steady-state condition)'
          ],
          workedExamples: [],
          warnings: [
            'The full SSA derivation involves setting up rate equations for intermediate formation and consumption, then solving. This is at the boundary of AP Chemistry scope.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Steady-state: d[intermediate]/dt ≈ 0. The intermediate is formed and consumed at equal rates, so its concentration is approximately constant.',
          keyPoints: [
            'More general than pre-equilibrium.',
            'Rarely requires full treatment on the AP exam.'
          ],
          formulae: []
        }
      },
      examTips: [
        'If the AP exam mentions "steady-state approximation," the key idea is that intermediate concentration is constant. You likely will not need to do the full calculus derivation.'
      ],
      connections: [
        { color: 'purple', label: '\u2192 Unit 9: Steady-state connects to equilibrium concepts — both involve balanced rates', sec: 'content' }
      ],
      questionIds: []
    },

    /* ============================================================
       TOPIC 5.10 — Multistep Reaction Energy Profile
       ============================================================ */
    {
      id: 'U5.10.1', code: 'Topic 5.10', subtopic: '5.10',
      subtopicTitle: 'Multistep Reaction Energy Profile', section: 'unit5',
      concepts: ['ene', 'tra'],
      statement: 'Multistep reaction energy profiles show multiple transition states (peaks) and intermediates (valleys). The highest transition state corresponds to the rate-determining step.',
      content: {
        textbook: {
          explanation: '<p>For a reaction with multiple elementary steps, the <b>energy profile</b> shows multiple peaks and valleys:</p><ul><li>Each <b>peak</b> represents a <b>transition state</b> for one elementary step.</li><li>Each <b>valley</b> between peaks represents an <b>intermediate</b> — a real, though short-lived, species.</li><li>The <b>highest peak</b> corresponds to the <b>rate-determining step</b> (slowest step) because it has the largest activation energy.</li></ul><p>For a two-step mechanism:</p><p>The profile shows reactants, a first transition state (peak 1), an intermediate (valley), a second transition state (peak 2), and products. If peak 1 is higher, step 1 is the RDS; if peak 2 is higher, step 2 is the RDS.</p><p><b>Reading the diagram:</b></p><ul><li>E<sub>a</sub> for step 1 = height of peak 1 above reactants.</li><li>E<sub>a</sub> for step 2 = height of peak 2 above the intermediate.</li><li>&Delta;H for step 1 = energy of intermediate &minus; energy of reactants.</li><li>&Delta;H overall = energy of products &minus; energy of reactants.</li></ul>',
          keyPoints: [
            'Each elementary step has its own transition state (peak).',
            'Intermediates are at local minima (valleys) between peaks.',
            'The highest peak = rate-determining step (largest Ea barrier).',
            'Number of peaks = number of elementary steps.',
            'Overall ΔH = E(products) − E(reactants), regardless of pathway.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Interpreting a Two-Step Energy Profile',
              body: '<p><b>Q:</b> A two-step energy profile shows: Reactants at 40 kJ, Transition state 1 at 110 kJ, Intermediate at 60 kJ, Transition state 2 at 90 kJ, Products at 10 kJ. (a) Identify the RDS. (b) Calculate E<sub>a</sub> for each step. (c) Calculate &Delta;H overall.</p><p><b>A:</b> (a) Peak 1 (110 kJ) is higher than Peak 2 (90 kJ), so <b>Step 1 is the RDS</b>.</p><p>(b) E<sub>a</sub>(step 1) = 110 &minus; 40 = <b>70 kJ</b>. E<sub>a</sub>(step 2) = 90 &minus; 60 = <b>30 kJ</b>.</p><p>(c) &Delta;H = 10 &minus; 40 = <b>&minus;30 kJ</b> (exothermic).</p>'
            }
          ],
          warnings: [
            'Do not confuse the Ea of a step with the height of the peak above the x-axis. Ea for step 2 is measured from the intermediate (the valley), not from the reactants.',
            'The number of intermediates = number of peaks minus 1.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Multi-step profiles: peaks = transition states (one per step), valleys = intermediates. Highest peak = RDS. Ea for each step measured from the preceding minimum.',
          keyPoints: [
            'n steps → n peaks, (n−1) intermediates.',
            'Overall ΔH is independent of the pathway.',
            'Ea of step 2 is measured from the intermediate, not from reactants.'
          ],
          formulae: []
        }
      },
      examTips: [
        'AP exams frequently show multistep energy profiles and ask you to identify the RDS, number of intermediates, or Ea for a specific step. Practice reading these diagrams.',
        'Common mistake: measuring Ea of step 2 from the reactants instead of from the intermediate. Read carefully from the correct starting point.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 5.6: Single-step energy profiles are a special case', sec: 'content' },
        { color: 'blue', label: '\u2192 Topic 5.7: Each peak/valley corresponds to a step/intermediate in the mechanism', sec: 'content' }
      ],
      questionIds: ['U5Q026']
    },
    {
      id: 'U5.10.2', code: 'Topic 5.10', subtopic: '5.10',
      subtopicTitle: 'Multistep Reaction Energy Profile', section: 'unit5',
      concepts: ['ene', 'tra'],
      statement: 'The overall enthalpy change (ΔH) of a multistep reaction is the difference between product and reactant energies and is independent of the pathway (Hess\'s law).',
      content: {
        textbook: {
          explanation: '<p>Regardless of how many steps a reaction takes, the <b>overall &Delta;H</b> depends only on the initial (reactant) and final (product) energy levels. This is a direct consequence of <b>Hess\'s law</b>: enthalpy is a state function.</p><p>On the energy profile, &Delta;H<sub>overall</sub> = E<sub>products</sub> &minus; E<sub>reactants</sub>, and the heights of the peaks and valleys along the way do not affect this value. The pathway determines the kinetics (rate), but thermodynamics (&Delta;H) depends only on the endpoints.</p>',
          keyPoints: [
            'ΔH = E(products) − E(reactants) regardless of the pathway.',
            'This is Hess\'s law applied to energy profiles.',
            'Kinetics (rate, Ea) depends on the pathway; thermodynamics (ΔH) does not.'
          ],
          formulae: [],
          workedExamples: [],
          warnings: [],
          diagrams: []
        },
        studyGuide: {
          essentials: 'ΔH overall = products − reactants, independent of pathway. Hess\'s law ensures this.',
          keyPoints: [
            'Kinetics ≠ thermodynamics. A reaction can be thermodynamically favorable (ΔH < 0) but kinetically slow (high Ea).'
          ],
          formulae: []
        }
      },
      examTips: [
        'AP tip: A reaction with ΔH < 0 is not necessarily fast. Diamond → graphite is thermodynamically favorable but kinetically extremely slow.'
      ],
      connections: [
        { color: 'purple', label: '\u2192 Unit 6: Hess\'s law and enthalpy as a state function', sec: 'content' },
        { color: 'orange', label: '\u2192 Unit 9: Thermodynamic favorability (ΔG) does not tell you about rate', sec: 'content' }
      ],
      questionIds: []
    },

    /* ============================================================
       TOPIC 5.11 — Catalysis
       ============================================================ */
    {
      id: 'U5.11.1', code: 'Topic 5.11', subtopic: '5.11',
      subtopicTitle: 'Catalysis', section: 'unit5',
      concepts: ['transformations', 'ene'],
      statement: 'Catalysts increase reaction rates by providing an alternative mechanism with lower activation energy. They are consumed in one step and regenerated in another, so they are not used up overall.',
      content: {
        textbook: {
          explanation: '<p>A <b>catalyst</b> is a substance that increases the rate of a reaction without being consumed overall. Key characteristics:</p><ul><li>Provides an <b>alternative reaction pathway</b> with lower activation energy (E<sub>a</sub>).</li><li>Does <b>not change &Delta;H</b> — the thermodynamics of the reaction are unchanged.</li><li>Does <b>not change the equilibrium position</b> — it speeds up both forward and reverse reactions equally.</li><li>Is <b>regenerated</b> at the end of the catalytic cycle.</li></ul><p><b>Types of catalysts:</b></p><ul><li><b>Homogeneous catalyst:</b> Same phase as the reactants. Example: H<sup>+</sup> (acid catalyst) in the esterification of carboxylic acids.</li><li><b>Heterogeneous catalyst:</b> Different phase from the reactants, usually a solid catalyst with gas or liquid reactants. Example: Pt or Pd surfaces in catalytic converters. Reactants adsorb onto the surface, react, and products desorb.</li><li><b>Enzymes:</b> Biological catalysts (proteins) that are highly specific. They lower E<sub>a</sub> by binding substrates in an active site with precise orientation.</li></ul>',
          keyPoints: [
            'Catalyst lowers Ea by providing an alternative pathway.',
            'Does not change ΔH or equilibrium position.',
            'Consumed then regenerated — not used up.',
            'Homogeneous: same phase; heterogeneous: different phase; enzyme: biological.',
            'Heterogeneous catalysis involves adsorption of reactants onto a surface.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Identifying Catalyst and Intermediate in a Mechanism',
              body: '<p><b>Q:</b> The decomposition of ozone is catalyzed by Cl atoms:<br>Step 1: Cl + O<sub>3</sub> &rarr; ClO + O<sub>2</sub><br>Step 2: ClO + O &rarr; Cl + O<sub>2</sub><br>Overall: O<sub>3</sub> + O &rarr; 2 O<sub>2</sub><br>Identify the catalyst and intermediate.</p><p><b>A:</b> <b>Cl is the catalyst</b> — it is consumed in Step 1 and regenerated in Step 2 (present initially, not in overall equation). <b>ClO is the intermediate</b> — it is produced in Step 1 and consumed in Step 2 (not in overall equation, not present initially).</p>'
            }
          ],
          warnings: [
            'A catalyst speeds up BOTH the forward and reverse reactions equally. It does NOT shift equilibrium — this is one of the most common misconceptions on the AP exam.',
            'Enzymes are catalysts — they can be saturated (all active sites occupied), which is why enzyme kinetics can appear zero-order at high substrate concentrations.'
          ],
          diagrams: ['catalystProfile']
        },
        studyGuide: {
          essentials: 'Catalysts lower Ea via an alternative pathway, do not change ΔH or K, and are regenerated. Three types: homogeneous, heterogeneous, enzyme.',
          keyPoints: [
            'Catalyst vs intermediate: catalyst is present initially and regenerated; intermediate is produced then consumed.',
            'Heterogeneous catalysis: adsorption → reaction → desorption.',
            'Enzymes have active sites and exhibit substrate specificity.'
          ],
          formulae: []
        }
      },
      examTips: [
        'The statement "a catalyst does not change the equilibrium constant" appears on nearly every AP exam in some form. Know it cold.',
        'If an AP question shows a mechanism and asks "what is the catalyst?" — look for the species that is consumed early and regenerated later, and is present before the reaction starts.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 5.6: Catalyst on energy profile = lower peak, same endpoints', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 9: Catalyst reaches equilibrium faster but does not change K', sec: 'content' },
        { color: 'blue', label: '\u2192 Unit 7: Enzyme catalysis connects to biochemistry of equilibrium', sec: 'content' }
      ],
      questionIds: ['U5Q027']
    },
    {
      id: 'U5.11.2', code: 'Topic 5.11', subtopic: '5.11',
      subtopicTitle: 'Catalysis', section: 'unit5',
      concepts: ['transformations', 'ene'],
      statement: 'Heterogeneous catalysis involves adsorption of reactants onto a catalyst surface, reaction on the surface, and desorption of products. The surface area of the catalyst affects its effectiveness.',
      content: {
        textbook: {
          explanation: '<p><b>Heterogeneous catalysis</b> occurs when the catalyst is in a different phase from the reactants (typically a solid catalyst with gas or liquid reactants). The process involves four steps:</p><ol><li><b>Adsorption:</b> Reactant molecules bind to the catalyst surface at active sites.</li><li><b>Activation:</b> Bonds in the adsorbed molecules are weakened, lowering the activation energy.</li><li><b>Reaction:</b> The adsorbed reactants react on the surface to form products.</li><li><b>Desorption:</b> Product molecules leave the catalyst surface, freeing active sites for more reactants.</li></ol><p><b>Factors affecting heterogeneous catalysis:</b></p><ul><li><b>Surface area:</b> More surface area = more active sites = faster rate. Catalysts are often finely divided or have porous structures (e.g., catalytic converters use a honeycomb structure).</li><li><b>Poisoning:</b> Certain substances (poisons) bind irreversibly to active sites, deactivating the catalyst. Example: lead poisons the Pt/Pd catalyst in catalytic converters (this is why leaded gasoline is not used with catalytic converters).</li></ul>',
          keyPoints: [
            'Heterogeneous: catalyst and reactants in different phases.',
            'Process: adsorption → activation → reaction → desorption.',
            'Greater surface area of catalyst → more active sites → faster rate.',
            'Catalyst poisoning = irreversible binding to active sites.',
            'Catalytic converters use finely divided Pt/Pd on a high-surface-area support.'
          ],
          formulae: [],
          workedExamples: [],
          warnings: [
            'Adsorption (with a "d") is the binding of molecules to a surface. Absorption (with a "b") is the uptake of molecules into the bulk of a material. These are different processes.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Heterogeneous catalysis: adsorption → reaction on surface → desorption. Surface area matters. Catalyst poisoning blocks active sites.',
          keyPoints: [
            'Adsorption (d) ≠ absorption (b).',
            'Catalytic converters: Pt/Pd surface catalyzes exhaust gas reactions.',
            'Lead poisoning of catalysts → why unleaded gasoline is required.'
          ],
          formulae: []
        }
      },
      examTips: [
        'AP may ask why increasing the surface area of a heterogeneous catalyst increases the rate — the answer involves more active sites available for adsorption.',
        'Know the difference between adsorption and absorption — this is a common terminology question.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 5.1: Surface area is one of the factors affecting rate', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 4: Catalytic converters relate to industrial chemistry applications', sec: 'content' }
      ],
      questionIds: ['U5Q028']
    }
  ]
};

window.DB = window.DB || {};
if (!window.DB.u5labs) window.DB.u5labs = [];
