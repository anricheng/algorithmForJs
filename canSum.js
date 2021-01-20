const canSum = (target,array) =>{ 
  if(target === 0) return true;
  if(target <  0) return false;

  for(let i of array){
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
        const reminder = target - i;
      if (canSumWithMemo(reminder,array,memo)){
          memo[target]=true
          return true;
      }
    }
  
    return false;
  }
  
console.log(canSumWithMemo(300,[7,3]))

const canSumWithArray = (target,inputArray) =>{
  const array = Array(target+1).fill(false)
  array[0] = true
  for(let i=0;i<target;i++){
    if(array[i]){
      for(let item of inputArray){
        array[i+item]=true
      }
    }
  }
  return array[target]
}

console.log(canSumWithArray(7,[7,3]))