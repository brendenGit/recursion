//Recursion Exercises

//product of nums
function product(nums, n = 0) {
    if (n === nums.length) return 1;
    let value = nums[n] * product(nums, n + 1);
    return value;
}
let result = product([2, 3, 4]);
console.log(result);


//return length of the longest word
function longestWord(words, i = 0) {
    if (i === words.length) return 0;
    let currWordLength = words[i].length;
    let restOfWordsLength = longestWord(words, i + 1);

    return Math.max(currWordLength, restOfWordsLength);
}
result = longestWord(["hello", "hi", "hola"]);
console.log(result);


//returns a string of every other character
function everyOtherCharacter(string, i = 0) {
    if (i >= string.length) return '';
    let currChar = string[i];
    let restOfChars = everyOtherCharacter(string, i + 2);

    return currChar.concat(restOfChars);
}
result = everyOtherCharacter("hi");
console.log(result);


//returns true/false if the passed in string is a palindrome
function isPalindrome(string, left = 0, right = string.length - 1) {
    if (left >= right) return true;
    if (string[left] !== string[right]) return false;

    return isPalindrome(string, left + 1, right - 1);
}
result = isPalindrome("tacocat");
console.log(result);
result = isPalindrome("tacodog");
console.log(result);


//returns true/false if the passed in string is a palindrome
function findIndex(words, searchWord, i = 0) {
    if (i === words.length) return -1;
    if (words[i] === searchWord) return i;
    return findIndex(words, searchWord, i + 1);
};
let animals = ["duck", "cat", "pony"];
result = findIndex(animals, "cat");  // 1
console.log(result);
result = findIndex(animals, "porcupine");   // -1
console.log(result);


//returns a copy of a string, reversed
function revString(string, i = string.length - 1) {
    if (i == -1) return '';
    let currChar = string[i];
    let restOfChars = revString(string, i - 1);

    return currChar.concat(restOfChars);
}
result = revString("porcupine");
console.log(result);


//returns an array of all the values in the object that are strings
function gatherStrings(obj) {
    let results = [];
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            results = results.concat(gatherStrings(obj[key]));
        } else if (typeof obj[key] === 'string') {
            results.push(obj[key]);
        }
    }
    return results;
}

let nestedObj = {
    firstName: "Lester",
    favoriteNumber: 22,
    moreData: {
        lastName: "Testowitz"
    },
    funFacts: {
        moreStuff: {
            anotherNumber: 100,
            deeplyNestedString: {
                almostThere: {
                    success: "you made it!"
                }
            }
        },
        favoriteString: "nice!"
    }
};

result = gatherStrings(nestedObj);
console.log(result);