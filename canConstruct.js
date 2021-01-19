const canConstruct = (target,array) =>{
    if (target === '') return true;
    for(let word of array){
        if (target.indexOf(word)===0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix,array)) {
                return true;
            }
            
        }
    }

    return false;
}

//console.log("canConstruct start:")

//console.log(canConstruct("abcdefg",["ab","abc","cd","defg","abcd"]))

//console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["e","ee","eee","eeee","eeeeee"]))
//console.log("canConstruct end:")



const canConstructWithMemo = (target,array,memo={}) =>{
    if (target in memo) {
        return memo[target];
    }
    if (target === '') return true;
    for(let word of array){
        if (target.indexOf(word)===0) {
            const suffix = target.slice(word.length);
            if (canConstructWithMemo(suffix,array,memo)) {
                memo[target]=true
                return true;
            }  
        }
    }
    memo[target]=false

    return false;
}

console.log("canConstructWithMemo start:")
console.log(canConstructWithMemo("abcdefg",["ab","abc","cd","defg","abcd"]))
console.log(canConstructWithMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["e","ee","eee","eeee","eeeeee"]))
console.log("canConstructWithMemo end:")
