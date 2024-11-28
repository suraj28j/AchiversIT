// [ import example 1 ] //
// import { username } from "./modules/user.js"; 
// import { info } from "./modules/user.js";

// console.log(username);
// info();

// [ import example 2 ] //
// import { withdraw, deposit } from "./modules/account.js";

// withdraw();
// deposit();

// [ with renaming ] //
import { withdraw as wd, deposit } from "./modules/account.js";

// wd();

// [ import example 3 ] //
import * as user from "./modules/user.js"

user.info();


// [ default function import ]
import { default as fun } from "./modules/user.js"
fun()
