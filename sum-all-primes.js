function sumPrimes(num) {
  let primes = [];
    function checkNum(p){
        for(let i = 0; i<=primes.length; i++){
            if(p % primes[i] === 0){
                return false;
            }
        }
        primes.push(p);
        return true;
    }
    let sum = 0;
    for (let i = 2; i <= num; i++){
        if(checkNum(i)){
            sum +=i;
        }
    }
    return sum;
}

console.log(sumPrimes(10));