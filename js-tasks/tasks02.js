//Messi Goals https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//Make negative    https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  if (num <= 0) {
    return num;
  } else {
    return -num;
  }
}

//Game Move https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move(position, roll) {
  return position + roll * 2;
}

//Personalized Message https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

//Keep Hydrated https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
  return Math.floor(time / 2);
}

//Opposites Attract https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 !== 0;
}

// Додаткові завдання

// What's the real floor https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
  if (n <= 0) return n;
  if (n <= 13) return n - 1;
  return n - 2;
}

// https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript
const stringToNumber = function (str) {
  let number = parseInt(str);
  return number;
};

// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript
function findNeedle(haystack) {
  let index = haystack.indexOf("needle");
  return `found the needle at position ${index}`;
}

// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
function sumArray(array) {
  if (!Array.isArray(array) || array.length < 3) {
    return 0;
  }
  let min = Math.min(...array);
  let max = Math.max(...array);
  let minIndex = array.indexOf(min);
  array.splice(minIndex, 1);
  let maxIndex = array.indexOf(max);
  array.splice(maxIndex, 1);
  return array.reduce((sum, num) => sum + num, 0);
}
// https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7/train/javascript
function makeUpperCase(str) {
  return str.toUpperCase();
}
