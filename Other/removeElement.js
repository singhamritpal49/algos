var removeElement = function(nums, val) {
       let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (val != nums[i]) {
             result.push(nums[i])
        }

    }
    return result
};

removeElement([1, 2, 4, 4, 5, 6],4)
