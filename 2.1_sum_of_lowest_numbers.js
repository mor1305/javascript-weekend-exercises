const sumOfLowestNumbers = (numbers) => {
  const ascSortedNumbers = numbers.slice().sort((a, b) => a - b);
  return ascSortedNumbers[0] + ascSortedNumbers[1];
};

console.log(sumOfLowestNumbers([19, 5, 42, 2, 77]));
console.log(sumOfLowestNumbers([10, 343445353, 3453445, 3453545353453]));
