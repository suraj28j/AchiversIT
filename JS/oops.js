// Example (1)
// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     speak(){
//         console.log(`${this.name} make a sound`);
//     }
// }
// let cat = new Animal("Cat");
// console.log(cat.name);
// cat.speak();


// Example (2)
// class Car {
//     constructor(make, model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year
//     }
//     stratEngine(){
//         console.log(`${this.make} ${this.model} engine started`);
//     }
//     stopEngine(){
//         console.log(`${this.make} ${this.model} engine stopped`);
//     }
// }
// const cart = new Car("Tata","Nano","2023");
// cart.stratEngine();
// cart.stopEngine();



// [ Inheritence ]

// ( prototype based inheritance ) //

// function Person(name,age){
//     this.name = name;
//     this.age =age;
// }
// Person.prototype.greet = function(){
//     console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
// }

// const person1 = new Person("Arjun",35);
// console.log(person1.name);
// console.log(person1.age);
// person1.greet();

// function Employee(name,age,jobtitle){
//     Person.call(this, name, age)
//     this.jobtitle = jobtitle;
// }

// >>> set the prototype of Employee to be an instance of the Person <<<
// Employee.prototype = Object.assign(Person.prototype)
// Employee.prototype.constrouctor = Employee;
// Employee.prototype.work = function(){
//     console.log(`${this.name} is working as a ${this.jobtitle}`);
// }

// create an instance of employee
// const employee1 = new Employee("Bheema",32,"Software Engineer");
// employee1.greet();
// employee1.work();


// ( class based inheritance ) //

// Example (1)
// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     speak(){
//         console.log(`${this.name} makes a sound`);
//     }
// }

// class Dog extends Animal {
//     bark(){
//         console.log(`${this.name} barks`);
//     }
// }
// const dog = new Dog("Caezear");
// dog.speak()
// dog.bark();


// Example (2)
// class Car {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
//     stratEngine() {
//         console.log(`${this.make} ${this.model} engine started`);
//     }
//     stopEngine() {
//         console.log(`${this.make} ${this.model} engine stopped`);
//     }
// }

// class ElectricCar extends Car {
//     constructor(make, model, year, battryCapacity) {
//         super(make, model, year);
//         this.battryCapacity = battryCapacity;
//     }
//     chargeCapacity() {
//         console.log(`${this.make} ${this.model}is charging. Battery Capacity : ${this.battryCapacity} kwh`);
//     }
// }

// const myElectricCar = new ElectricCar("Tesla", "Model 3", 2022, 75);
// myElectricCar.stratEngine();
// myElectricCar.stopEngine();
// myElectricCar.chargeCapacity();


// Getter and Setter methods

// Example (1)
// class Circle {
//     constructor(radius) {
//         this._radius = radius
//     }
//     get getRadius() {
//         return this._radius;
//     }
//     set setRadius(value) {
//         if (value <= 0) {
//             throw new Error("Radius must be positive number");
//         }
//         this._radius = value
//     }
// }

// const result = new Circle(5);
// console.log(result.getRadius);
// result.setRadius = 10;
// console.log(result.getRadius);

// Example (2)
// class User {
//     constructor(username, password) {
//         this._username = username;
//         this._password = password;
//     }
//     get getUsername() {
//         return this._username
//     }
//     set setPassword(pwd) {
//         if (newPassword.length >= 6) {
//             throw new Error("Password must be atleast 6 characters");
//         }
//         this._password = pwd
//     }
//     checkPassword(inputPassword) {
//         return this._password === inputPassword
//     }
// }

// const user = new User('Suraj', '123abcd')
// console.log(user.getUsername);
// user.setPassword = '456abcd'
// console.log(user.checkPassword('123abcd'));
// user.checkPassword('456abc')