const yesOrNo = (input) =>
  typeof input === "boolean"
    ? input
      ? "Yes"
      : "No"
    : "The function expects a boolean value";

console.log(yesOrNo(1 > 3));
