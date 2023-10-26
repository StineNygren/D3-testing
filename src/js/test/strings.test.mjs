import { reverse } from "../strings.mjs";

function testReverse(str, reverseStr) {
  let reversedText = reverse(str);
  if (reversedText === reverseStr) {
    console.log("the text has been reversed");
  } else {
    throw new Error("not correct reverse");
  }
}

export { testReverse };
