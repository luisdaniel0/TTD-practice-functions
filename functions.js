function capitalizedWord(word) {
  if (word === "") {
    return "";
  }
  const split = word.split(""); // ['h','e','l','l','o']
  const slice = split.slice(0, 1); // ['h']
  const capitalizedLetter = slice[0].toUpperCase(); //H
  split.splice(0, 1, capitalizedLetter); //['H','e','l','l','o']
  return split.join(""); //Hello
}

function reversedString(word) {
  const array = word.split("");
  const reverseArray = array.reverse();

  return reverseArray.join("");
}

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    if (b === 0) {
      return Infinity;
    }
    return a / b;
  },
};

function analyzeArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return {
    average: total / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

module.exports = { reversedString, capitalizedWord, calculator, analyzeArray };
