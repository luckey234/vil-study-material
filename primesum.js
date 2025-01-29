function sumPrimes(num) {
    debugger
    // Helper function to check primality
    function isPrime(num) {
        debugger
      const sqrt = Math.sqrt(num);
      for (let i = 2; i <= sqrt; i++) {
        debugger
        if (num % i === 0)
          return false;
      }
      return true;
    }
  
    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        debugger
      if (isPrime(i))
        sum += i;
    }
    console.log(sum)
    return sum;
  }
  //2nd way.................
  function sumPrimes2(num) {
    // Check all numbers for primality
    debugger
    let primes = [];
    for (let i = 2; i <= num; i++) {
      debugger
      if (primes.every((prime) => i % prime !== 0))
        primes.push(i);
    }
    console.log(primes.reduce((sum, prime) => sum + prime, 0))
    return primes.reduce((sum, prime) => sum + prime, 0);
  }
  sumPrimes2(10)