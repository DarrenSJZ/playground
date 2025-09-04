const j = 10;

console.log("Run with i++");
for(let i = 0; i < j; i++){
    let result  = i + j;
    let exponent_i = i**j
    console.log(i)
    console.log("run:" + i + ", with result: " + result + " and an exponent i of: " + exponent_i);
}

console.log("Run with ++i");
for(let i = 0; i < j; ++i){
    let result  = i + j;
    let exponent_i = i**j
    console.log(i)
    console.log("run:" + i + ", with result: " + result + " and an exponent i of: " + exponent_i);
}

let x = 0.1;
let y = 0.2;
let z = Math.round((x + y) * 10) / 10;

console.log(z)
