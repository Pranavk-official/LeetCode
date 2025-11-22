/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let total_sum = n * (n + 1) / 2 ;
    let count_multiple = Math.floor(n/m)
    let div_sum = m * (count_multiple * ( count_multiple +1 )/2)

    return total_sum - (2*div_sum)
};