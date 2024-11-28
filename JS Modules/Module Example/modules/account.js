let account_no = 123456;
let account_type = "saving";

// [ export example 1 ] //
// export function withdraw(){
//     console.log("amount deducted..");
// }

// export function deposit(){
//     console.log("balance update..");
// }

function withdraw() {
    console.log("amount deducted..");
}
function deposit() {
    console.log("balance update..");
}

// [ export example 2 ] //
export { withdraw, deposit }


// import hobbies from user.js file 
import { hobbies } from "./user.js";
export function specialFun(){
    console.log("Special Function Calling..");
    hobbies();
}