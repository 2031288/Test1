// Unit 3 — Intermolecular Forces and Properties — Labs
// 5 labs covering IMFs, gas laws, Beer-Lambert, chromatography, vapor pressure
window.DB_U3_LABS = [

  /* LAB 1 — IMF and Boiling Point Investigation */
  {
    id: 'LAB_U3_01',
    title: 'Intermolecular Forces and Boiling Point',
    type: 'Guided inquiry',
    duration: '60 min',
    linkedUnderstandings: ['U3.1.1', 'U3.1.2', 'U3.2.2'],
    aim: 'Investigate the relationship between intermolecular force type/strength and the boiling points of various liquids.',
    skills: [
      'Identifying intermolecular forces from molecular structure',
      'Measuring temperature changes',
      'Constructing data tables and analyzing trends',
      'Drawing evidence-based conclusions'
    ],
    safetyPoints: [
      'Wear safety goggles and gloves at all times.',
      'Work in a well-ventilated area or fume hood (volatile organic liquids).',
      'No open flames near flammable liquids.',
      'Avoid skin contact with organic solvents.',
      'Dispose of organic waste in designated containers.'
    ],
    method: [
      'Obtain samples of the following liquids: water (H2O), ethanol (C2H5OH), acetone (CH3COCH3), hexane (C6H14), and diethyl ether (C2H5OC2H5).',
      'For each liquid, draw the Lewis structure and identify the IMFs present (LDF, dipole-dipole, hydrogen bonding).',
      'Record the molar mass and literature boiling point for each substance in a data table.',
      'Perform an evaporation rate test: place 2 drops of each liquid on separate filter paper squares and time how long each takes to evaporate at room temperature.',
      'Rank the liquids by evaporation rate (fastest to slowest) and by boiling point (lowest to highest).',
      'Create a chart comparing molar mass, IMF type, boiling point, and evaporation rate.',
      'Analyze whether molar mass alone predicts boiling point, or whether IMF type is the dominant factor.',
      'Write a conclusion explaining the relationship between IMF strength and boiling point/vapor pressure.'
    ],
    expectedResults: 'Diethyl ether and hexane should evaporate fastest (weakest IMFs: only LDF or weak dipole-dipole). Ethanol and especially water should evaporate most slowly due to hydrogen bonding. Water has the highest boiling point despite the lowest molar mass, demonstrating that IMF type (H-bonding) dominates over molar mass for these substances.',
    discussionPoints: [
      'Why does water have a much higher boiling point than diethyl ether, despite having a lower molar mass?',
      'How does molecular structure (presence of O-H vs. C-H bonds) determine which IMFs are possible?',
      'What is the relationship between evaporation rate and vapor pressure?',
      'Can you find any two liquids where molar mass alone correctly predicts the boiling point trend? What IMFs do those two share?',
      'How would the results change if you performed this experiment at a higher elevation (lower atmospheric pressure)?'
    ]
  },

  /* LAB 2 — Gas Laws Verification (Boyle's and Charles's Laws) */
  {
    id: 'LAB_U3_02',
    title: 'Verification of Gas Laws',
    type: 'Guided inquiry',
    duration: '75 min',
    linkedUnderstandings: ['U3.4.1', 'U3.5.1'],
    aim: 'Verify Boyle\'s Law (P vs. V at constant T) and Charles\'s Law (V vs. T at constant P) experimentally and connect results to the kinetic molecular theory.',
    skills: [
      'Controlling variables in experiments',
      'Using gas pressure sensors and syringes',
      'Graphing and linearizing data',
      'Connecting macroscopic observations to KMT'
    ],
    safetyPoints: [
      'Wear safety goggles.',
      'Handle hot water carefully when testing Charles\'s Law.',
      'Do not exceed the syringe volume capacity.',
      'Ensure pressure sensors are properly calibrated.'
    ],
    method: [
      'Part A — Boyle\'s Law: Connect a gas pressure sensor to a sealed syringe containing a fixed amount of air at room temperature.',
      'Record the initial volume and pressure. Then change the volume in increments (e.g., 20 mL, 18 mL, 16 mL, 14 mL, 12 mL, 10 mL) and record the pressure at each volume.',
      'Plot P vs. V and P vs. 1/V. The P vs. 1/V graph should be linear, confirming Boyle\'s Law (PV = constant).',
      'Part B — Charles\'s Law: Seal a small amount of air in a flask connected to a pressure sensor (or use a capillary tube method). Record the volume at various temperatures by placing the flask in water baths at 0 °C, 20 °C, 40 °C, 60 °C, and 80 °C.',
      'Allow thermal equilibrium at each temperature (wait 2-3 minutes).',
      'Plot V vs. T (in Kelvin). The graph should be linear, passing near the origin at 0 K, confirming Charles\'s Law (V/T = constant).',
      'Calculate the experimental value of absolute zero by extrapolating the V vs. T(°C) graph to V = 0.'
    ],
    expectedResults: 'Part A: P × V should be approximately constant for all data points. The P vs. 1/V graph should be linear through the origin. Part B: V vs. T (K) should be linear. Extrapolation of V vs. T (°C) to V = 0 should give approximately -273 °C, confirming absolute zero.',
    discussionPoints: [
      'How does KMT explain why pressure increases when volume decreases at constant temperature?',
      'Why must temperature be in Kelvin for gas law calculations?',
      'What sources of error might cause deviations from ideal behavior? (Hint: think about the KMT assumptions.)',
      'How close was your experimental absolute zero to the accepted value of -273.15 °C?',
      'Under what conditions would your gas sample deviate most from these ideal gas relationships?'
    ]
  },

  /* LAB 3 — Beer-Lambert Law with Spectrophotometer */
  {
    id: 'LAB_U3_03',
    title: 'Beer-Lambert Law and Spectrophotometric Analysis',
    type: 'Guided inquiry',
    duration: '60 min',
    linkedUnderstandings: ['U3.13.1', 'U3.13.2'],
    aim: 'Construct a Beer\'s Law calibration curve using standard solutions and determine the concentration of an unknown colored solution.',
    skills: [
      'Preparing standard solutions by serial dilution',
      'Using a spectrophotometer',
      'Constructing and interpreting calibration curves',
      'Determining unknown concentrations from graphs'
    ],
    safetyPoints: [
      'Wear safety goggles and gloves.',
      'Handle cuvettes carefully; do not touch optical surfaces.',
      'Clean up any spilled solutions immediately.',
      'Dispose of solutions as directed by instructor.'
    ],
    method: [
      'Prepare a stock solution of CuSO4 (or food dye) at approximately 0.10 M using a volumetric flask.',
      'Prepare five standard solutions by serial dilution: 0.020 M, 0.040 M, 0.060 M, 0.080 M, and 0.10 M.',
      'Turn on the spectrophotometer and allow it to warm up for 10 minutes.',
      'Determine λ<sub>max</sub>: Fill a cuvette with the most concentrated standard. Scan absorbance from 400 nm to 700 nm (or use the preset wavelengths). Record absorbance at each wavelength and identify the wavelength with maximum absorbance.',
      'Set the spectrophotometer to λ<sub>max</sub>.',
      'Calibrate with a blank: Fill a cuvette with distilled water and set absorbance to zero.',
      'Measure and record the absorbance of each standard solution and the unknown solution at λ<sub>max</sub>.',
      'Plot absorbance (y-axis) vs. concentration (x-axis) for the standards.',
      'Draw a best-fit line through the data points and the origin.',
      'Determine the concentration of the unknown by reading from the calibration curve or calculating c = A/slope.'
    ],
    expectedResults: 'The calibration curve should be linear (A = εbc), with absorbance directly proportional to concentration. The slope of the best-fit line equals εb (where b = 1.00 cm for most cuvettes). The unknown concentration should fall within the range of the standards for reliable interpolation. For CuSO4, λ<sub>max</sub> is approximately 635 nm.',
    discussionPoints: [
      'Why is it important to use the wavelength of maximum absorbance (λ<sub>max</sub>)?',
      'What would happen to your results if you used a wavelength far from λ<sub>max</sub>?',
      'Why must the blank be measured before the samples?',
      'What are possible sources of error (fingerprints on cuvettes, bubbles, dirty cuvettes)?',
      'Under what conditions might Beer\'s Law fail (very high concentrations, scattering)?',
      'How would you modify this procedure to determine the concentration of a mixture of two dyes?'
    ]
  },

  /* LAB 4 — Chromatography Separation */
  {
    id: 'LAB_U3_04',
    title: 'Paper Chromatography of Ink and Plant Pigments',
    type: 'Guided inquiry',
    duration: '50 min',
    linkedUnderstandings: ['U3.9.1', 'U3.10.1'],
    aim: 'Separate the components of black ink and plant pigment extracts using paper chromatography and relate separation to intermolecular forces.',
    skills: [
      'Setting up paper chromatography',
      'Calculating Rf values',
      'Interpreting chromatograms',
      'Relating separation to polarity and IMFs'
    ],
    safetyPoints: [
      'Wear safety goggles and gloves.',
      'Use isopropanol/water mobile phase in a well-ventilated area.',
      'Do not inhale solvent vapors.',
      'Handle chromatography paper by the edges only.'
    ],
    method: [
      'Cut chromatography paper into strips (2 cm wide × 15 cm long). Draw a pencil line 2 cm from the bottom of each strip.',
      'Part A (Ink): Using different colored markers (black, brown, green), place a small, concentrated dot of ink on the pencil line of separate strips.',
      'Part B (Plant pigments): Obtain a spinach leaf extract (prepared by grinding leaves in acetone). Apply the extract to a strip using a capillary tube, allowing it to dry between applications (apply 5-6 times for concentration).',
      'Prepare the developing chamber: add solvent (isopropanol:water 7:3 mixture) to a beaker to a depth of 1 cm. Cover with a watch glass or plastic wrap.',
      'Place the chromatography strips in the developing chamber with the spots above the solvent level.',
      'Allow the solvent to travel up the paper until it reaches about 1 cm from the top (approximately 15-20 minutes). Remove the strips and immediately mark the solvent front with pencil.',
      'Allow strips to dry. Measure the distance from the origin to the center of each colored spot and the distance to the solvent front.',
      'Calculate Rf = distance of spot / distance of solvent front for each component.',
      'Record the color and Rf of each separated component.'
    ],
    expectedResults: 'Black ink should separate into 2-4 component colors (typically blue, red, yellow), each with a distinct Rf value. Spinach extract should show chlorophyll a (blue-green, Rf ~ 0.3), chlorophyll b (yellow-green, Rf ~ 0.4), xanthophylls (yellow, Rf ~ 0.7), and carotenes (orange, Rf ~ 0.9). More polar pigments have lower Rf values because they interact more strongly with the polar cellulose paper.',
    discussionPoints: [
      'Why do different components have different Rf values? Relate to IMFs with the paper vs. the solvent.',
      'Which pigments are most polar? How can you tell from the Rf values?',
      'Why are carotenes (nonpolar hydrocarbons) carried farthest by the solvent?',
      'Would the Rf values change if a different solvent were used? Why?',
      'How could you use Rf values to identify an unknown substance?',
      'Why is it important that the ink spots are above the solvent level at the start?'
    ]
  },

  /* LAB 5 — Vapor Pressure and IMFs */
  {
    id: 'LAB_U3_05',
    title: 'Vapor Pressure and Intermolecular Forces',
    type: 'Guided inquiry',
    duration: '60 min',
    linkedUnderstandings: ['U3.1.1', 'U3.1.2', 'U3.2.2', 'U3.3.1'],
    aim: 'Investigate how intermolecular forces affect vapor pressure by measuring the vapor pressure of several liquids at different temperatures.',
    skills: [
      'Using gas pressure sensors',
      'Controlling temperature as a variable',
      'Graphing and interpreting P vs. T data',
      'Connecting macroscopic properties to molecular-level IMFs'
    ],
    safetyPoints: [
      'Wear safety goggles and gloves at all times.',
      'Work in a fume hood when handling volatile organic solvents.',
      'No open flames — organic solvents are flammable.',
      'Do not inhale vapors directly.',
      'Dispose of organic waste properly.'
    ],
    method: [
      'Set up a gas pressure sensor connected to a sealed flask (Erlenmeyer with stopper and temperature probe).',
      'Test three liquids: ethanol, water, and acetone (or substitute with available volatile liquids).',
      'For each liquid: add approximately 5 mL to the flask, seal it, and allow equilibrium at room temperature. Record the vapor pressure.',
      'Place the flask in water baths at 30 °C, 40 °C, 50 °C, and 60 °C. At each temperature, wait 3-5 minutes for equilibrium, then record the vapor pressure.',
      'Plot vapor pressure (y-axis) vs. temperature (x-axis, in °C or K) for each liquid on the same graph.',
      'Also plot ln(P) vs. 1/T (Clausius-Clapeyron relationship) to observe the linearized form.',
      'Identify the IMFs present in each liquid and rank them by IMF strength.',
      'Compare the vapor pressure curves to the IMF rankings.'
    ],
    expectedResults: 'At any given temperature, acetone (dipole-dipole + LDF) should have the highest vapor pressure, followed by ethanol (H-bonding + LDF), then water (extensive H-bonding). All three should show exponential increase of vapor pressure with temperature. The ln(P) vs. 1/T plots should be approximately linear with negative slopes. The liquid with the weakest IMFs (acetone) should have the steepest vapor pressure curve and the highest vapor pressure at each temperature.',
    discussionPoints: [
      'Rank the three liquids by IMF strength. Does the vapor pressure data support your ranking?',
      'Why does vapor pressure increase exponentially (not linearly) with temperature?',
      'How does the Clausius-Clapeyron equation relate vapor pressure to the enthalpy of vaporization?',
      'Which liquid has the highest enthalpy of vaporization? How can you determine this from the ln(P) vs. 1/T plot?',
      'Why is water\'s vapor pressure so much lower than acetone\'s, despite water having a lower molar mass?',
      'At what temperature would each liquid boil at standard atmospheric pressure? How can you estimate this from your data?'
    ]
  }
];

// Register with global DB
if (window.DB) {
  window.DB.u3labs = window.DB_U3_LABS;
} else {
  window.DB = { u3labs: window.DB_U3_LABS };
}
