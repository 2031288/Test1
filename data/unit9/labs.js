/*
 *  AP Chemistry – Unit 9: Applications of Thermodynamics
 *  Data file: labs.js
 *  4 labs covering galvanic cells, electrolysis/Faraday's law, electroplating, and entropy-driven dissolution
 */

window.DB_U9_LABS = [

  {
    id: 'LAB_U9_01',
    title: 'Building and Measuring a Zn-Cu Galvanic Cell',
    type: 'Guided inquiry',
    duration: '75 min',
    linkedUnderstandings: ['U9.7.1', 'U9.7.3', 'U9.8.1'],
    aim: 'Construct a Zn-Cu galvanic cell, measure its cell potential, and verify the value predicted by the standard reduction potential table. Investigate the effect of changing ion concentration on cell potential.',
    skills: [
      'Assembling a galvanic cell from half-cell components',
      'Using a voltmeter to measure cell potential accurately',
      'Identifying the anode and cathode experimentally',
      'Relating measured E_cell to standard reduction potentials',
      'Observing the effect of concentration on cell potential (Nernst equation preview)'
    ],
    safetyPoints: [
      'Wear safety goggles and gloves — CuSO<sub>4</sub> is an irritant and ZnSO<sub>4</sub> can cause skin irritation.',
      'Do not ingest any solutions. Wash hands thoroughly after handling.',
      'Handle the voltmeter leads carefully to avoid short circuits.',
      'Dispose of metal solutions in designated heavy-metal waste containers, not the drain.'
    ],
    method: [
      'Part A — Standard Cell: Prepare 100 mL of 1.0 M CuSO<sub>4</sub> and 100 mL of 1.0 M ZnSO<sub>4</sub> in separate 150 mL beakers.',
      'Sand the surfaces of a Cu strip and a Zn strip with fine sandpaper to expose fresh metal. Measure the dimensions of each strip.',
      'Place the Cu strip in the CuSO<sub>4</sub> solution and the Zn strip in the ZnSO<sub>4</sub> solution.',
      'Prepare a salt bridge: soak a strip of filter paper in saturated KNO<sub>3</sub> solution. Drape the salt bridge between the two beakers with each end submerged in one solution.',
      'Connect the voltmeter leads: red (positive) to the Cu electrode, black (negative) to the Zn electrode. Record the cell potential reading.',
      'Compare the measured E_cell to the calculated E°<sub>cell</sub> = E°(Cu<sup>2</sup><sup>+</sup>/Cu) − E°(Zn<sup>2</sup><sup>+</sup>/Zn) = +0.34 − (−0.76) = +1.10 V.',
      'Part B — Effect of Concentration: Replace the 1.0 M CuSO<sub>4</sub> with 0.010 M CuSO<sub>4</sub>. Measure the new cell potential. Repeat with 0.10 M CuSO<sub>4</sub>.',
      'Record all three voltages (1.0 M, 0.10 M, 0.010 M CuSO<sub>4</sub>) with the ZnSO<sub>4</sub> concentration held at 1.0 M.',
      'For Part B, calculate the predicted E_cell using the Nernst equation for each concentration and compare to measured values.'
    ],
    expectedResults: 'Part A: Measured E_cell should be close to +1.10 V (typically 1.05–1.12 V due to solution impurities and junction potentials). The Zn strip should darken slightly as Zn dissolves. Part B: Decreasing [Cu<sup>2</sup><sup>+</sup>] increases Q, which decreases E_cell. At [Cu<sup>2</sup><sup>+</sup>] = 0.010 M, E ≈ 1.10 − (0.0592/2)log(1.0/0.010) = 1.10 − 0.059 = 1.04 V. At [Cu<sup>2</sup><sup>+</sup>] = 0.10 M, E ≈ 1.07 V.',
    discussionPoints: [
      'Why is the measured voltage slightly different from the calculated E°<sub>cell</sub>?',
      'What physical evidence confirms that the Zn electrode is the anode? (Look for mass loss or surface change.)',
      'What would happen if you reversed the voltmeter leads? What does a negative reading tell you?',
      'How does the Nernst equation explain the voltage decrease when [Cu<sup>2</sup><sup>+</sup>] is lowered?',
      'What would the cell potential be if [Cu<sup>2</sup><sup>+</sup>] = [Zn<sup>2</sup><sup>+</sup>] = 1.0 M in both solutions? Is this the same as E°<sub>cell</sub>?',
      'Predict what would happen to E_cell if you added NH<sub>3</sub> to the Zn half-cell, forming the Zn(NH<sub>3</sub>)<sub>4</sub><sup>2</sup><sup>+</sup> complex.'
    ]
  },

  {
    id: 'LAB_U9_02',
    title: 'Electrolysis of CuSO<sub>4</sub> and Faraday\'s Law Verification',
    type: 'Guided inquiry',
    duration: '90 min',
    linkedUnderstandings: ['U9.7.2', 'U9.10.1'],
    aim: 'Electrolyze a CuSO<sub>4</sub> solution, measure the mass of copper deposited at the cathode, and compare to the mass predicted by Faraday\'s law to determine Faraday\'s constant experimentally.',
    skills: [
      'Setting up an electrolytic cell with a DC power supply',
      'Measuring mass changes at electrodes using an analytical balance',
      'Applying Faraday\'s law to predict mass deposited from current and time',
      'Calculating Faraday\'s constant from experimental data',
      'Identifying sources of experimental error'
    ],
    safetyPoints: [
      'Wear safety goggles, gloves, and a lab apron — CuSO<sub>4</sub> solution is an irritant.',
      'The DC power supply operates at low voltage but handle electrodes carefully to avoid short circuits.',
      'Rinse electrodes with distilled water over the electrolysis beaker to avoid losing deposited copper.',
      'Dispose of CuSO<sub>4</sub> solution in designated heavy-metal waste containers.'
    ],
    method: [
      'Clean two copper strips with sandpaper and acetone. Dry thoroughly and label them "anode" and "cathode." Weigh each strip to the nearest 0.001 g on an analytical balance and record masses.',
      'Prepare 250 mL of 0.50 M CuSO<sub>4</sub> solution in a 400 mL beaker.',
      'Submerge both copper strips in the solution, approximately 5 cm apart. Connect the cathode to the negative terminal and the anode to the positive terminal of a DC power supply.',
      'Set the power supply to deliver a constant current of 0.50 A. Use an ammeter in series to verify the current. Start a timer simultaneously.',
      'Run the electrolysis for exactly 30.0 minutes (1800 s), keeping the current as constant as possible. Record any fluctuations.',
      'After 30.0 minutes, turn off the power supply. Carefully remove both electrodes, rinse gently with distilled water, and allow to dry completely (or use a low-temperature oven for 5 minutes).',
      'Weigh both electrodes again to 0.001 g. Calculate the mass gained by the cathode and the mass lost by the anode.',
      'Calculate the theoretical mass of Cu deposited using Faraday\'s law: q = I × t = 0.50 × 1800 = 900 C; mol e<sup>−</sup> = 900/96,485 = 0.009328; mol Cu = 0.009328/2 = 0.004664; mass = 0.004664 × 63.55 = 0.296 g.',
      'Calculate your experimental Faraday\'s constant: F_exp = (I × t × M_Cu) / (mass_deposited × n).',
      'Compare F_exp to the accepted value of 96,485 C/mol and calculate percent error.'
    ],
    expectedResults: 'Theoretical mass of Cu deposited = 0.296 g. Cathode should gain approximately 0.28–0.30 g. Anode should lose approximately the same mass. The experimental Faraday\'s constant should be within 5–10% of 96,485 C/mol. Common sources of error: incomplete drying of electrodes, current fluctuations, small pieces of copper falling off the cathode, and side reactions (trace H<sub>2</sub> or O<sub>2</sub> evolution).',
    discussionPoints: [
      'Why should the mass gained by the cathode theoretically equal the mass lost by the anode?',
      'What are possible sources of error that could cause your experimental F to differ from 96,485 C/mol?',
      'If you used a AgNO<sub>3</sub> solution instead of CuSO<sub>4</sub>, how would you modify the Faraday\'s law calculation? (Consider n for Ag<sup>+</sup>.)',
      'Why is copper electrorefining an industrial application of this same process?',
      'At the anode, could water be oxidized instead of copper? Explain using reduction potentials.',
      'How would doubling the current affect (a) the time needed to deposit the same mass and (b) the quality of the deposit?'
    ]
  },

  {
    id: 'LAB_U9_03',
    title: 'Electroplating with Copper',
    type: 'Guided inquiry',
    duration: '60 min',
    linkedUnderstandings: ['U9.7.2', 'U9.10.1', 'U9.10.2'],
    aim: 'Electroplate a metal key or coin with copper, observe the factors affecting coating quality, and apply Faraday\'s law to calculate the thickness of the deposited layer.',
    skills: [
      'Designing an electroplating setup with appropriate anode and cathode',
      'Controlling plating variables (current, time, solution concentration)',
      'Applying Faraday\'s law in a practical context',
      'Calculating deposit thickness from mass, density, and surface area',
      'Understanding the role of surface preparation in electroplating quality'
    ],
    safetyPoints: [
      'Wear safety goggles, gloves, and a lab apron.',
      'Acidified CuSO<sub>4</sub> contains dilute sulfuric acid — handle with care.',
      'Avoid touching your face after handling copper solutions.',
      'Rinse plated objects thoroughly before handling — residual acid may cause skin irritation.',
      'Dispose of all solutions in designated waste containers.'
    ],
    method: [
      'Prepare the object to be plated (a brass key or nickel coin): clean with fine sandpaper, rinse with acetone to remove grease, then rinse with distilled water. The object will serve as the CATHODE.',
      'Prepare the plating solution: dissolve 25 g CuSO<sub>4</sub>·5H<sub>2</sub>O in 200 mL distilled water and add 5 mL of dilute H<sub>2</sub>SO<sub>4</sub> (to improve conductivity and coating quality).',
      'Use a pure copper strip as the ANODE. Clean with sandpaper.',
      'Submerge both the object (cathode) and the copper strip (anode) in the plating solution.',
      'Connect to a DC power supply set at 0.20 A (low current for a smooth, even coating).',
      'Run for 20.0 minutes. Observe the copper color developing on the object.',
      'Remove the object, rinse gently, and observe the coating quality. Measure the mass change of both the object and the Cu anode.',
      'Calculate the theoretical mass of Cu deposited using Faraday\'s law and compare to actual mass gain.',
      'Estimate the thickness of the copper layer: thickness = mass / (density × surface area), using density of Cu = 8.96 g/cm<sup>3</sup>.',
      'Optional: Repeat at a higher current (0.50 A) for the same time and compare coating quality.'
    ],
    expectedResults: 'At 0.20 A for 20 min: q = 0.20 × 1200 = 240 C; mol e<sup>−</sup> = 240/96,485 = 0.00249; mol Cu = 0.00124; mass Cu = 0.0790 g. The plated object should show an even, shiny copper coating. At higher current (0.50 A), the coating may be thicker but rougher and more porous. Estimated thickness for a key with ~10 cm<sup>2</sup> surface area: 0.0790 g / (8.96 g/cm<sup>3</sup> × 10 cm<sup>2</sup>) ≈ 0.00088 cm ≈ 8.8 μm.',
    discussionPoints: [
      'Why must the object to be plated be the cathode and not the anode?',
      'Why does a higher current produce a rougher coating? (Think about deposition rate vs crystal growth.)',
      'What is the advantage of using a copper anode rather than an inert platinum anode?',
      'How does the acidified solution improve the plating process?',
      'In industrial chromium electroplating, Cr<sup>3</sup><sup>+</sup> + 3e<sup>−</sup> → Cr. How would the Faraday\'s law calculation change compared to Cu<sup>2</sup><sup>+</sup>?',
      'Why is surface preparation (cleaning, degreasing) critical for good adhesion of the plated layer?'
    ]
  },

  {
    id: 'LAB_U9_04',
    title: 'Entropy-Driven Dissolution: Endothermic Dissolving of NH<sub>4</sub>NO<sub>3</sub>',
    type: 'Guided inquiry',
    duration: '45 min',
    linkedUnderstandings: ['U9.1.1', 'U9.1.2', 'U9.3.1', 'U9.3.2'],
    aim: 'Observe that NH<sub>4</sub>NO<sub>3</sub> dissolves endothermically (temperature decreases) yet spontaneously, demonstrating that entropy can drive a process even against an unfavorable enthalpy change. Calculate ΔG for the dissolution.',
    skills: [
      'Measuring temperature changes during dissolution using a thermometer or probe',
      'Calculating ΔH_dissolution from temperature and calorimetry data',
      'Determining the sign of ΔS from the observation that the process is spontaneous despite being endothermic',
      'Applying ΔG = ΔH − TΔS to explain spontaneity',
      'Connecting molecular-level reasoning to macroscopic observations'
    ],
    safetyPoints: [
      'Wear safety goggles and gloves.',
      'NH<sub>4</sub>NO<sub>3</sub> is an oxidizer — do not mix with organic materials or combustible substances.',
      'The solution becomes very cold (can reach 0°C or below) — handle the beaker carefully to avoid cold burns.',
      'Dispose of NH<sub>4</sub>NO<sub>3</sub> solution as directed by your instructor — do not pour large quantities down the drain.'
    ],
    method: [
      'Measure 100.0 mL of distilled water into a Styrofoam cup calorimeter. Record the initial temperature (T_i) to the nearest 0.1°C.',
      'Weigh 10.0 g of NH<sub>4</sub>NO<sub>3</sub> (ammonium nitrate). Record the exact mass.',
      'Add the NH<sub>4</sub>NO<sub>3</sub> to the water and stir gently with a thermometer. Record the temperature every 30 seconds until a minimum is reached and the temperature stabilizes.',
      'Record the final (minimum) temperature (T_f). Calculate ΔT = T_f − T_i.',
      'Calculate the heat absorbed by the solution: q_soln = m × c × ΔT (use m = total mass of solution, c = 4.18 J/(g·°C)). Since ΔT < 0, q_soln < 0 (solution lost heat). So q_dissolution = −q_soln > 0 (endothermic).',
      'Calculate moles of NH<sub>4</sub>NO<sub>3</sub>: n = 10.0 g / 80.04 g/mol = 0.1249 mol.',
      'Calculate ΔH_diss = q_dissolution / n (should be approximately +25.7 kJ/mol).',
      'Key observation: The temperature dropped (endothermic), yet the NH<sub>4</sub>NO<sub>3</sub> dissolved spontaneously. This means ΔG < 0 despite ΔH > 0.',
      'Infer: Since ΔG = ΔH − TΔS < 0 and ΔH > 0, TΔS must be positive and larger than ΔH. Therefore ΔS > 0 — the entropy increase from dissolving drives the process.',
      'Using the literature value ΔG°_diss ≈ −6.7 kJ/mol and your measured ΔH, calculate ΔS_diss = (ΔH − ΔG) / T.'
    ],
    expectedResults: 'Temperature should drop by approximately 5–8°C (depending on exact conditions). ΔH_diss ≈ +25 kJ/mol (literature: +25.7 kJ/mol). The fact that dissolution occurs spontaneously despite being endothermic proves that the entropy increase (from breaking up the ionic lattice and dispersing ions in water) drives the process. Calculated ΔS ≈ +108 J/(mol·K), confirming a large positive entropy change.',
    discussionPoints: [
      'How does this experiment demonstrate that "spontaneous" does not mean "exothermic"?',
      'Why does the entropy increase when NH<sub>4</sub>NO<sub>3</sub> dissolves? Consider the ionic lattice breaking apart and ions dispersing.',
      'This is a Case 4 reaction (ΔH > 0, ΔS > 0). At what temperature would the dissolution become unfavorable? Is that a realistic temperature?',
      'Instant cold packs use NH<sub>4</sub>NO<sub>3</sub> dissolving in water. How does this experiment explain how they work?',
      'Compare with dissolving NaOH (exothermic, ΔH < 0). Is that dissolution also entropy-driven, or enthalpy-driven, or both?',
      'Could you design an experiment to find the exact temperature at which NH<sub>4</sub>NO<sub>3</sub> dissolution switches from favorable to unfavorable?'
    ]
  }

];

/* ── Attach to global DB ── */
if (window.DB) { window.DB.u9labs = window.DB_U9_LABS; } else { window.DB = { u9labs: window.DB_U9_LABS }; }
