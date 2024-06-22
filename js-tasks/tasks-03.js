// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
function findSmallestInt(arr) {
  return Math.min(...arr);
}

// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  const arr = [];
  for (let key in obj) {
    if (key.length === 5) arr.push(key);
    if (obj[key].length === 5) arr.push(obj[key]);
  }
  return arr;
}

// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
