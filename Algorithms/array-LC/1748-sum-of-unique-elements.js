/**
 * @param {number[]} nums
 * @return {number}
 */

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.

const nums = [1,1,1,1];
//const nums = [1,2,3,2];

var sumOfUnique = function(nums) {
  let ans = 0;
  let map = new Map();
  for(let i = 0; i < nums.length; i++){
    if(!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1)
    }
  }
  map.forEach(function(value, key){
    if(value === 1){
      ans += key;
    }
  })
  return ans;
};

console.log(sumOfUnique(nums));