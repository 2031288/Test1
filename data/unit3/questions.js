// Unit 3 — Intermolecular Forces and Properties — Questions
// 34 questions covering all 13 topics
// Mix: ~20 MCQ, ~8 short answer, ~6 extended/FRQ
window.DB_U3_QUESTIONS = [

  /* ============================================================
     TOPIC 3.1 — Intermolecular Forces
     ============================================================ */
  {
    id: 'U3Q001', understandingId: 'U3.1.1', subtopic: '3.1', section: 'unit3',
    concepts: ['intermolecular'], type: 'mcq', commandTerm: 'identify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'Which intermolecular force is present in ALL molecular substances?',
    options: {
      A: 'Hydrogen bonding',
      B: 'London dispersion forces',
      C: 'Dipole-dipole forces',
      D: 'Ion-dipole forces'
    },
    answer: 'B',
    explanation: 'London dispersion forces (LDFs) arise from temporary, induced dipoles and are present in all molecular substances, including nonpolar molecules and noble gases. Other forces require polarity, hydrogen bonding, or ions.',
    markScheme: null
  },
  {
    id: 'U3Q002', understandingId: 'U3.1.1', subtopic: '3.1', section: 'unit3',
    concepts: ['intermolecular'], type: 'mcq', commandTerm: 'compare', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'Which pair correctly ranks substances by increasing boiling point?',
    options: {
      A: 'CH4 < CCl4 < CBr4',
      B: 'CBr4 < CCl4 < CH4',
      C: 'CCl4 < CH4 < CBr4',
      D: 'CH4 < CBr4 < CCl4'
    },
    answer: 'A',
    explanation: 'All three are nonpolar tetrahedral molecules, so LDFs are the only IMF. LDF strength increases with molar mass: CH4 (16 g/mol) < CCl4 (154 g/mol) < CBr4 (332 g/mol). Greater molar mass means more electrons, greater polarizability, and a higher boiling point.',
    markScheme: null
  },
  {
    id: 'U3Q003', understandingId: 'U3.1.2', subtopic: '3.1', section: 'unit3',
    concepts: ['intermolecular'], type: 'mcq', commandTerm: 'identify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'Which of the following molecules can form hydrogen bonds with other molecules of the same substance?',
    options: {
      A: 'CH3F',
      B: 'CH3OCH3',
      C: 'CH3CH2OH',
      D: 'CH2Cl2'
    },
    answer: 'C',
    explanation: 'Hydrogen bonding requires H bonded directly to N, O, or F. CH3CH2OH (ethanol) has an O-H bond and can form hydrogen bonds. CH3F has H bonded to C, not to F. CH3OCH3 has lone pairs on O but no O-H bond. CH2Cl2 has no N-H, O-H, or F-H bonds.',
    markScheme: null
  },
  {
    id: 'U3Q004', understandingId: 'U3.1.2', subtopic: '3.1', section: 'unit3',
    concepts: ['intermolecular'], type: 'short', commandTerm: 'explain', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'Water (H2O, M = 18 g/mol) boils at 100 °C, while H2S (M = 34 g/mol) boils at -60 °C. Explain this difference in terms of intermolecular forces.',
    options: null,
    answer: 'Water has a much higher boiling point than H2S despite its lower molar mass because water molecules form strong hydrogen bonds (O-H...O), while H2S can only form weaker dipole-dipole forces and LDFs. Sulfur is not electronegative enough (compared to O, N, F) for H-bonding. The extensive hydrogen-bonding network in water requires significantly more energy to disrupt.',
    explanation: 'This question tests understanding of why H2O is anomalous compared to other Group 16 hydrides. The key is identifying that O-H bonds allow hydrogen bonding while S-H bonds do not.',
    markScheme: '1 mark: identifies H-bonding in H2O. 1 mark: states H2S has only dipole-dipole/LDF (not H-bonding). 1 mark: relates stronger IMFs to higher bp.'
  },
  {
    id: 'U3Q005', understandingId: 'U3.1.3', subtopic: '3.1', section: 'unit3',
    concepts: ['intermolecular'], type: 'mcq', commandTerm: 'identify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'Which type of intermolecular force is primarily responsible for the dissolution of NaCl in water?',
    options: {
      A: 'London dispersion forces',
      B: 'Hydrogen bonding',
      C: 'Dipole-dipole forces',
      D: 'Ion-dipole forces'
    },
    answer: 'D',
    explanation: 'When NaCl dissolves in water, the Na+ and Cl- ions interact with the polar water molecules through ion-dipole forces. The full charge on the ions interacts with the partial charges on water molecules. These are the strongest type of IMF.',
    markScheme: null
  },

  /* ============================================================
     TOPIC 3.2 — Properties of Solids
     ============================================================ */
  {
    id: 'U3Q006', understandingId: 'U3.2.1', subtopic: '3.2', section: 'unit3',
    concepts: ['intermolecular'], type: 'mcq', commandTerm: 'classify', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'A solid substance has a melting point of 2230 °C, is extremely hard, and does not conduct electricity in any state. This substance is most likely:',
    options: {
      A: 'an ionic solid',
      B: 'a molecular solid',
      C: 'a metallic solid',
      D: 'a covalent-network solid'
    },
    answer: 'D',
    explanation: 'Very high melting point + extreme hardness + no conductivity in any state = covalent-network solid (like diamond or SiC). Ionic solids also have high mp but conduct when molten. Metallic solids conduct in all states. Molecular solids have low mp.',
    markScheme: null
  },
  {
    id: 'U3Q007', understandingId: 'U3.2.1', subtopic: '3.2', section: 'unit3',
    concepts: ['intermolecular'], type: 'short', commandTerm: 'explain', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'Explain why ionic solids are brittle while metallic solids are malleable.',
    options: null,
    answer: 'In an ionic solid, ions are arranged in a regular lattice with alternating charges. When a force displaces ions, like charges are brought adjacent to each other, causing strong electrostatic repulsion that fractures the crystal. In a metallic solid, metal cations are surrounded by a delocalized electron sea. When the lattice is deformed, the electron sea adjusts to the new positions of the cations, maintaining bonding and allowing the material to deform without breaking.',
    explanation: 'Tests understanding of the structural basis for mechanical properties of ionic vs. metallic solids.',
    markScheme: '1 mark: ionic lattice with alternating charges. 1 mark: displacement brings like charges together causing repulsion/fracture. 1 mark: electron sea in metals adjusts to deformation.'
  },
  {
    id: 'U3Q008', understandingId: 'U3.2.2', subtopic: '3.2', section: 'unit3',
    concepts: ['intermolecular'], type: 'mcq', commandTerm: 'compare', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'At 25 °C, which substance has the highest vapor pressure?',
    options: {
      A: 'H2O (hydrogen bonding)',
      B: 'CH3OH (hydrogen bonding)',
      C: 'CH3CH2OCH2CH3 (dipole-dipole, LDF)',
      D: 'CH3CH2CH2CH2CH3 (LDF only)'
    },
    answer: 'D',
    explanation: 'Vapor pressure is inversely related to IMF strength. Pentane (C5H12) has only LDFs and a relatively low molar mass, giving it the weakest IMFs and therefore the highest vapor pressure. Water and methanol have strong hydrogen bonding (low vapor pressure). Diethyl ether has dipole-dipole forces but also substantial LDFs from its size.',
    markScheme: null
  },

  /* ============================================================
     TOPIC 3.3 — Solids, Liquids, and Gases
     ============================================================ */
  {
    id: 'U3Q009', understandingId: 'U3.3.1', subtopic: '3.3', section: 'unit3',
    concepts: ['intermolecular', 'ene'], type: 'extended', commandTerm: 'calculate', difficulty: 3,
    source: 'original', marks: 6,
    stem: 'Calculate the total energy required to convert 54.0 g of ice at -15.0 °C to steam at 120.0 °C. Given: c<sub>ice</sub> = 2.09 J/(g·°C), c<sub>water</sub> = 4.18 J/(g·°C), c<sub>steam</sub> = 1.84 J/(g·°C), ΔH<sub>fus</sub> = 6.02 kJ/mol, ΔH<sub>vap</sub> = 40.7 kJ/mol. Molar mass of water = 18.02 g/mol.',
    options: null,
    answer: 'Step 1: Heat ice from -15.0 to 0 °C: q1 = 54.0 × 2.09 × 15.0 = 1693 J\nStep 2: Melt ice: n = 54.0/18.02 = 3.00 mol; q2 = 3.00 × 6020 = 18,060 J\nStep 3: Heat water from 0 to 100 °C: q3 = 54.0 × 4.18 × 100.0 = 22,572 J\nStep 4: Boil water: q4 = 3.00 × 40,700 = 122,100 J\nStep 5: Heat steam from 100 to 120 °C: q5 = 54.0 × 1.84 × 20.0 = 1987 J\nTotal = 1693 + 18,060 + 22,572 + 122,100 + 1987 = 166,412 J ≈ 166 kJ',
    explanation: 'This is a classic five-step heating curve calculation. The boiling step (q4) dominates because ΔH<sub>vap</sub> >> ΔH<sub>fus</sub>.',
    markScheme: '1 mark: correct q1 (heating ice). 1 mark: correct moles and q2 (melting). 1 mark: correct q3 (heating water). 1 mark: correct q4 (boiling). 1 mark: correct q5 (heating steam). 1 mark: correct total with units.'
  },
  {
    id: 'U3Q010', understandingId: 'U3.3.1', subtopic: '3.3', section: 'unit3',
    concepts: ['intermolecular', 'ene'], type: 'mcq', commandTerm: 'identify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'On a heating curve, what is happening during the flat (plateau) region at the boiling point?',
    options: {
      A: 'Temperature is increasing as the liquid gains kinetic energy.',
      B: 'Energy is being used to overcome intermolecular forces; temperature remains constant.',
      C: 'The substance is cooling as it releases energy.',
      D: 'Energy is being stored as potential energy within covalent bonds.'
    },
    answer: 'B',
    explanation: 'During a phase change (flat region), all added energy goes into overcoming intermolecular forces to convert liquid to gas. Temperature remains constant because the energy is used to separate molecules, not to increase their kinetic energy. Covalent bonds are not broken during phase changes.',
    markScheme: null
  },
  {
    id: 'U3Q011', understandingId: 'U3.3.2', subtopic: '3.3', section: 'unit3',
    concepts: ['intermolecular'], type: 'mcq', commandTerm: 'predict', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'On the phase diagram of CO2, the triple point is at 5.11 atm and -56.4 °C. At standard atmospheric pressure (1 atm), what happens when solid CO2 is warmed?',
    options: {
      A: 'It melts to form liquid CO2.',
      B: 'It sublimes directly to gaseous CO2.',
      C: 'It remains solid until the critical temperature is reached.',
      D: 'It forms a supercritical fluid.'
    },
    answer: 'B',
    explanation: 'Since the triple point of CO2 is at 5.11 atm, which is well above standard pressure (1 atm), the liquid phase is not accessible at 1 atm. Solid CO2 sublimes directly to gas. This is why solid CO2 is called "dry ice."',
    markScheme: null
  },

  /* ============================================================
     TOPIC 3.4 — Ideal Gas Law
     ============================================================ */
  {
    id: 'U3Q012', understandingId: 'U3.4.1', subtopic: '3.4', section: 'unit3',
    concepts: ['quantification'], type: 'mcq', commandTerm: 'calculate', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'A sample of gas occupies 3.50 L at 300.0 K and 1.50 atm. How many moles of gas are present? (R = 0.08206 L·atm/(mol·K))',
    options: {
      A: '0.175 mol',
      B: '0.213 mol',
      C: '0.427 mol',
      D: '5.25 mol'
    },
    answer: 'B',
    explanation: 'n = PV/(RT) = (1.50 × 3.50)/(0.08206 × 300.0) = 5.25/24.62 = 0.213 mol.',
    markScheme: null
  },
  {
    id: 'U3Q013', understandingId: 'U3.4.1', subtopic: '3.4', section: 'unit3',
    concepts: ['quantification'], type: 'short', commandTerm: 'calculate', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'In the reaction 2 KClO3(s) → 2 KCl(s) + 3 O2(g), what volume of O2 gas at 25.0 °C and 0.950 atm is produced from the decomposition of 12.26 g of KClO3? (Molar mass KClO3 = 122.6 g/mol)',
    options: null,
    answer: 'Moles KClO3 = 12.26/122.6 = 0.1000 mol\nMoles O2 = 0.1000 × (3/2) = 0.1500 mol\nV = nRT/P = (0.1500 × 0.08206 × 298.15)/0.950 = 3.670/0.950 = 3.86 L',
    explanation: 'Gas stoichiometry: convert grams to moles, use mole ratio from balanced equation, then apply PV = nRT to find volume. T must be in Kelvin.',
    markScheme: '1 mark: correct moles of KClO3 and O2. 1 mark: correct setup of PV = nRT. 1 mark: correct answer with units (3.86 L).'
  },
  {
    id: 'U3Q014', understandingId: 'U3.4.2', subtopic: '3.4', section: 'unit3',
    concepts: ['quantification'], type: 'short', commandTerm: 'calculate', difficulty: 2,
    source: 'original', marks: 2,
    stem: 'A gas mixture contains 2.0 mol N2 and 3.0 mol O2 at a total pressure of 4.0 atm. What is the partial pressure of N2?',
    options: null,
    answer: 'χ<sub>N2</sub> = 2.0/(2.0 + 3.0) = 0.40\nP<sub>N2</sub> = χ<sub>N2</sub> × P_total = 0.40 × 4.0 = 1.6 atm',
    explanation: 'Using Dalton\'s Law: the partial pressure equals the mole fraction times the total pressure.',
    markScheme: '1 mark: correct mole fraction (0.40). 1 mark: correct partial pressure (1.6 atm).'
  },

  /* ============================================================
     TOPIC 3.5 — Kinetic Molecular Theory
     ============================================================ */
  {
    id: 'U3Q015', understandingId: 'U3.5.1', subtopic: '3.5', section: 'unit3',
    concepts: ['ene'], type: 'mcq', commandTerm: 'compare', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'Samples of He and Ar are at the same temperature. Which statement is correct?',
    options: {
      A: 'He atoms have higher average kinetic energy than Ar atoms.',
      B: 'Ar atoms have higher average kinetic energy than He atoms.',
      C: 'Both gases have the same average kinetic energy and the same average speed.',
      D: 'Both gases have the same average kinetic energy, but He atoms have a higher average speed.'
    },
    answer: 'D',
    explanation: 'At the same temperature, all gases have the same average kinetic energy (KE<sub>avg</sub> = 3/2 kT). However, since KE = 1/2 mv<sup>2</sup>, lighter molecules (He, M = 4) must move faster than heavier molecules (Ar, M = 40) to have the same KE.',
    markScheme: null
  },
  {
    id: 'U3Q016', understandingId: 'U3.5.1', subtopic: '3.5', section: 'unit3',
    concepts: ['ene'], type: 'short', commandTerm: 'describe', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'Describe how the Maxwell-Boltzmann distribution of molecular speeds changes when the temperature of a gas is increased. Include a discussion of the peak, breadth, and area of the curve.',
    options: null,
    answer: 'When temperature increases: (1) the peak of the distribution shifts to higher speeds (molecules move faster on average); (2) the peak height decreases; (3) the curve broadens, showing a wider range of speeds; (4) the total area under the curve remains the same because the total number of molecules has not changed. The distribution becomes more spread out with a higher most probable speed.',
    explanation: 'Tests qualitative understanding of Maxwell-Boltzmann speed distributions at different temperatures.',
    markScheme: '1 mark: peak shifts right (higher speeds). 1 mark: peak height decreases and curve broadens. 1 mark: area remains constant.'
  },
  {
    id: 'U3Q017', understandingId: 'U3.5.2', subtopic: '3.5', section: 'unit3',
    concepts: ['ene'], type: 'mcq', commandTerm: 'calculate', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'If O2 effuses through a pinhole at a rate of 5.0 mL/min, at what rate does H2 effuse under identical conditions? (M<sub>O2</sub> = 32, M<sub>H2</sub> = 2.0)',
    options: {
      A: '1.25 mL/min',
      B: '5.0 mL/min',
      C: '10.0 mL/min',
      D: '20.0 mL/min'
    },
    answer: 'D',
    explanation: 'Using Graham\'s Law: Rate_H2/Rate_O2 = √(M<sub>O2</sub>/M<sub>H2</sub>) = √(32/2.0) = √16 = 4.0. Rate_H2 = 4.0 × 5.0 = 20.0 mL/min.',
    markScheme: null
  },

  /* ============================================================
     TOPIC 3.6 — Deviation from Ideal Gas Law
     ============================================================ */
  {
    id: 'U3Q018', understandingId: 'U3.6.1', subtopic: '3.6', section: 'unit3',
    concepts: ['intermolecular'], type: 'mcq', commandTerm: 'predict', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'Under which conditions does a real gas behave most like an ideal gas?',
    options: {
      A: 'High pressure and low temperature',
      B: 'Low pressure and low temperature',
      C: 'High pressure and high temperature',
      D: 'Low pressure and high temperature'
    },
    answer: 'D',
    explanation: 'Real gases behave most ideally at low pressure (particles far apart, so volume is negligible) and high temperature (particles moving fast, so IMFs have minimal effect). These conditions best satisfy the KMT assumptions.',
    markScheme: null
  },
  {
    id: 'U3Q019', understandingId: 'U3.6.2', subtopic: '3.6', section: 'unit3',
    concepts: ['intermolecular'], type: 'short', commandTerm: 'explain', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'In the van der Waals equation, [P + a(n/V)<sup>2</sup>](V - nb) = nRT, explain the physical meaning of the constants a and b. For which type of gas would you expect large values of a?',
    options: null,
    answer: 'The constant "a" corrects for intermolecular attractions between gas molecules. The term a(n/V)<sup>2</sup> is added to the measured pressure because attractions between molecules reduce the actual pressure exerted on the container walls. The constant "b" corrects for the finite volume of gas molecules; nb is subtracted from the total volume to give the actual free space available. Large values of "a" are expected for gases with strong intermolecular forces, such as water vapor (H2O) or ammonia (NH3), which can form hydrogen bonds.',
    explanation: 'Tests conceptual understanding of the van der Waals corrections to the ideal gas law.',
    markScheme: '1 mark: a = intermolecular attraction strength. 1 mark: b = molecular volume. 1 mark: large a for gases with strong IMFs (with example).'
  },

  /* ============================================================
     TOPIC 3.7 — Solutions and Mixtures
     ============================================================ */
  {
    id: 'U3Q020', understandingId: 'U3.7.1', subtopic: '3.7', section: 'unit3',
    concepts: ['quantification', 'ene'], type: 'extended', commandTerm: 'explain', difficulty: 3,
    source: 'original', marks: 5,
    stem: 'When ammonium nitrate (NH4NO3) is dissolved in water, the solution becomes cold. (a) Is the dissolution exothermic or endothermic? (b) Using the three-step dissolution model, explain why the solution cools. (c) Explain how this dissolution can still be spontaneous despite being endothermic.',
    options: null,
    answer: '(a) Endothermic. The solution cools because the dissolution absorbs heat from the surroundings.\n(b) Step 1: Breaking the ionic lattice of NH4NO3 requires energy (lattice energy, ΔH1 > 0). Step 2: Separating water molecules requires energy to disrupt H-bonds (ΔH2 > 0). Step 3: Forming ion-dipole interactions between NH4+ and NO3- ions with water releases energy (ΔH3 < 0). The sum ΔH1 + ΔH2 exceeds |ΔH3|, so ΔH<sub>soln</sub> > 0 (endothermic). The energy absorbed from the surroundings causes the temperature to drop.\n(c) Although ΔH<sub>soln</sub> is positive (unfavorable), the entropy change (ΔS) is positive and large because the ordered ionic lattice disperses into freely moving, hydrated ions in solution. At room temperature, the TΔS term is large enough that ΔG = ΔH - TΔS < 0, making the process spontaneous.',
    explanation: 'Comprehensive question testing the three-step dissolution model, energy changes, and spontaneity. Connects to Unit 9 (thermodynamics).',
    markScheme: '1 mark: correctly identifies endothermic. 1 mark: explains three-step model. 1 mark: identifies that breaking forces > forming forces. 1 mark: mentions entropy increase. 1 mark: connects ΔG = ΔH - TΔS for spontaneity.'
  },
  {
    id: 'U3Q021', understandingId: 'U3.7.2', subtopic: '3.7', section: 'unit3',
    concepts: ['quantification'], type: 'mcq', commandTerm: 'calculate', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'What volume of 6.0 M HCl is needed to prepare 300.0 mL of 0.50 M HCl?',
    options: {
      A: '10.0 mL',
      B: '25.0 mL',
      C: '36.0 mL',
      D: '150.0 mL'
    },
    answer: 'B',
    explanation: 'M1V1 = M2V2. (6.0)(V1) = (0.50)(300.0). V1 = 150.0/6.0 = 25.0 mL.',
    markScheme: null
  },

  /* ============================================================
     TOPIC 3.8 — Representations of Solutions
     ============================================================ */
  {
    id: 'U3Q022', understandingId: 'U3.8.1', subtopic: '3.8', section: 'unit3',
    concepts: ['intermolecular'], type: 'short', commandTerm: 'draw', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'Describe a particulate-level diagram showing NaCl dissolved in water. Indicate the orientation of water molecules around each type of ion and explain why they orient this way.',
    options: null,
    answer: 'The diagram should show Na+ ions surrounded by water molecules with the oxygen (partial negative, δ-) end pointing toward the Na+ cation, and Cl- ions surrounded by water molecules with the hydrogen (partial positive, δ+) ends pointing toward the Cl- anion. This orientation arises from ion-dipole forces: the full positive charge on Na+ attracts the partial negative charge on oxygen, while the full negative charge on Cl- attracts the partial positive charges on hydrogen. No NaCl ion pairs should be present because NaCl is a strong electrolyte that dissociates completely.',
    explanation: 'Tests understanding of ion-dipole interactions at the particulate level and the concept of complete dissociation for strong electrolytes.',
    markScheme: '1 mark: correct water orientation around Na+ (O toward cation). 1 mark: correct water orientation around Cl- (H toward anion). 1 mark: explains ion-dipole forces or mentions complete dissociation.'
  },
  {
    id: 'U3Q023', understandingId: 'U3.8.2', subtopic: '3.8', section: 'unit3',
    concepts: ['intermolecular'], type: 'mcq', commandTerm: 'determine', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'What is the total concentration of ions in a 0.30 M solution of Al2(SO4)3, assuming complete dissociation?',
    options: {
      A: '0.60 M',
      B: '0.90 M',
      C: '1.20 M',
      D: '1.50 M'
    },
    answer: 'D',
    explanation: 'Al2(SO4)3 → 2 Al<sup>3</sup><sup>+</sup> + 3 SO4<sup>2</sup><sup>−</sup> (5 ions per formula unit). Total ion concentration = 0.30 × 5 = 1.50 M. [Al<sup>3</sup><sup>+</sup>] = 0.60 M, [SO4<sup>2</sup><sup>−</sup>] = 0.90 M.',
    markScheme: null
  },

  /* ============================================================
     TOPIC 3.9 — Separation of Solutions and Mixtures Chromatography
     ============================================================ */
  {
    id: 'U3Q024', understandingId: 'U3.9.1', subtopic: '3.9', section: 'unit3',
    concepts: ['intermolecular'], type: 'mcq', commandTerm: 'explain', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'In paper chromatography using a polar solvent, substance X has Rf = 0.90 and substance Y has Rf = 0.15. Which statement is correct?',
    options: {
      A: 'Substance Y is more polar and interacts more strongly with the paper.',
      B: 'Substance X is more polar and interacts more strongly with the paper.',
      C: 'Substance Y is less polar and travels farther with the solvent.',
      D: 'Both substances have the same polarity but different molar masses.'
    },
    answer: 'A',
    explanation: 'In paper chromatography, the stationary phase (cellulose paper) is polar. Substance Y has a lower Rf, meaning it traveled less distance. This indicates Y interacted more strongly with the polar paper, suggesting Y is more polar. Substance X, with higher Rf, interacted less with the paper and more with the mobile phase.',
    markScheme: null
  },
  {
    id: 'U3Q025', understandingId: 'U3.9.2', subtopic: '3.9', section: 'unit3',
    concepts: ['intermolecular'], type: 'mcq', commandTerm: 'select', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'Which separation technique is most appropriate for separating two miscible liquids with boiling points of 78 °C and 100 °C?',
    options: {
      A: 'Filtration',
      B: 'Paper chromatography',
      C: 'Fractional distillation',
      D: 'Evaporation'
    },
    answer: 'C',
    explanation: 'The bp difference (22 °C) is relatively small, so fractional distillation is the best choice. Simple distillation is best for bp differences > 25 °C. Filtration separates solids from liquids. Evaporation removes all liquid. Paper chromatography is for identifying components, not for bulk separation of liquids.',
    markScheme: null
  },

  /* ============================================================
     TOPIC 3.10 — Solubility
     ============================================================ */
  {
    id: 'U3Q026', understandingId: 'U3.10.1', subtopic: '3.10', section: 'unit3',
    concepts: ['intermolecular'], type: 'short', commandTerm: 'explain', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'Methanol (CH3OH) is completely miscible with water, but hexane (C6H14) is not. Explain this difference using intermolecular forces.',
    options: null,
    answer: 'Methanol is miscible with water because it can form hydrogen bonds with water molecules through its O-H group. The solute-solvent interactions (H-bonds between CH3OH and H2O) are comparable in strength to the solvent-solvent interactions (H-bonds between H2O molecules), satisfying "like dissolves like." Hexane is nonpolar and can only form weak LDFs. Dissolving hexane in water would require disrupting water\'s strong H-bonding network without forming comparably strong solute-solvent interactions, which is energetically unfavorable.',
    explanation: 'Classic "like dissolves like" question requiring identification of specific IMFs.',
    markScheme: '1 mark: methanol H-bonds with water. 1 mark: hexane is nonpolar with only LDFs. 1 mark: disrupting water H-bonds not compensated by hexane-water interactions.'
  },
  {
    id: 'U3Q027', understandingId: 'U3.10.2', subtopic: '3.10', section: 'unit3',
    concepts: ['intermolecular'], type: 'mcq', commandTerm: 'predict', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'How does increasing the temperature affect the solubility of most solid solutes and gaseous solutes in water?',
    options: {
      A: 'Both solid and gas solubility increase.',
      B: 'Both solid and gas solubility decrease.',
      C: 'Solid solubility increases; gas solubility decreases.',
      D: 'Solid solubility decreases; gas solubility increases.'
    },
    answer: 'C',
    explanation: 'Most solid solutes become more soluble at higher temperatures (dissolution is usually endothermic, favored by higher T). Gas solubility decreases with temperature because dissolved gas molecules gain kinetic energy and escape to the gas phase. This is why warm soda goes flat.',
    markScheme: null
  },

  /* ============================================================
     TOPIC 3.11 — Spectroscopy and EM Spectrum
     ============================================================ */
  {
    id: 'U3Q028', understandingId: 'U3.11.1', subtopic: '3.11', section: 'unit3',
    concepts: ['atomic-structure'], type: 'short', commandTerm: 'calculate', difficulty: 2,
    source: 'original', marks: 2,
    stem: 'Calculate the energy of one mole of photons of blue light with a wavelength of 450 nm. (h = 6.626 × 10<sup>−</sup><sup>34</sup> J·s, c = 3.00 × 10<sup>8</sup> m/s, NA = 6.022 × 10<sup>23</sup> mol<sup>−</sup><sup>1</sup>)',
    options: null,
    answer: 'E per photon = hc/λ = (6.626 × 10<sup>−</sup><sup>34</sup>)(3.00 × 10<sup>8</sup>)/(450 × 10<sup>−</sup><sup>9</sup>) = 4.42 × 10<sup>−</sup><sup>19</sup> J\nE per mole = 4.42 × 10<sup>−</sup><sup>19</sup> × 6.022 × 10<sup>23</sup> = 2.66 × 10<sup>5</sup> J/mol = 266 kJ/mol',
    explanation: 'Tests the ability to calculate photon energy and scale it to molar quantities.',
    markScheme: '1 mark: correct single-photon energy. 1 mark: correct molar energy with units.'
  },
  {
    id: 'U3Q029', understandingId: 'U3.11.2', subtopic: '3.11', section: 'unit3',
    concepts: ['atomic-structure'], type: 'mcq', commandTerm: 'identify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'An electron in a hydrogen atom transitions from n = 5 to n = 2. In which region of the electromagnetic spectrum is the emitted photon?',
    options: {
      A: 'Ultraviolet (Lyman series)',
      B: 'Visible (Balmer series)',
      C: 'Infrared (Paschen series)',
      D: 'Microwave'
    },
    answer: 'B',
    explanation: 'Transitions ending at n = 2 belong to the Balmer series, which falls in the visible region of the spectrum. Lyman series ends at n = 1 (UV), Paschen series ends at n = 3 (IR).',
    markScheme: null
  },

  /* ============================================================
     TOPIC 3.12 — Photoelectric Effect
     ============================================================ */
  {
    id: 'U3Q030', understandingId: 'U3.12.1', subtopic: '3.12', section: 'unit3',
    concepts: ['atomic-structure', 'ene'], type: 'mcq', commandTerm: 'predict', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'In a photoelectric effect experiment, red light at high intensity does not eject electrons from a metal surface, but dim violet light does. Which explanation is correct?',
    options: {
      A: 'Violet light has more photons per second.',
      B: 'Each violet photon has more energy than each red photon, exceeding the work function.',
      C: 'Red light is absorbed by the metal while violet light is reflected.',
      D: 'Violet light has a longer wavelength and therefore more energy.'
    },
    answer: 'B',
    explanation: 'The photoelectric effect depends on the energy per photon (E = hν), not the number of photons (intensity). Violet light has a higher frequency (shorter wavelength) than red light, so each violet photon carries more energy. If the energy per violet photon exceeds the work function but the energy per red photon does not, only violet light ejects electrons regardless of intensity.',
    markScheme: null
  },
  {
    id: 'U3Q031', understandingId: 'U3.12.2', subtopic: '3.12', section: 'unit3',
    concepts: ['atomic-structure'], type: 'mcq', commandTerm: 'identify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'Which observation provides evidence for the particle nature of light?',
    options: {
      A: 'Light undergoes diffraction when passing through a narrow slit.',
      B: 'Two light beams can produce an interference pattern.',
      C: 'Electrons are ejected from a metal only when light exceeds a threshold frequency.',
      D: 'Light travels at a constant speed in vacuum.'
    },
    answer: 'C',
    explanation: 'The photoelectric effect (threshold frequency requirement) can only be explained by treating light as discrete particles (photons). Diffraction and interference are evidence for the wave nature of light. The constant speed of light is a property of electromagnetic radiation but does not distinguish wave from particle behavior.',
    markScheme: null
  },

  /* ============================================================
     TOPIC 3.13 — Beer-Lambert Law
     ============================================================ */
  {
    id: 'U3Q032', understandingId: 'U3.13.1', subtopic: '3.13', section: 'unit3',
    concepts: ['quantification'], type: 'mcq', commandTerm: 'calculate', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'A solution has an absorbance of 0.620 at 540 nm. If the molar absorptivity is 1240 L/(mol·cm) and the path length is 1.00 cm, what is the concentration?',
    options: {
      A: '2.00 × 10<sup>−</sup><sup>4</sup> M',
      B: '5.00 × 10<sup>−</sup><sup>4</sup> M',
      C: '7.69 × 10<sup>−</sup><sup>4</sup> M',
      D: '1.24 × 10<sup>−</sup><sup>3</sup> M'
    },
    answer: 'B',
    explanation: 'Using Beer\'s Law: A = εbc, so c = A/(εb) = 0.620/(1240 × 1.00) = 5.00 × 10<sup>−</sup><sup>4</sup> M.',
    markScheme: null
  },
  {
    id: 'U3Q033', understandingId: 'U3.13.1', subtopic: '3.13', section: 'unit3',
    concepts: ['quantification'], type: 'extended', commandTerm: 'analyze', difficulty: 3,
    source: 'original', marks: 6,
    stem: 'A student prepares five standard solutions of CuSO4 and measures the absorbance of each at 635 nm using a spectrophotometer with a 1.00 cm cuvette:\n\nConcentration (M): 0.020, 0.040, 0.060, 0.080, 0.100\nAbsorbance: 0.250, 0.490, 0.745, 0.990, 1.240\n\n(a) What is the molar absorptivity (ε) of CuSO4 at 635 nm?\n(b) An unknown CuSO4 solution has an absorbance of 0.680. What is its concentration?\n(c) Explain why the student should use the wavelength of maximum absorbance (λ_max) for this experiment.',
    options: null,
    answer: '(a) The data shows A/c is approximately constant: 0.250/0.020 = 12.5. The slope of A vs. c = εb. Since b = 1.00 cm, ε = slope = 12.5 L/(mol·cm). More precisely, from the best-fit line through all points, slope ≈ 12.4 L/(mol·cm).\n\n(b) c = A/(εb) = 0.680/(12.5 × 1.00) = 0.0544 M ≈ 0.054 M.\n\n(c) Using λ_max maximizes the absorbance values, giving the greatest sensitivity (largest change in A per unit change in c). This minimizes relative error in concentration measurements. At other wavelengths, ε would be smaller, absorbance readings would be lower, and small errors in A would translate to larger errors in c.',
    explanation: 'Comprehensive Beer\'s Law question testing calibration curve analysis, calculation, and experimental design reasoning.',
    markScheme: '1 mark: correct slope calculation. 1 mark: identifies ε = slope/b = 12.5. 1 mark: correct unknown concentration. 1 mark: uses A/(εb). 1 mark: λ_max gives maximum sensitivity. 1 mark: explains how sensitivity minimizes error.'
  },
  {
    id: 'U3Q034', understandingId: 'U3.13.2', subtopic: '3.13', section: 'unit3',
    concepts: ['quantification'], type: 'extended', commandTerm: 'design', difficulty: 3,
    source: 'original', marks: 5,
    stem: 'A student needs to determine the concentration of an unknown solution of food dye using spectrophotometry. Describe the complete experimental procedure, including (a) how to prepare standard solutions, (b) what measurements to make, and (c) how to determine the unknown concentration.',
    options: null,
    answer: '(a) Prepare a stock solution of known concentration by dissolving a measured mass of food dye in a volumetric flask. Then prepare 4-5 standard solutions by serial dilution using M1V1 = M2V2, covering a range of concentrations (e.g., 0.001 M to 0.01 M).\n\n(b) Using a spectrophotometer: (1) Select the wavelength of maximum absorbance (λ_max) for the food dye. This is found by scanning absorbance across wavelengths for one standard and identifying the peak. (2) Calibrate with a blank (pure water or solvent). (3) Measure the absorbance of each standard solution and the unknown at λ_max. Record all values.\n\n(c) Plot absorbance (y-axis) vs. concentration (x-axis) for the standards. Draw a best-fit line through the data points and the origin. The line should be linear (Beer\'s Law). To find the unknown concentration, locate its absorbance on the y-axis, trace horizontally to the best-fit line, then drop vertically to read the concentration from the x-axis. Alternatively, calculate c = A/slope (where slope = εb).',
    explanation: 'Tests experimental design for spectrophotometric analysis, a common AP lab question.',
    markScheme: '1 mark: prepare stock solution of known concentration. 1 mark: serial dilution for standards. 1 mark: use λ_max and blank. 1 mark: measure absorbance of standards and unknown. 1 mark: calibration curve and method to find unknown c.'
  }
];
