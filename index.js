function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = reverse(word);
  if(reverseWord === word) {
    return true;
  }
  else {
    return false;
  }
}

function reverse(word) {
  let reversed = ''
  for(let i = 0; i < word.length; i++) {
    reversed = reversed + word.charAt(word.length - 1 - i);
  }
  return reversed;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
