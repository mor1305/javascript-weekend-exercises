const fibonacciSequence = (start, n) => {
  if (typeof n === "number" && n > 0) {
    if (start === 0) {
      let arr = [0, 1];
      for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
      }
      return arr[n - 1];
    } else if (start === 1) {
      let arr = [1, 1];
      for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
      }
      return arr[n - 1];
    } else {
      return "Fibonacci Sequence must start with 0 or 1";
    }
  } else {
    return "invalid data";
  }
};

console.log(fibonacciSequence(0, 3));
console.log(fibonacciSequence(1, 3));
console.log(fibonacciSequence(2, 2));
console.log(fibonacciSequence(0, 0));
