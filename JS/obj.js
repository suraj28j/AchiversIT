// How to creat a object //

// (1) Using an Object Literal
// (2) Using the new Keyword
// (3) Using an Object Constructor
// (4) Using Object.assign()
// (5) Using Object.create()
// (6) Using Object.fromEnties()

// (1) Object Literal //

let obj = {
    name:"Suraj",
    "city":"Bangalore",
    ["email"]:"suraj28j@gmail.com",
    isLogin:true,
    user:function(){
        console.log(`My name is ${this.name} and live in ${this.city}`);
    }
}
// console.log(obj.name); 
// console.log(obj["name"]);
// obj.user();
// obj.age = 33; 
// console.log(obj.age); 




// (2) Using the new Keyword //

let employee = new Object();
employee.id = 101;
employee.name = "Vinod";
employee.age = 30;
// console.log(employee);



// (3) Using an Object Constructor //

function student(name,age,city){
    this.name = name;
    this.age = age;
    this.city = city;
}

let roll_No1 = new student("Suraj",33,"Bangalore");
let roll_No2 = new student("Gnana",30,"Bangalore");
// console.log(roll_No2);



// (4) Using Object.assign() //

let mobile_info = {
    model:"Galaxy M14",
    launch:"2023"
}
let mobile_price =  {
    ram_4gb:12000,
    ram_8gb:16000
}

let mobile =  Object.assign(mobile_info,mobile_price);
// console.log(mobile);



// (5) Using Object.create() //

let person = {
    name:"Suraj",
    isLogin:true
}

let me = Object.create(person);
// console.log(me.name);
// me.age=33;
// console.log(me);


// (6) Using Object.fromEnties()


const entries = new Map([
    ['name', 'Suraj'],
    ['age', 33],
  ]);
  
  const myObj = Object.fromEntries(entries);
//   console.log(myObj);