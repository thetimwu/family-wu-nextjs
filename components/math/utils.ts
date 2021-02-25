export function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function getRandomOperation(num: 2 | 4) {
  const operations = [" + ", " - ", " * ", " / "];
  return operations[getRandomInt(num)];
}
