function tribonacci(signature, n) {
  let tribonacciSeq = signature;
  for (i = 3; i < n; i++) {
    tribonacciSeq.push(
      tribonacciSeq[i - 1] + tribonacciSeq[i - 2] + tribonacciSeq[i - 3]
    );
  }

  return tribonacciSeq.slice(0, n);
}
console.log(tribonacci([1, 1, 1], 7));
