// Unit 4 — Chemical Reactions — Questions
// 29 questions covering all 9 topics
// Mix: ~16 MCQ, ~7 short answer, ~6 extended/FRQ
window.DB_U4_QUESTIONS = [

  /* ============================================================
     TOPIC 4.1 — Introduction for Reactions
     ============================================================ */
  {
    id: 'U4Q001', understandingId: 'U4.1.1', subtopic: '4.1', section: 'unit4',
    concepts: ['transformations'], type: 'mcq', commandTerm: 'identify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'Which of the following is evidence of a chemical change?',
    options: {
      A: 'Ice melting at 0 °C',
      B: 'Sugar dissolving in water',
      C: 'A gas evolving when zinc is placed in hydrochloric acid',
      D: 'Ethanol evaporating from a beaker'
    },
    answer: 'C',
    explanation: 'Gas production when zinc reacts with HCl indicates a chemical change (Zn + 2 HCl → ZnCl<sub>2</sub> + H<sub>2</sub>). The other options are physical changes: melting, dissolving, and evaporation do not produce new substances.',
    markScheme: null
  },
  {
    id: 'U4Q002', understandingId: 'U4.1.1', subtopic: '4.1', section: 'unit4',
    concepts: ['transformations'], type: 'mcq', commandTerm: 'identify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'Which process is a physical change?',
    options: {
      A: 'Burning a match',
      B: 'Dissolving NaCl in water',
      C: 'Tarnishing of silver',
      D: 'Cooking an egg'
    },
    answer: 'B',
    explanation: 'Dissolving NaCl in water is a physical change because the Na<sup>+</sup> and Cl<sup>−</sup> ions separate but are not chemically altered. The ions can be recovered by evaporating the water. Burning, tarnishing, and cooking all produce new substances (chemical changes).',
    markScheme: null
  },
  {
    id: 'U4Q003', understandingId: 'U4.1.2', subtopic: '4.1', section: 'unit4',
    concepts: ['transformations'], type: 'short', commandTerm: 'balance', difficulty: 2,
    source: 'original', marks: 2,
    stem: 'Balance the following equation and include state symbols: Al(s) + HCl(aq) → AlCl<sub>3</sub>(aq) + H<sub>2</sub>(g)',
    options: null,
    answer: '2 Al(s) + 6 HCl(aq) → 2 AlCl<sub>3</sub>(aq) + 3 H<sub>2</sub>(g)',
    explanation: 'Balance Al: 2 on each side. Balance Cl: 6 on each side. Balance H: 6 H on left (6 HCl), 6 H on right (3 H<sub>2</sub>). All atoms and charges balance.',
    markScheme: '1 mark: correct coefficients (2, 6, 2, 3). 1 mark: correct state symbols.'
  },

  /* ============================================================
     TOPIC 4.2 — Net Ionic Equations
     ============================================================ */
  {
    id: 'U4Q004', understandingId: 'U4.2.1', subtopic: '4.2', section: 'unit4',
    concepts: ['transformations'], type: 'mcq', commandTerm: 'identify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'In the reaction NaOH(aq) + HNO<sub>3</sub>(aq) → NaNO<sub>3</sub>(aq) + H<sub>2</sub>O(l), which ions are spectator ions?',
    options: {
      A: 'H<sup>+</sup> and OH<sup>−</sup>',
      B: 'Na<sup>+</sup> and NO<sub>3</sub><sup>−</sup>',
      C: 'Na<sup>+</sup> and OH<sup>−</sup>',
      D: 'H<sup>+</sup> and NO<sub>3</sub><sup>−</sup>'
    },
    answer: 'B',
    explanation: 'Na<sup>+</sup> and NO<sub>3</sub><sup>−</sup> appear as ions on both sides of the complete ionic equation and do not participate in the reaction. H<sup>+</sup> and OH<sup>−</sup> combine to form water, so they are NOT spectators. The net ionic equation is H<sup>+</sup>(aq) + OH<sup>−</sup>(aq) → H<sub>2</sub>O(l).',
    markScheme: null
  },
  {
    id: 'U4Q005', understandingId: 'U4.2.1', subtopic: '4.2', section: 'unit4',
    concepts: ['transformations'], type: 'short', commandTerm: 'write', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'Write the molecular, complete ionic, and net ionic equations for the reaction when aqueous solutions of sodium sulfate and barium chloride are mixed.',
    options: null,
    answer: 'Molecular: Na<sub>2</sub>SO<sub>4</sub>(aq) + BaCl<sub>2</sub>(aq) → BaSO<sub>4</sub>(s) + 2 NaCl(aq). Complete ionic: 2 Na<sup>+</sup>(aq) + SO<sub>4</sub><sup>2</sup><sup>−</sup>(aq) + Ba<sup>2</sup><sup>+</sup>(aq) + 2 Cl<sup>−</sup>(aq) → BaSO<sub>4</sub>(s) + 2 Na<sup>+</sup>(aq) + 2 Cl<sup>−</sup>(aq). Net ionic: Ba<sup>2</sup><sup>+</sup>(aq) + SO<sub>4</sub><sup>2</sup><sup>−</sup>(aq) → BaSO<sub>4</sub>(s).',
    explanation: 'BaSO<sub>4</sub> is insoluble (sulfate exception with Ba<sup>2</sup><sup>+</sup>). Na<sup>+</sup> and Cl<sup>−</sup> are spectator ions. The net ionic equation shows only the formation of the precipitate.',
    markScheme: '1 mark: correct molecular equation with state symbols. 1 mark: correct complete ionic equation. 1 mark: correct net ionic equation with balanced charge.'
  },
  {
    id: 'U4Q006', understandingId: 'U4.2.2', subtopic: '4.2', section: 'unit4',
    concepts: ['transformations'], type: 'mcq', commandTerm: 'predict', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'Which combination of aqueous solutions will produce a precipitate when mixed?',
    options: {
      A: 'NaCl and KNO<sub>3</sub>',
      B: 'AgNO<sub>3</sub> and NaBr',
      C: 'Na<sub>2</sub>SO<sub>4</sub> and KCl',
      D: 'NH<sub>4</sub>Cl and NaOH'
    },
    answer: 'B',
    explanation: 'AgNO<sub>3</sub> + NaBr → AgBr(s) + NaNO<sub>3</sub>. AgBr is insoluble (halide exception with Ag<sup>+</sup>). The other combinations produce all soluble products: NaCl + KNO<sub>3</sub> (all Group 1 salts soluble), Na<sub>2</sub>SO<sub>4</sub> + KCl (both soluble), NH<sub>4</sub>Cl + NaOH → NaCl + NH<sub>3</sub> + H<sub>2</sub>O (no precipitate, produces gas).',
    markScheme: null
  },
  {
    id: 'U4Q007', understandingId: 'U4.2.3', subtopic: '4.2', section: 'unit4',
    concepts: ['transformations'], type: 'short', commandTerm: 'write', difficulty: 2,
    source: 'original', marks: 2,
    stem: 'Write the net ionic equation for the reaction of hydrochloric acid with solid calcium carbonate.',
    options: null,
    answer: '2 H<sup>+</sup>(aq) + CaCO<sub>3</sub>(s) → Ca<sup>2</sup><sup>+</sup>(aq) + H<sub>2</sub>O(l) + CO<sub>2</sub>(g)',
    explanation: 'CaCO<sub>3</sub> is an insoluble solid and stays as a formula. HCl is a strong acid and dissociates. Cl<sup>−</sup> is a spectator ion. The carbonic acid intermediate (H<sub>2</sub>CO<sub>3</sub>) immediately decomposes to H<sub>2</sub>O and CO<sub>2</sub>.',
    markScheme: '1 mark: correct formulas with states. 1 mark: balanced for atoms and charge (net charge = 0 on each side).'
  },

  /* ============================================================
     TOPIC 4.3 — Representations of Reactions
     ============================================================ */
  {
    id: 'U4Q008', understandingId: 'U4.3.1', subtopic: '4.3', section: 'unit4',
    concepts: ['transformations'], type: 'mcq', commandTerm: 'analyze', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'A particulate diagram shows 4 molecules of N<sub>2</sub> and 9 molecules of H<sub>2</sub> before a reaction, and 6 molecules of NH<sub>3</sub> after the reaction. Based on N<sub>2</sub> + 3 H<sub>2</sub> → 2 NH<sub>3</sub>, how many molecules of each reactant remain unreacted?',
    options: {
      A: '1 N<sub>2</sub> and 0 H<sub>2</sub>',
      B: '0 N<sub>2</sub> and 3 H<sub>2</sub>',
      C: '1 N<sub>2</sub> and 3 H<sub>2</sub>',
      D: '2 N<sub>2</sub> and 0 H<sub>2</sub>'
    },
    answer: 'A',
    explanation: '6 NH<sub>3</sub> requires 3 N<sub>2</sub> and 9 H<sub>2</sub> (from the 1:3:2 ratio). Starting with 4 N<sub>2</sub> and 9 H<sub>2</sub>: H<sub>2</sub> is the limiting reagent (9/3 = 3.0 < 4/1 = 4.0). All 9 H<sub>2</sub> are consumed, 3 N<sub>2</sub> are consumed, leaving 1 N<sub>2</sub> unreacted.',
    markScheme: null
  },
  {
    id: 'U4Q009', understandingId: 'U4.3.2', subtopic: '4.3', section: 'unit4',
    concepts: ['transformations'], type: 'mcq', commandTerm: 'identify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'A particulate diagram shows the same type of molecules before and after a change, but the molecules are farther apart after the change. This diagram best represents:',
    options: {
      A: 'A decomposition reaction',
      B: 'A phase change from liquid to gas',
      C: 'A synthesis reaction',
      D: 'A combustion reaction'
    },
    answer: 'B',
    explanation: 'If the molecules remain the same type but are farther apart, no chemical change has occurred. This represents a physical change — specifically a phase change from liquid to gas (boiling/evaporation), where molecules gain kinetic energy and spread out.',
    markScheme: null
  },

  /* ============================================================
     TOPIC 4.4 — Physical and Chemical Changes
     ============================================================ */
  {
    id: 'U4Q010', understandingId: 'U4.4.1', subtopic: '4.4', section: 'unit4',
    concepts: ['transformations'], type: 'mcq', commandTerm: 'apply', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'A student burns 3.00 g of magnesium ribbon in a crucible open to the air and finds that the product has a mass of 4.97 g. Which statement best explains this result?',
    options: {
      A: 'Mass was created during the reaction, violating conservation of mass.',
      B: 'Oxygen from the air combined with magnesium, and the mass of oxygen is included in the product.',
      C: 'The magnesium expanded when heated, increasing its mass.',
      D: 'Water vapor condensed on the product, adding mass.'
    },
    answer: 'B',
    explanation: '2 Mg + O<sub>2</sub> → 2 MgO. The mass increase (4.97 − 3.00 = 1.97 g) is the mass of oxygen from the air that combined with the magnesium. Conservation of mass holds: the total mass of reactants (Mg + O<sub>2</sub> from air) equals the mass of the product (MgO).',
    markScheme: null
  },
  {
    id: 'U4Q011', understandingId: 'U4.4.2', subtopic: '4.4', section: 'unit4',
    concepts: ['transformations'], type: 'short', commandTerm: 'explain', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'Explain at the molecular level why boiling water is a physical change while the electrolysis of water is a chemical change.',
    options: null,
    answer: 'Boiling water overcomes intermolecular forces (hydrogen bonds) between H<sub>2</sub>O molecules, allowing them to escape into the gas phase. The H<sub>2</sub>O molecules remain intact; no covalent bonds are broken. Electrolysis breaks the intramolecular O-H covalent bonds within water molecules, producing new substances: H<sub>2</sub> and O<sub>2</sub> gases. The atoms are rearranged into different molecules.',
    explanation: 'This question tests the distinction between IMF disruption (physical change) and covalent bond breaking/forming (chemical change).',
    markScheme: '1 mark: boiling disrupts IMFs (hydrogen bonds), not covalent bonds. 1 mark: electrolysis breaks O-H covalent bonds. 1 mark: electrolysis produces new substances (H<sub>2</sub> and O<sub>2</sub>).'
  },

  /* ============================================================
     TOPIC 4.5 — Stoichiometry
     ============================================================ */
  {
    id: 'U4Q012', understandingId: 'U4.5.1', subtopic: '4.5', section: 'unit4',
    concepts: ['quantification'], type: 'mcq', commandTerm: 'calculate', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'How many grams of O<sub>2</sub> are required to completely react with 12.0 g of C<sub>3</sub>H<sub>8</sub> according to C<sub>3</sub>H<sub>8</sub> + 5 O<sub>2</sub> → 3 CO<sub>2</sub> + 4 H<sub>2</sub>O?',
    options: {
      A: '21.8 g',
      B: '43.6 g',
      C: '54.5 g',
      D: '109 g'
    },
    answer: 'B',
    explanation: 'mol C<sub>3</sub>H<sub>8</sub> = 12.0 g ÷ 44.10 g/mol = 0.2721 mol. mol O<sub>2</sub> = 0.2721 × (5/1) = 1.360 mol. mass O<sub>2</sub> = 1.360 × 32.00 g/mol = 43.5 g ≈ 43.6 g.',
    markScheme: null
  },
  {
    id: 'U4Q013', understandingId: 'U4.5.1', subtopic: '4.5', section: 'unit4',
    concepts: ['quantification'], type: 'frq', commandTerm: 'calculate', difficulty: 3,
    source: 'original', marks: 5,
    stem: 'A student reacts 50.0 mL of 0.200 M AgNO<sub>3</sub> with excess NaCl. (a) Write the balanced molecular equation. (b) Calculate the moles of AgCl produced. (c) Calculate the mass of AgCl produced. (d) If the student actually collects 1.20 g of AgCl, calculate the percent yield.',
    options: null,
    answer: '(a) AgNO<sub>3</sub>(aq) + NaCl(aq) → AgCl(s) + NaNO<sub>3</sub>(aq). (b) mol AgNO<sub>3</sub> = 0.0500 L × 0.200 M = 0.0100 mol. Since the ratio is 1:1, mol AgCl = 0.0100 mol. (c) mass AgCl = 0.0100 mol × 143.32 g/mol = 1.43 g. (d) % yield = (1.20 / 1.43) × 100% = 83.9%.',
    explanation: 'This problem combines molarity-based stoichiometry with percent yield. NaCl is in excess, so AgNO<sub>3</sub> is the limiting reagent.',
    markScheme: '1 mark: balanced equation with states. 1 mark: correct moles AgNO<sub>3</sub>. 1 mark: correct moles AgCl using mole ratio. 1 mark: correct mass of AgCl. 1 mark: correct % yield calculation.'
  },
  {
    id: 'U4Q014', understandingId: 'U4.5.2', subtopic: '4.5', section: 'unit4',
    concepts: ['quantification'], type: 'frq', commandTerm: 'calculate', difficulty: 3,
    source: 'original', marks: 6,
    stem: 'A student mixes 10.0 g of aluminum with 35.0 g of chlorine gas. The reaction is: 2 Al + 3 Cl<sub>2</sub> → 2 AlCl<sub>3</sub>. (a) Determine the limiting reagent. (b) Calculate the theoretical yield of AlCl<sub>3</sub> in grams. (c) Calculate the mass of the excess reagent remaining.',
    options: null,
    answer: '(a) mol Al = 10.0 / 26.98 = 0.3707 mol; mol Cl<sub>2</sub> = 35.0 / 70.90 = 0.4937 mol. Divide by coefficients: Al: 0.3707/2 = 0.1854; Cl<sub>2</sub>: 0.4937/3 = 0.1646. Cl<sub>2</sub> has the smaller ratio, so Cl<sub>2</sub> is the limiting reagent. (b) mol AlCl<sub>3</sub> = 0.4937 mol Cl<sub>2</sub> × (2/3) = 0.3291 mol. mass AlCl<sub>3</sub> = 0.3291 × 133.33 = 43.9 g. (c) mol Al consumed = 0.4937 × (2/3) = 0.3291 mol. Al remaining = 0.3707 − 0.3291 = 0.0416 mol = 0.0416 × 26.98 = 1.12 g.',
    explanation: 'Limiting reagent is identified by comparing mol/coefficient ratios. Cl<sub>2</sub> limits because its ratio (0.1646) is smaller than Al\'s ratio (0.1854). All product and excess calculations are based on the limiting reagent.',
    markScheme: '1 mark: correct moles of each reactant. 1 mark: correct identification of limiting reagent with justification. 1 mark: moles of AlCl<sub>3</sub> from limiting reagent. 1 mark: mass of AlCl<sub>3</sub>. 1 mark: moles of Al consumed. 1 mark: mass of excess Al remaining.'
  },
  {
    id: 'U4Q015', understandingId: 'U4.5.2', subtopic: '4.5', section: 'unit4',
    concepts: ['quantification'], type: 'mcq', commandTerm: 'identify', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'For the reaction 2 H<sub>2</sub> + O<sub>2</sub> → 2 H<sub>2</sub>O, a student has 3.0 mol H<sub>2</sub> and 2.0 mol O<sub>2</sub>. Which statement is correct?',
    options: {
      A: 'H<sub>2</sub> is the limiting reagent; 0.5 mol O<sub>2</sub> remains.',
      B: 'O<sub>2</sub> is the limiting reagent; 1.0 mol H<sub>2</sub> remains.',
      C: 'H<sub>2</sub> is the limiting reagent; 1.0 mol O<sub>2</sub> remains.',
      D: 'Neither is limiting; they are in stoichiometric proportions.'
    },
    answer: 'A',
    explanation: 'Divide by coefficients: H<sub>2</sub>: 3.0/2 = 1.5; O<sub>2</sub>: 2.0/1 = 2.0. H<sub>2</sub> has the smaller value, so H<sub>2</sub> is limiting. mol O<sub>2</sub> consumed = 3.0 × (1/2) = 1.5 mol. O<sub>2</sub> remaining = 2.0 − 1.5 = 0.5 mol.',
    markScheme: null
  },
  {
    id: 'U4Q016', understandingId: 'U4.5.3', subtopic: '4.5', section: 'unit4',
    concepts: ['quantification'], type: 'mcq', commandTerm: 'calculate', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'A reaction has a theoretical yield of 25.0 g. If a student obtains 18.5 g of product, what is the percent yield?',
    options: {
      A: '135%',
      B: '74.0%',
      C: '25.0%',
      D: '18.5%'
    },
    answer: 'B',
    explanation: '% yield = (actual / theoretical) × 100% = (18.5 / 25.0) × 100% = 74.0%.',
    markScheme: null
  },

  /* ============================================================
     TOPIC 4.6 — Introduction to Titration
     ============================================================ */
  {
    id: 'U4Q017', understandingId: 'U4.6.1', subtopic: '4.6', section: 'unit4',
    concepts: ['quantification'], type: 'frq', commandTerm: 'calculate', difficulty: 3,
    source: 'original', marks: 4,
    stem: 'A 25.00 mL sample of H<sub>2</sub>SO<sub>4</sub>(aq) of unknown concentration is titrated with 0.1500 M NaOH(aq). The equivalence point is reached after 32.40 mL of NaOH is added. (a) Write the balanced equation. (b) Calculate the concentration of the H<sub>2</sub>SO<sub>4</sub>.',
    options: null,
    answer: '(a) H<sub>2</sub>SO<sub>4</sub>(aq) + 2 NaOH(aq) → Na<sub>2</sub>SO<sub>4</sub>(aq) + 2 H<sub>2</sub>O(l). (b) mol NaOH = 0.1500 M × 0.03240 L = 0.004860 mol. mol H<sub>2</sub>SO<sub>4</sub> = 0.004860 / 2 = 0.002430 mol. M(H<sub>2</sub>SO<sub>4</sub>) = 0.002430 / 0.02500 = 0.09720 M.',
    explanation: 'H<sub>2</sub>SO<sub>4</sub> is diprotic, so the mole ratio is 1:2 (acid:base). This must be accounted for in the titration calculation.',
    markScheme: '1 mark: balanced equation. 1 mark: correct moles NaOH. 1 mark: correct mole ratio applied (÷2). 1 mark: correct concentration of H<sub>2</sub>SO<sub>4</sub>.'
  },
  {
    id: 'U4Q018', understandingId: 'U4.6.1', subtopic: '4.6', section: 'unit4',
    concepts: ['quantification'], type: 'mcq', commandTerm: 'calculate', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'A 20.00 mL sample of 0.100 M HCl is titrated with 0.100 M NaOH. What volume of NaOH is needed to reach the equivalence point?',
    options: {
      A: '10.00 mL',
      B: '20.00 mL',
      C: '40.00 mL',
      D: '100.0 mL'
    },
    answer: 'B',
    explanation: 'HCl + NaOH → NaCl + H<sub>2</sub>O (1:1). mol HCl = 0.100 × 0.02000 = 0.00200 mol. mol NaOH needed = 0.00200 mol. V = 0.00200 / 0.100 = 0.02000 L = 20.00 mL. Equal concentrations and 1:1 ratio means equal volumes.',
    markScheme: null
  },
  {
    id: 'U4Q019', understandingId: 'U4.6.2', subtopic: '4.6', section: 'unit4',
    concepts: ['quantification'], type: 'mcq', commandTerm: 'justify', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'Which indicator would be MOST appropriate for a titration of acetic acid (weak acid) with NaOH (strong base)?',
    options: {
      A: 'Methyl orange (pH 3.1–4.4)',
      B: 'Bromothymol blue (pH 6.0–7.6)',
      C: 'Phenolphthalein (pH 8.2–10.0)',
      D: 'Any indicator would work equally well'
    },
    answer: 'C',
    explanation: 'The equivalence point of a weak acid–strong base titration is above pH 7 (typically pH 8–10) because the conjugate base (CH<sub>3</sub>COO<sup>−</sup>) hydrolyzes to produce OH<sup>−</sup>. Phenolphthalein changes color in this range (pH 8.2–10.0), making it the best choice.',
    markScheme: null
  },

  /* ============================================================
     TOPIC 4.7 — Types of Chemical Reactions
     ============================================================ */
  {
    id: 'U4Q020', understandingId: 'U4.7.1', subtopic: '4.7', section: 'unit4',
    concepts: ['transformations'], type: 'mcq', commandTerm: 'classify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'The reaction 2 KClO<sub>3</sub>(s) → 2 KCl(s) + 3 O<sub>2</sub>(g) is best classified as:',
    options: {
      A: 'Synthesis',
      B: 'Single replacement',
      C: 'Decomposition',
      D: 'Double replacement'
    },
    answer: 'C',
    explanation: 'One reactant (KClO<sub>3</sub>) breaks down into two simpler products (KCl and O<sub>2</sub>). This is the hallmark of a decomposition reaction.',
    markScheme: null
  },
  {
    id: 'U4Q021', understandingId: 'U4.7.2', subtopic: '4.7', section: 'unit4',
    concepts: ['transformations'], type: 'short', commandTerm: 'predict', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'Predict whether a reaction will occur when copper metal is placed in a solution of zinc nitrate. Explain your answer using the activity series.',
    options: null,
    answer: 'No reaction occurs. Copper is below zinc in the activity series, meaning copper is less reactive (less easily oxidized) than zinc. A less active metal cannot displace a more active metal from solution. For a reaction to occur, the solid metal must be MORE active than the metal ion in solution.',
    explanation: 'The activity series predicts that only metals higher in the series can displace metals lower in the series. Cu is below Zn, so Cu cannot displace Zn<sup>2</sup><sup>+</sup>.',
    markScheme: '1 mark: states no reaction occurs. 1 mark: references activity series or relative reactivity. 1 mark: explains that Cu is less reactive than Zn (or equivalent reasoning).'
  },

  /* ============================================================
     TOPIC 4.8 — Introduction to Acid-Base Reactions
     ============================================================ */
  {
    id: 'U4Q022', understandingId: 'U4.8.1', subtopic: '4.8', section: 'unit4',
    concepts: ['transformations', 'eqn'], type: 'mcq', commandTerm: 'identify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'Which substance is a Brønsted-Lowry base but NOT an Arrhenius base?',
    options: {
      A: 'NaOH',
      B: 'KOH',
      C: 'NH<sub>3</sub>',
      D: 'Ba(OH)<sub>2</sub>'
    },
    answer: 'C',
    explanation: 'NH<sub>3</sub> accepts a proton (H<sup>+</sup>) from water to form NH<sub>4</sub><sup>+</sup>, making it a Brønsted-Lowry base. However, it does not contain OH<sup>−</sup> in its formula and does not directly produce OH<sup>−</sup> when dissolved, so it is not an Arrhenius base. NaOH, KOH, and Ba(OH)<sub>2</sub> are both Arrhenius and Brønsted-Lowry bases.',
    markScheme: null
  },
  {
    id: 'U4Q023', understandingId: 'U4.8.2', subtopic: '4.8', section: 'unit4',
    concepts: ['transformations', 'eqn'], type: 'short', commandTerm: 'identify', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'For the reaction HCN(aq) + H<sub>2</sub>O(l) ⇌ CN<sup>−</sup>(aq) + H<sub>3</sub>O<sup>+</sup>(aq), identify: (a) the Brønsted-Lowry acid and its conjugate base, (b) the Brønsted-Lowry base and its conjugate acid, (c) whether HCN is a strong or weak acid and how you know.',
    options: null,
    answer: '(a) Acid: HCN; conjugate base: CN<sup>−</sup>. (b) Base: H<sub>2</sub>O; conjugate acid: H<sub>3</sub>O<sup>+</sup>. (c) HCN is a weak acid because the equilibrium arrow (⇌) indicates the reaction is reversible and does not go to completion. Strong acids dissociate completely (→).',
    explanation: 'The double arrow (⇌) indicates equilibrium, meaning HCN only partially dissociates. HCN donates H<sup>+</sup> to H<sub>2</sub>O, forming the conjugate pair HCN/CN<sup>−</sup> and the conjugate pair H<sub>2</sub>O/H<sub>3</sub>O<sup>+</sup>.',
    markScheme: '1 mark: correct acid/conjugate base pair. 1 mark: correct base/conjugate acid pair. 1 mark: identifies HCN as weak with correct reasoning (equilibrium arrow or partial dissociation).'
  },
  {
    id: 'U4Q024', understandingId: 'U4.8.3', subtopic: '4.8', section: 'unit4',
    concepts: ['transformations', 'eqn'], type: 'frq', commandTerm: 'write', difficulty: 3,
    source: 'original', marks: 4,
    stem: 'Write balanced molecular and net ionic equations for each reaction: (a) HCl(aq) + NaOH(aq), (b) CH<sub>3</sub>COOH(aq) + KOH(aq). Explain why the net ionic equations differ.',
    options: null,
    answer: '(a) Molecular: HCl(aq) + NaOH(aq) → NaCl(aq) + H<sub>2</sub>O(l). Net ionic: H<sup>+</sup>(aq) + OH<sup>−</sup>(aq) → H<sub>2</sub>O(l). (b) Molecular: CH<sub>3</sub>COOH(aq) + KOH(aq) → KCH<sub>3</sub>COO(aq) + H<sub>2</sub>O(l). Net ionic: CH<sub>3</sub>COOH(aq) + OH<sup>−</sup>(aq) → CH<sub>3</sub>COO<sup>−</sup>(aq) + H<sub>2</sub>O(l). The net ionic equations differ because HCl is a strong acid (fully dissociates into H<sup>+</sup> and Cl<sup>−</sup>) while CH<sub>3</sub>COOH is a weak acid (remains in molecular form in the net ionic equation).',
    explanation: 'Strong electrolytes are dissociated in ionic equations; weak electrolytes are not. This is why the net ionic equation for a weak acid-strong base reaction includes the intact weak acid molecule.',
    markScheme: '1 mark: correct net ionic for strong-strong. 1 mark: correct net ionic for weak acid-strong base (CH<sub>3</sub>COOH stays molecular). 1 mark: identifies HCl as strong and CH<sub>3</sub>COOH as weak. 1 mark: explains that weak acids are not dissociated in net ionic equations.'
  },

  /* ============================================================
     TOPIC 4.9 — Oxidation-Reduction (Redox) Reactions
     ============================================================ */
  {
    id: 'U4Q025', understandingId: 'U4.9.1', subtopic: '4.9', section: 'unit4',
    concepts: ['transformations'], type: 'mcq', commandTerm: 'identify', difficulty: 1,
    source: 'original', marks: 1,
    stem: 'In the reaction 2 Mg(s) + O<sub>2</sub>(g) → 2 MgO(s), which species is the reducing agent?',
    options: {
      A: 'Mg',
      B: 'O<sub>2</sub>',
      C: 'MgO',
      D: 'O<sup>2</sup><sup>−</sup>'
    },
    answer: 'A',
    explanation: 'Mg is oxidized (0 → +2), so it is the reducing agent (it donates electrons). O<sub>2</sub> is reduced (0 → −2), so it is the oxidizing agent (it accepts electrons). MgO is the product, not a reagent.',
    markScheme: null
  },
  {
    id: 'U4Q026', understandingId: 'U4.9.1', subtopic: '4.9', section: 'unit4',
    concepts: ['transformations'], type: 'short', commandTerm: 'calculate', difficulty: 2,
    source: 'original', marks: 3,
    stem: 'Assign oxidation numbers to each atom in K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>. Show your work.',
    options: null,
    answer: 'K = +1 (Group 1 metal). O = −2 (standard rule). For the compound: 2(+1) + 2(Cr) + 7(−2) = 0. 2 + 2Cr − 14 = 0. 2Cr = 12. Cr = +6.',
    explanation: 'This is a standard oxidation number assignment problem. K is always +1, O is usually −2, and Cr is solved algebraically from the constraint that the sum equals zero for a neutral compound.',
    markScheme: '1 mark: K = +1. 1 mark: O = −2. 1 mark: Cr = +6 with work shown.'
  },
  {
    id: 'U4Q027', understandingId: 'U4.9.2', subtopic: '4.9', section: 'unit4',
    concepts: ['transformations'], type: 'frq', commandTerm: 'balance', difficulty: 3,
    source: 'original', marks: 6,
    stem: 'Balance the following redox equation in acidic solution using the half-reaction method: Cr<sub>2</sub>O<sub>7</sub><sup>2</sup><sup>−</sup>(aq) + Fe<sup>2</sup><sup>+</sup>(aq) → Cr<sup>3</sup><sup>+</sup>(aq) + Fe<sup>3</sup><sup>+</sup>(aq). Show both half-reactions.',
    options: null,
    answer: 'Reduction half: Cr<sub>2</sub>O<sub>7</sub><sup>2</sup><sup>−</sup> + 14 H<sup>+</sup> + 6 e<sup>−</sup> → 2 Cr<sup>3</sup><sup>+</sup> + 7 H<sub>2</sub>O. Oxidation half: Fe<sup>2</sup><sup>+</sup> → Fe<sup>3</sup><sup>+</sup> + e<sup>−</sup> (multiply by 6). Combined: Cr<sub>2</sub>O<sub>7</sub><sup>2</sup><sup>−</sup> + 14 H<sup>+</sup> + 6 Fe<sup>2</sup><sup>+</sup> → 2 Cr<sup>3</sup><sup>+</sup> + 7 H<sub>2</sub>O + 6 Fe<sup>3</sup><sup>+</sup>. Check: Cr: 2=2, O: 7=7, H: 14=14, Fe: 6=6. Charge: (−2+14+12)=+24; (+6+0+18)=+24. ✓',
    explanation: 'The half-reaction method separates oxidation and reduction, balances each for atoms and charge, then combines. The key step is equalizing electrons (6 e<sup>−</sup> in the reduction half, so multiply the oxidation half by 6).',
    markScheme: '1 mark: correct reduction half-reaction (atoms balanced). 1 mark: reduction half balanced for charge (6 e<sup>−</sup>). 1 mark: correct oxidation half-reaction. 1 mark: electron equalization (multiply oxidation by 6). 1 mark: correct combined equation. 1 mark: verified atom and charge balance.'
  },
  {
    id: 'U4Q028', understandingId: 'U4.9.2', subtopic: '4.9', section: 'unit4',
    concepts: ['transformations'], type: 'frq', commandTerm: 'balance', difficulty: 3,
    source: 'original', marks: 5,
    stem: 'Balance the following redox equation in basic solution: MnO<sub>4</sub><sup>−</sup>(aq) + I<sup>−</sup>(aq) → MnO<sub>2</sub>(s) + I<sub>2</sub>(s).',
    options: null,
    answer: 'Step 1 (acidic): Reduction: MnO<sub>4</sub><sup>−</sup> + 4 H<sup>+</sup> + 3 e<sup>−</sup> → MnO<sub>2</sub> + 2 H<sub>2</sub>O. Oxidation: 2 I<sup>−</sup> → I<sub>2</sub> + 2 e<sup>−</sup>. Equalize electrons (LCM = 6): multiply reduction by 2 and oxidation by 3. 2 MnO<sub>4</sub><sup>−</sup> + 8 H<sup>+</sup> + 6 e<sup>−</sup> → 2 MnO<sub>2</sub> + 4 H<sub>2</sub>O. 6 I<sup>−</sup> → 3 I<sub>2</sub> + 6 e<sup>−</sup>. Combined (acidic): 2 MnO<sub>4</sub><sup>−</sup> + 8 H<sup>+</sup> + 6 I<sup>−</sup> → 2 MnO<sub>2</sub> + 4 H<sub>2</sub>O + 3 I<sub>2</sub>. Step 2 (convert to basic): Add 8 OH<sup>−</sup> to both sides: 2 MnO<sub>4</sub><sup>−</sup> + 8 H<sub>2</sub>O + 6 I<sup>−</sup> → 2 MnO<sub>2</sub> + 4 H<sub>2</sub>O + 3 I<sub>2</sub> + 8 OH<sup>−</sup>. Simplify: 2 MnO<sub>4</sub><sup>−</sup> + 4 H<sub>2</sub>O + 6 I<sup>−</sup> → 2 MnO<sub>2</sub> + 3 I<sub>2</sub> + 8 OH<sup>−</sup>.',
    explanation: 'Balance in acidic solution first, then convert to basic by adding OH<sup>−</sup> to neutralize all H<sup>+</sup>. Cancel water that appears on both sides.',
    markScheme: '1 mark: correct reduction half-reaction. 1 mark: correct oxidation half-reaction. 1 mark: electrons equalized. 1 mark: correct combined equation in acid. 1 mark: correct conversion to basic solution (H<sup>+</sup> eliminated, OH<sup>−</sup> on product side).'
  },
  {
    id: 'U4Q029', understandingId: 'U4.9.3', subtopic: '4.9', section: 'unit4',
    concepts: ['transformations'], type: 'mcq', commandTerm: 'identify', difficulty: 2,
    source: 'original', marks: 1,
    stem: 'Which of the following reactions is NOT a redox reaction?',
    options: {
      A: 'CH<sub>4</sub> + 2 O<sub>2</sub> → CO<sub>2</sub> + 2 H<sub>2</sub>O',
      B: 'Zn + 2 HCl → ZnCl<sub>2</sub> + H<sub>2</sub>',
      C: 'NaOH + HCl → NaCl + H<sub>2</sub>O',
      D: '2 Na + Cl<sub>2</sub> → 2 NaCl'
    },
    answer: 'C',
    explanation: 'NaOH + HCl → NaCl + H<sub>2</sub>O is an acid-base neutralization (double replacement). No oxidation numbers change: Na stays +1, O stays −2, H stays +1, Cl stays −1. The other three are all redox: combustion (A), single replacement (B), and synthesis from elements (D) all involve changes in oxidation states.',
    markScheme: null
  }
];
