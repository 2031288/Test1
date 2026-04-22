
// AP Chemistry — Variables, Constants & Symbols
window.DB_VARIABLES = [
  {
    category: 'Fundamental Constants',
    items: [
      { symbol: 'N<sub>A</sub>', name: 'Avogadro constant', value: '6.022 × 10<sup>23</sup>', unit: 'mol<sup>−</sup><sup>1</sup>', notes: 'Number of particles per mole' },
      { symbol: 'R', name: 'Gas constant', value: '8.314', unit: 'J mol<sup>−</sup><sup>1</sup> K<sup>−</sup><sup>1</sup>', notes: 'Used in thermodynamics, kinetics, equilibrium' },
      { symbol: 'R', name: 'Gas constant (alt)', value: '0.08206', unit: 'L atm mol<sup>−</sup><sup>1</sup> K<sup>−</sup><sup>1</sup>', notes: 'Used in ideal gas law with pressure in atm' },
      { symbol: 'F', name: 'Faraday constant', value: '96,485', unit: 'C mol<sup>−</sup><sup>1</sup>', notes: 'Charge per mole of electrons; electrochemistry' },
      { symbol: 'h', name: 'Planck constant', value: '6.626 × 10<sup>−</sup><sup>34</sup>', unit: 'J·s', notes: 'Relates photon energy to frequency' },
      { symbol: 'c', name: 'Speed of light', value: '2.998 × 10<sup>8</sup>', unit: 'm s<sup>−</sup><sup>1</sup>', notes: 'Electromagnetic radiation calculations' },
      { symbol: 'k<sub>B</sub>', name: 'Boltzmann constant', value: '1.381 × 10<sup>−</sup><sup>23</sup>', unit: 'J K<sup>−</sup><sup>1</sup>', notes: 'Per-molecule energy; KE<sub>avg</sub> = (3/2)k<sub>B</sub>T' },
      { symbol: 'K<sub>w</sub>', name: 'Ion-product of water', value: '1.0 × 10<sup>−</sup><sup>14</sup>', unit: '(at 25°C)', notes: 'K<sub>w</sub> = [H<sup>+</sup>][OH<sup>−</sup>]; pH + pOH = 14' }
    ]
  },
  {
    category: 'Specific Heat & Calorimetry',
    items: [
      { symbol: 'c<sub>water</sub>', name: 'Specific heat of water', value: '4.184', unit: 'J g<sup>−</sup><sup>1</sup> °C<sup>−</sup><sup>1</sup>', notes: 'Used in q = mcΔT calorimetry' },
      { symbol: 'q', name: 'Heat', value: '', unit: 'J or kJ', notes: 'q = mcΔT; positive = endothermic' },
      { symbol: 'ΔH', name: 'Enthalpy change', value: '', unit: 'kJ mol<sup>−</sup><sup>1</sup>', notes: 'Heat at constant pressure; ΔH < 0 exothermic' },
      { symbol: 'ΔS', name: 'Entropy change', value: '', unit: 'J mol<sup>−</sup><sup>1</sup> K<sup>−</sup><sup>1</sup>', notes: 'Disorder; ΔS > 0 for increased randomness' },
      { symbol: 'ΔG', name: 'Gibbs free energy', value: '', unit: 'kJ mol<sup>−</sup><sup>1</sup>', notes: 'ΔG = ΔH − TΔS; spontaneous when < 0' }
    ]
  },
  {
    category: 'Pressure & Gas Variables',
    items: [
      { symbol: '1 atm', name: 'Standard pressure', value: '101.325', unit: 'kPa', notes: 'Also = 760 mmHg = 760 torr' },
      { symbol: 'V<sub>m</sub>', name: 'Molar volume at STP', value: '22.414', unit: 'L mol<sup>−</sup><sup>1</sup>', notes: 'At 0°C and 1 atm (STP)' },
      { symbol: 'P', name: 'Pressure', value: '', unit: 'atm, kPa, mmHg', notes: 'Force per unit area; PV = nRT' },
      { symbol: 'V', name: 'Volume', value: '', unit: 'L', notes: 'In gas law calculations, must be in litres' },
      { symbol: 'T', name: 'Temperature', value: '', unit: 'K', notes: 'Must be in Kelvin for gas laws; K = °C + 273.15' },
      { symbol: 'n', name: 'Amount of substance', value: '', unit: 'mol', notes: 'n = m/M; n = PV/RT; n = cV' }
    ]
  },
  {
    category: 'Beer-Lambert Law Variables',
    items: [
      { symbol: 'A', name: 'Absorbance', value: '', unit: 'dimensionless', notes: 'A = εbc; measured by spectrophotometer' },
      { symbol: 'ε', name: 'Molar absorptivity', value: '', unit: 'L mol<sup>−</sup><sup>1</sup> cm<sup>−</sup><sup>1</sup>', notes: 'Also called molar extinction coefficient' },
      { symbol: 'b', name: 'Path length', value: '', unit: 'cm', notes: 'Width of cuvette (usually 1.00 cm)' },
      { symbol: 'c', name: 'Concentration', value: '', unit: 'mol L<sup>−</sup><sup>1</sup>', notes: 'Molar concentration of absorbing species' }
    ]
  },
  {
    category: 'Nernst Equation Variables',
    items: [
      { symbol: 'E', name: 'Cell potential', value: '', unit: 'V', notes: 'Non-standard cell potential' },
      { symbol: 'E°', name: 'Standard cell potential', value: '', unit: 'V', notes: 'E°<sub>cell</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub>' },
      { symbol: 'n', name: 'Moles of electrons', value: '', unit: 'mol', notes: 'Electrons transferred in balanced redox equation' },
      { symbol: 'Q', name: 'Reaction quotient', value: '', unit: 'dimensionless', notes: 'Same form as K but with current concentrations' },
      { symbol: 'Nernst', name: 'Nernst equation', value: '', unit: '', notes: 'E = E° − (RT/nF) ln Q; at 25°C: E = E° − (0.0592/n) log Q' }
    ]
  },
  {
    category: 'Henderson-Hasselbalch Variables',
    items: [
      { symbol: 'pH', name: 'pH', value: '', unit: '', notes: 'pH = −log[H<sup>+</sup>]' },
      { symbol: 'pK<sub>a</sub>', name: 'pKa', value: '', unit: '', notes: 'pK<sub>a</sub> = −log K<sub>a</sub>; smaller = stronger acid' },
      { symbol: '[A<sup>−</sup>]', name: 'Conjugate base concentration', value: '', unit: 'mol L<sup>−</sup><sup>1</sup>', notes: 'Deprotonated form of weak acid' },
      { symbol: '[HA]', name: 'Weak acid concentration', value: '', unit: 'mol L<sup>−</sup><sup>1</sup>', notes: 'Protonated form' },
      { symbol: 'H-H', name: 'Henderson-Hasselbalch', value: '', unit: '', notes: 'pH = pK<sub>a</sub> + log([A<sup>−</sup>]/[HA]); at half-equiv: pH = pK<sub>a</sub>' }
    ]
  },
  {
    category: 'Kinetics Variables',
    items: [
      { symbol: 'k', name: 'Rate constant', value: '', unit: 'varies with order', notes: 'Units depend on overall reaction order' },
      { symbol: 'E<sub>a</sub>', name: 'Activation energy', value: '', unit: 'kJ mol<sup>−</sup><sup>1</sup>', notes: 'Minimum energy for reaction; from Arrhenius plot' },
      { symbol: 'A', name: 'Frequency factor', value: '', unit: 'same as k', notes: 'Pre-exponential factor in Arrhenius equation' },
      { symbol: 't<sub>½</sub>', name: 'Half-life', value: '', unit: 's', notes: '1st order: t<sub>½</sub> = 0.693/k (constant)' }
    ]
  },
  {
    category: 'Equilibrium Variables',
    items: [
      { symbol: 'K<sub>c</sub>', name: 'Equilibrium constant (conc)', value: '', unit: 'varies', notes: 'Products over reactants at equilibrium; omit solids/liquids' },
      { symbol: 'K<sub>p</sub>', name: 'Equilibrium constant (pressure)', value: '', unit: 'varies', notes: 'K<sub>p</sub> = K<sub>c</sub>(RT)<sup>Δn</sup>' },
      { symbol: 'K<sub>sp</sub>', name: 'Solubility product', value: '', unit: 'varies', notes: 'For sparingly soluble salts dissolving' },
      { symbol: 'K<sub>a</sub>', name: 'Acid dissociation constant', value: '', unit: 'mol L<sup>−</sup><sup>1</sup>', notes: 'K<sub>a</sub> = [H<sup>+</sup>][A<sup>−</sup>]/[HA]' },
      { symbol: 'K<sub>b</sub>', name: 'Base dissociation constant', value: '', unit: 'mol L<sup>−</sup><sup>1</sup>', notes: 'K<sub>b</sub> = [BH<sup>+</sup>][OH<sup>−</sup>]/[B]; K<sub>a</sub> × K<sub>b</sub> = K<sub>w</sub>' },
      { symbol: 'Q', name: 'Reaction quotient', value: '', unit: 'varies', notes: 'Q < K: forward; Q > K: reverse; Q = K: equilibrium' }
    ]
  }
];
