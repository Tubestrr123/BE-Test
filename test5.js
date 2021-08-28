/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  if(words.length == 0) {
    return "";
  }

  let words2 = words[0];

  for(let i = 1; i < words.length; i++) {
    while(words[i].indexOf(words2) != 0) {
      words2 = words2.substring(0, words2.length - 1);
    }
  }
  return words2;
}

console.log(result(words));
