/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  // 返回的结果
  let result = 0
  const dfs = function (root) {
    // 递归结束条件
    if (!root) {
      return 0
    }
    let left = dfs(root.left)
    let right = dfs(root.right)
    // left+right就是当前节点的直径
    // result是遍历的以前节点的最大值
    result = Math.max(result, left + right)
    // 逆想思维求高度
    return Math.max(left, right) + 1
  }
  // 进行深度优先遍历
  dfs(root)
  return result
}
// @lc code=end
