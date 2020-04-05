/*
TITLE: 
  Where my anagrams at?

NOTE: 
  What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

INSTRUCTIONS: 
  Write a function that will find all the anagrams of a word from a list.
  You will be given two inputs a word and an array with words.
  You should return an array of all the anagrams or an empty array if there are none. 

EXAMPLES:
  anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
  anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
  anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

Valid inputs: 
  'abba' & 'baab' == true
  'abba' & 'bbaa' == true

Invalid inputs:
  'abba' & 'abbba' == false
  'abba' & 'abca' == false

LINK:
  https://www.codewars.com/kata/599b7383a5c1fe275c0000be
*/

const anagrams = (word, words) => {
  const getLetters = (word) => [...word].sort().join("");
  const letters = getLetters(word);

  const coincidences = words
    .map((incomingWord) => {
      const incomingWordLetters = getLetters(incomingWord);

      if (letters === incomingWordLetters) return incomingWord;
      return;
    })
    .filter((word) => Boolean(word));

  return coincidences;
};

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));
// => ['aabb', 'bbaa']
console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]));
// => ['carer', 'racer']
console.log(anagrams("laser", ["lazing", "lazy", "lacer"]));
// => []
