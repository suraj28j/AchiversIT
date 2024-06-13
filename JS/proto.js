// Object.prototype

let user = {
    name:"Suraj",
    city:"Bangalore",
}

Object.prototype.msg = function(){
    console.log(`My name is ${this.name} and I live ${this.city}`);
} // this mathod is assign Objects and as well as Array

user.msg(); 


let ary = ["Suraj","Bangalore"];
ary.msg();
