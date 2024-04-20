/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let map = new Map()
  let start = 0
  let end = 0
  let res = []
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = i
  }
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, map[s[i]])
    if (i == end) {
      res.push(end - start + 1)
      start = i + 1
    }
  }
  return res
}
// @lc code=end
/*
步骤1: 创建一个哈希映射 map，来保存字符串 s 中每个字符最后一次出现的索引：

s: ababcbacadefegdehijhklij
map (字符:最后一次出现的索引): {'a': 8, 'b': 5, 'c': 7, 'd': 14, 'e': 15, 'f': 11, 'g': 13, 'h': 19, 'i': 22, 'j': 23, 'k': 20, 'l': 21}


步骤2: 创建两个变量 start 和 end 来记录每个分区的起始和结束位置，即初始值都是0。

步骤3: 遍历字符串 s，通过 map 得到当前字符最后一次出现的位置，用 end 记录当前准备切割的分区中，字符最后一次出现的最大索引。

例如：
- 当 i=0 (字符'a') 时，map 中 'a' 的最后一次出现位置是 8，因此 end 更新为 8。
- 当 i=1 (字符'b') 时，map 中 'b' 的最后一次出现位置是 5，但 end 仍然保持为 8，因为 8 是大于 5 的。

步骤4: 当遍历到的位置 i 到达当前分区的 end 时（也就是说我们已经到达了当前准备切割的分区中，字符最后一次出现的最大索引位置），这时候我们可以开始切割分区了。通过 end - start + 1 来计算当前分区的长度，并添加到结果集 result 中。然后更新 start 为下一个分区的起始位置，也就是当前结束位置 end 的下一个位置，即 i+1。

举个例子：
- 当 i/end =1, end（即1）计算的分区中字符最后一次出现的最大索引，然后将分区长度 end-start+1（即2）添加到结果数组，然后更新 start 为 i+1（即2）。

这个过程循环下去，直至整个字符串遍历完毕。这样我们就得到了每个符合条件的分区长度。

例如，对于 "ababcbacadefegdehijhklij" 这个字符串，最终会划分出三个分区：ababcbaca, defegde, hijhklij，他们的长度分别是：9,7,8。所以函数最后返回的结果是：9,7,8。
*/
