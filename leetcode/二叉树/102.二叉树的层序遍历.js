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
  // 如果树的根节点为空（即树为空），那么函数会立即返回一个空数组。
  if (!root) return []
  // 定义了存储结果的数组 result，以及队列长度的变量 len（初始值为0），并将根节点放入队列 queue 中。
  let result = []
  let len = 0,
    // 这一步是在创建一个队列queue，并把二叉树的根节点root作为队列的第一个元素。队列是一种特殊的列表，只能在列表的一端（称为队尾）插入元素，在另一端（称为队头）移除元素。
    // queue = [root]这一步操作实际上就是初始化了一个队列，并把二叉树的根节点放入了这个队列。
    queue = [root]
  // 当队列不为空，即还有节点待处理时，进入循环。
  while (queue.length > 0) {
    // 获取当前队列的长度，即当前层的节点数。
    len = queue.length
    // 在结果数组中添加一个新的子数组，用于存放当前层的节点值。
    result.push([])
    // 遍历当前层的所有节点，将它们从队列中移出，同时将它们的值添加到结果数组的最末尾子数组中。如果这些节点有左孩子或右孩子，就将这些孩子节点加入到队列中。
    while (len--) {
      // shift是移除数组头部元素，并返回该元素的值
      const n = queue.shift()
      // 负数索引表示从数组的末尾开始计数，这里最后一个元素是一个数组，我是要添加到这个数组里面，所以我才要写 result.at(-1)
      // push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
      // 这一步就是，在result数组的最后一个数组里面，添加n.val
      result.at(-1).push(n.val)
      // 如果 n.left 存在（即不为 null 或 undefined），则执行 queue.push(n.left)，即把 n.left 放入队列 queue 中
      n.left && queue.push(n.left)
      // 同理，如果右边有值，就存入队列中
      n.right && queue.push(n.right)
    }
  }
  // 在处理完所有层之后，返回结果数组。
  return result
  // 所以，最终函数返回的是一个二维数组，其中每个子数组保存了树中对应层级的所有节点值。
}

// @lc code=end

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// 创建一个测试用的 TreeNode
let root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
)

// 测试 levelOrder 函数
console.log(levelOrder(root)) // 期望输出： [[3], [9,20], [15,7]]
