// [Hoisting]
// it is a js behaviour delclaration & function delclaration will be hoisting but not the intialization and function expression //



// [hoisting with variables]

 // var have hoisting
// x = 10;
// console.log(x);
// var x;


// y = 20;
// console.log(y);
// let y;

// Note :- let and const have no hoisting behaviour. It call temporal dead zone



// [hoisting with Named function]


// add(4,5);

function add(a,b){
    console.log(a+b);
}

// [hoisting with anonymous function] // 

multiply(4,5); // typeError: multiply is not a function

var multiply = (a,b) => {
    console.log(a*b);
}