function areaOfMaxDiagonal(dimensions: number[][]): number {
    for(let i = 0; i < dimensions.length; i++){
        let maxArea: number = 0;
        let maxDiagonal: number = 0;

        for(const [length, width] of dimensions){
            // Find diagonal^2 ?
            // Pythagorean Theorem : d^2 = l^2 + w^2

            const currentDiagonal: number = length * length + width * width;

            if(maxDiagonal < currentDiagonal){
                maxDiagonal = currentDiagonal;
                maxArea = length * width
            }else if (maxDiagonal === currentDiagonal){
                maxArea = Math.max(maxArea, length * width)
            }
        }

        return maxArea;
    }
};