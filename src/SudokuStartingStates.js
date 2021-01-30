const easy1 = [
  ["-", "4", "-", "-", "-", "-", "-", "1", "-"],
  ["2", "3", "1", "6", "4", "7", "-", "-", "8"],
  ["-", "-", "9", "-", "-", "-", "3", "4", "2"],
  ["-", "-", "-", "2", "5", "4", "-", "-", "3"],
  ["-", "5", "-", "-", "-", "-", "-", "2", "-"],
  ["3", "-", "-", "9", "6", "1", "-", "-", "-"],
  ["6", "9", "3", "-", "-", "-", "2", "-", "-"],
  ["5", "-", "-", "4", "9", "6", "7", "3", "1"],
  ["-", "1", "-", "-", "-", "-", "-", "9", "-"],
];

const easy2 = [
  ["8", "-", "4", "-", "7", "9", "6", "2", "-"],
  ["6", "1", "-", "-", "-", "-", "-", "-", "-"],
  ["7", "2", "9", "3", "-", "-", "-", "-", "-"],
  ["1", "3", "-", "7", "-", "-", "-", "8", "-"],
  ["-", "-", "-", "2", "1", "8", "-", "-", "-"],
  ["-", "9", "-", "-", "-", "6", "-", "5", "1"],
  ["-", "-", "-", "-", "-", "3", "2", "7", "9"],
  ["-", "-", "-", "-", "-", "-", "-", "6", "5"],
  ["-", "6", "2", "5", "8", "-", "1", "-", "4"],
];

const easy3 = [
  ["1", "7", "-", "-", "-", "3", "-", "-", "-"],
  ["-", "-", "-", "8", "-", "-", "-", "6", "-"],
  ["-", "-", "2", "-", "4", "-", "1", "-", "9"],
  ["8", "1", "7", "6", "-", "-", "-", "-", "3"],
  ["3", "6", "9", "1", "-", "4", "8", "5", "2"],
  ["5", "-", "-", "-", "-", "9", "6", "7", "1"],
  ["2", "-", "3", "-", "9", "-", "7", "-", "-"],
  ["-", "4", "-", "-", "-", "1", "-", "-", "-"],
  ["-", "-", "-", "7", "-", "-", "-", "4", "6"],
];

const medium1 = [
  ["-", "-", "9", "-", "-", "3", "-", "-", "-"],
  ["-", "-", "-", "5", "4", "7", "9", "-", "-"],
  ["-", "3", "-", "2", "-", "-", "-", "-", "1"],
  ["-", "-", "-", "-", "-", "4", "3", "9", "-"],
  ["-", "4", "5", "-", "2", "-", "1", "7", "-"],
  ["-", "9", "7", "6", "-", "-", "-", "-", "-"],
  ["9", "-", "-", "-", "-", "1", "-", "4", "-"],
  ["-", "-", "4", "7", "5", "6", "-", "-", "-"],
  ["-", "-", "-", "4", "-", "-", "5", "-", "-"],
];

const medium2 = [
  ["-", "2", "-", "-", "6", "-", "-", "4", "-"],
  ["3", "-", "1", "-", "-", "-", "-", "6", "-"],
  ["-", "7", "9", "8", "-", "-", "-", "-", "-"],
  ["-", "-", "2", "1", "3", "5", "-", "-", "-"],
  ["-", "1", "-", "-", "9", "-", "-", "8", "-"],
  ["-", "-", "-", "4", "2", "8", "5", "-", "-"],
  ["-", "-", "-", "-", "-", "4", "1", "3", "-"],
  ["-", "3", "-", "-", "-", "-", "8", "-", "9"],
  ["-", "6", "-", "-", "1", "-", "-", "2", "-"],
];

const medium3 = [
  ["-", "8", "3", "5", "-", "-", "4", "-", "1"],
  ["9", "-", "-", "-", "-", "1", "-", "-", "-"],
  ["-", "1", "2", "8", "6", "7", "-", "-", "-"],
  ["5", "2", "-", "-", "-", "-", "-", "-", "-"],
  ["1", "-", "4", "-", "-", "-", "3", "-", "2"],
  ["-", "-", "-", "-", "-", "-", "-", "9", "5"],
  ["-", "-", "-", "3", "9", "8", "7", "5", "-"],
  ["-", "-", "-", "1", "-", "-", "-", "-", "8"],
  ["8", "-", "5", "-", "-", "4", "2", "1", "-"],
];

const hard1 = [
  ["-", "-", "-", "-", "-", "7", "-", "-", "3"],
  ["2", "1", "6", "-", "-", "-", "-", "9", "-"],
  ["-", "7", "4", "-", "-", "1", "-", "5", "-"],
  ["-", "-", "-", "-", "-", "-", "9", "-", "1"],
  ["-", "3", "-", "-", "7", "-", "-", "6", "-"],
  ["1", "-", "5", "-", "-", "-", "-", "-", "-"],
  ["-", "5", "-", "6", "-", "-", "7", "4", "-"],
  ["-", "4", "-", "-", "-", "-", "8", "3", "9"],
  ["8", "-", "-", "3", "-", "-", "-", "-", "-"],
];

const hard2 = [
  ["-", "-", "-", "-", "7", "6", "5", "-", "9"],
  ["7", "-", "-", "-", "-", "9", "3", "-", "-"],
  ["-", "-", "1", "3", "-", "-", "-", "-", "-"],
  ["3", "8", "-", "-", "-", "7", "-", "-", "-"],
  ["-", "7", "-", "-", "-", "-", "-", "2", "-"],
  ["-", "-", "-", "6", "-", "-", "-", "9", "3"],
  ["-", "-", "-", "-", "-", "3", "1", "-", "-"],
  ["-", "-", "5", "4", "-", "-", "-", "-", "8"],
  ["4", "-", "2", "7", "5", "-", "-", "-", "-"],
];

const hard3 = [
  ["3", "-", "4", "-", "-", "-", "-", "-", "-"],
  ["-", "2", "-", "4", "-", "-", "1", "6", "-"],
  ["-", "1", "-", "-", "-", "9", "-", "-", "3"],
  ["2", "-", "-", "-", "8", "-", "9", "1", "7"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["4", "3", "8", "-", "7", "-", "-", "-", "2"],
  ["9", "-", "-", "1", "-", "-", "-", "8", "-"],
  ["-", "7", "3", "-", "-", "5", "-", "4", "-"],
  ["-", "-", "-", "-", "-", "-", "7", "-", "6"],
];

export const easyGames = [easy1, easy2, easy3];
export const mediumGames = [medium1, medium2, medium3];
export const hardGames = [hard1, hard2, hard3];
