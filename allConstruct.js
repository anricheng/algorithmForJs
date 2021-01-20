const allConstruct = (target,array) =>{
    if(target === '') return [[]];
    let result = [];
    for(let word of array){
        if(target.indexOf(word)===0){
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix,array);
            const targetWays = suffixWays.map(way => [word,...way]);
            result.push(...targetWays)
        }
    }
    return result;
}

console.log(allConstruct('purple',['purp','p','ur','le','purpl']));





const allConstructWithMemo = (target,array,memo={}) =>{
    if (target in memo) return memo[target]
    if(target === '') return [[]];
    let result = [];
    for(let word of array){
        if(target.indexOf(word)===0){
            const suffix = target.slice(word.length);
            const suffixWays = allConstructWithMemo(suffix,array,memo);
            const targetWays = suffixWays.map(way => [word,...way]);
            result.push(...targetWays)
        }
    }
    memo[target]=result;
    return result;
}

console.log(allConstructWithMemo('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz',['a','aa','aaaa','aaaaaa','aaaaaaaa']));