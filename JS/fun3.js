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