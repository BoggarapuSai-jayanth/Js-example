// Function add numbers
function addNumbers(a,b){
    a = a + 2;
    b = b + 10;
    c = Number(a) + Number(b);
    console.log(c);
}

let a = 10;
let b = 20;
addNumbers(a,b);
console.log(a + " " + b);


// Undefined Function

function addNumbers(a,b){
    return Number(a) + Number(b);
}

let i = 10;
let result = addNumbers(i);
console.log(result);
