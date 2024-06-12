// Array 

let numbers = [23,24,25,26,27,28];
let[num1,num2,num3,num4,num5,num6] = numbers;
console.log(num6);

let user = ["Suraj",33,"Bangalore"];
let[name,age,city] = user;
console.log(name);


// Object

let student = {
    std_name:"Ram Singh",
    roll_No:101,
    mark:70,
}
let {std_name,roll_No,mark} = student;
console.log(std_name);

let employee = {
    id:101,
    emp_name:"Suraj",
    salary:35000,
}
let {id,emp_name:empName,salary} = employee;
console.log(empName);

