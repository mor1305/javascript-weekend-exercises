const toWeirdCase = (str) => {
  wordsArr = str
    .toLowerCase()
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((letter, index) =>
          index % 2 === 0 ? letter.toUpperCase() : letter
        )
        .join("")
    );

  return wordsArr.join(" ");
};

console.log(toWeirdCase("Weird string case"));
