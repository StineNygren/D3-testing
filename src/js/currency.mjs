import dotenv from "dotenv";

dotenv.config();

console.log(process.env.USD_TO_EUR_EXCHANGE_RATE);

function usdToEur(usdAmount) {
  return usdAmount * process.env.USD_TO_EUR_EXCHANGE_RATE;
}

function eurToUsd(eurAmount) {
  return eurAmount / process.env.USD_TO_EUR_EXCHANGE_RATE;
}

export { usdToEur };
