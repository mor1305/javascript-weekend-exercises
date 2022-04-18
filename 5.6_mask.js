const maskify = (secretAnswer) => {
  return `${"#".repeat(
    secretAnswer.length - secretAnswer.slice(-4).length
  )}${secretAnswer.slice(-4)}`;
};

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));
