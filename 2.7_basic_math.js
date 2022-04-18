const calculate = (operationSign, num1, num2) => {
  switch (operationSign) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
    default:
      return "Invalid operation sign";
  }
};
console.log(calculate("+", 4, 7));
console.log(calculate("-", 15, 18));
console.log(calculate("/", 49, 7));
console.log(calculate("*", 5, 5));
console.log(calculate(" ", 4, 7));
