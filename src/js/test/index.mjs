import { testSumAdd, testValueAdd } from "./math.test.mjs";
import { testToEur } from "./currency.test.mjs";
import { testReverse } from "./strings.test.mjs";

function doAllTests() {
  try {
    testSumAdd(5, 5, 10);
    testValueAdd(1, 5);
    testToEur(50, 43);
    testReverse("hei", "ieh");
  } catch (e) {
    console.log(e);
    throw new Error("At least one test failed");
  }
}

doAllTests();
