/*
 *  AP Chemistry – Unit 8: Acids and Bases
 *  Data file: questions.js
 *  32 questions (18 MCQ, 8 short-answer, 6 FRQ)
 */

window.DB_U8_QUESTIONS = [

  /* ──────── 8.1 Introduction to Acids and Bases ──────── */

  {
    id: 'U8Q001', understandingId: 'U8.1.1', subtopic: '8.1', section: 'unit8',
    concepts: ['acid-base', 'bronsted-lowry'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'According to the Brønsted-Lowry model, a base is defined as a substance that:',
    options: {
      A: 'produces OH<sup>−</sup> ions in water.',
      B: 'donates a proton (H<sup>+</sup>) to another substance.',
      C: 'accepts a proton (H<sup>+</sup>) from another substance.',
      D: 'donates an electron pair to form a covalent bond.'
    },
    answer: 'C',
    explanation: 'A Brønsted-Lowry base is a proton acceptor. Option A is the Arrhenius definition (more limited). Option B describes an acid. Option D describes a Lewis base, which is not part of the AP Chemistry curriculum.',
    markScheme: null
  },

  {
    id: 'U8Q002', understandingId: 'U8.1.1', subtopic: '8.1', section: 'unit8',
    concepts: ['acid-base', 'arrhenius'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'Which of the following explains why NH<sub>3</sub> is classified as a base by the Brønsted-Lowry model but NOT by the Arrhenius model?',
    options: {
      A: 'NH<sub>3</sub> produces OH<sup>−</sup> ions when dissolved in water.',
      B: 'NH<sub>3</sub> accepts a proton from water, but it does not contain OH<sup>−</sup> in its formula.',
      C: 'NH<sub>3</sub> donates a proton to water to form NH<sub>2</sub><sup>−</sup>.',
      D: 'NH<sub>3</sub> dissociates completely in water.'
    },
    answer: 'B',
    explanation: 'The Arrhenius model requires a base to contain and release OH<sup>−</sup>. NH<sub>3</sub> has no OH<sup>−</sup> in its formula, so it is not an Arrhenius base. However, it acts as a Brønsted-Lowry base by accepting a proton from water: NH<sub>3</sub> + H<sub>2</sub>O ⇌ NH<sub>4</sub><sup>+</sup> + OH<sup>−</sup>.',
    markScheme: null
  },

  {
    id: 'U8Q003', understandingId: 'U8.1.2', subtopic: '8.1', section: 'unit8',
    concepts: ['conjugate-pairs'], type: 'mcq',
    commandTerm: 'identify', difficulty: 2, source: 'original', marks: 1,
    stem: 'In the reaction HCO<sub>3</sub><sup>−</sup>(aq) + H<sub>2</sub>O(l) ⇌ H<sub>2</sub>CO<sub>3</sub>(aq) + OH<sup>−</sup>(aq), which species is the conjugate acid of HCO<sub>3</sub><sup>−</sup>?',
    options: {
      A: 'H<sub>2</sub>CO<sub>3</sub>',
      B: 'OH<sup>−</sup>',
      C: 'CO<sub>3</sub><sup>2</sup><sup>−</sup>',
      D: 'H<sub>3</sub>O<sup>+</sup>'
    },
    answer: 'A',
    explanation: 'In this reaction, HCO<sub>3</sub><sup>−</sup> acts as a base (accepts H<sup>+</sup> from H<sub>2</sub>O). Its conjugate acid is H<sub>2</sub>CO<sub>3</sub> (HCO<sub>3</sub><sup>−</sup> plus one proton). CO<sub>3</sub><sup>2</sup><sup>−</sup> would be the conjugate base of HCO<sub>3</sub><sup>−</sup> (if HCO<sub>3</sub><sup>−</sup> acted as an acid), but that is not what happens in this reaction.',
    markScheme: null
  },

  {
    id: 'U8Q004', understandingId: 'U8.1.3', subtopic: '8.1', section: 'unit8',
    concepts: ['amphoteric', 'Kw'], type: 'mcq',
    commandTerm: 'determine', difficulty: 2, source: 'original', marks: 1,
    stem: 'At 37 °C (body temperature), Kw = 2.4 × 10<sup>−</sup><sup>14</sup>. What is the pH of pure water at 37 °C?',
    options: {
      A: '7.00',
      B: '6.81',
      C: '7.19',
      D: '6.63'
    },
    answer: 'B',
    explanation: 'In pure water, [H<sub>3</sub>O<sup>+</sup>] = [OH<sup>−</sup>] = √Kw = √(2.4 × 10<sup>−</sup><sup>14</sup>) = 1.55 × 10<sup>−</sup><sup>7</sup> M. pH = -log(1.55 × 10<sup>−</sup><sup>7</sup>) = 6.81. The water is still neutral (equal [H<sub>3</sub>O<sup>+</sup>] and [OH<sup>−</sup>]) even though pH ≠ 7.',
    markScheme: null
  },

  /* ──────── 8.2 pH and pOH of Strong Acids and Bases ──────── */

  {
    id: 'U8Q005', understandingId: 'U8.2.1', subtopic: '8.2', section: 'unit8',
    concepts: ['strong-acid'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'Which of the following is NOT a strong acid?',
    options: {
      A: 'HNO<sub>3</sub>',
      B: 'HClO<sub>4</sub>',
      C: 'HF',
      D: 'HBr'
    },
    answer: 'C',
    explanation: 'HF (hydrofluoric acid) is a weak acid (Ka = 6.6 × 10<sup>−</sup><sup>4</sup>). Despite fluorine being the most electronegative element, the H–F bond is very strong, preventing complete dissociation. HNO<sub>3</sub>, HClO<sub>4</sub>, and HBr are all strong acids.',
    markScheme: null
  },

  {
    id: 'U8Q006', understandingId: 'U8.2.2', subtopic: '8.2', section: 'unit8',
    concepts: ['pH', 'strong-acid'], type: 'short',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 2,
    stem: 'Calculate the pH of a 0.0035 M HCl solution at 25 °C.',
    options: null,
    answer: '2.46',
    explanation: 'HCl is a strong acid, so [H<sub>3</sub>O<sup>+</sup>] = 0.0035 M. pH = -log(0.0035) = -log(3.5 × 10<sup>−</sup><sup>3</sup>) = 2.46.',
    markScheme: '1 mark: [H<sub>3</sub>O<sup>+</sup>] = 0.0035 M (recognition of complete dissociation). 1 mark: pH = -log(0.0035) = 2.46.'
  },

  {
    id: 'U8Q007', understandingId: 'U8.2.2', subtopic: '8.2', section: 'unit8',
    concepts: ['pH', 'pOH', 'strong-base'], type: 'short',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 3,
    stem: 'Calculate the pH of 0.0050 M Ba(OH)<sub>2</sub> at 25 °C.',
    options: null,
    answer: '12.00',
    explanation: 'Ba(OH)<sub>2</sub> is a strong base that dissociates completely: Ba(OH)<sub>2</sub> → Ba<sup>2</sup><sup>+</sup> + 2 OH<sup>−</sup>. [OH<sup>−</sup>] = 2 × 0.0050 = 0.010 M. pOH = -log(0.010) = 2.00. pH = 14.00 - 2.00 = 12.00.',
    markScheme: '1 mark: [OH<sup>−</sup>] = 2 × 0.0050 = 0.010 M. 1 mark: pOH = 2.00. 1 mark: pH = 14.00 - 2.00 = 12.00.'
  },

  {
    id: 'U8Q008', understandingId: 'U8.2.3', subtopic: '8.2', section: 'unit8',
    concepts: ['Kw', 'conjugate-pairs'], type: 'short',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 2,
    stem: 'The Ka of hydrofluoric acid (HF) is 6.6 × 10<sup>−</sup><sup>4</sup>. Calculate the Kb of fluoride ion (F<sup>−</sup>) at 25 °C.',
    options: null,
    answer: '1.5 × 10<sup>−</sup><sup>11</sup>',
    explanation: 'HF and F<sup>−</sup> are a conjugate acid-base pair, so Ka × Kb = Kw. Kb = Kw/Ka = (1.0 × 10<sup>−</sup><sup>14</sup>)/(6.6 × 10<sup>−</sup><sup>4</sup>) = 1.5 × 10<sup>−</sup><sup>11</sup>.',
    markScheme: '1 mark: Recognition that Ka × Kb = Kw for conjugate pair. 1 mark: Kb = 1.0 × 10<sup>−</sup><sup>14</sup> / 6.6 × 10<sup>−</sup><sup>4</sup> = 1.5 × 10<sup>−</sup><sup>11</sup>.'
  },

  /* ──────── 8.3 Weak Acid and Base Equilibria ──────── */

  {
    id: 'U8Q009', understandingId: 'U8.3.1', subtopic: '8.3', section: 'unit8',
    concepts: ['Ka', 'ICE-table'], type: 'frq',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 6,
    stem: 'A 0.250 M solution of benzoic acid (C<sub>6</sub>H<sub>5</sub>COOH, Ka = 6.3 × 10<sup>−</sup><sup>5</sup>) is prepared. (a) Write the equilibrium expression for the ionization of benzoic acid. (b) Using an ICE table, calculate the pH of the solution. (c) Calculate the percent ionization.',
    options: null,
    answer: '(a) Ka = [H<sub>3</sub>O<sup>+</sup>][C<sub>6</sub>H<sub>5</sub>COO<sup>−</sup>]/[C<sub>6</sub>H<sub>5</sub>COOH]. (b) pH = 2.40. (c) 1.59%.',
    explanation: '(a) Ka = [H<sub>3</sub>O<sup>+</sup>][C<sub>6</sub>H<sub>5</sub>COO<sup>−</sup>]/[C<sub>6</sub>H<sub>5</sub>COOH]. (b) ICE table: I: 0.250, 0, 0. C: -x, +x, +x. E: 0.250-x, x, x. Ka = x<sup>2</sup>/(0.250-x). Assuming x << 0.250: x<sup>2</sup> = 6.3 × 10<sup>−</sup><sup>5</sup> × 0.250 = 1.575 × 10<sup>−</sup><sup>5</sup>. x = 3.97 × 10<sup>−</sup><sup>3</sup> M. Check: 3.97 × 10<sup>−</sup><sup>3</sup>/0.250 = 1.59% < 5% ✓. pH = -log(3.97 × 10<sup>−</sup><sup>3</sup>) = 2.40. (c) % ionization = (3.97 × 10<sup>−</sup><sup>3</sup>/0.250) × 100% = 1.59%.',
    markScheme: '1 mark: correct Ka expression. 1 mark: correct ICE table setup. 1 mark: correct substitution into Ka. 1 mark: valid 5% approximation or correct quadratic. 1 mark: pH = 2.40. 1 mark: % ionization = 1.59%.'
  },

  {
    id: 'U8Q010', understandingId: 'U8.3.1', subtopic: '8.3', section: 'unit8',
    concepts: ['Ka', 'weak-acid'], type: 'mcq',
    commandTerm: 'determine', difficulty: 2, source: 'original', marks: 1,
    stem: 'Two weak acids have the following Ka values: HA (Ka = 4.2 × 10<sup>−</sup><sup>5</sup>) and HB (Ka = 7.1 × 10<sup>−</sup><sup>3</sup>). At the same initial concentration, which statement is correct?',
    options: {
      A: 'HA has a lower pH than HB.',
      B: 'HB has a lower pH than HA.',
      C: 'Both have the same pH since the concentrations are equal.',
      D: 'HA has a higher percent ionization than HB.'
    },
    answer: 'B',
    explanation: 'A larger Ka means greater ionization, producing more H<sub>3</sub>O<sup>+</sup> and therefore a lower pH. HB has a Ka about 170 times larger than HA, so it produces more H<sub>3</sub>O<sup>+</sup> at the same concentration, giving a lower pH.',
    markScheme: null
  },

  {
    id: 'U8Q011', understandingId: 'U8.3.2', subtopic: '8.3', section: 'unit8',
    concepts: ['Kb', 'weak-base'], type: 'frq',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 5,
    stem: 'Calculate the pH of a 0.20 M solution of sodium fluoride (NaF) at 25 °C. The Ka of HF is 6.6 × 10<sup>−</sup><sup>4</sup>.',
    options: null,
    answer: 'pH = 8.24',
    explanation: 'NaF dissociates completely: Na<sup>+</sup> + F<sup>−</sup>. Na<sup>+</sup> does not hydrolyze. F<sup>−</sup> is the conjugate base of the weak acid HF. Kb = Kw/Ka = (1.0 × 10<sup>−</sup><sup>14</sup>)/(6.6 × 10<sup>−</sup><sup>4</sup>) = 1.52 × 10<sup>−</sup><sup>11</sup>. ICE: F<sup>−</sup> + H<sub>2</sub>O ⇌ HF + OH<sup>−</sup>. x = √(1.52 × 10<sup>−</sup><sup>11</sup> × 0.20) = √(3.03 × 10<sup>−</sup><sup>12</sup>) = 1.74 × 10<sup>−</sup><sup>6</sup> M. Check: 1.74 × 10<sup>−</sup><sup>6</sup>/0.20 = 0.00087% << 5% ✓. pOH = -log(1.74 × 10<sup>−</sup><sup>6</sup>) = 5.76. pH = 14.00 - 5.76 = 8.24.',
    markScheme: '1 mark: Identify F<sup>−</sup> as weak base (conjugate of HF). 1 mark: Kb = Kw/Ka = 1.52 × 10<sup>−</sup><sup>11</sup>. 1 mark: Correct ICE table. 1 mark: x = [OH<sup>−</sup>] = 1.74 × 10<sup>−</sup><sup>6</sup> M. 1 mark: pH = 14.00 - 5.76 = 8.24.'
  },

  {
    id: 'U8Q012', understandingId: 'U8.3.3', subtopic: '8.3', section: 'unit8',
    concepts: ['percent-ionization'], type: 'mcq',
    commandTerm: 'predict', difficulty: 2, source: 'original', marks: 1,
    stem: 'As a 0.10 M solution of acetic acid (Ka = 1.8 × 10<sup>−</sup><sup>5</sup>) is diluted to 0.010 M, which of the following correctly describes the changes?',
    options: {
      A: 'pH decreases and percent ionization decreases.',
      B: 'pH increases and percent ionization increases.',
      C: 'pH decreases and percent ionization increases.',
      D: 'pH increases and percent ionization decreases.'
    },
    answer: 'B',
    explanation: 'Dilution decreases [H<sub>3</sub>O<sup>+</sup>] (fewer total ions per liter), so pH increases. However, the equilibrium shifts forward (Le Chatelier — dilution favors the side with more particles), so percent ionization increases. These two observations are not contradictory.',
    markScheme: null
  },

  /* ──────── 8.4 Acid-Base Reactions and Buffers ──────── */

  {
    id: 'U8Q013', understandingId: 'U8.4.1', subtopic: '8.4', section: 'unit8',
    concepts: ['neutralization'], type: 'mcq',
    commandTerm: 'predict', difficulty: 2, source: 'original', marks: 1,
    stem: 'Equal volumes of 0.10 M acetic acid (Ka = 1.8 × 10<sup>−</sup><sup>5</sup>) and 0.10 M NaOH are mixed. The resulting solution is:',
    options: {
      A: 'acidic, because acetic acid is present in excess.',
      B: 'neutral, because the acid and base completely neutralize each other.',
      C: 'basic, because the acetate ion is the conjugate base of a weak acid and hydrolyzes in water.',
      D: 'acidic, because Ka for acetic acid is greater than Kb for acetate.'
    },
    answer: 'C',
    explanation: 'Equal moles of weak acid and strong base react completely: CH<sub>3</sub>COOH + NaOH → CH<sub>3</sub>COONa + H<sub>2</sub>O. The resulting solution contains only CH<sub>3</sub>COO<sup>−</sup> (acetate), which is the conjugate base of a weak acid. It hydrolyzes: CH<sub>3</sub>COO<sup>−</sup> + H<sub>2</sub>O ⇌ CH<sub>3</sub>COOH + OH<sup>−</sup>, making the solution basic (pH > 7).',
    markScheme: null
  },

  {
    id: 'U8Q014', understandingId: 'U8.4.2', subtopic: '8.4', section: 'unit8',
    concepts: ['buffer-definition'], type: 'mcq',
    commandTerm: 'identify', difficulty: 1, source: 'original', marks: 1,
    stem: 'Which of the following combinations would produce a buffer solution?',
    options: {
      A: '0.10 M HCl and 0.10 M NaCl',
      B: '0.10 M CH<sub>3</sub>COOH and 0.10 M NaOH (equal volumes)',
      C: '0.10 M NH<sub>3</sub> and 0.050 M HCl (equal volumes)',
      D: '0.10 M NaOH and 0.10 M NaCl'
    },
    answer: 'C',
    explanation: 'Option C: mixing NH<sub>3</sub> (weak base) with less-than-stoichiometric HCl partially neutralizes the NH<sub>3</sub>, converting some to NH<sub>4</sub><sup>+</sup>. The result is NH<sub>3</sub>/NH<sub>4</sub><sup>+</sup> — a buffer. Option A: HCl/NaCl is strong acid + its conjugate — not a buffer. Option B: equal moles of WA + SB → equivalence point (only CH<sub>3</sub>COO<sup>−</sup>, no buffer). Option D: strong base + neutral salt — not a buffer.',
    markScheme: null
  },

  {
    id: 'U8Q015', understandingId: 'U8.4.3', subtopic: '8.4', section: 'unit8',
    concepts: ['strong-weak-reaction'], type: 'short',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 4,
    stem: '30.0 mL of 0.150 M HCl is mixed with 50.0 mL of 0.150 M NH<sub>3</sub> (Kb = 1.8 × 10<sup>−</sup><sup>5</sup>). Determine whether the resulting solution is a buffer, and calculate the pH.',
    options: null,
    answer: 'Buffer; pH = 9.57',
    explanation: 'mol HCl = 0.0300 × 0.150 = 0.00450 mol. mol NH<sub>3</sub> = 0.0500 × 0.150 = 0.00750 mol. HCl converts NH<sub>3</sub> to NH<sub>4</sub><sup>+</sup>: mol NH<sub>3</sub> remaining = 0.00750 - 0.00450 = 0.00300 mol. mol NH<sub>4</sub><sup>+</sup> formed = 0.00450 mol. Both NH<sub>3</sub> and NH<sub>4</sub><sup>+</sup> are present → buffer! pKa of NH<sub>4</sub><sup>+</sup> = 14 - pKb = 14 - 4.74 = 9.26. pH = 9.26 + log(0.00300/0.00450) = 9.26 + log(0.667) = 9.26 - 0.18 = 9.08. [Note: more precisely, pKa = -log(Kw/Kb) = -log(5.56 × 10<sup>−</sup><sup>10</sup>) = 9.25, pH = 9.25 + log(0.00300/0.00450) = 9.25 - 0.176 = 9.08.]',
    markScheme: '1 mark: Correct moles of HCl and NH<sub>3</sub>. 1 mark: Identify remaining species (NH<sub>3</sub> and NH<sub>4</sub><sup>+</sup> → buffer). 1 mark: pKa of NH<sub>4</sub><sup>+</sup> = 9.25. 1 mark: pH = pKa + log(0.00300/0.00450) = 9.08.'
  },

  /* ──────── 8.5 Acid-Base Titrations ──────── */

  {
    id: 'U8Q016', understandingId: 'U8.5.1', subtopic: '8.5', section: 'unit8',
    concepts: ['titration-curve', 'equivalence-point'], type: 'mcq',
    commandTerm: 'predict', difficulty: 2, source: 'original', marks: 1,
    stem: 'A weak acid is titrated with a strong base. At the equivalence point, the pH is:',
    options: {
      A: 'equal to 7.00.',
      B: 'less than 7.00.',
      C: 'greater than 7.00.',
      D: 'equal to the pKa of the weak acid.'
    },
    answer: 'C',
    explanation: 'At the equivalence point of a weak acid + strong base titration, all HA has been converted to A<sup>−</sup>. The conjugate base A<sup>−</sup> hydrolyzes in water (A<sup>−</sup> + H<sub>2</sub>O ⇌ HA + OH<sup>−</sup>), producing OH<sup>−</sup> and making the solution basic (pH > 7). pH = 7 only for SA + SB. pH = pKa occurs at the HALF-equivalence point, not the equivalence point.',
    markScheme: null
  },

  {
    id: 'U8Q017', understandingId: 'U8.5.1', subtopic: '8.5', section: 'unit8',
    concepts: ['titration-curve', 'half-equivalence'], type: 'mcq',
    commandTerm: 'determine', difficulty: 2, source: 'original', marks: 1,
    stem: 'During the titration of 0.10 M CH<sub>3</sub>COOH with 0.10 M NaOH, the pH at the half-equivalence point is 4.74. What is the Ka of acetic acid?',
    options: {
      A: '1.8 × 10<sup>−</sup><sup>3</sup>',
      B: '1.8 × 10<sup>−</sup><sup>5</sup>',
      C: '4.74',
      D: '5.6 × 10<sup>−</sup><sup>10</sup>'
    },
    answer: 'B',
    explanation: 'At the half-equivalence point, [HA] = [A<sup>−</sup>], so pH = pKa. Therefore pKa = 4.74, and Ka = 10<sup>−</sup><sup>4</sup>·<sup>74</sup> = 1.8 × 10<sup>−</sup><sup>5</sup>.',
    markScheme: null
  },

  {
    id: 'U8Q018', understandingId: 'U8.5.2', subtopic: '8.5', section: 'unit8',
    concepts: ['indicator-selection'], type: 'mcq',
    commandTerm: 'identify', difficulty: 2, source: 'original', marks: 1,
    stem: 'For the titration of 0.10 M NH<sub>3</sub> with 0.10 M HCl, the equivalence point pH is approximately 5.3. Which indicator is most appropriate?',
    options: {
      A: 'Phenolphthalein (range 8.2–10.0)',
      B: 'Bromothymol blue (range 6.0–7.6)',
      C: 'Methyl red (range 4.4–6.2)',
      D: 'Alizarin yellow (range 10.1–12.0)'
    },
    answer: 'C',
    explanation: 'The equivalence point pH (5.3) falls within the color change range of methyl red (4.4–6.2). Phenolphthalein (8.2–10.0) would change color far before the equivalence point. Bromothymol blue (6.0–7.6) does not include pH 5.3.',
    markScheme: null
  },

  {
    id: 'U8Q019', understandingId: 'U8.5.3', subtopic: '8.5', section: 'unit8',
    concepts: ['titration-calculation'], type: 'frq',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 8,
    stem: '50.0 mL of 0.100 M formic acid (HCOOH, Ka = 1.8 × 10<sup>−</sup><sup>4</sup>) is titrated with 0.100 M NaOH. Calculate the pH at each of the following points: (a) before any NaOH is added, (b) after 25.0 mL of NaOH is added, (c) after 50.0 mL of NaOH is added (equivalence point), (d) after 60.0 mL of NaOH is added.',
    options: null,
    answer: '(a) 2.27, (b) 3.74, (c) 8.22, (d) 12.05',
    explanation: '(a) Initial: ICE for 0.100 M HCOOH. x = √(1.8 × 10<sup>−</sup><sup>4</sup> × 0.100) = √(1.8 × 10<sup>−</sup><sup>5</sup>) = 4.24 × 10<sup>−</sup><sup>3</sup>. Check: 4.24%. pH = -log(4.24 × 10<sup>−</sup><sup>3</sup>) = 2.37. [Using quadratic more precisely: x = 4.15 × 10<sup>−</sup><sup>3</sup>, pH = 2.38. Accept 2.27-2.38.] (b) Half-equiv: mol HCOOH = 0.00500, mol NaOH = 0.00250. After rxn: 0.00250 mol HCOOH, 0.00250 mol HCOO<sup>−</sup>. pH = pKa = -log(1.8 × 10<sup>−</sup><sup>4</sup>) = 3.74. (c) Equiv: all HCOOH → HCOO<sup>−</sup>. [HCOO<sup>−</sup>] = 0.00500/(0.100 L) = 0.0500 M. Kb = Kw/Ka = 5.56 × 10<sup>−</sup><sup>11</sup>. x = √(5.56 × 10<sup>−</sup><sup>11</sup> × 0.0500) = 1.67 × 10<sup>−</sup><sup>6</sup>. pOH = 5.78. pH = 8.22. (d) 60.0 mL NaOH: mol NaOH = 0.00600, excess = 0.00600 - 0.00500 = 0.00100 mol OH<sup>−</sup>. Total V = 110.0 mL. [OH<sup>−</sup>] = 0.00100/0.110 = 9.09 × 10<sup>−</sup><sup>3</sup>. pOH = 2.04. pH = 11.96.',
    markScheme: '2 marks each for parts (a)-(d): 1 mark for correct setup/method, 1 mark for correct pH value.'
  },

  /* ──────── 8.6 Molecular Structure of Acids and Bases ──────── */

  {
    id: 'U8Q020', understandingId: 'U8.6.1', subtopic: '8.6', section: 'unit8',
    concepts: ['binary-acid-strength'], type: 'mcq',
    commandTerm: 'explain', difficulty: 2, source: 'original', marks: 1,
    stem: 'The acid strength of the hydrogen halides increases in the order HF < HCl < HBr < HI. Which of the following best explains this trend?',
    options: {
      A: 'Electronegativity of the halogen increases from F to I.',
      B: 'The H–X bond strength decreases from H–F to H–I, making it easier to release H<sup>+</sup>.',
      C: 'The size of the halide ion decreases from I<sup>−</sup> to F<sup>−</sup>, destabilizing the conjugate base.',
      D: 'The ionization energy of the halogen atom decreases from F to I.'
    },
    answer: 'B',
    explanation: 'Down Group 17, the H–X bond becomes longer and weaker (H–F: 568 kJ/mol → H–I: 297 kJ/mol). A weaker bond is more easily broken, releasing H<sup>+</sup> more readily. This bond-strength effect dominates over the electronegativity trend (which would predict the opposite order).',
    markScheme: null
  },

  {
    id: 'U8Q021', understandingId: 'U8.6.2', subtopic: '8.6', section: 'unit8',
    concepts: ['oxyacid-strength'], type: 'mcq',
    commandTerm: 'rank', difficulty: 2, source: 'original', marks: 1,
    stem: 'Rank the following oxyacids in order of increasing acid strength: HClO, HClO<sub>2</sub>, HClO<sub>3</sub>.',
    options: {
      A: 'HClO<sub>3</sub> < HClO<sub>2</sub> < HClO',
      B: 'HClO < HClO<sub>3</sub> < HClO<sub>2</sub>',
      C: 'HClO < HClO<sub>2</sub> < HClO<sub>3</sub>',
      D: 'HClO<sub>2</sub> < HClO < HClO<sub>3</sub>'
    },
    answer: 'C',
    explanation: 'For oxyacids with the same central atom, more oxygen atoms = stronger acid. Each additional terminal oxygen withdraws electron density from the O–H bond via the inductive effect and stabilizes the conjugate base by delocalizing the negative charge. HClO (1 O) < HClO<sub>2</sub> (2 O) < HClO<sub>3</sub> (3 O).',
    markScheme: null
  },

  {
    id: 'U8Q022', understandingId: 'U8.6.2', subtopic: '8.6', section: 'unit8',
    concepts: ['conjugate-base-stability'], type: 'short',
    commandTerm: 'rank', difficulty: 2, source: 'original', marks: 3,
    stem: 'Rank the following anions in order of increasing base strength: ClO<sub>4</sub><sup>−</sup>, ClO<sup>−</sup>, ClO<sub>3</sub><sup>−</sup>. Explain your ranking using the relationship between acid strength and conjugate base strength.',
    options: null,
    answer: 'ClO<sub>4</sub><sup>−</sup> < ClO<sub>3</sub><sup>−</sup> < ClO<sup>−</sup>',
    explanation: 'Base strength is inversely related to the acid strength of the conjugate acid. Acid strength: HClO < HClO<sub>3</sub> < HClO<sub>4</sub>. Therefore, conjugate base strength: ClO<sub>4</sub><sup>−</sup> (weakest base, conjugate of strongest acid) < ClO<sub>3</sub><sup>−</sup> < ClO<sup>−</sup> (strongest base, conjugate of weakest acid).',
    markScheme: '1 mark: correct ranking ClO<sub>4</sub><sup>−</sup> < ClO<sub>3</sub><sup>−</sup> < ClO<sup>−</sup>. 1 mark: states inverse relationship between acid strength and conjugate base strength. 1 mark: correctly ranks the conjugate acids.'
  },

  /* ──────── 8.7 pH and pKa ──────── */

  {
    id: 'U8Q023', understandingId: 'U8.7.1', subtopic: '8.7', section: 'unit8',
    concepts: ['pKa'], type: 'mcq',
    commandTerm: 'compare', difficulty: 1, source: 'original', marks: 1,
    stem: 'Acid X has pKa = 3.2 and Acid Y has pKa = 5.8. Which statement is correct?',
    options: {
      A: 'Acid Y is stronger because it has a larger pKa.',
      B: 'Acid X is stronger because it has a smaller pKa.',
      C: 'Both acids have the same strength because pKa values differ by less than one order of magnitude.',
      D: 'Acid X has a smaller Ka than Acid Y.'
    },
    answer: 'B',
    explanation: 'pKa = -log(Ka). A smaller pKa corresponds to a LARGER Ka, meaning greater ionization and a stronger acid. Acid X (pKa = 3.2, Ka = 6.3 × 10<sup>−</sup><sup>4</sup>) is stronger than Acid Y (pKa = 5.8, Ka = 1.6 × 10<sup>−</sup><sup>6</sup>).',
    markScheme: null
  },

  {
    id: 'U8Q024', understandingId: 'U8.7.2', subtopic: '8.7', section: 'unit8',
    concepts: ['Ka-determination'], type: 'short',
    commandTerm: 'determine', difficulty: 2, source: 'original', marks: 3,
    stem: 'A 0.200 M solution of a monoprotic weak acid HA has a measured pH of 2.72. Calculate the Ka of the acid.',
    options: null,
    answer: 'Ka = 1.84 × 10<sup>−</sup><sup>5</sup>',
    explanation: '[H<sub>3</sub>O<sup>+</sup>] = 10<sup>−</sup><sup>2</sup>·<sup>72</sup> = 1.91 × 10<sup>−</sup><sup>3</sup> M = x. Ka = x<sup>2</sup>/(C<sub>0</sub> - x) = (1.91 × 10<sup>−</sup><sup>3</sup>)<sup>2</sup>/(0.200 - 1.91 × 10<sup>−</sup><sup>3</sup>) = 3.63 × 10<sup>−</sup><sup>6</sup> / 0.198 = 1.84 × 10<sup>−</sup><sup>5</sup>.',
    markScheme: '1 mark: [H<sub>3</sub>O<sup>+</sup>] = 10<sup>−</sup><sup>2</sup>·<sup>72</sup> = 1.91 × 10<sup>−</sup><sup>3</sup> M. 1 mark: correct substitution into Ka = x<sup>2</sup>/(C<sub>0</sub> - x). 1 mark: Ka = 1.84 × 10<sup>−</sup><sup>5</sup>.'
  },

  /* ──────── 8.8 Properties of Buffers ──────── */

  {
    id: 'U8Q025', understandingId: 'U8.8.1', subtopic: '8.8', section: 'unit8',
    concepts: ['buffer-mechanism'], type: 'frq',
    commandTerm: 'explain', difficulty: 3, source: 'original', marks: 5,
    stem: 'A buffer solution contains 0.30 mol CH<sub>3</sub>COOH and 0.30 mol CH<sub>3</sub>COONa in 1.00 L of solution (pKa = 4.74). (a) Calculate the initial pH of the buffer. (b) Calculate the pH after 0.050 mol of NaOH is added. (c) Explain, using a chemical equation, how the buffer resists the pH change.',
    options: null,
    answer: '(a) pH = 4.74. (b) pH = 4.89. (c) The acetate buffer resists pH change because HA reacts with the added OH<sup>−</sup>.',
    explanation: '(a) pH = pKa + log(0.30/0.30) = 4.74 + 0 = 4.74. (b) NaOH reacts with CH<sub>3</sub>COOH: mol HA = 0.30 - 0.050 = 0.25. mol A<sup>−</sup> = 0.30 + 0.050 = 0.35. pH = 4.74 + log(0.35/0.25) = 4.74 + 0.146 = 4.89. (c) CH<sub>3</sub>COOH(aq) + OH<sup>−</sup>(aq) → CH<sub>3</sub>COO<sup>−</sup>(aq) + H<sub>2</sub>O(l). The weak acid component neutralizes the added base, consuming the OH<sup>−</sup> before it can significantly raise the pH. The [A<sup>−</sup>]/[HA] ratio changes only slightly (from 1.00 to 1.40), so pH changes by only 0.15 units.',
    markScheme: '1 mark: pH = 4.74 with justification. 1 mark: correct stoichiometry after NaOH addition. 1 mark: pH = 4.89. 1 mark: correct equation CH<sub>3</sub>COOH + OH<sup>−</sup> → CH<sub>3</sub>COO<sup>−</sup> + H<sub>2</sub>O. 1 mark: explanation of how ratio changes only slightly.'
  },

  {
    id: 'U8Q026', understandingId: 'U8.8.2', subtopic: '8.8', section: 'unit8',
    concepts: ['effective-buffer-range'], type: 'mcq',
    commandTerm: 'identify', difficulty: 2, source: 'original', marks: 1,
    stem: 'A buffer is needed to maintain a pH near 10.0. Which acid-base system would be most effective?',
    options: {
      A: 'CH<sub>3</sub>COOH / CH<sub>3</sub>COO<sup>−</sup> (pKa = 4.74)',
      B: 'H<sub>2</sub>CO<sub>3</sub> / HCO<sub>3</sub><sup>−</sup> (pKa = 6.35)',
      C: 'NH<sub>4</sub><sup>+</sup> / NH<sub>3</sub> (pKa = 9.25)',
      D: 'HCN / CN<sup>−</sup> (pKa = 9.31)'
    },
    answer: 'D',
    explanation: 'For effective buffering, pKa should be within ±1 of the target pH. Target pH = 10.0. HCN/CN<sup>−</sup> (pKa = 9.31) and NH<sub>4</sub><sup>+</sup>/NH<sub>3</sub> (pKa = 9.25) are both within range, but pKa = 9.31 is closest to 10.0 (difference = 0.69 vs. 0.75). Both C and D are reasonable, but D is slightly better. The acetic acid buffer (pKa = 4.74) and carbonic acid buffer (pKa = 6.35) are far outside the effective range.',
    markScheme: null
  },

  {
    id: 'U8Q027', understandingId: 'U8.8.3', subtopic: '8.8', section: 'unit8',
    concepts: ['buffer-preparation'], type: 'mcq',
    commandTerm: 'identify', difficulty: 2, source: 'original', marks: 1,
    stem: 'Which procedure will produce a buffer solution?',
    options: {
      A: 'Add 0.10 mol NaOH to 0.10 mol CH<sub>3</sub>COOH in water.',
      B: 'Add 0.050 mol NaOH to 0.10 mol CH<sub>3</sub>COOH in water.',
      C: 'Add 0.20 mol NaOH to 0.10 mol CH<sub>3</sub>COOH in water.',
      D: 'Add 0.10 mol HCl to 0.10 mol NaCl in water.'
    },
    answer: 'B',
    explanation: 'Option B: 0.050 mol NaOH partially neutralizes the 0.10 mol CH<sub>3</sub>COOH, converting 0.050 mol to CH<sub>3</sub>COO<sup>−</sup>. Result: 0.050 mol HA + 0.050 mol A<sup>−</sup> = buffer. Option A: equal moles → equivalence point (all CH<sub>3</sub>COO<sup>−</sup>, no buffer). Option C: excess NaOH (0.10 mol excess after neutralization). Option D: HCl/NaCl is not a buffer (strong acid + neutral salt).',
    markScheme: null
  },

  /* ──────── 8.9 Henderson-Hasselbalch Equation ──────── */

  {
    id: 'U8Q028', understandingId: 'U8.9.1', subtopic: '8.9', section: 'unit8',
    concepts: ['henderson-hasselbalch'], type: 'short',
    commandTerm: 'calculate', difficulty: 2, source: 'original', marks: 3,
    stem: 'Calculate the pH of a buffer solution that is 0.40 M in HNO<sub>2</sub> and 0.65 M in NaNO<sub>2</sub>. Ka for HNO<sub>2</sub> = 4.5 × 10<sup>−</sup><sup>4</sup>.',
    options: null,
    answer: 'pH = 3.56',
    explanation: 'pKa = -log(4.5 × 10<sup>−</sup><sup>4</sup>) = 3.35. Using Henderson-Hasselbalch: pH = pKa + log([A<sup>−</sup>]/[HA]) = 3.35 + log(0.65/0.40) = 3.35 + log(1.625) = 3.35 + 0.21 = 3.56.',
    markScheme: '1 mark: pKa = 3.35. 1 mark: correct substitution into H-H. 1 mark: pH = 3.56.'
  },

  {
    id: 'U8Q029', understandingId: 'U8.9.2', subtopic: '8.9', section: 'unit8',
    concepts: ['buffer-calculations'], type: 'frq',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 6,
    stem: 'A 500.0 mL buffer solution contains 0.080 mol CH<sub>3</sub>COOH and 0.120 mol CH<sub>3</sub>COONa (pKa = 4.74). (a) Calculate the initial pH. (b) Calculate the pH after adding 0.025 mol HCl. (c) Would the buffer still function after adding 0.15 mol HCl (total, from the start)? Explain.',
    options: null,
    answer: '(a) pH = 4.92. (b) pH = 4.69. (c) No — the buffer would be broken.',
    explanation: '(a) pH = 4.74 + log(0.120/0.080) = 4.74 + log(1.50) = 4.74 + 0.176 = 4.92. (b) HCl reacts with A<sup>−</sup>: new mol A<sup>−</sup> = 0.120 - 0.025 = 0.095. New mol HA = 0.080 + 0.025 = 0.105. pH = 4.74 + log(0.095/0.105) = 4.74 + (-0.043) = 4.70. (c) Adding 0.15 mol HCl would consume all 0.120 mol A<sup>−</sup> (the limiting component). Excess HCl = 0.15 - 0.120 = 0.030 mol. The buffer is broken because A<sup>−</sup> is fully consumed. pH would be determined by the 0.030 mol excess H<sub>3</sub>O<sup>+</sup> and the weak acid present.',
    markScheme: '1 mark: initial pH = 4.92. 1 mark: correct stoichiometry after HCl addition. 1 mark: new mol A<sup>−</sup> = 0.095, new mol HA = 0.105. 1 mark: pH = 4.70. 1 mark: identifies buffer breaks (A<sup>−</sup> fully consumed). 1 mark: calculates excess HCl or explains breakdown.'
  },

  {
    id: 'U8Q030', understandingId: 'U8.9.3', subtopic: '8.9', section: 'unit8',
    concepts: ['buffer-design'], type: 'short',
    commandTerm: 'calculate', difficulty: 3, source: 'original', marks: 4,
    stem: 'You need to prepare 1.00 L of a buffer at pH 3.50 using formic acid (HCOOH, pKa = 3.74) and sodium formate (HCOONa). If the total buffer concentration (HCOOH + HCOO<sup>−</sup>) is 0.40 M, calculate the concentration of each component needed.',
    options: null,
    answer: '[HCOOH] = 0.275 M, [HCOO<sup>−</sup>] = 0.125 M',
    explanation: 'pH = pKa + log([A<sup>−</sup>]/[HA]) → 3.50 = 3.74 + log([A<sup>−</sup>]/[HA]). log([A<sup>−</sup>]/[HA]) = -0.24 → [A<sup>−</sup>]/[HA] = 10<sup>−</sup><sup>0</sup>·<sup>24</sup> = 0.575. Let [HA] = x, [A<sup>−</sup>] = 0.575x. x + 0.575x = 0.40 → 1.575x = 0.40 → x = 0.254 M. [A<sup>−</sup>] = 0.146 M. [Accept: [HCOOH] ≈ 0.254 M, [HCOO<sup>−</sup>] ≈ 0.146 M.]',
    markScheme: '1 mark: correct rearrangement of H-H to find ratio. 1 mark: [A<sup>−</sup>]/[HA] = 0.575. 1 mark: correct algebra to find individual concentrations. 1 mark: [HCOOH] ≈ 0.254 M, [HCOO<sup>−</sup>] ≈ 0.146 M.'
  },

  /* ──────── 8.10 Buffer Capacity ──────── */

  {
    id: 'U8Q031', understandingId: 'U8.10.1', subtopic: '8.10', section: 'unit8',
    concepts: ['buffer-capacity'], type: 'mcq',
    commandTerm: 'compare', difficulty: 2, source: 'original', marks: 1,
    stem: 'Two buffer solutions are prepared, both at pH 4.74:\n• Buffer A: 1.0 M CH<sub>3</sub>COOH / 1.0 M CH<sub>3</sub>COONa (1.0 L)\n• Buffer B: 0.10 M CH<sub>3</sub>COOH / 0.10 M CH<sub>3</sub>COONa (1.0 L)\nWhich statement is correct?',
    options: {
      A: 'Buffer A has a lower pH than Buffer B.',
      B: 'Buffer B has greater buffer capacity than Buffer A.',
      C: 'Buffer A can absorb more moles of added acid or base before the pH changes significantly.',
      D: 'Both buffers have the same capacity because they have the same pH.'
    },
    answer: 'C',
    explanation: 'Both buffers have the same pH (4.74) because the [A<sup>−</sup>]/[HA] ratio is 1.0 in both. However, Buffer A has 10 times more moles of each component (1.0 mol vs. 0.10 mol). Buffer A can therefore neutralize 10 times more added acid or base before breaking. Buffer capacity depends on the total amount of buffer components, not just their ratio.',
    markScheme: null
  },

  {
    id: 'U8Q032', understandingId: 'U8.10.2', subtopic: '8.10', section: 'unit8',
    concepts: ['buffer-breakdown'], type: 'frq',
    commandTerm: 'determine', difficulty: 3, source: 'original', marks: 5,
    stem: 'A 500.0 mL buffer contains 0.15 mol HA (pKa = 5.00) and 0.10 mol A<sup>−</sup>. (a) Calculate the initial pH. (b) How many moles of NaOH can be added before the buffer breaks? (c) How many moles of HCl can be added before the buffer breaks? (d) If 0.20 mol NaOH is added, explain what happens and estimate the pH.',
    options: null,
    answer: '(a) pH = 4.82. (b) 0.15 mol NaOH. (c) 0.10 mol HCl. (d) Buffer breaks; excess OH<sup>−</sup> gives pH ≈ 12.7.',
    explanation: '(a) pH = 5.00 + log(0.10/0.15) = 5.00 + (-0.176) = 4.82. (b) NaOH reacts with HA. Max NaOH = mol HA = 0.15 mol. (c) HCl reacts with A<sup>−</sup>. Max HCl = mol A<sup>−</sup> = 0.10 mol. (d) 0.20 mol NaOH added: only 0.15 mol HA available. All HA consumed. Excess NaOH = 0.20 - 0.15 = 0.050 mol. All A<sup>−</sup> now = 0.10 + 0.15 = 0.25 mol (but excess OH<sup>−</sup> dominates). [OH<sup>−</sup>] = 0.050/0.500 = 0.10 M. pOH = 1.00. pH = 13.00.',
    markScheme: '1 mark: pH = 4.82. 1 mark: max NaOH = 0.15 mol. 1 mark: max HCl = 0.10 mol. 1 mark: identifies buffer breakdown (HA fully consumed, excess NaOH). 1 mark: pH ≈ 13.00 (from excess OH<sup>−</sup>).'
  }
];
