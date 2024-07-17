// Activity for loops
// Task 1: print numbers from 0 to 10
for (let i = 0; i < 11; i++) {
  console.log(i);
}

// Task 2: print table of 5 using for loops

for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}

// Activity 2: While loops
// task : 3 calculate number from 1 to 10 ;

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Task 4: Print numbers from 10 to 1 using while loop

let n = 10;
while (n >= 1) {
  console.log(n);
  n--;
}

console.log("Do while Loop");
// Activitky 3: Do while Loops
// Task 5: Print numbers from 1 to 5 using do while loop
let inc = 1;
do {
  console.log(inc);
  inc++;
} while (inc <= 5);

// Task 6: Print Factorial of the number using do while loop

let number = 10;
let factorial = 1;

do {
  factorial = number * factorial;
  number--;
} while (number >= 1);

console.log(`Factorial of the ${number} is :`, factorial);

// Activity 4:
// Task 7: Print Pattern using nested for loops

for (let i = 1; i < 6; i++) {
    let row = '' ;
  for (let j = 1 ; j <= i ; j++) {
    row += '*' ;
}
console.log(row);
}

// Activity 5: Loop control Statements
// Task 8: program to primt 1 to 10 and skip 5
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }

  console.log(i);
}

// Task 9: program to print 1 to 10 but stop when 7 is reached
for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}
