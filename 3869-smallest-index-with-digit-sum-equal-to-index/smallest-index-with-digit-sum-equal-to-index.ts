function getSumOfDigits(num: number): number {
    let sum: number = 0;
    let n: number = num;
    while (n > 0){
        let d: number = n%10;
        n = Math.floor(n/10)
        sum += d;
    }

    
    return sum
}

function smallestIndex(nums: number[]): number {

    for(let i: number = 0; i <= nums.length - 1; i++){
        
        if(getSumOfDigits(nums[i]) === i ){
            return i
        }
    }

    return -1
};