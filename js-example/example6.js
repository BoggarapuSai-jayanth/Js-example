// AND (&& opertator)
// 00 -> 0
// 01 -> 0
// 10 -> 0
// 11 -> 1  

// OR ( || operator)
// 00 -> 0
// 01 -> 1
// 10 -> 1
// 11 -> 1

let x = 10;
let y = 20;

console.log(x === 10 && y === 20); // true && true -> true
console.log(x === 10 && y === 30);  // true && false -> false
console.log(x === 5 && y === 20);  // false && true -> false
console.log(x === 5 && y === 30);  // false && false -> false  
console.log(x === 10 || y === 20); // true || true -> true
console.log(x === 10 || y === 30);  // true || false -> true
console.log(x === 5 || y === 20);  // false || true -> true
console.log(x === 5 || y === 30);  // false || false -> false   
 