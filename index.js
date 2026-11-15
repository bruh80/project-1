function isPrime(n){let k = 0; for(let i = 0 ; i <= n ; i++){if(n % i == 0){k = k + 1 }; }; if(k == 2){ return true}else{return false};};
module.exports={ isPrime };
