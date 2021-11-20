//Learn About Functional Programming
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4TeamFCC = getTea(40);


// Understand Functional Programming Terminology
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);


// Understand the Hazards of Using Imperative Code


// Avoid Mutations and Side Effects Using Functional Programming


// Pass Arguments to Avoid External Dependence in a Function


// Refactor Global Variables Out of Functions


// Use the map Method to Extract Data from an Array


// Implement map on a Prototype


// Use the filter Method to Extract Data from an Array


// Implement the filter Method on a Prototype


// Return Part of an Array Using the slice Method


// Remove Elements from an Array Using slice Instead of splice


// Combine Two Arrays Using the concat Method


// Add Elements to the End of an Array Using concat Instead of push


// Use the reduce Method to Analyze Data


// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem


// Sort an Array Alphabetically using the sort Method


// Return a Sorted Array Without Changing the Original Array


// Split a String into an Array Using the split Method


// Combine an Array into a String Using the join Method


// Apply Functional Programming to Convert Strings to URL Slugs


// Use the every Method to Check that Every Element in an Array Meets a Criteria


// Use the some Method to Check that Any Elements in an Array Meet a Criteria


// Introduction to Currying and Partial Application