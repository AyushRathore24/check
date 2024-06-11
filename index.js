// function groupBy(array, fn) {
//     console.log(fn);

//     return array.reduce((acc, item) => {
//     console.log(fn(item));
//         const key = fn(item);
//         console.log(acc[key]);
//       acc[key] = acc[key] || [];
//       console.log(acc[key]);
//       acc[key].push(item);
//       console.log(acc[key]);
//       return acc;
//     }, {});
//   }
  
//   const array = [
//     {"id":"1"},
//     {"id":"1"},
//     {"id":"2"}
//   ];
  
//   const result = groupBy(array, item => item.id);
//   console.log(result);


// function groupBy(array, fn) {
//     const groups = {};
//     array.forEach(item => {
//       const key = fn(item);
//       groups[key] = groups[key] || [];
//       groups[key].push(item);
//     });
//     return groups;
//   }
  
//   // Function to prompt the user for input and display the output
//   function groupByUserInput() {
//     const array = [];
//     const inputCount =(prompt("Enter the number of items in the array:"));
//     for (let i = 0; i < inputCount; i++) {
//       const id = prompt(`Enter the id for item ${i + 1}:`);
//       array.push({ "id": id });
//     }
//     const result = groupBy(array, item => item.id);
//     console.log(result);
//     alert("Output:\n" + JSON.stringify(result, null, 2));
//   }
  
//   // Call the function to execute
//   groupByUserInput();






Question 1:
Given a string s, remove all its adjacent duplicate characters recursively. 

Input:
S = "geeksforgeek"
Output: "gksforgk"
Explanation: 
g(ee)ksforg(ee)k -> gksforgk

====================================================================

Question 2:

Positive and negative elements:

Input
arr[] = [-1, 2, -3, 4, -5, 6]
N = 6

Outut: [2 -1 4 -3 6 -5]

Input 
arr[] = [-3, 2, -4, 1]

Output:  
2 -3 1 -4 

======================================================================

Question 3:

Input: 
array = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
], 
fn = function (item) { 
  return item.id; 
}
Output: 
{ 
  "1": [{"id": "1"}, {"id": "1"}],   
  "2": [{"id": "2"}] 
}
Explanation:
Output is from array.groupBy(fn).
The selector function gets the "id" out of each item in the array.
There are two objects with an "id" of 1. Both of those objects are put in the first array.
There is one object with an "id" of 2. That object is put in the second array.


const userInput = prompt("Please enter a number:");
