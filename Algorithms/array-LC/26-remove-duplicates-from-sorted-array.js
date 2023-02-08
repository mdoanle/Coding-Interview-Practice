/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [1,1,2]
var removeDuplicates = function(nums) {
    const set = new Set();
    for(let i = 0; i < nums.length; i++){
        if(set.has(nums[i])){
            continue;
        } else {
            set.add(nums[i])
        }
    }
    let ans = set.size
  return ans;
};

removeDuplicates(nums);