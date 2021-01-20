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
  
  const bestSumWithArray = (target,inputArray) =>{
    const array = Array(target+1).fill(null)
    array[0] = []
    for(let i=0;i<target;i++){
      if(array[i]!=null){
        for(let item of inputArray){
          array[i+item]
          const temp=[item,...array[i]]
          if (array[i+item] == null || array[i+item].length>temp.length) {
            array[i+item]=temp;
          }
        }
      }
    }
    return array[target]
  }

  console.log(bestSumWithMemo(100,[1,2,5,25])) 
