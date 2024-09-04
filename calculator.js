//Calculator function declaration
const calculate = (num1, num2, operationType) => {
  // Input validation
  if (
    num1 === null ||
    num1 === undefined ||
    num2 === null ||
    num2 === undefined
  ) {
    return "Error: Invalid input number";
  }
  //Operation Type validation
  if (
    typeof operationType !== "string" ||
    !["add", "subtract", "multiply", "divide", "modulus"].includes(operationType)
  ) {
    return "Math Error: Invalid mathematical operation";
  }

  //Conditions that performs the arithmetic operation
  if (operationType === "add") {
    return num1 + num2;
  } else if (operationType === "subtract") {
    return num1 - num2;
  } else if (operationType === "multiply") {
    return num1 * num2;
  } else if (operationType === "divide") {
    //checking to know if the divisor is not zero, otherwise a math error will be thrown
    if (num2 === 0) { 
      return "Math Error: Numbers are not divisible by zero";
    }
    return num1 / num2;
  }else if (operationType === "modulus") {
    return num1 % num2;
  }

};

// Testing the mathematical operations
console.log(calculate(25, 7, "add")); // Expected result: 32
console.log(calculate(172, 215, "subtract")); // Expected resul490
console.log(calculate(17, 5, "divide")); // Expected result: 5
console.log(calculate(19, 0, "divide")); // Expected result: "Error: Numbers are not divisible by zero"
console.log(calculate(50, 7, "modulus")); //Expected result: 1
console.log(calculate(5, 3, "remove")); // Expected result: "Error: Invalid mathematical operation"
console.log(calculate(null, 3, "add")); // Expected result: "Error: Invalid input number"
