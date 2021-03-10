export function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export const operations = ["+", "-", "*", "/"];

export function getRandomOperation(num: 2 | 4) {
  return operations[getRandomInt(num)];
}

export function getOperation(num: 0 | 1 | 2 | 3) {
  return operations[num];
}
