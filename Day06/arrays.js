// Activity 1: Array creation and access
// Task 1 : create an array and store 1 to 5 and print;
const arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task 2 : access and print the first and last element of the array;

console.log(arr[0]); // first element
console.log(arr[arr.length - 1]); // last element

// Activity 2: Array Methods (Basics)
// Task 3: use push method to new number in the array ;

arr.push(6);
console.log(arr);

//  Task 4:  use pop method to remove element from the array ;
arr.pop();
console.log(arr);

// Task 5:  use shift method to remove element from the array
arr.shift();
console.log(arr);

// Task 6:  use unshift method to add element to the array
arr.unshift(1);
console.log(arr);

console.log(arr);

// Activity 3: Array methods (intermediatae)
// Task 7: use map method to make an new array where each number is dobuled;

const doubleArr = arr.map((val) => {
  return val * 2;
});

console.log(doubleArr);

// Task 8: use filter method to make a new array with only even numbers;

const evenArr = arr.filter((val) => {
  return val % 2 === 0;
});

console.log(`evenArr: ${evenArr}`);

// Task 9: use reduce method to calculate the sum of all numbers in the array;

const sum = arr.reduce((acc, val) => {
  return acc + val;
}, 0);

console.log(`Sum: ${sum}`);

// Activity 4: Array iterations

// Task 10: use forEach method to print each number in the array;

const result =doubleArr.forEach((val) =>{
    console.log(val);
}) 

// Task 11: use for loops method to print each element in the array

for(let i=0 ; i < arr.length ; i++){
    console.log(`printng using for loop ${arr[i]}`);
}


// Activity 5 : multi dimmesionsal arrays ;
// Task 12:   create multidimesional array and log entire array in the console 
const multiDimensionalArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
] ;

console.log(multiDimensionalArray);

// Task 13:   Access and print specific element from the array ;

console.log(multiDimensionalArray[0][2]);
console.log(multiDimensionalArray[1][1]);
console.log(multiDimensionalArray[2][0]);

// completed fay 06


