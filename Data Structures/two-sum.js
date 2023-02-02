//Input: nums = [2,7,11,15], target = 9
//: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

let twoSum = (nums, target) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;
    if (map.has(num2)) {
      return [map.get(num2), i]
    }
    map.set(num1, i);
  }
}

twoSum([2, 7, 11, 15], 9)