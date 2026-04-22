/*
 *  AP Chemistry – Unit 6: Thermodynamics
 *  Data file: content.js
 *  Auto-generated — do not hand-edit.
 */

window.DB_U6_CONTENT = {

  /* ───────────────────── METADATA ───────────────────── */
  metadata: {
    id: 'unit6',
    title: 'Unit 6',
    longTitle: 'Unit 6 — Thermodynamics',
    description:
      'Energy changes in chemical reactions, calorimetry, enthalpy, Hess\'s law, and bond/formation enthalpies.',
    guidingQuestion:
      'What is the relationship between the energy changes that occur in chemical reactions, the nature of the reactants and products, and the pathway of a reaction?',
    examWeight: '7-9%',

    subtopics: [
      /* 6.1 */
      {
        id: 'U6.1', code: '6.1',
        title: 'Endothermic and Exothermic Processes',
        learningObjectives: ['ENE-2.A'],
        understandings: ['U6.1.1', 'U6.1.2'],
        blocks: [
          { id: 'B6.1', code: '6.1', title: 'Endothermic and Exothermic Processes', understandings: ['U6.1.1', 'U6.1.2'] }
        ]
      },
      /* 6.2 */
      {
        id: 'U6.2', code: '6.2',
        title: 'Energy Diagrams',
        learningObjectives: ['ENE-2.B'],
        understandings: ['U6.2.1', 'U6.2.2'],
        blocks: [
          { id: 'B6.2', code: '6.2', title: 'Energy Diagrams', understandings: ['U6.2.1', 'U6.2.2'] }
        ]
      },
      /* 6.3 */
      {
        id: 'U6.3', code: '6.3',
        title: 'Heat Transfer and Thermal Equilibrium',
        learningObjectives: ['ENE-2.C'],
        understandings: ['U6.3.1', 'U6.3.2'],
        blocks: [
          { id: 'B6.3', code: '6.3', title: 'Heat Transfer and Thermal Equilibrium', understandings: ['U6.3.1', 'U6.3.2'] }
        ]
      },
      /* 6.4 */
      {
        id: 'U6.4', code: '6.4',
        title: 'Heat Capacity and Calorimetry',
        learningObjectives: ['ENE-2.D'],
        understandings: ['U6.4.1', 'U6.4.2', 'U6.4.3'],
        blocks: [
          { id: 'B6.4', code: '6.4', title: 'Heat Capacity and Calorimetry', understandings: ['U6.4.1', 'U6.4.2', 'U6.4.3'] }
        ]
      },
      /* 6.5 */
      {
        id: 'U6.5', code: '6.5',
        title: 'Energy of Phase Changes',
        learningObjectives: ['ENE-2.E'],
        understandings: ['U6.5.1', 'U6.5.2'],
        blocks: [
          { id: 'B6.5', code: '6.5', title: 'Energy of Phase Changes', understandings: ['U6.5.1', 'U6.5.2'] }
        ]
      },
      /* 6.6 */
      {
        id: 'U6.6', code: '6.6',
        title: 'Introduction to Enthalpy of Reaction',
        learningObjectives: ['ENE-2.F'],
        understandings: ['U6.6.1', 'U6.6.2', 'U6.6.3'],
        blocks: [
          { id: 'B6.6', code: '6.6', title: 'Introduction to Enthalpy of Reaction', understandings: ['U6.6.1', 'U6.6.2', 'U6.6.3'] }
        ]
      },
      /* 6.7 */
      {
        id: 'U6.7', code: '6.7',
        title: 'Bond Enthalpies',
        learningObjectives: ['ENE-2.G'],
        understandings: ['U6.7.1', 'U6.7.2'],
        blocks: [
          { id: 'B6.7', code: '6.7', title: 'Bond Enthalpies', understandings: ['U6.7.1', 'U6.7.2'] }
        ]
      },
      /* 6.8 */
      {
        id: 'U6.8', code: '6.8',
        title: 'Enthalpy of Formation',
        learningObjectives: ['ENE-2.H'],
        understandings: ['U6.8.1', 'U6.8.2', 'U6.8.3'],
        blocks: [
          { id: 'B6.8', code: '6.8', title: 'Enthalpy of Formation', understandings: ['U6.8.1', 'U6.8.2', 'U6.8.3'] }
        ]
      },
      /* 6.9 */
      {
        id: 'U6.9', code: '6.9',
        title: 'Hess\'s Law',
        learningObjectives: ['ENE-2.I'],
        understandings: ['U6.9.1', 'U6.9.2', 'U6.9.3'],
        blocks: [
          { id: 'B6.9', code: '6.9', title: 'Hess\'s Law', understandings: ['U6.9.1', 'U6.9.2', 'U6.9.3'] }
        ]
      }
    ]
  },

  /* ───────────────────── UNDERSTANDINGS ───────────────────── */
  understandings: [

    /* ============================================================
       6.1  Endothermic and Exothermic Processes
       ============================================================ */
    {
      id: 'U6.1.1', code: 'Topic 6.1', subtopic: '6.1',
      subtopicTitle: 'Endothermic and Exothermic Processes', section: 'unit6',
      concepts: ['energy', 'system-surroundings'],
      statement:
        'Temperature changes in matter are determined by the net energy flow into or out of the system, and the sign of q indicates the direction of that flow.',
      content: {
        textbook: {
          explanation:
            '<p>In thermodynamics, we divide the universe into the <strong>system</strong> (the reaction or process we are studying) and the <strong>surroundings</strong> (everything else). Energy is conserved overall (First Law of Thermodynamics), so any energy that leaves the system enters the surroundings and vice versa.</p>' +
            '<p><strong>Exothermic processes</strong> release energy: the system loses energy and the surroundings gain it. The sign convention is <em>q &lt; 0</em> for the system. A burning match, neutralization of a strong acid by a strong base, and combustion of hydrocarbons are classic examples.</p>' +
            '<p><strong>Endothermic processes</strong> absorb energy: the system gains energy from the surroundings. Here <em>q &gt; 0</em> for the system. Dissolving ammonium nitrate in water or photosynthesis are everyday examples.</p>' +
            '<p>At the molecular level, whether a process is exo- or endothermic depends on the relative strengths of bonds broken versus bonds formed. When stronger bonds form in the products than were broken in the reactants, net energy is released (exothermic).</p>',
          keyPoints: [
            'q < 0 means the system releases energy (exothermic); q > 0 means it absorbs energy (endothermic).',
            'The surroundings always experience the opposite sign of q relative to the system.',
            'Temperature of the surroundings rises in an exothermic process and falls in an endothermic process.'
          ],
          formulae: [
            '\\[ q_{\\text{system}} = -q_{\\text{surroundings}} \\]'
          ],
          workedExamples: [
            {
              title: 'Classifying a Dissolution Process',
              body:
                '<p><strong>Problem:</strong> When NH<sub>4</sub>NO<sub>3</sub> dissolves in water, the temperature of the solution drops from 25.0 °C to 18.4 °C. Is this process exothermic or endothermic from the system\'s perspective?</p>' +
                '<p><strong>Solution:</strong> The system is the dissolving salt and the water it interacts with. Because the temperature of the surroundings (the solution you can measure) <em>decreases</em>, energy flowed <em>from</em> the surroundings <em>into</em> the system. Therefore q<sub>system</sub> &gt; 0 and the process is <strong>endothermic</strong>.</p>'
            }
          ],
          warnings: [
            'The AP exam loves to test sign-convention pitfalls: remember that a temperature decrease in a calorimeter means the reaction is endothermic (system gained the energy).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Exothermic = system releases heat (q < 0, surroundings warm up). Endothermic = system absorbs heat (q > 0, surroundings cool down).',
          keyPoints: [
            'Sign of q is always stated from the system\'s point of view.',
            'Bond breaking requires energy; bond forming releases energy.'
          ],
          formulae: ['\\( q_{\\text{sys}} = -q_{\\text{surr}} \\)']
        }
      },
      examTips: [
        'On FRQs, always state whether your answer refers to the system or surroundings.',
        'If a problem says "the solution temperature drops," the reaction absorbed energy — endothermic.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 5: IMFs determine magnitudes of phase-change energies', sec: 'content' },
        { color: 'purple', label: '→ Unit 9: Entropy & Gibbs free energy extend the energy story', sec: 'content' }
      ],
      questionIds: ['U6Q001', 'U6Q002']
    },

    {
      id: 'U6.1.2', code: 'Topic 6.1', subtopic: '6.1',
      subtopicTitle: 'Endothermic and Exothermic Processes', section: 'unit6',
      concepts: ['bond-energy', 'energy'],
      statement:
        'The net energy change in a reaction can be related to the difference between the energy required to break bonds in the reactants and the energy released when bonds form in the products.',
      content: {
        textbook: {
          explanation:
            '<p>Every covalent bond has a characteristic <strong>bond dissociation energy</strong> — the energy needed to break that bond homolytically in the gas phase. Breaking bonds is <em>always</em> endothermic (requires energy input), while forming bonds is <em>always</em> exothermic (releases energy).</p>' +
            '<p>If the total energy released by forming new bonds exceeds the total energy absorbed breaking old bonds, the overall reaction is exothermic (and vice versa). This is a qualitative framework; quantitative calculations using <em>average</em> bond enthalpies are covered in Topic 6.7.</p>',
          keyPoints: [
            'Breaking bonds: always endothermic (energy in).',
            'Forming bonds: always exothermic (energy out).',
            'Net ΔH ≈ Σ(bonds broken) − Σ(bonds formed).'
          ],
          formulae: [],
          workedExamples: [],
          warnings: [
            'Students often reverse the relationship — remember that it takes energy to pull atoms apart (break bonds).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Bond breaking = energy in; bond forming = energy out. If more energy is released forming products than consumed breaking reactants, the reaction is exothermic.',
          keyPoints: [
            'This concept connects to bond enthalpy calculations in Topic 6.7.'
          ],
          formulae: []
        }
      },
      examTips: [
        'MCQs may give you two potential reactions and ask which is more exothermic based on bond strengths — think about which forms stronger bonds.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 3: Types of bonding influence bond strengths', sec: 'content' },
        { color: 'orange', label: '→ Topic 6.7: Quantitative bond enthalpy calculations', sec: 'content' }
      ],
      questionIds: ['U6Q003']
    },

    /* ============================================================
       6.2  Energy Diagrams
       ============================================================ */
    {
      id: 'U6.2.1', code: 'Topic 6.2', subtopic: '6.2',
      subtopicTitle: 'Energy Diagrams', section: 'unit6',
      concepts: ['energy-diagram', 'activation-energy'],
      statement:
        'A potential-energy diagram shows the energy of the system as a function of the reaction coordinate, indicating reactant energy, product energy, and the activation energy barrier.',
      content: {
        textbook: {
          explanation:
            '<p>A <strong>potential energy (PE) diagram</strong> plots the potential energy of a reacting system on the y-axis against the <em>reaction coordinate</em> (progress of the reaction) on the x-axis.</p>' +
            '<p>Key features:</p>' +
            '<ul>' +
            '<li><strong>Reactant energy level</strong> — the starting energy plateau on the left.</li>' +
            '<li><strong>Product energy level</strong> — the ending energy plateau on the right.</li>' +
            '<li><strong>Activation energy (E<sub>a</sub>)</strong> — the energy difference between the reactant level and the peak (transition state). This is the minimum energy the reactants must possess for the reaction to proceed.</li>' +
            '<li><strong>ΔH<sub>rxn</sub></strong> — the difference between product and reactant energy levels. If products are lower, the reaction is exothermic (ΔH &lt; 0); if higher, endothermic (ΔH &gt; 0).</li>' +
            '</ul>' +
            '<p>For an <strong>exothermic reaction</strong>, the products sit below the reactants on the diagram. For an <strong>endothermic reaction</strong>, the products sit above.</p>',
          keyPoints: [
            'The peak of the PE diagram is the transition state (activated complex).',
            'E_a(forward) is measured from reactants to the peak.',
            'E_a(reverse) is measured from products to the peak.',
            'E_a(forward) − E_a(reverse) = ΔH_rxn for an endothermic reaction.'
          ],
          formulae: [
            '\\[ \\Delta H_{\\text{rxn}} = E_a(\\text{forward}) - E_a(\\text{reverse}) \\]'
          ],
          workedExamples: [
            {
              title: 'Reading an Energy Diagram',
              body:
                '<p><strong>Problem:</strong> A PE diagram shows reactants at 80 kJ, a peak at 150 kJ, and products at 40 kJ. Determine E<sub>a</sub>(forward), E<sub>a</sub>(reverse), and ΔH<sub>rxn</sub>.</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<ul>' +
                '<li>E<sub>a</sub>(forward) = 150 − 80 = <strong>70 kJ</strong></li>' +
                '<li>E<sub>a</sub>(reverse) = 150 − 40 = <strong>110 kJ</strong></li>' +
                '<li>ΔH<sub>rxn</sub> = 40 − 80 = <strong>−40 kJ</strong> (exothermic)</li>' +
                '</ul>'
            }
          ],
          warnings: [
            'A catalyst lowers E_a but does NOT change ΔH_rxn.'
          ],
          diagrams: ['enthalpyProfile']
        },
        studyGuide: {
          essentials:
            'PE diagrams show reactant/product energy levels and the activation energy barrier. Products below reactants = exothermic; above = endothermic.',
          keyPoints: [
            'Transition state is at the peak — not a stable species.',
            'Catalysts lower E_a for both forward and reverse reactions equally.'
          ],
          formulae: ['\\( \\Delta H_{\\text{rxn}} = E_{\\text{products}} - E_{\\text{reactants}} \\)']
        }
      },
      examTips: [
        'Be ready to sketch or interpret a PE diagram on the FRQ — label E_a, ΔH, reactants, products, and transition state.',
        'The AP exam may show a multi-step PE diagram; identify the rate-determining step as the one with the highest E_a.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 5: Kinetics — E_a and reaction rate relationship', sec: 'content' },
        { color: 'purple', label: '→ Topic 6.6: ΔH_rxn from enthalpy perspective', sec: 'content' }
      ],
      questionIds: ['U6Q004', 'U6Q005']
    },

    {
      id: 'U6.2.2', code: 'Topic 6.2', subtopic: '6.2',
      subtopicTitle: 'Energy Diagrams', section: 'unit6',
      concepts: ['catalyst', 'energy-diagram'],
      statement:
        'A catalyst provides an alternative reaction pathway with a lower activation energy but does not change the overall enthalpy change of the reaction.',
      content: {
        textbook: {
          explanation:
            '<p>A <strong>catalyst</strong> speeds up a reaction by providing an alternative mechanism with a <em>lower activation energy</em>. On a PE diagram, the catalyzed pathway has a lower peak (or multiple smaller peaks for a multi-step mechanism) than the uncatalyzed pathway.</p>' +
            '<p>Crucially, because enthalpy is a state function, the starting and ending energy levels remain the same. Therefore, <strong>ΔH<sub>rxn</sub> is unchanged</strong> by a catalyst. The catalyst affects only the <em>kinetics</em>, not the <em>thermodynamics</em>.</p>',
          keyPoints: [
            'A catalyst lowers E_a for both forward and reverse directions.',
            'ΔH_rxn is unaffected because it depends only on initial and final states.',
            'Catalysts are not consumed in the overall reaction.'
          ],
          formulae: [],
          workedExamples: [],
          warnings: [
            'Do not confuse catalysts with intermediates. An intermediate appears and is consumed; a catalyst is regenerated.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Catalysts lower E_a but leave ΔH_rxn unchanged. On a PE diagram, the peak is lower but reactant and product levels stay the same.',
          keyPoints: ['Catalysts affect rate, not equilibrium position or ΔH.'],
          formulae: []
        }
      },
      examTips: [
        'If asked to draw a catalyzed vs uncatalyzed PE diagram, keep reactant and product levels identical — only the peak changes.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 5: Catalysts and reaction mechanisms', sec: 'content' },
        { color: 'purple', label: '→ Unit 9: Catalysts do not change ΔG', sec: 'content' }
      ],
      questionIds: ['U6Q006']
    },

    /* ============================================================
       6.3  Heat Transfer and Thermal Equilibrium
       ============================================================ */
    {
      id: 'U6.3.1', code: 'Topic 6.3', subtopic: '6.3',
      subtopicTitle: 'Heat Transfer and Thermal Equilibrium', section: 'unit6',
      concepts: ['heat-transfer', 'thermal-equilibrium'],
      statement:
        'Heat flows spontaneously from a hotter object to a cooler one until thermal equilibrium is reached.',
      content: {
        textbook: {
          explanation:
            '<p><strong>Heat (q)</strong> is the transfer of thermal energy between objects at different temperatures. It always flows spontaneously from the <em>higher-temperature</em> body to the <em>lower-temperature</em> body until both reach the same temperature — a state called <strong>thermal equilibrium</strong>.</p>' +
            '<p>This is essentially the <strong>Zeroth Law of Thermodynamics</strong>: if object A is in thermal equilibrium with object C, and object B is also in thermal equilibrium with object C, then A and B are in thermal equilibrium with each other.</p>' +
            '<p>In calorimetry, we exploit this principle: when a hot metal is placed in cooler water, heat flows from metal to water. At equilibrium, <em>q<sub>metal</sub> = −q<sub>water</sub></em> (assuming no heat loss to the calorimeter walls).</p>',
          keyPoints: [
            'Heat flows from hot → cold spontaneously.',
            'At thermal equilibrium, net heat flow = 0 and T_final is the same for both objects.',
            'q_lost by hot object = −q_gained by cold object (conservation of energy).'
          ],
          formulae: [
            '\\[ q_{\\text{hot}} = -q_{\\text{cold}} \\]'
          ],
          workedExamples: [
            {
              title: 'Finding Equilibrium Temperature',
              body:
                '<p><strong>Problem:</strong> 50.0 g of water at 80.0 °C is mixed with 100.0 g of water at 20.0 °C. Find the final temperature. (c<sub>water</sub> = 4.184 J g<sup>−1</sup> °C<sup>−1</sup>)</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>q<sub>hot</sub> = −q<sub>cold</sub></p>' +
                '<p>m<sub>hot</sub> c ΔT<sub>hot</sub> = −m<sub>cold</sub> c ΔT<sub>cold</sub></p>' +
                '<p>50.0 × 4.184 × (T<sub>f</sub> − 80.0) = −100.0 × 4.184 × (T<sub>f</sub> − 20.0)</p>' +
                '<p>Since c cancels: 50.0(T<sub>f</sub> − 80.0) = −100.0(T<sub>f</sub> − 20.0)</p>' +
                '<p>50.0 T<sub>f</sub> − 4000 = −100.0 T<sub>f</sub> + 2000</p>' +
                '<p>150.0 T<sub>f</sub> = 6000</p>' +
                '<p>T<sub>f</sub> = <strong>40.0 °C</strong></p>'
            }
          ],
          warnings: [],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Heat flows hot → cold until thermal equilibrium. In an isolated system, q_lost = −q_gained.',
          keyPoints: [
            'Zeroth Law: two objects each in thermal equilibrium with a third are in equilibrium with each other.'
          ],
          formulae: ['\\( q_{\\text{hot}} = -q_{\\text{cold}} \\)']
        }
      },
      examTips: [
        'On the AP exam, always assume the calorimeter is perfectly insulated unless told otherwise.'
      ],
      connections: [
        { color: 'teal', label: '→ Topic 6.4: Calorimetry builds on heat-transfer principles', sec: 'content' }
      ],
      questionIds: ['U6Q007']
    },

    {
      id: 'U6.3.2', code: 'Topic 6.3', subtopic: '6.3',
      subtopicTitle: 'Heat Transfer and Thermal Equilibrium', section: 'unit6',
      concepts: ['temperature', 'kinetic-energy'],
      statement:
        'Temperature is proportional to the average kinetic energy of particles in a substance; heat and temperature are distinct quantities.',
      content: {
        textbook: {
          explanation:
            '<p><strong>Temperature</strong> is a measure of the <em>average kinetic energy</em> of the particles in a sample. <strong>Heat</strong> is the <em>total</em> energy transferred due to a temperature difference. A large lake at 20 °C contains more total thermal energy than a small cup of water at 50 °C, even though its temperature is lower.</p>' +
            '<p>This distinction is critical in calorimetry: two samples at the same temperature can transfer very different amounts of heat depending on their mass and specific heat capacity.</p>',
          keyPoints: [
            'Temperature = average KE of particles.',
            'Heat = energy transferred between objects at different temperatures.',
            'Same temperature ≠ same amount of thermal energy.'
          ],
          formulae: [],
          workedExamples: [],
          warnings: [
            'Do not confuse temperature (intensive property) with heat (extensive, depends on amount).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Temperature measures average KE; heat is total energy transferred. They are different quantities.',
          keyPoints: ['Temperature is intensive; heat is extensive.'],
          formulae: []
        }
      },
      examTips: [
        'MCQs may test whether you know that two samples at the same temperature can have different total thermal energies.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 3: KMT and particle motion', sec: 'content' }
      ],
      questionIds: ['U6Q008']
    },

    /* ============================================================
       6.4  Heat Capacity and Calorimetry
       ============================================================ */
    {
      id: 'U6.4.1', code: 'Topic 6.4', subtopic: '6.4',
      subtopicTitle: 'Heat Capacity and Calorimetry', section: 'unit6',
      concepts: ['specific-heat', 'calorimetry'],
      statement:
        'The heat gained or lost by a substance is calculated using q = mcΔT, where m is mass, c is specific heat capacity, and ΔT is the temperature change.',
      content: {
        textbook: {
          explanation:
            '<p>The equation <strong>q = mcΔT</strong> is the fundamental calorimetry relationship:</p>' +
            '<ul>' +
            '<li><strong>q</strong> — heat (in joules, J)</li>' +
            '<li><strong>m</strong> — mass of the substance (in grams)</li>' +
            '<li><strong>c</strong> — specific heat capacity (J g<sup>−1</sup> °C<sup>−1</sup>)</li>' +
            '<li><strong>ΔT</strong> — change in temperature (T<sub>final</sub> − T<sub>initial</sub>)</li>' +
            '</ul>' +
            '<p><strong>Specific heat capacity (c)</strong> is the amount of heat required to raise 1 g of a substance by 1 °C. Water has an unusually high specific heat (4.184 J g<sup>−1</sup> °C<sup>−1</sup>) due to extensive hydrogen bonding.</p>' +
            '<p>If ΔT is positive, the substance absorbed heat (q > 0). If ΔT is negative, the substance released heat (q < 0).</p>',
          keyPoints: [
            'q = mcΔT is the core equation for calorimetry.',
            'Specific heat is an intensive property — independent of sample size.',
            'Water\'s high specific heat (4.184 J g<sup>−</sup><sup>1</sup> °C<sup>−</sup><sup>1</sup>) makes it an excellent calorimetry medium.',
            'ΔT = T_final − T_initial; sign of ΔT determines sign of q.'
          ],
          formulae: [
            '\\[ q = mc\\Delta T \\]',
            '\\[ c = \\frac{q}{m\\Delta T} \\]'
          ],
          workedExamples: [
            {
              title: 'Calculating Heat Absorbed by Water',
              body:
                '<p><strong>Problem:</strong> How much heat is required to raise the temperature of 200.0 g of water from 22.0 °C to 85.0 °C?</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>q = mcΔT = (200.0 g)(4.184 J g<sup>−1</sup> °C<sup>−1</sup>)(85.0 − 22.0 °C)</p>' +
                '<p>q = (200.0)(4.184)(63.0) = <strong>52,718 J ≈ 52.7 kJ</strong></p>'
            }
          ],
          warnings: [
            'Always check your units — AP problems may give mass in kg, requiring conversion.',
            'ΔT in °C equals ΔT in K (the degree size is the same).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'q = mcΔT. Specific heat is heat per gram per degree. Water\'s c = 4.184 J g<sup>−</sup><sup>1</sup> °C<sup>−</sup><sup>1</sup>.',
          keyPoints: ['ΔT = T_final − T_initial', 'Positive q = heat absorbed; negative q = heat released.'],
          formulae: ['\\( q = mc\\Delta T \\)']
        }
      },
      examTips: [
        'On the AP exam, c for water is provided on the reference sheet. Know how to use it instantly.',
        'When doing calorimetry calculations, always define what "system" and "surroundings" mean in the specific context.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 5: Hydrogen bonding explains water\'s high c', sec: 'content' },
        { color: 'orange', label: '→ Topic 6.5: Phase changes add q = nΔH to the calculation', sec: 'content' }
      ],
      questionIds: ['U6Q009', 'U6Q010']
    },

    {
      id: 'U6.4.2', code: 'Topic 6.4', subtopic: '6.4',
      subtopicTitle: 'Heat Capacity and Calorimetry', section: 'unit6',
      concepts: ['coffee-cup-calorimetry', 'calorimetry'],
      statement:
        'In coffee-cup calorimetry, the heat of a reaction at constant pressure is determined by measuring the temperature change of the solution and applying q<sub>rxn</sub> = −q_solution.',
      content: {
        textbook: {
          explanation:
            '<p>A <strong>coffee-cup calorimeter</strong> is a simple constant-pressure calorimeter: two nested Styrofoam cups with a lid and thermometer. Because the cups insulate well, we assume no heat is lost to the surroundings.</p>' +
            '<p>When a reaction occurs in solution, the heat released or absorbed by the reaction changes the temperature of the solution. By the conservation of energy:</p>' +
            '<p style="text-align:center;"><strong>q<sub>rxn</sub> = −q<sub>solution</sub> = −m<sub>solution</sub> c<sub>solution</sub> ΔT</strong></p>' +
            '<p>We typically assume the solution has the density and specific heat of water (1.00 g/mL and 4.184 J g<sup>−1</sup> °C<sup>−1</sup>) unless told otherwise.</p>' +
            '<p>To find ΔH per mole of reactant, divide q<sub>rxn</sub> by the number of moles of the limiting reactant.</p>',
          keyPoints: [
            'Coffee-cup = constant pressure → measures ΔH directly.',
            'q<sub>rxn</sub> = −q_solution (opposite signs).',
            'Assume density = 1.00 g/mL and c = 4.184 unless specified.',
            'ΔH_rxn = q<sub>rxn</sub> / mol of limiting reactant.'
          ],
          formulae: [
            '\\[ q_{\\text{rxn}} = -q_{\\text{solution}} = -m_{\\text{solution}} \\times c_{\\text{solution}} \\times \\Delta T \\]',
            '\\[ \\Delta H_{\\text{rxn}} = \\frac{q_{\\text{rxn}}}{n} \\]'
          ],
          workedExamples: [
            {
              title: 'Coffee-Cup Calorimetry — Neutralization',
              body:
                '<p><strong>Problem:</strong> 50.0 mL of 1.00 M HCl is mixed with 50.0 mL of 1.00 M NaOH in a coffee-cup calorimeter. The temperature rises from 22.0 °C to 28.9 °C. Calculate ΔH<sub>neutralization</sub> in kJ/mol. Assume the solution has the density and specific heat of water.</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p><strong>Step 1:</strong> Find total mass of solution.</p>' +
                '<p>m = (50.0 + 50.0) mL × 1.00 g/mL = 100.0 g</p>' +
                '<p><strong>Step 2:</strong> Calculate q<sub>solution</sub>.</p>' +
                '<p>q<sub>solution</sub> = mcΔT = (100.0 g)(4.184 J g<sup>−1</sup> °C<sup>−1</sup>)(28.9 − 22.0) = (100.0)(4.184)(6.9) = 2887 J</p>' +
                '<p><strong>Step 3:</strong> Find q<sub>rxn</sub>.</p>' +
                '<p>q<sub>rxn</sub> = −q<sub>solution</sub> = −2887 J = −2.89 kJ</p>' +
                '<p><strong>Step 4:</strong> Find moles of limiting reactant.</p>' +
                '<p>n = 0.0500 L × 1.00 mol/L = 0.0500 mol (both are limiting — 1:1)</p>' +
                '<p><strong>Step 5:</strong> Calculate ΔH per mole.</p>' +
                '<p>ΔH = −2.89 kJ / 0.0500 mol = <strong>−57.8 kJ/mol</strong></p>' +
                '<p>(The accepted value is −57.1 kJ/mol — very close!)</p>'
            }
          ],
          warnings: [
            'If the temperature rises, q_solution is positive but q<sub>rxn</sub> is NEGATIVE (exothermic reaction).',
            'Don\'t forget to add the volumes of both solutions to get the total mass.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Coffee-cup calorimetry: q<sub>rxn</sub> = −mcΔT of the solution. Divide by moles for ΔH per mole.',
          keyPoints: [
            'Constant pressure → direct ΔH measurement.',
            'Temperature rise → exothermic → q<sub>rxn</sub> < 0.'
          ],
          formulae: ['\\( q_{\\text{rxn}} = -m_{\\text{soln}} \\times c \\times \\Delta T \\)', '\\( \\Delta H = \\frac{q_{\\text{rxn}}}{n} \\)']
        }
      },
      examTips: [
        'AP FRQs almost always require you to show the sign logic: "the temperature increased, so the reaction is exothermic, q<sub>rxn</sub> < 0."',
        'Show every step; partial credit is awarded for correct setup even if arithmetic is wrong.'
      ],
      connections: [
        { color: 'orange', label: '→ Topic 6.6: Connecting measured q to ΔH_rxn', sec: 'content' },
        { color: 'teal', label: '→ Unit 4: Stoichiometry for finding moles of limiting reactant', sec: 'content' }
      ],
      questionIds: ['U6Q011', 'U6Q012']
    },

    {
      id: 'U6.4.3', code: 'Topic 6.4', subtopic: '6.4',
      subtopicTitle: 'Heat Capacity and Calorimetry', section: 'unit6',
      concepts: ['bomb-calorimetry', 'calorimetry'],
      statement:
        'Bomb calorimetry measures heat of reaction at constant volume; the heat absorbed by the calorimeter is q<sub>rxn</sub> = −C_cal × ΔT, where C_cal is the heat capacity of the calorimeter.',
      content: {
        textbook: {
          explanation:
            '<p>A <strong>bomb calorimeter</strong> is a sealed, rigid vessel (constant volume) surrounded by a known mass of water. A reaction (usually combustion) occurs inside the "bomb," and the heat released warms the water and the bomb itself.</p>' +
            '<p>Instead of using mass and specific heat, we use the <strong>calorimeter constant (C<sub>cal</sub>)</strong> — the total heat capacity of the bomb + water assembly in J/°C or kJ/°C:</p>' +
            '<p style="text-align:center;"><strong>q<sub>rxn</sub> = −C<sub>cal</sub> × ΔT</strong></p>' +
            '<p>Because this is constant volume, the measured quantity is technically the internal energy change (ΔE), not ΔH. However, for reactions involving only solids and liquids, ΔH ≈ ΔE, and the AP exam treats them as equivalent in most contexts.</p>',
          keyPoints: [
            'Bomb calorimeter = constant volume.',
            'Uses C_cal (heat capacity of the entire calorimeter) rather than m and c separately.',
            'q<sub>rxn</sub> = −C_cal × ΔT.',
            'For AP purposes, ΔH ≈ ΔE for condensed-phase reactions.'
          ],
          formulae: [
            '\\[ q_{\\text{rxn}} = -C_{\\text{cal}} \\times \\Delta T \\]'
          ],
          workedExamples: [
            {
              title: 'Bomb Calorimetry Calculation',
              body:
                '<p><strong>Problem:</strong> A 1.50 g sample of benzoic acid (C<sub>6</sub>H<sub>5</sub>COOH, M = 122.12 g/mol) is burned in a bomb calorimeter with C<sub>cal</sub> = 10.1 kJ/°C. The temperature rises from 24.00 °C to 27.20 °C. Find the molar heat of combustion.</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p><strong>Step 1:</strong> q<sub>cal</sub> = C<sub>cal</sub> × ΔT = 10.1 kJ/°C × 3.20 °C = 32.32 kJ</p>' +
                '<p><strong>Step 2:</strong> q<sub>rxn</sub> = −q<sub>cal</sub> = −32.32 kJ</p>' +
                '<p><strong>Step 3:</strong> n = 1.50 g / 122.12 g/mol = 0.01228 mol</p>' +
                '<p><strong>Step 4:</strong> ΔH<sub>comb</sub> = −32.32 kJ / 0.01228 mol = <strong>−2632 kJ/mol</strong></p>' +
                '<p>(Literature value: −3227 kJ/mol — the discrepancy in this simplified example is due to rounding and simplified C<sub>cal</sub>.)</p>'
            }
          ],
          warnings: [
            'C_cal has units of kJ/°C (not per gram!) — it already accounts for the mass of water and the bomb.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Bomb calorimetry: q<sub>rxn</sub> = −C_cal × ΔT. Constant volume, rigid vessel.',
          keyPoints: ['C_cal already includes all components of the calorimeter.'],
          formulae: ['\\( q_{\\text{rxn}} = -C_{\\text{cal}} \\times \\Delta T \\)']
        }
      },
      examTips: [
        'AP rarely asks bomb calorimetry explicitly, but you should recognize the difference: coffee-cup = constant P, bomb = constant V.'
      ],
      connections: [
        { color: 'orange', label: '→ Topic 6.4: Contrast with coffee-cup calorimetry', sec: 'content' }
      ],
      questionIds: ['U6Q013']
    },

    /* ============================================================
       6.5  Energy of Phase Changes
       ============================================================ */
    {
      id: 'U6.5.1', code: 'Topic 6.5', subtopic: '6.5',
      subtopicTitle: 'Energy of Phase Changes', section: 'unit6',
      concepts: ['phase-change', 'enthalpy-fusion', 'enthalpy-vaporization'],
      statement:
        'Phase changes occur at constant temperature and involve enthalpy changes: ΔH<sub>fus</sub> for melting/freezing and ΔH<sub>vap</sub> for boiling/condensation.',
      content: {
        textbook: {
          explanation:
            '<p>During a <strong>phase change</strong>, temperature remains constant even though heat is being added or removed. The energy goes into overcoming or establishing intermolecular forces rather than increasing kinetic energy.</p>' +
            '<ul>' +
            '<li><strong>ΔH<sub>fus</sub></strong> (enthalpy of fusion) — heat required to melt 1 mole of a solid at its melting point. Freezing releases the same magnitude: ΔH<sub>freezing</sub> = −ΔH<sub>fus</sub>.</li>' +
            '<li><strong>ΔH<sub>vap</sub></strong> (enthalpy of vaporization) — heat required to boil 1 mole of a liquid at its boiling point. Condensation releases the same: ΔH<sub>condensation</sub> = −ΔH<sub>vap</sub>.</li>' +
            '</ul>' +
            '<p>Generally, ΔH<sub>vap</sub> ≫ ΔH<sub>fus</sub> because vaporization requires breaking nearly all intermolecular forces, whereas melting only partially disrupts them.</p>' +
            '<p>The heat for a phase change is calculated as: <strong>q = n × ΔH</strong> (where n is moles) or <strong>q = m × ΔH</strong> (if ΔH is given per gram).</p>',
          keyPoints: [
            'Temperature is constant during a phase change — energy overcomes IMFs.',
            'ΔH<sub>vap</sub> > ΔH<sub>fus</sub> for the same substance.',
            'q = n × ΔH<sub>fus</sub> (or ΔH<sub>vap</sub>) for the phase-change portion.',
            'Melting and vaporization are endothermic; freezing and condensation are exothermic.'
          ],
          formulae: [
            '\\[ q_{\\text{phase}} = n \\times \\Delta H_{\\text{fus}} \\quad \\text{or} \\quad n \\times \\Delta H_{\\text{vap}} \\]',
            '\\[ q_{\\text{phase}} = m \\times \\Delta H_{\\text{fus}} \\quad (\\text{if } \\Delta H \\text{ given in J/g}) \\]'
          ],
          workedExamples: [],
          warnings: [
            'During a phase change, do NOT use q = mcΔT — there is no temperature change!'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Phase changes happen at constant T. Use q = nΔH (not q = mcΔT). ΔH<sub>vap</sub> > ΔH<sub>fus</sub>.',
          keyPoints: [
            'Melting/boiling = endothermic; freezing/condensation = exothermic.',
            'Stronger IMFs → larger ΔH<sub>fus</sub> and ΔH<sub>vap</sub>.'
          ],
          formulae: ['\\( q = n\\Delta H_{\\text{fus}} \\)', '\\( q = n\\Delta H_{\\text{vap}} \\)']
        }
      },
      examTips: [
        'A common AP mistake: using q = mcΔT during a phase change. The temperature does NOT change during a phase transition.',
        'Connect ΔH<sub>vap</sub> magnitude to IMF strength (Unit 5 material).'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 5: IMFs determine ΔH<sub>fus</sub> and ΔH<sub>vap</sub> magnitudes', sec: 'content' },
        { color: 'orange', label: '→ Topic 6.4: q = mcΔT applies only between phase changes', sec: 'content' }
      ],
      questionIds: ['U6Q014']
    },

    {
      id: 'U6.5.2', code: 'Topic 6.5', subtopic: '6.5',
      subtopicTitle: 'Energy of Phase Changes', section: 'unit6',
      concepts: ['heating-curve', 'phase-change'],
      statement:
        'A heating curve shows temperature vs. heat added and consists of sloped regions (temperature changes within a phase) and flat regions (phase changes at constant temperature).',
      content: {
        textbook: {
          explanation:
            '<p>A <strong>heating curve</strong> plots temperature (y-axis) against heat added (x-axis) for a substance going from solid to gas. It has five distinct segments:</p>' +
            '<ol>' +
            '<li><strong>Solid heating</strong> (slope) — q = m × c<sub>solid</sub> × ΔT</li>' +
            '<li><strong>Melting</strong> (flat) — q = n × ΔH<sub>fus</sub> at T<sub>mp</sub></li>' +
            '<li><strong>Liquid heating</strong> (slope) — q = m × c<sub>liquid</sub> × ΔT</li>' +
            '<li><strong>Boiling</strong> (flat) — q = n × ΔH<sub>vap</sub> at T<sub>bp</sub></li>' +
            '<li><strong>Gas heating</strong> (slope) — q = m × c<sub>gas</sub> × ΔT</li>' +
            '</ol>' +
            '<p>To find the total heat, <strong>add up each segment</strong>. The flat segments are typically the most energy-intensive, especially vaporization.</p>',
          keyPoints: [
            'Sloped segments: q = mcΔT (different c for each phase).',
            'Flat segments: q = nΔH (fusion or vaporization).',
            'Total q = sum of all segments.',
            'The boiling plateau is usually the widest (most energy).'
          ],
          formulae: [
            '\\[ q_{\\text{total}} = q_{\\text{solid}} + q_{\\text{fus}} + q_{\\text{liquid}} + q_{\\text{vap}} + q_{\\text{gas}} \\]'
          ],
          workedExamples: [
            {
              title: 'Heating Curve Calculation — Ice to Steam',
              body:
                '<p><strong>Problem:</strong> Calculate the total energy needed to convert 36.0 g of ice at −10.0 °C to steam at 120.0 °C.</p>' +
                '<p>Data: c<sub>ice</sub> = 2.09 J g<sup>−1</sup> °C<sup>−1</sup>, ΔH<sub>fus</sub> = 6.01 kJ/mol, c<sub>water</sub> = 4.184 J g<sup>−1</sup> °C<sup>−1</sup>, ΔH<sub>vap</sub> = 40.67 kJ/mol, c<sub>steam</sub> = 2.01 J g<sup>−1</sup> °C<sup>−1</sup>, M(H<sub>2</sub>O) = 18.02 g/mol</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>n = 36.0 / 18.02 = 2.00 mol</p>' +
                '<p><strong>Step 1 — Heat ice from −10.0 °C to 0 °C:</strong></p>' +
                '<p>q<sub>1</sub> = (36.0)(2.09)(10.0) = 752 J = 0.752 kJ</p>' +
                '<p><strong>Step 2 — Melt ice at 0 °C:</strong></p>' +
                '<p>q<sub>2</sub> = (2.00 mol)(6.01 kJ/mol) = 12.02 kJ</p>' +
                '<p><strong>Step 3 — Heat water from 0 °C to 100 °C:</strong></p>' +
                '<p>q<sub>3</sub> = (36.0)(4.184)(100.0) = 15,062 J = 15.06 kJ</p>' +
                '<p><strong>Step 4 — Boil water at 100 °C:</strong></p>' +
                '<p>q<sub>4</sub> = (2.00 mol)(40.67 kJ/mol) = 81.34 kJ</p>' +
                '<p><strong>Step 5 — Heat steam from 100 °C to 120 °C:</strong></p>' +
                '<p>q<sub>5</sub> = (36.0)(2.01)(20.0) = 1447 J = 1.45 kJ</p>' +
                '<p><strong>Total:</strong> q = 0.75 + 12.02 + 15.06 + 81.34 + 1.45 = <strong>110.6 kJ</strong></p>' +
                '<p>Note how vaporization (81.34 kJ) dominates — consistent with ΔH<sub>vap</sub> ≫ ΔH<sub>fus</sub>.</p>'
            }
          ],
          warnings: [
            'Each segment uses a different formula: do NOT apply q = mcΔT during a phase change, and do NOT apply q = nΔH during a temperature change.',
            'Make sure to use the correct specific heat for each phase (ice ≠ water ≠ steam).'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Heating curves: sloped = q = mcΔT; flat = q = nΔH. Add all segments for total q.',
          keyPoints: [
            'Five segments: solid heating, melting, liquid heating, boiling, gas heating.',
            'Vaporization is the most energy-intensive step.'
          ],
          formulae: ['\\( q_{\\text{total}} = \\sum(\\text{all segments}) \\)']
        }
      },
      examTips: [
        'The AP FRQ often gives a heating curve and asks you to calculate the total energy for a specific range. Identify which segments are involved and use the correct formula for each.',
        'If a question says "starting at −15 °C and ending at 100 °C," you need three segments (heat ice, melt ice, heat water) — NOT vaporization.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 5: Phase diagrams and IMF strengths', sec: 'content' },
        { color: 'orange', label: '→ Topic 6.4: q = mcΔT for sloped segments', sec: 'content' }
      ],
      questionIds: ['U6Q015', 'U6Q016']
    },

    /* ============================================================
       6.6  Introduction to Enthalpy of Reaction
       ============================================================ */
    {
      id: 'U6.6.1', code: 'Topic 6.6', subtopic: '6.6',
      subtopicTitle: 'Introduction to Enthalpy of Reaction', section: 'unit6',
      concepts: ['enthalpy', 'state-function'],
      statement:
        'Enthalpy (H) is a state function; ΔH_rxn depends only on the initial and final states, not on the pathway taken.',
      content: {
        textbook: {
          explanation:
            '<p><strong>Enthalpy (H)</strong> is defined as H = E + PV, where E is internal energy, P is pressure, and V is volume. At constant pressure (most lab conditions), the change in enthalpy equals the heat flow: <strong>ΔH = q<sub>p</sub></strong>.</p>' +
            '<p>Because H is a <strong>state function</strong>, ΔH depends only on the difference between the final state (products) and the initial state (reactants), regardless of the pathway. This is the thermodynamic foundation for Hess\'s law (Topic 6.9).</p>' +
            '<p>The enthalpy change for a reaction is written as <strong>ΔH<sub>rxn</sub></strong> and corresponds to the balanced equation <em>as written</em>. If you double the equation, you double ΔH. If you reverse the equation, you flip the sign of ΔH.</p>',
          keyPoints: [
            'ΔH = q_p (heat at constant pressure).',
            'Enthalpy is a state function: path-independent.',
            'ΔH_rxn is for the equation as written (stoichiometric amounts).',
            'Reverse reaction → flip sign of ΔH.'
          ],
          formulae: [
            '\\[ \\Delta H = q_p \\]',
            '\\[ \\Delta H_{\\text{reverse}} = -\\Delta H_{\\text{forward}} \\]'
          ],
          workedExamples: [],
          warnings: [],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Enthalpy is a state function. ΔH = q at constant pressure. Reverse the reaction → change sign of ΔH.',
          keyPoints: [
            'Double the coefficients → double ΔH.',
            'State function ↔ path-independent ↔ Hess\'s law works.'
          ],
          formulae: ['\\( \\Delta H = q_p \\)']
        }
      },
      examTips: [
        'The AP exam may ask: "Which of the following is a state function?" — Enthalpy, entropy, and Gibbs free energy are all state functions; heat and work are NOT.'
      ],
      connections: [
        { color: 'purple', label: '→ Unit 9: Entropy (S) and Gibbs energy (G) are also state functions', sec: 'content' },
        { color: 'orange', label: '→ Topic 6.9: Hess\'s law exploits the state-function nature of H', sec: 'content' }
      ],
      questionIds: ['U6Q017']
    },

    {
      id: 'U6.6.2', code: 'Topic 6.6', subtopic: '6.6',
      subtopicTitle: 'Introduction to Enthalpy of Reaction', section: 'unit6',
      concepts: ['enthalpy', 'extensive-property'],
      statement:
        'ΔH_rxn is an extensive property — it is proportional to the amount of reactant consumed or product formed.',
      content: {
        textbook: {
          explanation:
            '<p>Because ΔH<sub>rxn</sub> is an <strong>extensive property</strong>, it scales with the amount of substance. If the balanced equation shows 2 mol of reactant and ΔH = −200 kJ, then reacting 4 mol would release 400 kJ.</p>' +
            '<p>This means you must always pay attention to the coefficients in the balanced equation. ΔH is reported <em>per mole of reaction as written</em> — not per mole of a single reactant unless specified.</p>',
          keyPoints: [
            'Extensive property: depends on amount.',
            'ΔH is per mole of reaction as written.',
            'Multiply coefficients by n → multiply ΔH by n.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Scaling ΔH with Moles',
              body:
                '<p><strong>Problem:</strong> The combustion of methane is: CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l), ΔH = −890 kJ. How much heat is released when 8.0 g of CH<sub>4</sub> burns?</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>M(CH<sub>4</sub>) = 16.04 g/mol</p>' +
                '<p>n = 8.0 / 16.04 = 0.499 mol</p>' +
                '<p>q = 0.499 mol × (−890 kJ/mol) = <strong>−444 kJ</strong></p>'
            }
          ],
          warnings: [],
          diagrams: []
        },
        studyGuide: {
          essentials: 'ΔH scales with moles — it is extensive. Always match to the balanced equation.',
          keyPoints: ['More reactant → more heat released or absorbed.'],
          formulae: []
        }
      },
      examTips: [
        'In FRQs, the balanced equation is your conversion factor: ΔH / coefficients.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 4: Stoichiometry used to scale ΔH', sec: 'content' }
      ],
      questionIds: ['U6Q018']
    },

    {
      id: 'U6.6.3', code: 'Topic 6.6', subtopic: '6.6',
      subtopicTitle: 'Introduction to Enthalpy of Reaction', section: 'unit6',
      concepts: ['thermochemical-equation'],
      statement:
        'A thermochemical equation includes the balanced equation, physical states of all species, and the ΔH value for the reaction as written.',
      content: {
        textbook: {
          explanation:
            '<p>A <strong>thermochemical equation</strong> is a balanced chemical equation that includes:</p>' +
            '<ol>' +
            '<li>The balanced formula with <strong>coefficients</strong> (which can be fractional).</li>' +
            '<li>The <strong>physical states</strong> of all species: (s), (l), (g), or (aq).</li>' +
            '<li>The <strong>ΔH value</strong> for the reaction as written.</li>' +
            '</ol>' +
            '<p>Physical states matter because the enthalpy of a substance depends on its phase. For example, H<sub>2</sub>O(l) and H<sub>2</sub>O(g) differ by ΔH<sub>vap</sub> = 44 kJ/mol.</p>',
          keyPoints: [
            'Physical states MUST be included — they affect ΔH.',
            'Coefficients can be fractional in thermochemical equations.',
            'ΔH is stated alongside the equation.'
          ],
          formulae: [],
          workedExamples: [],
          warnings: [
            'Forgetting physical states is a common FRQ deduction on the AP exam.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'Thermochemical equations include balanced formulas, states of matter, and ΔH.',
          keyPoints: ['H<sub>2</sub>O(l) vs H<sub>2</sub>O(g) differ by ~44 kJ/mol.'],
          formulae: []
        }
      },
      examTips: [
        'Always write states of matter in thermochemical equations on the AP exam — points are deducted for omitting them.'
      ],
      connections: [
        { color: 'orange', label: '→ Topic 6.9: Hess\'s law manipulates thermochemical equations', sec: 'content' }
      ],
      questionIds: ['U6Q019']
    },

    /* ============================================================
       6.7  Bond Enthalpies
       ============================================================ */
    {
      id: 'U6.7.1', code: 'Topic 6.7', subtopic: '6.7',
      subtopicTitle: 'Bond Enthalpies', section: 'unit6',
      concepts: ['bond-enthalpy'],
      statement:
        'The enthalpy change of a reaction can be estimated using average bond enthalpies: ΔH_rxn ≈ Σ(bonds broken) − Σ(bonds formed).',
      content: {
        textbook: {
          explanation:
            '<p>A <strong>bond enthalpy</strong> (bond energy) is the average energy required to break one mole of a particular type of bond in the gas phase. Because bond enthalpies are <em>averages</em> over many different molecules, calculations using them give <em>estimates</em>, not exact values.</p>' +
            '<p>To estimate ΔH<sub>rxn</sub>:</p>' +
            '<p style="text-align:center;"><strong>ΔH<sub>rxn</sub> ≈ Σ D(bonds broken) − Σ D(bonds formed)</strong></p>' +
            '<p>where D represents the bond dissociation enthalpy.</p>' +
            '<p><strong>Logic:</strong> Breaking bonds costs energy (positive), forming bonds releases energy (negative). The net is their difference.</p>',
          keyPoints: [
            'Bond enthalpies are always positive (energy to break a bond).',
            'ΔH ≈ Σ(broken) − Σ(formed).',
            'Positive result → endothermic; negative → exothermic.',
            'Works best for gas-phase reactions.'
          ],
          formulae: [
            '\\[ \\Delta H_{\\text{rxn}} \\approx \\sum D(\\text{bonds broken}) - \\sum D(\\text{bonds formed}) \\]'
          ],
          workedExamples: [
            {
              title: 'Estimating ΔH from Bond Enthalpies',
              body:
                '<p><strong>Problem:</strong> Estimate ΔH for: H<sub>2</sub>(g) + Cl<sub>2</sub>(g) → 2 HCl(g)</p>' +
                '<p>Bond enthalpies: D(H−H) = 436 kJ/mol, D(Cl−Cl) = 242 kJ/mol, D(H−Cl) = 431 kJ/mol</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>Bonds broken: 1 × H−H + 1 × Cl−Cl = 436 + 242 = 678 kJ</p>' +
                '<p>Bonds formed: 2 × H−Cl = 2 × 431 = 862 kJ</p>' +
                '<p>ΔH ≈ 678 − 862 = <strong>−184 kJ</strong> (exothermic)</p>'
            }
          ],
          warnings: [
            'Count bonds carefully — a double bond is ONE bond (e.g., O=O is one bond, not two separate O−O bonds). Use the bond enthalpy for O=O, not 2 × O−O.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'ΔH ≈ Σ(bonds broken) − Σ(bonds formed). Positive bond enthalpies; net sign tells endo/exo.',
          keyPoints: ['Use average bond enthalpies from a table — they are estimates.'],
          formulae: ['\\( \\Delta H \\approx \\sum D(\\text{broken}) - \\sum D(\\text{formed}) \\)']
        }
      },
      examTips: [
        'AP MCQs give a table of bond enthalpies and ask you to estimate ΔH. Count every bond in each molecule carefully.',
        'Draw Lewis structures if needed to identify all bonds.'
      ],
      connections: [
        { color: 'teal', label: '→ Unit 3: Lewis structures needed to count bonds', sec: 'content' },
        { color: 'orange', label: '→ Topic 6.8: Enthalpy of formation gives more accurate ΔH', sec: 'content' }
      ],
      questionIds: ['U6Q020', 'U6Q021']
    },

    {
      id: 'U6.7.2', code: 'Topic 6.7', subtopic: '6.7',
      subtopicTitle: 'Bond Enthalpies', section: 'unit6',
      concepts: ['bond-enthalpy', 'limitations'],
      statement:
        'Average bond enthalpies have limitations: they apply strictly to gas-phase reactions and give only approximate ΔH values because actual bond energies vary with molecular context.',
      content: {
        textbook: {
          explanation:
            '<p>Bond enthalpy values listed in tables are <strong>averages</strong> measured across many different molecules. For example, the C−H bond enthalpy of 413 kJ/mol is an average — the actual C−H bond energy in CH<sub>4</sub> differs slightly from that in C<sub>2</sub>H<sub>6</sub> or CHCl<sub>3</sub> because neighboring atoms influence bond strength.</p>' +
            '<p><strong>Key limitations:</strong></p>' +
            '<ul>' +
            '<li><strong>Gas phase only:</strong> Bond enthalpies are defined for gas-phase species. If reactants or products are liquids or solids, the estimate ignores intermolecular forces (condensation/vaporization energies).</li>' +
            '<li><strong>Average values:</strong> Real bond energies depend on molecular environment, so calculated ΔH values can deviate significantly from experimental values.</li>' +
            '<li><strong>Not useful for ionic compounds:</strong> Bond enthalpies apply to covalent bonds; lattice energy is needed for ionic solids.</li>' +
            '</ul>' +
            '<p>For more accurate results, use enthalpies of formation (Topic 6.8) or Hess\'s law (Topic 6.9).</p>',
          keyPoints: [
            'Bond enthalpies are averages — context-dependent in reality.',
            'Applicable only to gas-phase reactions.',
            'Not suitable for ionic compounds.',
            'Enthalpies of formation give more precise ΔH values.'
          ],
          formulae: [],
          workedExamples: [],
          warnings: [
            'If a problem involves liquids or solids, bond enthalpy calculations will be inaccurate — state this limitation if asked on a FRQ.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Bond enthalpies are averages, gas-phase only, and give approximate ΔH. Use ΔH°f for better accuracy.',
          keyPoints: [
            'Real bond energies vary by molecular context.',
            'Cannot account for IMFs in condensed phases.'
          ],
          formulae: []
        }
      },
      examTips: [
        'If an FRQ asks you to explain why a bond-enthalpy calculation doesn\'t match the experimental value, cite the "average" nature and the gas-phase assumption.'
      ],
      connections: [
        { color: 'orange', label: '→ Topic 6.8: ΔH°f provides more accurate alternative', sec: 'content' },
        { color: 'teal', label: '→ Unit 3: Molecular environment affects bond strengths', sec: 'content' }
      ],
      questionIds: ['U6Q022']
    },

    /* ============================================================
       6.8  Enthalpy of Formation
       ============================================================ */
    {
      id: 'U6.8.1', code: 'Topic 6.8', subtopic: '6.8',
      subtopicTitle: 'Enthalpy of Formation', section: 'unit6',
      concepts: ['enthalpy-of-formation', 'standard-state'],
      statement:
        'The standard enthalpy of formation (ΔH°f) is the enthalpy change when one mole of a compound is formed from its constituent elements in their standard states.',
      content: {
        textbook: {
          explanation:
            '<p>The <strong>standard enthalpy of formation (ΔH°<sub>f</sub>)</strong> is defined as the enthalpy change when <strong>one mole</strong> of a compound is formed from its <strong>elements in their standard states</strong> at 25 °C and 1 atm (or 1 bar).</p>' +
            '<p><strong>Standard state</strong> of an element is its most stable form under standard conditions:</p>' +
            '<ul>' +
            '<li>O<sub>2</sub>(g), N<sub>2</sub>(g), H<sub>2</sub>(g), Cl<sub>2</sub>(g) — diatomic gases</li>' +
            '<li>C(s, graphite) — not diamond</li>' +
            '<li>Fe(s), Na(s), etc.</li>' +
            '</ul>' +
            '<p>By definition, <strong>ΔH°<sub>f</sub> = 0</strong> for any element in its standard state.</p>' +
            '<p>Example formation reaction: C(s, graphite) + O<sub>2</sub>(g) → CO<sub>2</sub>(g), ΔH°<sub>f</sub> = −393.5 kJ/mol</p>',
          keyPoints: [
            'ΔH°f is per ONE mole of the compound formed.',
            'Elements are in their standard states (most stable form at 25 °C, 1 atm).',
            'ΔH°f = 0 for elements in standard state.',
            'The ° symbol means standard conditions.'
          ],
          formulae: [],
          workedExamples: [],
          warnings: [
            'C(s, graphite) — not diamond — is the standard state of carbon.',
            'O<sub>2</sub>(g), not O(g) or O<sub>3</sub>(g), is the standard state of oxygen.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'ΔH°f = enthalpy to form 1 mol compound from elements in standard states. ΔH°f of elements in standard state = 0.',
          keyPoints: [
            'Standard state = most stable form at 25 °C, 1 atm.',
            'Formation reactions always have elements as reactants and one compound as the product.'
          ],
          formulae: []
        }
      },
      examTips: [
        'The AP exam provides ΔH°f values in a table. Know that elements have ΔH°f = 0.',
        'A common trick question: "What is ΔH°f for O<sub>2</sub>(g)?" Answer: 0 kJ/mol.'
      ],
      connections: [
        { color: 'orange', label: '→ Topic 6.8 (next): Using ΔH°f to calculate ΔH°rxn', sec: 'content' }
      ],
      questionIds: ['U6Q023']
    },

    {
      id: 'U6.8.2', code: 'Topic 6.8', subtopic: '6.8',
      subtopicTitle: 'Enthalpy of Formation', section: 'unit6',
      concepts: ['enthalpy-of-formation', 'enthalpy-of-reaction'],
      statement:
        'The standard enthalpy of reaction can be calculated from standard enthalpies of formation: ΔH°rxn = Σ nΔH°f(products) − Σ nΔH°f(reactants).',
      content: {
        textbook: {
          explanation:
            '<p>Using Hess\'s law (since enthalpy is a state function), we can calculate ΔH°<sub>rxn</sub> from tabulated ΔH°<sub>f</sub> values:</p>' +
            '<p style="text-align:center;"><strong>ΔH°<sub>rxn</sub> = Σ n ΔH°<sub>f</sub>(products) − Σ n ΔH°<sub>f</sub>(reactants)</strong></p>' +
            '<p>where n represents the stoichiometric coefficients in the balanced equation.</p>' +
            '<p>This equation works because you can imagine decomposing reactants into elements (−ΔH°<sub>f</sub> for each) and then forming products from those elements (+ΔH°<sub>f</sub> for each). The net effect is the reaction of interest.</p>',
          keyPoints: [
            'ΔH°rxn = Σ nΔH°f(products) − Σ nΔH°f(reactants)',
            'Multiply each ΔH°f by its coefficient in the balanced equation.',
            'Elements in standard state contribute 0 to the sum.',
            'This method gives exact values (unlike bond enthalpies).'
          ],
          formulae: [
            '\\[ \\Delta H^{\\circ}_{\\text{rxn}} = \\sum n\\,\\Delta H^{\\circ}_f(\\text{products}) - \\sum n\\,\\Delta H^{\\circ}_f(\\text{reactants}) \\]'
          ],
          workedExamples: [
            {
              title: 'Calculating ΔH°rxn from ΔH°f — Combustion of Ethanol',
              body:
                '<p><strong>Problem:</strong> Calculate ΔH° for the combustion of ethanol:</p>' +
                '<p>C<sub>2</sub>H<sub>5</sub>OH(l) + 3O<sub>2</sub>(g) → 2CO<sub>2</sub>(g) + 3H<sub>2</sub>O(l)</p>' +
                '<p>ΔH°<sub>f</sub> values: C<sub>2</sub>H<sub>5</sub>OH(l) = −277.7, CO<sub>2</sub>(g) = −393.5, H<sub>2</sub>O(l) = −285.8 kJ/mol; O<sub>2</sub>(g) = 0</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>ΔH° = [2(−393.5) + 3(−285.8)] − [1(−277.7) + 3(0)]</p>' +
                '<p>= [−787.0 + (−857.4)] − [−277.7]</p>' +
                '<p>= −1644.4 − (−277.7)</p>' +
                '<p>= −1644.4 + 277.7 = <strong>−1366.7 kJ</strong></p>'
            },
            {
              title: 'Calculating ΔH°rxn — Synthesis of Ammonia',
              body:
                '<p><strong>Problem:</strong> Calculate ΔH° for: N<sub>2</sub>(g) + 3H<sub>2</sub>(g) → 2NH<sub>3</sub>(g)</p>' +
                '<p>ΔH°<sub>f</sub>[NH<sub>3</sub>(g)] = −45.9 kJ/mol; N<sub>2</sub> and H<sub>2</sub> are elements in standard state.</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>ΔH° = [2(−45.9)] − [0 + 0] = <strong>−91.8 kJ</strong></p>' +
                '<p>When all reactants are elements, ΔH°<sub>rxn</sub> is simply the sum of the products\' ΔH°<sub>f</sub> values (times their coefficients).</p>'
            }
          ],
          warnings: [
            'Don\'t forget to multiply ΔH°f by the stoichiometric coefficient!',
            'Pay careful attention to physical states: ΔH°f[H<sub>2</sub>O(l)] ≠ ΔH°f[H<sub>2</sub>O(g)].'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'ΔH°rxn = Σ nΔH°f(products) − Σ nΔH°f(reactants). Elements = 0. Multiply by coefficients.',
          keyPoints: [
            'Products minus reactants (not the other way around).',
            'This is the most common AP calculation method for ΔH.'
          ],
          formulae: ['\\( \\Delta H^{\\circ}_{\\text{rxn}} = \\sum n\\,\\Delta H^{\\circ}_f(\\text{products}) - \\sum n\\,\\Delta H^{\\circ}_f(\\text{reactants}) \\)']
        }
      },
      examTips: [
        'This formula appears on nearly every AP exam. Practice it until it is automatic.',
        'Watch for state-of-matter traps: H<sub>2</sub>O(l) vs H<sub>2</sub>O(g) can change your answer by ~44 kJ per mole.'
      ],
      connections: [
        { color: 'orange', label: '→ Topic 6.9: Hess\'s law is the theoretical basis for this equation', sec: 'content' },
        { color: 'purple', label: '→ Unit 9: ΔG°rxn can be calculated similarly using ΔG°f', sec: 'content' }
      ],
      questionIds: ['U6Q024', 'U6Q025']
    },

    {
      id: 'U6.8.3', code: 'Topic 6.8', subtopic: '6.8',
      subtopicTitle: 'Enthalpy of Formation', section: 'unit6',
      concepts: ['enthalpy-of-formation'],
      statement:
        'Standard enthalpies of formation can be used to compare the relative stability of compounds; more negative ΔH°f values indicate greater thermodynamic stability relative to the elements.',
      content: {
        textbook: {
          explanation:
            '<p>A compound with a <strong>very negative ΔH°<sub>f</sub></strong> is more <em>thermodynamically stable</em> relative to its constituent elements, because a large amount of energy was released when it formed. Conversely, compounds with positive ΔH°<sub>f</sub> are <em>less stable</em> than their elements and require energy input to form.</p>' +
            '<p>For example, CO<sub>2</sub>(g) has ΔH°<sub>f</sub> = −393.5 kJ/mol (very stable), while NO<sub>2</sub>(g) has ΔH°<sub>f</sub> = +33.2 kJ/mol (less stable than N<sub>2</sub> and O<sub>2</sub>).</p>',
          keyPoints: [
            'More negative ΔH°f → greater stability relative to elements.',
            'Positive ΔH°f → the compound is energetically "uphill" from its elements.',
            'Stability here is thermodynamic, not kinetic.'
          ],
          formulae: [],
          workedExamples: [],
          warnings: [
            'Thermodynamic stability (ΔH°f) does not tell you about reaction rate or kinetic stability.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials: 'More negative ΔH°f = more stable compound. Positive ΔH°f = less stable than elements.',
          keyPoints: ['This is thermodynamic stability only — kinetics is a separate question.'],
          formulae: []
        }
      },
      examTips: [
        'If asked to rank compound stability, use ΔH°f values: the more negative, the more stable.'
      ],
      connections: [
        { color: 'purple', label: '→ Unit 9: ΔG°f provides a more complete stability picture (includes entropy)', sec: 'content' }
      ],
      questionIds: ['U6Q026']
    },

    /* ============================================================
       6.9  Hess's Law
       ============================================================ */
    {
      id: 'U6.9.1', code: 'Topic 6.9', subtopic: '6.9',
      subtopicTitle: 'Hess\'s Law', section: 'unit6',
      concepts: ['hess-law', 'state-function'],
      statement:
        'Hess\'s law states that the total enthalpy change for a reaction is the same regardless of whether it occurs in one step or multiple steps.',
      content: {
        textbook: {
          explanation:
            '<p><strong>Hess\'s law</strong> is a direct consequence of enthalpy being a state function. It states: if a reaction can be expressed as the sum of two or more other reactions, then ΔH for the overall reaction equals the sum of the ΔH values for those steps.</p>' +
            '<p>This is extraordinarily useful because many reactions cannot be carried out directly in a calorimeter. Instead, we can measure ΔH for component reactions and combine them.</p>' +
            '<p><strong>Rules for manipulating thermochemical equations:</strong></p>' +
            '<ol>' +
            '<li>If a reaction is <strong>reversed</strong>, the sign of ΔH is reversed.</li>' +
            '<li>If a reaction is <strong>multiplied by a factor n</strong>, ΔH is also multiplied by n.</li>' +
            '<li>Equations can be <strong>added</strong> — cancel species that appear on both sides.</li>' +
            '</ol>',
          keyPoints: [
            'ΔH_overall = ΔH_1 + ΔH_2 + ... (for sequential steps).',
            'Reverse a reaction → flip sign of ΔH.',
            'Multiply coefficients by n → multiply ΔH by n.',
            'Cancel intermediates that appear on both sides.'
          ],
          formulae: [
            '\\[ \\Delta H_{\\text{overall}} = \\sum \\Delta H_i \\]'
          ],
          workedExamples: [],
          warnings: [
            'When adding equations, make sure all intermediates cancel properly.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Hess\'s law: ΔH is path-independent. Sum step enthalpies to get the overall ΔH. Reverse = flip sign; multiply = scale ΔH.',
          keyPoints: [
            'Intermediates cancel when equations are added.',
            'This is why enthalpy of formation calculations work.'
          ],
          formulae: ['\\( \\Delta H_{\\text{total}} = \\sum \\Delta H_{\\text{steps}} \\)']
        }
      },
      examTips: [
        'Hess\'s law problems are among the most common AP FRQ questions. Practice the technique of manipulating and adding equations.'
      ],
      connections: [
        { color: 'orange', label: '→ Topic 6.6: State-function nature of H enables Hess\'s law', sec: 'content' },
        { color: 'purple', label: '→ Unit 9: Hess\'s law also applies to ΔS and ΔG', sec: 'content' }
      ],
      questionIds: ['U6Q027']
    },

    {
      id: 'U6.9.2', code: 'Topic 6.9', subtopic: '6.9',
      subtopicTitle: 'Hess\'s Law', section: 'unit6',
      concepts: ['hess-law'],
      statement:
        'Hess\'s law calculations require strategically reversing, scaling, and adding given thermochemical equations so that intermediates cancel and the target equation remains.',
      content: {
        textbook: {
          explanation:
            '<p>The strategy for Hess\'s law problems:</p>' +
            '<ol>' +
            '<li><strong>Write the target equation.</strong></li>' +
            '<li>For each given equation, decide whether to <strong>use it as-is, reverse it, or multiply it</strong> so that the desired reactants/products appear on the correct side and intermediates cancel.</li>' +
            '<li><strong>Add the manipulated equations</strong> and verify that the target equation results.</li>' +
            '<li><strong>Add the adjusted ΔH values</strong> to get ΔH<sub>target</sub>.</li>' +
            '</ol>',
          keyPoints: [
            'Start by identifying species in the target that appear in the given equations.',
            'Flip equations to move species to the correct side.',
            'Scale equations to get the right stoichiometric coefficients.',
            'Intermediates must cancel completely.'
          ],
          formulae: [],
          workedExamples: [
            {
              title: 'Hess\'s Law — Two-Step Calculation',
              body:
                '<p><strong>Problem:</strong> Find ΔH for: C(s) + ½O<sub>2</sub>(g) → CO(g)</p>' +
                '<p>Given:</p>' +
                '<p>(1) C(s) + O<sub>2</sub>(g) → CO<sub>2</sub>(g), ΔH<sub>1</sub> = −393.5 kJ</p>' +
                '<p>(2) CO(g) + ½O<sub>2</sub>(g) → CO<sub>2</sub>(g), ΔH<sub>2</sub> = −283.0 kJ</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>We need CO as a product, but in equation (2) CO is a reactant. Reverse equation (2):</p>' +
                '<p>(2\') CO<sub>2</sub>(g) → CO(g) + ½O<sub>2</sub>(g), ΔH<sub>2\'</sub> = +283.0 kJ</p>' +
                '<p>Now add (1) + (2\'):</p>' +
                '<p>C(s) + O<sub>2</sub>(g) + CO<sub>2</sub>(g) → CO<sub>2</sub>(g) + CO(g) + ½O<sub>2</sub>(g)</p>' +
                '<p>Cancel CO<sub>2</sub> and simplify O<sub>2</sub>:</p>' +
                '<p>C(s) + ½O<sub>2</sub>(g) → CO(g)</p>' +
                '<p>ΔH = −393.5 + 283.0 = <strong>−110.5 kJ</strong></p>'
            },
            {
              title: 'Hess\'s Law — Three-Step Calculation',
              body:
                '<p><strong>Problem:</strong> Find ΔH for: 2C(s) + H<sub>2</sub>(g) → C<sub>2</sub>H<sub>2</sub>(g)</p>' +
                '<p>Given:</p>' +
                '<p>(1) C<sub>2</sub>H<sub>2</sub>(g) + 5/2 O<sub>2</sub>(g) → 2CO<sub>2</sub>(g) + H<sub>2</sub>O(l), ΔH<sub>1</sub> = −1299.6 kJ</p>' +
                '<p>(2) C(s) + O<sub>2</sub>(g) → CO<sub>2</sub>(g), ΔH<sub>2</sub> = −393.5 kJ</p>' +
                '<p>(3) H<sub>2</sub>(g) + ½O<sub>2</sub>(g) → H<sub>2</sub>O(l), ΔH<sub>3</sub> = −285.8 kJ</p>' +
                '<p><strong>Solution:</strong></p>' +
                '<p>Target has C<sub>2</sub>H<sub>2</sub> as a product, but in (1) it is a reactant. Reverse (1):</p>' +
                '<p>(1\') 2CO<sub>2</sub>(g) + H<sub>2</sub>O(l) → C<sub>2</sub>H<sub>2</sub>(g) + 5/2 O<sub>2</sub>(g), ΔH = +1299.6 kJ</p>' +
                '<p>Need 2C(s) as reactant, so multiply (2) by 2:</p>' +
                '<p>(2\') 2C(s) + 2O<sub>2</sub>(g) → 2CO<sub>2</sub>(g), ΔH = 2(−393.5) = −787.0 kJ</p>' +
                '<p>Keep (3) as-is:</p>' +
                '<p>(3) H<sub>2</sub>(g) + ½O<sub>2</sub>(g) → H<sub>2</sub>O(l), ΔH = −285.8 kJ</p>' +
                '<p>Add (1\') + (2\') + (3):</p>' +
                '<p>2CO<sub>2</sub> and H<sub>2</sub>O cancel; O<sub>2</sub> cancels (2 + ½ − 5/2 = 0).</p>' +
                '<p>Result: 2C(s) + H<sub>2</sub>(g) → C<sub>2</sub>H<sub>2</sub>(g)</p>' +
                '<p>ΔH = +1299.6 + (−787.0) + (−285.8) = <strong>+226.8 kJ</strong></p>'
            }
          ],
          warnings: [
            'Always verify that your added equations give the target — it\'s easy to make sign or coefficient errors.'
          ],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Strategy: write target, manipulate given equations (reverse/scale), add them so intermediates cancel, sum ΔH values.',
          keyPoints: [
            'Reverse → flip sign; multiply by n → multiply ΔH by n.',
            'Check that all intermediates cancel after adding.'
          ],
          formulae: []
        }
      },
      examTips: [
        'On the AP FRQ, show each manipulation step clearly — write out the reversed/scaled equation AND the adjusted ΔH for full credit.',
        'Start by locating the most complex molecule (often in only one given equation) and decide how to orient that equation first.'
      ],
      connections: [
        { color: 'orange', label: '→ Topic 6.8: ΔH°f calculations are a special case of Hess\'s law', sec: 'content' }
      ],
      questionIds: ['U6Q028', 'U6Q029']
    },

    {
      id: 'U6.9.3', code: 'Topic 6.9', subtopic: '6.9',
      subtopicTitle: 'Hess\'s Law', section: 'unit6',
      concepts: ['hess-law', 'energy-cycle'],
      statement:
        'Hess\'s law can be represented as an energy cycle diagram, where multiple pathways from the same starting state to the same final state have the same total ΔH.',
      content: {
        textbook: {
          explanation:
            '<p>An <strong>energy cycle</strong> (or enthalpy cycle) is a diagrammatic representation of Hess\'s law. Starting from reactants, you can reach products via a direct route (ΔH<sub>rxn</sub>) or an indirect route through intermediates (sum of individual ΔH steps). Both routes give the same total ΔH.</p>' +
            '<p>Common energy cycles on the AP exam:</p>' +
            '<ul>' +
            '<li><strong>Formation cycle:</strong> Reactants → Elements → Products. The ΔH values around the cycle involve ΔH°<sub>f</sub> values.</li>' +
            '<li><strong>Combustion cycle:</strong> Reactants → Combustion products ← Products (if all species can be combusted to CO<sub>2</sub> and H<sub>2</sub>O).</li>' +
            '</ul>',
          keyPoints: [
            'Energy cycles are visual representations of Hess\'s law.',
            'Any closed loop in an energy cycle sums to zero.',
            'Multiple pathways, same ΔH — because H is a state function.'
          ],
          formulae: [],
          workedExamples: [],
          warnings: [],
          diagrams: []
        },
        studyGuide: {
          essentials:
            'Energy cycle diagrams show that different paths from reactants to products yield the same ΔH. Useful visual tool for Hess\'s law.',
          keyPoints: ['Closed loop ΔH = 0.'],
          formulae: []
        }
      },
      examTips: [
        'If you get stuck on a Hess\'s law problem, try drawing an energy cycle — it can make the required manipulations more obvious.'
      ],
      connections: [
        { color: 'purple', label: '→ Unit 9: Born-Haber cycles are energy cycles for ionic compound formation', sec: 'content' },
        { color: 'orange', label: '→ Topic 6.8: Formation cycles use ΔH°f values', sec: 'content' }
      ],
      questionIds: ['U6Q030']
    }
  ]
};

/* Attach empty labs array for downstream code */
window.DB = window.DB || {};
if (!window.DB.u6labs) window.DB.u6labs = [];
