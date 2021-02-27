//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.



//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];


function sortedNumberArray (arrayToSort){
  let sortedArray = []
  while (arrayToSort.length > 0) {
    number = (Math.min(...arrayToSort));
    i = arrayToSort.indexOf(number);
    sortedArray.push(number);
    arrayToSort.splice(i, 1);
  }
  return sortedArray;
}

console.log(sortedNumberArray(nums1));
console.log(sortedNumberArray(nums2));
console.log(sortedNumberArray(nums3));
//console.log(nums2);
//Using one of the test arrays as the argument, call your function inside the console.log statement below.
