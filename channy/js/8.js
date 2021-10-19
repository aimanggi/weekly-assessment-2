// 4 POINTS

/*
 Write a function that does the following for the given values: add, subtract, divide and multiply. 
 This is simply referred to as the basic arithmetic operations. 
 The variables have to be defined, but in this challenge, it will be defined for you.
*/

/*
  Example 

  operation("1",  "2",  "add" ) ➞ 3
  operation("4",  "5",  "subtract") ➞ -1
  operation("6",  "3",  "divide") ➞ 2

*/

const operation = (num1, num2, operator) => {
  // Write your code here
  switch (operator) {
    case "add":
      {
        return parseInt(num1) + parseInt(num2);
      }
      break;
    case "subtract":
      {
        return parseInt(num1) - parseInt(num2);
      }
      break;
    case "divide":
      {
        return parseInt(num1) / parseInt(num2);
      }
      break;
    case "multiply":
      {
        return parseInt(num1) * parseInt(num2);
      }
      break;
  }
};

const playground8 = () => {
  // Put your example here
  const res = operation("2", "3", "add") || "No Result";

  document.getElementById("test-result-8").innerHTML = res;
};

const checkResult8 = () => {
  const test1 = operation("1", "2", "add") === 3;
  const test2 = operation("4", "5", "subtract") === -1;
  const test3 = operation("6", "3", "divide") === 2;

  document.getElementById("score-result-8").innerHTML = `<div>
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
