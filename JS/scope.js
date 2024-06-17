// Scope //
// The accissibility and visibility of variables and function
// mainly two scope in JavaScript (1) Global scope (2) Local Scope

// Global Scope
// Variables declared outside of the function are called global variables

var x = 10;

function myFun() {
    console.log(x);
}
// myFun();

// Local variables :
// Local variables declaread inside the function or block are called local variables

function myFun2() {
    var y = 10;
    console.log(y);
}
// myFun2();


// Function Variable
// accessible within that function are called function variables
// variables declear with var keywords are global specific

function myFun3() {
    var x3 = 30;
    if (true) {
        console.log(x3);
    }
}
// myFun3();

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
// outerFunction();


// closure in loop //
// closure can be tricky in loop due to the way of JavaScript handles variable scope.

for(var i=0;i<=5;i++){
    setTimeout(()=>{
        console.log(i);
    })
}
// output is 6 six time


for(let i=0;i<=5;i++){
    setTimeout(()=>{
        console.log(i);
    })
}
// output is 1 2 3 4 5 6

// Is it because let binds to the inner scope each item differently and var keeps the latest value of i //