/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Input: nums = [1,2,3,1]
// Output: true

// Input: nums = [1,2,3,4]
// Output: false

const nums = [1,2,3,4];

var containsDuplicate = function(nums) {
  const map = new Map();
  let ans = false;
  for(var i = 0; i < nums.length; i++){
      if(!map.has(nums[i])){
          map.set(nums[i], 1);
      } else {
          map.set(nums[i], map.get(nums[i]) + 1)
      }
  }
  map.forEach((value) => {
    if(value !== 1){
      ans = true;
    }
  });
  return ans;
};

console.log(containsDuplicate(nums));