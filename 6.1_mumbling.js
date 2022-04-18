const mumbling = (str) => {
  let newStr = "";
  for (i = 0; i < str.length; i++) {
    newStr += str[i].toUpperCase() + str[i].toLowerCase().repeat(i) + "-";
  }
  return newStr.slice(0, -1);
};

console.log(mumbling("abcd"));
console.log(mumbling("RqaEzty"));
console.log(mumbling("cwAt"));
