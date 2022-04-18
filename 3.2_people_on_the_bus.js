const numberOfPeopleInTheBus = (arr) => {
  let numberOfPeople = 0;
  for (let stop of arr) {
    numberOfPeople = numberOfPeople + stop[0] - stop[1];
  }
  return numberOfPeople;
};

console.log(
  numberOfPeopleInTheBus([
    [5, 0],
    [7, 4],
    [2, 5],
  ])
);
