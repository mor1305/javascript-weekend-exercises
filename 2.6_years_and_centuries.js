const getCenturyFromYear = (year) =>
  year > 0
    ? Math.floor((year - 1) / 100) + 1
    : "Year must by a positive number";

console.log(getCenturyFromYear(1705));
console.log(getCenturyFromYear(1900));
console.log(getCenturyFromYear(1601));
console.log(getCenturyFromYear(2000));
console.log(getCenturyFromYear(000));
console.log(getCenturyFromYear(-1));
