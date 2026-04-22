/*
 *  AP Chemistry – Unit 8: Acids and Bases
 *  Data file: labs.js
 *  4 labs covering titrations, buffers, Ka determination, and acid strength
 */

window.DB_U8_LABS = [

  {
    id: 'LAB_U8_01',
    title: 'Acid-Base Titration Curves with a pH Meter',
    type: 'Guided inquiry',
    duration: '90 min',
    linkedUnderstandings: ['U8.5.1', 'U8.5.2', 'U8.5.3'],
    aim: 'Collect pH vs. volume data for a strong acid–strong base titration and a weak acid–strong base titration, plot both titration curves, identify equivalence points and half-equivalence points, and compare the shapes of the curves.',
    skills: [
      'Calibrating and using a pH meter for accurate pH measurements',
      'Performing a titration with careful volume control using a buret',
      'Plotting and interpreting titration curves',
      'Identifying the equivalence point, half-equivalence point, and buffer region',
      'Selecting an appropriate indicator based on equivalence point pH'
    ],
    safetyPoints: [
      'Wear safety goggles and gloves — HCl and NaOH solutions are corrosive.',
      'If acid or base contacts skin, rinse immediately with copious water for at least 15 minutes.',
      'Handle the pH probe carefully — the glass electrode is fragile.',
      'Dispose of all solutions in the designated acid/base waste container, not the drain.'
    ],
    method: [
      'Part A — Strong Acid + Strong Base: Pipette 25.00 mL of 0.100 M HCl into a 150 mL beaker. Add a magnetic stir bar and place on a stir plate. Immerse the calibrated pH probe in the solution.',
      'Record the initial pH. Fill a buret with standardized 0.100 M NaOH and record the initial buret reading.',
      'Add NaOH in 2.00 mL increments, recording the pH after each addition and allowing 15–20 seconds for equilibration. Near the expected equivalence point (22–28 mL), switch to 0.50 mL increments to capture the steep rise.',
      'Continue until a total of 35.0 mL of NaOH has been added. Record all data in a table (volume NaOH, pH).',
      'Part B — Weak Acid + Strong Base: Rinse the beaker, stir bar, and pH probe. Pipette 25.00 mL of 0.100 M acetic acid (CH<sub>3</sub>COOH) into the beaker.',
      'Repeat the titration with 0.100 M NaOH using the same procedure as Part A.',
      'For both titrations, plot pH (y-axis) vs. volume of NaOH (x-axis) on the same graph.',
      'On each curve, mark: (1) the equivalence point, (2) the half-equivalence point (Part B only), (3) the buffer region (Part B only).',
      'From the Part B curve, read pH at the half-equivalence point and calculate Ka for acetic acid.'
    ],
    expectedResults: 'Part A (SA+SB): Initial pH ≈ 1.0, equivalence point at 25.0 mL with pH = 7.0, steep symmetric rise spanning ~pH 4 to pH 10 around the equivalence point. Part B (WA+SB): Initial pH ≈ 2.9, flat buffer region from 0–20 mL, half-equivalence point at 12.5 mL with pH ≈ 4.74 (giving Ka ≈ 1.8 × 10<sup>−</sup><sup>5</sup>), equivalence point at 25.0 mL with pH ≈ 8.7 (basic due to acetate hydrolysis), curve is asymmetric with a less steep rise. Both curves converge to pH ≈ 13 at high NaOH volumes.',
    discussionPoints: [
      'Why is the equivalence point pH exactly 7.0 for the strong acid titration but above 7 for the weak acid titration?',
      'How does the buffer region in the weak acid curve relate to the Henderson-Hasselbalch equation?',
      'At the half-equivalence point, [HA] = [A<sup>−</sup>]. Explain why this makes pH = pKa.',
      'Which indicator (phenolphthalein or methyl orange) would be appropriate for each titration? Justify your choices.',
      'What would the titration curve look like if you titrated a weak base (NH<sub>3</sub>) with strong acid (HCl)? Predict the equivalence point pH.',
      'How could systematic errors (e.g., overshooting the equivalence point, using a slow-responding pH probe) affect your results?'
    ]
  },

  {
    id: 'LAB_U8_02',
    title: 'Buffer Preparation and Testing',
    type: 'Guided inquiry',
    duration: '75 min',
    linkedUnderstandings: ['U8.8.1', 'U8.8.2', 'U8.9.1', 'U8.10.1'],
    aim: 'Prepare buffer solutions at target pH values using the Henderson-Hasselbalch equation, test their buffering capacity by adding strong acid and strong base, and compare buffer performance to unbuffered solutions.',
    skills: [
      'Calculating buffer component amounts using Henderson-Hasselbalch',
      'Preparing solutions of specified composition',
      'Measuring pH changes quantitatively',
      'Comparing buffered and unbuffered solutions',
      'Relating buffer capacity to total concentration'
    ],
    safetyPoints: [
      'Wear safety goggles and gloves throughout the experiment.',
      'Acetic acid has a strong, pungent odor — work in a well-ventilated area or fume hood.',
      'NaOH and HCl are corrosive — handle carefully.',
      'Dispose of all solutions in the designated waste containers.'
    ],
    method: [
      'Part A — Buffer Preparation: Calculate the volumes of 0.50 M acetic acid and 0.50 M sodium acetate needed to prepare 100.0 mL of buffer at (a) pH 4.74 and (b) pH 5.24, using Henderson-Hasselbalch.',
      'Prepare both buffers using volumetric pipettes and 100 mL volumetric flasks. Measure and record the actual pH of each with a calibrated pH meter.',
      'Part B — Buffer vs. Unbuffered: Prepare 100.0 mL of unbuffered distilled water (control). Record its pH.',
      'To three separate 50.0 mL portions of the pH 4.74 buffer, the pH 5.24 buffer, and distilled water, add 1.0 mL of 1.0 M HCl. Stir, then measure and record the new pH. Calculate ΔpH for each.',
      'Repeat with three fresh 50.0 mL portions, but add 1.0 mL of 1.0 M NaOH instead. Record pH and calculate ΔpH.',
      'Part C — Buffer Capacity: Prepare two buffers both at pH 4.74, but one with 0.50 M components (concentrated) and one with 0.050 M components (dilute), each in 100.0 mL.',
      'To 50.0 mL of each buffer, add successive 1.0 mL portions of 1.0 M HCl, measuring pH after each addition. Continue until the pH has dropped by more than 1.0 unit (buffer broken).',
      'Record how many mL of HCl each buffer absorbed before breaking. Compare.'
    ],
    expectedResults: 'Part A: Measured pH should be within ±0.1 of the target (4.74 and 5.24). Part B: Buffers should show ΔpH < 0.2 units when 1.0 mL of 1.0 M acid or base is added, while the distilled water control shows a change of several pH units (e.g., from 7.0 to ~2.0 with HCl). Part C: The concentrated buffer (0.50 M) should absorb approximately 10× more HCl than the dilute buffer (0.050 M) before breaking, even though both start at the same pH.',
    discussionPoints: [
      'Why did both buffers resist pH change while the distilled water did not?',
      'Write the chemical equation that explains how the buffer neutralizes the added HCl.',
      'Why did the concentrated buffer absorb more HCl than the dilute buffer, even though both had the same initial pH?',
      'If you needed a buffer at pH 9.0, what acid-base system would you choose? Why?',
      'What would happen if you added more NaOH than the total moles of acetic acid in the buffer?',
      'How does the Henderson-Hasselbalch equation predict the pH of each buffer?'
    ]
  },

  {
    id: 'LAB_U8_03',
    title: 'Determination of Ka of a Weak Acid',
    type: 'Guided inquiry',
    duration: '75 min',
    linkedUnderstandings: ['U8.3.1', 'U8.7.2'],
    aim: 'Determine the Ka of an unknown weak acid using two independent methods: (1) pH measurement of a solution of known concentration, and (2) the half-equivalence point from a titration curve.',
    skills: [
      'Measuring pH accurately with a calibrated pH meter',
      'Performing an acid-base titration',
      'Constructing and interpreting a titration curve',
      'Calculating Ka from pH data using ICE tables',
      'Identifying the half-equivalence point on a titration curve'
    ],
    safetyPoints: [
      'Wear safety goggles and gloves.',
      'The unknown acid may be irritating — avoid contact with skin and do not ingest.',
      'NaOH is corrosive — handle the buret carefully.',
      'Dispose of all solutions in the designated waste container.'
    ],
    method: [
      'Method 1 — pH of Known Concentration: Dissolve 0.500 g of the unknown monoprotic weak acid (given molar mass) in enough distilled water to make exactly 100.0 mL of solution. Calculate the initial molarity.',
      'Measure the pH of the solution using a calibrated pH meter. Record to two decimal places.',
      'Calculate [H<sub>3</sub>O<sup>+</sup>] = 10^(−pH). Set up an ICE table for HA ⇌ H<sub>3</sub>O<sup>+</sup> + A<sup>−</sup> and solve for Ka = x<sup>2</sup>/(C<sub>0</sub> − x).',
      'Method 2 — Half-Equivalence Point: Pipette 25.00 mL of the acid solution into a beaker. Add a stir bar and immerse the pH probe.',
      'Fill a buret with standardized 0.100 M NaOH. Titrate the acid, adding NaOH in 1.00 mL increments and recording pH after each addition. Use 0.50 mL increments near the equivalence point.',
      'Plot the titration curve (pH vs. volume NaOH). Identify the equivalence point (steepest part of the curve).',
      'Calculate the half-equivalence volume = ½ × equivalence volume. Read the pH at this volume from your curve.',
      'At the half-equivalence point, pH = pKa, so Ka = 10^(−pH).',
      'Compare the Ka values from both methods. Calculate a percent difference.'
    ],
    expectedResults: 'Both methods should yield Ka values that agree within 10–20%. Method 2 (half-equivalence point) is generally more precise because it avoids the need for exact initial concentration. The titration curve should show the characteristic shape of a weak acid + strong base titration. Typical unknowns might include acetic acid (Ka ≈ 1.8 × 10<sup>−</sup><sup>5</sup>) or formic acid (Ka ≈ 1.8 × 10<sup>−</sup><sup>4</sup>).',
    discussionPoints: [
      'Which method gave a Ka closer to the literature value? Why might the other method be less accurate?',
      'What assumptions does Method 1 make that could introduce error?',
      'Why is the half-equivalence point method considered more reliable?',
      'If you accidentally overshot the equivalence point, could you still determine Ka from your data?',
      'How would the titration curve change if you used a stronger weak acid (larger Ka)?',
      'Could this procedure be used to determine Kb for a weak base? How would you modify it?'
    ]
  },

  {
    id: 'LAB_U8_04',
    title: 'Acid Strength and Molecular Structure',
    type: 'Guided inquiry',
    duration: '60 min',
    linkedUnderstandings: ['U8.6.1', 'U8.6.2'],
    aim: 'Investigate the relationship between molecular structure and acid strength by measuring the pH of equimolar solutions of several acids, and use the data to rank acid strength and connect it to structural features.',
    skills: [
      'Preparing equimolar solutions accurately',
      'Measuring and comparing pH values of different acids',
      'Relating experimental acid strength to molecular structure',
      'Applying binary acid and oxyacid strength trends',
      'Drawing molecular-level conclusions from macroscopic data'
    ],
    safetyPoints: [
      'Wear safety goggles and gloves — some acid solutions can cause chemical burns.',
      'HCl fumes are irritating — prepare solutions in a fume hood.',
      'Phosphoric acid is a skin and eye irritant.',
      'Acetic acid has a strong odor — work in a well-ventilated area.',
      'Do not mix acids with each other or with other chemicals.',
      'Dispose of all solutions in the designated acid waste container.'
    ],
    method: [
      'Prepare 50.0 mL of 0.10 M solutions of each of the following acids: (a) HCl (strong acid, reference), (b) CH<sub>3</sub>COOH (acetic acid, 1 O in structure), (c) HF (binary acid — use pre-made solution with care), (d) H<sub>3</sub>PO<sub>4</sub> (phosphoric acid, oxyacid with 1 terminal O), (e) HClO (hypochlorous acid — if available, otherwise use data provided), (f) HNO<sub>3</sub> (strong oxyacid with 2 terminal O — reference).',
      'Calibrate the pH meter. Measure and record the pH of each 0.10 M solution. Rinse the probe thoroughly between measurements.',
      'Rank the acids from strongest (lowest pH) to weakest (highest pH).',
      'For each acid, draw the Lewis structure and identify: (1) the number of terminal oxygen atoms (for oxyacids), (2) the bond being broken (H–X or H–O), (3) the electronegativity of the central or bonded atom.',
      'Group the acids into categories: binary acids (HCl, HF) and oxyacids (CH<sub>3</sub>COOH, H<sub>3</sub>PO<sub>4</sub>, HClO, HNO<sub>3</sub>).',
      'Within the binary acid group, explain the relative strength using bond strength arguments.',
      'Within the oxyacid group, explain the relative strength using the number of terminal oxygens and electronegativity of the central atom.'
    ],
    expectedResults: 'Expected pH values at 0.10 M: HCl ≈ 1.00 (strong), HNO<sub>3</sub> ≈ 1.00 (strong), HF ≈ 2.09 (Ka = 6.6 × 10<sup>−</sup><sup>4</sup>), H<sub>3</sub>PO<sub>4</sub> ≈ 1.62 (Ka<sub>1</sub> = 7.1 × 10<sup>−</sup><sup>3</sup>), CH<sub>3</sub>COOH ≈ 2.87 (Ka = 1.8 × 10<sup>−</sup><sup>5</sup>), HClO ≈ 3.64 (Ka = 2.9 × 10<sup>−</sup><sup>8</sup>). Ranking (strongest to weakest): HCl = HNO<sub>3</sub> > H<sub>3</sub>PO<sub>4</sub> > HF > CH<sub>3</sub>COOH > HClO. Students should observe that strong acids have pH ≈ 1.00 and weak acids have progressively higher pH values.',
    discussionPoints: [
      'Why does HCl (a binary acid) have a lower pH than HF, even though F is more electronegative than Cl?',
      'For the oxyacids, how does the number of terminal oxygen atoms correlate with acid strength? Explain at the molecular level.',
      'Predict the relative acid strength of HClO<sub>2</sub>, HClO<sub>3</sub>, and HClO<sub>4</sub> based on your understanding of oxyacid trends. Which would have the lowest pH at 0.10 M?',
      'Why is the Ka of H<sub>3</sub>PO<sub>4</sub> (Ka<sub>1</sub> = 7.1 × 10<sup>−</sup><sup>3</sup>) larger than that of CH<sub>3</sub>COOH (Ka = 1.8 × 10<sup>−</sup><sup>5</sup>)? Consider the terminal oxygens and the central atom electronegativity.',
      'If you measured pH of 0.10 M NaF and 0.10 M NaCl, which would have a higher pH? Why?',
      'How do these structural trends connect to the concept of conjugate base stability?'
    ]
  }
];

if (window.DB) { window.DB.u8labs = window.DB_U8_LABS; } else { window.DB = { u8labs: window.DB_U8_LABS }; }
