const organizeStrings = (word1, word2) => {
  let letters = word1.split("").concat(word2.split(""));
  let uniqLetters = [...new Set(letters)];
  return uniqLetters.sort().join("");
};

console.log(organizeStrings("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
