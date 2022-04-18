const countingDuplicates = (str) => {
  lowerCaseStr = str.toLowerCase();
  let counter = {};
  for (let letter of lowerCaseStr) {
    counter[letter] = counter[letter] + 1 || 1;
  }
  let filtered = Object.entries(counter).filter(([key, value]) => value >= 2);
  let onlyDup = Object.fromEntries(filtered);
  return onlyDup;
};

console.log(countingDuplicates("abcde"));
console.log(countingDuplicates("aabbcde"));
console.log(countingDuplicates("aabBcde"));
console.log(countingDuplicates("indivisibility"));
console.log(countingDuplicates("Indivisibilities"));
console.log(countingDuplicates("aA11"));
console.log(countingDuplicates("ABBA"));
