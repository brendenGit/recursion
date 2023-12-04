//Recursion Exercises

//product of nums
function product(nums, n=0) {
    if(n === nums.length) return 1;
    let value = nums[n] * product(nums, n + 1);
    return value;
}
let result = product([2,3,4]);
console.log(result);


//return length of the longest word
function longestWord(words, i=0) {
    if(i === words.length) return 0;
    let currWordLength = words[i].length;
    let restOfWordsLength = longestWord(words, i + 1);

    return Math.max(currWordLength, restOfWordsLength);
}
result = longestWord(["hello","hi", "hola"]);
console.log(result);


//returns a string of every other character
function everyOtherCharacter(string, i=0) {
    if(i >= string.length) return '';
    let currChar = string[i];
    let restOfChars = everyOtherCharacter(string, i + 2);

    return currChar.concat(restOfChars);
}
result = everyOtherCharacter("hi");
console.log(result);


//returns true/false if the passed in string is a palindrome
function isPalindrome(string, left = 0, right=string.length - 1) {
    if(left >= right) return true;
    if(string[left] !== string[right]) return false;

    return isPalindrome(string, left + 1, right - 1);
}
result = isPalindrome("tacocat");
console.log(result);
result = isPalindrome("tacodog");
console.log(result);