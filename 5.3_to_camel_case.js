const toCamelCase = (str) => {
  wordsArr = str.replaceAll("-", "_").split("_");
  for (i = 1; i < wordsArr.length; i++) {
    wordsArr[i] = wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1);
  }
  return wordsArr.join("");
};

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
