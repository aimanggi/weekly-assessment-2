// 1 POINT
/*
  You given an array and need to create reverse array from it
*/

/*
  Example 

  reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
  reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
  reverse([]) ➞ []
*/

const reverse = (arr) => {
  // Write your code here
  return arr.reverse();
};

const playground2 = () => {
  // Put your array here
  const arr = [1, 2, 3, 4];
  const res = reverse(arr) || "No Result";

  document.getElementById("test-result-2").innerHTML = res;
};

const checkResult2 = () => {
  const test1 = _.isEqual(reverse([1, 2, 3, 4]), [4, 3, 2, 1]);
  const test2 = _.isEqual(reverse([9, 9, 2, 3, 4]), [4, 3, 2, 9, 9]);
  const test3 = _.isEqual(reverse([]), []);

  document.getElementById("score-result-2").innerHTML = `<div>
    <div>Test 1 = ${test1}</div>
    <div>Test 2 = ${test2}</div>
    <div>Test 3 = ${test3}</div>
    ${test1 && test2 && test3 ? `<div class="correct">Well done, all tests are correct!</div>` : ""}
  </div>`;
};
