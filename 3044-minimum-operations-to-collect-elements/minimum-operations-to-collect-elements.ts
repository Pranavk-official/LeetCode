function minOperations(nums: number[], k: number): number {
    const collection = new Set<number>();
    let ops: number = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        ops++;
        const currentNum = nums[i];

        // We only care about numbers that are between 1 and k
        if (currentNum <= k) {
            collection.add(currentNum);
        }

        if(collection.size === k){
            return ops;
        }
    }

    return ops;
};