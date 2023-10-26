import { usdToEur } from "../currency.mjs";

function testToEur(usdAmount, euro) {
  const res = usdToEur(usdAmount);
  if (euro === res) {
    console.log(`In Euro ${res} `);
  } else {
    throw new Error(`Is Not correct`);
  }
}

export { testToEur };
