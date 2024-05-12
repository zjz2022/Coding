/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
/*
 */
var levelOrder = function (root) {
  if (!root) return []
  let result = []
  let len = 0
  let queue = [root]
  while (queue.length) {
    len = queue.length
    result.push([])
    while (len--) {
      let n = queue.shift()
      result.at(-1).push(n.val)
      n.left && queue.push(n.left)
      n.right && queue.push(n.right)
    }
  }
  return result
}

// @lc code=end
