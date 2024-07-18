// Activity 1: Function declrations
// Task 1: function tocheck number is even or odd

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(3));

// Task 2: function to calculate square of the number

function calculateSquare(number) {
  return number * number;
}

console.log(calculateSquare(5));

// Activity 2: Function expressions
// Task 3: function to find maximum of two numbers

const findMax = (a, b) => {
  return a > b ? a : b;
};

console.log(findMax(5, 10));

// Task 4: function to concatinate two strings

function concatenateStrings(a, b) {
  return a + b;
}

console.log(concatenateStrings("Hello ", "World"));

// Activity 3: Arrow function
// Task 5: function to calculate sum of two numbers
const sum = (a, b) => {
  return a + b;
};

console.log(sum(4, 4));

// Task 6: function to check that string contain specific value or not
const check = (str, valueCheck) => {
  return str.includes(valueCheck);
};

console.log(check("Hello World", "World"));

// Activity 4: function parameter and default value 
 // Task 7: function to calculate product of two numbers with default value
 function product (a , b =7){
    return a * b;
 }

console.log(product(5))  ;

// Task 8: function takes name and age as arguments and say greetings
 function greetings(name , age){
    return `Hello ${name} your age is ${age}. ` ;
 }

 console.log(greetings("Hamza" , 22)) ;

 // Activity 5: Higher order functions.
//  Task 9 : write a higher order function that takes a function and a number and calls that function that many times 

function sayHello (){
    console.log("Hello")  ;
}

const higherOrder = (gg ,times) =>{
    for (let i = 0 ; i < times ; i++ ){
        gg() ;
    }
}

console.log('calling higher order function')
higherOrder(sayHello , 6)


// Task 10: Wite a function that takes two functions and a number as arguments applies first function to the value and then applies the second function to the value to the results.

