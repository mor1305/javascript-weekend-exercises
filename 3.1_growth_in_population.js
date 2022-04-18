const nb_year = (p0, percent, aug, p) => {
  let countYears = 0;
  if (
    typeof aug === "number" &&
    (percent > 0) | (percent === null) &&
    p0 > 0 &&
    p > 0
  ) {
    while (p > p0) {
      countYears++;
      p0 = p0 * (1 + percent / 100) + aug;
    }
  } else {
    console.log("Invalid data");
  }
  return countYears;
};

console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));
console.log(nb_year(-5, 2.5, 10000, 2000000));
