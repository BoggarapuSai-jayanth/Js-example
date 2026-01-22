// while loops in JAVA SCRIPT

let i = 0;
while(i < 10){
    console.log(i);
    i++;
}


// do while loop

console.log("do while loop example");

do{
    console.log(i);
} while(i<10);

// Note: In do-while loop, the block of code is executed at least once even if the condition is false initially.

// infinite loop example (commented out to prevent actual infinite loop)
/*
let j = 0;  
do{
    console.log(j);
    // j is never incremented, so the condition is always true
} while(j < 10);
*/  
// This will keep printing 0 indefinitely because j is never changed inside the loop.
// Be cautious while using infinite loops as they can crash your program.
// To stop an infinite loop, you may need to manually terminate the program or use a break statement inside the loop based on some condition.
// To demonstrate breaking out of an infinite loop, here's a modified version:
let j = 0;
do{
    console.log(j);
    j++;
    if(j >= 10){
        break; // exit the loop when j reaches 10
    }  
} while(true);
// This will print numbers from 0 to 9 and then exit the loop safely.
// Note: Always ensure there's a condition to exit loops to avoid infinite execution.
console.log("Exited the infinite loop safely.");

