const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

export function getRandom() {
  return Math.floor(Math.random() * hex.length);
}

export function getRandomHex() {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandom()];
  }
  return hexColor;
}
