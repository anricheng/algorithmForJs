const fib = (n,memo={}) =>{
    if(n in memo) return memo[n];
    if(n<=2) return 1;
    memo[n] = fib(n-1,memo) + fib(n-2,memo)
    return memo[n]
}

console.log(fib(100))


const fibWithArray =(n) =>{
    const array = Array(n+1).fill(0);
    array[1]=1;
    for(let i=0;i<=n; i++){
        array[i+1] += array[i];
        array[i+2] += array[i];
    }
    return array[n]
}

console.log(fibWithArray(100))

//time: O(n)
//space: O(n)