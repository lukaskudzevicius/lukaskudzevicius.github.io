let calculations = [
  //   {
  //     display: '1 + 2 + 3',
  //     expression: 1 + 2 + 3,
  //     // result: function () {
  //     //   this.answer = this.expression;
  //     //   return this.answer;
  //     // },
  //   },
  {
    display: '(100 + 50) + 30 × (-5)',
    expression: 100 + 50 + 30 * -5,
  },
  {
    display: '√4 × 4 ÷ 2³',
    expression: (Math.sqrt(4) * 4) / 2 ** 3,
  },
  {
    display: '3³ + 3³ × 2',
    expression: 3 ** 3 + 3 ** 3 * 2,
  },
  {
    display: '2 + 2 × 2 ÷ 2',
    expression: 2 + (2 * 2) / 2,
  },
  {
    display: '10 ÷ 10 + 10 + 10',
    expression: 10 / 10 + 10 + 10,
  },
  {
    display: '10 ÷ 10 + 10 ÷ 10',
    expression: 10 / 10 + 10 / 10,
  },
  {
    display: '1² + 1³ + 1⁴ + 1 + 1²',
    expression: 1 ** 2 + 1 ** 3 + 1 ** 4 + 1 ** 5 + 1,
  },
  {
    display: '-10² ÷ 5 × 4 - 1',
    expression: ((-10) ** 2 / 5) * 4 - 1,
  },
  {
    display: '-10² ÷ 5 ÷ 5 + 196',
    expression: (-10) ** 2 / 5 / 5 + 196,
  },
  {
    display: '√64 - √49 × √36 - √25',
    expression: Math.sqrt(64) - Math.sqrt(49) * Math.sqrt(36) - Math.sqrt(25),
  },
  {
    display: '6 ÷ 2 × (1 + 2)',
    expression: (6 / 2) * (1 + 2),
  },
  {
    display: '8 ÷ 2 × (2 + 2)',
    expression: (8 / 2) * (2 + 2),
  },
  {
    display: '((3 x 7 + 2) × 5) - 8 ÷ 2',
    expression: (3 * 7 + 2) * 5 - 8 / 2,
  },
  {
    display: '5 × 5 × 5 + 5 × 5',
    expression: 5 * 5 * 5 + 5 * 5,
  },
  {
    display: '((((10 + 2) × 4) - 8) ÷ 2) + 6',
    expression: ((10 + 2) * 4 - 8) / 2 + 6,
  },
  {
    display: '7 × 8 + 3 - 15 ÷ 5',
    expression: 7 * 8 + 3 - 15 / 5,
  },
  {
    display: '(3 × 5 + 2 × 7 - 6 ÷ 3) × 4',
    expression: (3 * 5 + 2 * 7 - 6 / 3) * 4,
  },
  {
    display: '2³ × 3²',
    expression: 2 ** 3 * 3 ** 2,
  },
  {
    display: '(2³ + 4²) ÷ (6¹ - 2²)',
    expression: (2 ** 3 + 4 ** 2) / (6 ** 1 - 2 ** 2),
  },
  {
    display: '1 + 1 × 1 ÷ 1',
    expression: 1 + (1 * 1) / 1,
  },
  {
    display: '√((3 + 7) × (1 + 9))',
    expression: Math.sqrt((3 + 7) * (1 + 9)),
  },
  {
    display: '85 ÷ 10 + 30 ÷ 20 + √225',
    expression: 85 / 10 + 30 / 20 + Math.sqrt(225),
  },
  {
    display: '(3 + 7) × 9 ÷ 3 + 7 × 9',
    expression: ((3 + 7) * 9) / 3 + 7 * 9,
  },
  {
    display: '(100 ÷ 2) + (50 × 3)',
    expression: 100 / 2 + 50 * 3,
  },
  {
    display: '(((100 + 80) ÷ 2) × 0.5) + (50 - 25)',
    expression: ((100 + 80) / 2) * 0.5 + 50 - 25,
  },
  {
    display: '(6 × 9) ÷ (3 + 3)',
    expression: (6 * 9) / (3 + 3),
  },
  {
    display: '(3 + 7)² × 10 + (4 × 150) ÷ (2 + 4)',
    expression: (3 + 7) ** 2 * 10 + (4 * 150) / (2 + 4),
  },
  {
    display: '(2 + 9) × √64',
    expression: (2 + 9) * Math.sqrt(64),
  },
  {
    display: '((5 × 5) + (5 + 5)) ÷ (5 ÷ 5)',
    expression: (5 * 5 + (5 + 5)) / (5 / 5),
  },
  {
    display: '(20 + 4) × (30 - 10) ÷ (30 - 15)',
    expression: ((20 + 4) * (30 - 10)) / (30 - 15),
  },
  {
    display: '(7 + 4)² ÷ (3 × 3 + 2)',
    expression: (7 + 4) ** 2 / (3 * 3 + 2),
  },
  {
    display: '(3 + 4) × 7 + (12 ÷ (2 + 1))',
    expression: (3 + 4) * 7 + 12 / (2 + 1),
  },
  {
    display: '(((10 + 2) × 5) - (7 ÷ 7)) × 8 + 6',
    expression: ((10 + 2) * 5 + 7 / 7) * 8 + 6,
  },
  {
    display: '(73 + 37) × 11 - 3 × (46 + 24)',
    expression: (73 + 37) * 11 - 3 * (46 + 24),
  },
  {
    display: '(9 × 8) + 7 ÷ (6 - 5)',
    expression: 9 * 8 + 7 / (6 - 5),
  },
  {
    display: '(6 × 6 + 6) ÷ 6 × (6 + 6)',
    expression: ((6 * 6 + 6) / 6) * (6 + 6),
  },
  {
    display: '(10 + 10 + 10 + 10) × (1 + 1 + 1 + 1)',
    expression: (10 + 10 + 10 + 10) * (1 + 1 + 1 + 1),
  },
  {
    display: '(43 - 15 + 9 × 7 + 8 ÷ 2) ÷ (6 - 1)',
    expression: (43 - 15 + 9 * 7 + 8 / 2) / (6 - 1),
  },
  {
    display: '63 + 12 ÷ 4 × (7 - 2) + 48',
    expression: 63 + (12 / 4) * (7 - 2) + 48,
  },
  {
    display: '(5 × 9 + 3) ÷ 6 - 2',
    expression: (5 * 9 + 3) / 6 - 2,
  },
];

//²³⁴⁵⁶⁷⁸⁹

let calculations2 = [
  {
    display: '(100 + 50) + 30 × (-5)',
    expression: 100 + 50 + 30 * -5,
  },
  {
    display: '√4 × 4 ÷ 2³',
    expression: (Math.sqrt(4) * 4) / 2 ** 3,
  },
  {
    display: '3³ + 3³ × 2',
    expression: 3 ** 3 + 3 ** 3 * 2,
  },
  {
    display: '2 + 2 × 2 ÷ 2',
    expression: 2 + (2 * 2) / 2,
  },
  {
    display: '10 ÷ 10 + 10 + 10',
    expression: 10 / 10 + 10 + 10,
  },
  {
    display: '10 ÷ 10 + 10 ÷ 10',
    expression: 10 / 10 + 10 / 10,
  },
  {
    display: '1² + 1³ + 1⁴ + 1 + 1²',
    expression: 1 ** 2 + 1 ** 3 + 1 ** 4 + 1 ** 5 + 1,
  },
  {
    display: '-10² ÷ 5 × 4 - 1',
    expression: ((-10) ** 2 / 5) * 4 - 1,
  },
  {
    display: '-10² ÷ 5 ÷ 5 + 196',
    expression: (-10) ** 2 / 5 / 5 + 196,
  },
  {
    display: '√64 - √49 × √36 - √25',
    expression: Math.sqrt(64) - Math.sqrt(49) * Math.sqrt(36) - Math.sqrt(25),
  },
  {
    display: '6 ÷ 2 × (1 + 2)',
    expression: (6 / 2) * (1 + 2),
  },
  {
    display: '8 ÷ 2 × (2 + 2)',
    expression: (8 / 2) * (2 + 2),
  },
  {
    display: '((3 x 7 + 2) × 5) - 8 ÷ 2',
    expression: (3 * 7 + 2) * 5 - 8 / 2,
  },
  {
    display: '5 × 5 × 5 + 5 × 5',
    expression: 5 * 5 * 5 + 5 * 5,
  },
  {
    display: '((((10 + 2) × 4) - 8) ÷ 2) + 6',
    expression: ((10 + 2) * 4 - 8) / 2 + 6,
  },
  {
    display: '7 × 8 + 3 - 15 ÷ 5',
    expression: 7 * 8 + 3 - 15 / 5,
  },
  {
    display: '(3 × 5 + 2 × 7 - 6 ÷ 3) × 4',
    expression: (3 * 5 + 2 * 7 - 6 / 3) * 4,
  },
  {
    display: '2³ × 3²',
    expression: 2 ** 3 * 3 ** 2,
  },
  {
    display: '(2³ + 4²) ÷ (6¹ - 2²)',
    expression: (2 ** 3 + 4 ** 2) / (6 ** 1 - 2 ** 2),
  },
  {
    display: '1 + 1 × 1 ÷ 1',
    expression: 1 + (1 * 1) / 1,
  },
  {
    display: '√((3 + 7) × (1 + 9))',
    expression: Math.sqrt((3 + 7) * (1 + 9)),
  },
  {
    display: '85 ÷ 10 + 30 ÷ 20 + √225',
    expression: 85 / 10 + 30 / 20 + Math.sqrt(225),
  },
  {
    display: '(3 + 7) × 9 ÷ 3 + 7 × 9',
    expression: ((3 + 7) * 9) / 3 + 7 * 9,
  },
  {
    display: '(100 ÷ 2) + (50 × 3)',
    expression: 100 / 2 + 50 * 3,
  },
  {
    display: '(((100 + 80) ÷ 2) × 0.5) + (50 - 25)',
    expression: ((100 + 80) / 2) * 0.5 + 50 - 25,
  },
  {
    display: '(6 × 9) ÷ (3 + 3)',
    expression: (6 * 9) / (3 + 3),
  },
  {
    display: '(3 + 7)² × 10 + (4 × 150) ÷ (2 + 4)',
    expression: (3 + 7) ** 2 * 10 + (4 * 150) / (2 + 4),
  },
  {
    display: '(2 + 9) × √64',
    expression: (2 + 9) * Math.sqrt(64),
  },
  {
    display: '((5 × 5) + (5 + 5)) ÷ (5 ÷ 5)',
    expression: (5 * 5 + (5 + 5)) / (5 / 5),
  },
  {
    display: '(20 + 4) × (30 - 10) ÷ (30 - 15)',
    expression: ((20 + 4) * (30 - 10)) / (30 - 15),
  },
  {
    display: '(7 + 4)² ÷ (3 × 3 + 2)',
    expression: (7 + 4) ** 2 / (3 * 3 + 2),
  },
  {
    display: '(3 + 4) × 7 + (12 ÷ (2 + 1))',
    expression: (3 + 4) * 7 + 12 / (2 + 1),
  },
  {
    display: '(((10 + 2) × 5) - (7 ÷ 7)) × 8 + 6',
    expression: ((10 + 2) * 5 + 7 / 7) * 8 + 6,
  },
  {
    display: '(73 + 37) × 11 - 3 × (46 + 24)',
    expression: (73 + 37) * 11 - 3 * (46 + 24),
  },
  {
    display: '(9 × 8) + 7 ÷ (6 - 5)',
    expression: 9 * 8 + 7 / (6 - 5),
  },
  {
    display: '(6 × 6 + 6) ÷ 6 × (6 + 6)',
    expression: ((6 * 6 + 6) / 6) * (6 + 6),
  },
  {
    display: '(10 + 10 + 10 + 10) × (1 + 1 + 1 + 1)',
    expression: (10 + 10 + 10 + 10) * (1 + 1 + 1 + 1),
  },
  {
    display: '(43 - 15 + 9 × 7 + 8 ÷ 2) ÷ (6 - 1)',
    expression: (43 - 15 + 9 * 7 + 8 / 2) / (6 - 1),
  },
  {
    display: '63 + 12 ÷ 4 × (7 - 2) + 48',
    expression: 63 + (12 / 4) * (7 - 2) + 48,
  },
  {
    display: '(5 × 9 + 3) ÷ 6 - 2',
    expression: (5 * 9 + 3) / 6 - 2,
  },
];
