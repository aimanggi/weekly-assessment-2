// 1 POINT

/*
  You are counting points for a basketball game,
  given the amount of 2-pointers scored and 3-pointers scored,
  find the final points for the team and return that value.
*/

/*
  Example 

  points(1, 1) ➞ 5
  points(7, 5) ➞ 29
  points(38, 8) ➞ 100
*/

const points = (a, b) => {
<<<<<<< HEAD
  // Write your code here
=======
>>>>>>> 0210ae3825243add0d4c98bccddf722f17a22f9d
  return a * 2 + b * 3;
};

function playground1() {
  // Put your score here
  const score = points(2, 3) || "No Result";

  document.getElementById("test-result").innerHTML = score;
}

const checkResult1 = () => {
  /*
  Example 

  points(1, 1) ➞ 5
  points(7, 5) ➞ 29
  points(38, 8) ➞ 100
*/
  const test1 = points(1, 1) === 5;
  const test2 = points(7, 5) === 29;
  const test3 = points(38, 8) === 100;

  document.getElementById("score-result").innerHTML = `<div>
    <div>Test 1 = ${test1}</div>
    <div>Test 2 = ${test2}</div>
    <div>Test 3 = ${test3}</div>
    ${test1 && test2 && test3 ? `<div class="correct">Well done, all tests are correct!</div>` : ""}
  </div>`;
};
