// Code wars Kata8 Solutions

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) return [];
  
    let positivesArray = input.filter((x) => x > 0).length;
    let sumNegatives = input
      .filter((x) => x < 0)
      .reduce((acc, current) => acc + current, 0);
  
    return [positivesArray, sumNegatives];
  }
  
  console.log(
    countPositivesSumNegatives([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
    ])
  ); // Output: [10, -65]
  

  