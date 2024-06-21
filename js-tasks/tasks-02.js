//https:www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(" ");
}

// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

// https://www.codewars.com/kata/577a98a6ae28071780000989/solutions/javascript
const min = function (list) {
  return Math.min(...list);
};

const max = function (list) {
  return Math.max(...list);
};

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  return toReturn === "value"
    ? Math.min(...arr)
    : arr.indexOf(Math.min(...arr));
}

// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
function grow(x) {
  return x.reduce((acc, curr) => acc * curr);
}

// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
const summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
function betterThanAverage(classPoints, yourPoints) {
  const sum = classPoints.reduce((acc, curr) => acc + curr, 0);
  return yourPoints > sum / classPoints.length;
}

//Double Integer https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
  return i * 2;
}

//Twice as old https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(sonYearsOld * 2 - dadYearsOld);
}

//Return n-th even number https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n) {
  return n * 2 - 2;
}

//What's the real floor https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

function getRealFloor(n) {
  if (n <= 0) return n;
  return n > 13 ? n - 2 : n - 1;
}

//Clock https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s) {
  return ((h * 60 + m) * 60 + s) * 1000;
}

//Is n divisible by x and y https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}
