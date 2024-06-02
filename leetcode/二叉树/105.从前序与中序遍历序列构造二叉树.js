/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)
}

var build = function (preorder, preStart, preEnd, inorder, inStart, inEnd) {
  if (preStart > preEnd) {
    return null
  }

  // root 节点对应的值就是前序遍历数组的第一个元素
  let rootVal = preorder[preStart]
  // rootVal 在中序遍历数组中的索引
  let index = inorder.findIndex((item) => item === rootVal)

  let leftSize = index - inStart
  // 先构造出当前根节点
  let root = new TreeNode(rootVal)
  // 递归构造左右子树
  root.left = build(
    preorder,
    preStart + 1,
    preStart + leftSize,
    inorder,
    inStart,
    index - 1
  )
  root.right = build(
    preorder,
    preStart + leftSize + 1,
    preEnd,
    inorder,
    index + 1,
    inEnd
  )
  return root
}
// @lc code=end
