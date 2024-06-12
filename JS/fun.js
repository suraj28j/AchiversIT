// Function 
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it). 



// [function defination] //

// with function name
function welcome(){
    console.log(`Hello Everyone`);
}
// welcome();

// anonymous function
let message  = function(){
    return `Hello Good Morning`;
}
// console.log(message);



// [function with parameters] //

function sum(num1,num2){
    console.log(num1+num2);
}
// (num1, num2) is parameters
// sum(5,3); // (5,3) is argumrnts

function area(width,height){
    return width*height;
}
let result = area(10,20);
// console.log(result);

function user(name){
    console.log(`Welcome ${name}`);
}
// user("Suraj")



// [callback function] //
//  function passed into another function as an argument 

function mainFunction(callback){
    console.log("This is main Function");
    callback();
}
function callbackFunction(){
    console.log("Thia is callback function");
}
// mainFunction(callbackFunction);


// [rest parameter]
function restFunction(...numbers){
    return numbers.reduce((acc,cuur)=>acc+cuur);
}
// console.log(restFunction(2,3,4));
// console.log(restFunction(2,3,4,5,6,10));


// [Destructuring parameters] //
function destructureFunction({name,city}){
    console.log(`My name is ${name} and live in ${city}`);
}
let obj = {
    name:"Suraj",
    city:"Banglaore"
}
// destructureFunction(obj);

function destructureFunction2([name,city]){
    console.log(`My name is ${name} and live in ${city}`);
}
let ary = ["Suraj","Banglaore"]
// destructureFunction2(ary);


// [Recursive Function] //
// if function call itself

function  factorial(n){
    if(n<=0){
        return 1
    }
    else{
        return n*factorial(n-1);
    }
}
// console.log(factorial(4));


// [Generator function] //
function *generator(){
    yield `First Statement`;
    yield `Second Statement`;
    yield `third Statement`;
}
let g = generator();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());


function* players(){
    yield console.log("Rohit");
    yield console.log("Virat");
}
let p = players();
// p.next().value
// console.log(p.next().done);


// [function return object]

function user(name,age){
    return {
        Name:name,
        Age:age
    }
}
let res = user("Suraj", 33);
// console.log(res);


// [function return array]

function evenNumbers(num){
    let even = [];
    for(let i=0;i<num.length;i++){
        if(num[i]%2==0){
            even.push(num[i]);
        }
    }
    return even;
}
let evenAry = evenNumbers([3,5,6,7,9,12,14,17,19]);
// console.log(evenAry);
