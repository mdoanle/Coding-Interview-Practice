var runningSum = function(nums) {
   const ans = [];
    for(let i = 0; i < nums.length; i++){
      if(i === 0){
        ans.push(nums[i])  
      } else {
          ans.push(nums[i-1] + nums[i])
      }
    return ans;
    }
};