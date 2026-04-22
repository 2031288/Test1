// AP Chemistry Unit 1: Atomic Structure and Properties — Question Bank
// 35 questions: ~20 MCQ, ~10 short answer, ~5 extended/FRQ
// Topics 1.1–1.8 | Difficulty mix: ~10 easy, ~15 medium, ~10 hard

window.DB_U1_QUESTIONS = [

  // ===== TOPIC 1.1: Moles and Molar Mass =====

  {
    id: 'Q001', understandingId: 'U1.1.1', subtopic: '1.1', section: 'unit1',
    concepts: ['quantification', 'molar mass'], type: 'mcq',
    commandTerm: 'Calculate', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'A sample of calcium carbonate (CaCO<sub>3</sub>) has a mass of 50.0 g. How many moles of CaCO<sub>3</sub> are present? (Molar mass of CaCO<sub>3</sub> = 100.09 g/mol)',
    options: { A: '0.250 mol', B: '0.500 mol', C: '2.00 mol', D: '5.00 mol' },
    answer: 'B',
    explanation: 'n = mass / molar mass = 50.0 g / 100.09 g/mol ≈ 0.500 mol. The answer has 3 significant figures, matching the given mass.',
    markScheme: null
  },
  {
    id: 'Q002', understandingId: 'U1.1.1', subtopic: '1.1', section: 'unit1',
    concepts: ['quantification', 'Avogadro'], type: 'mcq',
    commandTerm: 'Determine', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'How many atoms of oxygen are present in 2.50 mol of CO<sub>2</sub>?',
    options: {
      A: '1.51 × 10<sup>23</sup> atoms',
      B: '3.01 × 10<sup>23</sup> atoms',
      C: '1.51 × 10<sup>24</sup> atoms',
      D: '3.01 × 10<sup>24</sup> atoms'
    },
    answer: 'D',
    explanation: 'Each molecule of CO<sub>2</sub> contains 2 oxygen atoms. Number of O atoms = 2.50 mol × 6.022 × 10<sup>23</sup> molecules/mol × 2 atoms/molecule = 3.01 × 10<sup>24</sup> atoms.',
    markScheme: null
  },
  {
    id: 'Q003', understandingId: 'U1.1.2', subtopic: '1.1', section: 'unit1',
    concepts: ['molar mass', 'calculation'], type: 'short',
    commandTerm: 'Calculate', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'A 4.774 g sample of an unknown compound is found to contain 1.550 g of carbon, 0.1293 g of hydrogen, and 3.095 g of oxygen. Determine the empirical formula of the compound. Show your work.',
    options: null,
    answer: 'C<sub>2</sub>H<sub>2</sub>O<sub>3</sub>',
    explanation: 'Convert each mass to moles: C: 1.550/12.01 = 0.1291 mol; H: 0.1293/1.008 = 0.1283 mol; O: 3.095/16.00 = 0.1934 mol. Divide by smallest (0.1283): C = 1.006 ≈ 1; H = 1.000; O = 1.508 ≈ 1.5. Multiply by 2 → C<sub>2</sub>H<sub>2</sub>O<sub>3</sub>.',
    markScheme: '1 pt: correct moles of each element | 1 pt: correct mole ratio | 1 pt: correct empirical formula C<sub>2</sub>H<sub>2</sub>O<sub>3</sub>'
  },
  {
    id: 'Q004', understandingId: 'U1.1.1', subtopic: '1.1', section: 'unit1',
    concepts: ['percent composition'], type: 'mcq',
    commandTerm: 'Calculate', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'What is the percent composition by mass of nitrogen in ammonium nitrate (NH<sub>4</sub>NO<sub>3</sub>, molar mass = 80.04 g/mol)?',
    options: { A: '17.5%', B: '28.0%', C: '35.0%', D: '60.0%' },
    answer: 'C',
    explanation: 'NH<sub>4</sub>NO<sub>3</sub> contains 2 nitrogen atoms. Mass of N = 2 × 14.01 = 28.02 g/mol. Percent N = (28.02 / 80.04) × 100% = 35.0%.',
    markScheme: null
  },

  // ===== TOPIC 1.2: Mass Spectrometry of Elements =====

  {
    id: 'Q005', understandingId: 'U1.2.1', subtopic: '1.2', section: 'unit1',
    concepts: ['mass spectrometry', 'isotopes'], type: 'mcq',
    commandTerm: 'Determine', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'A mass spectrum of neon shows two peaks: one at m/z = 20 with 90.5% relative abundance and one at m/z = 22 with 9.5% relative abundance. What is the average atomic mass of neon?',
    options: { A: '20.0 u', B: '20.2 u', C: '21.0 u', D: '22.0 u' },
    answer: 'B',
    explanation: 'Average mass = (20 × 0.905) + (22 × 0.095) = 18.10 + 2.09 = 20.19 ≈ 20.2 u.',
    markScheme: null
  },
  {
    id: 'Q006', understandingId: 'U1.2.1', subtopic: '1.2', section: 'unit1',
    concepts: ['mass spectrometry', 'interpretation'], type: 'short',
    commandTerm: 'Explain', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'The mass spectrum of chlorine shows peaks at m/z = 35 and m/z = 37 with relative abundances of approximately 75.8% and 24.2%, respectively. (a) Calculate the average atomic mass of chlorine. (b) Explain why the mass spectrum shows two peaks rather than one.',
    options: null,
    answer: '(a) 35.48 u (b) Chlorine has two naturally occurring isotopes, Cl-35 and Cl-37, which differ in the number of neutrons.',
    explanation: 'Average = (35 × 0.758) + (37 × 0.242) = 26.53 + 8.954 = 35.48 u. The two peaks correspond to two stable isotopes with different numbers of neutrons but the same number of protons.',
    markScheme: '1 pt: correct calculation setup | 1 pt: correct average (35.45–35.48 u) | 1 pt: explains isotopes differ in neutron number'
  },
  {
    id: 'Q007', understandingId: 'U1.2.1', subtopic: '1.2', section: 'unit1',
    concepts: ['mass spectrometry', 'isotopes'], type: 'mcq',
    commandTerm: 'Identify', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'In a mass spectrometer, atoms are first ionized and then accelerated. Which of the following best explains why lighter isotopes are deflected more than heavier isotopes in the magnetic field?',
    options: {
      A: 'Lighter isotopes have a greater charge.',
      B: 'Lighter isotopes travel faster after acceleration and experience a greater deflecting force.',
      C: 'Lighter isotopes have less momentum at the same kinetic energy, leading to a smaller radius of curvature.',
      D: 'Lighter isotopes have fewer electrons and are more easily deflected.'
    },
    answer: 'C',
    explanation: 'After acceleration through the same potential, all ions have the same kinetic energy (KE = ½mv<sup>2</sup>). Lighter ions have higher velocity and lower momentum (p = mv = √(2mKE)), giving them a smaller radius of curvature (r = mv/qB) in the magnetic field.',
    markScheme: null
  },

  // ===== TOPIC 1.5: Atomic Structure and Electron Configuration =====

  {
    id: 'Q008', understandingId: 'U1.5.2', subtopic: '1.5', section: 'unit1',
    concepts: ['electron configuration', 'Aufbau'], type: 'mcq',
    commandTerm: 'Determine', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'What is the ground-state electron configuration of a phosphorus atom (Z = 15)?',
    options: {
      A: '1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup>',
      B: '1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>3</sup>',
      C: '1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup> 3p<sup>4</sup>',
      D: '1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3d<sup>3</sup>'
    },
    answer: 'B',
    explanation: 'Phosphorus has 15 electrons. Following Aufbau: 1s<sup>2</sup>(2) 2s<sup>2</sup>(4) 2p<sup>6</sup>(10) 3s<sup>2</sup>(12) 3p<sup>3</sup>(15). The 3p subshell has 3 electrons.',
    markScheme: null
  },
  {
    id: 'Q009', understandingId: 'U1.5.2', subtopic: '1.5', section: 'unit1',
    concepts: ['electron configuration', 'ions', 'exceptions'], type: 'mcq',
    commandTerm: 'Determine', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'Which of the following represents the correct ground-state electron configuration for Cu (Z = 29)?',
    options: {
      A: '[Ar] 3d<sup>9</sup> 4s<sup>2</sup>',
      B: '[Ar] 3d<sup>10</sup> 4s<sup>1</sup>',
      C: '[Ar] 3d<sup>8</sup> 4s<sup>2</sup> 4p<sup>1</sup>',
      D: '[Ar] 3d<sup>10</sup> 4s<sup>2</sup>'
    },
    answer: 'B',
    explanation: 'Copper is an exception to the expected filling order. A fully filled 3d<sup>10</sup> subshell is more stable than 3d<sup>9</sup>, so one electron is promoted from 4s to 3d, giving [Ar] 3d<sup>10</sup> 4s<sup>1</sup>.',
    markScheme: null
  },
  {
    id: 'Q010', understandingId: 'U1.5.2', subtopic: '1.5', section: 'unit1',
    concepts: ['electron configuration', 'quantum numbers'], type: 'short',
    commandTerm: 'State', difficulty: 2,
    source: 'original', marks: 4,
    stem: 'Consider the element vanadium (V, Z = 23). (a) Write the full ground-state electron configuration. (b) How many unpaired electrons does vanadium have? (c) Write the electron configuration for V<sup>3</sup><sup>+</sup>.',
    options: null,
    answer: '(a) 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>3</sup> 4s<sup>2</sup> (b) 3 unpaired electrons (c) 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>2</sup>',
    explanation: 'V has 23 electrons: [Ar] 3d<sup>3</sup> 4s<sup>2</sup>. The 3d subshell has 3 electrons in separate orbitals (Hund\'s rule), all unpaired. V<sup>3</sup><sup>+</sup> loses 3 electrons — the two 4s electrons are removed first, then one 3d electron, giving [Ar] 3d<sup>2</sup>.',
    markScheme: '1 pt: correct full configuration | 1 pt: 3 unpaired electrons | 1 pt: 4s electrons removed first in ion | 1 pt: correct V<sup>3</sup><sup>+</sup> configuration [Ar] 3d<sup>2</sup>'
  },
  {
    id: 'Q011', understandingId: 'U1.5.2', subtopic: '1.5', section: 'unit1',
    concepts: ['electron configuration', 'Hund rule'], type: 'mcq',
    commandTerm: 'Identify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'According to Hund\'s rule, how are electrons distributed among the three 2p orbitals of a nitrogen atom?',
    options: {
      A: 'Two electrons in one orbital, one in another, none in the third',
      B: 'One electron in each orbital, all with the same spin',
      C: 'One electron in each orbital, all with different spins',
      D: 'Three electrons paired in one orbital and one orbital empty'
    },
    answer: 'B',
    explanation: 'Hund\'s rule states that electrons fill degenerate orbitals singly with parallel spins before pairing. Nitrogen has 3 electrons in 2p, so each of the three 2p orbitals gets one electron, all with the same spin direction.',
    markScheme: null
  },

  // ===== TOPIC 1.6: Photoelectron Spectroscopy (PES) =====

  {
    id: 'Q012', understandingId: 'U1.6.1', subtopic: '1.6', section: 'unit1',
    concepts: ['PES', 'ionization energy'], type: 'mcq',
    commandTerm: 'Analyze', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'A photoelectron spectrum of an element shows peaks at the following binding energies (MJ/mol): 7.87, 1.68, 1.01, 0.59. The relative peak heights are 2:2:6:1. Which element is this?',
    options: { A: 'Fluorine (Z = 9)', B: 'Neon (Z = 10)', C: 'Sodium (Z = 11)', D: 'Magnesium (Z = 12)' },
    answer: 'C',
    explanation: 'The peak heights represent the number of electrons in each subshell: 2 + 2 + 6 + 1 = 11 electrons, corresponding to sodium. The configuration is 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup>.',
    markScheme: null
  },
  {
    id: 'Q013', understandingId: 'U1.6.1', subtopic: '1.6', section: 'unit1',
    concepts: ['PES', 'shielding'], type: 'short',
    commandTerm: 'Explain', difficulty: 3,
    source: 'original', marks: 3,
    stem: 'In a photoelectron spectrum of aluminum, the 2s electrons have a higher binding energy than the 2p electrons, even though both are in the second energy level. Explain this observation in terms of electron shielding and penetration.',
    options: null,
    answer: '2s electrons penetrate closer to the nucleus than 2p electrons, experiencing less shielding and a greater effective nuclear charge, resulting in higher binding energy.',
    explanation: 'The 2s orbital has a higher probability density near the nucleus compared to 2p. This greater penetration means 2s electrons are less shielded by inner electrons and feel a larger effective nuclear charge (Z_eff), requiring more energy to remove.',
    markScheme: '1 pt: identifies 2s has greater penetration | 1 pt: explains less shielding / greater Z_eff for 2s | 1 pt: connects to higher binding energy'
  },
  {
    id: 'Q014', understandingId: 'U1.6.2', subtopic: '1.6', section: 'unit1',
    concepts: ['PES', 'interpretation'], type: 'mcq',
    commandTerm: 'Predict', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'Which of the following changes would be observed in a PES spectrum when comparing sulfur (Z = 16) to chlorine (Z = 17)?',
    options: {
      A: 'All peaks shift to lower binding energies for chlorine.',
      B: 'All peaks shift to higher binding energies for chlorine, and the 3p peak height increases.',
      C: 'The 3p peak height stays the same, but all peaks shift to higher binding energies.',
      D: 'A new peak appears for chlorine at a very low binding energy.'
    },
    answer: 'B',
    explanation: 'Chlorine has one more proton and one more electron than sulfur. The additional proton increases the effective nuclear charge, shifting all peaks to higher binding energies. The extra electron goes into the 3p subshell, increasing that peak height from 4 to 5.',
    markScheme: null
  },

  // ===== TOPIC 1.7: Periodic Trends =====

  {
    id: 'Q015', understandingId: 'U1.7.2', subtopic: '1.7', section: 'unit1',
    concepts: ['ionization energy', 'periodic trends'], type: 'mcq',
    commandTerm: 'Predict', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'Which of the following elements has the highest first ionization energy?',
    options: { A: 'Li', B: 'B', C: 'N', D: 'F' },
    answer: 'D',
    explanation: 'First ionization energy generally increases across a period due to increasing nuclear charge with similar shielding. Fluorine, being farthest right in Period 2 (excluding Ne, which is not listed), has the highest first ionization energy among the choices.',
    markScheme: null
  },
  {
    id: 'Q016', understandingId: 'U1.7.1', subtopic: '1.7', section: 'unit1',
    concepts: ['atomic radius', 'periodic trends'], type: 'mcq',
    commandTerm: 'Compare', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'Which of the following correctly ranks the atoms in order of increasing atomic radius?',
    options: {
      A: 'Na < Mg < Al < Si',
      B: 'Si < Al < Mg < Na',
      C: 'Mg < Na < Al < Si',
      D: 'Al < Si < Na < Mg'
    },
    answer: 'B',
    explanation: 'Atomic radius decreases across a period (left to right) due to increasing nuclear charge pulling electrons closer. So Na > Mg > Al > Si. In order of increasing radius: Si < Al < Mg < Na.',
    markScheme: null
  },
  {
    id: 'Q017', understandingId: 'U1.7.2', subtopic: '1.7', section: 'unit1',
    concepts: ['ionization energy', 'exceptions'], type: 'mcq',
    commandTerm: 'Explain', difficulty: 3,
    source: 'original', marks: 1,
    stem: 'The first ionization energy of oxygen (1314 kJ/mol) is lower than that of nitrogen (1402 kJ/mol), despite oxygen having a higher atomic number. Which of the following best explains this?',
    options: {
      A: 'Oxygen has a larger atomic radius than nitrogen.',
      B: 'Oxygen\'s 2p<sup>4</sup> configuration has a paired electron that experiences electron-electron repulsion, making it easier to remove.',
      C: 'Nitrogen has more protons, creating a stronger nuclear attraction.',
      D: 'Oxygen has a higher electron affinity, which stabilizes its electron cloud.'
    },
    answer: 'B',
    explanation: 'Nitrogen has a half-filled 2p<sup>3</sup> configuration (one electron per orbital), which is relatively stable. Oxygen\'s 2p<sup>4</sup> forces one orbital to have paired electrons. The electron-electron repulsion from pairing makes the fourth 2p electron easier to remove.',
    markScheme: null
  },
  {
    id: 'Q018', understandingId: 'U1.7.2', subtopic: '1.7', section: 'unit1',
    concepts: ['successive ionization energies'], type: 'short',
    commandTerm: 'Analyze', difficulty: 3,
    source: 'original', marks: 4,
    stem: 'The successive ionization energies (in kJ/mol) for an unknown element X are: 738, 1451, 7733, 10543, 13630. (a) In which group of the periodic table is element X most likely found? Justify your answer. (b) Identify a possible element.',
    options: null,
    answer: '(a) Group 2 — there is a large jump between the 2nd and 3rd ionization energies, indicating the removal of a core electron. (b) Magnesium (Mg).',
    explanation: 'The first two ionization energies are relatively low and close together, but the third jumps dramatically (by over 6000 kJ/mol). This indicates that after removing 2 valence electrons, the third electron is removed from a much more stable inner shell. This pattern is characteristic of Group 2 elements. The actual values match magnesium.',
    markScheme: '1 pt: Group 2 | 1 pt: identifies the large jump between IE<sub>2</sub> and IE<sub>3</sub> | 1 pt: explains this indicates removal of core electron | 1 pt: identifies Mg (or accepts Be, Ca with justification)'
  },
  {
    id: 'Q019', understandingId: 'U1.7.1', subtopic: '1.7', section: 'unit1',
    concepts: ['ionic radius', 'isoelectronic'], type: 'mcq',
    commandTerm: 'Compare', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'Consider the isoelectronic series: O<sup>2</sup><sup>−</sup>, F<sup>−</sup>, Na<sup>+</sup>, Mg<sup>2</sup><sup>+</sup>. Which species has the smallest ionic radius?',
    options: { A: 'O<sup>2</sup><sup>−</sup>', B: 'F<sup>−</sup>', C: 'Na<sup>+</sup>', D: 'Mg<sup>2</sup><sup>+</sup>' },
    answer: 'D',
    explanation: 'All four species have 10 electrons. The species with the most protons (Mg<sup>2</sup><sup>+</sup> with 12) exerts the greatest nuclear attraction on the same number of electrons, resulting in the smallest radius. O<sup>2</sup><sup>−</sup>(8p) > F<sup>−</sup>(9p) > Na<sup>+</sup>(11p) > Mg<sup>2</sup><sup>+</sup>(12p).',
    markScheme: null
  },

  // ===== TOPIC 1.8: Valence Electrons and Ionic Compounds =====

  {
    id: 'Q020', understandingId: 'U1.8.1', subtopic: '1.8', section: 'unit1',
    concepts: ['valence electrons', 'ionic compounds'], type: 'mcq',
    commandTerm: 'Determine', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'How many valence electrons does a selenium (Se) atom have?',
    options: { A: '2', B: '4', C: '6', D: '8' },
    answer: 'C',
    explanation: 'Selenium is in Group 16 (VIA). Its electron configuration is [Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>4</sup>. The valence electrons are in the outermost shell (n = 4): 4s<sup>2</sup> 4p<sup>4</sup> = 6 valence electrons.',
    markScheme: null
  },
  {
    id: 'Q021', understandingId: 'U1.8.2', subtopic: '1.8', section: 'unit1',
    concepts: ['ionic compounds', 'Coulomb law'], type: 'short',
    commandTerm: 'Compare', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'Using Coulomb\'s law, explain why the lattice energy of MgO is significantly greater than that of NaCl.',
    options: null,
    answer: 'MgO has higher charges (Mg<sup>2</sup><sup>+</sup> and O<sup>2</sup><sup>−</sup> vs. Na<sup>+</sup> and Cl<sup>−</sup>) and smaller ionic radii, both of which increase the electrostatic attraction and thus lattice energy.',
    explanation: 'Coulomb\'s law: F ∝ (q<sub>1</sub> × q<sub>2</sub>) / r<sup>2</sup>. In MgO, q<sub>1</sub> × q<sub>2</sub> = (2+)(2−) = 4, while in NaCl, q<sub>1</sub> × q<sub>2</sub> = (1+)(1−) = 1. Additionally, Mg<sup>2</sup><sup>+</sup> is smaller than Na<sup>+</sup> and O<sup>2</sup><sup>−</sup> is smaller than Cl<sup>−</sup>, so r is smaller. Both factors increase the force of attraction.',
    markScheme: '1 pt: higher ionic charges in MgO | 1 pt: smaller ionic radii in MgO | 1 pt: correctly relates both factors to Coulomb\'s law (F ∝ q<sub>1</sub>q<sub>2</sub>/r<sup>2</sup>)'
  },

  // ===== TOPIC 1.7 (continued): Electronegativity and Electron Affinity =====

  {
    id: 'Q022', understandingId: 'U1.7.3', subtopic: '1.7', section: 'unit1',
    concepts: ['electronegativity', 'periodic trends'], type: 'mcq',
    commandTerm: 'Identify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'Which of the following elements has the highest electronegativity?',
    options: { A: 'Cs', B: 'I', C: 'O', D: 'F' },
    answer: 'D',
    explanation: 'Electronegativity increases from left to right across a period and from bottom to top within a group. Fluorine, in the upper right corner of the periodic table (excluding noble gases), has the highest electronegativity of all elements.',
    markScheme: null
  },
  {
    id: 'Q023', understandingId: 'U1.7.3', subtopic: '1.7', section: 'unit1',
    concepts: ['bond polarity', 'electronegativity'], type: 'mcq',
    commandTerm: 'Predict', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'Which of the following bonds is the most polar?',
    options: { A: 'C–H', B: 'N–H', C: 'O–H', D: 'C–F' },
    answer: 'D',
    explanation: 'Bond polarity depends on the electronegativity difference between the bonded atoms. Electronegativity values (Pauling scale): C = 2.5, H = 2.2, N = 3.0, O = 3.4, F = 4.0. Differences: C–H = 0.3, N–H = 0.8, O–H = 1.2, C–F = 1.5. C–F has the largest difference.',
    markScheme: null
  },
  {
    id: 'Q024', understandingId: 'U1.8.1', subtopic: '1.8', section: 'unit1',
    concepts: ['metallic bonding'], type: 'short',
    commandTerm: 'Explain', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'Explain why metals are good conductors of electricity in terms of their bonding model. How does the metallic bonding model account for the malleability of metals?',
    options: null,
    answer: 'Metals consist of a lattice of positive cations surrounded by a "sea" of delocalized electrons. These mobile electrons carry charge, enabling electrical conductivity. Malleability results from the non-directional nature of metallic bonds — when force is applied, cation layers slide past each other without breaking the bond, as the electron sea can redistribute.',
    explanation: 'In metallic bonding, valence electrons are delocalized across the entire structure. This allows free movement of electrons (conductivity) and allows layers to shift without shattering (malleability), unlike ionic crystals where shifting causes like charges to align and repel.',
    markScheme: '1 pt: describes delocalized / sea of electrons model | 1 pt: mobile electrons conduct electricity | 1 pt: non-directional bonding allows layers to slide (malleability)'
  },

  // ===== TOPIC 1.7 (continued): Ionization Energy =====

  {
    id: 'Q025', understandingId: 'U1.7.3', subtopic: '1.7', section: 'unit1',
    concepts: ['electron affinity'], type: 'mcq',
    commandTerm: 'Compare', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'Which of the following elements has the most negative (most exothermic) electron affinity?',
    options: { A: 'Na', B: 'S', C: 'Cl', D: 'Ar' },
    answer: 'C',
    explanation: 'Halogens have the most exothermic electron affinities because adding one electron completes their valence shell. Chlorine has a more negative electron affinity than fluorine due to fluorine\'s small size causing greater electron-electron repulsion. Argon (noble gas) has essentially zero or positive electron affinity.',
    markScheme: null
  },
  {
    id: 'Q026', understandingId: 'U1.7.2', subtopic: '1.7', section: 'unit1',
    concepts: ['ionization energy', 'Coulomb'], type: 'mcq',
    commandTerm: 'Predict', difficulty: 3,
    source: 'original', marks: 1,
    stem: 'The first ionization energy of beryllium (899 kJ/mol) is greater than that of boron (801 kJ/mol). Which of the following provides the best explanation?',
    options: {
      A: 'Beryllium has a smaller atomic radius than boron.',
      B: 'Beryllium\'s 2s<sup>2</sup> subshell is fully occupied and more stable than boron\'s 2p<sup>1</sup> configuration.',
      C: 'Boron has more protons, which repel the outermost electron.',
      D: 'Beryllium has fewer electron-electron repulsions in its outer shell.'
    },
    answer: 'B',
    explanation: 'Despite having fewer protons, Be has a higher IE<sub>1</sub> because its outermost electron is in a filled 2s<sup>2</sup> subshell, which has greater penetration and stability. Boron\'s outermost electron is in the higher-energy 2p subshell, which is shielded by the 2s electrons and easier to remove.',
    markScheme: null
  },

  // ===== EXTENDED / FRQ-STYLE QUESTIONS =====

  {
    id: 'Q027', understandingId: 'U1.1.1', subtopic: '1.1', section: 'unit1',
    concepts: ['stoichiometry', 'molar mass', 'percent composition'], type: 'extended',
    commandTerm: 'Calculate', difficulty: 3,
    source: 'original', marks: 7,
    stem: 'A hydrated salt has the formula MgSO<sub>4</sub>·xH<sub>2</sub>O. When 6.150 g of the hydrated salt is heated to drive off all water, 3.007 g of anhydrous MgSO<sub>4</sub> remains.\n(a) Calculate the mass of water lost. (1 pt)\n(b) Calculate the moles of anhydrous MgSO<sub>4</sub>. (1 pt)\n(c) Calculate the moles of water lost. (1 pt)\n(d) Determine the value of x. (1 pt)\n(e) Calculate the percent by mass of water in the hydrated salt. (1 pt)\n(f) If the student stopped heating too early and some water remained, would the calculated value of x be higher or lower than the true value? Explain. (2 pts)',
    options: null,
    answer: '(a) 3.143 g (b) 0.02498 mol (c) 0.1746 mol (d) x = 7 (e) 51.11% (f) The calculated x would be lower because less water mass would be recorded, yielding fewer moles of water per mole of salt.',
    explanation: '(a) 6.150 − 3.007 = 3.143 g H<sub>2</sub>O. (b) 3.007 / 120.37 = 0.02498 mol MgSO<sub>4</sub>. (c) 3.143 / 18.015 = 0.1746 mol H<sub>2</sub>O. (d) x = 0.1746 / 0.02498 = 6.99 ≈ 7. (e) (3.143/6.150) × 100 = 51.11%. (f) If not fully heated, measured water mass is too low → fewer moles of water → smaller x.',
    markScheme: '(a) 1 pt: 6.150 − 3.007 = 3.143 g | (b) 1 pt: 3.007 g / 120.37 g/mol = 0.02498 mol | (c) 1 pt: 3.143 g / 18.015 g/mol = 0.1746 mol | (d) 1 pt: x = 0.1746/0.02498 ≈ 7 | (e) 1 pt: (3.143/6.150) × 100 = 51.11% | (f) 1 pt: x would be lower | 1 pt: less water recorded → fewer moles of water in ratio'
  },
  {
    id: 'Q028', understandingId: 'U1.6.2', subtopic: '1.6', section: 'unit1',
    concepts: ['electron configuration', 'PES', 'periodic trends'], type: 'extended',
    commandTerm: 'Analyze', difficulty: 3,
    source: 'original', marks: 8,
    stem: 'Consider the elements lithium (Li), carbon (C), and neon (Ne).\n(a) Write the ground-state electron configuration for each element. (3 pts)\n(b) Sketch a qualitative photoelectron spectrum (PES) for carbon, labeling each peak with the corresponding subshell. Your sketch should show relative peak heights and the correct ordering of binding energies. (3 pts)\n(c) Explain why the first ionization energy of neon is significantly higher than that of lithium. Reference effective nuclear charge in your answer. (2 pts)',
    options: null,
    answer: '(a) Li: 1s<sup>2</sup> 2s<sup>1</sup>; C: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>2</sup>; Ne: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup>. (b) PES for carbon shows 3 peaks: 1s<sup>2</sup> (highest BE, height 2), 2s<sup>2</sup> (middle BE, height 2), 2p<sup>2</sup> (lowest BE, height 2). (c) Ne has a much higher Z_eff because it has 10 protons but the same number of inner-shell shielding electrons as atoms in its period. Li has only 3 protons and its valence electron is well shielded by 1s<sup>2</sup>.',
    explanation: 'PES peak heights correspond to the number of electrons in each subshell. Binding energy decreases from inner to outer subshells. Neon\'s outermost electrons experience a much larger effective nuclear charge (Z_eff ≈ 10 − 2 = 8 for 2p) compared to lithium (Z_eff ≈ 3 − 2 = 1 for 2s).',
    markScheme: '(a) 1 pt each for correct configuration (3 pts total) | (b) 1 pt: 3 peaks shown | 1 pt: correct relative heights (2:2:2) | 1 pt: correct BE ordering (1s > 2s > 2p) | (c) 1 pt: Ne has higher Z_eff than Li | 1 pt: explains using proton count vs. shielding'
  },
  {
    id: 'Q029', understandingId: 'U1.7.2', subtopic: '1.7', section: 'unit1',
    concepts: ['periodic trends', 'ionization energy', 'atomic radius', 'electronegativity'], type: 'extended',
    commandTerm: 'Compare', difficulty: 3,
    source: 'original', marks: 7,
    stem: 'Consider the Period 3 elements Na, Mg, Al, Si, P, S, Cl, and Ar.\n(a) Describe the general trend in first ionization energy across Period 3 from Na to Ar. (1 pt)\n(b) Identify two elements where the ionization energy does not follow the general trend and explain each exception. (4 pts)\n(c) Explain why the atomic radius of Na is larger than that of Cl. (2 pts)',
    options: null,
    answer: '(a) IE<sub>1</sub> generally increases from Na to Ar. (b) Exception 1: Al has a lower IE than Mg because Al\'s outermost electron is in 2p (higher energy, more shielded) vs. Mg\'s filled 2s<sup>2</sup>. Exception 2: S has a lower IE than P because S\'s 3p<sup>4</sup> has a paired electron with extra repulsion, while P\'s 3p<sup>3</sup> is half-filled and stable. (c) Na has fewer protons (11) than Cl (17) but the same number of inner-shell electrons, so Cl has a much higher Z_eff, pulling its valence electrons closer.',
    explanation: 'The general increase in IE is due to increasing Z_eff across the period. The Mg→Al drop occurs because Al removes a 3p electron (less penetrating, more shielded) vs. Mg\'s 3s electron. The P→S drop occurs because sulfur\'s paired 3p electron has additional electron-electron repulsion.',
    markScheme: '(a) 1 pt: IE generally increases across Period 3 | (b) 1 pt: identifies Al < Mg exception | 1 pt: explains 3p vs 3s subshell energy | 1 pt: identifies S < P exception | 1 pt: explains paired electron repulsion in S | (c) 1 pt: Na has lower Z_eff / fewer protons | 1 pt: relates to electron cloud being pulled closer in Cl'
  },
  {
    id: 'Q030', understandingId: 'U1.7.3', subtopic: '1.7', section: 'unit1',
    concepts: ['electronegativity', 'bond type', 'ionic vs covalent'], type: 'extended',
    commandTerm: 'Classify', difficulty: 3,
    source: 'original', marks: 6,
    stem: 'Consider the following compounds: NaCl, HCl, Cl<sub>2</sub>, MgO.\n(a) Arrange these compounds in order of increasing electronegativity difference between the bonded atoms. (2 pts)\n(b) Classify the bonding in each compound as ionic, polar covalent, or nonpolar covalent. (2 pts)\n(c) Explain why MgO has a much higher melting point than HCl. (2 pts)',
    options: null,
    answer: '(a) Cl<sub>2</sub> (0) < HCl (0.9) < NaCl (2.1) < MgO (2.3). (b) Cl<sub>2</sub>: nonpolar covalent; HCl: polar covalent; NaCl: ionic; MgO: ionic. (c) MgO is an ionic compound with strong electrostatic attractions between Mg<sup>2</sup><sup>+</sup> and O<sup>2</sup><sup>−</sup> ions in a crystal lattice (high charges, small ions). HCl is a molecular compound held together by weak intermolecular forces (dipole-dipole), which require much less energy to overcome.',
    explanation: 'Electronegativity differences determine bond character. Larger differences lead to more ionic character. MgO\'s lattice energy is very high due to the +2/−2 charges and small ionic radii, far exceeding the weak intermolecular forces in molecular HCl.',
    markScheme: '(a) 1 pt: correct order | 1 pt: approximate ΔEN values or correct relative ranking | (b) 1 pt: correct classification of Cl<sub>2</sub> and HCl | 1 pt: correct classification of NaCl and MgO | (c) 1 pt: MgO ionic lattice with strong Coulombic forces | 1 pt: HCl molecular with weak intermolecular forces'
  },
  {
    id: 'Q031', understandingId: 'U1.7.2', subtopic: '1.7', section: 'unit1',
    concepts: ['successive ionization energies', 'electron configuration'], type: 'extended',
    commandTerm: 'Analyze', difficulty: 3,
    source: 'original', marks: 6,
    stem: 'The successive ionization energies (in kJ/mol) for element Z are:\nIE<sub>1</sub> = 578, IE<sub>2</sub> = 1817, IE<sub>3</sub> = 2745, IE<sub>4</sub> = 11578, IE<sub>5</sub> = 14842\n(a) How many valence electrons does element Z have? Justify your answer. (2 pts)\n(b) In which group of the periodic table is element Z located? (1 pt)\n(c) Write the ground-state electron configuration for element Z if it is in Period 3. (1 pt)\n(d) Explain why IE<sub>2</sub> is significantly larger than IE<sub>1</sub> but IE<sub>3</sub> is only moderately larger than IE<sub>2</sub>. (2 pts)',
    options: null,
    answer: '(a) 3 valence electrons. The large jump between IE<sub>3</sub> (2745) and IE<sub>4</sub> (11578) indicates the 4th electron is removed from a core shell. (b) Group 13. (c) 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>1</sup> (aluminum). (d) IE<sub>2</sub> > IE<sub>1</sub> because after removing one electron, the remaining electrons experience greater Z_eff. IE<sub>3</sub> is only moderately higher than IE<sub>2</sub> because all three valence electrons are being removed from the same shell, just with progressively higher Z_eff.',
    explanation: 'The dramatic jump (×4.2) between IE<sub>3</sub> and IE<sub>4</sub> signals penetration into a core electron shell. The first three electrons are valence electrons. Element Z in Period 3 with 3 valence electrons is Al (Group 13).',
    markScheme: '(a) 1 pt: 3 valence electrons | 1 pt: justifies with large jump between IE<sub>3</sub> and IE<sub>4</sub> | (b) 1 pt: Group 13 | (c) 1 pt: [Ne] 3s<sup>2</sup> 3p<sup>1</sup> or full configuration | (d) 1 pt: IE<sub>2</sub> > IE<sub>1</sub> due to increased Z_eff after electron removal | 1 pt: IE<sub>2</sub> and IE<sub>3</sub> close because same valence shell'
  },

  // ===== ADDITIONAL MCQ TO REACH 35 =====

  {
    id: 'Q032', understandingId: 'U1.2.1', subtopic: '1.2', section: 'unit1',
    concepts: ['mass spectrometry', 'molecular compound'], type: 'mcq',
    commandTerm: 'Interpret', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'The mass spectrum of a pure compound shows a molecular ion peak (M<sup>+</sup>) at m/z = 78 and a prominent fragment peak at m/z = 77. The compound is known to contain only carbon and hydrogen. Which compound is most consistent with this data?',
    options: { A: 'Hexane (C<sub>6</sub>H<sub>14</sub>)', B: 'Cyclohexane (C<sub>6</sub>H<sub>12</sub>)', C: 'Benzene (C<sub>6</sub>H<sub>6</sub>)', D: 'Pentane (C<sub>5</sub>H<sub>12</sub>)' },
    answer: 'C',
    explanation: 'The molecular ion at m/z = 78 matches C<sub>6</sub>H<sub>6</sub> (benzene): 6(12) + 6(1) = 78. The fragment at m/z = 77 corresponds to loss of one hydrogen (C<sub>6</sub>H<sub>5</sub><sup>+</sup>). Hexane = 86, cyclohexane = 84, pentane = 72.',
    markScheme: null
  },
  {
    id: 'Q033', understandingId: 'U1.8.2', subtopic: '1.8', section: 'unit1',
    concepts: ['Coulomb law', 'lattice energy'], type: 'mcq',
    commandTerm: 'Predict', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'Which of the following ionic compounds would be expected to have the highest lattice energy?',
    options: { A: 'NaF', B: 'NaCl', C: 'KCl', D: 'KBr' },
    answer: 'A',
    explanation: 'Lattice energy increases with higher charge and smaller ionic radii (Coulomb\'s law). All four compounds have +1/−1 charges. NaF has the smallest cation (Na<sup>+</sup> < K<sup>+</sup>) and smallest anion (F<sup>−</sup> < Cl<sup>−</sup> < Br<sup>−</sup>), giving the shortest interionic distance and highest lattice energy.',
    markScheme: null
  },
  {
    id: 'Q034', understandingId: 'U1.5.3', subtopic: '1.5', section: 'unit1',
    concepts: ['effective nuclear charge'], type: 'short',
    commandTerm: 'Explain', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'Explain the concept of effective nuclear charge (Z_eff) and use it to explain why the 2s electron in lithium has a lower ionization energy than the 1s electron in lithium.',
    options: null,
    answer: 'Z_eff is the net positive charge experienced by an electron after accounting for shielding by inner electrons. For Li, the 2s electron is shielded by the two 1s electrons, so Z_eff ≈ 3 − 2 = 1. The 1s electrons experience the nearly full nuclear charge (Z_eff ≈ 3 − 0.3 ≈ 2.7), so they are much harder to remove.',
    explanation: 'Z_eff = Z − σ, where Z is the atomic number and σ is the shielding constant. Inner electrons shield outer electrons much more effectively than electrons in the same shell shield each other.',
    markScheme: '1 pt: defines Z_eff correctly | 1 pt: explains shielding of 2s by 1s electrons | 1 pt: correctly compares Z_eff for 1s vs 2s electrons in Li'
  },
  {
    id: 'Q035', understandingId: 'U1.5.3', subtopic: '1.5', section: 'unit1',
    concepts: ['ionization energy', 'electron configuration'], type: 'mcq',
    commandTerm: 'Predict', difficulty: 3,
    source: 'original', marks: 1,
    stem: 'Which of the following atoms would require the most energy to remove an electron from the 1s subshell?',
    options: { A: 'He', B: 'Li', C: 'C', D: 'Ne' },
    answer: 'D',
    explanation: 'The 1s electrons experience a Z_eff that increases with atomic number because they are not shielded by any inner electrons. Ne has the highest nuclear charge (Z = 10) among the choices, so its 1s electrons are held most tightly. The binding energy of 1s electrons increases roughly as Z<sup>2</sup>.',
    markScheme: null
  }

];

// Register with global DB
if (window.DB) { window.DB.u1questions = window.DB_U1_QUESTIONS; }
else { window.DB = { u1questions: window.DB_U1_QUESTIONS }; }
