// Unit 4 — Chemical Reactions (FULL CONTENT)
// AP Chemistry CED Topics 4.1–4.9  |  Exam Weight: 7–9%
window.DB_U4_CONTENT = {
  metadata: {
    id: 'unit4',
    title: 'Unit 4',
    longTitle: 'Unit 4 — Chemical Reactions',
    description: 'Types of chemical reactions, net ionic equations, stoichiometry, titration, acid-base reactions, and oxidation-reduction reactions. This unit builds foundational reaction skills used throughout the rest of the course.',
    guidingQuestion: 'How can we use chemical equations to describe, predict, and quantify the outcomes of chemical reactions?',
    examWeight: '7-9%',
    subtopics: [
      /* 4.1 */
      { id: 'U4.1', code: '4.1', title: 'Introduction for Reactions',
        learningObjectives: ['TRA-1.A'],
        understandings: ['U4.1.1', 'U4.1.2'],
        blocks: [{ id: 'B4.1', code: '4.1', title: 'Introduction for Reactions', understandings: ['U4.1.1', 'U4.1.2'] }]
      },
      /* 4.2 */
      { id: 'U4.2', code: '4.2', title: 'Net Ionic Equations',
        learningObjectives: ['TRA-1.B'],
        understandings: ['U4.2.1', 'U4.2.2', 'U4.2.3'],
        blocks: [{ id: 'B4.2', code: '4.2', title: 'Net Ionic Equations', understandings: ['U4.2.1', 'U4.2.2', 'U4.2.3'] }]
      },
      /* 4.3 */
      { id: 'U4.3', code: '4.3', title: 'Representations of Reactions',
        learningObjectives: ['TRA-1.C'],
        understandings: ['U4.3.1', 'U4.3.2'],
        blocks: [{ id: 'B4.3', code: '4.3', title: 'Representations of Reactions', understandings: ['U4.3.1', 'U4.3.2'] }]
      },
      /* 4.4 */
      { id: 'U4.4', code: '4.4', title: 'Physical and Chemical Changes',
        learningObjectives: ['TRA-1.D'],
        understandings: ['U4.4.1', 'U4.4.2'],
        blocks: [{ id: 'B4.4', code: '4.4', title: 'Physical and Chemical Changes', understandings: ['U4.4.1', 'U4.4.2'] }]
      },
      /* 4.5 */
      { id: 'U4.5', code: '4.5', title: 'Stoichiometry',
        learningObjectives: ['SPQ-4.A'],
        understandings: ['U4.5.1', 'U4.5.2', 'U4.5.3'],
        blocks: [{ id: 'B4.5', code: '4.5', title: 'Stoichiometry', understandings: ['U4.5.1', 'U4.5.2', 'U4.5.3'] }]
      },
      /* 4.6 */
      { id: 'U4.6', code: '4.6', title: 'Introduction to Titration',
        learningObjectives: ['SPQ-4.B'],
        understandings: ['U4.6.1', 'U4.6.2'],
        blocks: [{ id: 'B4.6', code: '4.6', title: 'Introduction to Titration', understandings: ['U4.6.1', 'U4.6.2'] }]
      },
      /* 4.7 */
      { id: 'U4.7', code: '4.7', title: 'Types of Chemical Reactions',
        learningObjectives: ['TRA-2.A'],
        understandings: ['U4.7.1', 'U4.7.2'],
        blocks: [{ id: 'B4.7', code: '4.7', title: 'Types of Chemical Reactions', understandings: ['U4.7.1', 'U4.7.2'] }]
      },
      /* 4.8 */
      { id: 'U4.8', code: '4.8', title: 'Introduction to Acid-Base Reactions',
        learningObjectives: ['TRA-2.B'],
        understandings: ['U4.8.1', 'U4.8.2', 'U4.8.3'],
        blocks: [{ id: 'B4.8', code: '4.8', title: 'Introduction to Acid-Base Reactions', understandings: ['U4.8.1', 'U4.8.2', 'U4.8.3'] }]
      },
      /* 4.9 */
      { id: 'U4.9', code: '4.9', title: 'Oxidation-Reduction (Redox) Reactions',
        learningObjectives: ['TRA-2.C'],
        understandings: ['U4.9.1', 'U4.9.2', 'U4.9.3'],
        blocks: [{ id: 'B4.9', code: '4.9', title: 'Oxidation-Reduction (Redox) Reactions', understandings: ['U4.9.1', 'U4.9.2', 'U4.9.3'] }]
      }
    ]
  },

  understandings: [
    /* ============================================================
       TOPIC 4.1 — Introduction for Reactions
       ============================================================ */
    {
      id: 'U4.1.1', code: 'Topic 4.1', subtopic: '4.1',
      subtopicTitle: 'Introduction for Reactions', section: 'unit4',
      concepts: ['transformations', 'tra'],
      statement: 'A chemical change produces one or more new substances with different properties from the starting materials, while a physical change alters the form but not the chemical identity of a substance.',
      content: {
        textbook: {
          explanation: '<p><b>Physical changes</b> alter the appearance or state of a substance without changing its chemical composition. Examples include melting ice (H<sub>2</sub>O(s) &rarr; H<sub>2</sub>O(l)), dissolving sugar in water, and boiling ethanol. The molecules remain the same; only the arrangement or energy of the particles changes.</p><p><b>Chemical changes</b> (chemical reactions) produce one or more new substances with different chemical formulas and properties. Evidence of a chemical change includes:</p><ul><li><b>Color change</b> (e.g., iron rusting from gray to orange-brown)</li><li><b>Gas production</b> (e.g., bubbles when zinc reacts with HCl)</li><li><b>Precipitate formation</b> (e.g., mixing AgNO<sub>3</sub> and NaCl produces a white solid)</li><li><b>Temperature change</b> (exothermic or endothermic processes)</li><li><b>Odor change</b> (e.g., burning sulfur produces SO<sub>2</sub> with a sharp smell)</li></ul><p>At the particulate level, a chemical change involves breaking and forming chemical bonds, resulting in a rearrangement of atoms into new molecules or ionic compounds. A physical change only alters the spacing, motion, or arrangement of existing molecules.</p>',
          keyPoints: [
            'Physical changes do not alter chemical identity; chemical changes produce new substances.',
            'Evidence of chemical change: color change, gas production, precipitate, temperature change, odor change.',
            'At the atomic level, chemical changes involve bond breaking and bond forming.',
            'Phase changes (melting, boiling, sublimation) are physical changes even though energy is involved.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Classifying Changes',
              body: '<p><b>Q:</b> Classify each as physical or chemical: (a) dissolving NaCl in water, (b) burning magnesium ribbon, (c) boiling water, (d) tarnishing of silver.</p><p><b>A:</b> (a) Physical &mdash; NaCl dissociates into Na<sup>+</sup> and Cl<sup>&minus;</sup> ions but no new substances form (the ions can be recovered by evaporation). (b) Chemical &mdash; 2 Mg + O<sub>2</sub> &rarr; 2 MgO; a new substance (MgO) with different properties is produced. (c) Physical &mdash; water changes state but remains H<sub>2</sub>O. (d) Chemical &mdash; 2 Ag + H<sub>2</sub>S &rarr; Ag<sub>2</sub>S + H<sub>2</sub>; silver sulfide is a new compound.</p>'
            }
          ],
          warnings: [
            'Dissolving an ionic compound is a physical change, not a chemical change, even though the solid disappears. The ions are separated but not chemically altered.',
            'Not every temperature change indicates a chemical reaction &mdash; dissolving can be exothermic or endothermic but is still physical.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Chemical changes produce new substances (bond breaking/forming); physical changes alter form only. Look for evidence: color, gas, precipitate, temperature, odor.',
          keyPoints: [
            'Phase changes are always physical changes.',
            'Dissolving ionic compounds is physical (dissociation, not decomposition).',
            'Chemical changes are irreversible in everyday terms, though many are reversible under different conditions.'
          ],
          formulae: []
        }
      },
      examTips: [
        'The AP exam loves to present a particulate diagram and ask whether a physical or chemical change occurred. Look for whether the molecule types change.',
        'Dissolving is a common trap: NaCl dissolving is physical, but a reaction in solution (like NaOH + HCl) is chemical.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 4.4: Physical and Chemical Changes (deeper treatment)', sec: 'content' },
        { color: 'blue', label: '\u2192 Unit 3: Phase changes as physical changes', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 5: Energy changes in reactions (thermochemistry)', sec: 'content' }
      ],
      questionIds: ['U4Q001', 'U4Q002']
    },

    {
      id: 'U4.1.2', code: 'Topic 4.1', subtopic: '4.1',
      subtopicTitle: 'Introduction for Reactions', section: 'unit4',
      concepts: ['transformations', 'tra'],
      statement: 'Balanced chemical equations represent the conservation of atoms (mass) and charge. Coefficients indicate mole ratios of reactants and products.',
      content: {
        textbook: {
          explanation: '<p>A <b>balanced chemical equation</b> is a symbolic representation of a chemical reaction. It must satisfy two conservation laws:</p><ul><li><b>Conservation of mass (atoms):</b> The same number and type of each atom must appear on both sides of the equation.</li><li><b>Conservation of charge:</b> The total charge on each side must be equal (important for ionic and redox equations).</li></ul><p>The <b>coefficients</b> in a balanced equation represent the relative number of moles of each reactant and product. For example, in:<br><code>2 H<sub>2</sub>(g) + O<sub>2</sub>(g) &rarr; 2 H<sub>2</sub>O(l)</code><br>2 mol H<sub>2</sub> reacts with 1 mol O<sub>2</sub> to produce 2 mol H<sub>2</sub>O.</p><p><b>State symbols</b> are used to indicate the physical state of each species: (s) solid, (l) liquid, (g) gas, (aq) aqueous solution.</p><p><b>Steps for balancing by inspection:</b></p><ol><li>Write the unbalanced equation with correct formulas.</li><li>Count atoms of each element on both sides.</li><li>Adjust coefficients (never subscripts!) to equalize atom counts.</li><li>Balance metals first, then nonmetals, then hydrogen, then oxygen last.</li><li>Verify that all atoms and charges balance.</li></ol>',
          keyPoints: [
            'Coefficients represent mole ratios, not individual molecules.',
            'Never change subscripts to balance an equation &mdash; that changes the substance.',
            'State symbols (s), (l), (g), (aq) provide important information about phases.',
            'A balanced equation is the foundation for all stoichiometric calculations.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Balancing a Combustion Equation',
              body: '<p><b>Q:</b> Balance the equation for the combustion of propane: C<sub>3</sub>H<sub>8</sub> + O<sub>2</sub> &rarr; CO<sub>2</sub> + H<sub>2</sub>O</p><p><b>A:</b> Step 1: Balance C: 3 C on left &rarr; need 3 CO<sub>2</sub>. Step 2: Balance H: 8 H on left &rarr; need 4 H<sub>2</sub>O. Step 3: Balance O: right side has (3&times;2) + (4&times;1) = 10 O atoms &rarr; need 5 O<sub>2</sub>. Final: <b>C<sub>3</sub>H<sub>8</sub> + 5 O<sub>2</sub> &rarr; 3 CO<sub>2</sub> + 4 H<sub>2</sub>O</b>. Check: 3 C, 8 H, 10 O on each side. &#10003;</p>'
            }
          ],
          warnings: [
            'Never change a chemical formula to balance an equation. Changing H2O to H2O2 would create a different substance entirely.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Balanced equations conserve atoms and charge. Coefficients give mole ratios for stoichiometry. Always include state symbols.',
          keyPoints: [
            'Balance metals &rarr; nonmetals &rarr; H &rarr; O.',
            'Fractional coefficients are acceptable but should be cleared by multiplying through.',
            'Mole ratios from balanced equations are the bridge between reactant and product quantities.'
          ],
          formulae: []
        }
      },
      examTips: [
        'AP FRQs almost always require balanced equations. Write them with correct state symbols and coefficients reduced to lowest whole numbers.',
        'If a question says "write the balanced equation," you MUST balance it or you lose points even if the rest of the calculation is correct.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 4.5: Stoichiometry uses mole ratios from balanced equations', sec: 'content' },
        { color: 'blue', label: '\u2192 Unit 1: Mole concept connects equation coefficients to measurable quantities', sec: 'content' }
      ],
      questionIds: ['U4Q003']
    },

    /* ============================================================
       TOPIC 4.2 — Net Ionic Equations
       ============================================================ */
    {
      id: 'U4.2.1', code: 'Topic 4.2', subtopic: '4.2',
      subtopicTitle: 'Net Ionic Equations', section: 'unit4',
      concepts: ['transformations', 'tra'],
      statement: 'Molecular equations show all species as complete formulas. Complete ionic equations show all strong electrolytes dissociated into ions. Net ionic equations remove spectator ions to show only the species that undergo chemical change.',
      content: {
        textbook: {
          explanation: '<p>Reactions in aqueous solution can be represented at three levels of detail:</p><ol><li><b>Molecular (formula) equation:</b> Shows all reactants and products as complete formulas.<br><code>AgNO<sub>3</sub>(aq) + NaCl(aq) &rarr; AgCl(s) + NaNO<sub>3</sub>(aq)</code></li><li><b>Complete ionic equation:</b> Shows all strong electrolytes dissociated into their ions.<br><code>Ag<sup>+</sup>(aq) + NO<sub>3</sub><sup>&minus;</sup>(aq) + Na<sup>+</sup>(aq) + Cl<sup>&minus;</sup>(aq) &rarr; AgCl(s) + Na<sup>+</sup>(aq) + NO<sub>3</sub><sup>&minus;</sup>(aq)</code></li><li><b>Net ionic equation:</b> Removes spectator ions (ions that appear unchanged on both sides).<br><code>Ag<sup>+</sup>(aq) + Cl<sup>&minus;</sup>(aq) &rarr; AgCl(s)</code></li></ol><p><b>Spectator ions</b> do not participate in the reaction. In the example above, Na<sup>+</sup> and NO<sub>3</sub><sup>&minus;</sup> are spectator ions.</p><p><b>Rules for writing ionic equations:</b></p><ul><li>Only strong electrolytes in aqueous solution are written as dissociated ions: strong acids (HCl, HBr, HI, HNO<sub>3</sub>, HClO<sub>4</sub>, H<sub>2</sub>SO<sub>4</sub>), strong bases (Group 1 hydroxides, Ba(OH)<sub>2</sub>, Ca(OH)<sub>2</sub>, Sr(OH)<sub>2</sub>), and soluble salts.</li><li>Weak electrolytes (weak acids like CH<sub>3</sub>COOH, weak bases like NH<sub>3</sub>), insoluble solids, gases, and water are written as complete formulas.</li><li>Use solubility rules to determine if a product precipitates.</li></ul>',
          keyPoints: [
            'Strong electrolytes dissociate completely and are written as ions in ionic equations.',
            'Weak electrolytes, molecular compounds, gases, solids, and water are kept as complete formulas.',
            'Spectator ions appear identically on both sides and are removed in the net ionic equation.',
            'Net ionic equations reveal the essential chemistry of the reaction.',
            'The net ionic equation must be balanced for both atoms AND charge.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Writing a Net Ionic Equation for a Precipitation Reaction',
              body: '<p><b>Q:</b> Write the net ionic equation for the reaction between Pb(NO<sub>3</sub>)<sub>2</sub>(aq) and KI(aq).</p><p><b>A:</b> Molecular: Pb(NO<sub>3</sub>)<sub>2</sub>(aq) + 2 KI(aq) &rarr; PbI<sub>2</sub>(s) + 2 KNO<sub>3</sub>(aq). Complete ionic: Pb<sup>2+</sup>(aq) + 2 NO<sub>3</sub><sup>&minus;</sup>(aq) + 2 K<sup>+</sup>(aq) + 2 I<sup>&minus;</sup>(aq) &rarr; PbI<sub>2</sub>(s) + 2 K<sup>+</sup>(aq) + 2 NO<sub>3</sub><sup>&minus;</sup>(aq). Spectator ions: K<sup>+</sup> and NO<sub>3</sub><sup>&minus;</sup>. <b>Net ionic: Pb<sup>2+</sup>(aq) + 2 I<sup>&minus;</sup>(aq) &rarr; PbI<sub>2</sub>(s)</b>. Check: 1 Pb, 2 I, charge = 0 on each side. &#10003;</p>'
            }
          ],
          warnings: [
            'Do NOT dissociate weak acids (like HF, CH3COOH) or weak bases (like NH3) in ionic equations.',
            'Do NOT dissociate insoluble solids, even if they are ionic compounds (e.g., AgCl(s) stays as AgCl).',
            'Water is a molecular compound and is never dissociated in a net ionic equation.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Net ionic equations show only the species that actually react, with spectator ions removed. Strong electrolytes are written as ions; everything else stays as formulas.',
          keyPoints: [
            'Strong acids: HCl, HBr, HI, HNO3, HClO4, H2SO4.',
            'Strong bases: Group 1 hydroxides, Ca(OH)2, Sr(OH)2, Ba(OH)2.',
            'Check that atoms AND charge balance in the final net ionic equation.'
          ],
          formulae: []
        }
      },
      examTips: [
        'Net ionic equations appear on nearly every AP exam. Memorize the strong acids and the solubility rules.',
        'On FRQs, you earn separate points for correct formulas, balancing, and state symbols. Never skip state symbols.',
        'If the net ionic equation is identical to the molecular equation, it usually means no spectator ions were present (e.g., a reaction between two molecular compounds).'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 4.8: Acid-base net ionic equations', sec: 'content' },
        { color: 'blue', label: '\u2192 Unit 3: Solubility rules determine if a precipitate forms', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 7: Equilibrium expressions use net ionic equations', sec: 'content' }
      ],
      questionIds: ['U4Q004', 'U4Q005']
    },

    {
      id: 'U4.2.2', code: 'Topic 4.2', subtopic: '4.2',
      subtopicTitle: 'Net Ionic Equations', section: 'unit4',
      concepts: ['transformations', 'tra'],
      statement: 'Solubility rules predict whether an ionic compound will dissolve in water or form a precipitate. Common solubility rules must be applied to write correct net ionic equations.',
      content: {
        textbook: {
          explanation: '<p>To predict whether a precipitate forms when two aqueous ionic solutions are mixed, you must know <b>solubility rules</b>:</p><table><tr><th>Generally Soluble</th><th>Exceptions (Insoluble)</th></tr><tr><td>All Group 1 (Li<sup>+</sup>, Na<sup>+</sup>, K<sup>+</sup>) and NH<sub>4</sub><sup>+</sup> salts</td><td>None</td></tr><tr><td>All NO<sub>3</sub><sup>&minus;</sup> salts</td><td>None</td></tr><tr><td>All Cl<sup>&minus;</sup>, Br<sup>&minus;</sup>, I<sup>&minus;</sup> salts</td><td>Ag<sup>+</sup>, Pb<sup>2+</sup>, Hg<sub>2</sub><sup>2+</sup></td></tr><tr><td>All SO<sub>4</sub><sup>2&minus;</sup> salts</td><td>Ba<sup>2+</sup>, Pb<sup>2+</sup>, Ca<sup>2+</sup>, Sr<sup>2+</sup></td></tr></table><table><tr><th>Generally Insoluble</th><th>Exceptions (Soluble)</th></tr><tr><td>OH<sup>&minus;</sup></td><td>Group 1, Ba<sup>2+</sup>, Ca<sup>2+</sup>, Sr<sup>2+</sup></td></tr><tr><td>S<sup>2&minus;</sup></td><td>Group 1, Group 2, NH<sub>4</sub><sup>+</sup></td></tr><tr><td>CO<sub>3</sub><sup>2&minus;</sup>, PO<sub>4</sub><sup>3&minus;</sup></td><td>Group 1, NH<sub>4</sub><sup>+</sup></td></tr></table><p>When mixing two aqueous solutions, swap the cation-anion partners and check solubility. If a product is insoluble, a precipitation reaction occurs.</p>',
          keyPoints: [
            'All Group 1, NH4+, and NO3- salts are soluble &mdash; no exceptions needed for AP.',
            'Halide salts are soluble EXCEPT with Ag+, Pb2+, Hg22+.',
            'Sulfate salts are soluble EXCEPT with Ba2+, Pb2+, Ca2+, Sr2+.',
            'Hydroxides, sulfides, carbonates, and phosphates are generally insoluble (except Group 1 and NH4+ salts).',
            'A precipitate forms when an insoluble product would result from cation-anion recombination.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Predicting Precipitation',
              body: '<p><b>Q:</b> Will a precipitate form when Na<sub>2</sub>CO<sub>3</sub>(aq) is mixed with CaCl<sub>2</sub>(aq)? If so, write the net ionic equation.</p><p><b>A:</b> Swap partners: possible products are CaCO<sub>3</sub> and NaCl. By solubility rules, CaCO<sub>3</sub> is insoluble (carbonates are insoluble except Group 1 and NH<sub>4</sub><sup>+</sup>). NaCl is soluble. So a precipitate forms. Net ionic: <b>Ca<sup>2+</sup>(aq) + CO<sub>3</sub><sup>2&minus;</sup>(aq) &rarr; CaCO<sub>3</sub>(s)</b></p>'
            }
          ],
          warnings: [
            'Do not confuse "slightly soluble" with "insoluble" on the AP exam. For AP purposes, treat slightly soluble compounds (like CaSO4) as insoluble unless told otherwise.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Solubility rules predict precipitate formation. Know the common soluble groups (Group 1, NH4+, NO3-, most halides, most sulfates) and insoluble groups (OH-, S2-, CO32-, PO43-).',
          keyPoints: [
            'Swap cation-anion partners and check solubility of products.',
            'The precipitate is the driving force of the reaction.',
            'No precipitate = no reaction for metathesis (double replacement).'
          ],
          formulae: []
        }
      },
      examTips: [
        'You do NOT need to memorize every solubility rule, but know the major categories. The AP provides a reference table but being fast helps.',
        'Double-replacement (metathesis) reactions require a driving force: precipitate, gas, or water formation.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 4.7: Double-replacement reactions', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 7: Solubility equilibrium (Ksp)', sec: 'content' }
      ],
      questionIds: ['U4Q006']
    },

    {
      id: 'U4.2.3', code: 'Topic 4.2', subtopic: '4.2',
      subtopicTitle: 'Net Ionic Equations', section: 'unit4',
      concepts: ['transformations', 'tra'],
      statement: 'Acid-base neutralization and gas-forming reactions can also be represented as net ionic equations. The driving force may be the formation of water or an insoluble gas.',
      content: {
        textbook: {
          explanation: '<p>Besides precipitation, two other driving forces produce net ionic equations:</p><p><b>1. Water formation (acid-base neutralization):</b><br>When a strong acid reacts with a strong base, the net ionic equation is always:<br><code>H<sup>+</sup>(aq) + OH<sup>&minus;</sup>(aq) &rarr; H<sub>2</sub>O(l)</code><br>All other ions are spectators. If a weak acid or weak base is involved, it remains in molecular form.</p><p><b>2. Gas formation:</b><br>Some reactions produce gases that escape the solution. Common gas-forming reactions:<br>&bull; Carbonates + acid &rarr; CO<sub>2</sub>(g): CaCO<sub>3</sub>(s) + 2 H<sup>+</sup>(aq) &rarr; Ca<sup>2+</sup>(aq) + H<sub>2</sub>O(l) + CO<sub>2</sub>(g)<br>&bull; Sulfites + acid &rarr; SO<sub>2</sub>(g)<br>&bull; Sulfides + acid &rarr; H<sub>2</sub>S(g)<br>The unstable intermediate (e.g., H<sub>2</sub>CO<sub>3</sub>) decomposes immediately into water and gas.</p>',
          keyPoints: [
            'Strong acid + strong base: net ionic equation is always H+ + OH- -> H2O.',
            'Gas-forming reactions drive the reaction by removing a product from solution.',
            'Weak acids and weak bases are NOT dissociated in ionic equations.',
            'Carbonate + acid is a very common AP reaction producing CO2 gas.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Acid + Carbonate Net Ionic Equation',
              body: '<p><b>Q:</b> Write the net ionic equation for HCl(aq) + NaHCO<sub>3</sub>(aq).</p><p><b>A:</b> Molecular: HCl(aq) + NaHCO<sub>3</sub>(aq) &rarr; NaCl(aq) + H<sub>2</sub>O(l) + CO<sub>2</sub>(g). Complete ionic: H<sup>+</sup>(aq) + Cl<sup>&minus;</sup>(aq) + Na<sup>+</sup>(aq) + HCO<sub>3</sub><sup>&minus;</sup>(aq) &rarr; Na<sup>+</sup>(aq) + Cl<sup>&minus;</sup>(aq) + H<sub>2</sub>O(l) + CO<sub>2</sub>(g). Spectators: Na<sup>+</sup>, Cl<sup>&minus;</sup>. <b>Net ionic: H<sup>+</sup>(aq) + HCO<sub>3</sub><sup>&minus;</sup>(aq) &rarr; H<sub>2</sub>O(l) + CO<sub>2</sub>(g)</b></p>'
            }
          ],
          warnings: [
            'HCO3- is NOT further dissociated. It is a polyatomic ion that stays intact.',
            'When a weak acid is a reactant, write it in molecular form (e.g., CH3COOH, not CH3COO- + H+).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Three driving forces for aqueous reactions: precipitate formation, water formation (neutralization), and gas evolution. Each produces a distinct net ionic equation pattern.',
          keyPoints: [
            'Strong acid + strong base net ionic: H+ + OH- -> H2O (always!).',
            'Carbonate/bicarbonate + acid: always produces CO2 gas and water.',
            'Memorize the common gas-forming reactions for the AP exam.'
          ],
          formulae: []
        }
      },
      examTips: [
        'FRQ Question 4 on the AP exam often asks you to write a balanced net ionic equation for a described reaction. Practice all three driving force types.',
        'Always write H+ (not H3O+) in net ionic equations on the AP exam unless specifically asked for Bronsted-Lowry representation.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 4.8: Acid-base reaction theory', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 8: Acid-base equilibria and buffer net ionic equations', sec: 'content' }
      ],
      questionIds: ['U4Q007']
    },

    /* ============================================================
       TOPIC 4.3 — Representations of Reactions
       ============================================================ */
    {
      id: 'U4.3.1', code: 'Topic 4.3', subtopic: '4.3',
      subtopicTitle: 'Representations of Reactions', section: 'unit4',
      concepts: ['transformations', 'tra'],
      statement: 'Balanced chemical equations at the macroscopic level correspond to particulate diagrams at the molecular level. Particulate representations must show conservation of atoms.',
      content: {
        textbook: {
          explanation: '<p><b>Particulate diagrams</b> (also called particle-level or molecular-level representations) show individual atoms or molecules as circles or spheres. They provide a visual way to verify that a chemical equation is balanced.</p><p>In a correct particulate diagram:</p><ul><li>The number of each type of atom must be the same before and after the reaction (conservation of mass).</li><li>The arrangement of atoms changes &mdash; bonds are broken and new bonds are formed.</li><li>Molecules are shown with correct ratios matching the balanced equation coefficients.</li></ul><p>Particulate diagrams are especially useful for visualizing:</p><ul><li><b>Limiting reagent problems:</b> You can see which reactant runs out first and which has leftover particles.</li><li><b>Mixtures vs. pure substances:</b> Mixtures show different types of molecules intermixed.</li><li><b>Phase changes vs. chemical reactions:</b> In a phase change, the molecules stay the same but spacing changes. In a reaction, molecules are rearranged.</li></ul>',
          keyPoints: [
            'Particulate diagrams must conserve the number of each type of atom.',
            'Coefficients in the equation correspond to relative numbers of molecules in the diagram.',
            'Leftover molecules in a diagram indicate an excess reagent.',
            'These diagrams connect macroscopic observations to molecular-level explanations.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Interpreting a Particulate Diagram',
              body: '<p><b>Q:</b> A diagram shows 4 molecules of H<sub>2</sub> and 3 molecules of Cl<sub>2</sub> before reaction, and 6 molecules of HCl plus 1 molecule of H<sub>2</sub> after reaction. Is this consistent with H<sub>2</sub> + Cl<sub>2</sub> &rarr; 2 HCl?</p><p><b>A:</b> Yes. The balanced equation says 1 H<sub>2</sub> + 1 Cl<sub>2</sub> &rarr; 2 HCl. With 3 Cl<sub>2</sub> available, only 3 H<sub>2</sub> can react (Cl<sub>2</sub> is limiting). This produces 6 HCl with 1 H<sub>2</sub> left over. Atom check: Before: 8 H, 6 Cl. After: 6 H (in HCl) + 2 H (in H<sub>2</sub>) = 8 H; 6 Cl (in HCl). &#10003;</p>'
            }
          ],
          warnings: [
            'A common AP mistake is drawing a particulate diagram that does not conserve atoms. Always count every atom before and after.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Particulate diagrams show reactions at the molecular level. Atoms must be conserved. They reveal limiting reagents and excess reactants visually.',
          keyPoints: [
            'Count each atom type before and after the reaction.',
            'Leftover molecules = excess reagent.',
            'Different molecules = chemical change; same molecules in different spacing = physical change.'
          ],
          formulae: []
        }
      },
      examTips: [
        'Particulate diagrams appear frequently on AP MCQ. Practice counting atoms quickly.',
        'When drawing your own diagram on an FRQ, use consistent symbols (e.g., shaded circle for O, open circle for H) and include a key.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 4.5: Limiting reagent shown in particulate diagrams', sec: 'content' },
        { color: 'blue', label: '\u2192 Unit 1: Particulate representations of matter', sec: 'content' }
      ],
      questionIds: ['U4Q008']
    },

    {
      id: 'U4.3.2', code: 'Topic 4.3', subtopic: '4.3',
      subtopicTitle: 'Representations of Reactions', section: 'unit4',
      concepts: ['transformations', 'tra'],
      statement: 'Balanced equations can be represented using symbolic (chemical formulas), particulate (molecular diagrams), and macroscopic (observable) levels. All three representations must be consistent.',
      content: {
        textbook: {
          explanation: '<p>Chemistry uses three levels of representation, and the AP exam frequently asks you to translate between them:</p><ol><li><b>Macroscopic:</b> What you observe &mdash; color changes, gas bubbles, precipitate forming, temperature changes.</li><li><b>Particulate (submicroscopic):</b> What is happening at the atomic/molecular level &mdash; atoms rearranging, bonds breaking/forming.</li><li><b>Symbolic:</b> Chemical equations, formulas, state symbols, and mathematical relationships.</li></ol><p>A complete understanding requires connecting all three. For example, when zinc metal is dropped into copper(II) sulfate solution:</p><ul><li><b>Macroscopic:</b> Gray zinc metal dissolves; blue solution fades; reddish-brown solid appears.</li><li><b>Symbolic:</b> Zn(s) + CuSO<sub>4</sub>(aq) &rarr; ZnSO<sub>4</sub>(aq) + Cu(s)</li><li><b>Particulate:</b> Zn atoms lose 2 electrons to become Zn<sup>2+</sup> ions in solution; Cu<sup>2+</sup> ions gain 2 electrons and deposit as Cu atoms on the zinc surface.</li></ul>',
          keyPoints: [
            'All three levels (macroscopic, particulate, symbolic) must tell the same story.',
            'AP questions may give you one level and ask you to describe another.',
            'Practice translating observations into equations and vice versa.'
          ],
          formulae: [],
          workedExamples: [],
          warnings: [],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Three levels of representation: macroscopic (what you see), particulate (atoms/molecules), and symbolic (equations/formulas). They must be consistent.',
          keyPoints: [
            'FRQs often require explanations at the particulate level for macroscopic observations.',
            'Practice connecting observations to balanced equations to molecular diagrams.'
          ],
          formulae: []
        }
      },
      examTips: [
        'AP scoring guidelines award separate points for macroscopic descriptions vs. particulate-level explanations. Always address both when asked to "explain."'
      ],
      connections: [
        { color: 'blue', label: '\u2192 Unit 1: Three levels of representation introduced', sec: 'content' },
        { color: 'teal', label: '\u2192 Topic 4.9: Redox at all three levels', sec: 'content' }
      ],
      questionIds: ['U4Q009']
    },

    /* ============================================================
       TOPIC 4.4 — Physical and Chemical Changes
       ============================================================ */
    {
      id: 'U4.4.1', code: 'Topic 4.4', subtopic: '4.4',
      subtopicTitle: 'Physical and Chemical Changes', section: 'unit4',
      concepts: ['transformations', 'tra', 'ene'],
      statement: 'Signs of a chemical change include color change, gas evolution, precipitate formation, temperature change, and light emission. Conservation of mass applies to all chemical changes.',
      content: {
        textbook: {
          explanation: '<p>While Topic 4.1 introduced the distinction between physical and chemical changes, this topic explores the <b>evidence</b> and <b>conservation principles</b> in greater depth.</p><p><b>Signs of a chemical change:</b></p><ul><li><b>Color change:</b> A new substance with different light-absorbing properties forms (e.g., phenolphthalein turning pink in base).</li><li><b>Gas evolution:</b> Bubbles form as a gaseous product is produced (e.g., Mg + HCl producing H<sub>2</sub> gas).</li><li><b>Precipitate formation:</b> An insoluble solid appears when two solutions are mixed (e.g., BaSO<sub>4</sub> forming from Ba<sup>2+</sup> and SO<sub>4</sub><sup>2&minus;</sup>).</li><li><b>Temperature change:</b> Exothermic reactions release heat; endothermic reactions absorb heat.</li><li><b>Light emission:</b> Some reactions produce light (chemiluminescence, combustion).</li></ul><p><b>Conservation of mass:</b> In any chemical reaction, the total mass of reactants equals the total mass of products. This is because atoms are rearranged but never created or destroyed. Antoine Lavoisier established this principle in the 18th century through careful measurements of combustion reactions.</p><p>If a reaction appears to lose mass (e.g., burning wood), it is because gaseous products (CO<sub>2</sub>, H<sub>2</sub>O) have escaped. In a closed system, mass is always conserved.</p>',
          keyPoints: [
            'Multiple signs of chemical change may appear simultaneously.',
            'Not every color change or temperature change is chemical (e.g., dissolving can produce heat).',
            'Conservation of mass: total mass of reactants = total mass of products.',
            'In an open system, apparent mass loss is due to gaseous products escaping.',
            'Lavoisier\'s experiments with closed-system combustion proved conservation of mass.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Conservation of Mass in a Precipitation Reaction',
              body: '<p><b>Q:</b> 50.0 g of Pb(NO<sub>3</sub>)<sub>2</sub>(aq) solution is mixed with 50.0 g of NaI(aq) solution. A yellow precipitate (PbI<sub>2</sub>) forms. What is the total mass after the reaction?</p><p><b>A:</b> By conservation of mass, the total mass is 50.0 + 50.0 = <b>100.0 g</b>. Even though a precipitate formed, no atoms were gained or lost. The solid simply settles out of solution.</p>'
            }
          ],
          warnings: [
            'Some physical changes also show "signs" (e.g., dissolving an ionic compound can release heat). Always verify by checking whether new substances formed.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Chemical changes produce new substances; evidence includes color change, gas, precipitate, temperature change, light. Mass is always conserved.',
          keyPoints: [
            'Signs of chemical change are evidence, not proof &mdash; confirm by checking if new substances formed.',
            'Conservation of mass is the foundation of balancing equations and stoichiometry.',
            'Open vs. closed system: mass may appear to change in an open system but is always conserved.'
          ],
          formulae: []
        }
      },
      examTips: [
        'AP MCQs love to ask "which observation provides the BEST evidence of a chemical change?" Look for the option that clearly indicates a new substance formed.',
        'Conservation of mass questions are easy points if you remember: total mass before = total mass after in a closed system.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 4.1: Definitions of physical and chemical changes', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 5: Energy changes (enthalpy) in reactions', sec: 'content' },
        { color: 'blue', label: '\u2192 Unit 1: Law of conservation of mass and atomic theory', sec: 'content' }
      ],
      questionIds: ['U4Q010']
    },

    {
      id: 'U4.4.2', code: 'Topic 4.4', subtopic: '4.4',
      subtopicTitle: 'Physical and Chemical Changes', section: 'unit4',
      concepts: ['transformations', 'tra', 'ene'],
      statement: 'At the particulate level, chemical changes involve the breaking of bonds in reactants and the formation of new bonds in products. The atoms are rearranged but conserved.',
      content: {
        textbook: {
          explanation: '<p>At the molecular level, a <b>chemical change</b> involves two simultaneous processes:</p><ol><li><b>Bond breaking</b> in reactant molecules (requires energy input &mdash; endothermic step).</li><li><b>Bond forming</b> to create product molecules (releases energy &mdash; exothermic step).</li></ol><p>The net energy change (whether the overall reaction is exothermic or endothermic) depends on the relative magnitudes of energy absorbed in bond breaking vs. energy released in bond forming.</p><p>In a <b>physical change</b>, no covalent or ionic bonds are broken or formed. Only the intermolecular forces (IMFs) change:</p><ul><li>Melting: IMFs partially overcome; molecules gain freedom to move.</li><li>Boiling: IMFs fully overcome; molecules separate into the gas phase.</li><li>Dissolving: Solute-solute IMFs and solvent-solvent IMFs are replaced by solute-solvent IMFs.</li></ul><p>This distinction is crucial: breaking IMFs = physical change; breaking intramolecular bonds = chemical change.</p>',
          keyPoints: [
            'Chemical change = breaking intramolecular bonds (covalent or ionic) and forming new ones.',
            'Physical change = altering intermolecular forces without changing molecular identity.',
            'Bond breaking always requires energy; bond forming always releases energy.',
            'The net energy change determines whether the reaction is exothermic or endothermic.'
          ],
          formulae: [],
          workedExamples: [],
          warnings: [
            'A very common AP error is confusing IMFs with intramolecular bonds. Boiling water does NOT break O-H bonds; it overcomes hydrogen bonds between water molecules.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Chemical changes break and form intramolecular bonds; physical changes only alter intermolecular forces. Atoms are conserved in both.',
          keyPoints: [
            'Breaking bonds: always endothermic. Forming bonds: always exothermic.',
            'Boiling water breaks IMFs, not covalent bonds &mdash; classic AP trap.',
            'This connects to enthalpy in Unit 5.'
          ],
          formulae: []
        }
      },
      examTips: [
        'If an FRQ asks you to explain a change "at the molecular level," explicitly discuss bonds or IMFs being broken/formed.',
        'The AP rubric awards points for distinguishing between intramolecular bonds and intermolecular forces.'
      ],
      connections: [
        { color: 'purple', label: '\u2192 Unit 5: Bond enthalpies and Hess\'s Law', sec: 'content' },
        { color: 'blue', label: '\u2192 Unit 3: IMFs vs. intramolecular bonds', sec: 'content' }
      ],
      questionIds: ['U4Q011']
    },

    /* ============================================================
       TOPIC 4.5 — Stoichiometry
       ============================================================ */
    {
      id: 'U4.5.1', code: 'Topic 4.5', subtopic: '4.5',
      subtopicTitle: 'Stoichiometry', section: 'unit4',
      concepts: ['quantification', 'spq'],
      statement: 'Stoichiometry uses mole ratios from balanced equations to convert between moles, mass, volume (of gases), and number of particles of reactants and products.',
      content: {
        textbook: {
          explanation: '<p><b>Stoichiometry</b> is the quantitative study of the amounts of reactants consumed and products formed in chemical reactions. The balanced equation provides <b>mole ratios</b> that serve as conversion factors.</p><p><b>The stoichiometry roadmap:</b></p><p>Mass &harr; Moles &harr; Mole Ratio &harr; Moles &harr; Mass (or Volume, or Particles)</p><ol><li><b>Convert given quantity to moles</b> using molar mass (g/mol), molarity (mol/L), or gas laws (PV = nRT).</li><li><b>Use the mole ratio</b> from the balanced equation to convert moles of the given substance to moles of the desired substance.</li><li><b>Convert moles of the desired substance</b> to the requested unit (grams, liters, particles, etc.).</li></ol><p>The mole ratio is the heart of every stoichiometric calculation. For the reaction:<br><code>2 Al(s) + 3 Cl<sub>2</sub>(g) &rarr; 2 AlCl<sub>3</sub>(s)</code></p><ul><li>2 mol Al : 3 mol Cl<sub>2</sub> : 2 mol AlCl<sub>3</sub></li><li>If you start with 4.0 mol Al, you need (4.0)(3/2) = 6.0 mol Cl<sub>2</sub></li></ul>',
          keyPoints: [
            'The balanced equation provides mole ratios &mdash; the central conversion factor.',
            'Always convert to moles first, then use the mole ratio, then convert to the desired unit.',
            'Molar mass (g/mol) converts between grams and moles.',
            'Avogadro\'s number (6.022 x 10^23) converts between moles and particles.',
            'For gases at known conditions, PV = nRT converts between volume and moles.'
          ],
          formulae: [
            '\\[ n = \\frac{m}{M} \\]\nmoles = mass / molar mass',
            '\\[ n = C \\times V \\]\nmoles = molarity \\( \\times \\) volume in L',
            '\\[ n = \\frac{PV}{RT} \\]\nmoles from ideal gas law',
            '\\[ \\text{Mole ratio} = \\frac{\\text{coefficient of desired}}{\\text{coefficient of given}} \\]'
          ],
          workedExamples: [
            {
              title: 'Mass-to-Mass Stoichiometry',
              body: '<p><b>Q:</b> How many grams of Fe<sub>2</sub>O<sub>3</sub> are produced when 10.0 g of Fe reacts completely with excess O<sub>2</sub>?<br>Reaction: 4 Fe + 3 O<sub>2</sub> &rarr; 2 Fe<sub>2</sub>O<sub>3</sub></p><p><b>A:</b><br>Step 1: mol Fe = 10.0 g &divide; 55.85 g/mol = 0.1790 mol Fe<br>Step 2: mol Fe<sub>2</sub>O<sub>3</sub> = 0.1790 mol Fe &times; (2 mol Fe<sub>2</sub>O<sub>3</sub> / 4 mol Fe) = 0.08952 mol Fe<sub>2</sub>O<sub>3</sub><br>Step 3: mass = 0.08952 mol &times; 159.7 g/mol = <b>14.3 g Fe<sub>2</sub>O<sub>3</sub></b></p>'
            },
            {
              title: 'Volume-to-Mass Stoichiometry with Gas',
              body: '<p><b>Q:</b> What mass of CaCO<sub>3</sub> is needed to produce 5.00 L of CO<sub>2</sub> at STP?<br>CaCO<sub>3</sub>(s) &rarr; CaO(s) + CO<sub>2</sub>(g)</p><p><b>A:</b><br>Step 1: mol CO<sub>2</sub> = 5.00 L &divide; 22.4 L/mol = 0.2232 mol<br>Step 2: mol CaCO<sub>3</sub> = 0.2232 mol (1:1 ratio)<br>Step 3: mass = 0.2232 mol &times; 100.1 g/mol = <b>22.3 g CaCO<sub>3</sub></b></p>'
            }
          ],
          warnings: [
            'ALWAYS start with a balanced equation. An unbalanced equation gives incorrect mole ratios.',
            'Pay attention to units: volumes must be in liters for molarity calculations and for PV = nRT (when R = 0.08206 L atm / mol K).',
            'Stoichiometry problems assume 100% yield unless stated otherwise.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Stoichiometry: given quantity -> moles -> mole ratio -> moles -> desired quantity. The balanced equation is essential.',
          keyPoints: [
            'Mass to moles: divide by molar mass. Moles to mass: multiply by molar mass.',
            'Solution to moles: n = M x V (in liters).',
            'Mole ratio comes directly from coefficients in the balanced equation.',
            'This skill is used in almost every AP FRQ.'
          ],
          formulae: [
            '\\[ n = \\frac{m}{M} \\]',
            '\\[ n = C \\times V \\]',
            '\\[ \\text{Mole ratio} = \\frac{\\text{coefficient desired}}{\\text{coefficient given}} \\]'
          ]
        }
      },
      examTips: [
        'Stoichiometry appears on virtually every AP Chemistry FRQ. Master the roadmap: grams -> moles -> ratio -> moles -> grams.',
        'Show all unit conversions and mole ratios explicitly for full credit. The AP rubric awards points for method even if arithmetic is wrong.',
        'When given a "react completely" or "excess" cue, you only need to do stoichiometry with the non-excess reactant.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 4.5 (U4.5.2): Limiting reagent extends basic stoichiometry', sec: 'content' },
        { color: 'blue', label: '\u2192 Unit 1: Mole concept and molar mass', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 5: Stoichiometry with enthalpy (calorimetry calculations)', sec: 'content' },
        { color: 'green', label: '\u2192 Unit 6: Stoichiometry with reaction rates', sec: 'content' }
      ],
      questionIds: ['U4Q012', 'U4Q013']
    },

    {
      id: 'U4.5.2', code: 'Topic 4.5', subtopic: '4.5',
      subtopicTitle: 'Stoichiometry', section: 'unit4',
      concepts: ['quantification', 'spq'],
      statement: 'When reactants are not in stoichiometric proportions, one reactant is consumed first (limiting reagent) and determines the maximum amount of product. The other reactant is in excess.',
      content: {
        textbook: {
          explanation: '<p>In most real-world reactions, reactants are not mixed in exact stoichiometric proportions. The <b>limiting reagent</b> (limiting reactant) is the reactant that is completely consumed first and determines the maximum amount of product that can form. The <b>excess reagent</b> is the reactant that remains after the limiting reagent is used up.</p><p><b>Method to identify the limiting reagent:</b></p><ol><li>Convert both (or all) reactant quantities to moles.</li><li>Divide each amount in moles by its coefficient in the balanced equation.</li><li>The reactant with the <b>smallest</b> quotient is the limiting reagent.</li></ol><p>Alternatively, you can calculate how much of one reactant is needed to react with the given amount of the other, and compare to what is available.</p><p><b>Calculating excess remaining:</b><br>Once you identify the limiting reagent, use stoichiometry to find how many moles of the excess reagent are consumed, then subtract from the initial amount.</p>',
          keyPoints: [
            'The limiting reagent is completely consumed and determines the maximum product.',
            'To find the limiting reagent: divide moles of each reactant by its coefficient. Smallest ratio = limiting.',
            'The excess reagent has leftover moles after the reaction.',
            'Always use the limiting reagent (not the excess) for product calculations.'
          ],
          formulae: [
            'Limiting test: compare \\( \\frac{n_A}{\\text{coeff}_A} \\) vs. \\( \\frac{n_B}{\\text{coeff}_B} \\); smallest is limiting.',
            '\\[ n_{\\text{excess remaining}} = n_{\\text{initial}} - n_{\\text{consumed}} \\]'
          ],
          workedExamples: [
            {
              title: 'Identifying the Limiting Reagent',
              body: '<p><b>Q:</b> 3.00 mol N<sub>2</sub> is mixed with 6.00 mol H<sub>2</sub>. Which is the limiting reagent?<br>N<sub>2</sub> + 3 H<sub>2</sub> &rarr; 2 NH<sub>3</sub></p><p><b>A:</b> Divide by coefficients: N<sub>2</sub>: 3.00/1 = 3.00. H<sub>2</sub>: 6.00/3 = 2.00. H<sub>2</sub> has the smaller quotient, so <b>H<sub>2</sub> is the limiting reagent</b>.</p><p>Max NH<sub>3</sub> = 6.00 mol H<sub>2</sub> &times; (2 mol NH<sub>3</sub> / 3 mol H<sub>2</sub>) = <b>4.00 mol NH<sub>3</sub></b>.</p><p>Excess N<sub>2</sub> consumed = 6.00 mol H<sub>2</sub> &times; (1 mol N<sub>2</sub> / 3 mol H<sub>2</sub>) = 2.00 mol. N<sub>2</sub> remaining = 3.00 &minus; 2.00 = <b>1.00 mol N<sub>2</sub> excess</b>.</p>'
            }
          ],
          warnings: [
            'Do NOT assume the reactant present in the smaller mass or smaller number of moles is the limiting reagent. You MUST compare using the mole ratio.',
            'If a problem says "excess" for one reactant, the other is automatically the limiting reagent.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Limiting reagent = consumed first, determines max product. Find it by dividing moles of each reactant by its coefficient; smallest value is limiting.',
          keyPoints: [
            'Always convert to moles before comparing.',
            'The reactant with the smallest (mol / coefficient) ratio is limiting.',
            'Calculate excess remaining by subtracting what reacted from the initial amount.'
          ],
          formulae: [
            'Limiting test: \\( n / \\text{coefficient} \\) comparison',
            '\\[ n_{\\text{excess}} = n_{\\text{initial}} - n_{\\text{consumed}} \\]'
          ]
        }
      },
      examTips: [
        'Limiting reagent problems appear on almost every AP exam. The most common mistake is forgetting to use mole ratios and instead just comparing raw moles.',
        'On FRQs, clearly state which reagent is limiting and show the comparison that proves it.',
        'Particulate diagrams of limiting reagent problems are very common on MCQs.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 4.3: Particulate diagrams show limiting reagent visually', sec: 'content' },
        { color: 'teal', label: '\u2192 Topic 4.5 (U4.5.3): Percent yield builds on limiting reagent', sec: 'content' }
      ],
      questionIds: ['U4Q014', 'U4Q015']
    },

    {
      id: 'U4.5.3', code: 'Topic 4.5', subtopic: '4.5',
      subtopicTitle: 'Stoichiometry', section: 'unit4',
      concepts: ['quantification', 'spq'],
      statement: 'Theoretical yield is the maximum amount of product calculated from the limiting reagent. Percent yield compares the actual yield obtained experimentally to the theoretical yield.',
      content: {
        textbook: {
          explanation: '<p><b>Theoretical yield</b> is the maximum amount of product that can be formed from the limiting reagent, assuming the reaction goes to completion with no losses. It is calculated using stoichiometry.</p><p><b>Actual yield</b> is the amount of product actually obtained in the experiment. It is always less than or equal to the theoretical yield due to:</p><ul><li>Side reactions forming unwanted products</li><li>Incomplete reactions (equilibrium)</li><li>Mechanical losses (product left on glassware, lost during transfer)</li><li>Impure reactants</li></ul><p><b>Percent yield</b> measures the efficiency of a reaction:</p><p style="text-align:center; font-size:1.1em;"><b>% yield = (actual yield / theoretical yield) &times; 100%</b></p><p>A percent yield greater than 100% is not physically possible for a properly conducted experiment. If obtained, it indicates error (usually excess solvent not fully evaporated, or impurities in the product).</p>',
          keyPoints: [
            'Theoretical yield comes from stoichiometry using the limiting reagent.',
            'Actual yield is measured experimentally and is typically less than theoretical.',
            'Percent yield = (actual / theoretical) x 100%.',
            '% yield > 100% indicates experimental error, not extra product.',
            'Reasons for low yield: side reactions, incomplete reaction, mechanical losses, impurities.'
          ],
          formulae: [
            '\\[ \\%\\text{ yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\% \\]',
            '\\[ \\text{Theoretical yield} = n_{\\text{limiting}} \\times \\text{mole ratio} \\times M_{\\text{product}} \\]'
          ],
          workedExamples: [
            {
              title: 'Calculating Percent Yield',
              body: '<p><b>Q:</b> A student reacts 5.00 g of Al with excess HCl and collects 5.20 g of AlCl<sub>3</sub>. Calculate the percent yield.<br>2 Al + 6 HCl &rarr; 2 AlCl<sub>3</sub> + 3 H<sub>2</sub></p><p><b>A:</b><br>mol Al = 5.00 / 26.98 = 0.1853 mol<br>mol AlCl<sub>3</sub> (theoretical) = 0.1853 mol (2:2 ratio = 1:1)<br>Theoretical yield = 0.1853 &times; 133.3 = 24.70 g<br>% yield = (5.20 / 24.70) &times; 100% = <b>21.1%</b></p><p>The low yield suggests significant losses during the experiment or an incomplete reaction.</p>'
            }
          ],
          warnings: [
            'Always calculate theoretical yield from the LIMITING reagent, not the excess reagent.',
            'If given actual yield in one unit and theoretical in another, convert both to the same unit before dividing.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Theoretical yield = max product from limiting reagent. % yield = (actual/theoretical) x 100%. Always less than or equal to 100% in a correct experiment.',
          keyPoints: [
            'Identify limiting reagent first, then calculate theoretical yield.',
            '% yield > 100% means experimental error.',
            'Common reasons for low yield: side reactions, losses, incomplete reaction.'
          ],
          formulae: [
            '\\[ \\%\\text{ yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\% \\]'
          ]
        }
      },
      examTips: [
        'Percent yield calculations are straightforward AP points. Always show the theoretical yield calculation step.',
        'If an FRQ asks "explain why the actual yield is less than theoretical," give a specific, chemical reason (side reaction, equilibrium, etc.), not just "human error."'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 4.5 (U4.5.2): Must find limiting reagent first', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 7: Equilibrium reactions never reach 100% yield', sec: 'content' }
      ],
      questionIds: ['U4Q016']
    },

    /* ============================================================
       TOPIC 4.6 — Introduction to Titration
       ============================================================ */
    {
      id: 'U4.6.1', code: 'Topic 4.6', subtopic: '4.6',
      subtopicTitle: 'Introduction to Titration', section: 'unit4',
      concepts: ['quantification', 'spq'],
      statement: 'In an acid-base titration, a solution of known concentration (titrant) is added to a solution of unknown concentration (analyte) until the equivalence point is reached. At the equivalence point, moles of acid equal moles of base (for monoprotic acids).',
      content: {
        textbook: {
          explanation: '<p><b>Titration</b> is an analytical technique that uses a solution of known concentration (the <b>titrant</b>, delivered from a buret) to determine the concentration of an unknown solution (the <b>analyte</b>).</p><p><b>Key vocabulary:</b></p><ul><li><b>Standard solution:</b> The solution of accurately known concentration.</li><li><b>Equivalence point:</b> The point at which stoichiometrically equivalent amounts of acid and base have reacted. For a monoprotic acid-strong base titration: mol acid = mol base.</li><li><b>End point:</b> The point at which the indicator changes color. Ideally, the end point closely approximates the equivalence point.</li><li><b>Indicator:</b> A substance that changes color at or near the equivalence point (e.g., phenolphthalein: colorless in acid, pink in base).</li></ul><p><b>Titration calculation:</b><br>At the equivalence point, use the stoichiometric relationship:<br><code>n<sub>acid</sub> = n<sub>base</sub></code> (for 1:1 reactions)<br><code>M<sub>acid</sub> &times; V<sub>acid</sub> = M<sub>base</sub> &times; V<sub>base</sub></code></p><p>For non-1:1 stoichiometries (e.g., H<sub>2</sub>SO<sub>4</sub> + 2 NaOH), include the mole ratio:<br><code>M<sub>acid</sub> &times; V<sub>acid</sub> &times; n<sub>H+</sub> = M<sub>base</sub> &times; V<sub>base</sub> &times; n<sub>OH-</sub></code><br>Or more reliably, calculate moles separately and apply the mole ratio.</p>',
          keyPoints: [
            'Titrant = known concentration (from buret). Analyte = unknown concentration (in flask).',
            'Equivalence point: stoichiometric amounts have reacted (mol acid = mol base for 1:1).',
            'End point: indicator color change (should be close to equivalence point).',
            'At equivalence: M_acid x V_acid = M_base x V_base (for 1:1 monoprotic).',
            'For polyprotic acids or non-1:1 ratios, use mole ratios from the balanced equation.'
          ],
          formulae: [
            'At equivalence (1:1): \\( M_A \\times V_A = M_B \\times V_B \\)',
            'General: \\( n_{\\text{acid}} = M_{\\text{acid}} \\times V_{\\text{acid}} \\) and \\( n_{\\text{base}} = M_{\\text{base}} \\times V_{\\text{base}} \\); then apply mole ratio',
            '\\[ M_{\\text{unknown}} = \\frac{n_{\\text{known}} \\times \\text{ratio}}{V_{\\text{unknown}}} \\]'
          ],
          workedExamples: [
            {
              title: 'Monoprotic Acid-Base Titration',
              body: '<p><b>Q:</b> A 25.00 mL sample of HCl(aq) is titrated with 0.1000 M NaOH. The equivalence point is reached after 31.25 mL of NaOH is added. What is the concentration of the HCl?</p><p><b>A:</b> HCl + NaOH &rarr; NaCl + H<sub>2</sub>O (1:1 ratio).<br>mol NaOH = 0.1000 M &times; 0.03125 L = 0.003125 mol<br>mol HCl = 0.003125 mol (1:1)<br>M<sub>HCl</sub> = 0.003125 mol / 0.02500 L = <b>0.1250 M</b></p>'
            },
            {
              title: 'Diprotic Acid Titration',
              body: '<p><b>Q:</b> 20.00 mL of H<sub>2</sub>SO<sub>4</sub>(aq) is titrated with 0.2000 M NaOH. The equivalence point requires 36.00 mL of NaOH. Find the concentration of H<sub>2</sub>SO<sub>4</sub>.</p><p><b>A:</b> H<sub>2</sub>SO<sub>4</sub> + 2 NaOH &rarr; Na<sub>2</sub>SO<sub>4</sub> + 2 H<sub>2</sub>O.<br>mol NaOH = 0.2000 &times; 0.03600 = 0.007200 mol<br>mol H<sub>2</sub>SO<sub>4</sub> = 0.007200 / 2 = 0.003600 mol<br>M = 0.003600 / 0.02000 = <b>0.1800 M</b></p>'
            }
          ],
          warnings: [
            'Do NOT assume all titrations are 1:1. Always check the balanced equation for the mole ratio.',
            'Volume must be in LITERS when using M x V = n.',
            'The indicator chosen must change color at or near the pH of the equivalence point.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Titration determines unknown concentration using a standard solution. At the equivalence point, moles of acid and base are in stoichiometric ratio. Use M x V = n for each, then apply the mole ratio.',
          keyPoints: [
            'Monoprotic 1:1: M_A x V_A = M_B x V_B.',
            'Polyprotic: account for the number of H+ or OH- per formula unit.',
            'End point (indicator change) should approximate the equivalence point.',
            'Convert mL to L before calculating.'
          ],
          formulae: [
            '\\[ n = M \\times V \\]\n\\( V \\) in liters',
            'At equivalence: \\( n_{\\text{acid}} \\times \\text{ratio} = n_{\\text{base}} \\)'
          ]
        }
      },
      examTips: [
        'Titration calculations appear frequently on AP FRQs. Always write the balanced equation first and identify the mole ratio.',
        'The AP exam may give you a titration curve (pH vs. volume) and ask you to identify the equivalence point as the steepest part of the curve.',
        'Remember: at the equivalence point of a strong acid-strong base titration, pH = 7. For weak acid-strong base, pH > 7 at equivalence.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 4.5: Titration is a stoichiometry application', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 8: Titration curves, buffer region, and pH at equivalence', sec: 'content' }
      ],
      questionIds: ['U4Q017', 'U4Q018']
    },

    {
      id: 'U4.6.2', code: 'Topic 4.6', subtopic: '4.6',
      subtopicTitle: 'Introduction to Titration', section: 'unit4',
      concepts: ['quantification', 'spq'],
      statement: 'Indicators are weak acids or bases whose conjugate forms have different colors. The choice of indicator depends on the pH at the equivalence point of the titration.',
      content: {
        textbook: {
          explanation: '<p>An <b>indicator</b> is a weak acid (HIn) whose acid form and conjugate base form (In<sup>&minus;</sup>) have different colors. The indicator changes color over a pH range (typically about 2 pH units).</p><p><b>Common indicators for AP Chemistry:</b></p><ul><li><b>Phenolphthalein:</b> Colorless below pH 8.2, pink above pH 10.0. Best for strong acid-strong base or weak acid-strong base titrations.</li><li><b>Methyl orange:</b> Red below pH 3.1, yellow above pH 4.4. Best for strong acid-weak base titrations.</li><li><b>Bromothymol blue:</b> Yellow below pH 6.0, blue above pH 7.6. Good for strong acid-strong base titrations.</li></ul><p>The indicator must be chosen so that its color change range includes the pH at the equivalence point:</p><ul><li>Strong acid + strong base: equivalence pH = 7.0</li><li>Weak acid + strong base: equivalence pH &gt; 7.0 (conjugate base is formed)</li><li>Strong acid + weak base: equivalence pH &lt; 7.0 (conjugate acid is formed)</li></ul>',
          keyPoints: [
            'Indicators are weak acids that change color depending on pH.',
            'Choose an indicator whose transition range includes the equivalence point pH.',
            'Phenolphthalein is used most commonly for strong-strong and weak acid-strong base titrations.',
            'The end point (color change) should approximate the equivalence point.'
          ],
          formulae: [],
          workedExamples: [],
          warnings: [
            'Using the wrong indicator can cause significant error in determining the equivalence point.',
            'End point and equivalence point are NOT the same thing, though they should be close.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Indicators change color over a pH range. Choose one whose range includes the equivalence-point pH. Strong-strong: pH 7; weak acid-strong base: pH > 7; strong acid-weak base: pH < 7.',
          keyPoints: [
            'Phenolphthalein: colorless to pink (pH 8.2-10.0).',
            'Methyl orange: red to yellow (pH 3.1-4.4).',
            'End point approximates equivalence point if the right indicator is chosen.'
          ],
          formulae: []
        }
      },
      examTips: [
        'The AP exam often asks "which indicator is most appropriate?" Think about the equivalence-point pH first.',
        'You do not need to memorize exact indicator pH ranges for the AP exam, but you should know the concept of choosing indicators based on equivalence-point pH.'
      ],
      connections: [
        { color: 'purple', label: '\u2192 Unit 8: Detailed titration curves and indicator selection', sec: 'content' },
        { color: 'teal', label: '\u2192 Topic 4.8: Acid-base theory determines equivalence-point pH', sec: 'content' }
      ],
      questionIds: ['U4Q019']
    },

    /* ============================================================
       TOPIC 4.7 — Types of Chemical Reactions
       ============================================================ */
    {
      id: 'U4.7.1', code: 'Topic 4.7', subtopic: '4.7',
      subtopicTitle: 'Types of Chemical Reactions', section: 'unit4',
      concepts: ['transformations', 'tra'],
      statement: 'Chemical reactions can be classified into five major types: synthesis (combination), decomposition, single replacement, double replacement (metathesis), and combustion.',
      content: {
        textbook: {
          explanation: '<p>Classifying reactions by type helps predict products and balance equations:</p><ol><li><b>Synthesis (Combination):</b> Two or more substances combine to form one product.<br>General form: A + B &rarr; AB<br>Example: 2 Mg(s) + O<sub>2</sub>(g) &rarr; 2 MgO(s)</li><li><b>Decomposition:</b> One substance breaks down into two or more simpler substances.<br>General form: AB &rarr; A + B<br>Example: 2 H<sub>2</sub>O<sub>2</sub>(l) &rarr; 2 H<sub>2</sub>O(l) + O<sub>2</sub>(g)<br>Often requires heat, light, or a catalyst.</li><li><b>Single Replacement (Displacement):</b> An element replaces another element in a compound.<br>General form: A + BC &rarr; AC + B<br>Example: Zn(s) + CuSO<sub>4</sub>(aq) &rarr; ZnSO<sub>4</sub>(aq) + Cu(s)<br>The activity series predicts whether a replacement will occur.</li><li><b>Double Replacement (Metathesis):</b> Cations and anions of two ionic compounds exchange partners.<br>General form: AB + CD &rarr; AD + CB<br>Example: AgNO<sub>3</sub>(aq) + NaCl(aq) &rarr; AgCl(s) + NaNO<sub>3</sub>(aq)<br>Driven by formation of a precipitate, gas, or water.</li><li><b>Combustion:</b> A substance reacts with O<sub>2</sub>, typically producing heat and light.<br>Hydrocarbon combustion: C<sub>x</sub>H<sub>y</sub> + O<sub>2</sub> &rarr; CO<sub>2</sub> + H<sub>2</sub>O<br>Example: CH<sub>4</sub>(g) + 2 O<sub>2</sub>(g) &rarr; CO<sub>2</sub>(g) + 2 H<sub>2</sub>O(g)</li></ol>',
          keyPoints: [
            'Synthesis: A + B -> AB.',
            'Decomposition: AB -> A + B.',
            'Single replacement: A + BC -> AC + B (use activity series to predict).',
            'Double replacement: AB + CD -> AD + CB (needs a driving force).',
            'Combustion: fuel + O2 -> CO2 + H2O (for hydrocarbons).',
            'Some reactions fit multiple categories (e.g., combustion of a metal is also synthesis).'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Classifying Reactions',
              body: '<p><b>Q:</b> Classify each reaction: (a) 2 KClO<sub>3</sub> &rarr; 2 KCl + 3 O<sub>2</sub>, (b) Fe + CuSO<sub>4</sub> &rarr; FeSO<sub>4</sub> + Cu, (c) C<sub>2</sub>H<sub>6</sub> + 7/2 O<sub>2</sub> &rarr; 2 CO<sub>2</sub> + 3 H<sub>2</sub>O</p><p><b>A:</b> (a) Decomposition (one reactant breaks into two products). (b) Single replacement (Fe replaces Cu). (c) Combustion (hydrocarbon + O<sub>2</sub> &rarr; CO<sub>2</sub> + H<sub>2</sub>O).</p>'
            }
          ],
          warnings: [
            'Combustion of non-hydrocarbons (e.g., compounds containing N or S) may also produce NOx or SOx &mdash; but the AP exam usually focuses on hydrocarbon combustion.',
            'Single replacement reactions require consulting an activity series. Not every metal can displace every other metal.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Five reaction types: synthesis, decomposition, single replacement, double replacement, combustion. Learn the general forms to predict products.',
          keyPoints: [
            'Activity series determines feasibility of single replacement.',
            'Double replacement needs a driving force (precipitate, gas, or water).',
            'Complete combustion of hydrocarbons always gives CO2 + H2O.'
          ],
          formulae: []
        }
      },
      examTips: [
        'The AP exam rarely asks you to "classify" a reaction. Instead, it asks you to predict products, which requires knowing these patterns.',
        'Memorize: complete combustion of CxHy always produces CO2 and H2O.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 4.2: Net ionic equations for double replacement', sec: 'content' },
        { color: 'teal', label: '\u2192 Topic 4.9: Single replacement reactions involve redox', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 5: Combustion reactions and enthalpy of combustion', sec: 'content' }
      ],
      questionIds: ['U4Q020']
    },

    {
      id: 'U4.7.2', code: 'Topic 4.7', subtopic: '4.7',
      subtopicTitle: 'Types of Chemical Reactions', section: 'unit4',
      concepts: ['transformations', 'tra'],
      statement: 'The activity series ranks metals by their tendency to be oxidized. A more active metal can displace a less active metal from solution in a single-replacement reaction.',
      content: {
        textbook: {
          explanation: '<p>The <b>activity series</b> ranks metals in order of decreasing reactivity (tendency to be oxidized). A metal higher in the series can displace a metal lower in the series from an aqueous solution of its salt.</p><p><b>Abbreviated activity series (most to least reactive):</b><br>Li &gt; K &gt; Ba &gt; Ca &gt; Na &gt; Mg &gt; Al &gt; Zn &gt; Fe &gt; Ni &gt; Sn &gt; Pb &gt; <b>H<sub>2</sub></b> &gt; Cu &gt; Ag &gt; Pt &gt; Au</p><p><b>Key principles:</b></p><ul><li>Metals above H<sub>2</sub> in the series can react with acids to produce H<sub>2</sub> gas.</li><li>Metals below H<sub>2</sub> (Cu, Ag, Pt, Au) do NOT react with common acids like HCl or H<sub>2</sub>SO<sub>4</sub> (they require oxidizing acids like HNO<sub>3</sub>).</li><li>A more active metal will reduce the cation of a less active metal.</li></ul><p>Example: Zinc is above copper in the activity series, so:<br><code>Zn(s) + Cu<sup>2+</sup>(aq) &rarr; Zn<sup>2+</sup>(aq) + Cu(s)</code> &#10003; (reaction occurs)<br>But copper is below zinc, so:<br><code>Cu(s) + Zn<sup>2+</sup>(aq) &rarr;</code> no reaction.</p>',
          keyPoints: [
            'More active metals displace less active metals from solution.',
            'Metals above H2 react with acids to produce H2 gas.',
            'Metals below H2 (Cu, Ag, Pt, Au) do not react with typical acids.',
            'The activity series is a simplified version of standard reduction potentials.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Predicting Single Replacement Reactions',
              body: '<p><b>Q:</b> Will a reaction occur when iron metal is placed in a solution of CuSO<sub>4</sub>?</p><p><b>A:</b> Iron is above copper in the activity series, so iron can displace copper: Fe(s) + CuSO<sub>4</sub>(aq) &rarr; FeSO<sub>4</sub>(aq) + Cu(s). Yes, a reaction occurs. Observation: gray iron dissolves, reddish-brown copper deposits, and the blue solution fades.</p>'
            }
          ],
          warnings: [
            'You do NOT need to memorize the entire activity series for the AP exam, but you should know the general trend and where H2 falls.',
            'The AP reference table may provide reduction potentials, which serve the same purpose as the activity series.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'The activity series ranks metals by reactivity. A more active metal displaces a less active one. Metals above H2 react with acids; those below do not.',
          keyPoints: [
            'Li, K, Na, Ca, Mg, Al, Zn, Fe are above H2 (react with acids).',
            'Cu, Ag, Pt, Au are below H2 (do not react with common acids).',
            'This connects to redox and electrochemistry.'
          ],
          formulae: []
        }
      },
      examTips: [
        'The AP provides standard reduction potentials on the reference table, which function like an activity series. The more negative the E\u00B0, the more active the metal.',
        'Single replacement reactions are redox reactions. Be ready to assign oxidation states.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 4.9: Single replacement = redox', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 9: Standard reduction potentials and electrochemistry', sec: 'content' }
      ],
      questionIds: ['U4Q021']
    },

    /* ============================================================
       TOPIC 4.8 — Introduction to Acid-Base Reactions
       ============================================================ */
    {
      id: 'U4.8.1', code: 'Topic 4.8', subtopic: '4.8',
      subtopicTitle: 'Introduction to Acid-Base Reactions', section: 'unit4',
      concepts: ['transformations', 'tra', 'eqn'],
      statement: 'The Arrhenius definition classifies acids as substances that produce H+ ions in water and bases as substances that produce OH- ions. The Bronsted-Lowry definition is broader: acids are proton donors and bases are proton acceptors.',
      content: {
        textbook: {
          explanation: '<p>Two definitions of acids and bases are used in AP Chemistry:</p><p><b>1. Arrhenius Definition (narrower):</b></p><ul><li><b>Acid:</b> Produces H<sup>+</sup> (or H<sub>3</sub>O<sup>+</sup>) ions when dissolved in water. Example: HCl(aq) &rarr; H<sup>+</sup>(aq) + Cl<sup>&minus;</sup>(aq).</li><li><b>Base:</b> Produces OH<sup>&minus;</sup> ions when dissolved in water. Example: NaOH(aq) &rarr; Na<sup>+</sup>(aq) + OH<sup>&minus;</sup>(aq).</li><li><b>Limitation:</b> Only works in aqueous solution. Cannot explain bases like NH<sub>3</sub> that do not contain OH<sup>&minus;</sup>.</li></ul><p><b>2. Br&oslash;nsted-Lowry Definition (broader):</b></p><ul><li><b>Acid:</b> A proton (H<sup>+</sup>) donor.</li><li><b>Base:</b> A proton (H<sup>+</sup>) acceptor.</li><li>Works in any solvent, not just water.</li><li>Explains NH<sub>3</sub> as a base: NH<sub>3</sub> accepts a proton from water to form NH<sub>4</sub><sup>+</sup>.</li></ul><p>The Br&oslash;nsted-Lowry definition is preferred on the AP exam because it is more general.</p>',
          keyPoints: [
            'Arrhenius acid: produces H+ in water. Arrhenius base: produces OH- in water.',
            'Bronsted-Lowry acid: proton donor. Bronsted-Lowry base: proton acceptor.',
            'Bronsted-Lowry is more general and is the preferred definition for AP.',
            'NH3 is a Bronsted-Lowry base (accepts H+) but NOT an Arrhenius base (no OH- in formula).',
            'Water is amphoteric: it can act as both an acid and a base.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Identifying Acids and Bases',
              body: '<p><b>Q:</b> In the reaction NH<sub>3</sub>(aq) + H<sub>2</sub>O(l) &harr; NH<sub>4</sub><sup>+</sup>(aq) + OH<sup>&minus;</sup>(aq), identify the Br&oslash;nsted-Lowry acid and base.</p><p><b>A:</b> NH<sub>3</sub> accepts a proton from H<sub>2</sub>O, so <b>NH<sub>3</sub> is the base</b> and <b>H<sub>2</sub>O is the acid</b> (it donates a proton). This shows water acting as an acid and NH<sub>3</sub> acting as a base despite having no OH<sup>&minus;</sup> in its formula.</p>'
            }
          ],
          warnings: [
            'Do not confuse "strong" with "concentrated." A strong acid dissociates completely; concentration refers to how much solute is present per unit volume.',
            'The Lewis definition (Unit 3/8 concept) is even broader but is not the primary focus of Topic 4.8.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Arrhenius: acids produce H+, bases produce OH- (aqueous only). Bronsted-Lowry: acids donate H+, bases accept H+ (any solvent). BL is preferred for AP.',
          keyPoints: [
            'Water is amphoteric (acid or base depending on the reaction partner).',
            'NH3 is a BL base but not an Arrhenius base.',
            'Strong acids dissociate completely; weak acids dissociate partially.'
          ],
          formulae: []
        }
      },
      examTips: [
        'When the AP exam asks you to "identify the acid and base," always use the Bronsted-Lowry definition unless specifically asked for Arrhenius.',
        'Memorize the 6 strong acids: HCl, HBr, HI, HNO3, HClO4, H2SO4. Everything else is weak.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 4.8 (U4.8.2): Conjugate acid-base pairs', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 8: Acid-base equilibria, Ka, Kb, pH calculations', sec: 'content' }
      ],
      questionIds: ['U4Q022']
    },

    {
      id: 'U4.8.2', code: 'Topic 4.8', subtopic: '4.8',
      subtopicTitle: 'Introduction to Acid-Base Reactions', section: 'unit4',
      concepts: ['transformations', 'tra', 'eqn'],
      statement: 'In a Bronsted-Lowry reaction, the acid loses a proton to become its conjugate base, and the base gains a proton to become its conjugate acid. Every Bronsted-Lowry reaction involves two conjugate acid-base pairs.',
      content: {
        textbook: {
          explanation: '<p>In every Br&oslash;nsted-Lowry acid-base reaction, proton transfer creates <b>conjugate pairs</b>:</p><ul><li>An <b>acid</b> donates H<sup>+</sup> and becomes its <b>conjugate base</b> (the species that could accept that proton back).</li><li>A <b>base</b> accepts H<sup>+</sup> and becomes its <b>conjugate acid</b> (the species that could donate that proton back).</li></ul><p>Example:<br><code>HF(aq) + H<sub>2</sub>O(l) &harr; F<sup>&minus;</sup>(aq) + H<sub>3</sub>O<sup>+</sup>(aq)</code></p><ul><li>Conjugate pair 1: HF (acid) / F<sup>&minus;</sup> (conjugate base)</li><li>Conjugate pair 2: H<sub>2</sub>O (base) / H<sub>3</sub>O<sup>+</sup> (conjugate acid)</li></ul><p><b>Key relationship:</b> A strong acid has a very weak conjugate base (it has almost no tendency to accept a proton back). Conversely, a weak acid has a relatively strong conjugate base.</p><p>For conjugate pairs: <b>K<sub>a</sub> &times; K<sub>b</sub> = K<sub>w</sub> = 1.0 &times; 10<sup>&minus;14</sup></b> at 25 &deg;C.</p>',
          keyPoints: [
            'Conjugate base = acid minus one H+.',
            'Conjugate acid = base plus one H+.',
            'Every BL reaction has two conjugate pairs.',
            'Strong acid = very weak conjugate base. Weak acid = relatively strong conjugate base.',
            'Ka x Kb = Kw for a conjugate pair.'
          ],
          formulae: [
            '\\[ K_a \\times K_b = K_w = 1.0 \\times 10^{-14} \\text{ at 25°C} \\]'
          ],
          workedExamples: [
            {
              title: 'Identifying Conjugate Pairs',
              body: '<p><b>Q:</b> Identify both conjugate acid-base pairs in: HSO<sub>4</sub><sup>&minus;</sup>(aq) + NH<sub>3</sub>(aq) &harr; SO<sub>4</sub><sup>2&minus;</sup>(aq) + NH<sub>4</sub><sup>+</sup>(aq)</p><p><b>A:</b> Pair 1: HSO<sub>4</sub><sup>&minus;</sup> (acid) / SO<sub>4</sub><sup>2&minus;</sup> (conjugate base). Pair 2: NH<sub>3</sub> (base) / NH<sub>4</sub><sup>+</sup> (conjugate acid). HSO<sub>4</sub><sup>&minus;</sup> donates a proton to NH<sub>3</sub>.</p>'
            }
          ],
          warnings: [
            'Amphoteric species like HSO4-, H2PO4-, HCO3-, and H2O can act as either acid or base depending on the reaction partner.',
            'Do not confuse "conjugate" with "opposite." The conjugate base of an acid is that SAME species minus one proton.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Every BL reaction involves two conjugate pairs. Acid loses H+ to become conjugate base; base gains H+ to become conjugate acid. Strong acid = weak conjugate base.',
          keyPoints: [
            'To find a conjugate base, remove one H+ and subtract 1 from the charge.',
            'To find a conjugate acid, add one H+ and add 1 to the charge.',
            'Ka x Kb = Kw links conjugate pair strengths.'
          ],
          formulae: ['\\[ K_a \\times K_b = K_w \\]']
        }
      },
      examTips: [
        'Conjugate pair identification is a guaranteed easy point on AP MCQs. Practice until it is automatic.',
        'The AP loves to ask about amphoteric species (like water or HCO3-). Know that they can act as acid OR base.'
      ],
      connections: [
        { color: 'purple', label: '\u2192 Unit 8: Ka, Kb, and the relationship Ka x Kb = Kw', sec: 'content' },
        { color: 'teal', label: '\u2192 Topic 4.6: Acid-base titrations apply these concepts', sec: 'content' }
      ],
      questionIds: ['U4Q023']
    },

    {
      id: 'U4.8.3', code: 'Topic 4.8', subtopic: '4.8',
      subtopicTitle: 'Introduction to Acid-Base Reactions', section: 'unit4',
      concepts: ['transformations', 'tra', 'eqn'],
      statement: 'Neutralization reactions between acids and bases produce water (and a salt). The net ionic equation for a strong acid-strong base reaction is H+(aq) + OH-(aq) -> H2O(l).',
      content: {
        textbook: {
          explanation: '<p>A <b>neutralization reaction</b> occurs when an acid reacts with a base to produce water and a salt (ionic compound).</p><p><b>Strong acid + strong base:</b><br>HCl(aq) + NaOH(aq) &rarr; NaCl(aq) + H<sub>2</sub>O(l)<br>Net ionic: H<sup>+</sup>(aq) + OH<sup>&minus;</sup>(aq) &rarr; H<sub>2</sub>O(l)</p><p><b>Weak acid + strong base:</b><br>CH<sub>3</sub>COOH(aq) + NaOH(aq) &rarr; NaCH<sub>3</sub>COO(aq) + H<sub>2</sub>O(l)<br>Net ionic: CH<sub>3</sub>COOH(aq) + OH<sup>&minus;</sup>(aq) &rarr; CH<sub>3</sub>COO<sup>&minus;</sup>(aq) + H<sub>2</sub>O(l)<br>(Weak acid stays in molecular form.)</p><p><b>Strong acid + weak base:</b><br>HCl(aq) + NH<sub>3</sub>(aq) &rarr; NH<sub>4</sub>Cl(aq)<br>Net ionic: H<sup>+</sup>(aq) + NH<sub>3</sub>(aq) &rarr; NH<sub>4</sub><sup>+</sup>(aq)</p><p>Notice that in each case, the driving force is the formation of a molecular compound (water) or a weak electrolyte from ionic species.</p>',
          keyPoints: [
            'Neutralization: acid + base -> water + salt.',
            'Strong-strong net ionic: H+ + OH- -> H2O (always).',
            'Weak acids and weak bases remain in molecular form in net ionic equations.',
            'The salt produced determines the pH of the resulting solution at the equivalence point.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Writing Neutralization Net Ionic Equations',
              body: '<p><b>Q:</b> Write the net ionic equation for the reaction of HNO<sub>3</sub>(aq) with KOH(aq).</p><p><b>A:</b> Both are strong (HNO<sub>3</sub> is a strong acid; KOH is a strong base). Molecular: HNO<sub>3</sub>(aq) + KOH(aq) &rarr; KNO<sub>3</sub>(aq) + H<sub>2</sub>O(l). All ions dissociate except water. Spectators: K<sup>+</sup>, NO<sub>3</sub><sup>&minus;</sup>. <b>Net ionic: H<sup>+</sup>(aq) + OH<sup>&minus;</sup>(aq) &rarr; H<sub>2</sub>O(l)</b></p>'
            }
          ],
          warnings: [
            'Weak acids and weak bases are NOT dissociated in net ionic equations. This is one of the most common mistakes on the AP exam.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Neutralization: acid + base -> water + salt. Strong-strong net ionic is always H+ + OH- -> H2O. Weak species stay molecular.',
          keyPoints: [
            'Memorize the strong acids and strong bases.',
            'Weak acid + strong base: the weak acid stays as a molecule.',
            'Strong acid + weak base: the weak base stays as a molecule.'
          ],
          formulae: []
        }
      },
      examTips: [
        'The AP FRQ "write the net ionic equation" question almost always involves one of these three neutralization patterns. Practice all three.',
        'Remember: the conjugate of the weak species determines the pH at the equivalence point.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 4.2: Net ionic equation writing skills', sec: 'content' },
        { color: 'teal', label: '\u2192 Topic 4.6: Titration applies neutralization quantitatively', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 8: pH at equivalence point depends on conjugate species', sec: 'content' }
      ],
      questionIds: ['U4Q024']
    },

    /* ============================================================
       TOPIC 4.9 — Oxidation-Reduction (Redox) Reactions
       ============================================================ */
    {
      id: 'U4.9.1', code: 'Topic 4.9', subtopic: '4.9',
      subtopicTitle: 'Oxidation-Reduction (Redox) Reactions', section: 'unit4',
      concepts: ['transformations', 'tra'],
      statement: 'Oxidation is the loss of electrons (increase in oxidation number); reduction is the gain of electrons (decrease in oxidation number). They always occur together.',
      content: {
        textbook: {
          explanation: '<p><b>Oxidation-reduction (redox) reactions</b> involve the transfer of electrons between species. Oxidation and reduction always occur simultaneously.</p><p><b>Key definitions:</b></p><ul><li><b>Oxidation:</b> Loss of electrons. The oxidation number increases. "OIL" (Oxidation Is Loss).</li><li><b>Reduction:</b> Gain of electrons. The oxidation number decreases. "RIG" (Reduction Is Gain).</li><li><b>OIL RIG</b> mnemonic: Oxidation Is Loss, Reduction Is Gain.</li><li><b>Oxidizing agent:</b> The species that gets reduced (it causes oxidation by accepting electrons).</li><li><b>Reducing agent:</b> The species that gets oxidized (it causes reduction by donating electrons).</li></ul><p><b>Rules for assigning oxidation numbers:</b></p><ol><li>Free elements: 0 (e.g., Fe, O<sub>2</sub>, N<sub>2</sub>)</li><li>Monatomic ions: charge of the ion (e.g., Na<sup>+</sup> = +1, Cl<sup>&minus;</sup> = &minus;1)</li><li>Hydrogen: +1 in most compounds (&minus;1 in metal hydrides like NaH)</li><li>Oxygen: &minus;2 in most compounds (&minus;1 in peroxides like H<sub>2</sub>O<sub>2</sub>)</li><li>Fluorine: always &minus;1</li><li>Group 1 metals: always +1; Group 2 metals: always +2</li><li>Sum of oxidation numbers = 0 for a neutral compound, or equals the charge for a polyatomic ion.</li></ol>',
          keyPoints: [
            'Oxidation = electron loss = oxidation number increases.',
            'Reduction = electron gain = oxidation number decreases.',
            'OIL RIG: Oxidation Is Loss, Reduction Is Gain.',
            'Oxidizing agent is reduced; reducing agent is oxidized.',
            'Free elements have oxidation number 0; monatomic ions have oxidation number = charge.',
            'Oxidation numbers must sum to the overall charge of the species.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Assigning Oxidation Numbers',
              body: '<p><b>Q:</b> Assign oxidation numbers to each atom in KMnO<sub>4</sub>.</p><p><b>A:</b> K = +1 (Group 1). O = &minus;2 (4 oxygens = &minus;8). Total must equal 0 for a neutral compound: +1 + Mn + (&minus;8) = 0, so <b>Mn = +7</b>.</p>'
            },
            {
              title: 'Identifying Oxidizing and Reducing Agents',
              body: '<p><b>Q:</b> In the reaction 2 Fe(s) + 3 Cl<sub>2</sub>(g) &rarr; 2 FeCl<sub>3</sub>(s), identify what is oxidized, what is reduced, and name the oxidizing and reducing agents.</p><p><b>A:</b> Fe goes from 0 to +3: <b>oxidized</b>. Fe is the <b>reducing agent</b>. Cl goes from 0 to &minus;1: <b>reduced</b>. Cl<sub>2</sub> is the <b>oxidizing agent</b>.</p>'
            }
          ],
          warnings: [
            'The oxidizing agent is the species that IS reduced (not the one that is oxidized). This is a common point of confusion.',
            'Oxidation numbers are a formalism for tracking electrons. They do not represent actual charges on atoms in covalent compounds.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Redox = electron transfer. Oxidation = loss of e- (ox. # increases). Reduction = gain of e- (ox. # decreases). OIL RIG. Oxidizing agent is reduced; reducing agent is oxidized.',
          keyPoints: [
            'Free elements: ox. # = 0.',
            'H = +1 (usually), O = -2 (usually), F = -1 (always).',
            'Sum of oxidation numbers = charge of the species.',
            'Identify agents by what happens TO the species, not what it does.'
          ],
          formulae: []
        }
      },
      examTips: [
        'The AP exam will ask you to assign oxidation numbers and identify oxidizing/reducing agents. Practice with transition metal compounds.',
        'Remember: the oxidizing agent is REDUCED and the reducing agent is OXIDIZED. This is the most commonly missed point.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 4.7: Single replacement reactions are redox reactions', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 9: Electrochemistry, cell potentials, and Faraday\'s Law', sec: 'content' }
      ],
      questionIds: ['U4Q025', 'U4Q026']
    },

    {
      id: 'U4.9.2', code: 'Topic 4.9', subtopic: '4.9',
      subtopicTitle: 'Oxidation-Reduction (Redox) Reactions', section: 'unit4',
      concepts: ['transformations', 'tra'],
      statement: 'Redox reactions can be balanced using the half-reaction method, which separates the oxidation and reduction processes, balances each for atoms and charge, and then combines them.',
      content: {
        textbook: {
          explanation: '<p>The <b>half-reaction method</b> is the systematic way to balance redox equations, especially in aqueous solution.</p><p><b>Steps for balancing redox in acidic solution:</b></p><ol><li><b>Separate</b> the reaction into two half-reactions (oxidation and reduction).</li><li><b>Balance atoms</b> other than O and H in each half-reaction.</li><li><b>Balance O</b> by adding H<sub>2</sub>O.</li><li><b>Balance H</b> by adding H<sup>+</sup>.</li><li><b>Balance charge</b> by adding electrons (e<sup>&minus;</sup>) to the more positive side.</li><li><b>Equalize electrons</b> in both half-reactions by multiplying by appropriate factors.</li><li><b>Add</b> the two half-reactions and cancel species that appear on both sides.</li><li><b>Verify</b> that atoms and charges balance.</li></ol><p><b>In basic solution:</b> After balancing as if in acidic solution, add OH<sup>&minus;</sup> to both sides to neutralize H<sup>+</sup> (H<sup>+</sup> + OH<sup>&minus;</sup> &rarr; H<sub>2</sub>O), then simplify.</p>',
          keyPoints: [
            'Split into oxidation and reduction half-reactions.',
            'Balance atoms: other elements, then O (with H2O), then H (with H+).',
            'Balance charge with electrons.',
            'Multiply half-reactions so electrons cancel when added.',
            'For basic solution: add OH- to neutralize H+ after balancing in acid.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Balancing Redox in Acidic Solution',
              body: '<p><b>Q:</b> Balance: MnO<sub>4</sub><sup>&minus;</sup>(aq) + Fe<sup>2+</sup>(aq) &rarr; Mn<sup>2+</sup>(aq) + Fe<sup>3+</sup>(aq) in acidic solution.</p><p><b>A:</b><br><b>Reduction half:</b> MnO<sub>4</sub><sup>&minus;</sup> &rarr; Mn<sup>2+</sup><br>Balance O: MnO<sub>4</sub><sup>&minus;</sup> &rarr; Mn<sup>2+</sup> + 4 H<sub>2</sub>O<br>Balance H: MnO<sub>4</sub><sup>&minus;</sup> + 8 H<sup>+</sup> &rarr; Mn<sup>2+</sup> + 4 H<sub>2</sub>O<br>Balance charge: MnO<sub>4</sub><sup>&minus;</sup> + 8 H<sup>+</sup> + 5 e<sup>&minus;</sup> &rarr; Mn<sup>2+</sup> + 4 H<sub>2</sub>O<br><br><b>Oxidation half:</b> Fe<sup>2+</sup> &rarr; Fe<sup>3+</sup> + e<sup>&minus;</sup><br><br>Equalize electrons (multiply oxidation by 5):<br>5 Fe<sup>2+</sup> &rarr; 5 Fe<sup>3+</sup> + 5 e<sup>&minus;</sup><br><br><b>Add:</b> MnO<sub>4</sub><sup>&minus;</sup> + 8 H<sup>+</sup> + 5 Fe<sup>2+</sup> &rarr; Mn<sup>2+</sup> + 4 H<sub>2</sub>O + 5 Fe<sup>3+</sup><br>Check: Mn: 1=1, O: 4=4, H: 8=8, Fe: 5=5. Charge: &minus;1+8+10=+17; +2+0+15=+17. &#10003;</p>'
            }
          ],
          warnings: [
            'Never skip the electron-balancing step. Electrons must cancel completely when half-reactions are added.',
            'In basic solution, every H+ is neutralized by adding OH- to BOTH sides. Do not forget to cancel resulting water molecules.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Half-reaction method: split, balance atoms (O with H2O, H with H+), balance charge with e-, equalize electrons, combine, verify. For basic: add OH- to neutralize H+.',
          keyPoints: [
            'Acidic: use H+ and H2O to balance O and H.',
            'Basic: balance in acid first, then add OH- to neutralize all H+.',
            'Electrons must cancel completely in the final equation.',
            'Check both atom AND charge balance at the end.'
          ],
          formulae: []
        }
      },
      examTips: [
        'Half-reaction balancing appears on AP FRQs. Practice both acidic and basic solution methods.',
        'The AP reference sheet provides some half-reactions with standard reduction potentials. You may only need to balance the overall equation by combining given half-reactions.',
        'On the AP exam, you typically get 1 point for each correctly balanced half-reaction and 1 point for the combined equation.'
      ],
      connections: [
        { color: 'purple', label: '\u2192 Unit 9: Half-reactions in electrochemical cells (galvanic and electrolytic)', sec: 'content' },
        { color: 'teal', label: '\u2192 Topic 4.9 (U4.9.1): Oxidation number rules for identifying redox', sec: 'content' }
      ],
      questionIds: ['U4Q027', 'U4Q028']
    },

    {
      id: 'U4.9.3', code: 'Topic 4.9', subtopic: '4.9',
      subtopicTitle: 'Oxidation-Reduction (Redox) Reactions', section: 'unit4',
      concepts: ['transformations', 'tra'],
      statement: 'Common types of redox reactions include combustion, single-replacement (displacement), combination of elements, and decomposition. Many reactions in biology and industry are redox processes.',
      content: {
        textbook: {
          explanation: '<p>Redox reactions are extremely common in chemistry and include many reaction types already studied:</p><ul><li><b>Combustion:</b> A substance reacts with O<sub>2</sub>. Oxygen is reduced (0 &rarr; &minus;2); the fuel is oxidized.<br>CH<sub>4</sub> + 2 O<sub>2</sub> &rarr; CO<sub>2</sub> + 2 H<sub>2</sub>O (C: &minus;4 &rarr; +4; O: 0 &rarr; &minus;2)</li><li><b>Single replacement:</b> A more active element displaces a less active one.<br>Zn + Cu<sup>2+</sup> &rarr; Zn<sup>2+</sup> + Cu (Zn oxidized, Cu<sup>2+</sup> reduced)</li><li><b>Combination of elements:</b> Elements combine to form a compound.<br>2 Na + Cl<sub>2</sub> &rarr; 2 NaCl</li><li><b>Decomposition (some):</b> When a compound breaks down into elements or simpler substances with electron transfer.<br>2 H<sub>2</sub>O &rarr; 2 H<sub>2</sub> + O<sub>2</sub> (electrolysis)</li></ul><p><b>Distinguishing redox from non-redox:</b> If no oxidation numbers change, the reaction is NOT redox. Double-replacement (metathesis) reactions are generally NOT redox because ions simply swap partners without changing oxidation states.</p><p><b>Real-world importance:</b> Photosynthesis, cellular respiration, corrosion, batteries, electroplating, and smelting of ores are all redox processes.</p>',
          keyPoints: [
            'Combustion, single replacement, and element combination are all redox.',
            'Double replacement (metathesis) is generally NOT redox.',
            'To verify redox: check if any oxidation numbers change.',
            'Redox is central to biology (respiration, photosynthesis) and industry (batteries, corrosion).'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Redox or Not?',
              body: '<p><b>Q:</b> Determine whether each reaction is redox: (a) 2 Na + 2 H<sub>2</sub>O &rarr; 2 NaOH + H<sub>2</sub>, (b) NaOH + HCl &rarr; NaCl + H<sub>2</sub>O</p><p><b>A:</b> (a) <b>Redox.</b> Na: 0 &rarr; +1 (oxidized). H in water: +1 &rarr; 0 in H<sub>2</sub> (reduced). (b) <b>Not redox.</b> No oxidation numbers change: Na stays +1, O stays &minus;2, H stays +1, Cl stays &minus;1. This is a neutralization (double replacement).</p>'
            }
          ],
          warnings: [
            'Not all reactions involving oxygen are redox. For example, acid-base reactions may involve oxygen but no oxidation state changes.',
            'Acid-base (proton transfer) reactions are NOT redox reactions.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Many common reaction types are redox (combustion, single replacement, element combination). Double replacement and acid-base neutralization are NOT redox. Check oxidation numbers to tell.',
          keyPoints: [
            'If all oxidation numbers stay the same, it is not redox.',
            'Redox is everywhere: batteries, corrosion, metabolism, photosynthesis.',
            'The AP exam often asks you to determine if a given reaction is redox.'
          ],
          formulae: []
        }
      },
      examTips: [
        'A common AP MCQ: "Which of the following is a redox reaction?" Quickly assign oxidation numbers to all elements and look for changes.',
        'Know that acid-base reactions are NOT redox. This is a frequent trap answer.'
      ],
      connections: [
        { color: 'teal', label: '\u2192 Topic 4.7: Reaction type classification', sec: 'content' },
        { color: 'purple', label: '\u2192 Unit 5: Energy released in combustion (enthalpy)', sec: 'content' },
        { color: 'green', label: '\u2192 Unit 9: Electrochemistry applies redox to generate electricity', sec: 'content' }
      ],
      questionIds: ['U4Q029']
    }
  ]
};

window.DB = window.DB || {};
if (!window.DB.u4labs) window.DB.u4labs = [];
