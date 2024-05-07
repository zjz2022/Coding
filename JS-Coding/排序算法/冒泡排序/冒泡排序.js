// 时间复杂度
function sort(nums) {
  for (let i = 0; i < nums.length; i++)
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        ;[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  return nums
}

let nums = [2, 6, 7, 8, 4, 7, 8, 3]
console.log(sort(nums))
