function countPrimeNumbers() {
    let primes = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            primes++;
        }
    }
    return primes;

    function isPrime(num) {
        for (let j = 2, max = Math.sqrt(num); j <= max; j++) {
            if (num % j === 0) {
                return false;
            }
        }
        return num > 1;
    }
}

let t0 = performance.now();

for(let i = 0; i < 100; i++) {
    setTimeout(() => console.log(countPrimeNumbers()), 0);
}

let t1 = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`);
