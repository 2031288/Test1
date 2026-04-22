// Unit 4 — Chemical Reactions — Labs
// 4 labs covering stoichiometry, titration, reaction types, and redox
window.DB_U4_LABS = [

  /* LAB 1 — Stoichiometry and Limiting Reagent */
  {
    id: 'LAB_U4_01',
    title: 'Stoichiometry and Limiting Reagent: Sodium Bicarbonate and Acetic Acid',
    type: 'Guided inquiry',
    duration: '60 min',
    linkedUnderstandings: ['U4.5.1', 'U4.5.2', 'U4.5.3'],
    aim: 'Determine the limiting reagent in the reaction of sodium bicarbonate with acetic acid by measuring the mass of CO<sub>2</sub> produced, and calculate the percent yield.',
    skills: [
      'Performing stoichiometric calculations',
      'Identifying the limiting reagent experimentally',
      'Measuring mass changes accurately',
      'Calculating theoretical and percent yield'
    ],
    safetyPoints: [
      'Wear safety goggles and a lab apron.',
      'Acetic acid is an irritant; avoid skin and eye contact.',
      'Do not cap the reaction vessel tightly — CO<sub>2</sub> gas is produced and pressure will build.',
      'Clean up spills immediately with water.',
      'Wash hands after handling chemicals.'
    ],
    method: [
      'Write the balanced equation: NaHCO<sub>3</sub>(s) + CH<sub>3</sub>COOH(aq) → NaCH<sub>3</sub>COO(aq) + H<sub>2</sub>O(l) + CO<sub>2</sub>(g).',
      'Trial A (NaHCO<sub>3</sub> limiting): Measure 2.00 g of NaHCO<sub>3</sub> into a beaker. Add 25.0 mL of 2.0 M acetic acid (excess). Record the total initial mass of the beaker and contents.',
      'Allow the reaction to proceed to completion (no more bubbling). Record the final mass. The mass loss equals the mass of CO<sub>2</sub> that escaped.',
      'Calculate the theoretical yield of CO<sub>2</sub> from 2.00 g NaHCO<sub>3</sub> (the limiting reagent). Calculate the percent yield.',
      'Trial B (CH<sub>3</sub>COOH limiting): Measure 8.00 g of NaHCO<sub>3</sub> into a beaker. Add 10.0 mL of 1.0 M acetic acid (limiting). Repeat the mass measurement process.',
      'Calculate the theoretical yield of CO<sub>2</sub> from the acetic acid (now the limiting reagent). Calculate the percent yield.',
      'Compare the percent yields of both trials. Discuss which trial produced a higher percent yield and possible reasons for differences.',
      'Extension: Plot actual yield vs. theoretical yield for both trials and draw a line of perfect yield (slope = 1) for comparison.'
    ],
    expectedResults: 'Trial A: ~1.05 g CO<sub>2</sub> theoretical from 2.00 g NaHCO<sub>3</sub>. Actual yield should be slightly less due to some CO<sub>2</sub> dissolving in solution. Trial B: ~0.44 g CO<sub>2</sub> theoretical from 10.0 mL of 1.0 M acetic acid. Percent yields should be 85–95%, with the primary loss being CO<sub>2</sub> dissolved in the aqueous solution.',
    discussionPoints: [
      'How did you determine which reagent was limiting in each trial? Show the calculation.',
      'Why was the percent yield less than 100%? What happened to the "missing" CO<sub>2</sub>?',
      'How would performing the reaction in a closed system (with a balloon to capture CO<sub>2</sub>) change your results?',
      'If you increased the amount of the excess reagent further, would the yield of CO<sub>2</sub> increase? Why or why not?',
      'How does this experiment illustrate the law of conservation of mass?'
    ]
  },

  /* LAB 2 — Acid-Base Titration */
  {
    id: 'LAB_U4_02',
    title: 'Acid-Base Titration: Determining the Concentration of an Unknown Acid',
    type: 'Guided inquiry',
    duration: '75 min',
    linkedUnderstandings: ['U4.6.1', 'U4.6.2', 'U4.8.3'],
    aim: 'Use titration with a standardized NaOH solution to determine the concentration of an unknown hydrochloric acid solution, and explore the effect of indicator choice on endpoint accuracy.',
    skills: [
      'Proper use of a buret, pipet, and Erlenmeyer flask',
      'Performing titration with controlled addition of titrant',
      'Calculating molarity from titration data',
      'Selecting appropriate indicators',
      'Evaluating precision through replicate trials'
    ],
    safetyPoints: [
      'Wear safety goggles, gloves, and a lab apron at all times.',
      'NaOH and HCl are corrosive. Flush skin or eyes with water for 15 minutes if contact occurs.',
      'Handle burets carefully to avoid breakage.',
      'Rinse the buret with the solution it will contain before filling.',
      'Dispose of all waste solutions in designated containers.'
    ],
    method: [
      'Obtain a standardized NaOH solution (approximately 0.10 M; record the exact concentration provided by the instructor).',
      'Rinse a buret with a small amount of the NaOH solution, then fill the buret. Record the initial volume to the nearest 0.01 mL.',
      'Pipet 25.00 mL of the unknown HCl solution into an Erlenmeyer flask. Add 2–3 drops of phenolphthalein indicator.',
      'Slowly add NaOH from the buret, swirling continuously. As you approach the endpoint (first persistent pink tinge), add dropwise.',
      'Record the final buret reading when the solution turns pink and the color persists for at least 30 seconds.',
      'Calculate the volume of NaOH used and the concentration of HCl: M_HCl = (M_NaOH × V_NaOH) / V_HCl.',
      'Repeat for a total of three trials. Calculate the average concentration and the standard deviation.',
      'Part B (Indicator comparison): Repeat one titration using methyl orange instead of phenolphthalein. Compare the endpoint volume and discuss which indicator is more appropriate for this strong acid-strong base titration.'
    ],
    expectedResults: 'Three titration trials should agree within ±0.20 mL. The calculated HCl concentration should be consistent across trials (±0.002 M). For a strong acid-strong base titration, both phenolphthalein and bromothymol blue work well since the pH changes rapidly near the equivalence point (pH 3 → pH 11 within ~0.1 mL). Methyl orange may give a slightly earlier endpoint.',
    discussionPoints: [
      'Why is it important to rinse the buret with NaOH solution before filling it?',
      'How does the steep pH change near the equivalence point make this titration forgiving in terms of indicator choice?',
      'What would happen if you accidentally overshot the endpoint? How could you determine if your result is still valid?',
      'How would this procedure change if you were titrating a weak acid (like acetic acid) instead of HCl?',
      'Calculate the number of moles of HCl and NaOH at the equivalence point. Verify that they are equal (1:1 ratio).',
      'How does the precision of your buret readings affect the accuracy of your final answer?'
    ]
  },

  /* LAB 3 — Types of Chemical Reactions Observation */
  {
    id: 'LAB_U4_03',
    title: 'Observing Types of Chemical Reactions',
    type: 'Guided inquiry',
    duration: '60 min',
    linkedUnderstandings: ['U4.7.1', 'U4.4.1', 'U4.2.1'],
    aim: 'Observe and classify five chemical reactions (synthesis, decomposition, single replacement, double replacement, and combustion) and write balanced molecular and net ionic equations for each.',
    skills: [
      'Making careful macroscopic observations',
      'Classifying reactions by type',
      'Writing balanced equations from observations',
      'Connecting macroscopic evidence to particulate-level explanations'
    ],
    safetyPoints: [
      'Wear safety goggles, gloves, and a lab apron throughout.',
      'Use crucible tongs when handling heated materials.',
      'Perform combustion reactions only in a fume hood or well-ventilated area.',
      'Copper(II) sulfate and lead(II) nitrate solutions are toxic; avoid skin contact.',
      'Hydrochloric acid is corrosive; handle with care.',
      'Dispose of heavy metal waste (Pb, Cu) in designated containers — do NOT pour down the drain.'
    ],
    method: [
      'Reaction 1 — Synthesis: Hold a small piece of magnesium ribbon with crucible tongs and ignite it with a Bunsen burner. Observe the bright white light and white powder product (MgO). Write the balanced equation.',
      'Reaction 2 — Decomposition: Gently heat a small amount of copper(II) carbonate (CuCO<sub>3</sub>) in a test tube. Observe the color change (green → black) and test for CO<sub>2</sub> by holding a limewater-moistened glass rod at the mouth of the tube. Write the equation: CuCO<sub>3</sub> → CuO + CO<sub>2</sub>.',
      'Reaction 3 — Single Replacement: Place a small piece of zinc metal in 5 mL of 1.0 M CuSO<sub>4</sub> solution. Observe over 5 minutes: the zinc surface turns brown/copper-colored and the blue solution fades. Write the equation.',
      'Reaction 4 — Double Replacement (Precipitation): Mix 5 mL of 0.1 M Pb(NO<sub>3</sub>)<sub>2</sub> with 5 mL of 0.1 M KI. Observe the bright yellow precipitate (PbI<sub>2</sub>). Write the molecular, complete ionic, and net ionic equations.',
      'Reaction 5 — Combustion: Light a small candle (paraffin wax, C<sub>25</sub>H<sub>52</sub> approximately) and observe. Note the flame, melting wax, and products (hold a cold glass plate above the flame to collect water droplets; test for CO<sub>2</sub> with limewater). Write the balanced combustion equation.',
      'For each reaction, record: (a) macroscopic observations, (b) evidence of chemical change, (c) reaction type, (d) balanced equation, (e) net ionic equation if applicable.',
      'Create a summary table comparing all five reaction types.'
    ],
    expectedResults: 'Reaction 1: Bright white flame, white powder (MgO). Reaction 2: Green solid turns black (CuO), limewater turns milky (CO<sub>2</sub> confirmed). Reaction 3: Brown deposit on zinc, blue color fades. Reaction 4: Bright yellow precipitate forms immediately. Reaction 5: Flame produces heat and light; water condenses on glass; limewater turns milky.',
    discussionPoints: [
      'Which evidence of chemical change was observed in each reaction? Were multiple signs present?',
      'For Reaction 3 (single replacement), use the activity series to explain why zinc displaces copper but copper would not displace zinc.',
      'For Reaction 4, identify the spectator ions and explain why the net ionic equation is the most useful representation.',
      'Which of these five reactions are also redox reactions? Assign oxidation numbers to verify.',
      'Why is combustion always an exothermic reaction? Relate this to bond energies.',
      'How would you determine if a "reaction" has occurred if there are no visible changes?'
    ]
  },

  /* LAB 4 — Redox Reactions with Metals */
  {
    id: 'LAB_U4_04',
    title: 'Redox Reactions: Activity Series of Metals',
    type: 'Guided inquiry',
    duration: '60 min',
    linkedUnderstandings: ['U4.9.1', 'U4.9.3', 'U4.7.2'],
    aim: 'Experimentally determine the relative positions of several metals in the activity series by observing whether single-replacement reactions occur, and connect observations to oxidation-reduction concepts.',
    skills: [
      'Designing a systematic comparison experiment',
      'Observing and recording evidence of redox reactions',
      'Assigning oxidation numbers',
      'Constructing an activity series from experimental data',
      'Writing half-reactions and net ionic equations'
    ],
    safetyPoints: [
      'Wear safety goggles, gloves, and a lab apron.',
      'Metal salt solutions (Cu<sup>2</sup><sup>+</sup>, Pb<sup>2</sup><sup>+</sup>, Ag<sup>+</sup>) are toxic. Avoid skin contact.',
      'Silver nitrate stains skin — wear gloves and handle carefully.',
      'Do not touch metal pieces with bare hands after they have been in solution.',
      'Dispose of all heavy metal solutions in the designated waste container.',
      'Hydrochloric acid is corrosive; use with caution.'
    ],
    method: [
      'Obtain small pieces of four metals: copper (Cu), zinc (Zn), iron (Fe), and magnesium (Mg). Also obtain 0.1 M solutions of CuSO<sub>4</sub>, ZnSO<sub>4</sub>, FeSO<sub>4</sub>, and MgSO<sub>4</sub>.',
      'Create a 4×4 grid on a spot plate or in small test tubes. Each row represents a metal; each column represents a metal ion solution.',
      'Place a small piece of each metal into each solution (do NOT place a metal in its own ion solution — that is a control). Observe for 5–10 minutes.',
      'Record observations: look for color changes on the metal surface (deposition of a new metal), color changes in the solution, and gas bubbles.',
      'For each reaction that occurs, write: (a) the balanced molecular equation, (b) the net ionic equation, (c) the oxidation and reduction half-reactions, (d) identify the oxidizing and reducing agents.',
      'Based on your results, rank the four metals from most reactive (most easily oxidized) to least reactive.',
      'Extension: Test each metal with 1.0 M HCl. Record which metals produce H<sub>2</sub> gas bubbles. Use this to determine where H<sub>2</sub> falls in your activity series.',
      'Compare your experimental activity series with the accepted series. Discuss any discrepancies.'
    ],
    expectedResults: 'Expected reactions: Mg reduces Cu<sup>2</sup><sup>+</sup>, Zn<sup>2</sup><sup>+</sup>, and Fe<sup>2</sup><sup>+</sup>. Zn reduces Cu<sup>2</sup><sup>+</sup> and Fe<sup>2</sup><sup>+</sup>. Fe reduces Cu<sup>2</sup><sup>+</sup>. Cu does not reduce any of the other metal ions. With HCl, Mg, Zn, and Fe produce H<sub>2</sub>; Cu does not. Ranking (most to least reactive): Mg > Zn > Fe > H<sub>2</sub> > Cu.',
    discussionPoints: [
      'How did you determine the relative activity of each metal? What specific evidence told you a reaction occurred?',
      'Write the oxidation and reduction half-reactions for Zn + CuSO<sub>4</sub>. Label the oxidizing and reducing agents.',
      'Why does copper NOT react with ZnSO<sub>4</sub> solution? Explain using the concept of electron transfer and the activity series.',
      'Which metals reacted with HCl? What does this tell you about their position relative to hydrogen in the activity series?',
      'How does the activity series relate to standard reduction potentials (E°) that you will learn in Unit 9?',
      'If you were designing a battery, would you choose metals that are close together or far apart in the activity series? Why?'
    ]
  }
];

if (window.DB) { window.DB.u4labs = window.DB_U4_LABS; } else { window.DB = { u4labs: window.DB_U4_LABS }; }
