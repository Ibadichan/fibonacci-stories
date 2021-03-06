const isNumber = (value) => !Number.isNaN(Number(value));

function getFibonacciNumber(n) {
  if (!isNumber(n)) {
    return null;
  }

  let f1 = BigInt(1);
  let f2 = BigInt(1);
  let i;
  let sum;

  for (i = 3; i <= n; i += 1) {
    sum = f1 + f2;
    f1 = f2;
    f2 = sum;
  }

  const result = f2.toString();

  return result;
}

module.exports = getFibonacciNumber;
