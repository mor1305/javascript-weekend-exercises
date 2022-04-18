const theNextPerfectSquaer = (square) =>
  Number.isInteger(Math.sqrt(square)) ? (Math.sqrt(square) + 1) ** 2 : -1;

// The Answer Shold be 144
console.log(theNextPerfectSquaer(121));

// The Answer Shold be 676
console.log(theNextPerfectSquaer(625));

// The Answer Shold be -1
console.log(theNextPerfectSquaer(114));
