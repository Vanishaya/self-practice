// 1.
function processNumbers(arr) {
  return arr
    .map(num => num * num)         
    .filter(num => num % 2 !== 0)  
    .reduce((sum, num) => sum + num, 0); 
}
console.log( processNumbers([1, 2, 3, 4])); // 10
console.log( processNumbers([5, 6, 7, 8])); // 74

// 2.
function populateArray(length, value) {
  return Array(length).fill(value);
}
console.log(populateArray(3, 'a') ); // [ 'a', 'a', 'a' ]
console.log( populateArray(5, 0) ); // [ 0, 0, 0, 0, 0 ]

// 3.
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}
console.log( removeFalsyValues([0, 1, false, 2, '', 3])); // [1, 2, 3]
console.log(removeFalsyValues(['a', '', 'b', null, 'c'])); // ['a', 'b', 'c’]
console.log(removeFalsyValues([null, undefined, 'A'])); // ['A']

// 4.
function removeDuplicateWords(sentence) {
  if (!sentence) return "";

  const words = sentence.split(" ");  
  const seen = new Set();             
  const result = [];

  for (let word of words) {
    const lowerWord = word.toLowerCase(); 
    if (!seen.has(lowerWord)) {
      seen.add(lowerWord);  
      result.push(word);   
  }

  return result.join(" ");  
}
}
console.log(removeDuplicateWords("This is a test This test is easy."));  // "This"
console.log(removeDuplicateWords("Hello hello HELLO world!")); // "Hello"
console.log(removeDuplicateWords("One two two three three three")); // "One"
console.log(removeDuplicateWords("")); // ""
console.log(removeDuplicateWords(null)); // ""

// 5.
function getFreqOfWords(sentence) {
  if (sentence == null) return undefined;

  const words = sentence.toLowerCase().split(" ").filter(w => w !== "");

  const freq = {};

  for (let word of words) {
    freq[word] = (freq[word] || 0) + 1;
  }

  return freq;
}
console.log(getFreqOfWords('Today is present and present is your gift'))
 //{ today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
console.log(getFreqOfWords('Do you best just do it'));
 //{ do: 2, you: 1, best: 1, just: 1, it: 1 }
console.log(getFreqOfWords(null)) //undefined
console.log(getFreqOfWords(undefined)) // undefined