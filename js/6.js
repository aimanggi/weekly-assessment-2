// 2 POINTS

/*
  Create a function that returns an array of strings sorted by length in ascending order.
*/

/*
  Example 

  sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
  sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
  sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]
  sortByLength([]) ➞ []
*/

const sortByLength = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let leastLetter = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].length < arr[leastLetter].length) {
        leastLetter = j;
      }
    }
    [arr[i], arr[leastLetter]] = [arr[leastLetter], arr[i]];
  }
  return arr;
  // Write your code here
};

const playground6 = () => {
  // Put your array here
  const arr = ["hello", "from", "the", "other", "side"];
  const res = sortByLength(arr) || "No Result";

  document.getElementById("test-result-6").innerHTML = res;
};

const checkResult6 = () => {
  const test1 = _.isEqual(sortByLength(["a", "ccc", "dddd", "bb"]), ["a", "bb", "ccc", "dddd"]);
  const test2 = _.isEqual(sortByLength(["apple", "pie", "shortcake"]), ["pie", "apple", "shortcake"]);
  const test3 = _.isEqual(sortByLength(["may", "april", "september", "august"]), ["may", "april", "august", "september"]);

  document.getElementById("score-result-6").innerHTML = `<div>
    <div>Test 1 = ${test1}</div>
    <div>Test 2 = ${test2}</div>
    <div>Test 3 = ${test3}</div>
    ${test1 && test2 && test3 ? `<div class="correct">Well done, all tests are correct!</div>` : ""}
  </div>`;
};
