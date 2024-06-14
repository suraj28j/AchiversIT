// Scope //
// The accissibility and visibility of variables and function
// mainly two scope in JavaScript (1) Global scope (2) Local Scope

// Global Scope
// Variables declared outside of the function are called global variables

var x = 10;

function myFun() {
    console.log(x);
}
myFun();

// Local variables :
// Local variables declaread inside the function or block are called local variables

function myFun2() {
    var y = 10;
    console.log(y);
}
myFun2();


// Function Variable
// accessible within that function are called function variables
// variables declear with var keywords are global specific

function myFun3() {
    var x3 = 30;
    if (true) {
        console.log(x3);
    }
}
myFun3();

//scope pollution

// var x4 = 40;
// function myFun4(){
//     var x4 = 45;
//     console.log(x4);
// }
// myFun4()


// closure / lexical scope / currying /  //

/* Closure - a function which has access to the variable from its encloseing scope even after the encloseing scope 
or the outer function has finished execution */

function outerFunction(){
    let x = 100;
    function innerFunction(){
        let y = 200;
        console.log(x+y);
    }
    return innerFunction();
}
outerFunction();