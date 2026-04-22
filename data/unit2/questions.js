// AP Chemistry Unit 2: Molecular and Ionic Compound Structure and Properties — Question Bank
// 24 questions: ~14 MCQ, ~6 short answer, ~4 extended/FRQ
// Topics 2.1–2.7 | Difficulty mix: ~8 easy, ~8 medium, ~8 hard

window.DB_U2_QUESTIONS = [

  // ===== TOPIC 2.1: Types of Chemical Bonds =====

  {
    id: 'U2Q001', understandingId: 'U2.1.1', subtopic: '2.1', section: 'unit2',
    concepts: ['bonding', 'electronegativity'], type: 'mcq',
    commandTerm: 'Identify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'Which of the following bonds is most polar?',
    options: { A: 'C\u2013H', B: 'N\u2013H', C: 'O\u2013H', D: 'F\u2013H' },
    answer: 'D',
    explanation: 'Bond polarity increases with electronegativity difference (\u0394EN). F is the most electronegative element (EN = 4.0), so F\u2013H has the largest \u0394EN (4.0 \u2212 2.2 = 1.8) and is therefore the most polar bond listed.',
    markScheme: null
  },
  {
    id: 'U2Q002', understandingId: 'U2.1.1', subtopic: '2.1', section: 'unit2',
    concepts: ['bonding', 'electronegativity'], type: 'mcq',
    commandTerm: 'Classify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'Based on electronegativity differences, which of the following compounds contains primarily ionic bonding?',
    options: { A: 'CO\u2082', B: 'H\u2082O', C: 'NaCl', D: 'CH\u2084' },
    answer: 'C',
    explanation: 'NaCl is formed between a metal (Na, EN \u2248 0.9) and a nonmetal (Cl, EN \u2248 3.2). The \u0394EN = 2.3, which is well above the 1.7 guideline for ionic character. The other compounds are all formed between nonmetals and have covalent bonding.',
    markScheme: null
  },
  {
    id: 'U2Q003', understandingId: 'U2.1.2', subtopic: '2.1', section: 'unit2',
    concepts: ['bonding', 'polarity'], type: 'mcq',
    commandTerm: 'Determine', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'Which of the following molecules is nonpolar despite having polar bonds?',
    options: { A: 'H\u2082O', B: 'NH\u2083', C: 'CCl\u2084', D: 'CHCl\u2083' },
    answer: 'C',
    explanation: 'CCl\u2084 has a tetrahedral geometry with four identical C\u2013Cl polar bonds. Due to the perfect symmetry, the bond dipoles cancel and the net dipole moment is zero. H\u2082O (bent), NH\u2083 (trigonal pyramidal), and CHCl\u2083 (asymmetric tetrahedral) all have net dipole moments.',
    markScheme: null
  },

  // ===== TOPIC 2.2: Intramolecular Force and Potential Energy =====

  {
    id: 'U2Q004', understandingId: 'U2.2.1', subtopic: '2.2', section: 'unit2',
    concepts: ['bonding', 'energy'], type: 'mcq',
    commandTerm: 'Identify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'On a potential energy diagram for the formation of a covalent bond, the equilibrium bond length corresponds to the point where:',
    options: {
      A: 'the potential energy is at a maximum.',
      B: 'the potential energy is at a minimum.',
      C: 'the potential energy is zero.',
      D: 'the kinetic energy is at a maximum.'
    },
    answer: 'B',
    explanation: 'The equilibrium bond length is the distance at which the potential energy of the system is at its minimum. At shorter distances, nuclear repulsion raises the energy; at longer distances, the attractive interactions are weaker.',
    markScheme: null
  },
  {
    id: 'U2Q005', understandingId: 'U2.2.1', subtopic: '2.2', section: 'unit2',
    concepts: ['bonding', 'energy'], type: 'short',
    commandTerm: 'Calculate', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'Use the following average bond energies to estimate \u0394H for the reaction: N\u2082(g) + 3 H\u2082(g) \u2192 2 NH\u2083(g). Bond energies: N\u2261N = 941 kJ/mol, H\u2013H = 436 kJ/mol, N\u2013H = 391 kJ/mol. Show your work.',
    options: null,
    answer: '\u0394H = \u221293 kJ/mol',
    explanation: 'Bonds broken: 1 N\u2261N + 3 H\u2013H = 941 + 3(436) = 941 + 1308 = 2249 kJ. Bonds formed: 6 N\u2013H = 6(391) = 2346 kJ. \u0394H = 2249 \u2212 2346 = \u221297 kJ/mol. (Slight variation depending on bond energy values used; accept \u221290 to \u2212100 kJ/mol.)',
    markScheme: '1 pt: correct identification of bonds broken and formed | 1 pt: correct energy sums | 1 pt: correct \u0394H with sign'
  },
  {
    id: 'U2Q006', understandingId: 'U2.2.2', subtopic: '2.2', section: 'unit2',
    concepts: ['bonding', 'bond-order'], type: 'mcq',
    commandTerm: 'Rank', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'Which of the following correctly ranks the carbon\u2013carbon bond lengths from shortest to longest?',
    options: {
      A: 'C\u2013C < C=C < C\u2261C',
      B: 'C\u2261C < C=C < C\u2013C',
      C: 'C=C < C\u2013C < C\u2261C',
      D: 'C\u2261C < C\u2013C < C=C'
    },
    answer: 'B',
    explanation: 'Higher bond order = shorter bond. Triple bonds (C\u2261C, bond order 3) are shortest, followed by double bonds (C=C, bond order 2), then single bonds (C\u2013C, bond order 1).',
    markScheme: null
  },

  // ===== TOPIC 2.3: Structure of Ionic Solids =====

  {
    id: 'U2Q007', understandingId: 'U2.3.1', subtopic: '2.3', section: 'unit2',
    concepts: ['ionic', 'lattice'], type: 'mcq',
    commandTerm: 'Compare', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'Which ionic compound is expected to have the highest lattice energy?',
    options: { A: 'NaCl', B: 'KBr', C: 'MgO', D: 'CsI' },
    answer: 'C',
    explanation: 'Lattice energy depends on the product of ionic charges and the inverse of the distance between ions (Coulomb\'s law). MgO has Mg\u00b2\u207a and O\u00b2\u207b (charges of +2 and \u22122), giving a charge product of 4, compared to 1 for the other compounds. Additionally, Mg\u00b2\u207a and O\u00b2\u207b are relatively small ions. Both factors result in the highest lattice energy.',
    markScheme: null
  },
  {
    id: 'U2Q008', understandingId: 'U2.3.1', subtopic: '2.3', section: 'unit2',
    concepts: ['ionic', 'lattice'], type: 'short',
    commandTerm: 'Explain', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'LiF has a melting point of 845\u00b0C while CsI has a melting point of 621\u00b0C. Both are ionic compounds. Using Coulomb\'s law, explain why LiF has the higher melting point.',
    options: null,
    answer: 'LiF has smaller ions (Li\u207a and F\u207b) compared to Cs\u207a and I\u207b. Although both have +1/\u22121 charges, the smaller interionic distance in LiF results in stronger electrostatic attraction and higher lattice energy, which requires more thermal energy to overcome.',
    explanation: 'By Coulomb\'s law, the electrostatic force is proportional to q\u2081q\u2082/r\u00b2. Both LiF and CsI have charges of +1 and \u22121, so the charge products are equal. However, Li\u207a (76 pm) and F\u207b (133 pm) are much smaller than Cs\u207a (167 pm) and I\u207b (220 pm), giving LiF a much smaller r value and therefore stronger attractions.',
    markScheme: '1 pt: references Coulomb\'s law or electrostatic attraction | 1 pt: identifies that both have same charge but LiF has smaller ions | 1 pt: connects smaller distance to stronger force/higher melting point'
  },
  {
    id: 'U2Q009', understandingId: 'U2.3.2', subtopic: '2.3', section: 'unit2',
    concepts: ['ionic', 'properties'], type: 'mcq',
    commandTerm: 'Explain', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'Solid NaCl does not conduct electricity, but molten NaCl does. Which of the following best explains this observation?',
    options: {
      A: 'Melting breaks the ionic bonds, creating free electrons.',
      B: 'In the solid, ions are fixed in the lattice and cannot move; in the liquid, ions are mobile and can carry charge.',
      C: 'Solid NaCl is covalent, but melting converts it to an ionic compound.',
      D: 'The melting process generates new ions that were not present in the solid.'
    },
    answer: 'B',
    explanation: 'In solid NaCl, the Na\u207a and Cl\u207b ions are locked in a rigid crystal lattice and cannot migrate to carry current. When melted, the lattice breaks down and the ions become mobile, allowing them to conduct electricity. No new ions are created; the same ions simply gain the ability to move.',
    markScheme: null
  },

  // ===== TOPIC 2.4: Structure of Metals and Alloys =====

  {
    id: 'U2Q010', understandingId: 'U2.4.1', subtopic: '2.4', section: 'unit2',
    concepts: ['metallic', 'bonding'], type: 'short',
    commandTerm: 'Explain', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'Explain why metals are malleable but ionic compounds are brittle, despite both having strong bonding within a lattice.',
    options: null,
    answer: 'In metals, layers of cations can slide past each other because the sea of delocalized electrons can rearrange to maintain the attractive forces. In ionic compounds, shifting a layer causes like-charged ions to be adjacent, resulting in repulsion that fractures the crystal.',
    explanation: 'The metallic bond is non-directional; the electron sea adjusts as atoms move. The ionic bond depends on the alternating arrangement of positive and negative ions; any disruption places same-charge ions next to each other, causing repulsion and fracture.',
    markScheme: '1 pt: explains metallic malleability (electron sea rearranges) | 1 pt: explains ionic brittleness (like-charge repulsion) | 1 pt: contrast between the two mechanisms'
  },
  {
    id: 'U2Q011', understandingId: 'U2.4.2', subtopic: '2.4', section: 'unit2',
    concepts: ['metallic', 'alloys'], type: 'mcq',
    commandTerm: 'Explain', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'Steel is an alloy of iron and carbon. Which of the following best explains why steel is harder than pure iron?',
    options: {
      A: 'Carbon atoms form covalent bonds with iron atoms, creating a network solid.',
      B: 'Carbon atoms replace iron atoms in the lattice, increasing the number of metallic bonds.',
      C: 'Smaller carbon atoms fit between iron atoms in the lattice, disrupting the regular arrangement and making it harder for layers to slide.',
      D: 'Carbon atoms donate electrons to the electron sea, strengthening the metallic bond.'
    },
    answer: 'C',
    explanation: 'Steel is an interstitial alloy. The small carbon atoms occupy spaces (interstices) between the larger iron atoms, disrupting the regular lattice arrangement. This makes it more difficult for the layers of iron atoms to slide past each other, increasing hardness.',
    markScheme: null
  },

  // ===== TOPIC 2.5: Lewis Diagrams =====

  {
    id: 'U2Q012', understandingId: 'U2.5.1', subtopic: '2.5', section: 'unit2',
    concepts: ['bonding', 'lewis-structures'], type: 'short',
    commandTerm: 'Draw', difficulty: 1,
    source: 'original', marks: 2,
    stem: 'Draw the Lewis structure of the ammonium ion (NH\u2084\u207a). Include all bonding pairs and lone pairs, and show the charge.',
    options: null,
    answer: 'N is the central atom with 4 single bonds to H atoms. N has no lone pairs. Total valence e\u207b = 5 + 4(1) \u2212 1 = 8. All 8 electrons are in 4 N\u2013H bonds. Structure: [H\u2013N(\u2013H)\u2083]\u207a',
    explanation: 'Nitrogen has 5 valence electrons, 4 hydrogens contribute 4, and we subtract 1 for the positive charge: total = 8. These 8 electrons form 4 N\u2013H bonds. Nitrogen has a full octet with no lone pairs. The structure is enclosed in brackets with a + charge.',
    markScheme: '1 pt: correct structure with 4 N\u2013H bonds and no lone pairs on N | 1 pt: charge notation [\u2026]\u207a'
  },
  {
    id: 'U2Q013', understandingId: 'U2.5.1', subtopic: '2.5', section: 'unit2',
    concepts: ['bonding', 'lewis-structures'], type: 'mcq',
    commandTerm: 'Determine', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'How many lone pairs of electrons are on the central atom in the Lewis structure of XeF\u2082?',
    options: { A: '0', B: '1', C: '2', D: '3' },
    answer: 'D',
    explanation: 'XeF\u2082 has 8 + 2(7) = 22 valence electrons. Xe is the central atom. Two Xe\u2013F bonds use 4 electrons. The remaining 18 electrons: 6 go as lone pairs on each F (12 total), and 6 remain on Xe as 3 lone pairs. Xe has 5 electron groups (2 bonds + 3 lone pairs), giving it a trigonal bipyramidal electron geometry and a linear molecular geometry.',
    markScheme: null
  },
  {
    id: 'U2Q014', understandingId: 'U2.5.2', subtopic: '2.5', section: 'unit2',
    concepts: ['bonding', 'octet-exceptions'], type: 'mcq',
    commandTerm: 'Identify', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'Which of the following molecules has an expanded octet on the central atom?',
    options: { A: 'CO\u2082', B: 'NF\u2083', C: 'SF\u2086', D: 'CF\u2084' },
    answer: 'C',
    explanation: 'SF\u2086 has sulfur as the central atom with 6 S\u2013F bonds, giving S twelve electrons (expanded octet). This is possible because S is in Period 3 and has available d orbitals. CO\u2082, NF\u2083, and CF\u2084 all have Period 2 central atoms (C, N, C) that cannot exceed 8 electrons.',
    markScheme: null
  },

  // ===== TOPIC 2.6: Resonance and Formal Charge =====

  {
    id: 'U2Q015', understandingId: 'U2.6.1', subtopic: '2.6', section: 'unit2',
    concepts: ['bonding', 'resonance'], type: 'short',
    commandTerm: 'Draw', difficulty: 2,
    source: 'original', marks: 4,
    stem: 'Draw all resonance structures of the carbonate ion (CO\u2083\u00b2\u207b). Determine the bond order of each C\u2013O bond in the resonance hybrid and predict whether the C\u2013O bonds are shorter or longer than a typical C=O double bond.',
    options: null,
    answer: 'Three resonance structures, each with one C=O and two C\u2013O bonds. Bond order = 4/3 \u2248 1.33. The C\u2013O bonds are longer than a typical C=O double bond but shorter than a typical C\u2013O single bond.',
    explanation: 'CO\u2083\u00b2\u207b has 24 valence electrons. Three equivalent resonance structures can be drawn. In each, one oxygen has a double bond to carbon and two have single bonds (with lone pairs). Bond order = (1 double + 2 singles) / 3 bonds = 4/3. Since the bond order is between 1 and 2, the bond length is between a single and double bond length.',
    markScheme: '1 pt: correct total e\u207b count (24) | 1 pt: at least 2 correct resonance structures | 1 pt: correct bond order (4/3 or 1.33) | 1 pt: bond length comparison (between single and double)'
  },
  {
    id: 'U2Q016', understandingId: 'U2.6.2', subtopic: '2.6', section: 'unit2',
    concepts: ['bonding', 'formal-charge'], type: 'mcq',
    commandTerm: 'Calculate', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'In the Lewis structure of carbon monoxide (:C\u2261O:), what is the formal charge on the carbon atom?',
    options: { A: '\u22122', B: '\u22121', C: '0', D: '+1' },
    answer: 'B',
    explanation: 'FC(C) = valence e\u207b \u2212 lone pair e\u207b \u2212 \u00bd(bonding e\u207b) = 4 \u2212 2 \u2212 \u00bd(6) = 4 \u2212 2 \u2212 3 = \u22121. In the triple bond structure, carbon has one lone pair and three bonding pairs. FC = 4 \u2212 2 \u2212 3 = \u22121.',
    markScheme: null
  },
  {
    id: 'U2Q017', understandingId: 'U2.6.2', subtopic: '2.6', section: 'unit2',
    concepts: ['bonding', 'formal-charge'], type: 'short',
    commandTerm: 'Evaluate', difficulty: 3,
    source: 'original', marks: 3,
    stem: 'Two Lewis structures for the thiocyanate ion (SCN\u207b) are: (I) [:S=C=N:]\u207b and (II) [:S\u2013C\u2261N:]\u207b. Calculate the formal charges on all atoms in both structures and determine which is preferred.',
    options: null,
    answer: 'Structure I: FC(S) = \u22121, FC(C) = 0, FC(N) = 0. Structure II: FC(S) = \u22121, FC(C) = 0, FC(N) = 0 as well when drawn correctly with appropriate lone pairs. The preferred structure depends on minimizing formal charge and placing negative FC on the more electronegative atom.',
    explanation: 'Structure I (S=C=N): S has 2 lone pairs + 1 double bond: FC = 6\u22124\u22122 = 0; C has 2 double bonds: FC = 4\u22120\u22124 = 0; N has 2 lone pairs + 1 double bond: FC = 5\u22124\u22122 = \u22121. Structure II (S\u2013C\u2261N): S has 3 lone pairs + 1 single bond: FC = 6\u22126\u22121 = \u22121; C has 1 single + 1 triple bond: FC = 4\u22120\u22124 = 0; N has 1 lone pair + 1 triple bond: FC = 5\u22122\u22123 = 0. Both have FCs of 0, 0, \u22121. Structure II places the \u22121 on S (less electronegative than N), while structure I places it on N (more electronegative). Structure I is preferred because \u22121 is on the more electronegative atom N.',
    markScheme: '1 pt: correct FC calculation for structure I | 1 pt: correct FC calculation for structure II | 1 pt: identifies preferred structure with correct reasoning (negative FC on more electronegative atom)'
  },

  // ===== TOPIC 2.7: VSEPR and Bond Hybridization =====

  {
    id: 'U2Q018', understandingId: 'U2.7.1', subtopic: '2.7', section: 'unit2',
    concepts: ['bonding', 'vsepr', 'geometry'], type: 'mcq',
    commandTerm: 'Predict', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'What is the molecular geometry of ammonia (NH\u2083)?',
    options: {
      A: 'Trigonal planar',
      B: 'Tetrahedral',
      C: 'Trigonal pyramidal',
      D: 'Bent'
    },
    answer: 'C',
    explanation: 'NH\u2083 has 4 electron groups around N (3 bonding pairs + 1 lone pair). The electron geometry is tetrahedral, but the molecular geometry (atoms only) is trigonal pyramidal. The lone pair pushes the H atoms downward.',
    markScheme: null
  },
  {
    id: 'U2Q019', understandingId: 'U2.7.1', subtopic: '2.7', section: 'unit2',
    concepts: ['bonding', 'vsepr'], type: 'extended',
    commandTerm: 'Compare', difficulty: 3,
    source: 'original', marks: 5,
    stem: 'Consider the molecules BF\u2083, NF\u2083, and ClF\u2083. For each molecule: (a) Draw the Lewis structure. (b) Identify the molecular geometry. (c) Predict whether the molecule is polar or nonpolar. Explain any differences in geometry among the three molecules.',
    options: null,
    answer: 'BF\u2083: trigonal planar, nonpolar. NF\u2083: trigonal pyramidal, polar. ClF\u2083: T-shaped, polar.',
    explanation: 'BF\u2083: 24 e\u207b, B central with 3 bonds and 0 lone pairs \u2192 trigonal planar (120\u00b0), symmetric \u2192 nonpolar. NF\u2083: 26 e\u207b, N central with 3 bonds and 1 lone pair \u2192 trigonal pyramidal (<109.5\u00b0), asymmetric \u2192 polar. ClF\u2083: 28 e\u207b, Cl central with 3 bonds and 2 lone pairs \u2192 T-shaped (~87\u00b0), asymmetric \u2192 polar. The differences arise because B has no lone pairs, N has one, and Cl has two (with expanded octet capability), producing progressively less symmetric geometries.',
    markScheme: '1 pt: correct Lewis structures | 1 pt: BF\u2083 = trigonal planar, nonpolar | 1 pt: NF\u2083 = trigonal pyramidal, polar | 1 pt: ClF\u2083 = T-shaped, polar | 1 pt: explains differences due to varying lone pairs on central atom'
  },
  {
    id: 'U2Q020', understandingId: 'U2.7.2', subtopic: '2.7', section: 'unit2',
    concepts: ['bonding', 'hybridization'], type: 'mcq',
    commandTerm: 'Determine', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'What is the hybridization of the carbon atom in formaldehyde (H\u2082CO)?',
    options: { A: 'sp', B: 'sp\u00b2', C: 'sp\u00b3', D: 'sp\u00b3d' },
    answer: 'B',
    explanation: 'In H\u2082CO, the carbon atom has 3 electron groups: 2 C\u2013H single bonds and 1 C=O double bond (the double bond counts as one group). Three electron groups correspond to sp\u00b2 hybridization with trigonal planar geometry around carbon.',
    markScheme: null
  },
  {
    id: 'U2Q021', understandingId: 'U2.7.3', subtopic: '2.7', section: 'unit2',
    concepts: ['bonding', 'sigma-pi'], type: 'mcq',
    commandTerm: 'Count', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'How many sigma (\u03c3) bonds and pi (\u03c0) bonds are present in one molecule of ethene (C\u2082H\u2084)?',
    options: {
      A: '4 \u03c3 and 0 \u03c0',
      B: '5 \u03c3 and 1 \u03c0',
      C: '4 \u03c3 and 2 \u03c0',
      D: '6 \u03c3 and 0 \u03c0'
    },
    answer: 'B',
    explanation: 'Ethene (H\u2082C=CH\u2082) has: 4 C\u2013H single bonds (each is 1\u03c3) + 1 C=C double bond (1\u03c3 + 1\u03c0) = 5\u03c3 bonds and 1\u03c0 bond.',
    markScheme: null
  },

  // ===== MIXED / CROSS-TOPIC QUESTIONS =====

  {
    id: 'U2Q022', understandingId: 'U2.7.1', subtopic: '2.7', section: 'unit2',
    concepts: ['vsepr', 'geometry', 'polarity'], type: 'mcq',
    commandTerm: 'Predict', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'Which of the following molecules has a square planar geometry?',
    options: { A: 'CH\u2084', B: 'SF\u2084', C: 'XeF\u2084', D: 'PCl\u2085' },
    answer: 'C',
    explanation: 'XeF\u2084 has 36 valence electrons. Xe is the central atom with 4 bonding pairs and 2 lone pairs (6 electron groups). The electron geometry is octahedral. With 2 lone pairs positioned opposite each other (trans, to minimize repulsion), the molecular geometry is square planar.',
    markScheme: null
  },
  {
    id: 'U2Q023', understandingId: 'U2.7.2', subtopic: '2.7', section: 'unit2',
    concepts: ['hybridization', 'sigma-pi'], type: 'extended',
    commandTerm: 'Analyze', difficulty: 3,
    source: 'original', marks: 5,
    stem: 'Acetic acid has the molecular formula CH\u2083COOH. (a) Draw the Lewis structure of acetic acid. (b) Determine the hybridization of each carbon atom. (c) Count the total number of sigma (\u03c3) and pi (\u03c0) bonds in the molecule. (d) Identify which C\u2013O bond is shorter and explain why.',
    options: null,
    answer: '(a) CH\u2083\u2013C(=O)\u2013O\u2013H with appropriate lone pairs. (b) CH\u2083 carbon: sp\u00b3; COOH carbon: sp\u00b2. (c) 7\u03c3 bonds and 1\u03c0 bond. (d) The C=O double bond is shorter than the C\u2013O single bond because higher bond order = shorter bond length.',
    explanation: 'The methyl carbon (CH\u2083) has 4 electron groups (3 C\u2013H + 1 C\u2013C) \u2192 sp\u00b3. The carboxyl carbon has 3 electron groups (1 C\u2013C + 1 C=O + 1 C\u2013O) \u2192 sp\u00b2. Sigma bonds: 3 C\u2013H + 1 C\u2013C + 1 C=O(\u03c3) + 1 C\u2013O + 1 O\u2013H = 7\u03c3. Pi bonds: 1 from the C=O double bond = 1\u03c0. The C=O bond (bond order 2) is shorter and stronger than the C\u2013O bond (bond order 1).',
    markScheme: '1 pt: correct Lewis structure | 1 pt: correct hybridization of both carbons | 1 pt: correct \u03c3 count (7) | 1 pt: correct \u03c0 count (1) | 1 pt: C=O shorter with explanation referencing bond order'
  },
  {
    id: 'U2Q024', understandingId: 'U2.3.1', subtopic: '2.3', section: 'unit2',
    concepts: ['ionic', 'metallic', 'bonding'], type: 'extended',
    commandTerm: 'Compare', difficulty: 3,
    source: 'original', marks: 6,
    stem: 'Compare and contrast the bonding, structure, and properties of NaCl, Fe, and diamond (C). In your response, address: (a) the type of bonding present in each substance, (b) the structure (lattice type), (c) electrical conductivity, and (d) malleability/hardness. Explain each property in terms of the bonding model.',
    options: null,
    answer: 'NaCl: ionic bonding, crystal lattice of Na\u207a/Cl\u207b, conducts when molten/dissolved, brittle. Fe: metallic bonding, cation lattice with electron sea, conducts as solid, malleable. Diamond: covalent network, tetrahedral sp\u00b3 C atoms, does not conduct, extremely hard.',
    explanation: '(a) NaCl = ionic (electrostatic attraction between Na\u207a and Cl\u207b); Fe = metallic (cation lattice + delocalized electron sea); diamond = covalent network (each C bonded to 4 others via strong covalent bonds). (b) All three have extended lattice structures but differ in bonding type. (c) NaCl conducts only when molten/dissolved (mobile ions); Fe conducts as solid (delocalized electrons); diamond does not conduct (no free electrons or mobile ions). (d) NaCl is brittle (like-charge repulsion when layers shift); Fe is malleable (electron sea rearranges); diamond is extremely hard (rigid 3D covalent network, every bond must be broken to deform).',
    markScheme: '1 pt: correct bonding type for each | 1 pt: lattice/structure description for each | 1 pt: conductivity of NaCl explained | 1 pt: conductivity of Fe explained | 1 pt: diamond non-conductivity explained | 1 pt: malleability/hardness comparison with bonding explanation'
  }

];
