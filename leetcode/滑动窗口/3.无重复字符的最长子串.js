/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let window = new Map() // 创建一个 Map 来储存字符及其出现次数。
  let left = 0,
    right = 0,
    res = 0 // 初始化左、右指针和结果值。
  while (right < s.length) {
    // 当右指针还没有到达字符串的尾端时，继续循环。
    let c = s[right] // 取出右指针所在位置的字符。
    right++ // 向右移动右指针。
    // 在一个表达式 A || B 中，如果 A 为真（也就是 Boolean 值为 true），则返回 A 的值。否则，返回 B 的值。
    window.set(c, (window.get(c) || 0) + 1) // 在 Map 中更新此字符的计数，如果字符不存在，则初始化其计数为 1。
    while (window.get(c) > 1) {
      // 当字符的计数大于1时（说明字符重复），因此需要收缩窗口。
      let d = s[left] // 取出左指针所在位置的字符。
      left++ // 向右移动左指针，也就是收缩窗口。
      // 左指针会一直移动，穿过所有的 d，直到它碰到 c，便会停下来。这样，我们就成功地消除了窗口内的重复字符，保证了窗口内的所有字符都是唯一的。
      window.set(d, window.get(d) - 1) // 在Map中更新此字符的计数，减小其计数值。
    }
    res = Math.max(res, right - left) // 更新最大无重复字符子串的长度，取当前最大长度和新窗口长度的较大值。
  }
  return res // 返回最大无重复字符子串的长度。
}
// @lc code=end

console.log(lengthOfLongestSubstring('abcabcbb'))
