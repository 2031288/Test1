/*
 *  AP Chemistry – Unit 7: Equilibrium
 *  Data file: labs.js
 *  4 labs covering Le Chatelier's, Ksp, common-ion effect, and spectrophotometry
 */

window.DB_U7_LABS = [

  {
    id: 'LAB_U7_01',
    title: 'Le Chatelier\'s Principle: The FeSCN<sup>2</sup><sup>+</sup> Equilibrium',
    type: 'Guided inquiry',
    duration: '75 min',
    linkedUnderstandings: ['U7.9.1', 'U7.10.1'],
    aim: 'Observe and explain shifts in the FeSCN<sup>2</sup><sup>+</sup> equilibrium when concentration and temperature stresses are applied, using Le Chatelier\'s principle and Q vs K analysis.',
    skills: [
      'Preparing solutions of known concentration',
      'Observing and recording color changes as qualitative indicators of equilibrium shift',
      'Predicting direction of shift using Q vs K reasoning',
      'Applying Le Chatelier\'s principle to concentration and temperature changes'
    ],
    safetyPoints: [
      'Wear safety goggles and gloves — iron(III) chloride and potassium thiocyanate solutions can stain skin and clothing.',
      'Avoid ingestion — iron and thiocyanate salts are toxic in large amounts.',
      'Dispose of all solutions in the designated waste container (do not pour down the drain).',
      'If using a hot water bath, handle beakers with tongs and be aware of steam.'
    ],
    method: [
      'Prepare the equilibrium mixture: mix 5.0 mL of 0.0020 M Fe(NO<sub>3</sub>)<sub>3</sub> with 5.0 mL of 0.0020 M KSCN in a beaker. The solution turns red-orange due to FeSCN<sup>2</sup><sup>+</sup> formation: Fe<sup>3</sup><sup>+</sup>(aq) + SCN<sup>−</sup>(aq) ⇌ FeSCN<sup>2</sup><sup>+</sup>(aq).',
      'Divide the equilibrium mixture equally into 5 test tubes and label them A through E. Tube A is the reference (no changes).',
      'Tube B — Add reactant: Add 10 drops of 0.10 M Fe(NO<sub>3</sub>)<sub>3</sub>. Record the color change.',
      'Tube C — Add reactant: Add 10 drops of 0.10 M KSCN. Record the color change.',
      'Tube D — Remove product ions: Add a small spatula-tip of Na<sub>2</sub>HPO<sub>4</sub> (phosphate binds Fe<sup>3</sup><sup>+</sup>, effectively removing it). Record the color change.',
      'Tube E — Temperature stress: Place the tube in a hot water bath (~70 °C) for 2 minutes. Record any color change. Then place in an ice bath and observe.',
      'For each tube, compare the color intensity to the reference (Tube A) and determine the direction of the equilibrium shift.',
      'Explain each observation using Le Chatelier\'s principle and the Q vs K framework.'
    ],
    expectedResults: 'Tube B (add Fe<sup>3</sup><sup>+</sup>): color deepens (more FeSCN<sup>2</sup><sup>+</sup>, shift right). Tube C (add SCN<sup>−</sup>): color deepens (shift right). Tube D (remove Fe<sup>3</sup><sup>+</sup> with phosphate): color fades (shift left, more FeSCN<sup>2</sup><sup>+</sup> dissociates). Tube E: in hot water, color fades slightly (equilibrium shifts left for this exothermic formation reaction); in ice bath, color deepens.',
    discussionPoints: [
      'For each stress, identify whether Q > K or Q < K immediately after the stress was applied.',
      'Why does removing Fe<sup>3</sup><sup>+</sup> (Tube D) cause the solution to become lighter? Explain in terms of Q.',
      'The formation of FeSCN<sup>2</sup><sup>+</sup> is slightly exothermic. How does this explain the color changes with temperature?',
      'Would adding an inert salt like NaNO<sub>3</sub> shift the equilibrium? Why or why not?',
      'How could you use this reaction to quantitatively determine the concentration of Fe<sup>3</sup><sup>+</sup> in a solution?'
    ]
  },

  {
    id: 'LAB_U7_02',
    title: 'Determination of K_sp of Ca(OH)<sub>2</sub> by Titration',
    type: 'Guided inquiry',
    duration: '90 min',
    linkedUnderstandings: ['U7.11.1', 'U7.14.1'],
    aim: 'Determine the K_sp of calcium hydroxide by preparing a saturated solution and titrating the dissolved hydroxide with standardized hydrochloric acid.',
    skills: [
      'Preparing and filtering a saturated solution',
      'Performing an acid-base titration with phenolphthalein indicator',
      'Calculating molar solubility from titration data',
      'Deriving Ksp from molar solubility'
    ],
    safetyPoints: [
      'Wear safety goggles and gloves — Ca(OH)<sub>2</sub> is a strong base and can cause chemical burns.',
      'HCl is corrosive — handle with care and rinse any spills immediately.',
      'Filter the saturated solution carefully to avoid transferring undissolved Ca(OH)<sub>2</sub> particles.',
      'Dispose of all solutions in the designated base/acid waste container.'
    ],
    method: [
      'Add excess Ca(OH)<sub>2</sub> (about 2 g) to 100 mL of deionized water in a beaker. Stir vigorously for 10 minutes to establish the dissolution equilibrium.',
      'Allow the mixture to settle for 5 minutes, then gravity filter through filter paper into a clean, dry Erlenmeyer flask. The filtrate is the saturated Ca(OH)<sub>2</sub> solution.',
      'Pipette exactly 25.00 mL of the filtered saturated solution into a clean Erlenmeyer flask.',
      'Add 2–3 drops of phenolphthalein indicator (solution will be pink/magenta due to the basic solution).',
      'Fill a buret with standardized 0.050 M HCl. Record the initial buret reading.',
      'Titrate slowly, swirling continuously, until the pink color just disappears and remains colorless for at least 30 seconds (endpoint). Record the final buret reading.',
      'Repeat the titration for two additional trials.',
      'Calculate the average volume of HCl used.',
      'Use the titration data to calculate [OH<sup>−</sup>] in the saturated solution: n(HCl) = n(OH<sup>−</sup>) at the equivalence point.',
      'From [OH<sup>−</sup>], find [Ca<sup>2</sup><sup>+</sup>] using stoichiometry: Ca(OH)<sub>2</sub> → Ca<sup>2</sup><sup>+</sup> + 2 OH<sup>−</sup>, so [Ca<sup>2</sup><sup>+</sup>] = [OH<sup>−</sup>]/2.',
      'Calculate Ksp = [Ca<sup>2</sup><sup>+</sup>][OH<sup>−</sup>]<sup>2</sup> and compare to the literature value (Ksp ≈ 4.7 × 10<sup>−</sup><sup>6</sup> at 25 °C).'
    ],
    expectedResults: 'The titration should require approximately 15–20 mL of 0.050 M HCl per 25.00 mL aliquot. [OH<sup>−</sup>] should be approximately 0.030–0.040 M, giving molar solubility s ≈ 0.015–0.020 M. Calculated Ksp should be in the range of 1 × 10<sup>−</sup><sup>6</sup> to 1 × 10<sup>−</sup><sup>5</sup>, close to the literature value of 4.7 × 10<sup>−</sup><sup>6</sup>.',
    discussionPoints: [
      'Why was it essential to filter the saturated solution thoroughly before titrating?',
      'If undissolved Ca(OH)<sub>2</sub> particles were transferred to the titration flask, how would this affect your calculated Ksp?',
      'Would the Ksp change if you used a larger volume of water to make the saturated solution? Explain.',
      'How does temperature affect the Ksp of Ca(OH)<sub>2</sub>? (Ca(OH)<sub>2</sub> dissolution is exothermic.)',
      'Calculate ΔG° for Ca(OH)<sub>2</sub> dissolution using your experimental Ksp and the equation ΔG° = −RT ln K.'
    ]
  },

  {
    id: 'LAB_U7_03',
    title: 'Common-Ion Effect on the Solubility of Ca(OH)<sub>2</sub>',
    type: 'Guided inquiry',
    duration: '75 min',
    linkedUnderstandings: ['U7.12.1', 'U7.11.1'],
    aim: 'Investigate how the presence of a common ion (Ca<sup>2</sup><sup>+</sup> or OH<sup>−</sup>) affects the molar solubility of Ca(OH)<sub>2</sub> and compare experimental results to calculated predictions.',
    skills: [
      'Preparing saturated solutions with and without common ions',
      'Performing titrations to measure molar solubility',
      'Comparing experimental and theoretical solubility values',
      'Applying the common-ion effect and Le Chatelier\'s principle'
    ],
    safetyPoints: [
      'Wear safety goggles and gloves throughout the experiment.',
      'Ca(OH)<sub>2</sub> and NaOH are strong bases — avoid skin contact.',
      'Handle CaCl<sub>2</sub> solutions carefully; they can cause mild irritation.',
      'Dispose of all waste in designated containers.'
    ],
    method: [
      'Prepare three saturated Ca(OH)<sub>2</sub> solutions in separate beakers: (A) in 100 mL deionized water, (B) in 100 mL of 0.10 M CaCl<sub>2</sub> (common ion: Ca<sup>2</sup><sup>+</sup>), (C) in 100 mL of 0.050 M NaOH (common ion: OH<sup>−</sup>).',
      'Add excess Ca(OH)<sub>2</sub> (~2 g) to each beaker. Stir for 10 minutes and allow to settle.',
      'Filter each solution through separate filter papers into clean, dry flasks.',
      'For each filtered solution, titrate a 25.00 mL aliquot with standardized 0.050 M HCl using phenolphthalein indicator.',
      'Record the volume of HCl required for each solution. Perform duplicate trials.',
      'Calculate [OH<sup>−</sup>] and molar solubility (s) for each solution.',
      'Using Ksp from Beaker A, predict the theoretical molar solubility in beakers B and C. Compare to experimental values.',
      'Organize results in a data table showing: solution type, [HCl] used, [OH<sup>−</sup>], s (experimental), s (theoretical).'
    ],
    expectedResults: 'Molar solubility in pure water (A) should be approximately 0.015–0.020 M. Solubility in CaCl<sub>2</sub> solution (B) should be significantly lower (~0.003–0.005 M due to common Ca<sup>2</sup><sup>+</sup> ion). Solubility in NaOH solution (C) should also be lower (~0.001–0.003 M due to common OH<sup>−</sup> ion). The common-ion effect should reduce solubility by a factor of 3–10× depending on the common ion concentration.',
    discussionPoints: [
      'Which common ion (Ca<sup>2</sup><sup>+</sup> or OH<sup>−</sup>) had a greater effect on reducing solubility? Explain using the Ksp expression.',
      'Why is the effect of OH<sup>−</sup> potentially larger? (Hint: look at the exponent in the Ksp expression.)',
      'If you used 0.10 M NaNO<sub>3</sub> instead of CaCl<sub>2</sub> or NaOH, would you expect the solubility to change? Why or why not?',
      'How do your experimental results compare to the theoretical predictions? Discuss possible sources of error.',
      'Describe a real-world application of the common-ion effect (e.g., water treatment, toothpaste formulation).'
    ]
  },

  {
    id: 'LAB_U7_04',
    title: 'Determining the Equilibrium Constant by Spectrophotometry',
    type: 'Guided inquiry',
    duration: '90 min',
    linkedUnderstandings: ['U7.4.1', 'U7.3.1'],
    aim: 'Determine the equilibrium constant for the FeSCN<sup>2</sup><sup>+</sup> formation reaction using spectrophotometry (Beer\'s law) to measure equilibrium concentrations.',
    skills: [
      'Using a spectrophotometer to measure absorbance',
      'Constructing and using a Beer\'s law calibration curve',
      'Calculating equilibrium concentrations from absorbance data',
      'Constructing an ICE table and computing K_c from experimental data'
    ],
    safetyPoints: [
      'Wear safety goggles and gloves.',
      'Iron(III) nitrate and potassium thiocyanate solutions stain skin and clothing.',
      'Handle cuvettes by the frosted sides only — fingerprints on clear sides affect absorbance readings.',
      'Dispose of all solutions in the metal-waste container.',
      'Clean cuvettes thoroughly between measurements.'
    ],
    method: [
      'Set the spectrophotometer to 447 nm (λ_max for FeSCN<sup>2</sup><sup>+</sup>).',
      'Prepare a calibration curve: Make 5 standard solutions of known [FeSCN<sup>2</sup><sup>+</sup>] (e.g., 1.0 × 10<sup>−</sup><sup>5</sup> to 5.0 × 10<sup>−</sup><sup>5</sup> M) by mixing excess Fe<sup>3</sup><sup>+</sup> (0.20 M Fe(NO<sub>3</sub>)<sub>3</sub> in 0.50 M HNO<sub>3</sub>) with known volumes of dilute KSCN (2.0 × 10<sup>−</sup><sup>4</sup> M). Since Fe<sup>3</sup><sup>+</sup> is in large excess, assume all SCN<sup>−</sup> is converted to FeSCN<sup>2</sup><sup>+</sup>.',
      'Measure the absorbance of each standard solution. Plot Absorbance vs [FeSCN<sup>2</sup><sup>+</sup>] and determine the molar absorptivity (slope = εl from Beer\'s law: A = εlc).',
      'Prepare 5 equilibrium mixtures by mixing equal volumes of 2.0 × 10<sup>−</sup><sup>3</sup> M Fe(NO<sub>3</sub>)<sub>3</sub> and varying concentrations of KSCN (2.0 × 10<sup>−</sup><sup>4</sup> M to 1.0 × 10<sup>−</sup><sup>3</sup> M). Fe<sup>3</sup><sup>+</sup> is NOT in excess here — equilibrium will be established.',
      'Measure the absorbance of each equilibrium mixture.',
      'Using the calibration curve, determine [FeSCN<sup>2</sup><sup>+</sup>]_eq from each absorbance.',
      'Construct an ICE table for each mixture: use the initial concentrations (accounting for dilution) and [FeSCN<sup>2</sup><sup>+</sup>]_eq to find [Fe<sup>3</sup><sup>+</sup>]_eq and [SCN<sup>−</sup>]_eq.',
      'Calculate K_c = [FeSCN<sup>2</sup><sup>+</sup>] / ([Fe<sup>3</sup><sup>+</sup>][SCN<sup>−</sup>]) for each mixture.',
      'Average the K_c values and compare to the literature value (~150 at 25 °C, depending on conditions).',
      'Report your results with percent error analysis.'
    ],
    expectedResults: 'The calibration curve should be linear (Beer\'s law). Calculated K_c values from the 5 equilibrium mixtures should be consistent (within 10–20% of each other) and in the range of 100–200. The average K_c should approximate the literature value of ~150.',
    discussionPoints: [
      'Why was 447 nm chosen as the measurement wavelength? What does λ_max mean?',
      'In the calibration standards, why was a large excess of Fe<sup>3</sup><sup>+</sup> used?',
      'How does Beer\'s law connect absorbance to concentration? What assumptions does it require?',
      'Did your 5 equilibrium mixtures give similar K_c values? They should — explain why K is independent of initial concentrations.',
      'What sources of error might cause your K_c values to differ from the literature value?',
      'How would performing this experiment at a higher temperature affect K? (The reaction is exothermic.)'
    ]
  }

];

if (window.DB) { window.DB.u7labs = window.DB_U7_LABS; } else { window.DB = { u7labs: window.DB_U7_LABS }; }
