//https:www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(" ");
}

// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
function grow(x) {
  return x.reduce((acc, curr) => acc * curr, 1);
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
