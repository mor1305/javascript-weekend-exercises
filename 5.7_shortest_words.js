const ShortestWord = (str) =>
  str
    .split(" ")
    .slice()
    .sort((a, b) => b.length - a.length)[0].length;

console.log(
  ShortestWord("the longest word is supercalifragilisticexpialidocious")
);
