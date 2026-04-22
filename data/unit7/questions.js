/*
 *  AP Chemistry – Unit 7: Equilibrium
 *  Data file: questions.js
 *  31 questions (18 MCQ, 8 short-answer, 5 FRQ)
 */

window.DB_U7_QUESTIONS = [

  /* ──────── 7.1 Introduction to Equilibrium ──────── */

  {
    id: 'U7Q001', understandingId: 'U7.1.1', subtopic: '7.1', section: 'unit7',
    concepts: ['equilibrium', 'dynamic-equilibrium'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'Which statement best describes a system at dynamic equilibrium?',
    options: {
      A: 'The forward and reverse reactions have stopped.',
      B: 'The concentrations of reactants and products are equal.',
      C: 'The rates of the forward and reverse reactions are equal, and concentrations are constant.',
      D: 'Only the forward reaction is occurring.'
    },
    answer: 'C',
    explanation: 'At dynamic equilibrium, both reactions continue at equal rates. Concentrations remain constant but are NOT necessarily equal. Reactions do not stop.',
    markScheme: null
  },

  {
    id: 'U7Q002', understandingId: 'U7.1.1', subtopic: '7.1', section: 'unit7',
    concepts: ['equilibrium', 'closed-system'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'Equilibrium can only be established in:',
    options: {
      A: 'an open system where gases can escape.',
      B: 'a closed system where no matter enters or leaves.',
      C: 'a system at high temperature.',
      D: 'a system where all reactants are consumed.'
    },
    answer: 'B',
    explanation: 'Equilibrium requires a closed system so that both forward and reverse reactions can occur. If products escape, the reverse reaction cannot happen and the reaction goes to completion.',
    markScheme: null
  },

  /* ──────── 7.2 Direction of Reversible Reactions ──────── */

  {
    id: 'U7Q003', understandingId: 'U7.2.1', subtopic: '7.2', section: 'unit7',
    concepts: ['equilibrium', 'reaction-direction'], type: 'mcq',
    commandTerm: 'determine', difficulty: 2, source: 'original', marks: 1,
    stem: 'For the reaction A(g) ⇌ 2 B(g), K_c = 0.50. A mixture contains [A] = 0.40 M and [B] = 0.60 M. In which direction will the reaction proceed?',
    options: {
      A: 'Forward, because Q < K.',
      B: 'Reverse, because Q > K.',
      C: 'No shift; the system is at equilibrium.',
      D: 'Forward, because Q > K.'
    },
    answer: 'B',
    explanation: 'Q = [B]<sup>2</sup>/[A] = (0.60)<sup>2</sup>/0.40 = 0.36/0.40 = 0.90. Since Q = 0.90 > K = 0.50, the system shifts in the reverse direction (toward reactants).',
    markScheme: null
  },

  /* ──────── 7.3 Reaction Quotient and Equilibrium Constant ──────── */

  {
    id: 'U7Q004', understandingId: 'U7.3.1', subtopic: '7.3', section: 'unit7',
    concepts: ['equilibrium-constant'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'Which species are excluded from the equilibrium constant expression?',
    options: {
      A: 'Gases',
      B: 'Aqueous ions',
      C: 'Pure solids and pure liquids',
      D: 'All solvents, including aqueous solutions'
    },
    answer: 'C',
    explanation: 'Pure solids and pure liquids have constant concentrations and are excluded from K expressions. Gases and aqueous species are included.',
    markScheme: null
  },

  {
    id: 'U7Q005', understandingId: 'U7.3.1', subtopic: '7.3', section: 'unit7',
    concepts: ['equilibrium-constant'], type: 'short',
    commandTerm: 'write', difficulty: 2, source: 'original', marks: 2,
    stem: 'Write the K_c expression for the following reaction: 2 Fe<sub>2</sub>O<sub>3</sub>(s) + 3 C(s) ⇌ 4 Fe(s) + 3 CO<sub>2</sub>(g). Explain which species are excluded and why.',
    options: null,
    answer: 'K_c = [CO<sub>2</sub>]<sup>3</sup>',
    explanation: 'Fe<sub>2</sub>O<sub>3</sub>(s), C(s), and Fe(s) are all pure solids and are excluded from the K expression. Only CO<sub>2</sub>(g) remains. K_c = [CO<sub>2</sub>]<sup>3</sup>. The exponent 3 comes from the stoichiometric coefficient.',
    markScheme: '1 mark: correct expression K_c = [CO<sub>2</sub>]<sup>3</sup>. 1 mark: explanation that pure solids are excluded because their concentrations are constant.'
  },

  {
    id: 'U7Q006', understandingId: 'U7.3.2', subtopic: '7.3', section: 'unit7',
    concepts: ['Kc-Kp'], type: 'mcq',
    commandTerm: 'determine', difficulty: 2, source: 'original', marks: 1,
    stem: 'For which reaction is K_p = K_c?',
    options: {
      A: 'N<sub>2</sub>(g) + 3 H<sub>2</sub>(g) ⇌ 2 NH<sub>3</sub>(g)',
      B: 'H<sub>2</sub>(g) + I<sub>2</sub>(g) ⇌ 2 HI(g)',
      C: 'PCl<sub>5</sub>(g) ⇌ PCl<sub>3</sub>(g) + Cl<sub>2</sub>(g)',
      D: '2 SO<sub>2</sub>(g) + O<sub>2</sub>(g) ⇌ 2 SO<sub>3</sub>(g)'
    },
    answer: 'B',
    explanation: 'K_p = K_c when Δn<sub>gas</sub> = 0. For H<sub>2</sub> + I<sub>2</sub> ⇌ 2 HI: Δn = 2 − 2 = 0. All other reactions have Δn ≠ 0.',
    markScheme: null
  },

  /* ──────── 7.4 Calculating the Equilibrium Constant ──────── */

  {
    id: 'U7Q007', understandingId: 'U7.4.1', subtopic: '7.4', section: 'unit7',
    concepts: ['equilibrium-constant', 'ICE-table'], type: 'short',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 3,
    stem: 'For CO(g) + H<sub>2</sub>O(g) ⇌ CO<sub>2</sub>(g) + H<sub>2</sub>(g), the initial concentrations are [CO] = 0.100 M and [H<sub>2</sub>O] = 0.100 M (no products initially). At equilibrium, [CO<sub>2</sub>] = 0.040 M. Calculate K_c.',
    options: null,
    answer: 'K_c = 0.44',
    explanation: 'Using ICE: [CO<sub>2</sub>] increased by 0.040 M, so [H<sub>2</sub>] = 0.040 M, [CO] = 0.100 − 0.040 = 0.060 M, [H<sub>2</sub>O] = 0.060 M. K_c = (0.040)(0.040)/[(0.060)(0.060)] = 0.0016/0.0036 = 0.44.',
    markScheme: '1 mark: correct ICE table setup. 1 mark: correct equilibrium concentrations. 1 mark: correct K_c value.'
  },

  {
    id: 'U7Q008', understandingId: 'U7.4.2', subtopic: '7.4', section: 'unit7',
    concepts: ['ICE-table', 'stoichiometry'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'For N<sub>2</sub>(g) + 3 H<sub>2</sub>(g) ⇌ 2 NH<sub>3</sub>(g), if x moles per liter of N<sub>2</sub> react to reach equilibrium, what is the change in [H<sub>2</sub>]?',
    options: {
      A: '−x',
      B: '−2x',
      C: '−3x',
      D: '+3x'
    },
    answer: 'C',
    explanation: 'From stoichiometry, 3 mol H<sub>2</sub> are consumed for every 1 mol N<sub>2</sub>. If N<sub>2</sub> decreases by x, H<sub>2</sub> decreases by 3x.',
    markScheme: null
  },

  /* ──────── 7.5 Magnitude of the Equilibrium Constant ──────── */

  {
    id: 'U7Q009', understandingId: 'U7.5.1', subtopic: '7.5', section: 'unit7',
    concepts: ['equilibrium-constant', 'equilibrium-position'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'A reaction has K_c = 3.2 × 10<sup>8</sup>. At equilibrium, the mixture contains mostly:',
    options: {
      A: 'reactants.',
      B: 'products.',
      C: 'equal amounts of reactants and products.',
      D: 'no reactants at all.'
    },
    answer: 'B',
    explanation: 'K >> 1 means the equilibrium strongly favors products. However, some reactants remain — the reaction does not go to absolute completion.',
    markScheme: null
  },

  {
    id: 'U7Q010', understandingId: 'U7.5.2', subtopic: '7.5', section: 'unit7',
    concepts: ['equilibrium-constant', 'temperature'], type: 'mcq',
    commandTerm: 'determine', difficulty: 2, source: 'original', marks: 1,
    stem: 'For an exothermic reaction, what happens to K when the temperature is increased?',
    options: {
      A: 'K increases.',
      B: 'K decreases.',
      C: 'K stays the same.',
      D: 'K becomes zero.'
    },
    answer: 'B',
    explanation: 'For exothermic reactions, heat is a "product." Increasing temperature shifts equilibrium to the left (endothermic direction), decreasing K.',
    markScheme: null
  },

  /* ──────── 7.6 Properties of the Equilibrium Constant ──────── */

  {
    id: 'U7Q011', understandingId: 'U7.6.1', subtopic: '7.6', section: 'unit7',
    concepts: ['K-manipulation'], type: 'short',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 3,
    stem: 'For A(g) ⇌ 2 B(g), K = 0.040. Calculate K for each: (a) 2 B(g) ⇌ A(g), (b) 2 A(g) ⇌ 4 B(g), (c) ½ A(g) ⇌ B(g).',
    options: null,
    answer: '(a) 25; (b) 1.6 × 10<sup>−</sup><sup>3</sup>; (c) 0.20',
    explanation: '(a) Reversed: K = 1/0.040 = 25. (b) Coefficients × 2: K = (0.040)<sup>2</sup> = 1.6 × 10<sup>−</sup><sup>3</sup>. (c) Coefficients × ½: K = (0.040)^(1/2) = 0.20.',
    markScheme: '1 mark each for correct answers: (a) 25, (b) 1.6 × 10<sup>−</sup><sup>3</sup>, (c) 0.20.'
  },

  {
    id: 'U7Q012', understandingId: 'U7.6.2', subtopic: '7.6', section: 'unit7',
    concepts: ['Hess-law-K'], type: 'mcq',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 1,
    stem: 'Given: Rxn 1: A ⇌ B (K<sub>1</sub> = 3.0) and Rxn 2: B ⇌ C (K<sub>2</sub> = 4.0). What is K for A ⇌ C?',
    options: {
      A: '7.0',
      B: '12',
      C: '1.3',
      D: '0.75'
    },
    answer: 'B',
    explanation: 'When reactions are added, K values are multiplied. K = K<sub>1</sub> × K<sub>2</sub> = 3.0 × 4.0 = 12.',
    markScheme: null
  },

  /* ──────── 7.7 Calculating Equilibrium Concentrations ──────── */

  {
    id: 'U7Q013', understandingId: 'U7.7.1', subtopic: '7.7', section: 'unit7',
    concepts: ['ICE-table', 'equilibrium-calculation'], type: 'frq',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 7,
    stem: 'For the reaction H<sub>2</sub>(g) + I<sub>2</sub>(g) ⇌ 2 HI(g), K_c = 50.5 at 448 °C. If 0.200 mol of H<sub>2</sub> and 0.200 mol of I<sub>2</sub> are placed in a 2.00 L vessel (no HI initially), calculate the equilibrium concentrations of all species. Show your complete ICE table and all work.',
    options: null,
    answer: '[H<sub>2</sub>] = [I<sub>2</sub>] = 0.0220 M, [HI] = 0.156 M',
    explanation: 'Initial: [H<sub>2</sub>] = [I<sub>2</sub>] = 0.200/2.00 = 0.100 M, [HI] = 0. ICE: C = −x, −x, +2x. E = 0.100−x, 0.100−x, 2x. K = (2x)<sup>2</sup>/(0.100−x)<sup>2</sup> = 50.5. Take sqrt: 2x/(0.100−x) = 7.106. Solve: x = 0.0780. [H<sub>2</sub>] = [I<sub>2</sub>] = 0.0220 M, [HI] = 0.156 M. Check: (0.156)<sup>2</sup>/(0.0220)<sup>2</sup> = 50.3 ≈ 50.5. ✓',
    markScheme: '1 mark: correct initial concentrations (0.100 M). 1 mark: correct ICE table with changes −x, −x, +2x. 1 mark: correct K expression. 1 mark: recognizing perfect square and taking sqrt. 2 marks: correct algebra and x = 0.0780. 1 mark: correct final concentrations with verification.'
  },

  {
    id: 'U7Q014', understandingId: 'U7.7.1', subtopic: '7.7', section: 'unit7',
    concepts: ['ICE-table', 'equilibrium-calculation'], type: 'frq',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 6,
    stem: 'For the reaction PCl<sub>5</sub>(g) ⇌ PCl<sub>3</sub>(g) + Cl<sub>2</sub>(g), K_c = 0.042 at a certain temperature. If 1.00 mol PCl<sub>5</sub> is placed in a 1.00 L container, find all equilibrium concentrations. Use the quadratic formula if necessary.',
    options: null,
    answer: '[PCl<sub>5</sub>] = 0.81 M, [PCl<sub>3</sub>] = [Cl<sub>2</sub>] = 0.19 M',
    explanation: 'ICE: I = 1.00, 0, 0. C = −x, +x, +x. E = 1.00−x, x, x. K = x<sup>2</sup>/(1.00−x) = 0.042. x<sup>2</sup> + 0.042x − 0.042 = 0. Quadratic: x = [−0.042 + √(0.001764 + 0.168)]/2 = [−0.042 + 0.412]/2 = 0.185. Rounding: x ≈ 0.19 M. [PCl<sub>5</sub>] = 0.81 M, [PCl<sub>3</sub>] = [Cl<sub>2</sub>] = 0.19 M. Check: (0.19)<sup>2</sup>/0.81 = 0.045 ≈ 0.042 ✓',
    markScheme: '1 mark: correct ICE table. 1 mark: correct K expression x<sup>2</sup>/(1.00−x). 1 mark: rearranging to quadratic form. 2 marks: correct use of quadratic formula. 1 mark: correct final concentrations.'
  },

  {
    id: 'U7Q015', understandingId: 'U7.7.2', subtopic: '7.7', section: 'unit7',
    concepts: ['small-x-approximation'], type: 'frq',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 6,
    stem: 'For 2 NO<sub>2</sub>(g) ⇌ 2 NO(g) + O<sub>2</sub>(g), K_c = 6.0 × 10<sup>−</sup><sup>6</sup> at 500 K. If [NO<sub>2</sub>]<sub>0</sub> = 0.400 M (no products initially), calculate the equilibrium concentrations. Use the small-x approximation and verify with the 5% rule.',
    options: null,
    answer: '[NO<sub>2</sub>] ≈ 0.400 M, [NO] = 0.0144 M, [O<sub>2</sub>] = 0.00720 M',
    explanation: 'ICE: C = −2x, +2x, +x. E = 0.400−2x, 2x, x. K = (2x)<sup>2</sup>(x)/(0.400−2x)<sup>2</sup> = 4x<sup>3</sup>/(0.400)<sup>2</sup> since 2x << 0.400. 6.0×10<sup>−</sup><sup>6</sup> = 4x<sup>3</sup>/0.160 → x<sup>3</sup> = 2.4×10<sup>−</sup><sup>7</sup> → x = 6.21×10<sup>−</sup><sup>3</sup> → x ≈ 0.00620. 5% check: 2x/0.400 = 0.0124/0.400 = 3.1% < 5% ✓. [NO<sub>2</sub>] ≈ 0.400 M, [NO] = 2(0.00720) = 0.0144 M, [O<sub>2</sub>] = 0.00720 M.',
    markScheme: '1 mark: correct ICE table. 1 mark: correct K expression. 1 mark: valid small-x approximation stated. 1 mark: correct algebra for x. 1 mark: 5% check shown and valid. 1 mark: correct final concentrations.'
  },

  /* ──────── 7.8 Representations of Equilibrium ──────── */

  {
    id: 'U7Q016', understandingId: 'U7.8.1', subtopic: '7.8', section: 'unit7',
    concepts: ['particulate-diagram'], type: 'short',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 2,
    stem: 'A sealed 1.0 L container at equilibrium for X<sub>2</sub>(g) ⇌ 2 X(g) contains 3 molecules of X<sub>2</sub> and 6 atoms of X. Estimate K_c using particle counts as concentrations.',
    options: null,
    answer: 'K_c = 12',
    explanation: 'K = [X]<sup>2</sup>/[X<sub>2</sub>] = (6)<sup>2</sup>/3 = 36/3 = 12 (using particle counts as proxy for concentration in the same volume).',
    markScheme: '1 mark: correct setup [X]<sup>2</sup>/[X<sub>2</sub>]. 1 mark: K = 12.'
  },

  /* ──────── 7.9 Introduction to Le Chatelier's Principle ──────── */

  {
    id: 'U7Q017', understandingId: 'U7.9.1', subtopic: '7.9', section: 'unit7',
    concepts: ['Le-Chatelier'], type: 'mcq',
    commandTerm: 'determine', difficulty: 1, source: 'original', marks: 1,
    stem: 'For N<sub>2</sub>(g) + 3 H<sub>2</sub>(g) ⇌ 2 NH<sub>3</sub>(g) (exothermic), which change increases the amount of NH<sub>3</sub> at equilibrium?',
    options: {
      A: 'Increasing the temperature',
      B: 'Adding a catalyst',
      C: 'Removing H<sub>2</sub>',
      D: 'Adding N<sub>2</sub>'
    },
    answer: 'D',
    explanation: 'Adding N<sub>2</sub> (a reactant) shifts equilibrium to the right, producing more NH<sub>3</sub>. Increasing T shifts left (exothermic). A catalyst has no effect on equilibrium position. Removing H<sub>2</sub> shifts left.',
    markScheme: null
  },

  {
    id: 'U7Q018', understandingId: 'U7.9.1', subtopic: '7.9', section: 'unit7',
    concepts: ['Le-Chatelier', 'catalyst'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'Adding a catalyst to a system at equilibrium will:',
    options: {
      A: 'shift the equilibrium toward products.',
      B: 'shift the equilibrium toward reactants.',
      C: 'increase the value of K.',
      D: 'have no effect on the equilibrium position or K.'
    },
    answer: 'D',
    explanation: 'A catalyst speeds up both forward and reverse reactions equally. It does not change K or the equilibrium position — only how fast equilibrium is reached.',
    markScheme: null
  },

  {
    id: 'U7Q019', understandingId: 'U7.9.1', subtopic: '7.9', section: 'unit7',
    concepts: ['Le-Chatelier', 'equilibrium-stress'], type: 'frq',
    commandTerm: 'analyze', difficulty: 3, source: 'original', marks: 8,
    stem: 'Consider the exothermic reaction: 2 SO<sub>2</sub>(g) + O<sub>2</sub>(g) ⇌ 2 SO<sub>3</sub>(g). For each of the following changes, predict the direction of the shift, the effect on [SO<sub>3</sub>], and whether K changes: (a) O<sub>2</sub> is added, (b) the volume is halved, (c) temperature is increased, (d) an inert gas is added at constant volume, (e) SO<sub>3</sub> is removed.',
    options: null,
    answer: '(a) right, [SO<sub>3</sub>]↑, K same; (b) right, [SO<sub>3</sub>]↑, K same; (c) left, [SO<sub>3</sub>]↓, K↓; (d) no shift, [SO<sub>3</sub>] same, K same; (e) right, more SO<sub>3</sub> produced, K same',
    explanation: '(a) Adding O<sub>2</sub> increases Q denominator, Q < K, shift right. K unchanged. (b) 3 mol gas left, 2 mol right → shift toward fewer moles (right). K unchanged. (c) Exothermic: heat is a product → increasing T shifts left. K decreases. (d) Inert gas at constant V does not change concentrations → no shift. K unchanged. (e) Removing SO<sub>3</sub> decreases Q numerator, Q < K, shift right. K unchanged.',
    markScheme: '1 mark for each correct shift direction (5 parts). 1 mark for correct K analysis in (c) — K decreases. 1 mark for explaining inert gas at constant V has no effect. 1 mark for using Q vs K or Le Chatelier reasoning consistently.'
  },

  /* ──────── 7.9/7.10 Volume/Pressure ──────── */

  {
    id: 'U7Q020', understandingId: 'U7.9.2', subtopic: '7.9', section: 'unit7',
    concepts: ['Le-Chatelier', 'volume-pressure'], type: 'mcq',
    commandTerm: 'determine', difficulty: 2, source: 'original', marks: 1,
    stem: 'For the reaction: 2 NO<sub>2</sub>(g) ⇌ N<sub>2</sub>O<sub>4</sub>(g), what happens when the volume of the container is decreased?',
    options: {
      A: 'Equilibrium shifts left toward more moles of gas.',
      B: 'Equilibrium shifts right toward fewer moles of gas.',
      C: 'No shift, because Δn<sub>gas</sub> = 0.',
      D: 'K increases.'
    },
    answer: 'B',
    explanation: '2 mol gas on left, 1 mol on right. Decreasing volume (increasing pressure) shifts toward fewer moles of gas = right. K does not change with pressure.',
    markScheme: null
  },

  /* ──────── 7.10 Q vs K and Le Chatelier's ──────── */

  {
    id: 'U7Q021', understandingId: 'U7.10.1', subtopic: '7.10', section: 'unit7',
    concepts: ['reaction-quotient', 'Le-Chatelier'], type: 'short',
    commandTerm: 'explain', difficulty: 2, source: 'original', marks: 3,
    stem: 'For A(g) + B(g) ⇌ C(g), K = 10.0. At equilibrium, [A] = 0.10, [B] = 0.20, [C] = 0.20. Additional A is added so [A] becomes 0.30 M. (a) Calculate the new Q. (b) Compare Q to K and predict the direction of shift. (c) Explain using Le Chatelier\'s principle.',
    options: null,
    answer: '(a) Q = 3.3; (b) Q < K, shift right; (c) Adding A (reactant) shifts equilibrium toward products.',
    explanation: '(a) Q = [C]/([A][B]) = 0.20/(0.30 × 0.20) = 0.20/0.060 = 3.3. (b) Q = 3.3 < K = 10.0, so the reaction shifts right (forward) to produce more C. (c) Le Chatelier: adding a reactant (A) stresses the system; it responds by consuming the added A, shifting toward products.',
    markScheme: '1 mark: correct Q = 3.3. 1 mark: Q < K, shift right. 1 mark: Le Chatelier explanation.'
  },

  {
    id: 'U7Q022', understandingId: 'U7.10.2', subtopic: '7.10', section: 'unit7',
    concepts: ['Le-Chatelier', 'temperature'], type: 'mcq',
    commandTerm: 'determine', difficulty: 2, source: 'original', marks: 1,
    stem: 'For the endothermic reaction: CaCO<sub>3</sub>(s) ⇌ CaO(s) + CO<sub>2</sub>(g), what happens when the temperature is increased?',
    options: {
      A: 'K decreases and equilibrium shifts left.',
      B: 'K increases and equilibrium shifts right.',
      C: 'K stays the same but equilibrium shifts right.',
      D: 'No change occurs.'
    },
    answer: 'B',
    explanation: 'Endothermic: heat is a "reactant." Increasing T shifts right, producing more CO<sub>2</sub>. K increases for endothermic reactions when T rises.',
    markScheme: null
  },

  /* ──────── 7.11 Introduction to Solubility Equilibria ──────── */

  {
    id: 'U7Q023', understandingId: 'U7.11.1', subtopic: '7.11', section: 'unit7',
    concepts: ['Ksp', 'solubility'], type: 'short',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 3,
    stem: 'The K_sp of Ag<sub>2</sub>CrO<sub>4</sub> is 1.1 × 10<sup>−</sup><sup>12</sup>. Calculate the molar solubility of Ag<sub>2</sub>CrO<sub>4</sub> in pure water.',
    options: null,
    answer: 's = 6.5 × 10<sup>−</sup><sup>5</sup> M',
    explanation: 'Ag<sub>2</sub>CrO<sub>4</sub>(s) ⇌ 2 Ag<sup>+</sup>(aq) + CrO<sub>4</sub><sup>2</sup><sup>−</sup>(aq). Let s = molar solubility. [Ag<sup>+</sup>] = 2s, [CrO<sub>4</sub><sup>2</sup><sup>−</sup>] = s. Ksp = (2s)<sup>2</sup>(s) = 4s<sup>3</sup>. 4s<sup>3</sup> = 1.1 × 10<sup>−</sup><sup>12</sup>. s<sup>3</sup> = 2.75 × 10<sup>−</sup><sup>13</sup>. s = (2.75 × 10<sup>−</sup><sup>13</sup>)^(1/3) = 6.5 × 10<sup>−</sup><sup>5</sup> M.',
    markScheme: '1 mark: correct dissolution equation and Ksp expression (4s<sup>3</sup>). 1 mark: correct algebra (s<sup>3</sup> = 2.75 × 10<sup>−</sup><sup>13</sup>). 1 mark: correct molar solubility (6.5 × 10<sup>−</sup><sup>5</sup> M).'
  },

  {
    id: 'U7Q024', understandingId: 'U7.11.1', subtopic: '7.11', section: 'unit7',
    concepts: ['Ksp'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'For BaSO<sub>4</sub>(s) ⇌ Ba<sup>2</sup><sup>+</sup>(aq) + SO<sub>4</sub><sup>2</sup><sup>−</sup>(aq), the correct K_sp expression is:',
    options: {
      A: 'K_sp = [Ba<sup>2</sup><sup>+</sup>][SO<sub>4</sub><sup>2</sup><sup>−</sup>]/[BaSO<sub>4</sub>]',
      B: 'K_sp = [Ba<sup>2</sup><sup>+</sup>][SO<sub>4</sub><sup>2</sup><sup>−</sup>]',
      C: 'K_sp = [Ba<sup>2</sup><sup>+</sup>]<sup>2</sup>[SO<sub>4</sub><sup>2</sup><sup>−</sup>]',
      D: 'K_sp = 1/([Ba<sup>2</sup><sup>+</sup>][SO<sub>4</sub><sup>2</sup><sup>−</sup>])'
    },
    answer: 'B',
    explanation: 'BaSO<sub>4</sub> is a pure solid and excluded. Ksp = [Ba<sup>2</sup><sup>+</sup>][SO<sub>4</sub><sup>2</sup><sup>−</sup>] with both ions having coefficient 1.',
    markScheme: null
  },

  {
    id: 'U7Q025', understandingId: 'U7.11.2', subtopic: '7.11', section: 'unit7',
    concepts: ['Ksp', 'precipitation'], type: 'frq',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 5,
    stem: 'Will a precipitate of BaSO<sub>4</sub> form when 25.0 mL of 0.0020 M Ba(NO<sub>3</sub>)<sub>2</sub> is mixed with 25.0 mL of 0.0030 M Na<sub>2</sub>SO<sub>4</sub>? K_sp(BaSO<sub>4</sub>) = 1.1 × 10<sup>−</sup><sup>10</sup>. Show all work including dilution calculations.',
    options: null,
    answer: 'Q = 1.5 × 10<sup>−</sup><sup>6</sup> > Ksp → precipitate forms.',
    explanation: 'After mixing (total V = 50.0 mL): [Ba<sup>2</sup><sup>+</sup>] = 0.0020 × 25.0/50.0 = 0.0010 M. [SO<sub>4</sub><sup>2</sup><sup>−</sup>] = 0.0030 × 25.0/50.0 = 0.0015 M. Q = (0.0010)(0.0015) = 1.5 × 10<sup>−</sup><sup>6</sup>. Q = 1.5 × 10<sup>−</sup><sup>6</sup> >> Ksp = 1.1 × 10<sup>−</sup><sup>10</sup>. Since Q > Ksp, the solution is supersaturated and BaSO<sub>4</sub> will precipitate.',
    markScheme: '1 mark: correct diluted [Ba<sup>2</sup><sup>+</sup>]. 1 mark: correct diluted [SO<sub>4</sub><sup>2</sup><sup>−</sup>]. 1 mark: correct Q calculation. 1 mark: Q > Ksp comparison. 1 mark: conclusion that precipitate forms.'
  },

  /* ──────── 7.12 Common-Ion Effect ──────── */

  {
    id: 'U7Q026', understandingId: 'U7.12.1', subtopic: '7.12', section: 'unit7',
    concepts: ['common-ion', 'Ksp'], type: 'short',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 4,
    stem: 'Calculate the molar solubility of AgCl (K_sp = 1.8 × 10<sup>−</sup><sup>10</sup>) in (a) pure water and (b) 0.10 M NaCl solution. Explain the difference.',
    options: null,
    answer: '(a) s = 1.3 × 10<sup>−</sup><sup>5</sup> M; (b) s = 1.8 × 10<sup>−</sup><sup>9</sup> M',
    explanation: '(a) In pure water: AgCl(s) ⇌ Ag<sup>+</sup> + Cl<sup>−</sup>. Ksp = s<sup>2</sup> = 1.8 × 10<sup>−</sup><sup>10</sup>. s = √(1.8 × 10<sup>−</sup><sup>10</sup>) = 1.3 × 10<sup>−</sup><sup>5</sup> M. (b) In 0.10 M NaCl: [Cl<sup>−</sup>] starts at 0.10 M. Ksp = (s)(0.10 + s) ≈ (s)(0.10) = 1.8 × 10<sup>−</sup><sup>10</sup>. s = 1.8 × 10<sup>−</sup><sup>9</sup> M. The common ion (Cl<sup>−</sup>) decreases solubility by nearly 10,000× by shifting equilibrium left.',
    markScheme: '1 mark: correct s in pure water. 1 mark: correct ICE with common ion. 1 mark: correct s with common ion. 1 mark: explanation using Le Chatelier or Q > K.'
  },

  /* ──────── 7.13 pH and Solubility ──────── */

  {
    id: 'U7Q027', understandingId: 'U7.13.1', subtopic: '7.13', section: 'unit7',
    concepts: ['pH-solubility', 'basic-anion'], type: 'mcq',
    commandTerm: 'determine', difficulty: 2, source: 'original', marks: 1,
    stem: 'Which of the following salts would be MORE soluble in 0.10 M HCl than in pure water?',
    options: {
      A: 'NaCl',
      B: 'AgCl',
      C: 'CaCO<sub>3</sub>',
      D: 'KNO<sub>3</sub>'
    },
    answer: 'C',
    explanation: 'CaCO<sub>3</sub> contains CO<sub>3</sub><sup>2</sup><sup>−</sup>, a basic anion (conjugate base of weak acid H<sub>2</sub>CO<sub>3</sub>). H<sup>+</sup> from HCl reacts with CO<sub>3</sub><sup>2</sup><sup>−</sup>, removing it and shifting Ksp equilibrium right. AgCl actually becomes LESS soluble in HCl due to the common-ion effect (Cl<sup>−</sup>). NaCl and KNO<sub>3</sub> are highly soluble salts not governed by Ksp.',
    markScheme: null
  },

  {
    id: 'U7Q028', understandingId: 'U7.13.2', subtopic: '7.13', section: 'unit7',
    concepts: ['metal-hydroxide', 'pH-solubility'], type: 'mcq',
    commandTerm: 'identify', difficulty: 2, source: 'original', marks: 1,
    stem: 'Mg(OH)<sub>2</sub> is a slightly soluble salt. In which solution is it MOST soluble?',
    options: {
      A: 'Pure water',
      B: '0.10 M NaOH',
      C: '0.10 M HCl',
      D: '0.10 M MgCl<sub>2</sub>'
    },
    answer: 'C',
    explanation: 'In HCl, H<sup>+</sup> neutralizes OH<sup>−</sup> (H<sup>+</sup> + OH<sup>−</sup> → H<sub>2</sub>O), removing OH<sup>−</sup> from the Ksp equilibrium and driving dissolution. NaOH and MgCl<sub>2</sub> both provide common ions (OH<sup>−</sup> and Mg<sup>2</sup><sup>+</sup>, respectively) that decrease solubility.',
    markScheme: null
  },

  /* ──────── 7.14 Free Energy of Dissolution ──────── */

  {
    id: 'U7Q029', understandingId: 'U7.14.1', subtopic: '7.14', section: 'unit7',
    concepts: ['Gibbs-free-energy', 'dissolution'], type: 'short',
    commandTerm: 'explain', difficulty: 2, source: 'original', marks: 3,
    stem: 'KNO<sub>3</sub> dissolves in water in an endothermic process. Explain why this dissolution is spontaneous at room temperature in terms of ΔH, ΔS, and ΔG.',
    options: null,
    answer: 'ΔH > 0 (endothermic), ΔS > 0 (increased disorder), TΔS > ΔH, so ΔG < 0 (spontaneous).',
    explanation: 'ΔH > 0 because the process is endothermic (solution feels cold). ΔS > 0 because ions disperse from an ordered crystal into solution (increased disorder). At room temperature, the TΔS term is large enough to overcome the positive ΔH, making ΔG = ΔH − TΔS < 0. The process is entropy-driven.',
    markScheme: '1 mark: ΔH > 0 stated and justified. 1 mark: ΔS > 0 stated and justified. 1 mark: ΔG < 0 because TΔS > ΔH.'
  },

  {
    id: 'U7Q030', understandingId: 'U7.14.2', subtopic: '7.14', section: 'unit7',
    concepts: ['Gibbs-free-energy', 'Ksp'], type: 'short',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 3,
    stem: 'Calculate ΔG° for the dissolution of PbCl<sub>2</sub> at 25 °C given K_sp = 1.7 × 10<sup>−</sup><sup>5</sup>. Is the dissolution spontaneous under standard conditions?',
    options: null,
    answer: 'ΔG° = +27.2 kJ/mol; not spontaneous under standard conditions.',
    explanation: 'ΔG° = −RT ln Ksp = −(8.314 J/mol·K)(298 K) ln(1.7 × 10<sup>−</sup><sup>5</sup>). ln(1.7 × 10<sup>−</sup><sup>5</sup>) = −10.98. ΔG° = −(8.314)(298)(−10.98) = +27,200 J/mol = +27.2 kJ/mol. Since ΔG° > 0, dissolution is not spontaneous under standard conditions (1 M ions). However, some dissolving still occurs until Q = Ksp.',
    markScheme: '1 mark: correct substitution into ΔG° = −RT ln K. 1 mark: correct ln value and calculation. 1 mark: correct sign and interpretation.'
  },

  /* ──────── Additional Mixed Questions ──────── */

  {
    id: 'U7Q031', understandingId: 'U7.7.1', subtopic: '7.7', section: 'unit7',
    concepts: ['ICE-table', 'equilibrium-calculation'], type: 'mcq',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 1,
    stem: 'For the reaction A(g) ⇌ B(g) + C(g), K_c = 0.060. If [A]<sub>0</sub> = 1.00 M, what is the equilibrium concentration of A? (Assume no initial B or C.)',
    options: {
      A: '0.060 M',
      B: '0.22 M',
      C: '0.78 M',
      D: '0.94 M'
    },
    answer: 'C',
    explanation: 'K = x<sup>2</sup>/(1.00−x) = 0.060. x<sup>2</sup> + 0.060x − 0.060 = 0. x = [−0.060 + √(0.0036+0.240)]/2 = [−0.060 + 0.494]/2 = 0.217. [A] = 1.00 − 0.22 = 0.78 M.',
    markScheme: null
  }

];
