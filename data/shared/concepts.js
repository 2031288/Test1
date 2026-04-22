// Cross-cutting concepts linking topics across all 9 AP Chemistry units
window.DB_CONCEPTS = [
  // ── Big Ideas ──────────────────────────────────────────────────
  {
    id: 'spq',
    name: 'Scale, Proportion, and Quantity (SPQ)',
    description:
      'Relationships between measurable quantities such as moles, mass, volume, and concentration. Stoichiometric reasoning connects macroscopic observations to the particulate level.',
    tags: ['big-idea', 'quantitative', 'stoichiometry'],
    understandingIds: [
      // Unit 1 — moles, mass spectrometry, mixtures, elemental composition
      'U1.1.1', 'U1.1.2', 'U1.2.1', 'U1.3.1', 'U1.3.2', 'U1.4.1', 'U1.4.2',
      // Unit 3 — solutions and gas calculations
      'U3.4.1', 'U3.7.1', 'U3.7.2', 'U3.8.1', 'U3.8.2',
      // Unit 4 — stoichiometry and titration
      'U4.5.1', 'U4.5.2', 'U4.6.1', 'U4.6.2'
    ]
  },
  {
    id: 'sap',
    name: 'Structure and Properties (SAP)',
    description:
      'The structure of atoms and molecules determines physical and chemical properties. Electron configuration, bonding models, and molecular geometry explain macroscopic behavior.',
    tags: ['big-idea', 'structure', 'bonding', 'properties'],
    understandingIds: [
      // Unit 1 — atomic structure, PES, electron config, periodic trends
      'U1.5.1', 'U1.5.2', 'U1.5.3', 'U1.6.1', 'U1.7.1', 'U1.7.2', 'U1.8.1', 'U1.8.2',
      // Unit 2 — bonding, Lewis structures, VSEPR, hybridization
      'U2.1.1', 'U2.2.1', 'U2.3.1', 'U2.4.1', 'U2.5.1', 'U2.6.1', 'U2.7.1', 'U2.7.2',
      // Unit 3 — IMFs and physical properties
      'U3.1.1', 'U3.1.2', 'U3.2.1', 'U3.2.2'
    ]
  },
  {
    id: 'tra',
    name: 'Transformations (TRA)',
    description:
      'Chemical and physical transformations involve rearrangement of atoms and transfer of energy. Reaction types, mechanisms, and kinetics describe how and why transformations occur.',
    tags: ['big-idea', 'reactions', 'kinetics', 'mechanisms'],
    understandingIds: [
      // Unit 4 — reaction types, net ionic, stoichiometry, titration, redox
      'U4.1.1', 'U4.2.1', 'U4.3.1', 'U4.4.1', 'U4.5.1', 'U4.7.1', 'U4.8.1', 'U4.9.1', 'U4.9.3',
      // Unit 5 — rate laws, integrated rate laws, mechanisms, catalysis
      'U5.1.1', 'U5.2.1', 'U5.3.1', 'U5.4.1', 'U5.5.1', 'U5.7.1', 'U5.8.1', 'U5.9.1', 'U5.10.1', 'U5.11.1'
    ]
  },
  {
    id: 'ene',
    name: 'Energy (ENE)',
    description:
      'Energy changes accompany all chemical and physical processes. Enthalpy, entropy, and Gibbs free energy quantify energy flow and predict spontaneity.',
    tags: ['big-idea', 'thermodynamics', 'enthalpy', 'entropy'],
    understandingIds: [
      // Unit 1 — PES and ionization energy
      'U1.6.1',
      // Unit 3 — KMT and phase change energy
      'U3.5.1',
      // Unit 6 — enthalpy, calorimetry, Hess's law, bond enthalpies
      'U6.1.1', 'U6.2.1', 'U6.3.1', 'U6.4.1', 'U6.5.1', 'U6.6.1', 'U6.7.1', 'U6.8.1', 'U6.9.1', 'U6.9.2',
      // Unit 9 — entropy, Gibbs free energy, electrochemistry
      'U9.1.1', 'U9.2.1', 'U9.3.1', 'U9.4.1', 'U9.5.1', 'U9.6.1'
    ]
  },
  {
    id: 'eqn',
    name: 'Equilibrium (EQN)',
    description:
      'Reversible processes reach dynamic equilibrium when forward and reverse rates are equal. Le Chatelier\'s principle predicts shifts, and equilibrium constants quantify position.',
    tags: ['big-idea', 'equilibrium', 'le-chatelier', 'acid-base'],
    understandingIds: [
      // Unit 7 — equilibrium concepts, Keq, ICE, Le Chatelier, Ksp
      'U7.1.1', 'U7.2.1', 'U7.3.1', 'U7.4.1', 'U7.5.1', 'U7.6.1', 'U7.7.1',
      'U7.8.1', 'U7.9.1', 'U7.10.1', 'U7.11.1', 'U7.12.1', 'U7.13.1', 'U7.14.1',
      // Unit 8 — acid-base equilibria, pH, buffers, titrations
      'U8.1.1', 'U8.2.1', 'U8.3.1', 'U8.4.1', 'U8.5.1', 'U8.6.1', 'U8.7.1',
      'U8.8.1', 'U8.9.1', 'U8.10.1'
    ]
  },

  // ── Cross-cutting Concepts ─────────────────────────────────────
  {
    id: 'atomic-structure',
    name: 'Atomic Structure',
    description:
      'The quantum-mechanical model of the atom: electron configurations, orbital shapes, energy levels, and photoelectron spectroscopy evidence.',
    tags: ['cross-cutting', 'atoms', 'electrons', 'quantum'],
    understandingIds: [
      // Unit 1 — electron config, Coulomb's law, PES, quantum model
      'U1.5.1', 'U1.5.2', 'U1.5.3', 'U1.6.1', 'U1.7.1', 'U1.7.2', 'U1.7.3'
    ]
  },
  {
    id: 'periodicity',
    name: 'Periodicity',
    description:
      'Periodic trends in atomic radius, ionization energy, electronegativity, and electron affinity arise from electron configuration patterns.',
    tags: ['cross-cutting', 'periodic-table', 'trends'],
    understandingIds: [
      // Unit 1 — periodic trends and electron configuration
      'U1.7.1', 'U1.7.2', 'U1.7.3', 'U1.8.1', 'U1.8.2'
    ]
  },
  {
    id: 'quantification',
    name: 'Quantification',
    description:
      'Using the mole concept, Avogadro\'s number, molar mass, and dimensional analysis to convert between macroscopic and particulate scales.',
    tags: ['cross-cutting', 'mole', 'calculations', 'stoichiometry'],
    understandingIds: [
      // Unit 1 — moles, mass, mixtures, composition
      'U1.1.1', 'U1.1.2', 'U1.2.1', 'U1.3.1', 'U1.3.2', 'U1.4.1', 'U1.4.2',
      // Unit 3 — solution concentration
      'U3.8.1', 'U3.8.2',
      // Unit 4 — stoichiometry and limiting reagents
      'U4.5.1', 'U4.5.2', 'U4.6.1', 'U4.6.2'
    ]
  },
  {
    id: 'bonding',
    name: 'Bonding',
    description:
      'Ionic, covalent, and metallic bonding models explain how atoms combine. Bond type determines structure, strength, and physical properties.',
    tags: ['cross-cutting', 'ionic', 'covalent', 'metallic'],
    understandingIds: [
      // Unit 2 — all bonding topics: types, Lewis, VSEPR, hybridization
      'U2.1.1', 'U2.2.1', 'U2.3.1', 'U2.4.1', 'U2.5.1', 'U2.6.1', 'U2.7.1', 'U2.7.2'
    ]
  },
  {
    id: 'imfs',
    name: 'Intermolecular Forces',
    description:
      'London dispersion forces, dipole-dipole interactions, and hydrogen bonding govern physical properties such as boiling point, solubility, and viscosity.',
    tags: ['cross-cutting', 'LDF', 'dipole', 'hydrogen-bonding'],
    understandingIds: [
      // Unit 3 — IMFs, physical properties, spectroscopy
      'U3.1.1', 'U3.1.2', 'U3.2.1', 'U3.2.2', 'U3.10.1'
    ]
  }
];
