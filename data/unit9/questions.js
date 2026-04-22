/*
 *  AP Chemistry – Unit 9: Applications of Thermodynamics
 *  Data file: questions.js
 *  31 questions (16 MCQ, 8 short-answer, 7 FRQ)
 */

window.DB_U9_QUESTIONS = [

  /* ──────── 9.1 Introduction to Entropy ──────── */

  {
    id: 'U9Q001', understandingId: 'U9.1.1', subtopic: '9.1', section: 'unit9',
    concepts: ['entropy'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'Which of the following best describes entropy?',
    options: {
      A: 'The total energy of a system.',
      B: 'The dispersal of matter and energy among available microstates.',
      C: 'The tendency of a system to release heat.',
      D: 'The activation energy barrier for a reaction.'
    },
    answer: 'B',
    explanation: 'Entropy (S) measures the dispersal of matter and energy over the available microstates of a system. It is not total energy (A), heat release tendency (C, which is enthalpy), or activation energy (D, which is kinetics).',
    markScheme: null
  },

  {
    id: 'U9Q002', understandingId: 'U9.1.1', subtopic: '9.1', section: 'unit9',
    concepts: ['entropy', 'second-law'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'According to the Second Law of Thermodynamics, for any spontaneous process:',
    options: {
      A: 'the entropy of the system must increase.',
      B: 'the entropy of the surroundings must increase.',
      C: 'the total entropy of the universe must increase.',
      D: 'the total entropy of the universe must remain constant.'
    },
    answer: 'C',
    explanation: 'The Second Law states that ΔS_universe = ΔS_system + ΔS_surroundings > 0 for any spontaneous process. The system\'s entropy can decrease (A is wrong) as long as the surroundings\' entropy increases enough to compensate, and vice versa (B is wrong). Total entropy increases, not stays constant (D is wrong).',
    markScheme: null
  },

  {
    id: 'U9Q003', understandingId: 'U9.1.2', subtopic: '9.1', section: 'unit9',
    concepts: ['entropy'], type: 'mcq',
    commandTerm: 'predict', difficulty: 2, source: 'original', marks: 1,
    stem: 'For which of the following processes is ΔS expected to be negative?',
    options: {
      A: 'NaCl(s) dissolving in water',
      B: 'N<sub>2</sub>(g) + 3 H<sub>2</sub>(g) → 2 NH<sub>3</sub>(g)',
      C: 'CaCO<sub>3</sub>(s) → CaO(s) + CO<sub>2</sub>(g)',
      D: 'H<sub>2</sub>O(l) → H<sub>2</sub>O(g)'
    },
    answer: 'B',
    explanation: 'In reaction B, 4 moles of gas (1 N<sub>2</sub> + 3 H<sub>2</sub>) become 2 moles of gas (2 NH<sub>3</sub>). Fewer gas moles = less dispersal = negative ΔS. Dissolving (A) increases S, producing gas from a solid (C) increases S, and vaporization (D) increases S.',
    markScheme: null
  },

  /* ──────── 9.2 Absolute Entropy and Entropy Change ──────── */

  {
    id: 'U9Q004', understandingId: 'U9.2.1', subtopic: '9.2', section: 'unit9',
    concepts: ['entropy', 'third-law'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'Which statement about standard molar entropy (S°) is correct?',
    options: {
      A: 'S° = 0 for elements in their standard state, just like ΔH°f.',
      B: 'S° is always positive for any substance at temperatures above 0 K.',
      C: 'S° is measured in kJ/(mol·K).',
      D: 'S° decreases as molecular complexity increases.'
    },
    answer: 'B',
    explanation: 'By the Third Law, S = 0 only at 0 K for a perfect crystal. At any T > 0, S° > 0. Option A confuses S° with ΔH°f (S° ≠ 0 for elements). Option C is wrong — S° is in J/(mol·K), not kJ. Option D is backwards — more complex molecules have higher S°.',
    markScheme: null
  },

  {
    id: 'U9Q005', understandingId: 'U9.2.2', subtopic: '9.2', section: 'unit9',
    concepts: ['entropy'], type: 'short',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 3,
    stem: 'Calculate ΔS° for the reaction: 2 SO<sub>2</sub>(g) + O<sub>2</sub>(g) → 2 SO<sub>3</sub>(g). Given S° values: SO<sub>2</sub>(g) = 248.2, O<sub>2</sub>(g) = 205.2, SO<sub>3</sub>(g) = 256.8 J/(mol·K). Explain why the sign of ΔS° makes sense.',
    options: null,
    answer: 'ΔS° = [2(256.8)] − [2(248.2) + 1(205.2)] = 513.6 − 701.6 = −188.0 J/(mol·K). Negative ΔS° makes sense because 3 moles of gas become 2 moles of gas, reducing dispersal.',
    explanation: 'Using ΔS° = Σ nS°(products) − Σ nS°(reactants): products = 2(256.8) = 513.6; reactants = 2(248.2) + 205.2 = 701.6. ΔS° = −188.0 J/(mol·K). The decrease in moles of gas (3 → 2) means fewer microstates, consistent with a negative ΔS°.',
    markScheme: '1 pt: correct setup with stoichiometric coefficients. 1 pt: correct numerical answer (−188.0 J/(mol·K)). 1 pt: explanation referencing decrease in moles of gas.'
  },

  {
    id: 'U9Q006', understandingId: 'U9.2.3', subtopic: '9.2', section: 'unit9',
    concepts: ['entropy'], type: 'short',
    commandTerm: 'predict', difficulty: 2, source: 'original', marks: 2,
    stem: 'Predict the sign of ΔS for each process and justify briefly: (a) CO<sub>2</sub>(g) → CO<sub>2</sub>(s) (dry ice formation); (b) NH<sub>4</sub>Cl(s) → NH<sub>3</sub>(g) + HCl(g).',
    options: null,
    answer: '(a) ΔS < 0: gas → solid means much less dispersal, fewer microstates. (b) ΔS > 0: 1 mol solid → 2 mol gas, greatly increasing dispersal.',
    explanation: '(a) Gas to solid is a dramatic decrease in entropy — molecules go from free translational motion to a rigid lattice. (b) A solid decomposes to form 2 moles of gas — large increase in entropy from both more particles and higher-entropy gas phase.',
    markScheme: '1 pt each: correct sign with valid justification referencing phase change or moles of gas.'
  },

  /* ──────── 9.3 Gibbs Free Energy and Thermodynamic Favorability ──────── */

  {
    id: 'U9Q007', understandingId: 'U9.3.1', subtopic: '9.3', section: 'unit9',
    concepts: ['gibbs-free-energy'], type: 'short',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 3,
    stem: 'For a reaction, ΔH° = −126.0 kJ/mol and ΔS° = −84.0 J/(mol·K). Calculate ΔG° at 298 K. Is the reaction thermodynamically favorable?',
    options: null,
    answer: 'ΔG° = −126.0 − (298)(−0.0840) = −126.0 + 25.0 = −101.0 kJ/mol. Yes, the reaction is thermodynamically favorable (ΔG° < 0).',
    explanation: 'Convert ΔS° to kJ: −84.0 J/(mol·K) = −0.0840 kJ/(mol·K). Then ΔG° = ΔH° − TΔS° = −126.0 − (298)(−0.0840) = −126.0 + 25.0 = −101.0 kJ/mol. Negative ΔG° means thermodynamically favorable. This is a Case 3 reaction (ΔH < 0, ΔS < 0), favorable at low temperatures where the enthalpy term dominates.',
    markScheme: '1 pt: correct unit conversion (J to kJ). 1 pt: correct ΔG° value. 1 pt: correct favorability conclusion with reasoning.'
  },

  {
    id: 'U9Q008', understandingId: 'U9.3.2', subtopic: '9.3', section: 'unit9',
    concepts: ['gibbs-free-energy'], type: 'mcq',
    commandTerm: 'determine', difficulty: 2, source: 'original', marks: 1,
    stem: 'A reaction has ΔH° > 0 and ΔS° > 0. Under which conditions is this reaction thermodynamically favorable?',
    options: {
      A: 'Favorable at all temperatures.',
      B: 'Favorable at low temperatures only.',
      C: 'Favorable at high temperatures only.',
      D: 'Never favorable at any temperature.'
    },
    answer: 'C',
    explanation: 'When ΔH > 0 (endothermic) and ΔS > 0 (more dispersal), the reaction is entropy-driven. At low T, the positive ΔH dominates → ΔG > 0. At high T, the TΔS term overcomes ΔH → ΔG < 0. This is Case 4: favorable at high temperatures only.',
    markScheme: null
  },

  {
    id: 'U9Q009', understandingId: 'U9.3.2', subtopic: '9.3', section: 'unit9',
    concepts: ['gibbs-free-energy'], type: 'frq',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 5,
    stem: 'The melting of ice: H<sub>2</sub>O(s) → H<sub>2</sub>O(l) has ΔH° = +6.01 kJ/mol and ΔS° = +22.0 J/(mol·K).\n(a) Calculate the temperature at which this process is at equilibrium (the normal melting point).\n(b) Calculate ΔG° at 25°C (298 K).\n(c) Explain why ice melts spontaneously at room temperature but not at −10°C, referring to the signs of ΔH and ΔS.',
    options: null,
    answer: '(a) T = ΔH°/ΔS° = 6010/22.0 = 273 K (0°C). (b) ΔG° = 6.01 − (298)(0.0220) = 6.01 − 6.56 = −0.55 kJ/mol. (c) This is a Case 4 reaction (ΔH > 0, ΔS > 0). Above 273 K, TΔS > ΔH so ΔG < 0 (favorable). Below 273 K, ΔH > TΔS so ΔG > 0 (unfavorable).',
    explanation: '(a) At equilibrium, ΔG = 0, so T = ΔH°/ΔS° = 6010 J / 22.0 J/K = 273 K = 0°C, which is the known melting point. (b) At 298 K: ΔG° = 6.01 − (298)(0.0220) = −0.55 kJ/mol — slightly negative, confirming melting is favorable at 25°C. (c) Both ΔH and ΔS are positive, so this is entropy-driven melting. The TΔS entropy term grows with temperature and overcomes the unfavorable enthalpy above 273 K.',
    markScheme: '(a) 2 pts: correct setup and answer (273 K). (b) 2 pts: correct unit conversion and calculation. (c) 1 pt: correct reference to ΔH/ΔS signs and temperature dependence.'
  },

  {
    id: 'U9Q010', understandingId: 'U9.3.3', subtopic: '9.3', section: 'unit9',
    concepts: ['gibbs-free-energy'], type: 'mcq',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 1,
    stem: 'Given ΔG°f values: C<sub>2</sub>H<sub>5</sub>OH(l) = −174.1, CO<sub>2</sub>(g) = −394.4, H<sub>2</sub>O(l) = −237.1 kJ/mol, and O<sub>2</sub>(g) = 0. Calculate ΔG° for the combustion: C<sub>2</sub>H<sub>5</sub>OH(l) + 3 O<sub>2</sub>(g) → 2 CO<sub>2</sub>(g) + 3 H<sub>2</sub>O(l).',
    options: {
      A: '−1325.4 kJ/mol',
      B: '−457.4 kJ/mol',
      C: '+1325.4 kJ/mol',
      D: '−1500.2 kJ/mol'
    },
    answer: 'A',
    explanation: 'ΔG° = [2(−394.4) + 3(−237.1)] − [1(−174.1) + 3(0)] = [−788.8 + (−711.3)] − [−174.1] = −1500.1 − (−174.1) = −1500.1 + 174.1 = −1326.0 kJ/mol ≈ −1325.4 kJ/mol (rounding). The large negative value confirms combustion is strongly favorable.',
    markScheme: null
  },

  /* ──────── 9.4 Thermodynamic and Kinetic Control ──────── */

  {
    id: 'U9Q011', understandingId: 'U9.4.1', subtopic: '9.4', section: 'unit9',
    concepts: ['kinetics', 'gibbs-free-energy'], type: 'mcq',
    commandTerm: 'explain', difficulty: 2, source: 'original', marks: 1,
    stem: 'A mixture of H<sub>2</sub>(g) and O<sub>2</sub>(g) at room temperature does not react despite ΔG° = −474 kJ/mol. Which of the following best explains this observation?',
    options: {
      A: 'The reaction is not thermodynamically favorable.',
      B: 'The reaction has a very high activation energy.',
      C: 'A catalyst has shifted the equilibrium toward reactants.',
      D: 'The entropy change for the reaction is positive.'
    },
    answer: 'B',
    explanation: 'The reaction is thermodynamically favorable (ΔG° << 0), so A is wrong. The mixture persists because the activation energy is too high for molecules to react at room temperature. C is wrong because catalysts do not shift equilibrium. D is irrelevant — a positive ΔS would favor the reaction, not hinder it.',
    markScheme: null
  },

  {
    id: 'U9Q012', understandingId: 'U9.4.2', subtopic: '9.4', section: 'unit9',
    concepts: ['kinetics'], type: 'short',
    commandTerm: 'explain', difficulty: 2, source: 'original', marks: 2,
    stem: 'A reaction can form Product A (ΔG = −50 kJ/mol, high Ea) or Product B (ΔG = −30 kJ/mol, low Ea). At low temperature, which product predominates and why?',
    options: null,
    answer: 'Product B predominates at low temperature. It is the kinetic product because it has a lower activation energy, so it forms faster. At low T, molecules lack the energy to overcome the higher Ea needed for Product A.',
    explanation: 'At low temperature, kinetic control determines the product. Product B has the lower Ea, so it forms faster even though Product A is more thermodynamically stable (more negative ΔG). At high temperature, enough molecules would have the energy to reach the higher Ea, and Product A (the thermodynamic product) would eventually predominate.',
    markScheme: '1 pt: identifies Product B. 1 pt: correct explanation referencing lower Ea and kinetic control at low T.'
  },

  /* ──────── 9.5 Free Energy and Equilibrium ──────── */

  {
    id: 'U9Q013', understandingId: 'U9.5.1', subtopic: '9.5', section: 'unit9',
    concepts: ['gibbs-free-energy', 'equilibrium'], type: 'frq',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 5,
    stem: 'At 298 K, the reaction A(g) ⇌ 2 B(g) has ΔG° = −5.40 kJ/mol.\n(a) Calculate the equilibrium constant K.\n(b) If the reaction quotient Q = 100, predict the direction the reaction will shift. Justify using ΔG = ΔG° + RT ln Q.\n(c) At equilibrium, what is the value of ΔG?',
    options: null,
    answer: '(a) K = e^(5400/(8.314×298)) = e^(2.179) = 8.84. (b) ΔG = −5400 + (8.314)(298)ln(100) = −5400 + 11,410 = +6010 J. ΔG > 0, so the reaction shifts in reverse (toward A). (c) At equilibrium, ΔG = 0.',
    explanation: '(a) ΔG° = −RT ln K → −5400 = −(8.314)(298) ln K → ln K = 2.179 → K = 8.84. (b) ΔG = ΔG° + RT ln Q = −5400 + (8.314)(298)ln(100) = −5400 + (2477.6)(4.605) = −5400 + 11,410 = +6010 J > 0. Since ΔG > 0 under these conditions, the reverse reaction is favorable; the system shifts toward A to decrease Q toward K. (c) At equilibrium, Q = K and ΔG = 0 (not ΔG°).',
    markScheme: '(a) 2 pts: correct conversion to J, correct K value. (b) 2 pts: correct ΔG calculation, correct direction with justification. (c) 1 pt: ΔG = 0 at equilibrium.'
  },

  {
    id: 'U9Q014', understandingId: 'U9.5.1', subtopic: '9.5', section: 'unit9',
    concepts: ['gibbs-free-energy', 'equilibrium'], type: 'mcq',
    commandTerm: 'determine', difficulty: 2, source: 'original', marks: 1,
    stem: 'A reaction has ΔG° = +12.0 kJ/mol at 298 K. Which of the following is true about the equilibrium constant K?',
    options: {
      A: 'K > 1 and products are favored.',
      B: 'K < 1 and reactants are favored.',
      C: 'K = 1 and neither side is favored.',
      D: 'K cannot be determined from ΔG° alone.'
    },
    answer: 'B',
    explanation: 'From ΔG° = −RT ln K: if ΔG° > 0, then ln K < 0, which means K < 1. When K < 1, reactants are favored at equilibrium. D is wrong because ΔG° and T are sufficient to determine K.',
    markScheme: null
  },

  {
    id: 'U9Q015', understandingId: 'U9.5.2', subtopic: '9.5', section: 'unit9',
    concepts: ['gibbs-free-energy', 'equilibrium'], type: 'mcq',
    commandTerm: 'predict', difficulty: 2, source: 'original', marks: 1,
    stem: 'If ΔG° for a reaction changes from −10 kJ/mol to −20 kJ/mol (both at 298 K), how does K change?',
    options: {
      A: 'K doubles.',
      B: 'K increases by a factor of approximately 50.',
      C: 'K decreases.',
      D: 'K remains the same because temperature did not change.'
    },
    answer: 'B',
    explanation: 'K<sub>1</sub> = e^(10000/2478) = e^4.04 ≈ 57. K<sub>2</sub> = e^(20000/2478) = e^8.07 ≈ 3200. K<sub>2</sub>/K<sub>1</sub> ≈ 56 ≈ 50. Because of the exponential relationship, doubling ΔG° approximately squares K (or increases it by about 50-fold). D is wrong — K changes with ΔG° even at constant T.',
    markScheme: null
  },

  {
    id: 'U9Q016', understandingId: 'U9.5.3', subtopic: '9.5', section: 'unit9',
    concepts: ['gibbs-free-energy', 'equilibrium'], type: 'short',
    commandTerm: 'explain', difficulty: 2, source: 'original', marks: 2,
    stem: 'Explain the difference between ΔG and ΔG°. Under what conditions does ΔG = 0?',
    options: null,
    answer: 'ΔG° is the free energy change under standard conditions (1 M, 1 atm, 298 K). ΔG is the free energy change under actual (non-standard) conditions, given by ΔG = ΔG° + RT ln Q. ΔG = 0 at equilibrium (when Q = K).',
    explanation: 'ΔG° is a constant for a given reaction at a given temperature — it reflects the inherent thermodynamic favorability. ΔG depends on the actual concentrations/pressures (through Q) and tells you the direction the reaction will shift from its current state. At equilibrium, the system has no net driving force in either direction, so ΔG = 0.',
    markScheme: '1 pt: correct distinction between ΔG and ΔG° referencing standard vs actual conditions. 1 pt: ΔG = 0 at equilibrium (Q = K).'
  },

  /* ──────── 9.6 Coupled Reactions ──────── */

  {
    id: 'U9Q017', understandingId: 'U9.6.1', subtopic: '9.6', section: 'unit9',
    concepts: ['coupled-reactions', 'gibbs-free-energy'], type: 'frq',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 4,
    stem: 'Consider the following two reactions:\nReaction 1: TiO<sub>2</sub>(s) → Ti(s) + O<sub>2</sub>(g)  ΔG° = +888.8 kJ/mol\nReaction 2: 2 C(s) + O<sub>2</sub>(g) → 2 CO(g)  ΔG° = −274.4 kJ/mol\n(a) Calculate ΔG° for the overall coupled reaction: TiO<sub>2</sub>(s) + 2 C(s) → Ti(s) + 2 CO(g).\n(b) Is the coupled reaction thermodynamically favorable? Explain why coupling is necessary.',
    options: null,
    answer: '(a) ΔG° = +888.8 + (−274.4) = +614.4 kJ/mol. (b) No — even coupled, ΔG° is still positive. The combustion of carbon is not favorable enough to drive the reduction of TiO<sub>2</sub>. Even more energy input (e.g., higher temperature or a different coupling reaction) would be needed.',
    explanation: '(a) ΔG°total = ΔG°<sub>1</sub> + ΔG°<sub>2</sub> = 888.8 + (−274.4) = +614.4 kJ/mol. (b) The coupled reaction is still unfavorable because |ΔG°<sub>2</sub>| < |ΔG°<sub>1</sub>|. This illustrates that coupling only works when the favorable reaction has a larger magnitude of ΔG° than the unfavorable one. TiO<sub>2</sub> requires extreme conditions (Kroll process) for reduction.',
    markScheme: '(a) 2 pts: correct addition of ΔG° values with correct answer. (b) 2 pts: correct conclusion (unfavorable) with explanation that |ΔG<sub>2</sub>| < |ΔG<sub>1</sub>|.'
  },

  {
    id: 'U9Q018', understandingId: 'U9.6.2', subtopic: '9.6', section: 'unit9',
    concepts: ['coupled-reactions'], type: 'mcq',
    commandTerm: 'identify', difficulty: 2, source: 'original', marks: 1,
    stem: 'In living cells, the hydrolysis of ATP (ΔG° = −30.5 kJ/mol) is coupled to an unfavorable biosynthetic reaction with ΔG° = +18.0 kJ/mol. What is ΔG° for the coupled process?',
    options: {
      A: '+48.5 kJ/mol',
      B: '−48.5 kJ/mol',
      C: '−12.5 kJ/mol',
      D: '+12.5 kJ/mol'
    },
    answer: 'C',
    explanation: 'ΔG°total = (−30.5) + (+18.0) = −12.5 kJ/mol. The overall coupled process is thermodynamically favorable because the favorable ATP hydrolysis (|ΔG°| = 30.5) exceeds the unfavorable biosynthetic reaction (|ΔG°| = 18.0).',
    markScheme: null
  },

  /* ──────── 9.7 Galvanic (Voltaic) and Electrolytic Cells ──────── */

  {
    id: 'U9Q019', understandingId: 'U9.7.1', subtopic: '9.7', section: 'unit9',
    concepts: ['electrochemistry', 'galvanic-cell'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'In a galvanic (voltaic) cell, electrons flow through the external circuit from:',
    options: {
      A: 'cathode to anode.',
      B: 'anode to cathode.',
      C: 'the salt bridge to the cathode.',
      D: 'the solution to the wire.'
    },
    answer: 'B',
    explanation: 'In all electrochemical cells, electrons flow from the anode (where oxidation releases electrons) through the external wire to the cathode (where reduction consumes electrons). Electrons never flow through the salt bridge (C) or solution (D) — only ions flow through those.',
    markScheme: null
  },

  {
    id: 'U9Q020', understandingId: 'U9.7.1', subtopic: '9.7', section: 'unit9',
    concepts: ['electrochemistry', 'galvanic-cell'], type: 'frq',
    commandTerm: 'describe', difficulty: 3, source: 'original', marks: 5,
    stem: 'A galvanic cell is constructed using the half-reactions:\nAg<sup>+</sup>(aq) + e<sup>−</sup> → Ag(s)  E° = +0.80 V\nZn<sup>2</sup><sup>+</sup>(aq) + 2e<sup>−</sup> → Zn(s)  E° = −0.76 V\n(a) Identify the anode and cathode. Write the overall cell reaction.\n(b) Calculate E°cell.\n(c) Write the cell notation.\n(d) Describe the direction of electron flow and ion flow in the salt bridge.',
    options: null,
    answer: '(a) Anode: Zn (oxidized); Cathode: Ag (Ag<sup>+</sup> reduced). Overall: Zn(s) + 2 Ag<sup>+</sup>(aq) → Zn<sup>2</sup><sup>+</sup>(aq) + 2 Ag(s). (b) E°cell = +0.80 − (−0.76) = +1.56 V. (c) Zn(s) | Zn<sup>2</sup><sup>+</sup>(aq) || Ag<sup>+</sup>(aq) | Ag(s). (d) Electrons flow from Zn anode to Ag cathode through the wire. In the salt bridge, anions migrate toward the Zn anode; cations migrate toward the Ag cathode.',
    explanation: '(a) Ag<sup>+</sup> has the more positive E°, so it is reduced (cathode). Zn has the more negative E°, so it is oxidized (anode). The Ag half-reaction is multiplied by 2 to balance electrons, but E° is not multiplied. (b) E°cell = E°cathode − E°anode = 0.80 − (−0.76) = 1.56 V. (c) Anode on the left, cathode on the right. (d) Electrons flow from the site of oxidation (anode) to the site of reduction (cathode). Salt bridge anions move toward the anode to balance the Zn<sup>2</sup><sup>+</sup> entering solution; cations move toward the cathode to replace the Ag<sup>+</sup> being consumed.',
    markScheme: '(a) 1 pt: correct anode/cathode ID and overall reaction. (b) 1 pt: correct E°cell. (c) 1 pt: correct cell notation. (d) 2 pts: correct electron flow direction and ion flow in salt bridge.'
  },

  {
    id: 'U9Q021', understandingId: 'U9.7.2', subtopic: '9.7', section: 'unit9',
    concepts: ['electrochemistry', 'electrolytic-cell'], type: 'mcq',
    commandTerm: 'identify', difficulty: 2, source: 'original', marks: 1,
    stem: 'Which of the following correctly distinguishes a galvanic cell from an electrolytic cell?',
    options: {
      A: 'In a galvanic cell, oxidation occurs at the cathode.',
      B: 'In an electrolytic cell, the anode is positive and the cathode is negative.',
      C: 'In a galvanic cell, E°cell is negative.',
      D: 'In an electrolytic cell, no external energy source is required.'
    },
    answer: 'B',
    explanation: 'In an electrolytic cell, the external power source makes the anode positive and the cathode negative (opposite of a galvanic cell). A is wrong — oxidation is always at the anode in all cells. C is wrong — galvanic cells have positive E°cell. D is wrong — electrolytic cells require an external energy source.',
    markScheme: null
  },

  {
    id: 'U9Q022', understandingId: 'U9.7.3', subtopic: '9.7', section: 'unit9',
    concepts: ['electrochemistry'], type: 'short',
    commandTerm: 'explain', difficulty: 2, source: 'original', marks: 2,
    stem: 'Explain the function of the salt bridge in a galvanic cell. What would happen if the salt bridge were removed?',
    options: null,
    answer: 'The salt bridge allows ions to migrate between half-cells to maintain electrical neutrality. Anions flow toward the anode; cations flow toward the cathode. Without the salt bridge, charge would build up in each half-cell (excess positive charge at the anode, excess negative charge at the cathode), creating an opposing electric field that would quickly halt the flow of electrons and stop the cell from functioning.',
    explanation: 'As Zn oxidizes, Zn<sup>2</sup><sup>+</sup> enters the anode solution, making it positively charged. As Cu<sup>2</sup><sup>+</sup> is reduced at the cathode, the cathode solution becomes negatively charged. The salt bridge provides ions to neutralize this charge buildup. Without it, the cell would stop within seconds.',
    markScheme: '1 pt: allows ion migration to maintain neutrality. 1 pt: without it, charge buildup would stop electron flow.'
  },

  /* ──────── 9.8 Cell Potential and Free Energy ──────── */

  {
    id: 'U9Q023', understandingId: 'U9.8.1', subtopic: '9.8', section: 'unit9',
    concepts: ['electrochemistry', 'cell-potential'], type: 'mcq',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 1,
    stem: 'Given: E°(Fe<sup>3</sup><sup>+</sup>/Fe<sup>2</sup><sup>+</sup>) = +0.77 V and E°(Sn<sup>4</sup><sup>+</sup>/Sn<sup>2</sup><sup>+</sup>) = +0.15 V. Calculate E°cell for the reaction: 2 Fe<sup>3</sup><sup>+</sup>(aq) + Sn<sup>2</sup><sup>+</sup>(aq) → 2 Fe<sup>2</sup><sup>+</sup>(aq) + Sn<sup>4</sup><sup>+</sup>(aq).',
    options: {
      A: '+0.92 V',
      B: '+0.62 V',
      C: '+1.54 V',
      D: '−0.62 V'
    },
    answer: 'B',
    explanation: 'Fe<sup>3</sup><sup>+</sup> is reduced (cathode, more positive E°). Sn<sup>2</sup><sup>+</sup> is oxidized (anode). E°cell = E°cathode − E°anode = +0.77 − (+0.15) = +0.62 V. Note that even though the Fe half-reaction is multiplied by 2, E° is NOT multiplied because it is intensive.',
    markScheme: null
  },

  {
    id: 'U9Q024', understandingId: 'U9.8.1', subtopic: '9.8', section: 'unit9',
    concepts: ['electrochemistry', 'cell-potential'], type: 'mcq',
    commandTerm: 'determine', difficulty: 1, source: 'original', marks: 1,
    stem: 'A student calculates E°cell for a reaction and gets −0.45 V. What does this indicate?',
    options: {
      A: 'The reaction is spontaneous as written.',
      B: 'The reaction requires an external energy source to proceed.',
      C: 'The reaction is at equilibrium.',
      D: 'The student made a calculation error — E°cell cannot be negative.'
    },
    answer: 'B',
    explanation: 'A negative E°cell means the reaction is non-spontaneous as written. It would require electrolysis (external energy input) to proceed. D is wrong — E°cell can be negative for non-spontaneous reactions. If the cell were built as a galvanic cell, the reaction would actually run in the reverse direction.',
    markScheme: null
  },

  {
    id: 'U9Q025', understandingId: 'U9.8.2', subtopic: '9.8', section: 'unit9',
    concepts: ['electrochemistry', 'gibbs-free-energy'], type: 'frq',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 5,
    stem: 'For the reaction: 2 Al(s) + 3 Cu<sup>2</sup><sup>+</sup>(aq) → 2 Al<sup>3</sup><sup>+</sup>(aq) + 3 Cu(s), E°cell = +2.00 V.\n(a) Calculate ΔG° in kJ/mol.\n(b) Calculate the equilibrium constant K at 298 K.\n(c) Explain what the magnitude of K tells you about the extent of this reaction.',
    options: null,
    answer: '(a) n = 6; ΔG° = −(6)(96,485)(2.00) = −1,157,820 J = −1157.8 kJ/mol. (b) ΔG° = −RT ln K → −1,157,820 = −(8.314)(298) ln K → ln K = 467.4 → K = e^467.4 ≈ 10^203. (c) The astronomically large K means the reaction goes essentially to completion — virtually all reactants are converted to products.',
    explanation: '(a) The balanced equation transfers 6 electrons (each Al loses 3e<sup>−</sup>, and there are 2 Al atoms, so n = 6). ΔG° = −nFE° = −(6)(96,485)(2.00) = −1,157,820 J = −1157.8 kJ/mol. (b) Using ΔG° = −RT ln K: ln K = −ΔG°/(RT) = 1,157,820/(8.314 × 298) = 467.4. K = e^467.4, which is approximately 10^203. (c) Such an enormous K means the equilibrium lies overwhelmingly on the product side — the reaction is essentially irreversible under standard conditions.',
    markScheme: '(a) 2 pts: correct n = 6 and correct ΔG°. (b) 2 pts: correct calculation of K (accept any form showing K >> 1). (c) 1 pt: explains that very large K means reaction goes to completion.'
  },

  {
    id: 'U9Q026', understandingId: 'U9.8.3', subtopic: '9.8', section: 'unit9',
    concepts: ['electrochemistry', 'cell-potential'], type: 'short',
    commandTerm: 'predict', difficulty: 2, source: 'original', marks: 2,
    stem: 'Using the reduction potentials E°(Pb<sup>2</sup><sup>+</sup>/Pb) = −0.13 V and E°(H<sup>+</sup>/H<sub>2</sub>) = 0.00 V, determine whether Pb will dissolve in 1.0 M HCl. Show your calculation.',
    options: null,
    answer: 'Pb would be oxidized (anode): E°anode = −0.13 V. H<sup>+</sup> would be reduced (cathode): E°cathode = 0.00 V. E°cell = 0.00 − (−0.13) = +0.13 V > 0. Yes, Pb will dissolve in HCl (the reaction is spontaneous).',
    explanation: 'The reaction Pb(s) + 2 H<sup>+</sup>(aq) → Pb<sup>2</sup><sup>+</sup>(aq) + H<sub>2</sub>(g) has E°cell = +0.13 V, which is positive, meaning the reaction is spontaneous. Pb is above H<sub>2</sub> in the activity series (has a more negative E°), so it can be oxidized by H<sup>+</sup>.',
    markScheme: '1 pt: correct E°cell calculation showing +0.13 V. 1 pt: correct conclusion that Pb dissolves (E°cell > 0).'
  },

  /* ──────── 9.9 Cell Potential Under Nonstandard Conditions ──────── */

  {
    id: 'U9Q027', understandingId: 'U9.9.1', subtopic: '9.9', section: 'unit9',
    concepts: ['electrochemistry', 'nernst-equation'], type: 'frq',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 5,
    stem: 'A galvanic cell has the reaction: Ni(s) + Cu<sup>2</sup><sup>+</sup>(aq) → Ni<sup>2</sup><sup>+</sup>(aq) + Cu(s), with E°cell = +0.60 V and n = 2.\n(a) Calculate Ecell when [Cu<sup>2</sup><sup>+</sup>] = 0.0010 M and [Ni<sup>2</sup><sup>+</sup>] = 1.5 M at 25°C.\n(b) Would increasing [Cu<sup>2</sup><sup>+</sup>] increase or decrease Ecell? Explain using the Nernst equation.',
    options: null,
    answer: '(a) Q = [Ni<sup>2</sup><sup>+</sup>]/[Cu<sup>2</sup><sup>+</sup>] = 1.5/0.0010 = 1500. E = 0.60 − (0.0592/2) log(1500) = 0.60 − (0.0296)(3.176) = 0.60 − 0.094 = 0.51 V. (b) Increasing [Cu<sup>2</sup><sup>+</sup>] decreases Q, which decreases log Q, making the subtracted term smaller, so Ecell increases.',
    explanation: '(a) Q = [products]/[reactants] = [Ni<sup>2</sup><sup>+</sup>]/[Cu<sup>2</sup><sup>+</sup>] = 1.5/0.0010 = 1500. E = E° − (0.0592/n) log Q = 0.60 − (0.0592/2) log(1500) = 0.60 − (0.0296)(3.176) = 0.60 − 0.094 = 0.51 V. Since Q > 1, E < E° as expected. (b) Increasing [Cu<sup>2</sup><sup>+</sup>] (a reactant) decreases Q, which makes log Q smaller. Since we subtract (0.0592/n) log Q, a smaller subtracted value means a larger E. This is consistent with Le Chatelier — more reactant drives the forward reaction harder.',
    markScheme: '(a) 3 pts: correct Q, correct substitution into Nernst equation, correct Ecell. (b) 2 pts: correct prediction (Ecell increases) with explanation referencing Q decrease.'
  },

  {
    id: 'U9Q028', understandingId: 'U9.9.2', subtopic: '9.9', section: 'unit9',
    concepts: ['electrochemistry', 'nernst-equation'], type: 'mcq',
    commandTerm: 'determine', difficulty: 2, source: 'original', marks: 1,
    stem: 'In a concentration cell with Cu electrodes, one half-cell has [Cu<sup>2</sup><sup>+</sup>] = 0.0010 M and the other has [Cu<sup>2</sup><sup>+</sup>] = 1.0 M. Which statement is correct?',
    options: {
      A: 'E°cell = +0.34 V and the dilute side is the cathode.',
      B: 'E°cell = 0 and the dilute side is the anode.',
      C: 'E°cell = 0 and the concentrated side is the anode.',
      D: 'The cell cannot produce any voltage because both electrodes are the same metal.'
    },
    answer: 'B',
    explanation: 'In a concentration cell, both half-reactions are identical, so E° = 0 (not +0.34 V, ruling out A). However, the cell still produces voltage because Q ≠ 1. The dilute side is the anode (Cu dissolves to increase [Cu<sup>2</sup><sup>+</sup>]), and the concentrated side is the cathode (Cu<sup>2</sup><sup>+</sup> is reduced to decrease [Cu<sup>2</sup><sup>+</sup>]). D is wrong — the concentration difference provides a driving force.',
    markScheme: null
  },

  /* ──────── 9.10 Electrolysis and Faraday's Law ──────── */

  {
    id: 'U9Q029', understandingId: 'U9.10.1', subtopic: '9.10', section: 'unit9',
    concepts: ['electrochemistry', 'electrolysis'], type: 'frq',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 5,
    stem: 'A solution of AuCl<sub>3</sub> is electrolyzed using a current of 2.50 A for 45.0 minutes.\n(a) Write the cathode half-reaction.\n(b) Calculate the mass of gold deposited at the cathode. (Molar mass of Au = 197.0 g/mol, F = 96,485 C/mol)',
    options: null,
    answer: '(a) Au<sup>3</sup><sup>+</sup>(aq) + 3e<sup>−</sup> → Au(s). (b) t = 45.0 × 60 = 2700 s. q = 2.50 × 2700 = 6750 C. mol e<sup>−</sup> = 6750/96,485 = 0.06994 mol. mol Au = 0.06994/3 = 0.02331 mol. mass = 0.02331 × 197.0 = 4.59 g Au.',
    explanation: '(a) Gold(III) is reduced at the cathode, gaining 3 electrons per Au<sup>3</sup><sup>+</sup> ion. (b) Step 1: Convert time to seconds: 45.0 min × 60 = 2700 s. Step 2: q = I × t = 2.50 × 2700 = 6750 C. Step 3: mol e<sup>−</sup> = 6750/96,485 = 0.06994 mol. Step 4: From the half-reaction, 3 mol e<sup>−</sup> deposit 1 mol Au, so mol Au = 0.06994/3 = 0.02331 mol. Step 5: mass = 0.02331 × 197.0 = 4.59 g.',
    markScheme: '(a) 1 pt: correct half-reaction with Au<sup>3</sup><sup>+</sup> and 3e<sup>−</sup>. (b) 4 pts: 1 pt time conversion, 1 pt charge calculation, 1 pt mol e<sup>−</sup> and stoichiometry, 1 pt correct final mass.'
  },

  {
    id: 'U9Q030', understandingId: 'U9.10.1', subtopic: '9.10', section: 'unit9',
    concepts: ['electrochemistry', 'electrolysis'], type: 'short',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 3,
    stem: 'How long (in minutes) must a current of 10.0 A be applied to deposit 5.00 g of Ni from a NiSO<sub>4</sub> solution? (Molar mass of Ni = 58.69 g/mol; Ni<sup>2</sup><sup>+</sup> + 2e<sup>−</sup> → Ni)',
    options: null,
    answer: 'mol Ni = 5.00/58.69 = 0.08521 mol. mol e<sup>−</sup> = 0.08521 × 2 = 0.1704 mol. q = 0.1704 × 96,485 = 16,443 C. t = q/I = 16,443/10.0 = 1644 s = 27.4 min.',
    explanation: 'mol Ni = 5.00 g / 58.69 g/mol = 0.08521 mol. From the half-reaction, each Ni requires 2 electrons, so mol e<sup>−</sup> = 2 × 0.08521 = 0.1704 mol. Charge needed: q = 0.1704 × 96,485 = 16,443 C. Time: t = q/I = 16,443/10.0 = 1644 s ÷ 60 = 27.4 minutes.',
    markScheme: '1 pt: correct mol Ni and mol e<sup>−</sup>. 1 pt: correct charge calculation. 1 pt: correct time with unit conversion to minutes.'
  },

  {
    id: 'U9Q031', understandingId: 'U9.10.2', subtopic: '9.10', section: 'unit9',
    concepts: ['electrochemistry', 'electrolysis'], type: 'mcq',
    commandTerm: 'predict', difficulty: 2, source: 'original', marks: 1,
    stem: 'During electrolysis of aqueous Na<sub>2</sub>SO<sub>4</sub>, which products are formed at the electrodes?',
    options: {
      A: 'Na(s) at the cathode and O<sub>2</sub>(g) at the anode.',
      B: 'H<sub>2</sub>(g) at the cathode and O<sub>2</sub>(g) at the anode.',
      C: 'Na(s) at the cathode and S<sub>2</sub>O<sub>8</sub><sup>2</sup><sup>−</sup> at the anode.',
      D: 'H<sub>2</sub>(g) at the cathode and SO<sub>2</sub>(g) at the anode.'
    },
    answer: 'B',
    explanation: 'Na<sup>+</sup> has a very negative E° (−2.71 V), far more negative than water reduction (−0.83 V), so water is reduced instead: 2 H<sub>2</sub>O + 2e<sup>−</sup> → H<sub>2</sub>(g) + 2 OH<sup>−</sup>. At the anode, SO<sub>4</sub><sup>2</sup><sup>−</sup> is very difficult to oxidize, so water is oxidized instead: 2 H<sub>2</sub>O → O<sub>2</sub>(g) + 4 H<sup>+</sup> + 4e<sup>−</sup>. The net result is electrolysis of water: 2 H<sub>2</sub>O → 2 H<sub>2</sub> + O<sub>2</sub>.',
    markScheme: null
  }

];
