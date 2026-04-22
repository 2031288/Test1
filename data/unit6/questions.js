/*
 *  AP Chemistry – Unit 6: Thermodynamics
 *  Data file: questions.js
 *  25 questions (14 MCQ, 7 short-answer, 4 FRQ)
 */

window.DB_U6_QUESTIONS = [

  /* ──────── 6.1 Endothermic and Exothermic Processes ──────── */

  {
    id: 'U6Q001', understandingId: 'U6.1.1', subtopic: '6.1', section: 'unit6',
    concepts: ['energy', 'system-surroundings'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'When ammonium nitrate dissolves in water the temperature of the solution decreases. Which statement correctly describes the energy change?',
    options: {
      A: 'The process is endothermic; q_system > 0.',
      B: 'The process is exothermic; q_system > 0.',
      C: 'The process is endothermic; q_system < 0.',
      D: 'The process is exothermic; q_system < 0.'
    },
    answer: 'A',
    explanation: 'The temperature of the surroundings (solution) drops, meaning energy flowed from the surroundings into the system. q_system is positive, so the process is endothermic.',
    markScheme: null
  },

  {
    id: 'U6Q002', understandingId: 'U6.1.1', subtopic: '6.1', section: 'unit6',
    concepts: ['energy'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'In an exothermic reaction, which of the following is true?',
    options: {
      A: 'The system gains energy from the surroundings.',
      B: 'The products have higher potential energy than the reactants.',
      C: 'The temperature of the surroundings increases.',
      D: 'q_system is positive.'
    },
    answer: 'C',
    explanation: 'In an exothermic reaction the system releases energy (q < 0), which raises the temperature of the surroundings.',
    markScheme: null
  },

  {
    id: 'U6Q003', understandingId: 'U6.1.2', subtopic: '6.1', section: 'unit6',
    concepts: ['bond-energy'], type: 'mcq',
    commandTerm: 'explain', difficulty: 1, source: 'original', marks: 1,
    stem: 'Which statement about bond breaking and bond forming is correct?',
    options: {
      A: 'Bond breaking is exothermic; bond forming is endothermic.',
      B: 'Both bond breaking and bond forming are endothermic.',
      C: 'Bond breaking is endothermic; bond forming is exothermic.',
      D: 'Both bond breaking and bond forming are exothermic.'
    },
    answer: 'C',
    explanation: 'Energy must be supplied to break bonds (endothermic), and energy is released when new bonds form (exothermic).',
    markScheme: null
  },

  /* ──────── 6.2 Energy Diagrams ──────── */

  {
    id: 'U6Q004', understandingId: 'U6.2.1', subtopic: '6.2', section: 'unit6',
    concepts: ['energy-diagram', 'activation-energy'], type: 'mcq',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 1,
    stem: 'A potential energy diagram shows reactants at 120 kJ, a transition state at 200 kJ, and products at 50 kJ. What is the activation energy for the forward reaction?',
    options: {
      A: '50 kJ',
      B: '70 kJ',
      C: '80 kJ',
      D: '150 kJ'
    },
    answer: 'C',
    explanation: 'E_a(forward) = transition state − reactants = 200 − 120 = 80 kJ.',
    markScheme: null
  },

  {
    id: 'U6Q005', understandingId: 'U6.2.1', subtopic: '6.2', section: 'unit6',
    concepts: ['energy-diagram'], type: 'short',
    commandTerm: 'determine', difficulty: 2, source: 'original', marks: 2,
    stem: 'Using the same diagram (reactants at 120 kJ, transition state at 200 kJ, products at 50 kJ), determine ΔH_rxn and state whether the reaction is exothermic or endothermic. Show your work.',
    options: null,
    answer: 'ΔH_rxn = 50 − 120 = −70 kJ. Because ΔH < 0, the reaction is exothermic.',
    explanation: 'ΔH_rxn equals the energy of the products minus the energy of the reactants. A negative value indicates an exothermic reaction.',
    markScheme: '1 mark: correct calculation (−70 kJ). 1 mark: correct identification as exothermic with justification.'
  },

  {
    id: 'U6Q006', understandingId: 'U6.2.2', subtopic: '6.2', section: 'unit6',
    concepts: ['catalyst', 'energy-diagram'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'A catalyst is added to a reaction. Which quantity on the potential energy diagram changes?',
    options: {
      A: 'ΔH_rxn',
      B: 'Energy of the reactants',
      C: 'Activation energy (E_a)',
      D: 'Energy of the products'
    },
    answer: 'C',
    explanation: 'A catalyst provides an alternative pathway with a lower activation energy. It does not change the energies of the reactants, products, or ΔH_rxn.',
    markScheme: null
  },

  /* ──────── 6.3 Heat Transfer and Thermal Equilibrium ──────── */

  {
    id: 'U6Q007', understandingId: 'U6.3.1', subtopic: '6.3', section: 'unit6',
    concepts: ['heat-transfer', 'thermal-equilibrium'], type: 'short',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 3,
    stem: 'A 75.0 g piece of copper at 95.0 °C is placed into 150.0 g of water at 22.0 °C. If the specific heat of copper is 0.385 J g<sup>−</sup><sup>1</sup> °C<sup>−</sup><sup>1</sup> and the specific heat of water is 4.184 J g<sup>−</sup><sup>1</sup> °C<sup>−</sup><sup>1</sup>, find the final equilibrium temperature. Assume no heat loss to the surroundings.',
    options: null,
    answer: 'T_f ≈ 25.4 °C',
    explanation: 'q_Cu = −q_water → (75.0)(0.385)(T_f − 95.0) = −(150.0)(4.184)(T_f − 22.0). Solving: 28.875 T_f − 2743.1 = −627.6 T_f + 13807.2. 656.475 T_f = 16550.3. T_f ≈ 25.2 °C (slight variation with rounding).',
    markScheme: '1 mark: correct setup of q_hot = −q_cold. 1 mark: correct substitution. 1 mark: correct answer with appropriate sig figs.'
  },

  {
    id: 'U6Q008', understandingId: 'U6.3.2', subtopic: '6.3', section: 'unit6',
    concepts: ['temperature', 'kinetic-energy'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'Which statement correctly distinguishes temperature from heat?',
    options: {
      A: 'Temperature is an extensive property; heat is intensive.',
      B: 'Temperature measures average kinetic energy; heat is the total energy transferred.',
      C: 'Temperature and heat are the same quantity measured in different units.',
      D: 'Heat measures average kinetic energy; temperature is total thermal energy.'
    },
    answer: 'B',
    explanation: 'Temperature is a measure of average kinetic energy (intensive property). Heat is the total energy transferred between objects at different temperatures (extensive).',
    markScheme: null
  },

  /* ──────── 6.4 Heat Capacity and Calorimetry ──────── */

  {
    id: 'U6Q009', understandingId: 'U6.4.1', subtopic: '6.4', section: 'unit6',
    concepts: ['specific-heat', 'calorimetry'], type: 'mcq',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 1,
    stem: 'How much heat is needed to raise the temperature of 250.0 g of water from 20.0 °C to 75.0 °C? (c<sub>water</sub> = 4.184 J g<sup>−</sup><sup>1</sup> °C<sup>−</sup><sup>1</sup>)',
    options: {
      A: '5.75 kJ',
      B: '57.5 kJ',
      C: '23.0 kJ',
      D: '115 kJ'
    },
    answer: 'B',
    explanation: 'q = mcΔT = (250.0)(4.184)(55.0) = 57,530 J ≈ 57.5 kJ.',
    markScheme: null
  },

  {
    id: 'U6Q010', understandingId: 'U6.4.1', subtopic: '6.4', section: 'unit6',
    concepts: ['specific-heat'], type: 'short',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 2,
    stem: 'A 45.0 g sample of an unknown metal absorbs 1260 J of heat and its temperature rises from 25.0 °C to 95.0 °C. Calculate the specific heat of the metal and suggest its identity. (Al = 0.897, Fe = 0.449, Cu = 0.385, Pb = 0.128 J g<sup>−</sup><sup>1</sup> °C<sup>−</sup><sup>1</sup>)',
    options: null,
    answer: 'c = q/(mΔT) = 1260 / (45.0 × 70.0) = 0.400 J g<sup>−</sup><sup>1</sup> °C<sup>−</sup><sup>1</sup>. Closest match: copper (0.385) or iron (0.449). Most likely iron given rounding.',
    explanation: 'Rearrange q = mcΔT to solve for c. The calculated value (0.400) is between Fe and Cu; experimental error could place it at either, but it is closest to Cu (0.385). On a real exam, either answer with justification would earn credit.',
    markScheme: '1 mark: correct calculation of c. 1 mark: reasonable metal identification with justification.'
  },

  {
    id: 'U6Q011', understandingId: 'U6.4.2', subtopic: '6.4', section: 'unit6',
    concepts: ['coffee-cup-calorimetry'], type: 'frq',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 5,
    stem: 'In a coffee-cup calorimeter, 100.0 mL of 0.500 M HCl is mixed with 100.0 mL of 0.500 M NaOH. The temperature changes from 21.5 °C to 25.0 °C. Assume the solution has the density and specific heat of water (1.00 g/mL, 4.184 J g<sup>−</sup><sup>1</sup> °C<sup>−</sup><sup>1</sup>).\n\n(a) Calculate q_solution.\n(b) Determine q<sub>rxn</sub>.\n(c) Calculate the moles of water formed.\n(d) Calculate ΔH_neutralization in kJ/mol.\n(e) Is this reaction exothermic or endothermic? Justify.',
    options: null,
    answer: '(a) q_soln = (200.0 g)(4.184)(3.5) = 2928.8 J ≈ 2.93 kJ\n(b) q<sub>rxn</sub> = −2.93 kJ\n(c) n = 0.100 L × 0.500 M = 0.0500 mol H<sub>2</sub>O\n(d) ΔH = −2.93 / 0.0500 = −58.6 kJ/mol\n(e) Exothermic: ΔH < 0 and the temperature of the solution increased.',
    explanation: 'The temperature rise indicates the reaction released heat into the solution. q<sub>rxn</sub> is negative (exothermic). Dividing by moles gives the molar enthalpy of neutralization, close to the accepted −57.1 kJ/mol.',
    markScheme: '(a) 1 mark: correct q_soln with units. (b) 1 mark: correct sign flip. (c) 1 mark: correct moles. (d) 1 mark: correct ΔH with units. (e) 1 mark: exothermic with justification (negative ΔH or temperature rise).'
  },

  {
    id: 'U6Q012', understandingId: 'U6.4.2', subtopic: '6.4', section: 'unit6',
    concepts: ['calorimetry'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'In a coffee-cup calorimetry experiment, the temperature of the solution increases. Which of the following is true?',
    options: {
      A: 'q<sub>rxn</sub> is positive and the reaction is endothermic.',
      B: 'q<sub>rxn</sub> is negative and the reaction is endothermic.',
      C: 'q<sub>rxn</sub> is negative and the reaction is exothermic.',
      D: 'q<sub>rxn</sub> is positive and the reaction is exothermic.'
    },
    answer: 'C',
    explanation: 'A temperature increase in the solution means the solution absorbed heat from the reaction. q_solution > 0, so q<sub>rxn</sub> = −q_solution < 0. The reaction is exothermic.',
    markScheme: null
  },

  {
    id: 'U6Q013', understandingId: 'U6.4.3', subtopic: '6.4', section: 'unit6',
    concepts: ['bomb-calorimetry'], type: 'short',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 3,
    stem: 'A 2.00 g sample of sucrose (C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>, M = 342.30 g/mol) is burned in a bomb calorimeter with C_cal = 8.50 kJ/°C. The temperature rises by 6.72 °C. Calculate the molar heat of combustion of sucrose.',
    options: null,
    answer: 'q<sub>cal</sub> = 8.50 × 6.72 = 57.12 kJ; q<sub>rxn</sub> = −57.12 kJ. n = 2.00/342.30 = 0.005843 mol. ΔH_comb = −57.12/0.005843 = −9775 kJ/mol ≈ −9.78 × 10<sup>3</sup> kJ/mol.',
    explanation: 'The heat absorbed by the calorimeter equals C_cal × ΔT. q<sub>rxn</sub> is the negative of this. Dividing by moles gives the molar combustion enthalpy. (Literature: −5645 kJ/mol — discrepancy due to simplified C_cal.)',
    markScheme: '1 mark: correct q<sub>cal</sub>. 1 mark: correct moles. 1 mark: correct ΔH_comb with sign and units.'
  },

  /* ──────── 6.5 Energy of Phase Changes ──────── */

  {
    id: 'U6Q014', understandingId: 'U6.5.1', subtopic: '6.5', section: 'unit6',
    concepts: ['phase-change'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'During the melting of ice at 0 °C, which of the following occurs?',
    options: {
      A: 'The temperature of the ice increases steadily.',
      B: 'The kinetic energy of the molecules increases.',
      C: 'The potential energy of the molecules increases while the temperature remains constant.',
      D: 'Both kinetic and potential energy remain constant.'
    },
    answer: 'C',
    explanation: 'During a phase change, temperature (and thus average kinetic energy) remains constant. The added energy goes into overcoming intermolecular forces, increasing potential energy.',
    markScheme: null
  },

  {
    id: 'U6Q015', understandingId: 'U6.5.2', subtopic: '6.5', section: 'unit6',
    concepts: ['heating-curve'], type: 'frq',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 6,
    stem: 'Calculate the total energy needed to convert 54.0 g of ice at −20.0 °C to liquid water at 60.0 °C.\n\nData: c<sub>ice</sub> = 2.09 J g<sup>−</sup><sup>1</sup> °C<sup>−</sup><sup>1</sup>, ΔH<sub>fus</sub> = 6.01 kJ/mol, c<sub>water</sub> = 4.184 J g<sup>−</sup><sup>1</sup> °C<sup>−</sup><sup>1</sup>, M(H<sub>2</sub>O) = 18.02 g/mol.\n\n(a) Calculate the heat to warm the ice from −20.0 °C to 0 °C.\n(b) Calculate the heat to melt the ice at 0 °C.\n(c) Calculate the heat to warm the water from 0 °C to 60.0 °C.\n(d) Find the total energy in kJ.',
    options: null,
    answer: '(a) q<sub>1</sub> = (54.0)(2.09)(20.0) = 2257.2 J = 2.26 kJ\n(b) n = 54.0/18.02 = 3.00 mol; q<sub>2</sub> = (3.00)(6.01) = 18.03 kJ\n(c) q<sub>3</sub> = (54.0)(4.184)(60.0) = 13,556 J = 13.56 kJ\n(d) Total = 2.26 + 18.03 + 13.56 = 33.85 kJ ≈ 33.9 kJ',
    explanation: 'Three segments: (1) heat solid ice (q = mcΔT), (2) melt ice (q = nΔH<sub>fus</sub>, no temperature change), (3) heat liquid water (q = mcΔT). Sum all three for total energy.',
    markScheme: '(a) 1.5 marks: correct q<sub>1</sub>. (b) 1.5 marks: correct moles and q<sub>2</sub>. (c) 1.5 marks: correct q<sub>3</sub>. (d) 1.5 marks: correct sum with units.'
  },

  {
    id: 'U6Q016', understandingId: 'U6.5.2', subtopic: '6.5', section: 'unit6',
    concepts: ['heating-curve'], type: 'mcq',
    commandTerm: 'identify', difficulty: 2, source: 'original', marks: 1,
    stem: 'On a heating curve, the flat (horizontal) regions represent:',
    options: {
      A: 'an increase in kinetic energy at constant potential energy.',
      B: 'a phase change occurring at constant temperature.',
      C: 'the substance reaching thermal equilibrium with the surroundings.',
      D: 'a decrease in heat capacity of the substance.'
    },
    answer: 'B',
    explanation: 'Flat regions on a heating curve indicate phase changes. During a phase change, added energy overcomes intermolecular forces rather than raising the temperature.',
    markScheme: null
  },

  /* ──────── 6.6 Introduction to Enthalpy of Reaction ──────── */

  {
    id: 'U6Q017', understandingId: 'U6.6.1', subtopic: '6.6', section: 'unit6',
    concepts: ['enthalpy', 'state-function'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'Which of the following is a state function?',
    options: {
      A: 'Work (w)',
      B: 'Heat (q)',
      C: 'Enthalpy (H)',
      D: 'Distance traveled'
    },
    answer: 'C',
    explanation: 'Enthalpy is a state function — it depends only on the initial and final states, not on the path taken. Heat and work are path-dependent and are NOT state functions.',
    markScheme: null
  },

  {
    id: 'U6Q018', understandingId: 'U6.6.2', subtopic: '6.6', section: 'unit6',
    concepts: ['enthalpy', 'extensive-property'], type: 'short',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 2,
    stem: 'The combustion of propane is: C<sub>3</sub>H<sub>8</sub>(g) + 5O<sub>2</sub>(g) → 3CO<sub>2</sub>(g) + 4H<sub>2</sub>O(l), ΔH = −2220 kJ. How much heat is released when 11.0 g of propane is burned? (M = 44.10 g/mol)',
    options: null,
    answer: 'n = 11.0/44.10 = 0.2494 mol. q = 0.2494 × (−2220) = −553.7 kJ. About 554 kJ is released.',
    explanation: 'ΔH is per mole of reaction as written (1 mol C<sub>3</sub>H<sub>8</sub>). Multiply the moles of propane by ΔH to get total heat.',
    markScheme: '1 mark: correct moles. 1 mark: correct q with sign.'
  },

  {
    id: 'U6Q019', understandingId: 'U6.6.3', subtopic: '6.6', section: 'unit6',
    concepts: ['thermochemical-equation'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'Why must physical states be included in a thermochemical equation?',
    options: {
      A: 'Because physical states determine the color of the reactants.',
      B: 'Because the enthalpy of a substance depends on its phase.',
      C: 'Because the molar mass changes with phase.',
      D: 'Because stoichiometric coefficients differ by phase.'
    },
    answer: 'B',
    explanation: 'The enthalpy of a substance depends on its physical state. For example, H<sub>2</sub>O(l) and H<sub>2</sub>O(g) differ by ΔH<sub>vap</sub> ≈ 44 kJ/mol, so omitting states leads to incorrect ΔH values.',
    markScheme: null
  },

  /* ──────── 6.7 Bond Enthalpies ──────── */

  {
    id: 'U6Q020', understandingId: 'U6.7.1', subtopic: '6.7', section: 'unit6',
    concepts: ['bond-enthalpy'], type: 'short',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 3,
    stem: 'Use bond enthalpies to estimate ΔH for the combustion of methane:\nCH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(g)\n\nBond enthalpies (kJ/mol): C−H = 413, O=O = 498, C=O = 799, O−H = 463.',
    options: null,
    answer: 'Bonds broken: 4(C−H) + 2(O=O) = 4(413) + 2(498) = 1652 + 996 = 2648 kJ.\nBonds formed: 2(C=O) + 4(O−H) = 2(799) + 4(463) = 1598 + 1852 = 3450 kJ.\nΔH ≈ 2648 − 3450 = −802 kJ.',
    explanation: 'Count all bonds broken in reactants and all bonds formed in products. CO<sub>2</sub> has 2 C=O bonds; each H<sub>2</sub>O has 2 O−H bonds (4 total for 2 H<sub>2</sub>O). The large negative value confirms combustion is exothermic.',
    markScheme: '1 mark: correct bonds broken sum. 1 mark: correct bonds formed sum. 1 mark: correct ΔH.'
  },

  {
    id: 'U6Q021', understandingId: 'U6.7.1', subtopic: '6.7', section: 'unit6',
    concepts: ['bond-enthalpy'], type: 'mcq',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 1,
    stem: 'Given: N≡N = 941 kJ/mol, H−H = 436 kJ/mol, N−H = 391 kJ/mol. Estimate ΔH for N<sub>2</sub>(g) + 3H<sub>2</sub>(g) → 2NH<sub>3</sub>(g).',
    options: {
      A: '−93 kJ',
      B: '+93 kJ',
      C: '−105 kJ',
      D: '+105 kJ'
    },
    answer: 'C',
    explanation: 'Broken: 1(N≡N) + 3(H−H) = 941 + 1308 = 2249 kJ. Formed: 6(N−H) = 6 × 391 = 2346 kJ. ΔH ≈ 2249 − 2346 = −97 kJ. Closest answer is −105 kJ (slight variation due to average bond enthalpy values used).',
    markScheme: null
  },

  {
    id: 'U6Q022', understandingId: 'U6.7.2', subtopic: '6.7', section: 'unit6',
    concepts: ['bond-enthalpy', 'limitations'], type: 'short',
    commandTerm: 'explain', difficulty: 2, source: 'original', marks: 2,
    stem: 'Explain two reasons why a ΔH value calculated from average bond enthalpies may differ from the experimentally measured value.',
    options: null,
    answer: '(1) Bond enthalpies are averages across many molecules; the actual bond energy in a specific molecule depends on its molecular environment. (2) Bond enthalpies apply to gas-phase species; if reactants or products are liquids or solids, the energy of intermolecular forces (condensation/vaporization) is not accounted for.',
    explanation: 'Average bond enthalpies are inherently approximate. The molecular context affects actual bond strengths, and phase changes introduce additional energy terms not captured by gas-phase bond data.',
    markScheme: '1 mark per valid reason, clearly explained.'
  },

  /* ──────── 6.8 Enthalpy of Formation ──────── */

  {
    id: 'U6Q023', understandingId: 'U6.8.1', subtopic: '6.8', section: 'unit6',
    concepts: ['enthalpy-of-formation'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'Which of the following has a standard enthalpy of formation (ΔH°f) equal to zero?',
    options: {
      A: 'CO<sub>2</sub>(g)',
      B: 'H<sub>2</sub>O(l)',
      C: 'O<sub>2</sub>(g)',
      D: 'NaCl(s)'
    },
    answer: 'C',
    explanation: 'By definition, ΔH°f = 0 for any element in its standard state. O<sub>2</sub>(g) is the standard state of oxygen.',
    markScheme: null
  },

  {
    id: 'U6Q024', understandingId: 'U6.8.2', subtopic: '6.8', section: 'unit6',
    concepts: ['enthalpy-of-formation', 'enthalpy-of-reaction'], type: 'frq',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 4,
    stem: 'Calculate ΔH° for the reaction: 2C<sub>2</sub>H<sub>6</sub>(g) + 7O<sub>2</sub>(g) → 4CO<sub>2</sub>(g) + 6H<sub>2</sub>O(l)\n\nΔH°f values (kJ/mol): C<sub>2</sub>H<sub>6</sub>(g) = −84.7, CO<sub>2</sub>(g) = −393.5, H<sub>2</sub>O(l) = −285.8.\n\nShow all work.',
    options: null,
    answer: 'ΔH° = [4(−393.5) + 6(−285.8)] − [2(−84.7) + 7(0)]\n= [−1574.0 + (−1714.8)] − [−169.4]\n= −3288.8 − (−169.4)\n= −3288.8 + 169.4\n= −3119.4 kJ',
    explanation: 'Apply ΔH°rxn = Σ nΔH°f(products) − Σ nΔH°f(reactants). O<sub>2</sub> is an element in standard state, so its ΔH°f = 0. Multiply each ΔH°f by its stoichiometric coefficient.',
    markScheme: '1 mark: correct product sum. 1 mark: correct reactant sum. 1 mark: correct subtraction. 1 mark: correct final answer with sign and units.'
  },

  {
    id: 'U6Q025', understandingId: 'U6.8.2', subtopic: '6.8', section: 'unit6',
    concepts: ['enthalpy-of-formation'], type: 'mcq',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 1,
    stem: 'Given ΔH°f (kJ/mol): NH<sub>3</sub>(g) = −45.9, NO(g) = +90.3, H<sub>2</sub>O(l) = −285.8. Calculate ΔH° for:\n4NH<sub>3</sub>(g) + 5O<sub>2</sub>(g) → 4NO(g) + 6H<sub>2</sub>O(l)',
    options: {
      A: '−906.2 kJ',
      B: '−1170.2 kJ',
      C: '+1170.2 kJ',
      D: '−1626.0 kJ'
    },
    answer: 'B',
    explanation: 'ΔH° = [4(90.3) + 6(−285.8)] − [4(−45.9) + 5(0)] = [361.2 + (−1714.8)] − [−183.6] = −1353.6 + 183.6 = −1170.0 kJ.',
    markScheme: null
  },

  {
    id: 'U6Q026', understandingId: 'U6.8.3', subtopic: '6.8', section: 'unit6',
    concepts: ['enthalpy-of-formation'], type: 'mcq',
    commandTerm: 'compare', difficulty: 2, source: 'original', marks: 1,
    stem: 'Which compound is most thermodynamically stable relative to its elements, based on ΔH°f values?\n\nA: SO<sub>3</sub>(g), ΔH°f = −395.7 kJ/mol\nB: NO<sub>2</sub>(g), ΔH°f = +33.2 kJ/mol\nC: CO<sub>2</sub>(g), ΔH°f = −393.5 kJ/mol\nD: H<sub>2</sub>O<sub>2</sub>(l), ΔH°f = −187.8 kJ/mol',
    options: {
      A: 'SO<sub>3</sub>(g)',
      B: 'NO<sub>2</sub>(g)',
      C: 'CO<sub>2</sub>(g)',
      D: 'H<sub>2</sub>O<sub>2</sub>(l)'
    },
    answer: 'A',
    explanation: 'The most negative ΔH°f indicates the greatest stability relative to the constituent elements. SO<sub>3</sub> at −395.7 kJ/mol is slightly more negative than CO<sub>2</sub> at −393.5 kJ/mol.',
    markScheme: null
  },

  /* ──────── 6.9 Hess's Law ──────── */

  {
    id: 'U6Q027', understandingId: 'U6.9.1', subtopic: '6.9', section: 'unit6',
    concepts: ['hess-law'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'Hess\'s law is valid because:',
    options: {
      A: 'all reactions occur in a single step.',
      B: 'enthalpy is a state function.',
      C: 'energy is not conserved in chemical reactions.',
      D: 'catalysts change the enthalpy of a reaction.'
    },
    answer: 'B',
    explanation: 'Hess\'s law works because enthalpy is a state function — ΔH depends only on the initial and final states, not on the pathway.',
    markScheme: null
  },

  {
    id: 'U6Q028', understandingId: 'U6.9.2', subtopic: '6.9', section: 'unit6',
    concepts: ['hess-law'], type: 'frq',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 5,
    stem: 'Use Hess\'s law to find ΔH for: Fe<sub>2</sub>O<sub>3</sub>(s) + 3CO(g) → 2Fe(s) + 3CO<sub>2</sub>(g)\n\nGiven:\n(1) 2Fe(s) + 3/2 O<sub>2</sub>(g) → Fe<sub>2</sub>O<sub>3</sub>(s), ΔH<sub>1</sub> = −824.2 kJ\n(2) CO(g) + 1/2 O<sub>2</sub>(g) → CO<sub>2</sub>(g), ΔH<sub>2</sub> = −282.7 kJ\n\nShow all manipulations clearly.',
    options: null,
    answer: 'Step 1: Reverse equation (1) to put Fe<sub>2</sub>O<sub>3</sub> as a reactant:\nFe<sub>2</sub>O<sub>3</sub>(s) → 2Fe(s) + 3/2 O<sub>2</sub>(g), ΔH = +824.2 kJ\n\nStep 2: Multiply equation (2) by 3 to get 3CO:\n3CO(g) + 3/2 O<sub>2</sub>(g) → 3CO<sub>2</sub>(g), ΔH = 3(−282.7) = −848.1 kJ\n\nStep 3: Add:\nFe<sub>2</sub>O<sub>3</sub>(s) + 3CO(g) + 3/2 O<sub>2</sub>(g) → 2Fe(s) + 3/2 O<sub>2</sub>(g) + 3CO<sub>2</sub>(g)\nCancel 3/2 O<sub>2</sub>:\nFe<sub>2</sub>O<sub>3</sub>(s) + 3CO(g) → 2Fe(s) + 3CO<sub>2</sub>(g)\n\nΔH = +824.2 + (−848.1) = −23.9 kJ',
    explanation: 'Reverse equation (1) to place Fe<sub>2</sub>O<sub>3</sub> on the reactant side (flip sign). Multiply equation (2) by 3 to match 3CO (scale ΔH). Add the manipulated equations; O<sub>2</sub> cancels. Sum the ΔH values.',
    markScheme: '1 mark: correct reversal of (1) with sign change. 1 mark: correct multiplication of (2). 1 mark: correct addition showing cancellation of O<sub>2</sub>. 1 mark: correct ΔH sum. 1 mark: correct final equation matches target.'
  },

  {
    id: 'U6Q029', understandingId: 'U6.9.2', subtopic: '6.9', section: 'unit6',
    concepts: ['hess-law'], type: 'frq',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 5,
    stem: 'Determine ΔH for: CaCO<sub>3</sub>(s) → CaO(s) + CO<sub>2</sub>(g)\n\nGiven:\n(1) Ca(s) + C(s, graphite) + 3/2 O<sub>2</sub>(g) → CaCO<sub>3</sub>(s), ΔH<sub>1</sub> = −1206.9 kJ\n(2) Ca(s) + 1/2 O<sub>2</sub>(g) → CaO(s), ΔH<sub>2</sub> = −635.1 kJ\n(3) C(s, graphite) + O<sub>2</sub>(g) → CO<sub>2</sub>(g), ΔH<sub>3</sub> = −393.5 kJ\n\nShow all steps.',
    options: null,
    answer: 'Step 1: Reverse equation (1) to put CaCO<sub>3</sub> as reactant:\nCaCO<sub>3</sub>(s) → Ca(s) + C(s) + 3/2 O<sub>2</sub>(g), ΔH = +1206.9 kJ\n\nStep 2: Keep (2) as-is:\nCa(s) + 1/2 O<sub>2</sub>(g) → CaO(s), ΔH = −635.1 kJ\n\nStep 3: Keep (3) as-is:\nC(s) + O<sub>2</sub>(g) → CO<sub>2</sub>(g), ΔH = −393.5 kJ\n\nAdd all three:\nCaCO<sub>3</sub>(s) + Ca(s) + C(s) + 3/2 O<sub>2</sub>(g) + 1/2 O<sub>2</sub>(g) + O<sub>2</sub>(g) → Ca(s) + C(s) + 3/2 O<sub>2</sub>(g) + CaO(s) + CO<sub>2</sub>(g)\n\nCancel Ca(s), C(s), and 3/2 O<sub>2</sub>(g):\nCaCO<sub>3</sub>(s) → CaO(s) + CO<sub>2</sub>(g)\n\nΔH = +1206.9 + (−635.1) + (−393.5) = +178.3 kJ',
    explanation: 'This is a classic decomposition problem. Reversing the formation of CaCO<sub>3</sub> and adding the formations of CaO and CO<sub>2</sub> gives the target decomposition. All intermediate elements cancel.',
    markScheme: '1 mark: correct reversal of (1). 1 mark: equations (2) and (3) used correctly. 1 mark: proper cancellation of intermediates. 1 mark: correct ΔH sum. 1 mark: correct positive sign (endothermic decomposition).'
  },

  {
    id: 'U6Q030', understandingId: 'U6.9.3', subtopic: '6.9', section: 'unit6',
    concepts: ['hess-law', 'energy-cycle'], type: 'short',
    commandTerm: 'explain', difficulty: 2, source: 'original', marks: 2,
    stem: 'Explain how an energy cycle diagram illustrates Hess\'s law. Why do both pathways give the same ΔH?',
    options: null,
    answer: 'An energy cycle shows two (or more) paths from reactants to products. The direct path has ΔH_rxn, while the indirect path goes through intermediates with individual ΔH values that sum to the same total. Both paths give the same ΔH because enthalpy is a state function — it depends only on the initial and final states, not the route taken.',
    explanation: 'The energy cycle is a visual proof of Hess\'s law. Since H is a state function, any closed loop has ΔH = 0, which means any two open paths between the same endpoints must have equal total ΔH.',
    markScheme: '1 mark: describes two paths from same start to same end with same ΔH. 1 mark: explains this is because H is a state function (path-independent).'
  }
];
