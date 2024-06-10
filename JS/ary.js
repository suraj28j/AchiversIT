let ary1 = [19,35,24,29,16,45,8,13];
let ary2 = ["Virat","Rohit","Rahul","Hardik","Jasprit","Ravindra"];

// sort() //
// ary2.sort();
// console.log(ary2);
// console.log(ary2.sort()); 
// ary1.sort((a,b)=>a-b);
// console.log(ary1);
// console.log(ary1.sort((a,b)=>a-b));

// reverse() //
// ary2.reverse();
// console.log(ary2);
// console.log(ary1.reverse());
// console.log(ary2.reverse());

// pop() //
// ary1.pop();
// console.log(ary1); 
// console.log(ary1.pop()); // 13

// push() //
// ary2.push("Dhoni");
// console.log(ary2);
// console.log(ary2.push()); // total elements 6
// console.log(ary2.push("Dhoni")); // total elements 6+1 = 7

// shift() //
// ary2.shift();
// console.log(ary2);
// console.log(ary2.shift()); // Virat

// unshift() //
// ary2.unshift("Dhoni");
// console.log(ary2);
// console.log(ary2.unshift()); // total elements 6
// console.log(ary2.unshift("Dhoni"));  // total elements 6+1 = 7

// join() //
// console.log(ary1.join()); // return a string 
// console.log(ary2.join(" ")); // return a string 

// slice() //
// console.log(ary1.slice(1,3));
// console.log(ary2.slice(1,4));

// splice() //
// ary2.splice(1,0,"Dhoni","Shami");
// console.log(ary2);
// console.log(ary2.splice(1,0,"Dhoni","Shami")); // return empty array

// Array.isArray() //
// console.log(Array.isArray(ary1));

// map() //
//Example (1)
// let res = ary1.map((x)=>{
//     return x*10;
// })
// console.log(res);
//Example (2)
// let player = ary2.map((p)=>{
//     return `${p} is great player`
// })
// console.log(player);

// indexOf() //
// console.log(ary2.indexOf("Rohit"));

// lastIndexOf() //
// console.log([2,7,5,2,9,4,2,1].lastIndexOf(2));

// Include() //
// console.log(ary2.includes("Dhoni"));

// find() //
// let res = ary1.find((num)=>{
//     return num>20;
// })
// console.log(res);

// findIndex() //
// let res = ary1.findIndex((num)=>{
//     return num>20;
// })
// console.log(res);

// some() //
// let res = ary1.some((num)=>{
//     return num>40;
// })
// console.log(res);

// filer() //
// let res = ary1.filter((num)=>{
//     return num>30;
// })
// console.log(res);

// every() //
// let res = ary1.every((num)=>{
//     return num>7;
// })
// console.log(res);

// forEach() //
// let res = ary2.forEach((v,i)=>{
//     console.log(`${i} ${v}`);
// })

// toString() //
// let res = ary2.toString()
// console.log(res);

// values() //
// let res = ary1.values();
// for(let element of res){
//     console.log(element);
// }

// fill() //
// console.log(ary2.fill("Suraj"));

// reduce() //
// let res = ary1.reduce((acc,cuur)=> acc+cuur,0);
// console.log(res);

// flat() //
// let ary3 = [1,2,3,[4,5]];
// let ary4 = [1,2,3,[4,5,[6,7,8],9,10],11,12,13,[14,15]];
// console.log(ary4.flat());
// console.log(ary4.flat(2));
