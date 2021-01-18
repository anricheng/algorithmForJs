const canSum = (target,array) =>{ 
  if(target === 0) return true;
  if(target <  0) return false;

  for(let i of array){
      console.log(i);
      const reminder = target - i;
    if (canSum(reminder,array)) return true;
  }

  return false
}

console.log(canSum(100,[2,3])) 



const canSumWithMemo = (target,array,memo={}) =>{ 
    if(target in memo) return memo[target];
    if(target === 0) return true;
    if(target <  0) return false;
  
    for(let i of array){
        console.log(i);
        const reminder = target - i;
      if (canSumWithMemo(reminder,array,memo)){
          memo[target]=true
          return true;
      }
    }
  
    return false;
  }
  
  console.log(canSumWithMemo(300,[7,3])) 