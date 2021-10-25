// 7 POINTS

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

const distanceToNearestVowel = (str) => {
  const s = str.toLowerCase();

  const nearest = (arr = [], el) =>
    arr.reduce((acc, val) => Math.min(acc, Math.abs(val - el)), Infinity);

  const vowelIndex = [];
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u"
    ) {
      vowelIndex.push(i);
    }
  }
  return s.split("").map((el, ind) => nearest(vowelIndex, ind));
};

const playground9 = () => {
  // Put your word here
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
