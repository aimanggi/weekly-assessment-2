// 7 POINTS
// M
/*
  Write a function that takes in a string and for each character, returns the distance to the nearest vowel in the string. 
  If the character is a vowel itself, return 0.
*/

/*
  Example 

  distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]
  distanceToNearestVowel("aaaaa") ➞ [1, 0, 1, 2, 3]
  distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]
  distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]
*/

const distanceToNearestVowel = (arr) => {
  // Write your code here
};

const playground9 = () => {
  // Put your word here
  // M
  const word = "abcde";
  const res = distanceToNearestVowel(word) || "No Result";

  document.getElementById("test-result-9").innerHTML = res;
};

const checkResult9 = () => {
  const test1 = _.isEqual(distanceToNearestVowel("aaaaa"), [0, 0, 0, 0, 0]);
  const test2 = _.isEqual(distanceToNearestVowel("aaaaa"), [1, 0, 1, 2, 3]);
  const test3 = _.isEqual(
    distanceToNearestVowel("abcdabcd"),
    [0, 1, 2, 1, 0, 1, 2, 3]
  );
  const test4 = _.isEqual(
    distanceToNearestVowel("abcdabcd"),
    [2, 1, 0, 1, 1, 0, 1]
  );

  document.getElementById("score-result-9").innerHTML = `<div>
    <div>Test 1 = ${test1}</div>
    <div>Test 2 = ${test2}</div>
    <div>Test 3 = ${test3}</div>
    <div>Test 4 = ${test4}</div>
    ${
      test1 && test2 && test3 && test4
        ? `<div class="correct">Well done, all tests are correct!</div>`
        : ""
    }
  </div>`;
};
