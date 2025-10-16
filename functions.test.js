const {
  capitalizedWord,
  reversedString,
  calculator,
  analyzeArray,
} = require("./functions.js");

describe("capitalizedWord", () => {
  test("first test case", () => {
    expect(capitalizedWord("hello")).toBe("Hello");
  });
  test("second test case", () => {
    expect(capitalizedWord("")).toBe("");
  });
});

//reversed string test cases
describe("reversedString", () => {
  test("first reversed test case", () => {
    expect(reversedString("hello")).toBe("olleh");
  });
});

//calculator test cases

describe("calculator", () => {
  test("addition calculator test", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test("subtraction calculator test", () => {
    expect(calculator.sub(4, 3)).toBe(1);
  });
  test("multiplication calculator test case", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });
  test("division calculator test case", () => {
    expect(calculator.divide(8, 2)).toBe(4);
  });
  test("divion by zero test case", () => {
    expect(calculator.divide(2, 0)).toBe(Infinity);
  });
});

describe("analyzeArray Function", () => {
  test("description of what it tests", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
