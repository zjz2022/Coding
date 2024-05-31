/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) {
    return []
  }
  let res = []
  let queue = [root]
  let count = 0
  let finalRes = []
  while (queue.length) {
    let len = queue.length
    res[count] = []
    while (len--) {
      const node = queue.shift()
      res[count].push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    count++
  }
  res.forEach((item) => {
    finalRes.push(item.slice(-1))
  })
  return finalRes
}
// @lc code=end

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.left = right === undefined ? null : right
}

let root = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(4))
)

console.log(rightSideView(root))
