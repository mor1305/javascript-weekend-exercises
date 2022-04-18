const abbreviateTwoWords = (str) =>
  str
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(".");

console.log(abbreviateTwoWords("mor menashe"));
