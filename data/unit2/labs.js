// AP Chemistry Unit 2: Molecular and Ionic Compound Structure and Properties — Lab Activities
// 4 labs covering bond types, ionic properties, Lewis structures/VSEPR, and metallic bonding

window.DB_U2_LABS = [

  {
    id: 'LAB_U2_01',
    title: 'Properties of Ionic vs. Covalent Compounds',
    type: 'Guided inquiry',
    duration: '60 min',
    linkedUnderstandings: ['U2.1.1', 'U2.3.2'],
    aim: 'To compare the physical properties (melting point, solubility, conductivity) of ionic and covalent compounds and relate the observed differences to bonding type.',
    skills: [
      'Designing a procedure to test physical properties',
      'Recording qualitative and quantitative observations',
      'Classifying substances based on experimental evidence',
      'Connecting macroscopic properties to particulate-level bonding models'
    ],
    safetyPoints: [
      'Wear chemical splash goggles, a lab apron, and gloves throughout the experiment.',
      'Some compounds may be irritants — avoid inhaling dust or vapors.',
      'Use caution when handling hot plates or Bunsen burners for melting point tests.',
      'Conductivity apparatus uses low voltage, but keep electrodes out of contact with skin.',
      'Dispose of all solutions in designated waste containers.'
    ],
    method: [
      'Obtain samples of NaCl (ionic), sucrose (molecular covalent), CaCl\u2082 (ionic), and paraffin wax (molecular covalent).',
      'Solubility test: Add a small amount (~0.5 g) of each compound to 10 mL of distilled water. Stir and record whether the substance dissolves.',
      'Conductivity test (solid): Touch the electrodes of a conductivity tester to each solid sample. Record whether the bulb lights or the meter registers current.',
      'Conductivity test (solution/molten): Test the conductivity of each aqueous solution prepared in step 2. For substances that did not dissolve, carefully melt a small sample on a hot plate and test conductivity of the melt (teacher demonstration for safety).',
      'Melting point comparison: Use a hot plate to qualitatively compare melting points. Note which substances melt easily (low mp) and which remain solid at high temperature.',
      'Record all observations in a data table organized by compound.'
    ],
    expectedResults: 'Ionic compounds (NaCl, CaCl\u2082) should have high melting points, dissolve in water, and conduct electricity in solution but not as solids. Molecular compounds (sucrose, paraffin wax) should have lower melting points and should not conduct electricity in any phase. Sucrose dissolves in water but does not conduct; paraffin is insoluble.',
    discussionPoints: [
      'How do your observations support the classification of NaCl and CaCl\u2082 as ionic compounds?',
      'Why does solid NaCl not conduct electricity while the NaCl solution does?',
      'Sucrose dissolves in water but does not conduct. What does this tell you about the nature of sucrose in solution?',
      'How would you classify an unknown substance based on these tests?',
      'What additional tests could you perform to distinguish between ionic and covalent compounds?'
    ]
  },

  {
    id: 'LAB_U2_02',
    title: 'Molecular Geometry and Polarity with Model Kits',
    type: 'Structured inquiry',
    duration: '45 min',
    linkedUnderstandings: ['U2.5.1', 'U2.7.1'],
    aim: 'To build molecular models, determine VSEPR geometries, and predict molecular polarity for a series of molecules.',
    skills: [
      'Drawing Lewis structures from molecular formulas',
      'Building 3D molecular models from Lewis structures',
      'Identifying electron geometry and molecular geometry',
      'Predicting bond angles and molecular polarity',
      'Connecting molecular shape to macroscopic properties'
    ],
    safetyPoints: [
      'No significant chemical hazards in this activity.',
      'Handle model kit pieces carefully to avoid breakage.',
      'Return all model kit components to their container after use.'
    ],
    method: [
      'For each molecule in the list (CH\u2084, NH\u2083, H\u2082O, BF\u2083, CO\u2082, SF\u2084, XeF\u2082, PCl\u2085), draw the Lewis structure on your worksheet.',
      'Count the total number of electron groups around the central atom. Identify bonding pairs and lone pairs.',
      'Record the electron geometry and molecular geometry for each molecule.',
      'Build a 3D model of each molecule using the molecular model kit.',
      'Predict the approximate bond angle(s) for each molecule.',
      'Determine whether each molecule is polar or nonpolar by considering the bond dipoles and molecular symmetry. Use the model to visualize dipole vector addition.',
      'For molecules with lone pairs, observe how the lone pairs affect the bond angles compared to the ideal angles.',
      'Complete the summary table: molecule, Lewis structure, e\u207b groups, electron geometry, molecular geometry, bond angle, hybridization, polar/nonpolar.'
    ],
    expectedResults: 'Students should correctly identify: CH\u2084 (tetrahedral, 109.5\u00b0, nonpolar), NH\u2083 (trig pyramidal, <109.5\u00b0, polar), H\u2082O (bent, ~104.5\u00b0, polar), BF\u2083 (trig planar, 120\u00b0, nonpolar), CO\u2082 (linear, 180\u00b0, nonpolar), SF\u2084 (seesaw, polar), XeF\u2082 (linear, 180\u00b0, nonpolar), PCl\u2085 (trig bipyramidal, nonpolar).',
    discussionPoints: [
      'Why do H\u2082O and CO\u2082 have different molecular geometries despite both having the formula XY\u2082?',
      'How does the presence of lone pairs affect bond angles compared to the ideal geometry?',
      'Why is BF\u2083 nonpolar but NF\u2083 is polar, even though both have three fluorine atoms bonded to the central atom?',
      'For molecules with expanded octets (SF\u2084, XeF\u2082, PCl\u2085), how does the electron group arrangement differ from molecules with 4 electron groups?',
      'How does molecular polarity relate to the types of intermolecular forces a substance will experience?'
    ]
  },

  {
    id: 'LAB_U2_03',
    title: 'Lattice Energy and Dissolving of Ionic Compounds',
    type: 'Guided inquiry',
    duration: '45 min',
    linkedUnderstandings: ['U2.3.1', 'U2.3.2'],
    aim: 'To investigate the relationship between lattice energy and the enthalpy of dissolving for several ionic compounds, and to connect these observations to Coulomb\'s law.',
    skills: [
      'Measuring temperature changes during dissolution',
      'Calculating enthalpy of solution from calorimetry data',
      'Relating lattice energy to ionic charge and radius',
      'Applying Coulomb\'s law qualitatively'
    ],
    safetyPoints: [
      'Wear chemical splash goggles and a lab apron.',
      'Some ionic compounds (e.g., CaCl\u2082) dissolve exothermically and solutions may become hot \u2014 handle with care.',
      'NH\u2084NO\u2083 dissolves endothermically and solutions become very cold \u2014 avoid prolonged skin contact.',
      'Wash hands thoroughly after handling all chemicals.',
      'Dispose of solutions as directed by your instructor.'
    ],
    method: [
      'Measure 50.0 mL of distilled water into a polystyrene (coffee cup) calorimeter and record the initial temperature.',
      'Weigh out approximately 5.0 g of NaCl and add it to the water. Stir gently and record the maximum or minimum temperature reached.',
      'Repeat steps 1\u20132 with the same mass of KCl, CaCl\u2082, and NH\u2084NO\u2083 (using fresh water each time).',
      'Calculate the temperature change (\u0394T) for each dissolution.',
      'Using q = mc\u0394T (c = 4.184 J/g\u00b7\u00b0C, assume solution density \u2248 1.0 g/mL), calculate the heat absorbed or released.',
      'Convert to kJ/mol using the molar mass of each compound.',
      'Rank the compounds by their lattice energies using Coulomb\'s law and compare with the observed dissolution behavior.'
    ],
    expectedResults: 'CaCl\u2082 dissolution should be noticeably exothermic (Ca\u00b2\u207a has high hydration energy). NH\u2084NO\u2083 should be endothermic (lattice energy exceeds hydration energy). NaCl and KCl should show relatively small temperature changes. Students should observe that compounds with higher-charged ions generally have larger enthalpies of dissolution.',
    discussionPoints: [
      'Why is the dissolution of CaCl\u2082 exothermic while NH\u2084NO\u2083 is endothermic?',
      'How does Coulomb\'s law help predict which ionic compounds have higher lattice energies?',
      'The enthalpy of solution depends on both lattice energy and hydration energy. How do these two factors compete?',
      'Why might your calculated \u0394H_soln differ from literature values?',
      'Based on your data, would you expect MgCl\u2082 dissolution to be more or less exothermic than CaCl\u2082? Justify using Coulomb\'s law.'
    ]
  },

  {
    id: 'LAB_U2_04',
    title: 'Metallic Bonding: Conductivity and Malleability of Metals vs. Ionic Solids',
    type: 'Structured inquiry',
    duration: '40 min',
    linkedUnderstandings: ['U2.4.1', 'U2.4.2'],
    aim: 'To compare the electrical conductivity and malleability of metals, ionic solids, and alloys, and to explain the results using the metallic and ionic bonding models.',
    skills: [
      'Testing electrical conductivity of solid materials',
      'Performing qualitative malleability/brittleness tests',
      'Comparing properties of pure metals vs. alloys',
      'Connecting observations to bonding models'
    ],
    safetyPoints: [
      'Wear safety goggles throughout the experiment.',
      'Use caution when hammering samples \u2014 fragments may fly. Perform hammering tests behind a safety shield.',
      'Metal edges may be sharp \u2014 handle with care.',
      'Conductivity apparatus uses low voltage but keep electrodes away from skin.',
      'Do not taste or ingest any samples.'
    ],
    method: [
      'Obtain samples of: copper wire (Cu), iron nail (Fe), aluminum foil (Al), a steel nail (Fe/C alloy), a brass screw (Cu/Zn alloy), NaCl crystals, and a sugar cube (sucrose).',
      'Conductivity test: Use a conductivity tester to check whether each solid sample conducts electricity. Record results.',
      'Malleability test: Place each solid sample on a hard surface. Gently tap with a hammer and observe whether the sample deforms (malleable) or shatters (brittle). Record results.',
      'Comparison of metals vs. alloys: Compare the ease of bending for copper wire vs. a similar-gauge piece of steel wire (if available). Note any differences in hardness.',
      'Organize your results in a table with columns: Sample, Type (metal/ionic/molecular/alloy), Conducts?, Malleable or Brittle?'
    ],
    expectedResults: 'All metals and alloys should conduct electricity (delocalized electrons). Metals should be malleable; alloys should be harder and less easily deformed. NaCl should not conduct as a solid and should shatter when hammered (brittle). Sucrose should not conduct and should crumble. Steel should be noticeably harder than pure iron.',
    discussionPoints: [
      'Why do metals conduct electricity as solids while NaCl does not?',
      'Using the sea-of-electrons model, explain why metals are malleable but NaCl is brittle.',
      'Why is the steel nail harder than the pure iron nail? Relate your answer to the interstitial alloy model.',
      'Would you expect a brass screw to be harder or softer than pure copper? Explain using the substitutional alloy model.',
      'Design an experiment to test whether an unknown solid is a metal, ionic compound, or molecular compound using the techniques from this lab.'
    ]
  }

];

if (window.DB) { window.DB.u2labs = window.DB_U2_LABS; } else { window.DB = { u2labs: window.DB_U2_LABS }; }
