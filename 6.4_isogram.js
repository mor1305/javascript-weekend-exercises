const isIsogram = (word) => {
  let letters = word.toLowerCase().split("");
  return letters.join("") === [...new Set(letters)].join("");
};

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
