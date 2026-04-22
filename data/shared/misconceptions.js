// AP Chemistry Misconceptions — All 9 Units
window.DB_MISCONCEPTIONS = [
  // ══════════════════════════════════════════════════════════════
  // UNIT 1 — Atomic Structure and Properties
  // ══════════════════════════════════════════════════════════════

  // ── Topic 1.1  Moles and Molar Mass ─────────────────────────
  {
    id: 'M001',
    understandingId: 'U1.1.1',
    section: 'unit1',
    concepts: ['quantification', 'spq'],
    misconception: 'A mole is a specific mass (e.g., "one mole always weighs 6.022 × 10<sup>23</sup> grams").',
    correction: 'A mole is a fixed NUMBER of particles (6.022 × 10<sup>23</sup>). The mass of one mole differs for every substance and equals its molar mass in grams.',
    why: 'Students conflate the large numerical value of Avogadro\'s number with a mass because both are introduced simultaneously.',
    examRelevance: 'high'
  },
  {
    id: 'M002',
    understandingId: 'U1.1.2',
    section: 'unit1',
    concepts: ['quantification', 'spq'],
    misconception: 'Molar mass and atomic mass are different numbers.',
    correction: 'The molar mass of an element (g/mol) is numerically equal to its average atomic mass (amu). They differ only in units.',
    why: 'Students see amu and g/mol as unrelated because the unit change feels like a conversion rather than a definition.',
    examRelevance: 'high'
  },

  // ── Topic 1.2  Mass Spectrometry ────────────────────────────
  {
    id: 'M003',
    understandingId: 'U1.2.1',
    section: 'unit1',
    concepts: ['quantification', 'atomic-structure'],
    misconception: 'The tallest peak in a mass spectrum is the average atomic mass.',
    correction: 'The tallest peak is the most abundant isotope. The average atomic mass is the weighted average of ALL peaks and often falls between peaks.',
    why: 'Students assume "most common = average" without performing the weighted calculation.',
    examRelevance: 'high'
  },
  {
    id: 'M004',
    understandingId: 'U1.2.1',
    section: 'unit1',
    concepts: ['quantification'],
    misconception: 'Mass spectrum peaks represent different elements.',
    correction: 'For an elemental sample, each peak represents a different isotope of the SAME element, differing only in neutron count.',
    why: 'Students confuse isotopes with elements because both involve mass differences.',
    examRelevance: 'med'
  },

  // ── Topic 1.3  Elemental Composition ────────────────────────
  {
    id: 'M005',
    understandingId: 'U1.3.1',
    section: 'unit1',
    concepts: ['quantification', 'spq'],
    misconception: 'Empirical formula and molecular formula are always the same.',
    correction: 'The empirical formula is the simplest whole-number ratio; the molecular formula may be a whole-number multiple of it (e.g., CH<sub>2</sub>O vs C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>).',
    why: 'Students sometimes skip the step of dividing by the greatest common factor, or forget to check the molar mass ratio.',
    examRelevance: 'high'
  },
  {
    id: 'M006',
    understandingId: 'U1.3.2',
    section: 'unit1',
    concepts: ['quantification'],
    misconception: 'Percent composition by mass equals percent by number of atoms.',
    correction: 'Percent composition is by MASS. A compound with equal numbers of C and O atoms does NOT have 50% C by mass because C and O have different molar masses.',
    why: 'Students treat atom count and mass interchangeably when elements have different atomic masses.',
    examRelevance: 'med'
  },

  // ── Topic 1.4  Compound Composition ─────────────────────────
  {
    id: 'M007',
    understandingId: 'U1.4.1',
    section: 'unit1',
    concepts: ['quantification', 'spq'],
    misconception: 'In a mixture, adding more of one component changes the composition of the compound itself.',
    correction: 'A compound has a fixed composition by the law of definite proportions. Adding more of a reactant may produce more compound or leave excess, but the compound\'s formula stays the same.',
    why: 'Students confuse mixtures (variable composition) with compounds (fixed composition).',
    examRelevance: 'med'
  },
  {
    id: 'M008',
    understandingId: 'U1.4.2',
    section: 'unit1',
    concepts: ['quantification'],
    misconception: 'A hydrate\'s molar mass does not include the water molecules.',
    correction: 'The molar mass of a hydrate includes ALL water molecules of crystallization (e.g., CuSO<sub>4</sub>·5H<sub>2</sub>O = 249.69 g/mol).',
    why: 'Students see the dot notation and treat water as separate rather than part of the formula unit.',
    examRelevance: 'low'
  },

  // ── Topic 1.5  Atomic Structure and Electron Configuration ──
  {
    id: 'M009',
    understandingId: 'U1.5.1',
    section: 'unit1',
    concepts: ['atomic-structure', 'sap'],
    misconception: 'Electrons orbit the nucleus in fixed circular paths like planets.',
    correction: 'Electrons exist in probability clouds (orbitals). Their exact position cannot be determined; only the probability of finding them in a region of space is known.',
    why: 'The Bohr model is taught first and creates a persistent mental image of planetary orbits.',
    examRelevance: 'high'
  },
  {
    id: 'M010',
    understandingId: 'U1.5.2',
    section: 'unit1',
    concepts: ['atomic-structure'],
    misconception: 'Electron configurations always fill orbitals in strict numerical order (1s, 2s, 2p, 3s, 3p, 3d, 4s …).',
    correction: 'The Aufbau order fills by energy: 4s fills before 3d. The correct order is 1s 2s 2p 3s 3p 4s 3d 4p … Transition-metal ions also lose 4s electrons before 3d.',
    why: 'Students assume principal quantum number alone determines energy and forget the n+l rule.',
    examRelevance: 'high'
  },
  {
    id: 'M011',
    understandingId: 'U1.5.3',
    section: 'unit1',
    concepts: ['atomic-structure'],
    misconception: 'Chromium\'s electron configuration is [Ar] 4s<sup>2</sup> 3d<sup>4</sup>.',
    correction: 'Chromium is [Ar] 4s<sup>1</sup> 3d<sup>5</sup> because a half-filled d subshell provides extra stability. Copper similarly is [Ar] 4s<sup>1</sup> 3d<sup>10</sup>.',
    why: 'Students apply the Aufbau principle mechanically without accounting for the stability of half-filled and fully filled subshells.',
    examRelevance: 'high'
  },

  // ── Topic 1.6  Photoelectron Spectroscopy ───────────────────
  {
    id: 'M012',
    understandingId: 'U1.6.1',
    section: 'unit1',
    concepts: ['atomic-structure', 'ene'],
    misconception: 'In a PES spectrum, peaks further to the RIGHT represent core electrons.',
    correction: 'PES spectra plot binding energy on the x-axis (high on the left). Peaks further LEFT (higher binding energy) represent core electrons closer to the nucleus.',
    why: 'Students misread the reversed x-axis, which conventionally decreases from left to right in PES.',
    examRelevance: 'high'
  },
  {
    id: 'M013',
    understandingId: 'U1.6.1',
    section: 'unit1',
    concepts: ['atomic-structure'],
    misconception: 'The height of a PES peak indicates the energy of the electrons.',
    correction: 'Peak height (relative signal intensity) indicates the NUMBER of electrons in that subshell, not their energy. Binding energy is shown on the x-axis.',
    why: 'Students associate "taller = more energy" from other graph types.',
    examRelevance: 'high'
  },

  // ── Topic 1.7  Periodic Trends ──────────────────────────────
  {
    id: 'M014',
    understandingId: 'U1.7.1',
    section: 'unit1',
    concepts: ['periodicity', 'sap'],
    misconception: 'Atomic radius increases across a period because more electrons means a bigger atom.',
    correction: 'Atomic radius DECREASES across a period. More protons increase effective nuclear charge, pulling electrons closer, even though electron count also increases.',
    why: 'Students focus on electron count and ignore the stronger nuclear attraction from added protons in the same shell.',
    examRelevance: 'high'
  },
  {
    id: 'M015',
    understandingId: 'U1.7.2',
    section: 'unit1',
    concepts: ['periodicity', 'ene'],
    misconception: 'Ionization energy always increases smoothly across a period with no exceptions.',
    correction: 'There are dips at Group 13 (removing a lone p electron is easier) and Group 16 (removing a paired p electron is easier due to electron-electron repulsion). The overall trend is increasing, but these exceptions are commonly tested.',
    why: 'Students memorize "IE increases left to right" as an absolute rule without learning the subshell-based exceptions.',
    examRelevance: 'high'
  },

  // ── Topic 1.8  Valence Electrons and Ionic Compounds ────────
  {
    id: 'M016',
    understandingId: 'U1.8.1',
    section: 'unit1',
    concepts: ['bonding', 'periodicity'],
    misconception: 'Transition metals always form +2 ions.',
    correction: 'Many transition metals form multiple oxidation states (e.g., Fe<sup>2</sup><sup>+</sup> and Fe<sup>3</sup><sup>+</sup>). The charge depends on which electrons are removed and the compound context.',
    why: 'Students overgeneralize from the loss of two 4s electrons without considering d-electron involvement.',
    examRelevance: 'med'
  },
  {
    id: 'M017',
    understandingId: 'U1.8.2',
    section: 'unit1',
    concepts: ['bonding', 'imfs'],
    misconception: 'Ionic compounds are made of molecules — each NaCl "molecule" contains one Na and one Cl.',
    correction: 'Ionic compounds form extended crystal lattices, not discrete molecules. The formula NaCl represents the simplest ratio of ions, not a molecular unit.',
    why: 'Students transfer the molecular model from covalent compounds to all compounds.',
    examRelevance: 'high'
  },
  {
    id: 'M018',
    understandingId: 'U1.8.1',
    section: 'unit1',
    concepts: ['bonding', 'atomic-structure'],
    misconception: 'Atoms "want" to have eight electrons — the octet rule is a driving force.',
    correction: 'The octet rule is a useful pattern, not a physical force. Atoms adopt configurations that minimize energy. Many stable species violate the octet rule (e.g., BF<sub>3</sub>, SF<sub>6</sub>, NO).',
    why: 'Anthropomorphizing atoms ("they want a full shell") replaces energy-based reasoning.',
    examRelevance: 'high'
  },

  // ══════════════════════════════════════════════════════════════
  // UNIT 2 — Molecular and Ionic Compound Structure and Properties
  // ══════════════════════════════════════════════════════════════

  // ── Topic 2.1–2.2  Types of Bonds and Potential Energy ──────
  {
    id: 'M019',
    understandingId: 'U2.1.1',
    section: 'unit2',
    concepts: ['bonding', 'imfs', 'sap'],
    misconception: 'Intermolecular forces and intramolecular bonds are the same thing.',
    correction: 'Intramolecular bonds (ionic, covalent, metallic) hold atoms together WITHIN a molecule or compound. Intermolecular forces (LDF, dipole-dipole, H-bonding) are weaker attractions BETWEEN separate molecules. Boiling breaks IMFs, not bonds.',
    why: 'Both concepts involve attractions between particles, and the terminology ("force" vs "bond") is not intuitive to students.',
    examRelevance: 'high'
  },
  {
    id: 'M020',
    understandingId: 'U2.2.1',
    section: 'unit2',
    concepts: ['bonding', 'ene'],
    misconception: 'A double bond is exactly twice as strong as a single bond.',
    correction: 'A double bond is stronger than a single bond but NOT twice as strong. For example, C=C is ~614 kJ/mol while C–C is ~348 kJ/mol (ratio ~1.76). The second bond (pi bond) is weaker than the first (sigma bond) due to less effective orbital overlap.',
    why: 'Students apply simple arithmetic ("double = 2x") without considering that sigma and pi bonds have different strengths.',
    examRelevance: 'med'
  },

  // ── Topic 2.5–2.6  Lewis Diagrams and Resonance ─────────────
  {
    id: 'M021',
    understandingId: 'U2.7.1',
    section: 'unit2',
    concepts: ['bonding', 'sap'],
    misconception: 'VSEPR geometry depends only on bonding pairs; lone pairs can be ignored.',
    correction: 'Lone pairs occupy space and repel bonding pairs. They must be included when determining electron geometry. Molecular geometry differs from electron geometry when lone pairs are present (e.g., H<sub>2</sub>O is bent, not linear, because of two lone pairs on O).',
    why: 'Students count only bonds in Lewis structures and forget that unshared electron pairs affect the shape.',
    examRelevance: 'high'
  },
  {
    id: 'M022',
    understandingId: 'U2.7.2',
    section: 'unit2',
    concepts: ['bonding', 'sap'],
    misconception: 'Any molecule with polar bonds must be a polar molecule.',
    correction: 'Molecular polarity depends on both bond polarity AND molecular geometry. Symmetric arrangements of polar bonds (e.g., CO<sub>2</sub>, CCl<sub>4</sub>, BF<sub>3</sub>) cancel out, producing a nonpolar molecule despite having polar bonds.',
    why: 'Students equate bond-level polarity with molecule-level polarity without considering vector addition of dipole moments.',
    examRelevance: 'high'
  },

  // ── Additional Unit 2 ────────────────────────────────────────
  {
    id: 'M051',
    understandingId: 'U2.5.1',
    section: 'unit2',
    concepts: ['bonding', 'sap'],
    misconception: 'When drawing Lewis structures, students forget to count total valence electrons correctly — especially for polyatomic ions.',
    correction: 'Total valence electrons = sum of all atoms\' valence electrons, PLUS one for each negative charge, MINUS one for each positive charge. For example, NO<sub>3</sub><sup>−</sup> has 5 + 3(6) + 1 = 24 valence electrons.',
    why: 'Students either forget the charge adjustment or miscount valence electrons for atoms beyond the second period.',
    examRelevance: 'high'
  },
  {
    id: 'M052',
    understandingId: 'U2.6.1',
    section: 'unit2',
    concepts: ['bonding', 'sap'],
    misconception: 'Resonance structures represent different molecules that interconvert.',
    correction: 'Resonance structures are different Lewis representations of the SAME molecule. The actual molecule is a resonance hybrid — a weighted average of all contributing structures. Electrons are delocalized, not flipping between positions.',
    why: 'The use of double-headed arrows between structures suggests back-and-forth switching, but the molecule has a single, blended structure at all times.',
    examRelevance: 'high'
  },

  // ══════════════════════════════════════════════════════════════
  // UNIT 3 — Intermolecular Forces and Properties
  // ══════════════════════════════════════════════════════════════

  // ── Topic 3.1–3.2  IMF Types and Physical Properties ────────
  {
    id: 'M023',
    understandingId: 'U3.1.1',
    section: 'unit3',
    concepts: ['imfs', 'sap'],
    misconception: 'Hydrogen bonding is a type of covalent bond within a molecule.',
    correction: 'Hydrogen bonding is an INTERMOLECULAR force — an especially strong dipole-dipole attraction between an H bonded to F, O, or N and a lone pair on F, O, or N of a neighboring molecule. It is NOT a covalent bond.',
    why: 'The word "bond" in "hydrogen bond" misleads students into categorizing it with intramolecular bonds.',
    examRelevance: 'high'
  },
  {
    id: 'M024',
    understandingId: 'U3.2.1',
    section: 'unit3',
    concepts: ['imfs', 'sap'],
    misconception: 'All solids have a crystalline structure with a regular repeating lattice.',
    correction: 'Solids can be crystalline (ordered lattice, e.g., NaCl, diamond) or amorphous (disordered, e.g., glass, rubber). Amorphous solids lack long-range order and do not have sharp melting points.',
    why: 'Unit coverage emphasizes crystal lattices, leading students to overgeneralize to all solids.',
    examRelevance: 'low'
  },

  // ── Topic 3.5–3.7  Gases and Ideal Gas Law ─────────────────
  {
    id: 'M025',
    understandingId: 'U3.7.1',
    section: 'unit3',
    concepts: ['imfs', 'spq'],
    misconception: 'Gases behave most ideally at low temperature and high pressure.',
    correction: 'Gases behave most ideally at HIGH temperature and LOW pressure. Under these conditions, gas particles are far apart (minimal IMFs) and moving fast (kinetic energy >> attractive forces).',
    why: 'Students reverse the conditions, confusing "ideal" with "easy to compress" or conflating real-gas corrections with ideal behavior.',
    examRelevance: 'high'
  },
  {
    id: 'M026',
    understandingId: 'U3.7.2',
    section: 'unit3',
    concepts: ['imfs', 'spq'],
    misconception: 'In PV = nRT, any units for P, V, and T will give the correct answer.',
    correction: 'When using R = 0.0821 L·atm/(mol·K), pressure must be in atm, volume in liters, and temperature in Kelvin. Using °C, mL, or torr without converting will produce wrong answers.',
    why: 'Students plug in numbers without checking unit consistency, especially forgetting the °C to K conversion.',
    examRelevance: 'high'
  },

  // ── Additional Unit 3 ────────────────────────────────────────
  {
    id: 'M053',
    understandingId: 'U3.2.2',
    section: 'unit3',
    concepts: ['imfs', 'sap'],
    misconception: 'Boiling point depends only on molar mass — heavier molecules always have higher boiling points.',
    correction: 'Boiling point depends primarily on the TYPE and STRENGTH of intermolecular forces (H-bonding > dipole-dipole > LDF), not just molar mass. Water (M = 18) boils at 100°C while diethyl ether (M = 74) boils at only 35°C because water has strong hydrogen bonding.',
    why: 'Students over-rely on the correlation between molar mass and LDF strength without considering that H-bonding and dipole-dipole interactions can dominate.',
    examRelevance: 'high'
  },
  {
    id: 'M054',
    understandingId: 'U3.3.1',
    section: 'unit3',
    concepts: ['imfs', 'sap'],
    misconception: 'Intermolecular forces and intramolecular bonds are broken during boiling.',
    correction: 'Boiling breaks only INTERMOLECULAR forces (attractions between molecules). Intramolecular bonds (covalent bonds within molecules) remain intact. When water boils, O–H covalent bonds do NOT break — only the hydrogen bonds between water molecules are overcome.',
    why: 'Students conflate the energy needed to separate molecules (phase change) with the energy needed to break chemical bonds (decomposition).',
    examRelevance: 'high'
  },

  // ══════════════════════════════════════════════════════════════
  // UNIT 4 — Chemical Reactions
  // ══════════════════════════════════════════════════════════════

  // ── Topic 4.1–4.2  Reaction Types and Net Ionic Equations ───
  {
    id: 'M027',
    understandingId: 'U4.2.1',
    section: 'unit4',
    concepts: ['bonding', 'tra'],
    misconception: 'All ions present in solution should appear in the net ionic equation.',
    correction: 'Spectator ions (those unchanged on both sides) are removed. The net ionic equation shows ONLY the species that undergo a chemical change — forming a precipitate, water, or a gas.',
    why: 'Students write the complete ionic equation and forget or skip the cancellation step.',
    examRelevance: 'high'
  },
  {
    id: 'M028',
    understandingId: 'U4.5.1',
    section: 'unit4',
    concepts: ['quantification', 'spq'],
    misconception: 'The limiting reagent is always the reactant with the smallest mass or fewest moles.',
    correction: 'The limiting reagent is the reactant that produces the LEAST amount of product when its moles are compared using stoichiometric ratios. A reactant can have fewer grams but still be in excess if the stoichiometry requires less of it.',
    why: 'Students compare raw masses or moles without dividing by the stoichiometric coefficients.',
    examRelevance: 'high'
  },
  {
    id: 'M029',
    understandingId: 'U4.5.2',
    section: 'unit4',
    concepts: ['quantification', 'tra'],
    misconception: 'You can use unbalanced equations for stoichiometric calculations.',
    correction: 'Mole ratios come from the BALANCED equation coefficients. Using an unbalanced equation gives incorrect mole ratios and wrong answers for mass/volume/moles of products or reactants.',
    why: 'Students rush to plug in numbers and skip the essential first step of balancing.',
    examRelevance: 'high'
  },

  // ── Topic 4.7–4.9  Oxidation-Reduction and Titration ────────
  {
    id: 'M030',
    understandingId: 'U4.9.1',
    section: 'unit4',
    concepts: ['tra', 'quantification'],
    misconception: 'In a redox reaction, the species that gains electrons is oxidized.',
    correction: 'The species that GAINS electrons is REDUCED (its oxidation state decreases). The species that LOSES electrons is OXIDIZED. Remember: OIL RIG — Oxidation Is Loss, Reduction Is Gain.',
    why: 'The terminology is counterintuitive: "gaining" something feels like it should be called the opposite of "reduction."',
    examRelevance: 'high'
  },

  // ── Additional Unit 4 ────────────────────────────────────────
  {
    id: 'M055',
    understandingId: 'U4.7.1',
    section: 'unit4',
    concepts: ['tra'],
    misconception: 'Oxidation numbers follow the same rules as ionic charges for all compounds.',
    correction: 'Oxidation numbers are assigned by a set of rules (e.g., O is usually −2, H is usually +1) and can be fractional or unusual in certain compounds. They are a bookkeeping tool, not actual charges. For example, Fe in Fe<sub>3</sub>O<sub>4</sub> has an average oxidation state of +8/3.',
    why: 'Students treat oxidation numbers as real ionic charges rather than formal assignments used to track electron transfer.',
    examRelevance: 'med'
  },
  {
    id: 'M056',
    understandingId: 'U4.2.2',
    section: 'unit4',
    concepts: ['tra', 'quantification'],
    misconception: 'Spectator ions participate in the reaction and must be included in the net ionic equation.',
    correction: 'Spectator ions appear identically on both sides of the complete ionic equation and do NOT participate in the reaction. They are removed to give the net ionic equation, which shows only the species that actually undergo chemical change.',
    why: 'Students write the full ionic equation but do not cancel species that appear on both sides, or they confuse spectator ions with reactants.',
    examRelevance: 'high'
  },

  // ══════════════════════════════════════════════════════════════
  // UNIT 5 — Kinetics
  // ══════════════════════════════════════════════════════════════

  // ── Topic 5.1–5.3  Reaction Rates and Rate Laws ─────────────
  {
    id: 'M031',
    understandingId: 'U5.1.1',
    section: 'unit5',
    concepts: ['tra'],
    misconception: 'The order of a reaction with respect to a reactant equals its stoichiometric coefficient.',
    correction: 'Reaction order is determined EXPERIMENTALLY from rate data, not from the balanced equation (unless the reaction is an elementary step). For example, 2A → products does not necessarily mean rate = k[A]<sup>2</sup>.',
    why: 'Students assume the balanced equation directly gives the rate law, which is only true for elementary steps.',
    examRelevance: 'high'
  },
  {
    id: 'M032',
    understandingId: 'U5.8.1',
    section: 'unit5',
    concepts: ['tra', 'ene'],
    misconception: 'A higher activation energy means a faster reaction.',
    correction: 'A HIGHER activation energy means FEWER molecules have enough energy to react, so the reaction is SLOWER. Lower Ea = faster reaction, all else being equal.',
    why: 'Students confuse "more energy" with "more activity," reversing the relationship between Ea and rate.',
    examRelevance: 'high'
  },
  {
    id: 'M033',
    understandingId: 'U5.9.1',
    section: 'unit5',
    concepts: ['tra', 'eqn'],
    misconception: 'A catalyst changes the equilibrium position or shifts equilibrium toward products.',
    correction: 'A catalyst speeds up BOTH the forward and reverse reactions equally by lowering the activation energy. It does NOT change the equilibrium constant K or shift the equilibrium position; it only helps the system reach equilibrium faster.',
    why: 'Students see "catalyst speeds up the reaction" and assume it favors the forward direction.',
    examRelevance: 'high'
  },
  {
    id: 'M034',
    understandingId: 'U5.4.1',
    section: 'unit5',
    concepts: ['tra'],
    misconception: 'The rate-determining step is always the first step of a mechanism.',
    correction: 'The rate-determining step is the SLOWEST step, which can occur at any point in the mechanism. The overall rate law is determined by all steps up to and including the slow step.',
    why: 'Students assume sequential = first is slowest, rather than identifying the step with the highest activation energy.',
    examRelevance: 'med'
  },

  // ── Additional Unit 5 ────────────────────────────────────────
  {
    id: 'M057',
    understandingId: 'U5.2.1',
    section: 'unit5',
    concepts: ['tra'],
    misconception: 'The rate constant k changes when the concentration of a reactant changes.',
    correction: 'The rate constant k depends only on TEMPERATURE (and the presence of a catalyst). Changing concentration changes the rate, but NOT k. Only changing temperature (or adding a catalyst) changes k, as described by the Arrhenius equation.',
    why: 'Students see rate = k[A]^n and assume that since rate changes with [A], k must also change. They confuse the constant with the variable.',
    examRelevance: 'high'
  },
  {
    id: 'M058',
    understandingId: 'U5.1.2',
    section: 'unit5',
    concepts: ['tra'],
    misconception: 'Reaction order can be determined from the balanced equation coefficients.',
    correction: 'Reaction order must be determined EXPERIMENTALLY (e.g., from initial rate data or integrated rate law plots), UNLESS the reaction is a single elementary step. For multi-step mechanisms, the overall balanced equation does NOT give the rate law.',
    why: 'Students conflate stoichiometric coefficients with orders because elementary step rate laws do use coefficients, and they overgeneralize this to all reactions.',
    examRelevance: 'high'
  },

  // ══════════════════════════════════════════════════════════════
  // UNIT 6 — Thermodynamics
  // ══════════════════════════════════════════════════════════════

  // ── Topic 6.1–6.3  Endothermic/Exothermic and Enthalpy ──────
  {
    id: 'M035',
    understandingId: 'U6.1.1',
    section: 'unit6',
    concepts: ['ene'],
    misconception: 'Heat and temperature are the same thing.',
    correction: 'Heat (q) is the TRANSFER of thermal energy between objects, measured in joules. Temperature is a measure of the AVERAGE kinetic energy of particles. A large body of cool water can contain more thermal energy than a small spark at high temperature.',
    why: 'In everyday language, "heat" and "temperature" are used interchangeably, but they are distinct thermodynamic quantities.',
    examRelevance: 'high'
  },
  {
    id: 'M036',
    understandingId: 'U6.4.1',
    section: 'unit6',
    concepts: ['ene'],
    misconception: 'In calorimetry, q<sub>reaction</sub> and q<sub>calorimeter</sub> have the same sign.',
    correction: 'By conservation of energy, q<sub>rxn</sub> = −q<sub>cal</sub>. If the solution temperature rises (q<sub>cal</sub> > 0), the reaction released heat (q<sub>rxn</sub> < 0, exothermic). The signs are always opposite.',
    why: 'Students calculate q = mcΔT for the solution and report that value as the enthalpy of reaction without flipping the sign.',
    examRelevance: 'high'
  },
  {
    id: 'M037',
    understandingId: 'U6.5.1',
    section: 'unit6',
    concepts: ['ene', 'bonding'],
    misconception: 'Breaking bonds releases energy.',
    correction: 'Breaking bonds ALWAYS requires energy (endothermic). Forming bonds ALWAYS releases energy (exothermic). A reaction is exothermic overall only when the energy released by forming new bonds exceeds the energy required to break old bonds.',
    why: 'Students see exothermic reactions releasing energy and incorrectly attribute the energy release to the bond-breaking step rather than the bond-forming step.',
    examRelevance: 'high'
  },
  {
    id: 'M038',
    understandingId: 'U6.7.1',
    section: 'unit6',
    concepts: ['ene'],
    misconception: 'Hess\'s law only works if you know the exact mechanism of the reaction.',
    correction: 'Hess\'s law states that enthalpy change depends only on the initial and final states, NOT the pathway. You can add any combination of reactions (even hypothetical ones) as long as they sum to the target reaction. The mechanism is irrelevant.',
    why: 'Students confuse the idea of "steps" in Hess\'s law with mechanistic steps, not realizing the steps are mathematical constructs.',
    examRelevance: 'med'
  },

  // ── Additional Unit 6 ────────────────────────────────────────
  {
    id: 'M059',
    understandingId: 'U6.5.2',
    section: 'unit6',
    concepts: ['ene', 'bonding'],
    misconception: 'An exothermic reaction means the system gains energy.',
    correction: 'In an exothermic reaction, the SYSTEM loses energy (releases heat to the surroundings), so ΔH < 0. The SURROUNDINGS gain energy. Students must keep the sign convention straight: negative ΔH = energy flows OUT of the system.',
    why: 'Students confuse the system with the surroundings. When they feel heat from a reaction, they think the system gained energy rather than lost it.',
    examRelevance: 'high'
  },
  {
    id: 'M060',
    understandingId: 'U6.5.1',
    section: 'unit6',
    concepts: ['ene', 'bonding'],
    misconception: 'Energy is stored in bonds, and breaking bonds releases that stored energy.',
    correction: 'Bonds represent a LOWER energy state. Breaking a bond requires an INPUT of energy (endothermic). Energy is released when NEW bonds FORM (exothermic). A reaction is exothermic overall only when more energy is released forming products than is consumed breaking reactants.',
    why: 'The phrase "energy stored in bonds" is common in everyday language and misleads students into thinking bond breaking is the energy-releasing step.',
    examRelevance: 'high'
  },

  // ══════════════════════════════════════════════════════════════
  // UNIT 7 — Equilibrium
  // ══════════════════════════════════════════════════════════════

  // ── Topic 7.1–7.3  Equilibrium and K ────────────────────────
  {
    id: 'M039',
    understandingId: 'U7.1.1',
    section: 'unit7',
    concepts: ['eqn'],
    misconception: 'At equilibrium, the concentrations of reactants and products are equal.',
    correction: 'Equilibrium means the RATES of the forward and reverse reactions are equal, NOT the concentrations. Equilibrium concentrations depend on K: if K >> 1, products dominate; if K << 1, reactants dominate.',
    why: 'The word "equilibrium" suggests "equal," and students extend this to concentrations rather than rates.',
    examRelevance: 'high'
  },
  {
    id: 'M040',
    understandingId: 'U7.3.1',
    section: 'unit7',
    concepts: ['eqn', 'tra'],
    misconception: 'Adding a catalyst shifts the equilibrium toward products.',
    correction: 'A catalyst lowers the activation energy for BOTH the forward and reverse reactions equally. It helps the system reach equilibrium faster but does NOT change the value of K or the equilibrium concentrations.',
    why: 'This misconception is reinforced by the Unit 5 version; students often carry it into equilibrium problems.',
    examRelevance: 'high'
  },

  // ── Topic 7.5–7.8  Q vs K and Le Chatelier's Principle ─────
  {
    id: 'M041',
    understandingId: 'U7.5.1',
    section: 'unit7',
    concepts: ['eqn'],
    misconception: 'Q and K are the same thing and can be used interchangeably.',
    correction: 'K is the equilibrium constant (fixed at a given temperature). Q is the reaction quotient calculated from CURRENT concentrations, which may or may not be at equilibrium. Comparing Q to K tells you which direction the reaction will shift: Q < K → forward; Q > K → reverse; Q = K → at equilibrium.',
    why: 'Both Q and K use the same mathematical expression, so students treat them as identical without recognizing that Q applies to any set of conditions.',
    examRelevance: 'high'
  },
  {
    id: 'M042',
    understandingId: 'U7.8.1',
    section: 'unit7',
    concepts: ['eqn'],
    misconception: 'Adding an inert gas at constant volume shifts the equilibrium.',
    correction: 'Adding an inert gas at constant VOLUME does NOT change the partial pressures or concentrations of reactants/products, so there is no shift. (Adding inert gas at constant PRESSURE would change the volume and could cause a shift if Δn<sub>gas</sub> ≠ 0.)',
    why: 'Students assume any change to the system must cause a Le Chatelier shift, without checking whether partial pressures actually changed.',
    examRelevance: 'high'
  },

  // ── Additional Unit 7 ────────────────────────────────────────
  {
    id: 'M061',
    understandingId: 'U7.6.1',
    section: 'unit7',
    concepts: ['eqn'],
    misconception: 'Changing temperature does not affect the equilibrium constant K.',
    correction: 'Temperature is the ONLY factor that changes K. For an exothermic reaction, increasing temperature decreases K (shifts toward reactants). For an endothermic reaction, increasing temperature increases K (shifts toward products). Changes in concentration, pressure, or catalysts do NOT change K.',
    why: 'Students learn that K is a "constant" and overgeneralize, not realizing it is constant only at a fixed temperature.',
    examRelevance: 'high'
  },
  {
    id: 'M062',
    understandingId: 'U7.2.1',
    section: 'unit7',
    concepts: ['eqn'],
    misconception: 'Pure solids and liquids should be included in the equilibrium expression.',
    correction: 'Pure solids and pure liquids are excluded from the equilibrium expression because their concentrations (densities) are constant and are incorporated into the value of K. Only aqueous species and gases appear in Kc or Kp.',
    why: 'Students mechanically include every species from the balanced equation in the K expression without applying the exclusion rule for pure condensed phases.',
    examRelevance: 'high'
  },

  // ══════════════════════════════════════════════════════════════
  // UNIT 8 — Acids and Bases
  // ══════════════════════════════════════════════════════════════

  // ── Topic 8.1–8.3  Acid-Base Definitions and pH ─────────────
  {
    id: 'M043',
    understandingId: 'U8.1.1',
    section: 'unit8',
    concepts: ['eqn'],
    misconception: 'A strong acid is the same thing as a concentrated acid.',
    correction: 'Strength refers to the DEGREE of dissociation: strong acids dissociate completely (e.g., HCl → H<sup>+</sup> + Cl<sup>−</sup>). Concentration refers to the AMOUNT of acid per unit volume. You can have a dilute solution of a strong acid (e.g., 0.001 M HCl) or a concentrated solution of a weak acid (e.g., 6 M acetic acid).',
    why: 'In everyday language, "strong" and "concentrated" are synonyms, but in chemistry they describe fundamentally different properties.',
    examRelevance: 'high'
  },
  {
    id: 'M044',
    understandingId: 'U8.4.1',
    section: 'unit8',
    concepts: ['eqn'],
    misconception: 'Ka and Kb of a conjugate acid-base pair are unrelated.',
    correction: 'For any conjugate acid-base pair, Ka × Kb = Kw = 1.0 × 10<sup>−</sup><sup>14</sup> at 25°C. A stronger acid (larger Ka) always has a weaker conjugate base (smaller Kb), and vice versa.',
    why: 'Students treat Ka and Kb as independent values rather than recognizing the inverse relationship through Kw.',
    examRelevance: 'high'
  },

  // ── Topic 8.6–8.8  Buffers and Titration Curves ─────────────
  {
    id: 'M045',
    understandingId: 'U8.7.1',
    section: 'unit8',
    concepts: ['eqn'],
    misconception: 'The Henderson-Hasselbalch equation works for any acid-base solution.',
    correction: 'Henderson-Hasselbalch (pH = pKa + log[A<sup>−</sup>]/[HA]) is valid only for BUFFER solutions where both the weak acid and its conjugate base are present in significant amounts. It fails for strong acids/bases, very dilute solutions, and at points far from the buffer region in a titration.',
    why: 'Students memorize the formula as a universal pH tool without understanding the buffer assumption behind it.',
    examRelevance: 'high'
  },
  {
    id: 'M046',
    understandingId: 'U8.9.1',
    section: 'unit8',
    concepts: ['eqn'],
    misconception: 'The equivalence point in a titration is always at pH 7.',
    correction: 'pH 7 at the equivalence point occurs ONLY for a strong acid + strong base titration. For weak acid + strong base, the equivalence point is ABOVE 7 (basic, because the conjugate base hydrolyzes). For strong acid + weak base, it is BELOW 7.',
    why: 'Students confuse "neutral" with "equivalence point" and assume complete neutralization always gives pH 7.',
    examRelevance: 'high'
  },

  // ── Additional Unit 8 ────────────────────────────────────────
  {
    id: 'M063',
    understandingId: 'U8.3.1',
    section: 'unit8',
    concepts: ['eqn'],
    misconception: 'pH 7 is always neutral, regardless of temperature.',
    correction: 'pH 7 is neutral only at 25°C where Kw = 1.0 × 10<sup>−</sup><sup>14</sup>. At higher temperatures, Kw increases (water dissociates more), so neutral pH drops below 7. Neutral always means [H<sup>+</sup>] = [OH<sup>−</sup>], but the pH at which this occurs is temperature-dependent.',
    why: 'Students memorize "neutral = pH 7" as an absolute fact rather than understanding it comes from Kw at 25°C.',
    examRelevance: 'med'
  },
  {
    id: 'M064',
    understandingId: 'U8.2.1',
    section: 'unit8',
    concepts: ['eqn'],
    misconception: 'A weak acid cannot have a lower pH than a strong acid.',
    correction: 'A CONCENTRATED weak acid can have a lower pH than a DILUTE strong acid. For example, 10 M acetic acid (pH ≈ 1.9) has a lower pH than 0.001 M HCl (pH = 3). Acid strength and concentration independently affect pH.',
    why: 'Students conflate strength (degree of dissociation) with concentration (amount dissolved), assuming strong always means lower pH.',
    examRelevance: 'high'
  },

  // ══════════════════════════════════════════════════════════════
  // UNIT 9 — Applications of Thermodynamics
  // ══════════════════════════════════════════════════════════════

  // ── Topic 9.1–9.3  Entropy and Gibbs Free Energy ────────────
  {
    id: 'M047',
    understandingId: 'U9.1.1',
    section: 'unit9',
    concepts: ['ene'],
    misconception: 'A spontaneous reaction must be fast.',
    correction: 'Spontaneity (ΔG < 0) means a reaction is thermodynamically FAVORABLE — it says nothing about speed. Diamond converting to graphite is spontaneous but takes geological timescales. Kinetics (activation energy) controls speed; thermodynamics controls favorability.',
    why: 'The everyday meaning of "spontaneous" implies "happens immediately," which does not apply to the thermodynamic definition.',
    examRelevance: 'high'
  },
  {
    id: 'M048',
    understandingId: 'U9.5.1',
    section: 'unit9',
    concepts: ['ene'],
    misconception: 'In the equation ΔG° = −nFE°, students confuse the signs or mix up which variable is positive for a spontaneous reaction.',
    correction: 'For a spontaneous (galvanic) cell: E°<sub>cell</sub> > 0 and ΔG° < 0. The negative sign in ΔG° = −nFE° ensures this: a positive E° multiplied by −nF gives a negative ΔG°. If E°<sub>cell</sub> is negative, ΔG° is positive and the reaction is non-spontaneous.',
    why: 'The negative sign in the equation combined with the sign conventions for E° and ΔG° creates frequent algebraic errors.',
    examRelevance: 'high'
  },
  {
    id: 'M049',
    understandingId: 'U9.6.1',
    section: 'unit9',
    concepts: ['ene', 'tra'],
    misconception: 'The anode is always negative and the cathode is always positive.',
    correction: 'In a GALVANIC (voltaic) cell, the anode IS negative and the cathode IS positive. But in an ELECTROLYTIC cell, the anode is POSITIVE and the cathode is NEGATIVE (because an external battery forces current in the reverse direction). What stays constant: oxidation always occurs at the anode, reduction always at the cathode.',
    why: 'Students memorize the galvanic cell sign convention and incorrectly apply it to electrolytic cells.',
    examRelevance: 'high'
  },
  {
    id: 'M050',
    understandingId: 'U9.3.1',
    section: 'unit9',
    concepts: ['ene'],
    misconception: 'If ΔH is negative, the reaction is always spontaneous.',
    correction: 'Spontaneity depends on BOTH ΔH and ΔS through ΔG = ΔH − TΔS. An exothermic reaction (ΔH < 0) can be non-spontaneous if the entropy decrease (ΔS < 0) is large enough that TΔS makes ΔG positive. All four combinations of ΔH and ΔS signs are possible.',
    why: 'Students focus on the enthalpy term alone and neglect the entropy contribution, especially the temperature dependence.',
    examRelevance: 'high'
  },

  // ── Additional Unit 9 ────────────────────────────────────────
  {
    id: 'M065',
    understandingId: 'U9.2.1',
    section: 'unit9',
    concepts: ['ene'],
    misconception: 'Positive ΔG means the reaction can never occur.',
    correction: 'Positive ΔG° means the reaction is non-spontaneous under STANDARD conditions. It can still proceed if conditions change (e.g., product removal shifts Q < K) or if coupled to another reaction with a sufficiently negative ΔG. Also, ΔG (non-standard) may differ from ΔG°.',
    why: 'Students treat ΔG° as an absolute verdict rather than a condition-specific prediction. They forget that non-standard conditions and coupled reactions can drive otherwise unfavorable processes.',
    examRelevance: 'high'
  },
  {
    id: 'M066',
    understandingId: 'U9.1.2',
    section: 'unit9',
    concepts: ['ene'],
    misconception: 'Entropy always increases in every chemical reaction.',
    correction: 'Entropy of the SYSTEM can increase or decrease depending on the reaction. For example, 2H<sub>2</sub>(g) + O<sub>2</sub>(g) → 2H<sub>2</sub>O(l) has ΔS < 0 (3 mol gas → 0 mol gas, liquid product). What must increase is the TOTAL entropy of the universe (system + surroundings) for a spontaneous process.',
    why: 'Students overgeneralize the second law of thermodynamics, applying "entropy always increases" to the system alone rather than the universe.',
    examRelevance: 'high'
  }
];
