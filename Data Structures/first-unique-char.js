var firstUniqChar = function(s) {
    let map = new Map();
    for(let i = 0; i < s.length; i++) {
       if(map.has(s[i])){
           map.set(s[i],-1)
       } else {
           map.set(s[i], i)
       }
      console.log(map)
    }
    for(let [key, value] of map){
        if(value !== -1){
            return value;
        }
    }
    return -1
};

firstUniqChar("leetcode")