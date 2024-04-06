
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// let word = prompt("Введите слово");
// let reversedWord = reverseString(word);
// console.log( reversedWord);

function repeatWordByLetterCount(word) {
    let letterCount = word.length;
    let repeatedWord = word.repeat(letterCount);
    return repeatedWord;
  }
  let inputWord = "fair";
  let result = repeatWordByLetterCount(inputWord);
  console.log(result); 