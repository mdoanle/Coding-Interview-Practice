/**
 * @param {number[]} nums
 * @return {number}
 */

// Input: nums = [2,2,1]
// Output: 1

const nums = [2,2,1]

var singleNumber = function(nums) {
    const map = new Map();
    for(const num of nums){ 
      if(!map.has(num)){
            map.set(num, 1);
        } else {    
        map.set(num, map.get(num) + 1);
        }
    }
    for(let [key, value] of map){
        if(value === 1){
            return key;
        }
    }
};

console.log(singleNumber(nums));