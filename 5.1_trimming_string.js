const trimmingString = (str) => (str.length <= 2 ? str : str.slice(1, -1));

console.log(trimmingString("mmorr"));
