/*  ===================================================================
    AP Chemistry – Unit 2: Molecular and Ionic Compound Structure and Properties
    Content data file for study app
    Topics 2.1 – 2.7  |  Exam Weight: 7-9 %
    =================================================================== */

window.DB_U2_CONTENT = {

  /* ---------------------------------------------------------------
     METADATA
     --------------------------------------------------------------- */
  metadata: {
    id: 'unit2',
    title: 'Unit 2',
    longTitle: 'Unit 2 — Molecular and Ionic Compound Structure and Properties',
    description: 'This unit explores how atoms bond together to form compounds. Students learn to classify bonds by electronegativity difference, draw Lewis structures, predict molecular geometry with VSEPR theory, and explain the properties of ionic solids and metals through their bonding models.',
    guidingQuestion: 'How do the types of bonds and molecular geometry determine the properties of a substance?',
    examWeight: '7-9%',

    subtopics: [
      /* ---------- 2.1 ---------- */
      {
        id: 'U2.1', code: '2.1', title: 'Types of Chemical Bonds',
        learningObjectives: ['SAP-3.A'],
        understandings: ['U2.1.1', 'U2.1.2'],
        blocks: [
          { id: 'B2.1', code: '2.1', title: 'Types of Chemical Bonds',
            understandings: ['U2.1.1', 'U2.1.2'] }
        ]
      },
      /* ---------- 2.2 ---------- */
      {
        id: 'U2.2', code: '2.2', title: 'Intramolecular Force and Potential Energy',
        learningObjectives: ['SAP-3.B'],
        understandings: ['U2.2.1', 'U2.2.2'],
        blocks: [
          { id: 'B2.2', code: '2.2', title: 'Intramolecular Force and Potential Energy',
            understandings: ['U2.2.1', 'U2.2.2'] }
        ]
      },
      /* ---------- 2.3 ---------- */
      {
        id: 'U2.3', code: '2.3', title: 'Structure of Ionic Solids',
        learningObjectives: ['SAP-3.C'],
        understandings: ['U2.3.1', 'U2.3.2'],
        blocks: [
          { id: 'B2.3', code: '2.3', title: 'Structure of Ionic Solids',
            understandings: ['U2.3.1', 'U2.3.2'] }
        ]
      },
      /* ---------- 2.4 ---------- */
      {
        id: 'U2.4', code: '2.4', title: 'Structure of Metals and Alloys',
        learningObjectives: ['SAP-3.D'],
        understandings: ['U2.4.1', 'U2.4.2'],
        blocks: [
          { id: 'B2.4', code: '2.4', title: 'Structure of Metals and Alloys',
            understandings: ['U2.4.1', 'U2.4.2'] }
        ]
      },
      /* ---------- 2.5 ---------- */
      {
        id: 'U2.5', code: '2.5', title: 'Lewis Diagrams',
        learningObjectives: ['SAP-4.A'],
        understandings: ['U2.5.1', 'U2.5.2'],
        blocks: [
          { id: 'B2.5', code: '2.5', title: 'Lewis Diagrams',
            understandings: ['U2.5.1', 'U2.5.2'] }
        ]
      },
      /* ---------- 2.6 ---------- */
      {
        id: 'U2.6', code: '2.6', title: 'Resonance and Formal Charge',
        learningObjectives: ['SAP-4.B', 'SAP-4.C'],
        understandings: ['U2.6.1', 'U2.6.2'],
        blocks: [
          { id: 'B2.6', code: '2.6', title: 'Resonance and Formal Charge',
            understandings: ['U2.6.1', 'U2.6.2'] }
        ]
      },
      /* ---------- 2.7 ---------- */
      {
        id: 'U2.7', code: '2.7', title: 'VSEPR and Bond Hybridization',
        learningObjectives: ['SAP-4.C'],
        understandings: ['U2.7.1', 'U2.7.2', 'U2.7.3'],
        blocks: [
          { id: 'B2.7', code: '2.7', title: 'VSEPR and Bond Hybridization',
            understandings: ['U2.7.1', 'U2.7.2', 'U2.7.3'] }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------------
     UNDERSTANDINGS
     --------------------------------------------------------------- */
  understandings: [

    /* =============================================================
       TOPIC 2.1 — Types of Chemical Bonds
       ============================================================= */

    // U2.1.1 — Electronegativity and Bond Type
    {
      id: 'U2.1.1',
      code: 'Topic 2.1',
      subtopic: '2.1',
      subtopicTitle: 'Types of Chemical Bonds',
      section: 'unit2',
      concepts: ['bonding', 'electronegativity'],
      statement: 'Electronegativity differences between bonded atoms determine whether a bond is classified as ionic, polar covalent, or nonpolar covalent.',
      content: {
        textbook: {
          explanation: '<p>When two atoms form a chemical bond, they share or transfer electrons. The type of bond depends on how unequally the bonding electrons are distributed, which is governed by the <strong>electronegativity difference (\u0394EN)</strong> between the atoms.</p><p><strong>Electronegativity</strong> is a measure of an atom\'s ability to attract shared electrons in a bond. The Pauling scale is most commonly used, with fluorine being the most electronegative element (EN = 4.0) and cesium/francium among the least (EN \u2248 0.7).</p><p>Bond classification by \u0394EN:</p><ul><li><strong>Nonpolar covalent</strong> (\u0394EN = 0 to ~0.4): Electrons shared roughly equally. Examples: H\u2013H, Cl\u2013Cl, C\u2013H.</li><li><strong>Polar covalent</strong> (\u0394EN \u2248 0.4 to ~1.7): Electrons shared unequally, creating partial charges (\u03b4+ and \u03b4\u2212). Examples: H\u2013Cl, O\u2013H, N\u2013H.</li><li><strong>Ionic</strong> (\u0394EN > ~1.7): Electrons effectively transferred from one atom to another, forming cations and anions. Examples: Na\u2013Cl, Ca\u2013O.</li></ul><p>Important: The boundaries between these categories are approximate, and bonding exists on a <strong>continuum</strong>. There is no sharp dividing line between a very polar covalent bond and an ionic bond.</p>',
          keyPoints: [
            'Electronegativity is the ability of an atom to attract bonding electrons.',
            '\u0394EN \u2248 0\u20130.4 \u2192 nonpolar covalent; \u0394EN \u2248 0.4\u20131.7 \u2192 polar covalent; \u0394EN > 1.7 \u2192 ionic.',
            'Bond type exists on a continuum \u2014 boundaries are guidelines, not absolute cutoffs.',
            'Metals bonding with nonmetals tend to form ionic bonds; nonmetals with nonmetals tend to form covalent bonds.'
          ],
          formulae: [
            '\\[ \\Delta EN = |EN_A - EN_B| \\]'
          ],
          workedExamples: [
            {
              title: 'Classifying bonds by \u0394EN',
              body: '<p><strong>Q:</strong> Classify the bond in HF. (EN of H = 2.2, EN of F = 4.0)</p><p><strong>A:</strong> \u0394EN = |4.0 \u2212 2.2| = 1.8. This is at the boundary between polar covalent and ionic, but HF is typically classified as <strong>polar covalent</strong> because both atoms are nonmetals. The large \u0394EN means the bond is highly polar, with significant partial charges on each atom.</p>'
            }
          ],
          warnings: [
            'The \u0394EN cutoffs (0.4 and 1.7) are approximate guidelines. AP free-response questions will not ask you to memorize specific cutoff values, but you must understand the trend.',
            'Do not confuse electronegativity (a property of an atom in a bond) with electron affinity (energy change when an atom gains an electron).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Electronegativity difference determines bond type. Nonpolar covalent bonds have equal sharing (\u0394EN \u2248 0), polar covalent bonds have unequal sharing (\u0394EN moderate), and ionic bonds involve electron transfer (\u0394EN large). Bond type is a continuum.',
          keyPoints: [
            '\u0394EN \u2248 0 \u2192 nonpolar covalent',
            '\u0394EN moderate \u2192 polar covalent (partial charges \u03b4+/\u03b4\u2212)',
            '\u0394EN large \u2192 ionic (electron transfer)',
            'Metal + nonmetal \u2192 usually ionic; nonmetal + nonmetal \u2192 usually covalent'
          ],
          formulae: ['\\[ \\Delta EN = |EN_A - EN_B| \\]']
        }
      },
      examTips: [
        'AP MCQ often asks you to rank bonds by polarity \u2014 use \u0394EN to compare.',
        'FRQs may ask you to justify why a molecule is polar or nonpolar; start with individual bond polarities.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 1: Periodic Trends — electronegativity increases across a period and up a group', sec: 'content' },
        { color: 'teal', label: '→ Unit 3: Intermolecular Forces — bond polarity determines dipole moment, which affects IMFs', sec: 'content' }
      ],
      questionIds: ['U2Q001', 'U2Q002']
    },

    // U2.1.2 — Bond Polarity and Dipole Moments
    {
      id: 'U2.1.2',
      code: 'Topic 2.1',
      subtopic: '2.1',
      subtopicTitle: 'Types of Chemical Bonds',
      section: 'unit2',
      concepts: ['bonding', 'polarity'],
      statement: 'The polarity of individual bonds, combined with molecular geometry, determines whether a molecule has a net dipole moment.',
      content: {
        textbook: {
          explanation: '<p>A <strong>bond dipole</strong> exists whenever two atoms with different electronegativities form a covalent bond. The bond dipole points from the less electronegative atom (\u03b4+) toward the more electronegative atom (\u03b4\u2212).</p><p>A <strong>molecular dipole moment</strong> is the vector sum of all bond dipoles in the molecule. A molecule can have polar bonds yet be nonpolar overall if the bond dipoles cancel due to symmetry.</p><p>Examples:</p><ul><li><strong>CO\u2082</strong>: Two polar C=O bonds, but linear geometry causes dipoles to cancel. Net dipole = 0 (nonpolar molecule).</li><li><strong>H\u2082O</strong>: Two polar O\u2013H bonds with bent geometry. Dipoles do NOT cancel. Net dipole \u2260 0 (polar molecule).</li><li><strong>CCl\u2084</strong>: Four polar C\u2013Cl bonds in tetrahedral geometry. Dipoles cancel. Net dipole = 0 (nonpolar).</li><li><strong>CHCl\u2083</strong>: One C\u2013H and three C\u2013Cl bonds in tetrahedral geometry. Dipoles do NOT cancel. Net dipole \u2260 0 (polar).</li></ul>',
          keyPoints: [
            'Bond dipoles are vectors pointing from \u03b4+ to \u03b4\u2212.',
            'Molecular polarity = vector sum of all bond dipoles.',
            'Symmetric molecules (e.g., CO\u2082, BF\u2083, CCl\u2084, SF\u2086) can have polar bonds but zero net dipole.',
            'Asymmetric molecules or those with lone pairs often have a net dipole.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Determining molecular polarity',
              body: '<p><strong>Q:</strong> Is NF\u2083 polar or nonpolar?</p><p><strong>A:</strong> NF\u2083 has a trigonal pyramidal geometry (like NH\u2083). Each N\u2013F bond is polar (\u0394EN = 4.0 \u2212 3.0 = 1.0). Because of the pyramidal shape and lone pair on N, the bond dipoles do NOT cancel. NF\u2083 is a <strong>polar molecule</strong> with a net dipole moment.</p>'
            }
          ],
          warnings: [
            'A molecule with all polar bonds can still be nonpolar if the geometry is symmetric enough for dipoles to cancel.',
            'Lone pairs on the central atom often break symmetry and contribute to a net dipole.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Molecular polarity depends on both bond polarity and molecular geometry. Symmetric molecules can be nonpolar despite having polar bonds. Always consider the 3D shape to determine if dipoles cancel.',
          keyPoints: [
            'Bond dipole: \u03b4+ to \u03b4\u2212 direction',
            'Net dipole = vector sum of all bond dipoles',
            'Symmetric geometries often cancel dipoles (linear, trigonal planar, tetrahedral, octahedral)',
            'Lone pairs usually create asymmetry \u2192 polar molecule'
          ],
          formulae: []
        }
      },
      examTips: [
        'A common AP MCQ asks: "Which of the following molecules is nonpolar?" Look for symmetric geometries with identical bonds.',
        'For FRQs, always explain polarity by referencing both bond polarity AND geometry.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 2: VSEPR — molecular geometry determines whether bond dipoles cancel', sec: 'content' },
        { color: 'teal', label: '→ Unit 3: IMFs — polar molecules exhibit dipole-dipole forces; nonpolar molecules rely on LDFs', sec: 'content' }
      ],
      questionIds: ['U2Q003']
    },

    /* =============================================================
       TOPIC 2.2 — Intramolecular Force and Potential Energy
       ============================================================= */

    // U2.2.1 — Bond Energy and Potential Energy
    {
      id: 'U2.2.1',
      code: 'Topic 2.2',
      subtopic: '2.2',
      subtopicTitle: 'Intramolecular Force and Potential Energy',
      section: 'unit2',
      concepts: ['bonding', 'energy'],
      statement: 'A covalent bond forms when the potential energy of the system reaches a minimum at the equilibrium bond length. Breaking bonds requires energy input; forming bonds releases energy.',
      content: {
        textbook: {
          explanation: '<p>When two atoms approach each other, their electron clouds and nuclei interact. At long distances, there is essentially no interaction. As they approach, the attractive forces between the nucleus of one atom and the electrons of the other lower the potential energy. However, at very short distances, the repulsion between the two nuclei (and between the electron clouds) raises the potential energy sharply.</p><p>The <strong>equilibrium bond length</strong> is the distance at which the potential energy is at a <strong>minimum</strong>. This represents the most stable arrangement of the two atoms. The depth of the potential energy well corresponds to the <strong>bond dissociation energy</strong> (bond energy).</p><p>Key principles:</p><ul><li><strong>Bond formation</strong> releases energy (potential energy decreases, exothermic).</li><li><strong>Bond breaking</strong> requires energy input (potential energy increases, endothermic).</li><li>Stronger bonds have deeper potential energy wells and shorter bond lengths.</li><li>The enthalpy change of a reaction can be estimated using bond energies: \u0394H \u2248 \u03a3(bonds broken) \u2212 \u03a3(bonds formed).</li></ul>',
          keyPoints: [
            'The potential energy curve shows a minimum at the equilibrium bond length.',
            'Bond formation is exothermic; bond breaking is endothermic.',
            'Stronger bonds = deeper PE well = shorter bond length = more energy to break.',
            'Triple bonds are stronger and shorter than double bonds, which are stronger and shorter than single bonds (for the same pair of atoms).'
          ],
          formulae: [
            '\\[ \\Delta H_{\\text{rxn}} \\approx \\sum D(\\text{bonds broken}) - \\sum D(\\text{bonds formed}) \\]',
            '\\( D \\) = average bond dissociation energy (kJ/mol)'
          ],
          workedExamples: [
            {
              title: 'Using bond energies to estimate \u0394H',
              body: '<p><strong>Q:</strong> Estimate the enthalpy change for H\u2082(g) + Cl\u2082(g) \u2192 2 HCl(g). Bond energies: H\u2013H = 436 kJ/mol, Cl\u2013Cl = 242 kJ/mol, H\u2013Cl = 431 kJ/mol.</p><p><strong>A:</strong></p><p>Bonds broken: 1 H\u2013H + 1 Cl\u2013Cl = 436 + 242 = 678 kJ</p><p>Bonds formed: 2 H\u2013Cl = 2 \u00d7 431 = 862 kJ</p><p>\u0394H = 678 \u2212 862 = <strong>\u2212184 kJ/mol</strong> (exothermic)</p>'
            }
          ],
          warnings: [
            'Bond energy values are averages. Using them gives an estimate of \u0394H, not an exact value.',
            'The AP exam provides bond energies on the reference table when needed for calculation.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Bonds form at the PE minimum (equilibrium bond length). Bond formation releases energy; bond breaking requires energy. Stronger bonds = deeper well = shorter length.',
          keyPoints: [
            'PE minimum = equilibrium bond length',
            'Bond formation: exothermic; bond breaking: endothermic',
            'Triple > double > single in strength (and shorter)',
            '\u0394H \u2248 \u03a3 D(broken) \u2212 \u03a3 D(formed)'
          ],
          formulae: ['\\[ \\Delta H_{\\text{rxn}} \\approx \\sum D(\\text{broken}) - \\sum D(\\text{formed}) \\]']
        }
      },
      examTips: [
        'The PE curve is a classic AP MCQ topic. Know what each part of the curve represents.',
        'Remember: bond energies always give an estimate. The AP reference table will provide specific values.'
      ],
      connections: [
        { color: 'purple', label: '→ Unit 6: Thermodynamics — bond energy calculations are an alternative to Hess\'s law for estimating \u0394H', sec: 'content' },
        { color: 'purple', label: '→ Unit 5: Kinetics — activation energy relates to the energy needed to break existing bonds before new ones form', sec: 'content' }
      ],
      questionIds: ['U2Q004', 'U2Q005']
    },

    // U2.2.2 — Bond Length and Bond Order
    {
      id: 'U2.2.2',
      code: 'Topic 2.2',
      subtopic: '2.2',
      subtopicTitle: 'Intramolecular Force and Potential Energy',
      section: 'unit2',
      concepts: ['bonding', 'bond-order'],
      statement: 'Bond order (single, double, triple) correlates with bond strength and bond length: higher bond order means a stronger, shorter bond.',
      content: {
        textbook: {
          explanation: '<p><strong>Bond order</strong> describes the number of shared electron pairs between two atoms. A single bond has bond order 1, a double bond has bond order 2, and a triple bond has bond order 3.</p><p>Trends with increasing bond order (for the same pair of atoms):</p><ul><li><strong>Bond length decreases</strong>: More shared electrons pull the nuclei closer together.</li><li><strong>Bond energy increases</strong>: More electron pairs shared means more energy required to break the bond.</li></ul><p>Example comparisons for carbon-carbon bonds:</p><ul><li>C\u2013C (single): bond length \u2248 154 pm, bond energy \u2248 347 kJ/mol</li><li>C=C (double): bond length \u2248 134 pm, bond energy \u2248 614 kJ/mol</li><li>C\u2261C (triple): bond length \u2248 120 pm, bond energy \u2248 839 kJ/mol</li></ul><p>In molecules with <strong>resonance</strong>, the bond order may be fractional. For example, each C\u2013O bond in the carbonate ion (CO\u2083\u00b2\u207b) has a bond order of 4/3 \u2248 1.33, meaning the bonds are intermediate between single and double bonds.</p>',
          keyPoints: [
            'Bond order: single (1) < double (2) < triple (3).',
            'Higher bond order \u2192 shorter bond length.',
            'Higher bond order \u2192 greater bond energy (stronger bond).',
            'Resonance structures can lead to fractional bond orders.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Comparing bond lengths',
              body: '<p><strong>Q:</strong> Rank the following in order of increasing bond length: N\u2261N, N=N, N\u2013N.</p><p><strong>A:</strong> Higher bond order = shorter bond. So: N\u2261N < N=N < N\u2013N (shortest to longest).</p><p>In order of increasing bond length: <strong>N\u2261N < N=N < N\u2013N</strong></p>'
            }
          ],
          warnings: [
            'Do not assume bond length trends hold when comparing bonds between different pairs of atoms. The trend is most reliable when comparing the same two elements.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Bond order = number of shared electron pairs. Higher bond order means shorter and stronger bonds. Resonance can give fractional bond orders.',
          keyPoints: [
            'Triple > double > single in strength',
            'Single > double > triple in length',
            'Resonance gives fractional bond orders'
          ],
          formulae: []
        }
      },
      examTips: [
        'AP MCQ frequently asks you to rank bond lengths. Always consider bond order first.',
        'For resonance species, the actual bond length is intermediate between the contributing structures.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 2: Resonance — resonance leads to delocalization and fractional bond orders', sec: 'content' }
      ],
      questionIds: ['U2Q006']
    },

    /* =============================================================
       TOPIC 2.3 — Structure of Ionic Solids
       ============================================================= */

    // U2.3.1 — Crystal Lattice and Coulomb's Law
    {
      id: 'U2.3.1',
      code: 'Topic 2.3',
      subtopic: '2.3',
      subtopicTitle: 'Structure of Ionic Solids',
      section: 'unit2',
      concepts: ['bonding', 'ionic', 'lattice'],
      statement: 'Ionic compounds form crystal lattices in which each ion is surrounded by ions of opposite charge. Lattice energy depends on ionic charge and ionic radius, as described by Coulomb\'s law.',
      content: {
        textbook: {
          explanation: '<p>In an <strong>ionic solid</strong>, cations and anions are arranged in a repeating three-dimensional pattern called a <strong>crystal lattice</strong>. There are no discrete molecules; instead, each ion is surrounded by and attracted to multiple ions of opposite charge.</p><p>The strength of ionic bonding is quantified by <strong>lattice energy</strong> \u2014 the energy required to completely separate one mole of an ionic solid into its gaseous ions. Lattice energy can be qualitatively predicted using <strong>Coulomb\'s law</strong>:</p><p style="text-align:center;font-size:16px"><em>F \u221d (q\u2081 \u00d7 q\u2082) / r\u00b2</em></p><p>where q\u2081 and q\u2082 are the ionic charges and r is the distance between ion centers (sum of ionic radii).</p><p>Key trends in lattice energy:</p><ul><li><strong>Higher ionic charges</strong> \u2192 greater lattice energy. MgO (Mg\u00b2\u207a and O\u00b2\u207b) has much higher lattice energy than NaCl (Na\u207a and Cl\u207b).</li><li><strong>Smaller ionic radii</strong> \u2192 greater lattice energy. LiF has higher lattice energy than KBr because Li\u207a and F\u207b are smaller ions.</li></ul><p>Physical consequences of the lattice:</p><ul><li><strong>High melting and boiling points</strong>: strong electrostatic forces hold ions tightly.</li><li><strong>Hard and brittle</strong>: ions cannot slide past each other without like charges repelling.</li><li><strong>Conduct electricity when molten or dissolved</strong> (ions become mobile), but NOT as solids.</li></ul>',
          keyPoints: [
            'Ionic solids form extended 3D crystal lattices \u2014 no discrete molecules.',
            'Lattice energy \u221d (q\u2081 \u00d7 q\u2082) / r\u00b2 (Coulomb\'s law).',
            'Higher charges and smaller radii \u2192 higher lattice energy \u2192 higher melting point.',
            'Ionic solids: hard, brittle, high mp/bp, conduct electricity only when molten or in solution.'
          ],
          formulae: [
            '\\[ F \\propto \\frac{q_1 \\times q_2}{r^2} \\]\nCoulomb\'s law for qualitative lattice energy comparison'
          ],
          workedExamples: [
            {
              title: 'Comparing lattice energies',
              body: '<p><strong>Q:</strong> Which has a higher lattice energy: NaCl or MgO?</p><p><strong>A:</strong> MgO has Mg\u00b2\u207a and O\u00b2\u207b (charges of +2 and \u22122), while NaCl has Na\u207a and Cl\u207b (charges of +1 and \u22121). Also, Mg\u00b2\u207a and O\u00b2\u207b are smaller ions than Na\u207a and Cl\u207b. By Coulomb\'s law, both the higher charges and smaller radii give MgO a <strong>much higher lattice energy</strong> (3850 kJ/mol vs. 786 kJ/mol for NaCl).</p>'
            }
          ],
          warnings: [
            'AP does not require calculating exact lattice energies, only qualitative comparisons using Coulomb\'s law.',
            'Brittleness in ionic solids is due to repulsion when like-charged layers shift, not because the bonds are weak.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Ionic solids = 3D crystal lattice of alternating cations and anions. Lattice energy depends on charge magnitude and ionic size (Coulomb\'s law). Higher charges + smaller ions = stronger lattice = higher melting point.',
          keyPoints: [
            'No discrete molecules in ionic solids',
            'Lattice energy \u221d charge product / radius\u00b2',
            'Conduct electricity only when dissolved or molten',
            'Hard, brittle, high mp'
          ],
          formulae: ['\\[ F \\propto \\frac{q_1 q_2}{r^2} \\]']
        }
      },
      examTips: [
        'Coulomb\'s law questions are high-frequency on AP MCQ. Be ready to compare two ionic compounds.',
        'When asked to explain why an ionic solid has a high melting point, always reference "strong electrostatic attractions between oppositely charged ions in the crystal lattice."'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 1: Periodic Trends — ionic radii follow periodic trends: cations smaller than parent atoms; anions larger', sec: 'content' },
        { color: 'teal', label: '→ Unit 3: IMFs and Properties — compare ionic solid properties (high mp) to molecular solid properties (low mp)', sec: 'content' }
      ],
      questionIds: ['U2Q007', 'U2Q008']
    },

    // U2.3.2 — Properties of Ionic Compounds
    {
      id: 'U2.3.2',
      code: 'Topic 2.3',
      subtopic: '2.3',
      subtopicTitle: 'Structure of Ionic Solids',
      section: 'unit2',
      concepts: ['ionic', 'properties'],
      statement: 'The macroscopic properties of ionic compounds \u2014 high melting points, brittleness, and electrical conductivity in solution or when molten \u2014 are direct consequences of the crystal lattice structure.',
      content: {
        textbook: {
          explanation: '<p>The observable properties of ionic compounds can be explained by the arrangement of ions in the crystal lattice:</p><ul><li><strong>High melting and boiling points</strong>: A large amount of energy is needed to overcome the many strong electrostatic attractions holding the lattice together. NaCl melts at 801\u00b0C; MgO melts at 2852\u00b0C.</li><li><strong>Brittleness</strong>: When a force causes one layer of ions to shift relative to another, ions of the same charge come into contact and repel each other, causing the crystal to fracture.</li><li><strong>Electrical conductivity</strong>: In the solid state, ions are locked in place and cannot carry charge \u2192 no conductivity. When melted or dissolved in water, ions become mobile and can carry electrical current.</li><li><strong>Solubility in polar solvents</strong>: Many ionic compounds dissolve in water because the ion-dipole interactions with water molecules can overcome the lattice energy. Not all ionic compounds are water-soluble, however \u2014 lattice energy and hydration energy must be considered.</li></ul>',
          keyPoints: [
            'High mp/bp due to strong electrostatic attractions in the lattice.',
            'Brittle because shifting layers causes like-charge repulsion.',
            'Conduct electricity only when ions are mobile (molten or dissolved).',
            'Many are soluble in water (polar solvent) due to ion-dipole interactions.'
          ],
          formulae: [],
          workedExamples: [],
          warnings: [
            'Not all ionic compounds are soluble in water. Solubility depends on the balance between lattice energy and hydration energy.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Ionic compound properties (high mp, brittle, conducts when melted/dissolved) all stem from the crystal lattice. Ions must be mobile to conduct.',
          keyPoints: [
            'Solid: no conductivity (ions fixed)',
            'Molten/dissolved: conducts (ions mobile)',
            'Brittle: like-charge repulsion when layers shift',
            'High mp because lattice = many strong attractions'
          ],
          formulae: []
        }
      },
      examTips: [
        'FRQ often asks: "Explain why substance X conducts electricity when dissolved but not as a solid." Your answer must mention mobile ions.',
        'Be specific: say "electrostatic attractions between oppositely charged ions," not just "strong bonds."'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 3: Solubility — ion-dipole forces explain dissolution of ionic compounds in polar solvents', sec: 'content' }
      ],
      questionIds: ['U2Q009']
    },

    /* =============================================================
       TOPIC 2.4 — Structure of Metals and Alloys
       ============================================================= */

    // U2.4.1 — Metallic Bonding
    {
      id: 'U2.4.1',
      code: 'Topic 2.4',
      subtopic: '2.4',
      subtopicTitle: 'Structure of Metals and Alloys',
      section: 'unit2',
      concepts: ['bonding', 'metallic'],
      statement: 'In metallic bonding, metal cations are held together by a "sea" of delocalized valence electrons. This model explains the conductivity, malleability, and ductility of metals.',
      content: {
        textbook: {
          explanation: '<p>In a metallic solid, atoms release their valence electrons into a shared "pool" or <strong>sea of electrons</strong>. What remains are positively charged metal cations arranged in a lattice, held together by their mutual attraction to the delocalized electrons that flow freely throughout the structure.</p><p>This model explains key metallic properties:</p><ul><li><strong>Electrical conductivity</strong>: Delocalized electrons are free to move through the metal in response to a potential difference, carrying charge.</li><li><strong>Thermal conductivity</strong>: Mobile electrons transfer kinetic energy efficiently, making metals good heat conductors.</li><li><strong>Malleability and ductility</strong>: When a force is applied, layers of cations can slide past each other without breaking the bonding, because the electron sea can rearrange to maintain the attractive forces. This contrasts with ionic solids, which shatter.</li><li><strong>Luster (shininess)</strong>: Free electrons can absorb and re-emit photons of light at many frequencies.</li></ul><p>Metallic bond strength increases with:</p><ul><li>Greater number of valence electrons contributing to the electron sea.</li><li>Smaller cation radius (higher charge density, stronger attraction to the electron sea).</li></ul>',
          keyPoints: [
            'Metallic bond = cations in a lattice surrounded by a sea of delocalized electrons.',
            'Delocalized electrons explain electrical and thermal conductivity.',
            'Layers can slide \u2192 metals are malleable and ductile (unlike brittle ionic solids).',
            'More valence electrons and smaller cations \u2192 stronger metallic bonding \u2192 higher melting point.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Comparing metallic bond strength',
              body: '<p><strong>Q:</strong> Explain why sodium (Na, mp = 98\u00b0C) has a much lower melting point than magnesium (Mg, mp = 650\u00b0C).</p><p><strong>A:</strong> Mg has 2 valence electrons per atom contributing to the electron sea (vs. 1 for Na), and Mg\u00b2\u207a has a smaller ionic radius and higher charge than Na\u207a. Both factors result in <strong>stronger metallic bonding</strong> and thus a higher melting point.</p>'
            }
          ],
          warnings: [
            'The sea-of-electrons model is a simplification. It does not explain all metallic properties (e.g., the differences between metals in detail), but it is sufficient for AP Chemistry.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Metallic bonding = cation lattice + delocalized electron sea. This explains conductivity (mobile electrons), malleability (layers slide), and luster. Strength increases with more valence electrons and smaller cations.',
          keyPoints: [
            'Sea of delocalized electrons',
            'Conduct electricity and heat',
            'Malleable and ductile (layers slide)',
            'More valence e\u207b + smaller cation \u2192 stronger metallic bond'
          ],
          formulae: []
        }
      },
      examTips: [
        'AP MCQ often contrasts metallic bonding with ionic bonding. Key difference: metals are malleable; ionic solids are brittle.',
        'When explaining conductivity of metals, say "delocalized electrons move freely" \u2014 do not say "ions move."'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 2: Ionic Solids — both metallic and ionic solids have lattice structures but differ in malleability and conductivity', sec: 'content' },
        { color: 'teal', label: '→ Unit 1: Electron Configuration — number of valence electrons determines metallic bond strength', sec: 'content' }
      ],
      questionIds: ['U2Q010']
    },

    // U2.4.2 — Alloys
    {
      id: 'U2.4.2',
      code: 'Topic 2.4',
      subtopic: '2.4',
      subtopicTitle: 'Structure of Metals and Alloys',
      section: 'unit2',
      concepts: ['metallic', 'alloys'],
      statement: 'Alloys are mixtures of metals (or metals with nonmetals) in which atoms of different sizes disrupt the regular lattice, making the material harder and less malleable than the pure metal.',
      content: {
        textbook: {
          explanation: '<p>An <strong>alloy</strong> is a mixture of a metal with one or more other elements (often other metals, but sometimes nonmetals like carbon). The atoms of the added element(s) occupy positions within the metallic lattice.</p><p>Two main types of alloys:</p><ul><li><strong>Substitutional alloy</strong>: Atoms of similar size replace some of the host metal atoms in the lattice. Example: brass (Cu/Zn), where Zn atoms replace some Cu atoms.</li><li><strong>Interstitial alloy</strong>: Smaller atoms fit into the gaps (interstices) between the host metal atoms. Example: steel (Fe/C), where small carbon atoms sit in the spaces between iron atoms.</li></ul><p>In both cases, the different-sized atoms <strong>disrupt the regular arrangement</strong> of the lattice, making it harder for layers to slide past each other. This makes alloys:</p><ul><li>Harder and stronger than the pure metal.</li><li>Less malleable and ductile.</li><li>Still electrically conductive (the electron sea is maintained).</li></ul>',
          keyPoints: [
            'Substitutional alloy: similar-sized atoms replace host atoms.',
            'Interstitial alloy: smaller atoms fit in gaps of the lattice.',
            'Different-sized atoms prevent layers from sliding easily \u2192 harder, less malleable.',
            'Alloys retain electrical conductivity.'
          ],
          formulae: [],
          workedExamples: [],
          warnings: [
            'Alloys are mixtures, not compounds. They do not have a fixed formula.',
            'Steel is the most commonly tested alloy on AP exams. Know that it is an interstitial alloy of iron and carbon.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Alloys = metal mixtures. Substitutional (similar-sized atoms replace) or interstitial (small atoms in gaps). Both types are harder than pure metals because irregularity prevents layer sliding.',
          keyPoints: [
            'Substitutional: same-size swap (brass = Cu+Zn)',
            'Interstitial: small atoms in gaps (steel = Fe+C)',
            'Harder, stronger, less malleable than pure metal',
            'Still conduct electricity'
          ],
          formulae: []
        }
      },
      examTips: [
        'Know the difference between substitutional and interstitial alloys for AP MCQ.',
        'A classic question: "Explain why steel is harder than pure iron." Answer: carbon atoms in interstices prevent layers from sliding.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 2: Metallic Bonding — alloys modify the metallic lattice but retain the electron sea', sec: 'content' }
      ],
      questionIds: ['U2Q011']
    },

    /* =============================================================
       TOPIC 2.5 — Lewis Diagrams
       ============================================================= */

    // U2.5.1 — Drawing Lewis Structures
    {
      id: 'U2.5.1',
      code: 'Topic 2.5',
      subtopic: '2.5',
      subtopicTitle: 'Lewis Diagrams',
      section: 'unit2',
      concepts: ['bonding', 'lewis-structures'],
      statement: 'Lewis diagrams show the arrangement of valence electrons in molecules and polyatomic ions, including bonding pairs and lone pairs, following the octet rule for most atoms.',
      content: {
        textbook: {
          explanation: '<p>A <strong>Lewis diagram</strong> (Lewis structure) is a two-dimensional representation of the valence electron arrangement in a molecule or polyatomic ion. It shows:</p><ul><li><strong>Bonding pairs</strong>: Shared electron pairs drawn as lines (or pairs of dots) between atoms.</li><li><strong>Lone pairs</strong>: Non-bonding electron pairs drawn as dot pairs on individual atoms.</li></ul><p><strong>Steps to draw a Lewis structure:</strong></p><ol><li>Count total valence electrons. For polyatomic ions, add electrons for negative charges or subtract for positive charges.</li><li>Identify the central atom (usually the least electronegative atom that is NOT hydrogen).</li><li>Draw single bonds from the central atom to each surrounding atom. Each bond uses 2 electrons.</li><li>Distribute remaining electrons as lone pairs, starting with outer atoms to satisfy the octet rule.</li><li>If the central atom lacks an octet, convert lone pairs on outer atoms into double or triple bonds.</li></ol><p><strong>The octet rule</strong>: Most atoms (Period 2) seek 8 electrons in their valence shell. Hydrogen is an exception \u2014 it needs only 2 (duet rule).</p>',
          keyPoints: [
            'Count total valence electrons first (adjust for charge in polyatomic ions).',
            'Central atom is typically the least electronegative (not H).',
            'Single bonds first, then distribute lone pairs, then form multiple bonds if needed.',
            'Most Period 2 atoms obey the octet rule; H obeys the duet rule (2 electrons).',
            'Use brackets and charge notation [structure]\u207b for polyatomic ions.'
          ],
          formulae: [
            '\\[ \\text{Total valence } e^- = \\sum (\\text{group numbers}) \\pm \\text{charge} \\]'
          ],
          workedExamples: [
            {
              title: 'Drawing the Lewis structure of CO\u2082',
              body: '<p><strong>Q:</strong> Draw the Lewis structure of CO\u2082.</p><p><strong>A:</strong></p><p>Step 1: Total valence e\u207b = 4 (C) + 6 (O) + 6 (O) = 16</p><p>Step 2: C is the central atom (less electronegative than O).</p><p>Step 3: Draw single bonds: O\u2013C\u2013O uses 4 electrons. Remaining: 12</p><p>Step 4: Place lone pairs on O atoms: each O gets 3 lone pairs (6 e\u207b each), using 12. C has only 4 electrons \u2014 no octet.</p><p>Step 5: Convert one lone pair from each O into a bonding pair: O=C=O. Now C has 8 e\u207b (2 double bonds) and each O has 8 e\u207b (1 double bond + 2 lone pairs).</p><p>Final structure: <strong>:O=C=O:</strong> (with 2 lone pairs on each O)</p>'
            }
          ],
          warnings: [
            'Hydrogen is ALWAYS a terminal atom \u2014 never place H as the central atom.',
            'Don\'t forget to adjust electron count for charges in polyatomic ions.',
            'Period 2 elements (C, N, O, F) cannot exceed an octet. Period 3+ elements can have expanded octets.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Lewis structures show valence electrons as bonding pairs (lines) and lone pairs (dots). Count total valence electrons, place least electronegative atom in center, fill octets starting from outer atoms, then form multiple bonds if central atom needs more electrons.',
          keyPoints: [
            'Count valence e\u207b (\u00b1 charge for ions)',
            'Central atom = least electronegative (not H)',
            'Octet rule for Period 2; duet for H',
            'Multiple bonds form when central atom lacks octet'
          ],
          formulae: ['\\[ \\text{Total valence } e^- = \\sum (\\text{group numbers}) \\pm \\text{charge} \\]']
        }
      },
      examTips: [
        'Lewis structures appear on virtually every AP exam. Practice drawing them quickly and accurately.',
        'FRQs may give partial credit for correct electron count even if the structure has errors.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 2: VSEPR — Lewis structures are the starting point for determining molecular geometry', sec: 'content' },
        { color: 'teal', label: '→ Unit 2: Resonance — some molecules have multiple valid Lewis structures (resonance)', sec: 'content' }
      ],
      questionIds: ['U2Q012', 'U2Q013']
    },

    // U2.5.2 — Exceptions to the Octet Rule
    {
      id: 'U2.5.2',
      code: 'Topic 2.5',
      subtopic: '2.5',
      subtopicTitle: 'Lewis Diagrams',
      section: 'unit2',
      concepts: ['bonding', 'octet-exceptions'],
      statement: 'Some molecules are exceptions to the octet rule: odd-electron species (free radicals), incomplete octets (BF\u2083), and expanded octets (SF\u2086, PCl\u2085).',
      content: {
        textbook: {
          explanation: '<p>While the octet rule is a useful guideline, several categories of molecules do not obey it:</p><ol><li><strong>Odd-electron species (free radicals)</strong>: Molecules with an odd total number of valence electrons cannot have all atoms with complete octets. Examples: NO (11 e\u207b), NO\u2082 (17 e\u207b). These species are paramagnetic and typically reactive.</li><li><strong>Incomplete octets</strong>: Some atoms, particularly <strong>Be</strong> (4 e\u207b) and <strong>B</strong> (6 e\u207b), are stable with fewer than 8 electrons. BF\u2083 has only 6 electrons around boron. These molecules are strong Lewis acids (electron-pair acceptors).</li><li><strong>Expanded octets</strong>: Atoms in <strong>Period 3 and beyond</strong> can accommodate more than 8 electrons because they have accessible d orbitals. Examples: PCl\u2085 (10 e\u207b around P), SF\u2086 (12 e\u207b around S), XeF\u2082 (10 e\u207b around Xe).</li></ol><p>Important rule: <strong>Period 2 elements (C, N, O, F) can NEVER exceed an octet.</strong> They do not have d orbitals available for bonding.</p>',
          keyPoints: [
            'Odd-electron species (radicals): odd total valence electrons, at least one atom lacks an octet.',
            'Incomplete octets: Be (4 e\u207b), B (6 e\u207b) are stable below 8.',
            'Expanded octets: Period 3+ elements can exceed 8 electrons (use d orbitals).',
            'Period 2 elements NEVER exceed an octet.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Lewis structure of PCl\u2085',
              body: '<p><strong>Q:</strong> Draw the Lewis structure of PCl\u2085.</p><p><strong>A:</strong> Total valence e\u207b = 5 (P) + 5 \u00d7 7 (Cl) = 40. P is central. Five P\u2013Cl single bonds use 10 e\u207b. Remaining 30 e\u207b go as lone pairs on the 5 Cl atoms (6 each). P has 10 electrons around it \u2014 an expanded octet, which is allowed because P is in Period 3.</p>'
            }
          ],
          warnings: [
            'The AP exam will NOT ask you to explain why expanded octets occur (d-orbital involvement is debated). Just know which elements can do it.',
            'When multiple valid Lewis structures exist, prefer the one that minimizes formal charges, even if it means an expanded octet on a Period 3+ element.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Octet rule exceptions: (1) radicals (odd e\u207b), (2) incomplete octets (Be, B), (3) expanded octets (Period 3+ elements with >8 e\u207b). Period 2 elements never exceed 8.',
          keyPoints: [
            'Radicals: odd electron count, paramagnetic',
            'B and Be: stable with < 8 e\u207b',
            'P, S, Cl, Xe, etc.: can have expanded octets',
            'C, N, O, F: NEVER exceed octet'
          ],
          formulae: []
        }
      },
      examTips: [
        'AP MCQ may ask "Which of the following can have an expanded octet?" Look for Period 3+ central atoms.',
        'Know common examples: PCl\u2085, SF\u2084, SF\u2086, XeF\u2082, XeF\u2084, ICl\u2085.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 2: VSEPR — expanded octets lead to geometries like trigonal bipyramidal and octahedral', sec: 'content' }
      ],
      questionIds: ['U2Q014']
    },

    /* =============================================================
       TOPIC 2.6 — Resonance and Formal Charge
       ============================================================= */

    // U2.6.1 — Resonance Structures
    {
      id: 'U2.6.1',
      code: 'Topic 2.6',
      subtopic: '2.6',
      subtopicTitle: 'Resonance and Formal Charge',
      section: 'unit2',
      concepts: ['bonding', 'resonance'],
      statement: 'When more than one valid Lewis structure can be drawn for a molecule or ion, the true structure is a resonance hybrid \u2014 a weighted average of the contributing structures, with electrons delocalized over multiple bonds.',
      content: {
        textbook: {
          explanation: '<p><strong>Resonance</strong> occurs when a single Lewis structure cannot accurately represent the electron distribution in a molecule or ion. Instead, two or more <strong>resonance structures</strong> (contributing structures) are drawn, connected by double-headed arrows (\u2194). The actual molecule is a <strong>resonance hybrid</strong> \u2014 a blend of all contributing structures.</p><p>Key features of resonance:</p><ul><li>Resonance structures differ only in the <strong>placement of electrons</strong> (especially \u03c0 bonds and lone pairs). The positions of atoms do NOT change.</li><li>The actual molecule does not "flip" between structures. The hybrid is the true structure at all times.</li><li>Resonance results in <strong>electron delocalization</strong>, which stabilizes the molecule (resonance stabilization energy).</li><li>Bond lengths and bond orders in the hybrid are intermediate between those in the contributing structures.</li></ul><p>Classic examples:</p><ul><li><strong>O\u2083 (ozone)</strong>: Two equivalent resonance structures, each with one O=O and one O\u2013O bond. The hybrid has two equivalent bonds with bond order 1.5.</li><li><strong>CO\u2083\u00b2\u207b (carbonate)</strong>: Three equivalent resonance structures. Each C\u2013O bond has order 4/3 \u2248 1.33.</li><li><strong>NO\u2083\u207b (nitrate)</strong>: Three equivalent resonance structures. Each N\u2013O bond has order 4/3.</li><li><strong>C\u2086H\u2086 (benzene)</strong>: Two major resonance structures with alternating single and double bonds. All C\u2013C bonds are equivalent with bond order 1.5.</li></ul>',
          keyPoints: [
            'Resonance structures differ only in electron placement, not atom positions.',
            'The resonance hybrid is the actual structure \u2014 molecules don\'t oscillate between structures.',
            'Delocalization of electrons stabilizes the molecule.',
            'Bond lengths and orders in the hybrid are intermediate between contributing structures.',
            'Equivalent resonance structures contribute equally to the hybrid.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Resonance in NO\u2083\u207b',
              body: '<p><strong>Q:</strong> Draw all resonance structures of the nitrate ion (NO\u2083\u207b) and determine the bond order of each N\u2013O bond.</p><p><strong>A:</strong> Total valence e\u207b = 5 (N) + 3 \u00d7 6 (O) + 1 (charge) = 24. Three equivalent structures can be drawn, each with one N=O double bond and two N\u2013O single bonds (plus lone pairs to fill octets).</p><p>Since there are 3 equivalent resonance structures and 4 total bond pairs distributed over 3 bonds: bond order = 4/3 \u2248 <strong>1.33</strong>. All three N\u2013O bonds are identical in the hybrid.</p>'
            }
          ],
          warnings: [
            'Resonance is NOT the same as isomers. Resonance structures represent the SAME molecule with different electron arrangements.',
            'Never move atoms when drawing resonance structures \u2014 only move electrons (lone pairs and \u03c0 bonds).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Resonance = multiple valid Lewis structures for the same species, differing only in electron placement. The hybrid is the true structure with delocalized electrons. Bond orders are fractional and all equivalent bonds have the same length.',
          keyPoints: [
            'Only electrons move between resonance structures, not atoms',
            'Hybrid = blend of all structures',
            'Delocalization \u2192 stabilization',
            'Equal structures contribute equally'
          ],
          formulae: []
        }
      },
      examTips: [
        'AP FRQ commonly asks to draw all resonance structures of a polyatomic ion and compare bond lengths.',
        'If asked to compare bond lengths in a resonance-stabilized species vs. a non-resonance molecule, resonance gives intermediate bond lengths.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 2: Bond Order — resonance gives fractional bond orders that explain intermediate bond lengths', sec: 'content' },
        { color: 'purple', label: '→ Unit 6: Thermodynamics — resonance stabilization contributes to the enthalpy of the species', sec: 'content' }
      ],
      questionIds: ['U2Q015']
    },

    // U2.6.2 — Formal Charge
    {
      id: 'U2.6.2',
      code: 'Topic 2.6',
      subtopic: '2.6',
      subtopicTitle: 'Resonance and Formal Charge',
      section: 'unit2',
      concepts: ['bonding', 'formal-charge'],
      statement: 'Formal charge is used to evaluate Lewis structures: the best structure minimizes formal charges on all atoms and places any negative formal charge on the most electronegative atom.',
      content: {
        textbook: {
          explanation: '<p><strong>Formal charge (FC)</strong> is a bookkeeping tool that helps determine which Lewis structure is most favorable. It assigns ownership of electrons by assuming bonds are shared equally:</p><p style="text-align:center;font-size:15px"><em>FC = (valence electrons) \u2212 (lone pair electrons) \u2212 \u00bd(bonding electrons)</em></p><p>Rules for evaluating Lewis structures using formal charge:</p><ol><li><strong>The sum of all formal charges must equal the overall charge</strong> of the molecule or ion.</li><li><strong>Minimize formal charges</strong>: The structure with formal charges closest to zero on all atoms is preferred.</li><li><strong>Negative formal charge on the more electronegative atom</strong>: If formal charges cannot be eliminated, place negative FC on the atom with higher electronegativity.</li><li><strong>Avoid like charges on adjacent atoms</strong>.</li></ol><p>Example: For carbon monoxide (CO), three Lewis structures are possible:</p><ul><li>:C\u2261O: \u2192 FC(C) = \u22121, FC(O) = +1 (the actual structure \u2014 triple bond gives both atoms full octets)</li><li>:C=O: \u2192 FC(C) = 0, FC(O) = 0 but C only has 6 electrons (not valid)</li></ul><p>The triple-bond structure is preferred because it gives both atoms a full octet, even though it places a negative formal charge on carbon (the less electronegative atom). This is an unusual case where the octet rule overrides the FC electronegativity guideline.</p>',
          keyPoints: [
            'FC = valence e\u207b \u2212 lone pair e\u207b \u2212 \u00bd(bonding e\u207b)',
            'Sum of all FCs = overall charge of the species.',
            'Best structure: minimize formal charges.',
            'Place negative FC on the more electronegative atom.',
            'Formal charge is a tool for comparing structures, not a measure of actual charge distribution.'
          ],
          formulae: [
            '\\[ FC = V - L - \\frac{B}{2} \\]\n\\( V \\) = valence \\( e^- \\), \\( L \\) = lone pair \\( e^- \\), \\( B \\) = bonding \\( e^- \\)'
          ],
          workedExamples: [
            {
              title: 'Formal charge calculation in SO\u2082',
              body: '<p><strong>Q:</strong> Calculate the formal charge on each atom in the Lewis structure of SO\u2082 with one S=O double bond and one S\u2013O single bond, and determine if a better structure exists.</p><p><strong>A:</strong> Structure 1: S has 1 double bond + 1 single bond + 1 lone pair.</p><p>FC(S) = 6 \u2212 2 \u2212 \u00bd(6) = 6 \u2212 2 \u2212 3 = +1</p><p>FC(O in double bond) = 6 \u2212 4 \u2212 \u00bd(4) = 6 \u2212 4 \u2212 2 = 0</p><p>FC(O in single bond) = 6 \u2212 6 \u2212 \u00bd(2) = 6 \u2212 6 \u2212 1 = \u22121</p><p>Sum = +1 + 0 + (\u22121) = 0. \u2713</p><p>A better structure has two S=O double bonds (expanded octet on S, which is Period 3): FC(S) = 6 \u2212 2 \u2212 \u00bd(8) = 0 on all atoms. <strong>This structure is preferred</strong> because all FCs are zero.</p>'
            }
          ],
          warnings: [
            'Formal charge does NOT represent actual electron density or partial charge. It is purely a bookkeeping tool.',
            'When an expanded octet on a Period 3+ element reduces formal charges, that structure is generally preferred on the AP exam.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Formal charge = valence e\u207b \u2212 lone pairs \u2212 \u00bd(bonding e\u207b). Best Lewis structure has FCs closest to zero. Negative FC should go on the more electronegative atom. Sum of all FCs = overall charge.',
          keyPoints: [
            'FC = V \u2212 L \u2212 B/2',
            'Minimize FCs to find best structure',
            'Negative FC on more electronegative atom',
            '\u03a3FC = charge of molecule/ion'
          ],
          formulae: ['\\[ FC = V - L - \\frac{B}{2} \\]']
        }
      },
      examTips: [
        'Formal charge calculations appear regularly on AP MCQ. Practice the formula until it is second nature.',
        'When comparing Lewis structures on an FRQ, explicitly state which structure is preferred and why (lower FCs, correct placement).'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 2: Lewis Diagrams — formal charge helps choose between possible Lewis structures', sec: 'content' },
        { color: 'teal', label: '→ Unit 2: Resonance — formal charge can determine which resonance structure contributes more to the hybrid', sec: 'content' }
      ],
      questionIds: ['U2Q016', 'U2Q017']
    },

    /* =============================================================
       TOPIC 2.7 — VSEPR and Bond Hybridization
       ============================================================= */

    // U2.7.1 — VSEPR Theory and Molecular Geometry
    {
      id: 'U2.7.1',
      code: 'Topic 2.7',
      subtopic: '2.7',
      subtopicTitle: 'VSEPR and Bond Hybridization',
      section: 'unit2',
      concepts: ['bonding', 'vsepr', 'geometry'],
      statement: 'VSEPR theory predicts the three-dimensional geometry of a molecule by minimizing electron-pair repulsions around the central atom. Electron geometry and molecular geometry may differ when lone pairs are present.',
      content: {
        textbook: {
          explanation: '<p><strong>Valence Shell Electron Pair Repulsion (VSEPR)</strong> theory states that electron groups (bonding pairs, lone pairs, and multiple bonds count as single groups) around a central atom arrange themselves to minimize repulsion by getting as far apart as possible.</p><p><strong>Electron geometry</strong> considers ALL electron groups (bonding + lone pairs). <strong>Molecular geometry</strong> considers only the arrangement of atoms (ignoring lone pairs).</p><p>Key geometries (by number of electron groups on central atom):</p><table style="width:100%;font-size:13px;border-collapse:collapse"><tr style="background:var(--bg2);font-weight:600"><td style="padding:7px 10px">e\u207b groups</td><td>Bonding</td><td>Lone pairs</td><td>Electron geometry</td><td>Molecular geometry</td><td>Bond angle</td><td>Example</td></tr><tr><td style="padding:7px 10px">2</td><td>2</td><td>0</td><td>Linear</td><td>Linear</td><td>180\u00b0</td><td>CO\u2082, BeCl\u2082</td></tr><tr><td style="padding:7px 10px">3</td><td>3</td><td>0</td><td>Trigonal planar</td><td>Trigonal planar</td><td>120\u00b0</td><td>BF\u2083</td></tr><tr><td style="padding:7px 10px">3</td><td>2</td><td>1</td><td>Trigonal planar</td><td>Bent</td><td><120\u00b0</td><td>SO\u2082, O\u2083</td></tr><tr><td style="padding:7px 10px">4</td><td>4</td><td>0</td><td>Tetrahedral</td><td>Tetrahedral</td><td>109.5\u00b0</td><td>CH\u2084</td></tr><tr><td style="padding:7px 10px">4</td><td>3</td><td>1</td><td>Tetrahedral</td><td>Trigonal pyramidal</td><td><109.5\u00b0</td><td>NH\u2083</td></tr><tr><td style="padding:7px 10px">4</td><td>2</td><td>2</td><td>Tetrahedral</td><td>Bent</td><td><109.5\u00b0</td><td>H\u2082O</td></tr><tr><td style="padding:7px 10px">5</td><td>5</td><td>0</td><td>Trigonal bipyramidal</td><td>Trigonal bipyramidal</td><td>90\u00b0, 120\u00b0</td><td>PCl\u2085</td></tr><tr><td style="padding:7px 10px">5</td><td>4</td><td>1</td><td>Trigonal bipyramidal</td><td>Seesaw</td><td>varies</td><td>SF\u2084</td></tr><tr><td style="padding:7px 10px">5</td><td>3</td><td>2</td><td>Trigonal bipyramidal</td><td>T-shaped</td><td>~90\u00b0</td><td>ClF\u2083</td></tr><tr><td style="padding:7px 10px">5</td><td>2</td><td>3</td><td>Trigonal bipyramidal</td><td>Linear</td><td>180\u00b0</td><td>XeF\u2082</td></tr><tr><td style="padding:7px 10px">6</td><td>6</td><td>0</td><td>Octahedral</td><td>Octahedral</td><td>90\u00b0</td><td>SF\u2086</td></tr><tr><td style="padding:7px 10px">6</td><td>5</td><td>1</td><td>Octahedral</td><td>Square pyramidal</td><td><90\u00b0</td><td>BrF\u2085</td></tr><tr><td style="padding:7px 10px">6</td><td>4</td><td>2</td><td>Octahedral</td><td>Square planar</td><td>90\u00b0</td><td>XeF\u2084</td></tr></table><p><strong>Lone pair effects</strong>: Lone pairs occupy more space than bonding pairs, compressing bond angles slightly below the ideal values.</p>',
          keyPoints: [
            'Count ALL electron groups around central atom (double/triple bonds count as one group).',
            'Electron geometry = arrangement of all electron groups; molecular geometry = arrangement of atoms only.',
            'Lone pairs compress bond angles because they repel more strongly than bonding pairs.',
            'Memorize geometries for 2\u20136 electron groups.',
            'Repulsion order: lone pair\u2013lone pair > lone pair\u2013bonding pair > bonding pair\u2013bonding pair.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Predicting geometry of H\u2082O',
              body: '<p><strong>Q:</strong> Predict the electron geometry and molecular geometry of H\u2082O.</p><p><strong>A:</strong> Lewis structure shows O with 2 bonding pairs (to H) and 2 lone pairs = 4 electron groups total. Electron geometry: <strong>tetrahedral</strong>. Molecular geometry (atoms only): <strong>bent</strong>. Bond angle is less than 109.5\u00b0 (~104.5\u00b0) due to lone pair repulsion.</p>'
            }
          ],
          warnings: [
            'Double and triple bonds count as ONE electron group for VSEPR purposes.',
            'Electron geometry and molecular geometry are the same only when there are NO lone pairs on the central atom.'
          ],
          diagrams: ['vseprShapes']
        },
        studyGuide: {
          essentials: 'VSEPR: electron groups repel and arrange to maximize distance. Electron geometry considers all groups; molecular geometry considers only bonding groups. Lone pairs compress bond angles. Know all geometries for 2-6 electron groups.',
          keyPoints: [
            '2 groups: linear (180\u00b0)',
            '3 groups: trigonal planar (120\u00b0), bent with 1 LP',
            '4 groups: tetrahedral (109.5\u00b0), trig pyramidal (1 LP), bent (2 LPs)',
            '5 groups: trig bipyramidal, seesaw, T-shaped, linear',
            '6 groups: octahedral, square pyramidal, square planar'
          ],
          formulae: []
        }
      },
      examTips: [
        'VSEPR questions are on EVERY AP exam. Know all geometries cold.',
        'Common trap: asking for electron geometry vs. molecular geometry. Read the question carefully.',
        'A multiple bond counts as ONE electron group \u2014 this is a frequently tested concept.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 2: Lewis Diagrams — the Lewis structure is the first step in VSEPR analysis', sec: 'content' },
        { color: 'teal', label: '→ Unit 2: Polarity — molecular geometry determines whether bond dipoles cancel', sec: 'content' },
        { color: 'teal', label: '→ Unit 3: IMFs — molecular shape determines polarity, which determines IMF types', sec: 'content' }
      ],
      questionIds: ['U2Q018', 'U2Q019']
    },

    // U2.7.2 — Hybridization
    {
      id: 'U2.7.2',
      code: 'Topic 2.7',
      subtopic: '2.7',
      subtopicTitle: 'VSEPR and Bond Hybridization',
      section: 'unit2',
      concepts: ['bonding', 'hybridization'],
      statement: 'Hybridization describes the mixing of atomic orbitals to form hybrid orbitals that match the observed molecular geometry. The number of electron groups determines the hybridization: 2 = sp, 3 = sp\u00b2, 4 = sp\u00b3.',
      content: {
        textbook: {
          explanation: '<p><strong>Hybridization</strong> is a model that explains how atomic orbitals (s, p, d) combine to form new <strong>hybrid orbitals</strong> with specific geometries that match the observed bond angles.</p><p>The number of electron groups around the central atom determines the hybridization:</p><ul><li><strong>2 electron groups \u2192 sp hybridization</strong>: One s + one p orbital mix to form 2 sp hybrids at 180\u00b0 (linear). Examples: CO\u2082, C\u2082H\u2082 (acetylene).</li><li><strong>3 electron groups \u2192 sp\u00b2 hybridization</strong>: One s + two p orbitals mix to form 3 sp\u00b2 hybrids at 120\u00b0 (trigonal planar). Examples: BF\u2083, C\u2082H\u2084 (ethylene), O\u2083.</li><li><strong>4 electron groups \u2192 sp\u00b3 hybridization</strong>: One s + three p orbitals mix to form 4 sp\u00b3 hybrids at 109.5\u00b0 (tetrahedral). Examples: CH\u2084, NH\u2083, H\u2082O.</li></ul><p>Important details:</p><ul><li>Lone pairs also occupy hybrid orbitals. NH\u2083 is sp\u00b3 hybridized (4 electron groups) even though the molecular geometry is trigonal pyramidal.</li><li>The number of hybrid orbitals formed always equals the number of atomic orbitals that were mixed.</li><li>Unhybridized p orbitals form \u03c0 bonds in double and triple bonds.</li></ul>',
          keyPoints: [
            '2 e\u207b groups \u2192 sp (linear, 180\u00b0)',
            '3 e\u207b groups \u2192 sp\u00b2 (trigonal planar, 120\u00b0)',
            '4 e\u207b groups \u2192 sp\u00b3 (tetrahedral, 109.5\u00b0)',
            'Lone pairs count as electron groups and occupy hybrid orbitals.',
            'Unhybridized p orbitals form \u03c0 bonds.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Determining hybridization',
              body: '<p><strong>Q:</strong> What is the hybridization of each carbon in CH\u2083CHO (acetaldehyde)?</p><p><strong>A:</strong> The CH\u2083 carbon has 4 electron groups (3 C\u2013H bonds + 1 C\u2013C bond) \u2192 <strong>sp\u00b3</strong>. The CHO carbon has 3 electron groups (1 C\u2013C bond + 1 C\u2013H bond + 1 C=O double bond) \u2192 <strong>sp\u00b2</strong>. The C=O double bond has one \u03c3 bond (from sp\u00b2 hybrid) and one \u03c0 bond (from unhybridized p orbital).</p>'
            }
          ],
          warnings: [
            'The AP exam expects you to determine hybridization from electron group count, not to draw orbital diagrams.',
            'Remember: a double bond = 1 \u03c3 + 1 \u03c0; a triple bond = 1 \u03c3 + 2 \u03c0.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Hybridization = mixing of atomic orbitals. Number of e\u207b groups determines type: 2\u2192sp, 3\u2192sp\u00b2, 4\u2192sp\u00b3. Lone pairs occupy hybrid orbitals. Unhybridized p orbitals form \u03c0 bonds.',
          keyPoints: [
            'sp: 2 groups, linear',
            'sp\u00b2: 3 groups, trigonal planar',
            'sp\u00b3: 4 groups, tetrahedral',
            'Double bond = \u03c3 + \u03c0; triple bond = \u03c3 + 2\u03c0'
          ],
          formulae: []
        }
      },
      examTips: [
        'To determine hybridization quickly: count electron groups on the central atom. 2=sp, 3=sp\u00b2, 4=sp\u00b3.',
        'AP FRQ may ask: "Identify the hybridization of atom X in molecule Y and explain." Always link to the number of electron groups.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 2: VSEPR — hybridization and VSEPR both depend on the number of electron groups', sec: 'content' },
        { color: 'teal', label: '→ Unit 1: Electron Configuration — understanding s, p, d orbitals helps visualize hybridization', sec: 'content' }
      ],
      questionIds: ['U2Q020']
    },

    // U2.7.3 — Sigma and Pi Bonds
    {
      id: 'U2.7.3',
      code: 'Topic 2.7',
      subtopic: '2.7',
      subtopicTitle: 'VSEPR and Bond Hybridization',
      section: 'unit2',
      concepts: ['bonding', 'sigma-pi'],
      statement: 'Sigma (\u03c3) bonds result from head-on orbital overlap and are present in all covalent bonds. Pi (\u03c0) bonds result from side-on overlap of unhybridized p orbitals and are present in double and triple bonds.',
      content: {
        textbook: {
          explanation: '<p>Covalent bonds can be classified by how the orbitals overlap:</p><ul><li><strong>Sigma (\u03c3) bonds</strong>: Formed by head-on (end-to-end) overlap of orbitals. The electron density is concentrated along the internuclear axis. Every single bond is a \u03c3 bond. Sigma bonds allow free rotation around the bond axis.</li><li><strong>Pi (\u03c0) bonds</strong>: Formed by side-on (lateral) overlap of unhybridized p orbitals. The electron density is above and below the internuclear axis. Pi bonds prevent free rotation (which is why double bonds are rigid).</li></ul><p>Bond composition:</p><ul><li><strong>Single bond</strong> = 1 \u03c3</li><li><strong>Double bond</strong> = 1 \u03c3 + 1 \u03c0</li><li><strong>Triple bond</strong> = 1 \u03c3 + 2 \u03c0</li></ul><p>To count \u03c3 and \u03c0 bonds in a molecule, draw the Lewis structure and apply these rules. Example: C\u2082H\u2082 (acetylene, H\u2013C\u2261C\u2013H) has 3 \u03c3 bonds (2 C\u2013H + 1 from the triple bond) and 2 \u03c0 bonds (from the triple bond).</p>',
          keyPoints: [
            '\u03c3 bond: head-on overlap, allows rotation, present in ALL bonds.',
            '\u03c0 bond: side-on overlap of p orbitals, restricts rotation.',
            'Single = 1\u03c3; double = 1\u03c3 + 1\u03c0; triple = 1\u03c3 + 2\u03c0.',
            '\u03c3 bonds are generally stronger than \u03c0 bonds individually (more overlap).',
            'Pi bonds prevent rotation around the bond axis.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Counting \u03c3 and \u03c0 bonds',
              body: '<p><strong>Q:</strong> How many \u03c3 and \u03c0 bonds are in CH\u2082=CHCH\u2083 (propene)?</p><p><strong>A:</strong> Draw the Lewis structure. Bonds: 6 C\u2013H single bonds (6\u03c3), 1 C\u2013C single bond (1\u03c3), 1 C=C double bond (1\u03c3 + 1\u03c0). Total: <strong>8 \u03c3 bonds and 1 \u03c0 bond</strong>.</p>'
            }
          ],
          warnings: [
            'A common mistake is to say a double bond is 2 \u03c3 bonds. It is 1\u03c3 + 1\u03c0.',
            'Pi bonds are weaker individually than sigma bonds, but a double bond (1\u03c3 + 1\u03c0) is stronger overall than a single bond (1\u03c3).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Sigma bonds = head-on overlap, present in every covalent bond. Pi bonds = side-on p-orbital overlap, present in double and triple bonds. \u03c0 bonds prevent rotation.',
          keyPoints: [
            'Single = 1\u03c3',
            'Double = 1\u03c3 + 1\u03c0',
            'Triple = 1\u03c3 + 2\u03c0',
            '\u03c0 bonds restrict rotation'
          ],
          formulae: []
        }
      },
      examTips: [
        'AP MCQ: "How many sigma and pi bonds are in molecule X?" This is a very common question type.',
        'Quick method: total \u03c3 bonds = total number of bonds between atoms (count each connection as 1\u03c3). Total \u03c0 bonds = number of extra bonds from double/triple bonds.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 2: Hybridization — \u03c0 bonds form from unhybridized p orbitals', sec: 'content' },
        { color: 'teal', label: '→ Unit 3: IMFs — restricted rotation from \u03c0 bonds affects molecular shape and therefore IMFs', sec: 'content' }
      ],
      questionIds: ['U2Q021']
    }
  ]
};

window.DB = window.DB || {};
if (!window.DB.u2labs) window.DB.u2labs = [];
