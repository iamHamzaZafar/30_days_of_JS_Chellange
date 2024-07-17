// Activity 1: if else Statements
// Task 1: program to check number is positive or negative
const number = 0;
if (number > 0) {
  console.log(`${number} is Positive`);
} else if (number == 0) {
  console.log(`${number} is Zero`);
} else {
  console.log(`${number} is Negative`);
}

// Task 2: check person is eligible to vote or not
const age = 18;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// Activity 2: Nested if-else statements
// Task: 3 program to find the largest number from three .
const n1 = 34;
const n2 = 20;
const n3 = 44;

if (n1 > n2 && n1 > n3) {
  console.log(`${n1} is the largest number`);
} else if (n2 > n1 && n2 > n3) {
  console.log(`${n2} is the largest Number`);
} else {
  console.log(`${n3} is the largest number`);
}

// Activity 3: switch case statement
// Task 4: determine the day of the week

const day = 5;
switch (day) {
  case 0:
    console.log("Monday");
    break;
  case 1:
    console.log("Tuesday");
    break;
  case 2:
    console.log("Wednesday");
    break;
  case 3:
    console.log("Thursday");
    break;
  case 4:
    console.log("Friday");
    break;
  case 5:
    console.log("Saturday");
    break;
  case 6:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// Task: 5 program to assign the grade using switch statement

const marks = 85;
switch (true) {
  case marks >= 90:
    console.log("Grade: A");
    break;
  case marks >= 80:
    console.log("Grade: B");
    break;
  case marks >= 70:
    console.log("Grade: C");
    break;
  case marks >= 60:
    console.log("Grade: D");
    break;
  default:
    console.log("Grade: F");
}

// Activity 4: Ternary Operator
const numb = 19;
console.log(numb % 2 == 0 ? "Number is Even" : "Number is ODD");

// Activity 5: check year is leap year or not

const year = 2024;
const isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
console.log(
  isLeapYear ? `${year} is a Leap Year` : `${year} is not a Leap Year`
);

// completed all the tasks of day 4 .