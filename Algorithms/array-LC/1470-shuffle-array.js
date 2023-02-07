/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
//nums = [2,5,1,3,4,7], n = 3
//Output: [2,3,5,4,1,7]

var shuffle = function(nums, n) {
    let ans = [];
    let backArr = nums.slice(n - 1);
    for(let i = 0; i < nums.length; i++){
        ans.push(nums[i], backArr[i]);
    }
    return ans;
};