const binary_to_integer = (binaryArr) => {
  let intNum = 0;
  for (let num of binaryArr) {
    intNum = intNum * 2 + num;
  }
  return intNum;
};

// Answer should be 1
console.log(binary_to_integer([0, 0, 0, 1]));

// Answer should be 15
console.log(binary_to_integer([1, 1, 1, 1]));

// Answer should be 1572
console.log(binary_to_integer([1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0]));
