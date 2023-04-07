//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE

// slice the array starting at index 0 and ending at the length of the orginal array
let colorCopy = faveColors.slice(0, faveColors.length)
console.log(colorCopy)


//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE

// can use push because it is appending the end of the array
colorCopy.push('blue')
console.log(colorCopy)

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE

// spliceing from the 1st index for a total of three elements. No need for a 3rd argumenet because we are not adding anything
let middleNums = numbers.splice(1,3)
console.log(middleNums)

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

// CODE HERE


// iterating over the bigOrSmallArray useing a for loop. Then checks if it is greater or lessthen/equal to 100. Pushing to the new array answers 
let answers = [];
for(let i=0; i < bigOrSmallArray.length; i++ ){
  if(bigOrSmallArray[i] > 100){
    answers.push('big')
  }else if(bigOrSmallArray[i] <= 100){
    answers.push('small')
  }
}

console.log(answers)