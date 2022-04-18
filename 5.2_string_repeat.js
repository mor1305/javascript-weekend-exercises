const repeatStr = (str, count) => {
  return new Array(count).fill(str).join("");
};

console.log(repeatStr("mor", 2));
