// 2 POINTS
// A
/*
  Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
*/

/*
  Example 

  minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
  minMax([2334454, 5]) ➞ [5, 2334454]
  minMax([1]) ➞ [1, 1]
*/

const minMax = (arr) => {
  // Write your code here

  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  let minMax = [min, max];
  return minMax;
};

const playground3 = () => {
  // Put your array here
  // A
  const arr = [1, 2, 3, 4];
  const res = minMax(arr) || "No Result";

  document.getElementById("test-result-3").innerHTML = res;
};

const checkResult3 = () => {
  const test1 = _.isEqual(minMax([1, 2, 3, 4, 5]), [1, 5]);
  const test2 = _.isEqual(minMax([2334454, 5]), [5, 2334454]);
  const test3 = _.isEqual(minMax([1]), [1, 1]);

  document.getElementById("score-result-3").innerHTML = `<div>
    <div>Test 1 = ${test1}</div>
    <div>Test 2 = ${test2}</div>
    <div>Test 3 = ${test3}</div>
    ${
      test1 && test2 && test3
        ? `<div class="correct">Well done, all tests are correct!</div>`
        : ""
    }
  </div>`;
};
