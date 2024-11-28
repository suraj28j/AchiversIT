export let username = "Suraj";
let age = 33;

export function info() {
    console.log("info function calling..");
}

export function hobbies() {
    console.log("Hobbies Function Calling..");
}

// [ default function export ]

export default function(){
    console.log("default function calling..");
}


// specialFun import
import { specialFun } from "./account.js";
specialFun()
