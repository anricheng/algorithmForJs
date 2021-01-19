const bestSum = (target,array) =>{ 
    if(target === 0) return [];
    if(target <  0) return null;
    let shortTest = null;
    for(let i of array){
        const remainder = target - i;
        const remainderResult = bestSum(remainder,array);
      if (remainderResult!==null) {
        const result = [...remainderResult,i]
        if (shortTest===null || result.length < shortTest.length) {
          shortTest = [...remainderResult,i];
        }
      }
    }
  
    return shortTest
  }
  
    console.log(bestSum(10,[1,2,5,25])) 

  // Brute Force 
  //time:O(n^m * m)  m is target and n is the length of array
  //space: O(m)
  

  const bestSumWithMemo = (target,array,memo={}) =>{ 
    if(target in memo) return memo[target];
    if(target === 0) return [];
    if(target <  0) return null;
    let shortTest = null;
    for(let i of array){
        const remainder = target - i;
        const remainderResult = bestSumWithMemo(remainder,array,memo);
        if (remainderResult!== null ) {
            const result = [...remainderResult,i]
            if (shortTest===null || result.length < shortTest.length) {
              shortTest = [...remainderResult,i];
              // console.log(shortTest)
            }
          }
    }
    memo[target]=shortTest
    return shortTest;
  }
  
   console.log(bestSumWithMemo(100,[1,2,5,25])) 
  // memorized
  //time: O(n*m^2)
  //space:O(m^2)
  