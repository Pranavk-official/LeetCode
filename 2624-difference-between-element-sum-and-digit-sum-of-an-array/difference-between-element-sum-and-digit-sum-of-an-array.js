/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elemSum = 0;
    let digitSum = 0;

    let len = nums.length;

    for(let i = 0; i < len; i++){
        elemSum += nums[i]
        
        let num = nums[i]
        while(num > 0){
            const digit = num % 10;
            digitSum += digit;
            num = (num - digit) / 10;
        }
    }

    return Math.abs(elemSum - digitSum);
};