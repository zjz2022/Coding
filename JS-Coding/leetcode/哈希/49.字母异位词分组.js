/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 定义一个名为groupAnagrams的函数，接收一个string类型的数组，返回一个二维string数组。
var groupAnagrams = function (strs) {
  const map = new Map()
  for (let str of strs) {
    const key = [...str].sort().toString()
    const list = map.get(key) ? map.get(key) : []
    list.push(str)
    map.set(key, list)
  }
  return Array.from(map.values())
}

// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
// 输出：[["eat","tea","ate"], ["tan","nat"], ["bat"]]

// console.log(groupAnagrams(['cog', 'dog', 'god', 'ocg', 'goc']))
// 输出：[["cog", "ocg", "goc"], ["dog", "god"]]

// console.log(groupAnagrams(['room', 'moor', 'moro', 'test', 'sett']))
// 输出：[["room", "moor", "moro"], ["test", "sett"]]

// console.log(groupAnagrams(['']))
// 输出：[[""]]

// console.log(groupAnagrams(['a']))
// 输出: [["a"]]
// @lc code=end
