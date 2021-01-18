const gridTraveler = (m,n) => {
    if(m === 1 && n === 1) return 1;
    if(m ===0 || n === 0) return 0;

    return gridTraveler(m-1,n)+gridTraveler(m,n-1);
};

console.log(gridTraveler(5,4))
console.log(gridTraveler(4,5))


 const gridTravelerWithMemo = (m,n,memo={}) => {
     const key1 = m +','+n
     const key2 = n +','+m
     if(key1 in memo){
         return memo[key1]
     }
     if(key2 in memo){
         return memo[key2]
     }
     if(m === 1 && n === 1) return 1;
     if(m ===0 || n === 0) return 0;
 
     const result = gridTravelerWithMemo(m-1,n,memo)+gridTravelerWithMemo(m,n-1,memo);
     memo[key1]=result;
     memo[key2]=result;
     return result;
 }


console.log(gridTravelerWithMemo(18,18))
console.log(gridTravelerWithMemo(18,18))