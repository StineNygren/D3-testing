import { add } from "../math.mjs";

function testValueAdd(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Value must be number");
  } else {
    add(a, b);
    console.log("value is number");
  }
}

function testSumAdd(a, b, result) {
  const res = add(a, b);
  if (result === res) {
    console.log("sum is correct");
  } else {
    throw new Error(
      `Expect the sum of ${a} and ${b} to be ${result}, not ${res}`
    );
  }
}

export { testValueAdd, testSumAdd };
