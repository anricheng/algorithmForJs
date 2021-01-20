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
  //time:O(n^m * m)  m is target and n is the length of array
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
  
  console.log(howSumWithMemo(79,[3,4])) 
  // memorized
  //time: O(n*m^2)
  //space:O(m)
  

  const howSumWithArray = (target,inputArray) =>{
    const array = Array(target+1).fill(null)
    array[0] = []
    for(let i=0;i<target;i++){
      if(array[i]!=null){
        for(let item of inputArray){
          array[i+item]=[item,...array[i]]
        }
      }
    }
    return array[target]
  }

  console.log(howSumWithArray(79,[3,4])) 
