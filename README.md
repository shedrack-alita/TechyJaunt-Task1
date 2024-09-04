# TechyJaunt-Task1
This is the initial assignment for the TechyJaunt Backend Web Development Cohort 4.

## Assignment 1: Basic Calculator

### Objective
Apply your knowledge of variables, operators, conditionals, and functions to build a simple calculator.

### Instructions
1. **Create a function** called `calculate` that takes three parameters:
   - Two numbers.
   - A string representing the operation type (`'add'`, `'subtract'`, `'multiply'`, `'divide'`).

2. **Inside the function:**
   - Use conditional statements (`if-else`) or `switch` cases to perform the appropriate arithmetic operation based on the input string.
   - Return the result of the calculation.

3. **Validate Inputs:**
   - Ensure that the input numbers are not `null` or `undefined`.
   - Check that the operation is one of the allowed strings (`'add'`, `'subtract'`, `'multiply'`, `'divide'`).

4. **Test the function** with different sets of inputs:
   - Example: `calculate(5, 3, 'add')` should return `8`.
   - Example: `calculate(10, 2, 'divide')` should return `5`.