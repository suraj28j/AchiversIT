/*
Memoization is an optimization technique that can be used to reduce 
time consuming calculation by saving previous input to somthing call cache and returning the result from it.
*/


function calculation(num){
    let sum = 0;
    for(let i = 0;i<num;i++){
        sum = sum+1;
    }
    return sum;
}

console.time();
console.log(calculation(10));
console.timeEnd()
