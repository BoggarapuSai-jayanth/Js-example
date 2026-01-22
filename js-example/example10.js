// for loops in javaScript

for (let i=10; i<0; i++){
    console.log('value of i is : '+ i);
}

// undefined condition

let i;
console.log(i); // prints undefined
for(i = 100; false; i++){
    console.log(i); // this block will not execute
}

console.log(i); // prints 100