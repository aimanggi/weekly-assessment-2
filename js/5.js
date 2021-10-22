// 2 POINTS

/*
  When resistors are connected together in series, 
  the same current passes through each resistor in the chain and the total resistance, 
  RT, of the circuit must be equal to the sum of all the individual resistors added together. 
  That is: R1 + R2 + R3
  Return should be string with ohm unit
*/

/*
  Example 

  seriesResistance([1, 5, 6, 3]) ➞ "15 ohms"
  seriesResistance([16, 3.5, 6]) ➞ "25.5 ohms"
  seriesResistance([0.5, 0.5]) ➞ "1.0 ohm"

*/

const seriesResistance = (arr) => {
  // Write your code here
  let result = arr.reduce((a, b) => {
    return(a + b)
  })
  return result > 1 ? `${result} ohms` : `${result.toFixed(1)} ohm`;
};

// console.log(seriesResistance([1, 5, 6, 3]))
// console.log(seriesResistance([16, 3.5, 6]))
// console.log(seriesResistance([0.5, 0.5]))
const playground5 = () => {
  // Put your array here
  const arr = [1, 5, 6, 3];
  const res = seriesResistance(arr) || "No Result";

  document.getElementById("test-result-5").innerHTML = res;
};

const checkResult5 = () => {
  const test1 = seriesResistance([1, 5, 6, 3]) === "15 ohms";
  const test2 = seriesResistance([16, 3.5, 6]) === "25.5 ohms";
  const test3 = seriesResistance([0.5, 0.5]) === "1.0 ohm";

  document.getElementById("score-result-5").innerHTML = `<div>
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
