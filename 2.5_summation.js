const sumFromOneToNum = (num) =>
  Array.from(new Array(num).fill(1), (element, index) => index + 1).reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

console.log(sumFromOneToNum(2));
console.log(sumFromOneToNum(8));
console.log(sumFromOneToNum(1));
