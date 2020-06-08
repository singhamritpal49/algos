function sortedSquaredArray(nums) {
    if (!nums.length)
        return "INVALID INPUT";
    let result = [];
    let left = 0
    let right = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > nums[right]) {
            result[i] = nums[left] * nums[left];
            left++
        } else {
            result[i] = nums[right] * nums[right];
            right--;
        }
    }
    return result;

}
sortedSquaredArray([-7,-3,-1,4,8,12])
