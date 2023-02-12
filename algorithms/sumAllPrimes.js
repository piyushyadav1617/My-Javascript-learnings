//write sumPrimes so it returns the sum of all prime numbers that are less than or equal to num

function sumPrimes(num) {
  function isPrime(value) {
    for (let i = 0; i < primeNums.length; i++) {
      if (value % primeNums[i] == 0) {
        return false;
      }
    }
    return true;
  }
  let primeNums = [];
  for (let i = 2; i <= num; i++) {
    if (i == 2) {
      primeNums.push(i);
    } else if (isPrime(i)) {
      primeNums.push(i);
    }
  }
  console.log(primeNums);
  return primeNums.reduce((a, b) => a + b, 0);
}

sumPrimes(13);
