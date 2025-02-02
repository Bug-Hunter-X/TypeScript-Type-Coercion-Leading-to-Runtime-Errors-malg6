function add(a: number, b: number): number {
  return a + b;
}

function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error("Both arguments must be numbers");
  }
}

let result1 = addSafe(1, 2); // Correct usage
let result2 = addSafe("1", 2); // Throws an error at runtime
let result3 = addSafe(1, "2"); // Throws an error at runtime