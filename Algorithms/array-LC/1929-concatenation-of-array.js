/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
   const length = nums.length;
    let ans = nums;
    for(let i = 0; i < length; i++){
        ans.push(nums[i]);
    }
    return ans;
};