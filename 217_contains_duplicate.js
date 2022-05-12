/**
 * @param {number[]} nums
 * @return {boolean}
 */

//low memory variant
var containsDuplicate = function(nums) {
    let isContainsDuplicate = false
    for(let i = 0; i < nums.length; i++){
        if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])){
            isContainsDuplicate = true
            break
        }
    }
    return isContainsDuplicate
};

//fastes variant
var containsDuplicate = function(nums) {
    if([...new Set(nums)].length !== nums.length)
        return true
    return false
};