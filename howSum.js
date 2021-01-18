const howSum = (target,array) =>{ 
    if(target === 0) return [];
    if(target <  0) return null;
  
    for(let i of array){
        const remainder = target - i;
        const remainderResult = howSum(remainder,array);
      if (remainderResult!=null) return [...remainderResult,i];
    }
  
    return null
  }
  
  console.log(howSum(100,[2,3])) 

  // Brute Force 
  //time:O(n^m * m)
  //space: O(m)
  

  const howSumWithMemo = (target,array,memo={}) =>{ 
    if(target in memo) return memo[target]
    if(target === 0) return [];
    if(target <  0) return null;
  
    for(let i of array){
        const remainder = target - i;
        const remainderResult = howSumWithMemo(remainder,array);
      if (remainderResult!=null) {
          memo[target] = [...remainderResult,i];
          return memo[target];
        }
    }
  
    return null;
  }
  
  console.log(howSumWithMemo(100,[3,4])) 
  // memorized
  //time:
  //space: