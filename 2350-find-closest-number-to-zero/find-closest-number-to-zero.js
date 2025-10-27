/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let closest = nums[0];
    for(let i = 0; i < nums.length; i++){
            if(Math.abs(nums[i]) < Math.abs(closest))
                closest = nums[i]
    }
    if(closest < 0 && nums.includes(Math.abs(closest)))
        return Math.abs(closest);
    
    return closest
};