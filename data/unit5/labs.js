// Unit 5 — Kinetics — Labs
// 4 labs covering rate law determination, temperature effects, enzyme kinetics, and activation energy
window.DB_U5_LABS = [

  /* LAB 1 — Rate Law Determination: Crystal Violet and NaOH */
  {
    id: 'LAB_U5_01',
    title: 'Rate Law Determination: Crystal Violet Fading with NaOH',
    type: 'Guided inquiry',
    duration: '75 min',
    linkedUnderstandings: ['U5.2.2', 'U5.3.1', 'U5.3.3'],
    aim: 'Determine the rate law for the reaction of crystal violet (CV<sup>+</sup>) with hydroxide ions by measuring absorbance over time under pseudo-first-order conditions, and confirm the reaction order using graphical analysis.',
    skills: [
      'Using a spectrophotometer/colorimeter to measure absorbance',
      'Applying Beer\'s Law to relate absorbance to concentration',
      'Creating linearized plots to determine reaction order',
      'Using pseudo-first-order conditions to simplify kinetics',
      'Calculating rate constants from graphical data'
    ],
    safetyPoints: [
      'Wear safety goggles and a lab apron — crystal violet stains skin and clothing.',
      'NaOH is corrosive; handle with care and flush any skin contact with water.',
      'Avoid ingestion of any chemicals.',
      'Dispose of all solutions in designated waste containers.',
      'Wipe up any spills immediately — crystal violet is difficult to remove once dried.'
    ],
    method: [
      'Prepare a 2.0 × 10<sup>−</sup><sup>5</sup> M crystal violet (CV<sup>+</sup>) solution and a 0.10 M NaOH solution. NaOH is in large excess to ensure pseudo-first-order conditions.',
      'Set the spectrophotometer to 590 nm (λ_max for crystal violet) and calibrate with a blank (distilled water).',
      'In a cuvette, mix 3.0 mL of CV<sup>+</sup> solution with 1.0 mL of 0.10 M NaOH. Start timing immediately.',
      'Record absorbance every 30 seconds for 15 minutes. The absorbance decreases as CV<sup>+</sup> reacts with OH<sup>−</sup> and the solution fades from purple to colorless.',
      'Calculate [CV<sup>+</sup>] at each time point using Beer\'s Law: A = εbc, so [CV<sup>+</sup>] is proportional to A (since ε and b are constant). Use [CV<sup>+</sup>] = A/A<sub>0</sub> × [CV<sup>+</sup>]<sub>0</sub>.',
      'Create three plots: (a) [CV<sup>+</sup>] vs t, (b) ln[CV<sup>+</sup>] vs t, (c) 1/[CV<sup>+</sup>] vs t.',
      'Determine which plot is linear. If ln[CV<sup>+</sup>] vs t is linear, the reaction is pseudo-first-order in CV<sup>+</sup>. Record the slope (= −k\').',
      'Calculate the true second-order rate constant: k = k\' / [OH<sup>−</sup>]<sub>0</sub>.',
      'Repeat with a different [NaOH] (e.g., 0.050 M) to verify that k\' changes proportionally, confirming first order in OH<sup>−</sup>.',
      'Optional: Repeat at a different temperature and use the Arrhenius equation to estimate Ea.'
    ],
    expectedResults: 'The ln[CV<sup>+</sup>] vs t plot should be linear, confirming pseudo-first-order behavior. The slope gives k\' ≈ 0.04–0.06 s<sup>−</sup><sup>1</sup> (depends on temperature and exact concentrations). The true rate constant k ≈ 0.4–0.6 M<sup>−</sup><sup>1</sup> s<sup>−</sup><sup>1</sup>. When [NaOH] is halved, k\' should approximately halve, confirming first order in OH<sup>−</sup>. Overall rate law: Rate = k[CV<sup>+</sup>][OH<sup>−</sup>].',
    discussionPoints: [
      'Why must NaOH be in large excess for this experiment to work? What would happen if CV<sup>+</sup> and NaOH were at equal concentrations?',
      'How does Beer\'s Law allow you to monitor concentration using absorbance?',
      'Which of the three plots was linear? What does this tell you about the reaction order in CV<sup>+</sup>?',
      'How did changing [NaOH] affect the pseudo-first-order rate constant k\'? What does this reveal about the order in OH<sup>−</sup>?',
      'What is the relationship between k (true rate constant) and k\' (pseudo rate constant)?',
      'How would performing the experiment at a higher temperature affect (a) the rate and (b) the time to reach a given absorbance?'
    ]
  },

  /* LAB 2 — Iodine Clock Reaction: Effect of Concentration on Rate */
  {
    id: 'LAB_U5_02',
    title: 'Iodine Clock Reaction: Determining Rate Law by the Method of Initial Rates',
    type: 'Guided inquiry',
    duration: '90 min',
    linkedUnderstandings: ['U5.1.2', 'U5.2.1', 'U5.2.2'],
    aim: 'Use the iodine clock reaction to determine the rate law for the reaction of persulfate (S<sub>2</sub>O<sub>8</sub><sup>2</sup><sup>−</sup>) with iodide (I<sup>−</sup>) by varying concentrations and measuring initial rates.',
    skills: [
      'Applying the method of initial rates',
      'Precise volumetric measurements with graduated cylinders',
      'Timing a color-change endpoint',
      'Calculating initial rates from time measurements',
      'Determining reaction orders from experimental data'
    ],
    safetyPoints: [
      'Wear safety goggles and a lab apron.',
      'Potassium persulfate and sodium thiosulfate are irritants — avoid skin contact.',
      'Starch indicator may stain; wipe spills immediately.',
      'Do not mix concentrated chemicals directly; always dilute as directed.',
      'Wash hands thoroughly after the experiment.'
    ],
    method: [
      'Prepare solutions: 0.20 M KI, 0.10 M (NH<sub>4</sub>)<sub>2</sub>S<sub>2</sub>O<sub>8</sub>, 0.010 M Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>, and starch indicator solution.',
      'The reaction monitored is: S<sub>2</sub>O<sub>8</sub><sup>2</sup><sup>−</sup>(aq) + 2 I<sup>−</sup>(aq) → 2 SO<sub>4</sub><sup>2</sup><sup>−</sup>(aq) + I<sub>2</sub>(aq). A known small amount of Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> is added as a "clock" — it reacts instantly with I<sub>2</sub> as it forms. When the thiosulfate is consumed, I<sub>2</sub> accumulates and turns the starch solution blue-black.',
      'Set up 4 experiments varying [I<sup>−</sup>] and [S<sub>2</sub>O<sub>8</sub><sup>2</sup><sup>−</sup>]:\n  Exp 1: 10 mL KI + 10 mL (NH<sub>4</sub>)<sub>2</sub>S<sub>2</sub>O<sub>8</sub> + 5 mL Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> + 5 mL starch + 20 mL H<sub>2</sub>O\n  Exp 2: 20 mL KI + 10 mL (NH<sub>4</sub>)<sub>2</sub>S<sub>2</sub>O<sub>8</sub> + 5 mL Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> + 5 mL starch + 10 mL H<sub>2</sub>O\n  Exp 3: 10 mL KI + 20 mL (NH<sub>4</sub>)<sub>2</sub>S<sub>2</sub>O<sub>8</sub> + 5 mL Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> + 5 mL starch + 10 mL H<sub>2</sub>O\n  Exp 4: 20 mL KI + 20 mL (NH<sub>4</sub>)<sub>2</sub>S<sub>2</sub>O<sub>8</sub> + 5 mL Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> + 5 mL starch + 0 mL H<sub>2</sub>O',
      'For each experiment, mix the KI, Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>, starch, and water in one beaker. Add the (NH<sub>4</sub>)<sub>2</sub>S<sub>2</sub>O<sub>8</sub> solution and start timing.',
      'Record the time until the blue-black color appears. The initial rate is proportional to 1/t (since the same amount of S<sub>2</sub>O<sub>8</sub><sup>2</sup><sup>−</sup> reacts in each trial before the color appears).',
      'Calculate the actual concentrations of I<sup>−</sup> and S<sub>2</sub>O<sub>8</sub><sup>2</sup><sup>−</sup> in each experiment (accounting for dilution).',
      'Use the method of initial rates to determine the order with respect to I<sup>−</sup> and S<sub>2</sub>O<sub>8</sub><sup>2</sup><sup>−</sup>.',
      'Calculate the rate constant k.'
    ],
    expectedResults: 'Doubling [I<sup>−</sup>] (Exp 1 vs 2) should approximately halve the time, indicating first order in I<sup>−</sup>. Doubling [S<sub>2</sub>O<sub>8</sub><sup>2</sup><sup>−</sup>] (Exp 1 vs 3) should also halve the time, indicating first order in S<sub>2</sub>O<sub>8</sub><sup>2</sup><sup>−</sup>. Rate law: Rate = k[S<sub>2</sub>O<sub>8</sub><sup>2</sup><sup>−</sup>][I<sup>−</sup>]. The rate constant k ≈ 0.01–0.03 M<sup>−</sup><sup>1</sup> s<sup>−</sup><sup>1</sup> at room temperature.',
    discussionPoints: [
      'Why is the time to color change inversely proportional to the initial rate?',
      'What is the role of the thiosulfate "clock" in this experiment?',
      'How did changing each concentration affect the time? What orders did you determine?',
      'Why is the total volume kept constant across all experiments?',
      'How might temperature variations in the room affect your results? How would you control for this?',
      'If you added a catalyst (e.g., a few drops of CuSO<sub>4</sub> solution), how would you expect the time to change?'
    ]
  },

  /* LAB 3 — Effect of Temperature on Reaction Rate */
  {
    id: 'LAB_U5_03',
    title: 'Effect of Temperature on Rate: Determining Activation Energy',
    type: 'Guided inquiry',
    duration: '75 min',
    linkedUnderstandings: ['U5.1.2', 'U5.5.1', 'U5.5.2'],
    aim: 'Measure the rate of a reaction at multiple temperatures, then use the Arrhenius equation to determine the activation energy graphically from a plot of ln k vs 1/T.',
    skills: [
      'Controlling temperature as an experimental variable',
      'Measuring reaction rates at different temperatures',
      'Constructing Arrhenius plots (ln k vs 1/T)',
      'Determining activation energy from slope of Arrhenius plot',
      'Using water baths for temperature control'
    ],
    safetyPoints: [
      'Wear safety goggles and a lab apron.',
      'Use caution with hot water baths — burns are possible.',
      'Hydrochloric acid and sodium thiosulfate are irritants.',
      'Handle thermometers carefully to avoid breakage.',
      'Do not heat solutions above 60 °C for this experiment.'
    ],
    method: [
      'Use the thiosulfate-acid reaction: Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>(aq) + 2 HCl(aq) → 2 NaCl(aq) + S(s) + SO<sub>2</sub>(g) + H<sub>2</sub>O(l). The sulfur precipitate makes the solution turn cloudy.',
      'Place 25 mL of 0.10 M Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> and 25 mL of 0.50 M HCl in separate beakers. Equilibrate both to the target temperature in a water bath.',
      'Place the Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub> beaker over a piece of paper with a black "X" drawn on it.',
      'Add the HCl to the Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>, start timing, and swirl gently. Record the time until the "X" is no longer visible through the cloudy solution.',
      'Repeat at five temperatures: approximately 10 °C, 20 °C, 30 °C, 40 °C, and 50 °C. Use ice baths for lower temperatures and warm water baths for higher temperatures.',
      'Since the same endpoint criterion is used each time, the rate is proportional to 1/t. Calculate k\' = 1/t for each temperature.',
      'Create a table of T (K), 1/T (K<sup>−</sup><sup>1</sup>), k\' (or 1/t), and ln(k\').',
      'Plot ln(k\') vs 1/T. Draw the best-fit line.',
      'Calculate the slope of the line. Ea = −slope × R, where R = 8.314 J mol<sup>−</sup><sup>1</sup> K<sup>−</sup><sup>1</sup>.',
      'Convert Ea to kJ/mol and compare to the literature value (~54 kJ/mol for this reaction).'
    ],
    expectedResults: 'The reaction time should roughly halve for each 10 °C increase. The ln(k\') vs 1/T plot should be approximately linear with a negative slope. Ea ≈ 50–60 kJ/mol. The y-intercept gives ln A (the frequency factor). Some scatter is expected due to the subjective endpoint.',
    discussionPoints: [
      'Why does the reaction rate increase with temperature? Explain at the molecular level using collision theory.',
      'What is the significance of the slope of the ln k vs 1/T graph?',
      'What are the sources of error in this experiment? How does the subjective endpoint ("X" disappearing) affect precision?',
      'How would you modify this experiment to improve accuracy?',
      'Using your value of Ea, predict how much faster the reaction would be at 60 °C compared to 20 °C.',
      'How does this experiment relate to the Arrhenius equation k = Ae^(−Ea/RT)?'
    ]
  },

  /* LAB 4 — Enzyme Kinetics: Catalase Decomposition of H<sub>2</sub>O<sub>2</sub> */
  {
    id: 'LAB_U5_04',
    title: 'Enzyme Kinetics: Catalase-Catalyzed Decomposition of Hydrogen Peroxide',
    type: 'Guided inquiry',
    duration: '90 min',
    linkedUnderstandings: ['U5.11.1', 'U5.1.2', 'U5.6.2'],
    aim: 'Investigate the enzyme catalase as a biological catalyst for the decomposition of H<sub>2</sub>O<sub>2</sub>, measuring the rate of O<sub>2</sub> production and exploring the effects of enzyme concentration, substrate concentration, and temperature on reaction rate.',
    skills: [
      'Measuring gas production using water displacement or a gas pressure sensor',
      'Investigating the effect of enzyme and substrate concentration on rate',
      'Understanding enzyme saturation and Michaelis-Menten kinetics',
      'Comparing catalyzed and uncatalyzed reaction rates',
      'Designing controlled experiments with biological catalysts'
    ],
    safetyPoints: [
      'Wear safety goggles and a lab apron.',
      'H<sub>2</sub>O<sub>2</sub> (3%) is an irritant; avoid contact with skin and eyes.',
      'Do not inhale O<sub>2</sub> directly from the collection apparatus.',
      'Handle liver extract/yeast carefully; wash hands after handling.',
      'Dispose of biological materials in designated containers.',
      'Clean up H<sub>2</sub>O<sub>2</sub> spills immediately.'
    ],
    method: [
      'Prepare a catalase source: blend 10 g of fresh liver (or dissolve 5 g of dried yeast) in 100 mL of distilled water and filter. This is your enzyme stock solution.',
      'Part A — Catalyzed vs Uncatalyzed:\n  (1) Add 25 mL of 3% H<sub>2</sub>O<sub>2</sub> to a flask connected to a gas collection apparatus (inverted graduated cylinder over water). Add 5 mL of enzyme solution and immediately connect. Record the volume of O<sub>2</sub> collected every 30 s for 5 min.\n  (2) Repeat without enzyme solution (add 5 mL of water instead) as the control.',
      'Part B — Effect of Enzyme Concentration:\n  Repeat the catalyzed reaction using 1 mL, 3 mL, 5 mL, and 10 mL of enzyme solution (adjust water to keep total volume constant). Record O<sub>2</sub> production over time.',
      'Part C — Effect of Substrate Concentration:\n  Use 5 mL of enzyme solution with different H<sub>2</sub>O<sub>2</sub> concentrations: 0.5%, 1.0%, 2.0%, 3.0% (dilute stock 3% H<sub>2</sub>O<sub>2</sub> with water). Record O<sub>2</sub> production.',
      'Part D — Effect of Temperature:\n  Run the standard experiment (5 mL enzyme + 25 mL of 3% H<sub>2</sub>O<sub>2</sub>) at 10 °C, 25 °C, 37 °C, and 50 °C. Use water baths for temperature control.',
      'For each trial, calculate the initial rate as the slope of the O<sub>2</sub> volume vs time graph over the first 60 s.',
      'Plot initial rate vs [enzyme], initial rate vs [H<sub>2</sub>O<sub>2</sub>], and initial rate vs temperature.'
    ],
    expectedResults: 'Part A: The catalyzed reaction produces O<sub>2</sub> much faster (10–100× faster) than the uncatalyzed reaction. Part B: Rate increases linearly with enzyme concentration (more active sites). Part C: Rate increases with [H<sub>2</sub>O<sub>2</sub>] but levels off at high concentrations (enzyme saturation — all active sites occupied). Part D: Rate increases with temperature up to ~37 °C (optimum for mammalian catalase), then decreases sharply due to enzyme denaturation. Yeast catalase may show optimum near 30–35 °C.',
    discussionPoints: [
      'How does the catalyzed rate compare to the uncatalyzed rate? What does this tell you about the effect of catalase on Ea?',
      'Why does increasing enzyme concentration increase the rate? Is there a limit?',
      'Explain the shape of the rate vs [H<sub>2</sub>O<sub>2</sub>] graph. Why does the rate plateau at high substrate concentrations?',
      'How does the temperature profile differ from that of a typical non-enzymatic reaction? What happens above the optimum temperature and why?',
      'Is catalase a homogeneous or heterogeneous catalyst? Explain.',
      'How does this experiment illustrate that a catalyst is not consumed? Could you demonstrate this with your data?',
      'Relate the observed saturation behavior to the Michaelis-Menten model of enzyme kinetics.'
    ]
  }
];

if (window.DB) { window.DB.u5labs = window.DB_U5_LABS; } else { window.DB = { u5labs: window.DB_U5_LABS }; }
