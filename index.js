/**
 * @param {string[]} operations
 * @return {number}
 */
const operations = ["--X","X++","X++"]

var finalValueAfterOperations = function(operations) {
   let ans = 0;
    for(let i = 0; i < operations.length; i++){
        if(operations[i] === "++X" || operations[i] === "X++"){
            ans++;
        } else if(operations[i] === "--X" || operations[i] === "X--"){
            ans--;
        }
      console.log(ans);
    }
    return ans;
};

finalValueAfterOperations(operations);

