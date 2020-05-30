function solve(nums) {

        let lastElement = nums.length -1;
        for(let i = 0; i < nums.length/2;i++) {
            let temp = nums[i];
            nums[i] = nums[lastElement]
            nums[lastElement] = temp;
            lastElement--;
        }
        return nums;
}
solve([5,1,4,1,7,1,4,3,9])