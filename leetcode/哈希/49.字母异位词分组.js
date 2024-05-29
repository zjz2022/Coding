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
  // 创建一个Map对象，键为排序后的字符串，值为几个不同的原字符串（排序后都一样）的数组
  const map = new Map()

  // 遍历传入的strs数组
  for (let str of strs) {
    // 对当前字符串的每个字符进行排序，并转化为字符串作为键
    const key = [...str].sort().toString()

    // 检查map中是否有当前键，如果有，取出对应的值（值为数组），否则创建一个新的空数组
    const list = map.get(key) ? map.get(key) : []

    // 往这个数组中添加当前遍历的字符串
    list.push(str)

    // 在map中设置当前键和其对应的值（值为包含当前字符串的数组）
    map.set(key, list)
  }

  // 将map的所有值（即所有的字符串数组）转换为数组并返回

  return Array.from(map.values())
  // map.values() { [ 'cog', 'ocg', 'goc' ], [ 'dog', 'god' ] } 是一个对象哦！ 这里用 Array.from 就相当于把 {} 换成了 []
}

// @lc code=end

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
//  输出：[["eat","tea","ate"], ["tan","nat"], ["bat"]]
