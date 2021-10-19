// 2 POINTS
// N
/*
  You are given an array of integers having both negative and positive values, 
  except for one integer which can be negative or positive. Create a function to find out that integer.
*/

/*
  Example 

  lonelyInteger([1, -1, 2, -2, 3]) ➞ 3
  3 has no matching negative appearance.

  lonelyInteger([-3, 1, 2, 3, -1, -4, -2]) ➞ -4
  -4 has no matching positive appearance.

  lonelyInteger([-9, -105, -9, -9, -9, -9, 105]) ➞ -9
*/

const lonelyInteger = (arr) => {
  // Write your code here

  let lonely = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(arr[i] * -1)) {
      lonely.push(arr[i]);
    }
  }
  return lonely[0];
};

const playground4 = () => {
  // Put your array here
  // N
  const arr = [1, -1, 2, -2, 3];
  const res = lonelyInteger(arr) || "No Result";

  document.getElementById("test-result-4").innerHTML = res;
};

const checkResult4 = () => {
  const test1 = lonelyInteger([1, -1, 2, -2, 3]) === 3;
  const test2 = lonelyInteger([-3, 1, 2, 3, -1, -4, -2]) === -4;
  const test3 = lonelyInteger([-9, -105, -9, -9, -9, -9, 105]) === -9;

  document.getElementById("score-result-4").innerHTML = `<div>
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
