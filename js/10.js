// 4 POINTS

/*
 Write a recursive function that will return the longest word in a sentence. 
 In cases where more than one word is found, return the first one.

 Note: 
  - Special characters and symbols don't count as part of the word.
  - Return the longest word found in lowercase letters.
  - You are expected to solve this challenge via a recursive approach. If you not using recursive will deduct 75% of score
*/

/*
  Example 

  findLongest("I will and ever will be gratefully and perpetually loving you Tesh!😘") ➞ "perpetually"
  findLongest("A thing of beauty is a joy forever.") ➞ "forever" 
  findLongest("Forgetfulness is by all means powerless!") ➞ "forgetfulness"
*/

const findLongest = (sentence, word) => {
  // This question should using recursive method

  const cleanSentence = sentence.toLowerCase().replace(/[^a-z ]/, "");

  var wordsList = cleanSentence.split(" ");
  var lastWord = wordsList.pop();
  var longestWord = lastWord.length > word.length ? lastWord : word;
  if (cleanSentence.length > 0) {
    var newSentence = wordsList.join(" ");
    // it will call same function again until all the word checked
    return findLongest(newSentence, longestWord);
  } else {
    return longestWord;
  }
};

const playground10 = () => {
  // Put your sentence here
  const sentence =
    "I will and ever will be gratefully and perpetually loving you Tesh!😘";
  const res = findLongest(sentence, "") || "No Result";

  document.getElementById("test-result-10").innerHTML = res;
};

const checkResult10 = () => {
  const test1 =
    findLongest(
      "I will and ever will be gratefully and perpetually loving you Tesh!😘",
      ""
    ) === "perpetually";
  const test2 =
    findLongest("A thing of beauty is a joy forever.", "") === "forever";
  const test3 =
    findLongest("Forgetfulness is by all means powerless!", "") ===
    "forgetfulness";

  document.getElementById("score-result-10").innerHTML = `<div>
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
