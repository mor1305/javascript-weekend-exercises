const findUniqueNumber = (numbers) => {
  let uniqueNumber = null;
  for (let i = 0; i < numbers.length; i++) {
    if (uniqueNumber != null) {
      break;
    } else if (
      numbers[numbers.length - 1] != numbers[numbers.length - 2] &&
      numbers[numbers.length - 1] != numbers[numbers.length - 3]
    ) {
      uniqueNumber = numbers[numbers.length - 1];
      break;
    } else if (numbers[i] != numbers[i + 1] && numbers[i] != numbers[i + 2]) {
      uniqueNumber = numbers[i];
      break;
    } else {
      continue;
    }
  }
  return uniqueNumber;
};

console.log(findUniqueNumber([1, 1, 1, 2, 1, 1]));
console.log(findUniqueNumber([3, 1, 1, 1, 1]));
console.log(findUniqueNumber([1, 1, 1, 1, 6]));
console.log(findUniqueNumber([1, 1, 5]));
console.log(findUniqueNumber([0, 0, 0.55, 0, 0]));
