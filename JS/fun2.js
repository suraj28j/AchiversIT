let fun = () => {
    console.log("hello");
}
// fun();


// Syntax : 1 
let add = (num1,num2) => {
    return num1+num2;
}
let result = add(5,6);
// console.log(result);

// Syntax : 2 
let multiply = num => {
    return num*2;  // Explicit return
}
let result2 = multiply(5);
// console.log(result2);

// Syntax : 3 
let squre = num => num**2  // Implicit return
let result3 = squre(5);
// console.log(result3);


// [this keyword] 
// Note :- this keyword is not working with arrow function //

//console.log(this); // return empty object in Node JS

// with browser it's return window object


let myObj = {
    name:"Suraj",
    city:"Bng",
    fun:function(){
        return this;
    }
}
let res = myObj.fun()
// console.log(res); // return myObj

let user = {
    name:"Suraj",
    mark:70,
    heyHello:function(){
        console.log(`Hello MR ${this.name} your mark is ${this.mark}`);
    }
}
// user.heyHello(); // Hello MR Suraj your mark is 70

let user2 = {
    name:"Suraj",
    mark:70,
    heyHello:()=>{
        console.log(`Hello MR ${this.name} your mark is ${this.mark}`);
    }
}
//user.heyHello(); // Hello MR undefined your mark is undefined


// [arrow function with Array mathods]

let num = [2,4,7,8,3,10]
let output = num.reduce((item) => { 
        return item*2;
})
// console.log(output);

let even = num.filter((numbers)=>{
    if(numbers%2===0)
        return numbers
})
// console.log(even);