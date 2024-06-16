// Object.prototype //


// ...with object literal //
let user = {
    name:"Suraj",
    city:"Bangalore",
}

// adding property to object //
// user.age = 33;
// console.log(user.age);

// adding mathod to object //
// user.msg = function(){
//     console.log(`My name is ${this.name} and I live ${this.city}`);
// }
// user.msg(); 

// Object.prototype.msg = function(){
//     console.log(`My name is ${this.name} and I live ${this.city}`);
// } 
// this mathod is assign Objects and as well as Array

// user.msg(); 
// let ary = ["Suraj","Bangalore"];
// ary.msg(); // msg() mathod aslo assign to array


// ...with constructor function //
let student = function(name,city){
    this.name= name,
    this.city=city,
    this.wel=function(){
        console.log(`Welcome ${this.name}`);
    }
} 

let rollNo1 = new student("Suraj","Bangalore");
// rollNo1.wel();

student.prototype.isLogin = function(){
    console.log(`${this.name} is login`);
}
// rollNo1.isLogin();