//call :- The call() method of Function instances calls this function with a given this value and arguments provided individually.

// Example 1
let obj = {
    name: "Suraj",
    city: "Bangalore"
}
function msg() {
    console.log(`My name is ${this.name} and I live in ${this.city}`);
}

// function borrowing 
// msg.call(obj);


// Example 2
let user1 = {
    name: "Sai",
    city: "Bangalore",
    welcome: function () {
        console.log(`Welcome ${this.city} to Mr. ${this.name}`);
    }
}
let user2 = {
    name: "Suraj",
    city: "BNG"
}
// user1.welcome.call(user2);


// Example 3:-
function skill(course, institute) {
    console.log(`My name is ${this.name} I came to ${this.city} to learn ${course} in ${institute} Institute`);
}

// skill.call(user2,"Frontend","AchiversIT")
// apply :- The apply() method of Function instances calls this function with a given this value, and arguments provided as an array 
// skill.apply(user1,["Frontend","AchiversIT"])

let result = skill.bind(user2, "MERN Stack", "AchiversIT")
result()

// bind :- The bind() method of Function instances creates a new function that, when called, calls this function with its this keyword set to the provided value, and a given sequence of arguments preceding any provided when the new function is called.
