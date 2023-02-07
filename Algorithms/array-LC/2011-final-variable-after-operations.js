/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
   let ans = 0;
    for(operation in operations){
        if(operation === "++X" || operation === "X++"){
            ans += 1;
        } else if(operation === "--X" || operation === "X--"){
            ans -= 1;
        }
    }
    return ans;
};