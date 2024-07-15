// Example 1 [test]
let fruits = 'apple, mango, cherry, dates';
let pattern= /Apple/;
// console.log(pattern.test(fruits)); // false
// console.log(/mango/.test(fruits)); // true

// Example 2 [match] (/g => global)
let team1 = 'Rohit, Rohit, Rohit';
let team2 = 'Virat, Rohit, Gill, Rohit';
let player1 = /Rohit/g;
let player2 = /Rohit/;
// console.log(team1.match(player1)); // Array ['Rohit', 'Rohit', 'Rohit']
// console.log(team2.match(player2)); // Array

// Example 3 (\d => digits)
let fruitsInKg = 'apple, apple 2 kg, apple, 7, banana 1 kg';
// console.log(fruitsInKg.match(/\d/)); // Array
// console.log(fruitsInKg.match(/\d/g)); // Array ['2', '7', '1']

// Example 4 (/i => case-insenitive)
let names = "Suraj, suraj, sURAJ, SURAJ";
// console.log(names.match(/sUraj/)); // null
// console.log(names.match(/sUraj/i)); // Array
// console.log(names.match(/sUraj/ig)); // Array [ 'Suraj', 'suraj', 'sURAJ', 'SURAJ' ]

// Example 5 (/m => multiline)
let str = 'apple\nbanana\ncherry';
let fruit1 = /^banana$/;
let fruit2 = /^banana$/m;
// console.log(str.match(fruit1)); // null
// console.log(str.match(fruit2)); // Array

// Example 6 [replace]
let myColor = "My favorite color is red";
let color_pattern = /red/;
let replacement = 'blue';
let result = myColor.replace(color_pattern,replacement);
// console.log(result); // My favorite color is blue
let resultUpperCase = myColor.replace(/red/,function(match){
    return match.toUpperCase();
})
// console.log(resultUpperCase); // My favorite color is RED

// Example 7 (\b => word boundary)
// The \b metacharacter matches at the beginning or end of a word.
let newStr = "Catsat on the mat. Caterpillar is not a cat";
let pattern1 = /cat\b/; // that word who end with cat
let pattern2 = /\bcat/; // that word who strat with cat
let pattern3 = /\bcat\b/; // that word who start and end with cat
let pattern4 = /\bcat\b/g; 
let pattern5 = /\bcat\b/i;
let pattern6 = /\bcat\b/ig;
// console.log(newStr.match(pattern1)); // Array
// console.log(newStr.match(pattern2)); // Array
// console.log(newStr.match(pattern3)); // Array
// console.log(newStr.match(pattern4)); // Array [ 'cat' ]
// console.log(newStr.match(pattern5)); // Array [ 'Cat' ]
// console.log(newStr.match(pattern6)); // Array


// Example 8 ('+' one to infinite)
// let str2 = 'Hello World';
let ptrn = /world/
// console.log(ptrn.test(str2));
let matcher1 = /l+/; 
let matcher2 = /l+/g;
// console.log(str2.match(matcher1)); // [ 'll', index: 2, input: 'Hello World', groups: undefined ]
// console.log(str2.match(matcher2)); // [ 'll', 'l' ]

// Example 9 [search]
let myIntro = 'Hello Everyone my name is Suraj'
let ptrn2 = /my/;
// console.log(myIntro.search(ptrn2)); // 15

// Example 10 (\s => whitespace, tab space);
let ptrn3 = /\s/;
// console.log(myIntro.split(/\s/)); // Array [ 'Hello', 'Everyone', 'my', 'name', 'is', 'Suraj' ]
// console.log(myIntro.split(" "));   // Array [ 'Hello', 'Everyone', 'my', 'name', 'is', 'Suraj' ]


// Example 11  (\w => numbers, alphabates, underscore)
let ptrn4 = /(\w+)/;
// console.log(ptrn4.exec(myIntro)); // 
// console.log(myIntro.match(ptrn4));


const str3= "Hello World This is a test string.";
const regexp = /\s+/; // one space to infinit space
// const regexp = /(\s+)/; //  ...with group
// console.log(str3.split(regexp));


const regexp2 = /(\w+)\s(\w+)/;
const result2 = regexp2.exec(str3);
// console.log(result2);