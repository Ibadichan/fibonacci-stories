const isNumber = (value) => !Number.isNaN(Number(value));

function getFibonacciNumber(n) {
  if (!isNumber(n) || n > 2222) {
    return null;
  }

  let f1 = 1;
  let f2 = 1;
  let i;
  let sum;

  for (i = 3; i <= n; i += 1) {
    sum = f1 + f2;
    f1 = f2;
    f2 = sum;
  }

  return f2;
}

module.exports = getFibonacciNumber;
