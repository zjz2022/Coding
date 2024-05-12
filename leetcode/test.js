var jump = function (nums) {
  let n = nums.length
  let maxPos = 0 // maxPos表示，在下一步，你能到达的最远距离 i+nums[i]
  let end = 0 // end表示，在当前步，你能到达的最远距离,用maxPos记录
  let steps = 0

  for (let i = 0; i < n - 1; i++) {
    if (i <= maxPos) {
      console.log('maxPos为', maxPos)
      console.log('i为', i)
      console.log('nums[i]为', nums[i])
      console.log('i + nums[i]为', i + nums[i])
      maxPos = Math.max(maxPos, i + nums[i])
      console.log(`在索引${i}处，能跳到最远的位置是取maxPos和i+nums[i]两者的较大值${maxPos}`)
      if (i == end) {
        console.log('i为', i)
        console.log('更新前，end为', end)

        console.log('因为i == end，所以要更新end = maxPos')
        console.log('maxPos为', maxPos)

        end = maxPos
        steps++
        console.log(`在索引${i}处，增加步数，新步数为${steps}`)
      }
    }
  }

  return steps
}

jump([1, 1, 0, 1])
