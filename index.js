
const nums = [1,2,3,4]
//Output: [1,3,6,10]

var runningSum = function(nums) {
   const ans = [];
    for(let i = 0; i < nums.length; i++){
      if(i === 0){
        ans.push(nums[i])  
      } else {
        ans.push(ans[i-1] + nums[i])
      }
      console.log("answer var:", ans);
    }
  return ans;
};

runningSum(nums);