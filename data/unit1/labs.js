// AP Chemistry Unit 1: Atomic Structure and Properties — Lab Activities
// 6 labs covering molar mass, spectroscopy, electron configuration, periodic trends

window.DB_U1_LABS = [

  {
    id: 'LAB01',
    title: 'Determination of the Molar Mass of a Volatile Liquid (Dumas Method)',
    type: 'Guided inquiry',
    duration: '90 min',
    linkedUnderstandings: ['U1.1.1', 'U1.1.2'],
    aim: 'To determine the molar mass of an unknown volatile liquid using the Dumas method and the ideal gas law.',
    skills: [
      'Designing an experimental procedure',
      'Collecting and recording quantitative data',
      'Applying the ideal gas law (PV = nRT)',
      'Calculating molar mass from experimental data',
      'Evaluating sources of experimental error'
    ],
    safetyPoints: [
      'Wear chemical splash goggles and a lab apron at all times.',
      'Use a hot water bath (not open flame) to vaporize the liquid — many volatile liquids are flammable.',
      'Work in a well-ventilated area or fume hood; volatile organic vapors can be harmful if inhaled.',
      'Handle hot glassware with tongs or heat-resistant gloves.',
      'Dispose of chemical waste in designated containers.'
    ],
    method: [
      'Measure and record the mass of a clean, dry 125 mL Erlenmeyer flask with a foil cap (with a pinhole).',
      'Add approximately 3–5 mL of the unknown volatile liquid to the flask.',
      'Cover the flask with the foil cap, ensuring a small pinhole is present for vapor escape.',
      'Immerse the flask in a boiling water bath and heat until all liquid has vaporized and vapor stops escaping the pinhole.',
      'Record the temperature of the boiling water bath and the atmospheric pressure.',
      'Remove the flask from the water bath and allow it to cool to room temperature. The vapor condenses.',
      'Dry the outside of the flask and measure the mass of the flask with the condensed liquid.',
      'Fill the flask completely with water and measure the volume of water to determine the flask volume.',
      'Calculate the mass of the vapor: mass(flask + condensate) − mass(empty flask).',
      'Use PV = nRT to calculate moles, then molar mass = mass of vapor / moles.'
    ],
    expectedResults: 'Students should obtain a molar mass within 5–10% of the accepted value for the unknown liquid (common unknowns: acetone = 58.08 g/mol, ethanol = 46.07 g/mol, cyclohexane = 84.16 g/mol). Typical sources of error include incomplete vaporization, vapor loss through the pinhole, and inaccurate temperature/pressure readings.',
    discussionPoints: [
      'Why is it important that all of the liquid vaporizes before removing the flask from the water bath?',
      'How would your calculated molar mass be affected if some air remained in the flask along with the vapor?',
      'Why does this method assume ideal gas behavior, and under what conditions might that assumption break down?',
      'How does the pinhole allow you to assume the pressure inside the flask equals atmospheric pressure?',
      'What modifications could you make to improve the accuracy of this experiment?'
    ]
  },

  {
    id: 'LAB02',
    title: 'Emission Spectroscopy and Electron Energy Levels',
    type: 'Structured inquiry',
    duration: '45 min',
    linkedUnderstandings: ['U1.3.1', 'U1.3.2'],
    aim: 'To observe the atomic emission spectra of several elements and relate the observed spectral lines to electron transitions between energy levels.',
    skills: [
      'Observing and recording qualitative data (spectral line colors and positions)',
      'Connecting observations to atomic theory (Bohr model)',
      'Calculating photon energy and wavelength using E = hf and c = λf',
      'Identifying elements from their emission spectra'
    ],
    safetyPoints: [
      'Do not look directly at the light source without a spectroscope or diffraction grating.',
      'Gas discharge tubes become hot during operation — do not touch.',
      'High-voltage power supplies are used — ensure all connections are secure and hands are dry.',
      'If using flame tests with metal salt solutions, use a Bunsen burner with caution and tie back loose hair.'
    ],
    method: [
      'Set up gas discharge tubes for hydrogen, helium, neon, and mercury (or use provided spectral images).',
      'Observe each discharge tube through a handheld spectroscope or diffraction grating.',
      'Record the colors and approximate positions of the spectral lines for each element.',
      'For hydrogen, identify the visible lines of the Balmer series (red at 656 nm, cyan at 486 nm, blue-violet at 434 nm, violet at 410 nm).',
      'Calculate the energy of each visible hydrogen line using E = hc/λ (h = 6.626 × 10<sup>−</sup><sup>34</sup> J·s, c = 3.00 × 10<sup>8</sup> m/s).',
      'Determine which electron transitions (n_i → n_f = 2) correspond to each observed line.',
      'Compare the spectra of different elements and note that each element has a unique set of lines.'
    ],
    expectedResults: 'Each element produces a unique emission spectrum. Hydrogen should show 3–4 visible lines corresponding to the Balmer series. Helium and neon show more complex spectra with many lines. Students should confirm that higher-energy transitions produce shorter-wavelength (blue/violet) light.',
    discussionPoints: [
      'Why does each element have a unique emission spectrum?',
      'Why does hydrogen produce discrete lines rather than a continuous spectrum?',
      'How does this experiment support the quantized nature of electron energy levels?',
      'Why are there more visible spectral lines for helium than for hydrogen?',
      'How are emission spectra used in real-world applications (e.g., astronomy, forensics)?'
    ]
  },

  {
    id: 'LAB03',
    title: 'Flame Test Identification of Metal Ions',
    type: 'Structured inquiry',
    duration: '45 min',
    linkedUnderstandings: ['U1.3.1', 'U1.4.1'],
    aim: 'To identify unknown metal ions by observing their characteristic flame test colors and to connect these observations to electron transitions.',
    skills: [
      'Performing flame tests using proper technique',
      'Recording qualitative observations accurately',
      'Connecting macroscopic observations to atomic-level phenomena',
      'Identifying unknowns through comparison with known samples'
    ],
    safetyPoints: [
      'Wear chemical splash goggles at all times.',
      'Tie back long hair and secure loose clothing before using the Bunsen burner.',
      'Metal salt solutions may be irritating — avoid skin contact and wash hands after the lab.',
      'Use nichrome or platinum wire loops; clean the loop in dilute HCl between tests.',
      'Keep flammable materials away from the burner.'
    ],
    method: [
      'Prepare solutions of known metal salts: LiCl, NaCl, KCl, CaCl<sub>2</sub>, SrCl<sub>2</sub>, BaCl<sub>2</sub>, CuCl<sub>2</sub>.',
      'Light the Bunsen burner and adjust to a blue (non-luminous) flame.',
      'Clean the nichrome wire loop by dipping in dilute HCl and holding in the flame until no color is produced.',
      'Dip the clean wire loop into the first metal salt solution.',
      'Hold the loop in the hottest part of the flame and observe the color produced.',
      'Record the flame color for each known metal ion.',
      'Repeat the cleaning and testing process for each known solution.',
      'Obtain two unknown solutions and identify the metal ions by comparing flame colors to known results.',
      'Optional: View the flames through a spectroscope to observe individual emission lines.'
    ],
    expectedResults: 'Expected flame colors: Li = crimson red; Na = intense yellow; K = violet/lilac; Ca = orange-red; Sr = bright red; Ba = yellow-green; Cu = blue-green. Students should successfully identify at least one unknown based on flame color comparison.',
    discussionPoints: [
      'What causes each metal to produce a different flame color?',
      'Why does sodium contamination often interfere with other flame tests, and how can this be overcome?',
      'Relate the energy of the emitted light to the electron transitions occurring in the metal atoms.',
      'Why do some metals produce multiple colors or bands of light?',
      'What are the limitations of flame tests as an analytical technique compared to atomic emission spectroscopy?'
    ]
  },

  {
    id: 'LAB04',
    title: 'Investigating Periodic Trends: Atomic Radius and Reactivity',
    type: 'Guided inquiry',
    duration: '60 min',
    linkedUnderstandings: ['U1.5.1', 'U1.5.2', 'U1.5.3'],
    aim: 'To investigate periodic trends in atomic/ionic radius and chemical reactivity across a period and down a group using experimental observations and data analysis.',
    skills: [
      'Designing controlled experiments to compare reactivity',
      'Analyzing data to identify periodic trends',
      'Constructing graphs of atomic properties vs. atomic number',
      'Using Coulomb\'s law to explain observed trends'
    ],
    safetyPoints: [
      'Alkali metals (Li, Na, K) react vigorously with water — use small pieces (rice-grain sized) and keep behind a safety shield.',
      'Wear chemical splash goggles, gloves, and a lab apron.',
      'Handle alkali metals with forceps, never with bare hands.',
      'Have a fire extinguisher accessible. Do NOT use water to extinguish alkali metal fires.',
      'Dilute acid solutions should be handled with care — rinse any skin contact immediately.'
    ],
    method: [
      'Part A — Reactivity of Alkali Metals with Water: Observe the reaction of small pieces of lithium, sodium, and potassium with water in separate beakers. Add phenolphthalein indicator. Record observations (vigor of reaction, gas production, indicator color change).',
      'Part A continued: Rank the alkali metals in order of increasing reactivity and relate to their position in the periodic table.',
      'Part B — Reactivity of Halogens (displacement reactions): Add a few drops of chlorine water to separate test tubes containing KBr(aq) and KI(aq). Add bromine water to KI(aq). Record color changes.',
      'Part B continued: Determine which halogen is the strongest oxidizing agent and relate to electronegativity trends.',
      'Part C — Data Analysis: Using provided data (atomic radii, ionization energies, electronegativities), create graphs of each property vs. atomic number for Periods 2 and 3.',
      'Part C continued: Annotate your graphs to highlight the trends across periods and down groups.'
    ],
    expectedResults: 'Part A: Reactivity increases down Group 1 (K > Na > Li) as ionization energy decreases and atomic radius increases. Part B: Cl<sub>2</sub> displaces Br<sup>−</sup> and I<sup>−</sup>; Br<sub>2</sub> displaces I<sup>−</sup> but not Cl<sup>−</sup>, confirming oxidizing strength Cl<sub>2</sub> > Br<sub>2</sub> > I<sub>2</sub>. Part C: Graphs should show decreasing atomic radius and increasing IE across a period, with clear periodic patterns.',
    discussionPoints: [
      'How does atomic radius relate to the reactivity of alkali metals?',
      'Why does ionization energy decrease going down a group despite increasing nuclear charge?',
      'How does effective nuclear charge explain the trend in atomic radius across a period?',
      'Why is potassium more reactive than lithium even though lithium has a higher electronegativity?',
      'Predict where francium and astatine would fall in your reactivity rankings and justify your predictions.'
    ]
  },

  {
    id: 'LAB05',
    title: 'Spectrophotometric Determination of Copper(II) Concentration (Beer\'s Law)',
    type: 'Guided inquiry',
    duration: '75 min',
    linkedUnderstandings: ['U1.3.1', 'U1.4.1', 'U1.7.1'],
    aim: 'To construct a Beer\'s Law calibration curve using standard copper(II) sulfate solutions and use it to determine the concentration of an unknown copper(II) solution.',
    skills: [
      'Preparing standard solutions by serial dilution',
      'Using a spectrophotometer (or colorimeter) to measure absorbance',
      'Constructing and interpreting a Beer\'s Law plot (A = εbc)',
      'Determining unknown concentrations from a calibration curve',
      'Evaluating precision and accuracy of results'
    ],
    safetyPoints: [
      'Copper(II) sulfate solution is an irritant — wear gloves and goggles.',
      'Wipe the outside of cuvettes with lint-free tissue before inserting into the spectrophotometer.',
      'Do not pipette by mouth — use a rubber bulb or pipette filler.',
      'Dispose of copper solutions in designated heavy-metal waste containers.',
      'Wash hands thoroughly after handling solutions.'
    ],
    method: [
      'Prepare a stock solution of 0.500 M CuSO<sub>4</sub> (or use a pre-made stock).',
      'Using volumetric dilution, prepare five standard solutions: 0.100 M, 0.200 M, 0.300 M, 0.400 M, and 0.500 M.',
      'Set the spectrophotometer to 635 nm (the wavelength of maximum absorbance for Cu<sup>2</sup><sup>+</sup>).',
      'Calibrate the instrument with a blank (distilled water).',
      'Measure and record the absorbance of each standard solution, rinsing the cuvette between measurements.',
      'Measure the absorbance of the unknown copper(II) solution (at least 3 trials).',
      'Plot absorbance (y-axis) vs. concentration (x-axis) for the standard solutions.',
      'Draw or calculate the best-fit line and determine its equation (A = εbc + intercept).',
      'Use the calibration curve to determine the concentration of the unknown solution.'
    ],
    expectedResults: 'The Beer\'s Law plot should be linear (R<sup>2</sup> > 0.99) with a y-intercept near zero. The slope equals εb (molar absorptivity × path length). Students should determine the unknown concentration within 5% of the accepted value. Cu<sup>2</sup><sup>+</sup> solutions appear blue because they absorb orange/red light (~635 nm).',
    discussionPoints: [
      'Why is it important to select the wavelength of maximum absorbance for quantitative analysis?',
      'What molecular or ionic property of Cu<sup>2</sup><sup>+</sup> causes it to absorb visible light at 635 nm?',
      'Under what conditions does Beer\'s Law break down (i.e., when might the plot become non-linear)?',
      'How does this technique relate to the electron transitions studied in emission spectroscopy?',
      'How could you modify this procedure to determine the formula of a copper-ammonia complex ion?'
    ]
  },

  {
    id: 'LAB06',
    title: 'Determining the Empirical Formula of a Compound by Gravimetric Analysis',
    type: 'Open inquiry',
    duration: '90 min',
    linkedUnderstandings: ['U1.1.1', 'U1.1.2'],
    aim: 'To determine the empirical formula of magnesium oxide by reacting a known mass of magnesium with excess oxygen and measuring the mass of the product.',
    skills: [
      'Planning an experimental procedure with identified variables',
      'Performing gravimetric analysis with accurate mass measurements',
      'Calculating empirical formulas from experimental mass data',
      'Evaluating percent error and identifying sources of systematic error',
      'Applying the law of conservation of mass'
    ],
    safetyPoints: [
      'Do not look directly at burning magnesium — the intense white light can damage eyes. Use tinted glass or observe from a safe distance.',
      'The crucible and lid become extremely hot — handle only with crucible tongs.',
      'Use a clay triangle on an iron ring; ensure the ring stand is stable.',
      'Allow the crucible to cool completely before measuring its mass.',
      'Do not touch magnesium ribbon with bare hands — oils from skin can affect results. Use forceps.'
    ],
    method: [
      'Design a procedure to react a known mass of magnesium ribbon with oxygen from the air in a crucible. Your procedure must allow you to determine the masses of Mg reacted and O gained.',
      'Key considerations for your procedure: (1) How will you ensure complete reaction? (2) How will you prevent loss of product? (3) How many mass measurements do you need? (4) How will you know the reaction is complete?',
      'Suggested approach: Measure mass of empty crucible + lid. Add coiled Mg ribbon and record mass. Heat strongly with lid slightly ajar. Periodically lift lid to admit air, then replace. Heat until no further change in mass.',
      'After the crucible cools, if any unreacted Mg or gray Mg<sub>3</sub>N<sub>2</sub> is visible, add a few drops of water (converts nitride to oxide), then reheat gently to drive off water.',
      'Record final mass of crucible + product.',
      'Calculate: mass of Mg = (mass of crucible + Mg) − (mass of crucible). Mass of O = (mass of crucible + MgO) − (mass of crucible + Mg). Convert to moles and find the simplest ratio.',
      'Repeat the experiment at least once more for reliability.'
    ],
    expectedResults: 'The expected empirical formula is MgO (1:1 ratio). Students typically obtain ratios between 1:0.85 and 1:1.15. Common sources of error: incomplete combustion yields a low oxygen mass (ratio < 1:1); formation of Mg<sub>3</sub>N<sub>2</sub> without conversion yields a slightly different ratio; loss of white MgO smoke reduces the product mass.',
    discussionPoints: [
      'Why is it necessary to lift the crucible lid periodically during heating?',
      'How would the empirical formula be affected if some magnesium reacted with nitrogen instead of oxygen and the nitride was not converted?',
      'What evidence would indicate that the reaction is complete?',
      'How does your experimental empirical formula compare to the accepted formula? Calculate your percent error.',
      'Why is this classified as a gravimetric analysis, and what are the advantages and limitations of this technique?',
      'Design a modification to this experiment that would allow you to determine the empirical formula of a different metal oxide.'
    ]
  }

];

if (window.DB) { window.DB.u1labs = window.DB_U1_LABS; }
else { window.DB = { u1labs: window.DB_U1_LABS }; }
