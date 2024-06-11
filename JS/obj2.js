// prototype //
/* A prototype is a blueprint of an object
The prototype allows us to use properties and methods on an object even if the properties and methods do not exist on the current object. */

// for in loop //
let obj = {
    id: 28,
    name: "Suraj",
    isLogin: true,
}

// for(let item in obj){
//     console.log(`${item} : ${obj[item]}`);
// }


// Nested Object //
let employee = {
    id: 114,
    name: "Ankit",
    age: 30,
    salary: {
        basic: 30000,
        hra: 7000
    }
}
// console.log(employee.salary.basic);


// Object Serialization //
/* The process whereby an object or data structure is translated into a format suitable for transfer over a network,or storage
(e.g.in an array buffer or file format).

In JavaScript, for example, you can serialize an object to a JSON string by calling the function JSON.stringify().
*/

// console.log(JSON.stringify(employee));

// let jsonData = '{"name":"Suraj","age":33}'
// let obj2 = JSON.parse(jsonData);
// console.log(obj2.name);


// Object.keys() //
// console.log(Object.keys(employee)); // return array

// Object.values() //
// console.log(Object.values(employee));

// Object.entries() //
// console.log(Object.entries(employee));

// Object.freeze() //
// Object.freeze(employee);
// employee.name = "Suraj"; // modifiy not allow
// employee.city = "Bangalore"; // add new key not allow
// console.log(employee);

// Object.seal() //
// Object.seal(employee);
// employee.name = "Suraj"; // modifiy allow
// employee.city = "Bangalore"; // add new key not allow
// console.log(employee);



// Object.assign() //

let mobile_info = {
    model:"Galaxy M14",
    launch:"2023"
}
let mobile_price =  {
    ram_4gb:12000,
    ram_8gb:16000
}

let mobile =  Object.assign({},mobile_info,mobile_price);
// console.log(mobile);

// hasOwnProperty() //
// console.log(employee.hasOwnProperty("id"));

// getOwnPropertyNames() //
// console.log(Object.getOwnPropertyNames(employee)); // return array

// setPrototypeOF() // 

let obj1 = {
    name:"Suraj",
    mark:70,
    msg:function(){
        console.log(`welcome ${this.name}`);
    }
}

let obj2 = {
    name:"Sai",
    age:30,
    // __proto__:obj1  // 1st mathod
}
// obj2.__proto__ = obj1; // 2nd mathod
// Object.setPrototypeOf(obj2,obj1); // 3rd mathod

obj2.msg();