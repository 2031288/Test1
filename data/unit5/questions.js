// Unit 5 — Kinetics — Questions
// 28 questions covering all 11 topics
// Mix: ~16 MCQ, ~7 short answer, ~5 FRQ
window.DB_U5_QUESTIONS = [

  /* ============================================================
     TOPIC 5.1 — Reaction Rates
     ============================================================ */
  {
    id: 'U5Q001', understandingId: 'U5.1.1', subtopic: '5.1', section: 'unit5',
    concepts: ['transformations'], type: 'mcq', commandTerm: 'calculate', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'For the reaction 2 N<sub>2</sub>O<sub>5</sub>(g) → 4 NO<sub>2</sub>(g) + O<sub>2</sub>(g), if the rate of disappearance of N<sub>2</sub>O<sub>5</sub> is 4.0 × 10<sup>−</sup><sup>3</sup> M/s, what is the rate of appearance of NO<sub>2</sub>?',
    options: {
      A: '2.0 × 10<sup>−</sup><sup>3</sup> M/s',
      B: '4.0 × 10<sup>−</sup><sup>3</sup> M/s',
      C: '8.0 × 10<sup>−</sup><sup>3</sup> M/s',
      D: '1.6 × 10<sup>−</sup><sup>2</sup> M/s'
    },
    answer: 'C',
    explanation: 'Rate of disappearance of N<sub>2</sub>O<sub>5</sub> = 4.0 × 10<sup>−</sup><sup>3</sup> M/s. The reaction rate = (1/2)(4.0 × 10<sup>−</sup><sup>3</sup>) = 2.0 × 10<sup>−</sup><sup>3</sup> M/s. Rate of appearance of NO<sub>2</sub> = 4 × (reaction rate) = 4 × 2.0 × 10<sup>−</sup><sup>3</sup> = 8.0 × 10<sup>−</sup><sup>3</sup> M/s. Alternatively, the stoichiometric ratio of NO<sub>2</sub> to N<sub>2</sub>O<sub>5</sub> is 4:2 = 2:1, so the rate of NO<sub>2</sub> appearance = 2 × 4.0 × 10<sup>−</sup><sup>3</sup> = 8.0 × 10<sup>−</sup><sup>3</sup> M/s.',
    markScheme: null
  },
  {
    id: 'U5Q002', understandingId: 'U5.1.1', subtopic: '5.1', section: 'unit5',
    concepts: ['transformations'], type: 'mcq', commandTerm: 'identify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'Which of the following correctly describes the instantaneous rate of a reaction?',
    options: {
      A: 'The change in concentration of a reactant over the entire duration of the reaction',
      B: 'The slope of the tangent line to the concentration-vs-time curve at a specific time',
      C: 'The average rate calculated between two time points',
      D: 'The rate constant multiplied by the initial concentration'
    },
    answer: 'B',
    explanation: 'The instantaneous rate at a specific time is defined as the slope of the tangent line to the [reactant] or [product] vs time curve at that moment. Option A describes the average rate over the whole reaction. Option C is the average rate over an interval. Option D confuses rate with the rate law.',
    markScheme: null
  },
  {
    id: 'U5Q003', understandingId: 'U5.1.2', subtopic: '5.1', section: 'unit5',
    concepts: ['transformations'], type: 'mcq', commandTerm: 'predict', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'Which change will increase the rate of reaction between zinc metal and hydrochloric acid?',
    options: {
      A: 'Using a single large piece of zinc instead of zinc powder',
      B: 'Decreasing the temperature of the solution',
      C: 'Increasing the concentration of HCl',
      D: 'Adding water to dilute the HCl solution'
    },
    answer: 'C',
    explanation: 'Increasing [HCl] increases the collision frequency between H<sup>+</sup> ions and the zinc surface, increasing the rate. Option A decreases surface area (slower). Option B decreases KE (slower). Option D decreases [HCl] (slower).',
    markScheme: null
  },

  /* ============================================================
     TOPIC 5.2 — Introduction to Rate Law
     ============================================================ */
  {
    id: 'U5Q004', understandingId: 'U5.2.1', subtopic: '5.2', section: 'unit5',
    concepts: ['transformations'], type: 'mcq', commandTerm: 'identify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'For the rate law Rate = k[A]<sup>2</sup>[B], what is the overall order of the reaction?',
    options: {
      A: '1',
      B: '2',
      C: '3',
      D: '4'
    },
    answer: 'C',
    explanation: 'The overall order is the sum of the individual orders: 2 (for A) + 1 (for B) = 3. The overall order is 3rd order.',
    markScheme: null
  },
  {
    id: 'U5Q005', understandingId: 'U5.2.1', subtopic: '5.2', section: 'unit5',
    concepts: ['transformations'], type: 'mcq', commandTerm: 'determine', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'A reaction has the rate law Rate = k[X]<sup>0</sup>[Y]<sup>2</sup>. If [X] is tripled and [Y] is doubled, by what factor does the rate increase?',
    options: {
      A: '4',
      B: '6',
      C: '12',
      D: '36'
    },
    answer: 'A',
    explanation: 'Since the reaction is zero order in X, changing [X] has no effect on the rate (factor = 3<sup>0</sup> = 1). Since it is second order in Y, doubling [Y] increases the rate by a factor of 2<sup>2</sup> = 4. Total factor = 1 × 4 = 4.',
    markScheme: null
  },
  {
    id: 'U5Q006', understandingId: 'U5.2.2', subtopic: '5.2', section: 'unit5',
    concepts: ['transformations'], type: 'short', commandTerm: 'determine', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'The following data were collected for the reaction A + 2B → C:\n\nExperiment 1: [A] = 0.10 M, [B] = 0.10 M, Rate = 1.5 × 10<sup>−</sup><sup>4</sup> M/s\nExperiment 2: [A] = 0.20 M, [B] = 0.10 M, Rate = 3.0 × 10<sup>−</sup><sup>4</sup> M/s\nExperiment 3: [A] = 0.10 M, [B] = 0.30 M, Rate = 1.35 × 10<sup>−</sup><sup>3</sup> M/s\n\nDetermine the rate law and the value of k (with units).',
    options: null,
    answer: 'Order in A: Rate<sub>2</sub>/Rate<sub>1</sub> = 3.0 × 10<sup>−</sup><sup>4</sup>/1.5 × 10<sup>−</sup><sup>4</sup> = 2.0; [A]<sub>2</sub>/[A]<sub>1</sub> = 0.20/0.10 = 2.0; 2.0 = 2.0^m → m = 1. Order in B: Rate<sub>3</sub>/Rate<sub>1</sub> = 1.35 × 10<sup>−</sup><sup>3</sup>/1.5 × 10<sup>−</sup><sup>4</sup> = 9.0; [B]<sub>3</sub>/[B]<sub>1</sub> = 0.30/0.10 = 3.0; 9.0 = 3.0^n → n = 2. Rate law: Rate = k[A][B]<sup>2</sup>. k = Rate/(​[A][B]<sup>2</sup>) = 1.5 × 10<sup>−</sup><sup>4</sup>/(0.10 × 0.10<sup>2</sup>) = 1.5 × 10<sup>−</sup><sup>4</sup>/1.0 × 10<sup>−</sup><sup>3</sup> = 0.15 M<sup>−</sup><sup>2</sup> s<sup>−</sup><sup>1</sup>.',
    explanation: 'Using the method of initial rates: compare experiments where only one reactant changes. Experiments 1 & 2 isolate A (first order). Experiments 1 & 3 isolate B (second order). Rate law: Rate = k[A][B]<sup>2</sup>. Solving for k using Experiment 1 gives k = 0.15 M<sup>−</sup><sup>2</sup> s<sup>−</sup><sup>1</sup>.',
    markScheme: '1 mark: correct orders (m = 1, n = 2) with justification. 1 mark: correct rate law. 1 mark: correct value and units of k.'
  },
  {
    id: 'U5Q007', understandingId: 'U5.2.2', subtopic: '5.2', section: 'unit5',
    concepts: ['transformations'], type: 'frq', commandTerm: 'determine', difficulty: 3,
    source: 'original', marks: 7,
    stem: 'The reaction 2 A + B → 3 C was studied and the following initial rate data were collected:\n\nExperiment 1: [A] = 0.050 M, [B] = 0.050 M, Rate = 1.25 × 10<sup>−</sup><sup>5</sup> M/s\nExperiment 2: [A] = 0.100 M, [B] = 0.050 M, Rate = 5.00 × 10<sup>−</sup><sup>5</sup> M/s\nExperiment 3: [A] = 0.050 M, [B] = 0.100 M, Rate = 1.25 × 10<sup>−</sup><sup>5</sup> M/s\nExperiment 4: [A] = 0.100 M, [B] = 0.100 M, Rate = 5.00 × 10<sup>−</sup><sup>5</sup> M/s\n\n(a) Determine the order with respect to A. Show your reasoning.\n(b) Determine the order with respect to B. Show your reasoning.\n(c) Write the overall rate law.\n(d) Calculate the value of the rate constant k, including units.\n(e) Predict the initial rate when [A] = 0.200 M and [B] = 0.150 M.\n(f) Explain why the order in B is not 2 even though the coefficient of B in the balanced equation is 1 (and A is 2).',
    options: null,
    answer: '(a) Compare Exp 1 & 2: Rate<sub>2</sub>/Rate<sub>1</sub> = 5.00 × 10<sup>−</sup><sup>5</sup>/1.25 × 10<sup>−</sup><sup>5</sup> = 4.00; [A]<sub>2</sub>/[A]<sub>1</sub> = 0.100/0.050 = 2.00; 4.00 = 2.00^m, m = 2. Second order in A.\n(b) Compare Exp 1 & 3: Rate<sub>3</sub>/Rate<sub>1</sub> = 1.25 × 10<sup>−</sup><sup>5</sup>/1.25 × 10<sup>−</sup><sup>5</sup> = 1.00; [B]<sub>3</sub>/[B]<sub>1</sub> = 0.100/0.050 = 2.00; 1.00 = 2.00^n, n = 0. Zero order in B.\n(c) Rate = k[A]<sup>2</sup>\n(d) k = Rate/[A]<sup>2</sup> = 1.25 × 10<sup>−</sup><sup>5</sup>/(0.050)<sup>2</sup> = 5.0 × 10<sup>−</sup><sup>3</sup> M<sup>−</sup><sup>1</sup> s<sup>−</sup><sup>1</sup>\n(e) Rate = 5.0 × 10<sup>−</sup><sup>3</sup> × (0.200)<sup>2</sup> = 5.0 × 10<sup>−</sup><sup>3</sup> × 0.040 = 2.0 × 10<sup>−</sup><sup>4</sup> M/s\n(f) Reaction orders are determined experimentally, not from stoichiometric coefficients. The coefficients in the balanced equation give mole ratios for stoichiometry but do not indicate the rate law unless the reaction is an elementary step. Since this is an overall reaction (not stated as elementary), the orders must be found from experiment.',
    explanation: 'This problem tests the method of initial rates comprehensively: determining orders, writing the rate law, calculating k, predicting a new rate, and understanding that orders ≠ coefficients for non-elementary reactions.',
    markScheme: '(a) 1 mark: correct ratio comparison, 1 mark: m = 2. (b) 1 mark: correct ratio comparison, 1 mark: n = 0. (c) 1 mark: Rate = k[A]<sup>2</sup>. (d) 1 mark: k = 5.0 × 10<sup>−</sup><sup>3</sup> M<sup>−</sup><sup>1</sup> s<sup>−</sup><sup>1</sup> with correct units. (e) 1 mark: 2.0 × 10<sup>−</sup><sup>4</sup> M/s. (f) 1 mark: orders are experimental, not from coefficients (unless elementary).'
  },
  {
    id: 'U5Q008', understandingId: 'U5.2.2', subtopic: '5.2', section: 'unit5',
    concepts: ['transformations'], type: 'mcq', commandTerm: 'determine', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'In an experiment, tripling the concentration of reactant X causes the rate to increase by a factor of 9, and doubling the concentration of reactant Y causes the rate to increase by a factor of 2. What is the rate law?',
    options: {
      A: 'Rate = k[X][Y]',
      B: 'Rate = k[X]<sup>2</sup>[Y]',
      C: 'Rate = k[X]<sup>2</sup>[Y]<sup>2</sup>',
      D: 'Rate = k[X]<sup>3</sup>[Y]'
    },
    answer: 'B',
    explanation: 'Tripling [X] gives 9× rate: 9 = 3^m → m = 2 (second order in X). Doubling [Y] gives 2× rate: 2 = 2^n → n = 1 (first order in Y). Rate = k[X]<sup>2</sup>[Y].',
    markScheme: null
  },
  {
    id: 'U5Q009', understandingId: 'U5.2.3', subtopic: '5.2', section: 'unit5',
    concepts: ['transformations'], type: 'mcq', commandTerm: 'identify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'A reaction has a rate constant k = 0.025 M<sup>−</sup><sup>1</sup> s<sup>−</sup><sup>1</sup>. What is the overall order of this reaction?',
    options: {
      A: 'Zero order',
      B: 'First order',
      C: 'Second order',
      D: 'Third order'
    },
    answer: 'C',
    explanation: 'The units M<sup>−</sup><sup>1</sup> s<sup>−</sup><sup>1</sup> correspond to a second-order reaction. For second order: Rate (M/s) = k(M<sup>−</sup><sup>1</sup> s<sup>−</sup><sup>1</sup>) × [A]<sup>2</sup>(M<sup>2</sup>). Zero order: k in M/s. First order: k in s<sup>−</sup><sup>1</sup>. Third order: k in M<sup>−</sup><sup>2</sup> s<sup>−</sup><sup>1</sup>.',
    markScheme: null
  },

  /* ============================================================
     TOPIC 5.3 — Concentration Changes Over Time
     ============================================================ */
  {
    id: 'U5Q010', understandingId: 'U5.3.1', subtopic: '5.3', section: 'unit5',
    concepts: ['transformations'], type: 'mcq', commandTerm: 'identify', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'For a reaction, a plot of 1/[A] vs time gives a straight line. Which statement is correct?',
    options: {
      A: 'The reaction is zero order and the slope equals −k.',
      B: 'The reaction is first order and the slope equals −k.',
      C: 'The reaction is second order and the slope equals +k.',
      D: 'The reaction is second order and the slope equals −k.'
    },
    answer: 'C',
    explanation: 'A linear plot of 1/[A] vs t is characteristic of a second-order reaction. The integrated rate law is 1/[A] = 1/[A]<sub>0</sub> + kt, so the slope is +k (positive). For first order, ln[A] vs t is linear. For zero order, [A] vs t is linear.',
    markScheme: null
  },
  {
    id: 'U5Q011', understandingId: 'U5.3.1', subtopic: '5.3', section: 'unit5',
    concepts: ['transformations'], type: 'short', commandTerm: 'calculate', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'A first-order reaction has [A]<sub>0</sub> = 0.500 M and k = 3.50 × 10<sup>−</sup><sup>2</sup> s<sup>−</sup><sup>1</sup>. (a) Calculate [A] after 40.0 s. (b) How long does it take for [A] to decrease to 0.100 M?',
    options: null,
    answer: '(a) ln[A] = ln(0.500) − (3.50 × 10<sup>−</sup><sup>2</sup>)(40.0) = −0.6931 − 1.400 = −2.093. [A] = e<sup>−</sup><sup>2</sup>·<sup>09</sup><sup>3</sup> = 0.123 M.\n(b) ln(0.100) = ln(0.500) − (3.50 × 10<sup>−</sup><sup>2</sup>)t. −2.303 = −0.6931 − 0.0350t. −1.610 = −0.0350t. t = 46.0 s.',
    explanation: 'Use the first-order integrated rate law: ln[A] = ln[A]<sub>0</sub> − kt. For part (a), substitute known values. For part (b), solve for t.',
    markScheme: '(a) 1 mark: correct setup of first-order equation. 1 mark: [A] = 0.123 M. (b) 1 mark: t = 46.0 s.'
  },
  {
    id: 'U5Q012', understandingId: 'U5.3.2', subtopic: '5.3', section: 'unit5',
    concepts: ['transformations'], type: 'mcq', commandTerm: 'calculate', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'A first-order reaction has a rate constant of 0.0231 min<sup>−</sup><sup>1</sup>. What is the half-life?',
    options: {
      A: '10 min',
      B: '15 min',
      C: '20 min',
      D: '30 min'
    },
    answer: 'D',
    explanation: 't<sub>1</sub>/<sub>2</sub> = 0.693/k = 0.693/0.0231 = 30.0 min. For first-order reactions, the half-life is constant and equals ln 2 divided by k.',
    markScheme: null
  },
  {
    id: 'U5Q013', understandingId: 'U5.3.2', subtopic: '5.3', section: 'unit5',
    concepts: ['transformations'], type: 'short', commandTerm: 'calculate', difficulty: 2,
    source: 'original', marks: 2,
    stem: 'A first-order reaction has a half-life of 24.0 minutes. If the initial concentration is 0.800 M, what concentration remains after 72.0 minutes?',
    options: null,
    answer: '72.0 min / 24.0 min = 3 half-lives. [A] = 0.800 / 2<sup>3</sup> = 0.800 / 8 = 0.100 M.',
    explanation: 'After each half-life, the concentration is halved. 72.0 min = 3 half-lives. After 3 half-lives: 0.800 → 0.400 → 0.200 → 0.100 M.',
    markScheme: '1 mark: identifying 3 half-lives. 1 mark: [A] = 0.100 M.'
  },

  /* ============================================================
     TOPIC 5.4 — Elementary Reactions
     ============================================================ */
  {
    id: 'U5Q014', understandingId: 'U5.4.1', subtopic: '5.4', section: 'unit5',
    concepts: ['transformations'], type: 'mcq', commandTerm: 'determine', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'For the elementary reaction 2 NO(g) + Cl<sub>2</sub>(g) → 2 NOCl(g), what is the rate law?',
    options: {
      A: 'Rate = k[NO][Cl<sub>2</sub>]',
      B: 'Rate = k[NO]<sup>2</sup>[Cl<sub>2</sub>]',
      C: 'Rate = k[NOCl]<sup>2</sup>',
      D: 'Rate = k[NO]<sup>2</sup>[Cl<sub>2</sub>]<sup>2</sup>'
    },
    answer: 'B',
    explanation: 'Because this is stated as an elementary reaction, the rate law can be written directly from the stoichiometry: Rate = k[NO]<sup>2</sup>[Cl<sub>2</sub>]. The exponents equal the stoichiometric coefficients (2 for NO, 1 for Cl<sub>2</sub>). This is a termolecular elementary step.',
    markScheme: null
  },

  /* ============================================================
     TOPIC 5.5 — Collision Model / Arrhenius Equation
     ============================================================ */
  {
    id: 'U5Q015', understandingId: 'U5.5.1', subtopic: '5.5', section: 'unit5',
    concepts: ['transformations', 'ene'], type: 'short', commandTerm: 'explain', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'Using collision theory, explain why increasing the temperature of a reaction mixture increases the rate of reaction. Your answer should reference specific molecular-level details.',
    options: null,
    answer: 'Increasing temperature increases the average kinetic energy of the molecules. According to the Maxwell-Boltzmann distribution, the fraction of molecules with kinetic energy greater than or equal to the activation energy (Ea) increases significantly. Additionally, molecules move faster, so the collision frequency increases slightly. The dominant effect is the increased fraction of effective collisions (those with E ≥ Ea and proper orientation), leading to a higher reaction rate.',
    explanation: 'The key AP requirement is to mention the Maxwell-Boltzmann distribution and the fraction of molecules exceeding Ea, not just "molecules move faster."',
    markScheme: '1 mark: increased KE / molecules move faster. 1 mark: greater fraction of molecules with E ≥ Ea (reference to Maxwell-Boltzmann distribution). 1 mark: more effective collisions → increased rate.'
  },
  {
    id: 'U5Q016', understandingId: 'U5.5.2', subtopic: '5.5', section: 'unit5',
    concepts: ['transformations', 'ene'], type: 'short', commandTerm: 'calculate', difficulty: 3,
    source: 'original', marks: 4,
    stem: 'The rate constant for a reaction is 4.50 × 10<sup>−</sup><sup>5</sup> s<sup>−</sup><sup>1</sup> at 300 K and 1.63 × 10<sup>−</sup><sup>3</sup> s<sup>−</sup><sup>1</sup> at 350 K. (a) Calculate the activation energy Ea in kJ/mol. (b) Calculate the rate constant at 400 K.',
    options: null,
    answer: '(a) ln(k<sub>2</sub>/k<sub>1</sub>) = (Ea/R)(1/T<sub>1</sub> − 1/T<sub>2</sub>)\nln(1.63 × 10<sup>−</sup><sup>3</sup> / 4.50 × 10<sup>−</sup><sup>5</sup>) = (Ea/8.314)(1/300 − 1/350)\nln(36.2) = (Ea/8.314)(3.333 × 10<sup>−</sup><sup>3</sup> − 2.857 × 10<sup>−</sup><sup>3</sup>)\n3.589 = (Ea/8.314)(4.762 × 10<sup>−</sup><sup>4</sup>)\nEa = 3.589 × 8.314 / 4.762 × 10<sup>−</sup><sup>4</sup> = 62,600 J/mol = 62.6 kJ/mol\n\n(b) ln(k<sub>3</sub>/k<sub>1</sub>) = (Ea/R)(1/T<sub>1</sub> − 1/T<sub>3</sub>)\nln(k<sub>3</sub>/4.50 × 10<sup>−</sup><sup>5</sup>) = (62600/8.314)(1/300 − 1/400)\nln(k<sub>3</sub>/4.50 × 10<sup>−</sup><sup>5</sup>) = 7529 × 8.333 × 10<sup>−</sup><sup>4</sup> = 6.274\nk<sub>3</sub>/4.50 × 10<sup>−</sup><sup>5</sup> = e<sup>6</sup>·<sup>27</sup><sup>4</sup> = 530.8\nk<sub>3</sub> = 530.8 × 4.50 × 10<sup>−</sup><sup>5</sup> = 0.0239 s<sup>−</sup><sup>1</sup>',
    explanation: 'Use the two-point Arrhenius equation. Part (a) solves for Ea from two (k, T) data points. Part (b) uses Ea to predict k at a third temperature.',
    markScheme: '(a) 1 mark: correct setup of two-point Arrhenius equation. 1 mark: Ea ≈ 62.6 kJ/mol. (b) 1 mark: correct setup for new temperature. 1 mark: k ≈ 0.024 s<sup>−</sup><sup>1</sup>.'
  },
  {
    id: 'U5Q017', understandingId: 'U5.5.2', subtopic: '5.5', section: 'unit5',
    concepts: ['transformations', 'ene'], type: 'mcq', commandTerm: 'identify', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'A plot of ln k versus 1/T gives a straight line. The activation energy can be determined from:',
    options: {
      A: 'The y-intercept, which equals Ea',
      B: 'The slope, which equals −Ea/R',
      C: 'The slope, which equals Ea/R',
      D: 'The x-intercept, which equals 1/Ea'
    },
    answer: 'B',
    explanation: 'The linearized Arrhenius equation is ln k = ln A − Ea/(RT) = ln A − (Ea/R)(1/T). This has the form y = b + mx where y = ln k, x = 1/T, slope = −Ea/R, and y-intercept = ln A. Therefore Ea = −slope × R.',
    markScheme: null
  },

  /* ============================================================
     TOPIC 5.6 — Reaction Energy Profile
     ============================================================ */
  {
    id: 'U5Q018', understandingId: 'U5.6.1', subtopic: '5.6', section: 'unit5',
    concepts: ['ene', 'transformations'], type: 'mcq', commandTerm: 'identify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'On a potential energy diagram, the activation energy (Ea) for the forward reaction is represented by:',
    options: {
      A: 'The energy difference between reactants and products',
      B: 'The energy difference between reactants and the transition state',
      C: 'The energy difference between products and the transition state',
      D: 'The total energy of the transition state'
    },
    answer: 'B',
    explanation: 'Ea(forward) = E(transition state) − E(reactants). Option A describes ΔH. Option C describes Ea(reverse). Option D is not a meaningful kinetic quantity.',
    markScheme: null
  },
  {
    id: 'U5Q019', understandingId: 'U5.6.1', subtopic: '5.6', section: 'unit5',
    concepts: ['ene', 'transformations'], type: 'short', commandTerm: 'calculate', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'A reaction energy profile shows the following energy values: Reactants = 80 kJ, Transition state = 200 kJ, Products = 30 kJ. (a) Calculate Ea(forward). (b) Calculate ΔH. (c) Calculate Ea(reverse). (d) Is the reaction exothermic or endothermic?',
    options: null,
    answer: '(a) Ea(forward) = 200 − 80 = 120 kJ. (b) ΔH = 30 − 80 = −50 kJ. (c) Ea(reverse) = 200 − 30 = 170 kJ. (d) Exothermic (ΔH < 0, products are lower in energy).',
    explanation: 'Ea(forward) is the barrier from reactants to transition state. ΔH is the difference between products and reactants. Ea(reverse) is the barrier from products to transition state. Check: Ea(reverse) = Ea(forward) − ΔH = 120 − (−50) = 170 kJ. ✓',
    markScheme: '1 mark: Ea = 120 kJ. 1 mark: ΔH = −50 kJ. 1 mark: Ea(reverse) = 170 kJ and identifying exothermic.'
  },

  /* ============================================================
     TOPIC 5.7 — Introduction to Reaction Mechanisms
     ============================================================ */
  {
    id: 'U5Q020', understandingId: 'U5.7.1', subtopic: '5.7', section: 'unit5',
    concepts: ['transformations'], type: 'short', commandTerm: 'identify', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'Consider the following mechanism:\nStep 1: 2 NO → N<sub>2</sub>O<sub>2</sub> (fast, equilibrium)\nStep 2: N<sub>2</sub>O<sub>2</sub> + O<sub>2</sub> → 2 NO<sub>2</sub> (slow)\n\n(a) Write the overall balanced equation.\n(b) Identify any intermediates.\n(c) How many transition states are in the energy profile for this mechanism?',
    options: null,
    answer: '(a) Adding the steps: 2 NO + N<sub>2</sub>O<sub>2</sub> + O<sub>2</sub> → N<sub>2</sub>O<sub>2</sub> + 2 NO<sub>2</sub>. Cancel N<sub>2</sub>O<sub>2</sub>: 2 NO + O<sub>2</sub> → 2 NO<sub>2</sub>.\n(b) N<sub>2</sub>O<sub>2</sub> is the intermediate (produced in Step 1, consumed in Step 2).\n(c) Two transition states — one for each elementary step.',
    explanation: 'The intermediate N<sub>2</sub>O<sub>2</sub> cancels when the steps are summed. Each elementary step has exactly one transition state, so a two-step mechanism has two transition states.',
    markScheme: '1 mark: correct overall equation. 1 mark: N<sub>2</sub>O<sub>2</sub> identified as intermediate. 1 mark: two transition states.'
  },

  /* ============================================================
     TOPIC 5.8 — Reaction Mechanism and Rate Law
     ============================================================ */
  {
    id: 'U5Q021', understandingId: 'U5.8.1', subtopic: '5.8', section: 'unit5',
    concepts: ['transformations'], type: 'frq', commandTerm: 'derive', difficulty: 3,
    source: 'original', marks: 6,
    stem: 'The following mechanism is proposed for the reaction 2 NO<sub>2</sub> + F<sub>2</sub> → 2 NO<sub>2</sub>F:\n\nStep 1: NO<sub>2</sub> + F<sub>2</sub> → NO<sub>2</sub>F + F (slow)\nStep 2: NO<sub>2</sub> + F → NO<sub>2</sub>F (fast)\n\n(a) Show that the mechanism is consistent with the overall stoichiometry.\n(b) Identify any intermediates.\n(c) Derive the rate law predicted by this mechanism.\n(d) What are the units of the rate constant?\n(e) If the experimental rate law is Rate = k[NO<sub>2</sub>][F<sub>2</sub>], is this mechanism consistent with the experimental data? Explain.',
    options: null,
    answer: '(a) Step 1 + Step 2: NO<sub>2</sub> + F<sub>2</sub> + NO<sub>2</sub> + F → NO<sub>2</sub>F + F + NO<sub>2</sub>F. Cancel F: 2 NO<sub>2</sub> + F<sub>2</sub> → 2 NO<sub>2</sub>F. ✓\n(b) F (fluorine atom) is the intermediate — produced in Step 1, consumed in Step 2.\n(c) The slow step (Step 1) determines the rate law: Rate = k<sub>1</sub>[NO<sub>2</sub>][F<sub>2</sub>]. No intermediates appear, so this is the final rate law: Rate = k[NO<sub>2</sub>][F<sub>2</sub>].\n(d) Overall order = 1 + 1 = 2. Units: M<sup>−</sup><sup>1</sup> s<sup>−</sup><sup>1</sup>.\n(e) Yes, the mechanism predicts Rate = k[NO<sub>2</sub>][F<sub>2</sub>], which matches the experimental rate law. The mechanism is consistent.',
    explanation: 'Since the slow step is first and contains no intermediates, the rate law is written directly. The predicted rate law matches the experimental one, confirming consistency.',
    markScheme: '(a) 1 mark: steps sum to overall equation. (b) 1 mark: F identified as intermediate. (c) 1 mark: rate law from slow step, 1 mark: Rate = k[NO<sub>2</sub>][F<sub>2</sub>]. (d) 1 mark: M<sup>−</sup><sup>1</sup> s<sup>−</sup><sup>1</sup>. (e) 1 mark: consistent with experimental rate law.'
  },
  {
    id: 'U5Q022', understandingId: 'U5.8.1', subtopic: '5.8', section: 'unit5',
    concepts: ['transformations'], type: 'frq', commandTerm: 'derive', difficulty: 3,
    source: 'original', marks: 7,
    stem: 'The decomposition of hydrogen peroxide is catalyzed by iodide ions:\n\nOverall: 2 H<sub>2</sub>O<sub>2</sub>(aq) → 2 H<sub>2</sub>O(l) + O<sub>2</sub>(g)\n\nProposed mechanism:\nStep 1: H<sub>2</sub>O<sub>2</sub> + I<sup>−</sup> → H<sub>2</sub>O + IO<sup>−</sup> (slow)\nStep 2: H<sub>2</sub>O<sub>2</sub> + IO<sup>−</sup> → H<sub>2</sub>O + O<sub>2</sub> + I<sup>−</sup> (fast)\n\n(a) Show the mechanism sums to the overall equation.\n(b) Identify the catalyst and any intermediates.\n(c) Derive the rate law.\n(d) The experimental rate law is Rate = k[H<sub>2</sub>O<sub>2</sub>][I<sup>−</sup>]. Is this mechanism consistent? Justify.\n(e) Explain why I<sup>−</sup> can appear in the rate law even though it is a catalyst.',
    options: null,
    answer: '(a) Step 1 + Step 2: 2 H<sub>2</sub>O<sub>2</sub> + I<sup>−</sup> + IO<sup>−</sup> → 2 H<sub>2</sub>O + IO<sup>−</sup> + O<sub>2</sub> + I<sup>−</sup>. Cancel I<sup>−</sup> and IO<sup>−</sup>: 2 H<sub>2</sub>O<sub>2</sub> → 2 H<sub>2</sub>O + O<sub>2</sub>. ✓\n(b) Catalyst: I<sup>−</sup> (consumed in Step 1, regenerated in Step 2; present initially). Intermediate: IO<sup>−</sup> (produced in Step 1, consumed in Step 2).\n(c) Slow step: Rate = k<sub>1</sub>[H<sub>2</sub>O<sub>2</sub>][I<sup>−</sup>]. No intermediates in this expression, so the rate law is: Rate = k[H<sub>2</sub>O<sub>2</sub>][I<sup>−</sup>].\n(d) Yes, the predicted rate law Rate = k[H<sub>2</sub>O<sub>2</sub>][I<sup>−</sup>] matches the experimental rate law. The mechanism is consistent with the data.\n(e) A catalyst participates in the rate-determining step. Since I<sup>−</sup> is a reactant in the slow step, it appears in the rate law. Catalysts are regenerated overall but can still affect the rate when they are consumed in the RDS.',
    explanation: 'This is a classic AP mechanism problem. The catalyst I<sup>−</sup> appears in the rate law because it is involved in the rate-determining step. The intermediate IO<sup>−</sup> does not appear in the rate law because it is produced after the RDS.',
    markScheme: '(a) 1 mark: correct sum. (b) 1 mark: I<sup>−</sup> = catalyst, IO<sup>−</sup> = intermediate. (c) 1 mark: rate law from slow step. (d) 1 mark: matches experimental rate law, 1 mark: justified. (e) 1 mark: catalyst is in the RDS, 1 mark: consumed then regenerated explanation.'
  },
  {
    id: 'U5Q023', understandingId: 'U5.8.1', subtopic: '5.8', section: 'unit5',
    concepts: ['transformations'], type: 'frq', commandTerm: 'derive', difficulty: 3,
    source: 'original', marks: 6,
    stem: 'For the reaction 2 NO(g) + 2 H<sub>2</sub>(g) → N<sub>2</sub>(g) + 2 H<sub>2</sub>O(g), the experimental rate law is Rate = k[NO]<sup>2</sup>[H<sub>2</sub>]. A proposed mechanism is:\n\nStep 1 (fast, eq): 2 NO ⇌ N<sub>2</sub>O<sub>2</sub> (K<sub>1</sub>)\nStep 2 (slow): N<sub>2</sub>O<sub>2</sub> + H<sub>2</sub> → N<sub>2</sub>O + H<sub>2</sub>O (k<sub>2</sub>)\nStep 3 (fast): N<sub>2</sub>O + H<sub>2</sub> → N<sub>2</sub> + H<sub>2</sub>O\n\n(a) Show the steps sum to the overall equation.\n(b) Identify all intermediates.\n(c) Derive the rate law from this mechanism, eliminating any intermediates.\n(d) Is the derived rate law consistent with the experimental rate law?',
    options: null,
    answer: '(a) Step 1: 2 NO ⇌ N<sub>2</sub>O<sub>2</sub>; Step 2: N<sub>2</sub>O<sub>2</sub> + H<sub>2</sub> → N<sub>2</sub>O + H<sub>2</sub>O; Step 3: N<sub>2</sub>O + H<sub>2</sub> → N<sub>2</sub> + H<sub>2</sub>O. Sum: 2 NO + 2 H<sub>2</sub> → N<sub>2</sub> + 2 H<sub>2</sub>O (N<sub>2</sub>O<sub>2</sub> and N<sub>2</sub>O cancel). ✓\n(b) N<sub>2</sub>O<sub>2</sub> and N<sub>2</sub>O are both intermediates.\n(c) Rate from slow step: Rate = k<sub>2</sub>[N<sub>2</sub>O<sub>2</sub>][H<sub>2</sub>]. N<sub>2</sub>O<sub>2</sub> is an intermediate. From Step 1 equilibrium: K<sub>1</sub> = [N<sub>2</sub>O<sub>2</sub>]/[NO]<sup>2</sup>, so [N<sub>2</sub>O<sub>2</sub>] = K<sub>1</sub>[NO]<sup>2</sup>. Substituting: Rate = k<sub>2</sub>K<sub>1</sub>[NO]<sup>2</sup>[H<sub>2</sub>] = kobs[NO]<sup>2</sup>[H<sub>2</sub>] where kobs = k<sub>2</sub>K<sub>1</sub>.\n(d) The derived rate law Rate = k[NO]<sup>2</sup>[H<sub>2</sub>] matches the experimental rate law. The mechanism is consistent. ✓',
    explanation: 'This is a classic pre-equilibrium problem. The fast equilibrium in Step 1 generates the intermediate N<sub>2</sub>O<sub>2</sub>, which is then consumed in the slow step. Using the equilibrium expression to eliminate the intermediate gives the correct rate law.',
    markScheme: '(a) 1 mark: steps sum correctly. (b) 1 mark: both N<sub>2</sub>O<sub>2</sub> and N<sub>2</sub>O identified. (c) 2 marks: correct derivation showing equilibrium substitution and final rate law. (d) 1 mark: consistent, 1 mark: explicit comparison.'
  },
  {
    id: 'U5Q024', understandingId: 'U5.8.2', subtopic: '5.8', section: 'unit5',
    concepts: ['transformations'], type: 'mcq', commandTerm: 'evaluate', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'The experimental rate law for a reaction is Rate = k[A]<sup>2</sup>. Which mechanism is NOT consistent with this rate law?',
    options: {
      A: 'A + A → products (elementary, slow)',
      B: 'Step 1 (slow): A → B; Step 2 (fast): A + B → products',
      C: 'Step 1 (fast, eq): 2A ⇌ A<sub>2</sub>; Step 2 (slow): A<sub>2</sub> → products',
      D: 'Step 1 (slow): A + A → C; Step 2 (fast): C → products'
    },
    answer: 'B',
    explanation: 'Option B: the slow step gives Rate = k[A] (first order in A), which does NOT match Rate = k[A]<sup>2</sup>. Options A and D: slow bimolecular step gives Rate = k[A]<sup>2</sup>. Option C: slow step gives Rate = k<sub>2</sub>[A<sub>2</sub>]; from equilibrium K<sub>1</sub> = [A<sub>2</sub>]/[A]<sup>2</sup>, so Rate = k<sub>2</sub>K<sub>1</sub>[A]<sup>2</sup> = k[A]<sup>2</sup>. All match except B.',
    markScheme: null
  },

  /* ============================================================
     TOPIC 5.9 — Steady-State Approximation
     ============================================================ */
  {
    id: 'U5Q025', understandingId: 'U5.9.1', subtopic: '5.9', section: 'unit5',
    concepts: ['transformations'], type: 'short', commandTerm: 'derive', difficulty: 3,
    source: 'original', marks: 4,
    stem: 'For the chlorination of chloroform (CHCl<sub>3</sub> + Cl<sub>2</sub> → CCl<sub>4</sub> + HCl), the proposed mechanism is:\n\nStep 1 (fast, eq): Cl<sub>2</sub> ⇌ 2 Cl (K<sub>1</sub>)\nStep 2 (slow): Cl + CHCl<sub>3</sub> → HCl + CCl<sub>3</sub> (k<sub>2</sub>)\nStep 3 (fast): Cl + CCl<sub>3</sub> → CCl<sub>4</sub>\n\nDerive the rate law, expressing it only in terms of reactant concentrations.',
    options: null,
    answer: 'Rate from slow step: Rate = k<sub>2</sub>[Cl][CHCl<sub>3</sub>]. Cl is an intermediate. From Step 1 equilibrium: K<sub>1</sub> = [Cl]<sup>2</sup>/[Cl<sub>2</sub>], so [Cl] = (K<sub>1</sub>[Cl<sub>2</sub>])^(1/2) = K<sub>1</sub>^(1/2)[Cl<sub>2</sub>]^(1/2). Substituting: Rate = k<sub>2</sub>K<sub>1</sub>^(1/2)[Cl<sub>2</sub>]^(1/2)[CHCl<sub>3</sub>] = k[Cl<sub>2</sub>]^(1/2)[CHCl<sub>3</sub>].',
    explanation: 'The pre-equilibrium in Step 1 involves a diatomic molecule dissociating into two atoms, so the equilibrium expression gives [Cl]<sup>2</sup> (not [Cl]). Taking the square root to solve for [Cl] introduces the 1/2 order in Cl<sub>2</sub>, which is experimentally observed.',
    markScheme: '1 mark: correct rate from slow step. 1 mark: correct equilibrium expression for Step 1. 1 mark: correct substitution and simplification. 1 mark: final rate law with correct orders.'
  },

  /* ============================================================
     TOPIC 5.10 — Multistep Reaction Energy Profile
     ============================================================ */
  {
    id: 'U5Q026', understandingId: 'U5.10.1', subtopic: '5.10', section: 'unit5',
    concepts: ['ene', 'transformations'], type: 'mcq', commandTerm: 'interpret', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'A two-step reaction energy profile shows the following: Reactants at 50 kJ, first transition state at 130 kJ, intermediate at 70 kJ, second transition state at 110 kJ, products at 20 kJ. Which statement is correct?',
    options: {
      A: 'Step 2 is the rate-determining step because the second transition state is at 110 kJ.',
      B: 'Step 1 is the rate-determining step because it has the higher activation energy (80 kJ vs 40 kJ).',
      C: 'The reaction is endothermic because the intermediate is higher in energy than the reactants.',
      D: 'The reaction has no intermediates because it is a two-step mechanism.'
    },
    answer: 'B',
    explanation: 'Ea(step 1) = 130 − 50 = 80 kJ. Ea(step 2) = 110 − 70 = 40 kJ. Step 1 has the larger Ea, so it is the RDS. The reaction is exothermic overall (ΔH = 20 − 50 = −30 kJ). The intermediate is at 70 kJ (the valley between peaks).',
    markScheme: null
  },

  /* ============================================================
     TOPIC 5.11 — Catalysis
     ============================================================ */
  {
    id: 'U5Q027', understandingId: 'U5.11.1', subtopic: '5.11', section: 'unit5',
    concepts: ['transformations', 'ene'], type: 'mcq', commandTerm: 'identify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'Which statement about catalysts is correct?',
    options: {
      A: 'A catalyst increases the equilibrium constant for a reaction.',
      B: 'A catalyst is consumed during the reaction and must be replaced.',
      C: 'A catalyst provides an alternative pathway with a lower activation energy.',
      D: 'A catalyst changes the enthalpy of the reaction.'
    },
    answer: 'C',
    explanation: 'A catalyst lowers Ea by providing an alternative pathway. It does NOT change K (equilibrium constant), ΔH (enthalpy change), or get consumed overall (it is regenerated). Option C is the only correct statement.',
    markScheme: null
  },
  {
    id: 'U5Q028', understandingId: 'U5.11.2', subtopic: '5.11', section: 'unit5',
    concepts: ['transformations', 'ene'], type: 'mcq', commandTerm: 'explain', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'In heterogeneous catalysis, a finely divided metal catalyst is more effective than a single large piece of the same metal because:',
    options: {
      A: 'The finely divided metal has a lower activation energy.',
      B: 'The finely divided metal has a greater surface area, providing more active sites for adsorption.',
      C: 'The finely divided metal changes the ΔH of the reaction.',
      D: 'The finely divided metal increases the equilibrium constant.'
    },
    answer: 'B',
    explanation: 'A finely divided catalyst has much greater surface area, exposing more active sites where reactant molecules can adsorb and react. The Ea lowered by the catalyst and the ΔH are properties of the reaction itself, not the physical form. The equilibrium constant is not affected by catalysts.',
    markScheme: null
  }
];
