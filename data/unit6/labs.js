/*
 *  AP Chemistry – Unit 6: Thermodynamics
 *  Data file: labs.js
 *  4 labs covering calorimetry, Hess's law, and thermal processes
 */

window.DB_U6_LABS = [

  {
    id: 'LAB_U6_01',
    title: 'Coffee-Cup Calorimetry: Heat of Neutralization',
    type: 'Guided inquiry',
    duration: '75 min',
    linkedUnderstandings: ['U6.4.1', 'U6.4.2'],
    aim: 'Determine the molar enthalpy of neutralization of a strong acid–strong base reaction using coffee-cup calorimetry.',
    skills: [
      'Using a calorimeter and digital thermometer',
      'Applying q = mcΔT and q<sub>rxn</sub> = −q_soln',
      'Calculating ΔH per mole of product formed',
      'Evaluating sources of experimental error'
    ],
    safetyPoints: [
      'Wear safety goggles and gloves when handling acids and bases.',
      'HCl and NaOH are corrosive — rinse any skin contact immediately with copious water.',
      'Dispose of neutralized solutions in the designated waste container.',
      'Do not use concentrations greater than 1.0 M for this experiment.'
    ],
    method: [
      'Measure 50.0 mL of 1.00 M HCl with a graduated cylinder and pour into a Styrofoam-cup calorimeter.',
      'Record the initial temperature of the HCl solution (T_initial).',
      'Measure 50.0 mL of 1.00 M NaOH separately and verify it is at the same initial temperature (within 0.5 °C).',
      'Quickly pour the NaOH into the calorimeter containing HCl. Place the lid and insert the thermometer.',
      'Stir gently and record the temperature every 15 seconds for 3 minutes. Note the maximum temperature reached (T_max).',
      'Calculate ΔT = T_max − T_initial.',
      'Calculate q_solution = m_total × c<sub>water</sub> × ΔT (assume density = 1.00 g/mL, c = 4.184 J g<sup>−</sup><sup>1</sup> °C<sup>−</sup><sup>1</sup>).',
      'Calculate q<sub>rxn</sub> = −q_solution.',
      'Determine moles of H<sub>2</sub>O formed (limiting reactant analysis).',
      'Calculate ΔH_neutralization = q<sub>rxn</sub> / n (in kJ/mol).',
      'Repeat the experiment for a second trial and average the results.',
      'Compare to the accepted value of −57.1 kJ/mol and calculate percent error.'
    ],
    expectedResults: 'ΔH_neutralization should be approximately −55 to −58 kJ/mol. The temperature should rise by about 6–7 °C for 1.0 M solutions mixed in equal volumes. Values may be slightly less negative than the accepted value due to heat loss to the calorimeter and surroundings.',
    discussionPoints: [
      'Why is it important that both solutions start at the same temperature?',
      'What assumptions did we make about the solution (density, specific heat)? How might these affect accuracy?',
      'Identify at least two sources of error. Are they systematic or random?',
      'Would this experiment work with a weak acid and strong base? How would the results differ and why?',
      'How does this lab illustrate the concept that q<sub>rxn</sub> = −q_surroundings?'
    ]
  },

  {
    id: 'LAB_U6_02',
    title: 'Specific Heat of a Metal',
    type: 'Guided inquiry',
    duration: '60 min',
    linkedUnderstandings: ['U6.3.1', 'U6.4.1'],
    aim: 'Determine the specific heat capacity of an unknown metal by measuring heat transfer to water and applying conservation of energy.',
    skills: [
      'Heating a metal sample in a boiling water bath',
      'Measuring temperature changes precisely',
      'Applying q_metal = −q_water to solve for c_metal',
      'Identifying an unknown metal from its specific heat'
    ],
    safetyPoints: [
      'Use tongs or heat-resistant gloves when handling hot metal and beakers.',
      'The metal will be near 100 °C — do not touch with bare hands.',
      'Boiling water can cause burns — keep a safe distance and do not lean over the beaker.',
      'Allow all equipment to cool before cleaning up.'
    ],
    method: [
      'Measure and record the mass of the unknown metal sample (aim for 30–60 g).',
      'Place the metal in a beaker of boiling water for at least 5 minutes so it reaches thermal equilibrium (~100 °C). Record T_metal = T_boiling water.',
      'While the metal is heating, measure 75.0 mL of room-temperature water into the Styrofoam-cup calorimeter. Record T_water (initial).',
      'Quickly transfer the hot metal into the calorimeter water. Replace the lid immediately.',
      'Stir gently and record the temperature every 10 seconds until a stable maximum temperature is reached. Record T_final (equilibrium).',
      'Calculate q_water = m_water × c<sub>water</sub> × (T_final − T_water,initial).',
      'Since q_metal = −q_water: c_metal = −q_water / (m_metal × (T_final − T_metal,initial)).',
      'Compare your calculated c_metal to known values: Al = 0.897, Fe = 0.449, Cu = 0.385, Zn = 0.388, Pb = 0.128 J g<sup>−</sup><sup>1</sup> °C<sup>−</sup><sup>1</sup>.',
      'Repeat for a second trial.'
    ],
    expectedResults: 'The final temperature should be a few degrees above the initial water temperature (depending on the metal\'s mass and identity). Specific heat values should be within 10–15% of the accepted value for the unknown metal. Metals with low specific heat (like lead) will produce a smaller temperature change than metals with high specific heat (like aluminum) for the same mass.',
    discussionPoints: [
      'Why must the metal be transferred quickly from the hot water to the calorimeter?',
      'What is the largest source of error in this experiment?',
      'Why does the equilibrium temperature depend on both the masses and the specific heats of the metal and water?',
      'If some water splashed out during the transfer, how would it affect your calculated c_metal (too high or too low)?',
      'How does this lab demonstrate the zeroth law of thermodynamics?'
    ]
  },

  {
    id: 'LAB_U6_03',
    title: 'Hess\'s Law Verification',
    type: 'Guided inquiry',
    duration: '90 min',
    linkedUnderstandings: ['U6.9.1', 'U6.9.2', 'U6.4.2'],
    aim: 'Verify Hess\'s law by measuring the enthalpy changes for three related reactions involving NaOH, HCl, and NH<sub>4</sub>Cl, and showing that the enthalpy of the overall reaction equals the sum of two component reactions.',
    skills: [
      'Performing multiple calorimetry experiments',
      'Manipulating thermochemical equations',
      'Applying Hess\'s law to verify additive enthalpy changes',
      'Calculating percent error against theoretical values'
    ],
    safetyPoints: [
      'NaOH(s) is highly corrosive and exothermic when dissolved — add slowly to water.',
      'HCl is corrosive — avoid inhalation and skin contact.',
      'Wear safety goggles and gloves throughout.',
      'Rinse any spills immediately with water and notify the instructor.'
    ],
    method: [
      'Reaction A — NaOH(s) dissolving: Add 2.00 g NaOH(s) to 50.0 mL water in a calorimeter. Record T_initial and T_max. Calculate q and ΔH_A (per mol NaOH).',
      'Reaction B — NaOH(aq) + HCl(aq) neutralization: Mix 25.0 mL of 1.00 M NaOH(aq) with 25.0 mL of 1.00 M HCl(aq) in a calorimeter. Record T_initial and T_max. Calculate q and ΔH_B (per mol).',
      'Reaction C — NaOH(s) + HCl(aq) direct: Add 2.00 g NaOH(s) to 50.0 mL of 1.00 M HCl(aq) in a calorimeter. Record T_initial and T_max. Calculate q and ΔH_C (per mol NaOH).',
      'According to Hess\'s law: ΔH_C should equal ΔH_A + ΔH_B (since Reaction C = Reaction A + Reaction B).',
      'Compare ΔH_A + ΔH_B to ΔH_C and calculate the percent difference.',
      'Repeat each reaction for a second trial if time permits.'
    ],
    expectedResults: 'ΔH_A (dissolution of NaOH) ≈ −44 kJ/mol. ΔH_B (neutralization) ≈ −57 kJ/mol. ΔH_C (combined) ≈ −100 kJ/mol. The sum ΔH_A + ΔH_B should be within 5–10% of ΔH_C, verifying Hess\'s law. Discrepancies arise from heat loss and measurement imprecision.',
    discussionPoints: [
      'Does your data support Hess\'s law? Explain using your measured values.',
      'Why is it valid to add the ΔH values for Reactions A and B to obtain ΔH for Reaction C?',
      'What specific sources of error could cause the sum (ΔH_A + ΔH_B) to differ from ΔH_C?',
      'If Hess\'s law did not hold, what would that imply about enthalpy as a thermodynamic quantity?',
      'How does this experiment connect to the concept that enthalpy is a state function?'
    ]
  },

  {
    id: 'LAB_U6_04',
    title: 'Endothermic and Exothermic Reactions Exploration',
    type: 'Guided inquiry',
    duration: '50 min',
    linkedUnderstandings: ['U6.1.1', 'U6.1.2', 'U6.4.1'],
    aim: 'Observe and classify several chemical and physical processes as endothermic or exothermic by measuring temperature changes, and relate observations to energy flow between system and surroundings.',
    skills: [
      'Measuring temperature changes with a thermometer or probe',
      'Classifying processes as endothermic or exothermic',
      'Relating macroscopic observations (temperature change) to molecular-level energy changes',
      'Recording qualitative and quantitative observations'
    ],
    safetyPoints: [
      'Wear safety goggles throughout the lab.',
      'Some reactions produce irritating gases — work in a well-ventilated area or fume hood.',
      'HCl and NaOH solutions are corrosive — handle with care.',
      'Dispose of all chemicals in designated waste containers, not the sink.'
    ],
    method: [
      'Set up four stations, each with a Styrofoam-cup calorimeter and thermometer.',
      'Station 1 — Dissolution of NH<sub>4</sub>NO<sub>3</sub>: Add 5.0 g NH<sub>4</sub>NO<sub>3</sub> to 50 mL water. Record T_initial and T_final. Note whether the cup feels cold or warm.',
      'Station 2 — Dissolution of CaCl<sub>2</sub>: Add 5.0 g CaCl<sub>2</sub> to 50 mL water. Record T_initial and T_final. Note the temperature sensation.',
      'Station 3 — Reaction of Mg ribbon with HCl: Add a 3-cm strip of Mg to 50 mL of 1.0 M HCl. Record T_initial and T_final. Observe any gas evolution.',
      'Station 4 — Reaction of baking soda (NaHCO<sub>3</sub>) with vinegar: Add 5.0 g NaHCO<sub>3</sub> to 50 mL vinegar. Record T_initial and T_final. Observe gas production.',
      'For each station, classify the process as endothermic or exothermic based on the temperature change.',
      'Calculate q = mcΔT for each process (approximate, using c ≈ 4.184 J g<sup>−</sup><sup>1</sup> °C<sup>−</sup><sup>1</sup> for all solutions).',
      'Create a summary table: process, ΔT, q, endo/exo classification, and molecular-level explanation.'
    ],
    expectedResults: 'Station 1 (NH<sub>4</sub>NO<sub>3</sub>): temperature drops 5–10 °C (endothermic dissolution). Station 2 (CaCl<sub>2</sub>): temperature rises 8–15 °C (exothermic dissolution). Station 3 (Mg + HCl): temperature rises significantly, 10–20 °C (strongly exothermic, H<sub>2</sub> gas produced). Station 4 (NaHCO<sub>3</sub> + vinegar): temperature drops 3–5 °C (endothermic, CO<sub>2</sub> gas produced).',
    discussionPoints: [
      'For each reaction, identify the system and the surroundings. In which direction did energy flow?',
      'Why does dissolving NH<sub>4</sub>NO<sub>3</sub> feel cold while dissolving CaCl<sub>2</sub> feels warm? Relate to lattice energy vs. hydration energy.',
      'Rank the four processes by magnitude of ΔT. Does a larger ΔT always mean more total energy was transferred? Why or why not?',
      'How does this lab connect to the sign convention for q (q_system positive for endothermic, negative for exothermic)?',
      'Choose one reaction and explain the energy change in terms of bonds broken vs. bonds formed or IMFs disrupted vs. formed.'
    ]
  }
];

if (window.DB) {
  window.DB.u6labs = window.DB_U6_LABS;
} else {
  window.DB = { u6labs: window.DB_U6_LABS };
}
