/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let l = 0
  let r = 0
  const need = new Map()
  // 将t中的每个字符设置为key,值为出现的次数
  for (let c of t) {
    need.set(c, need.has(c) ? need.get(c) + 1 : 1)
  }
  let needType = need.size
  let res = ''
  while (r < s.length) {
    const c = s[r]
    // 遇到t中的字符，将字符数量减1，当该key数量为0时，needType-1
    if (need.has(c)) {
      need.set(c, need.get(c) - 1)
      if (need.get(c) === 0) needType -= 1
    }
    // 找到字符串，开始移动左指针
    while (needType === 0) {
      // 获取当前串
      const newRes = s.substring(l, r + 1)
      // 保存最小子串
      if (!res || newRes.length < res.length) res = newRes
      // 左指针当前字符
      const c2 = s[l]
      // 如果左子针当前字符在子串中，那么字符数加+1,因为左子针向右移动时会把当前元素移出去，此时needType ！== 0，跳出，继续移动右指针
      if (need.has(c2)) {
        need.set(c2, need.get(c2) + 1)
        if (need.get(c2) === 1) needType += 1
      }
      l += 1
    }
    // 移动右指针
    r += 1
  }
  return res
}
// @lc code=end
