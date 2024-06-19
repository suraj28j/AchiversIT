// [Hight Order Function]
// A function pass a argument in another function and a function return as a value in another function 

// Example :-
function operateNumber(a, b, f1) {
    return f1(a, b);
}

function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}

let res1 = operateNumber(5, 3, add);
// console.log(res1);
let res2 = operateNumber(5, 3, multiply);
// console.log(res2);



// [function composition] => the process of combining two or more function to a product a new function

// Exapmle :- 

function add(x) {
    return x + 2
}

function multi(x) {
    return x * 2;
}

const combFun = (x) => multi(add(x));
// console.log(combFun(5));


// [Memoization]
/* it is optimization technique where the result of expensive function calls are cached 
so that subsequent call with same input return the cached result rather than recalculating the result */


// [Destructuring] 
// it is the process of extracting the elements from the array or properties from the object and store the same as indivisual in a single line

// Example 1 for Array
// let ary = [10,20,30];
// let [one,two,three] = ary;
// console.log(one);

// Example 2 for Array
// let user = ["Suraj",33,"Banglore"];
// let [name,age,city] = user
// console.log(name);
// console.log(age);

// Example 3 for Object
// let user = {
//     name:"Suraj",
//     age:33,
//     city:"Bangalore"
// }
// let {name,age,city} = user;
// console.log(name);

// Example 4 for Object
// let user = {
//     name:"Suraj",
//     age:33,
//     city:"Bangalore"
// }
// let {name:userName,age:Age,city:City} = user;
// console.log(userName);
// console.log(Age);