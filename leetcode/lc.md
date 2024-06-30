https://github.com/lf2021/Front-End-Interview/blob/master/07.%E7%AE%97%E6%B3%95%E5%88%B7%E9%A2%98/leetcode%E6%80%9D%E8%B7%AF.md

# 掌握

题目

思路（巧妙，尽量用异或，二进制，等巧妙高效的解法）

代码

时间复杂度（具体计算）

应用场景（比如diff算法）

# 哈希

## 两数之和 	

给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 **和为目标值** *`target`* 的那 **两个** 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

**示例 1：**

```
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 创建一个表，用来存放数组中的元素及其在数组中的下标
  let map = new Map()

  // 遍历数组
  for (let i = 0; i < nums.length; i++) {
    let k = target - nums[i] // 计算目标差值

    // 如果表中已经存在差值，则找到了符合条件的两个元素
    if (map.has(k)) {
      // map.get(k) 是第一个元素的数组下标， i 是当前元素的数组下标
      return [map.get(k), i]
    }

    // 将当前元素及其在数组中的下标存入表中
    map.set(nums[i], i)
  }

  // 如果没有找到符合条件的两个元素，返回空数组
  return []
}

console.log(twoSum([2, 3, 6, 7, 8], 10))
```

## 字母异位词分组

给你一个字符串数组，请你将 **字母异位词** 组合在一起。可以按任意顺序返回结果列表。

**字母异位词** 是由重新排列源单词的所有字母得到的一个新单词。

**示例 1:**

```
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

```js
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
```

## 最长连续序列

给定一个未排序的整数数组 `nums` ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 `O(n)` 的算法解决此问题。

**示例 1：**

```
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
```

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // 转化成哈希集合，为了快速查找哈希集合中是否存在某个元素。
  // 因为在哈希集合中查找元素的时间复杂度为O(1)，从而提高了算法的效率。
  let set = new Set(nums)

  // 初始化最长连续子序列的长度为0
  let res = 0

  // 对哈希集合中的每个元素进行迭代
  for (let num of set) {
    // 如果num-1存在于集合中，说明num不是连续子序列的第一个元素，
    // 所以我们继续下一个元素的迭代，寻找新的序列的可能起点
    if (set.has(num - 1)) continue

    // 如果num-1不存在于集合中，说明num可以作为一个新的连续子序列的起点，
    // 因此开始向下一个元素进行检索，并计算连续子序列的长度
    let curNum = num // 当前判断的数字
    let curLen = 1 // 初始化当前序列长度为1

    // 如果集合中存在curNum+1，将curNum更新为curNum+1，并将当前长度加1
    // 循环此过程，直到集合中不存在curNum+1为止
    while (set.has(curNum + 1)) {
      curNum += 1
      curLen += 1
    }
    // 比较并更新已知的最长连续子序列长度
    // Math.max是取两个参数中的最大值
    res = Math.max(res, curLen)
  }

  // 返回最长连续子序列的长度
  return res
}
// @lc code=end

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
```



# 二叉树

## 二叉树的中序遍历

给定一个二叉树的根节点 `root` ，返回 *它的 **中序** 遍历* 。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/inorder_1-1717158619085-5.jpg)

```
输入：root = [1,null,2,3]
输出：[1,3,2]
```

```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = []
  function pushRoot(root) {
    if (root !== null) {
      if (root.left !== null) {
        pushRoot(root.left)
      }
      result.push(root.val)
      if (root.right !== null) {
        pushRoot(root.right)
      }
    }
  }
  pushRoot(root)
  return result
}
// @lc code=end

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null))

console.log(inorderTraversal(root))
```

## 二叉树的前序遍历

给你二叉树的根节点 `root` ，返回它节点值的 **前序** 遍历。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/inorder_1.jpg)

```
输入：root = [1,null,2,3]
输出：[1,2,3]
```

```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let arr = []

  var fun = (node) => {
    if (node) {
      arr.push(node.val)
      fun(node.left)
      fun(node.right)
    }
  }
  fun(root)
  return arr
}
// @lc code=end

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null))

console.log(preorderTraversal(root))

```

## 二叉树的层序遍历

给你二叉树的根节点 `root` ，返回其节点值的 **层序遍历** 。 （即逐层地，从左到右访问所有节点）。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/tree1.jpg)

```
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]
```

```js
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
```

## 二叉树的最大深度

给定一个二叉树 `root` ，返回其最大深度。

二叉树的 **最大深度** 是指从根节点到最远叶子节点的最长路径上的节点数。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/tmp-tree.jpg)

 

```
输入：root = [3,9,20,null,null,15,7]
输出：3
```

```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}
// @lc code=end

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

let root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
)

console.log(maxDepth(root))
```

## 翻转二叉树

给你一棵二叉树的根节点 `root` ，翻转这棵二叉树，并返回其根节点。

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/invert1-tree.jpg)

```
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
```

```js
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root == null) return null
  //递归翻转左边,其实就是从最外层叶子节点开始翻转。形成左边子树。
  var left = invertTree(root.left)
  //递归翻转右边，其实就是从最外层叶子节点开始翻转。形成右边子树。
  var right = invertTree(root.right)
  //左右子树 交换
  root.left = right
  root.right = left
  return root
}
// @lc code=end
```

## 对称二叉树

给你一个二叉树的根节点 `root` ， 检查它是否轴对称。

 

**示例 1：**

![img](https://pic.leetcode.cn/1698026966-JDYPDU-image.png)

```
输入：root = [1,2,2,3,4,4,3]
输出：true
```

```js
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true
  const isMirror = (l, r) => {
    if (!l && !r) return true // 两个空子树为镜像
    if (
      l &&
      r &&
      l.val === r.val &&
      isMirror(l.left, r.right) &&
      isMirror(l.right, r.left)
    ) {
      return true
    }
    return false
  }
  return isMirror(root.left, root.right)
}
// @lc code=end
```

## 二叉树的直径

给你一棵二叉树的根节点，返回该树的 **直径** 。

二叉树的 **直径** 是指树中任意两个节点之间最长路径的 **长度** 。这条路径可能经过也可能不经过根节点 `root` 。

两节点之间路径的 **长度** 由它们之间边数表示。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/diamtree.jpg)

```
输入：root = [1,2,3,4,5]
输出：3
解释：3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。
```

```js
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
```



## 将有序数组转换为二叉搜索树

给你一个整数数组 `nums` ，其中元素已经按 **升序** 排列，请你将其转换为一棵 平衡 二叉搜索树。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/btree1.jpg)

```
输入：nums = [-10,-3,0,5,9]
输出：[0,-3,9,-10,null,5]
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：
```

```js
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  // 由于数组是排序好的，因此一个思路就是将数组分成两半，一半是左子树，另一半是右子树
  // 然后运用“树的递归性质”递归完成操作即可。
  if (nums.length === 0) return null
  const mid = nums.length >> 1
  const root = new TreeNode(nums[mid])

  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid + 1))
  return root
}
// @lc code=end	
```

## 验证二叉搜索树

给你一个二叉树的根节点 `root` ，判断其是否是一个有效的二叉搜索树。

**有效** 二叉搜索树定义如下：

- 节点的左子树只包含 **小于** 当前节点的数。
- 节点的右子树只包含 **大于** 当前节点的数。
- 所有左子树和右子树自身必须也是二叉搜索树。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/tree1-1717163068905-17.jpg)

```
输入：root = [2,1,3]
输出：true
```

## 中序遍历

二叉搜索树需要满足以下三个条件：

- 节点的左子树只包含 小于 当前节点的数。
- 节点的右子树只包含 大于 当前节点的数。
- 所有左子树和右子树自身必须也是二叉搜索树。

1. 二叉搜索树在中序遍历时得到的序列一定是升序的
2. 进行中序遍历，判断当前节点是否大于前一个节点
3. 如果比前一个大，说明满足，则继续遍历，否则直接返回 false

**递归**

```js
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let prev = -Infinity
  let result = true
  function inorder(root) {
    if (root === null) return
    inorder(root.left)
    if (root.val <= prev) {
      result = false
      return
    }
    prev = root.val
    inorder(root.right)
  }
  inorder(root)
  return result
}
// @lc code=end
```



## 二叉搜索树中第K小的元素

给定一个二叉搜索树的根节点 `root` ，和一个整数 `k` ，请你设计一个算法查找其中第 `k` 个最小元素（从 1 开始计数）。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/kthtree1.jpg)

```
输入：root = [3,1,4,null,2], k = 1
输出：1
```

```js
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const res = []

  function d(p) {
    if (!p || res.length === k) return
    d(p.left)
    res.push(p.val)
    d(p.right)
  }

  d(root)

  return res[k - 1]
}
// @lc code=end
```

## 二叉树的右视图

给定一个二叉树的 **根节点** `root`，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

 

**示例 1:**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/tree.jpg)

```
输入: [1,2,3,null,5,null,4]
输出: [1,3,4]
```

```js
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
```



## 二叉树展开为链表

给你二叉树的根结点 `root` ，请你将它展开为一个单链表：

- 展开后的单链表应该同样使用 `TreeNode` ，其中 `right` 子指针指向链表中下一个结点，而左子指针始终为 `null` 。
- 展开后的单链表应该与二叉树 [**先序遍历**](https://baike.baidu.com/item/先序遍历/6442839?fr=aladdin) 顺序相同。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/flaten.jpg)

```
输入：root = [1,2,5,3,4,null,6]
输出：[1,null,2,null,3,null,4,null,5,null,6]
```

```js
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (root == null) return

  flatten(root.left)
  flatten(root.right)

  // 1. 左右子树已经被拉平成一条链表
  let left = root.left
  let right = root.right

  // 2. 将左子树设为右子树
  root.left = null
  root.right = left

  // 3. 将原先的右子树接到当前右子树的末端
  let p = root
  while (p.right != null) {
    p = p.right
  }
  p.right = right
}
// @lc code=end
```



## 从前序与中序遍历序列构造二叉树

给定两个整数数组 `preorder` 和 `inorder` ，其中 `preorder` 是二叉树的**先序遍历**， `inorder` 是同一棵树的**中序遍历**，请构造二叉树并返回其根节点。

 

**示例 1:**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/tree-1717176966256-3.jpg)

```
输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
输出: [3,9,20,null,null,15,7]
```

```js
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
```



## 路径总和Ⅲ

给定一个二叉树的根节点 `root` ，和一个整数 `targetSum` ，求该二叉树里节点值之和等于 `targetSum` 的 **路径** 的数目。

**路径** 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/pathsum3-1-tree.jpg)

```
输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
输出：3
解释：和等于 8 的路径有 3 条，如图所示。
```

```js
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, sum) {
  if (root === null) {
    return 0
  }
  // 以root为根的树中等于sum的路径树 = 左子树中的路径数 + 右子树中的路径数 + 以root为起点的路径数
  return pathSum(root.left, sum) + pathSum(root.right, sum) + dfs(root, sum)
  function dfs(root, sum) {
    if (root === null) {
      return 0
    }
    sum -= root.val
    return (sum === 0 ? 1 : 0) + dfs(root.left, sum) + dfs(root.right, sum)
  }
}
// @lc code=end
```

## 二叉树的最近公共祖先

给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

[百度百科](https://baike.baidu.com/item/最近公共祖先/8918834?fr=aladdin)中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（**一个节点也可以是它自己的祖先**）。”

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/binarytree.png)

```
输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出：3
解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
```

```js
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root === p || root === q) {
    return root
  }

  let x = lowestCommonAncestor(root.left, p, q)
  let y = lowestCommonAncestor(root.right, p, q)

  if (x && y) {
    return root
  } else {
    return x || y // 返回存在的那一个
  }
}
// @lc code=end
```

## 二叉树中的最大路径和

二叉树中的 **路径** 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 **至多出现一次** 。该路径 **至少包含一个** 节点，且不一定经过根节点。

**路径和** 是路径中各节点值的总和。

给你一个二叉树的根节点 `root` ，返回其 **最大路径和** 。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/exx1.jpg)

```
输入：root = [1,2,3]
输出：6
解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
```

```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let ans = Number.MIN_SAFE_INTEGER
  var oneSideMax = function (root) {
    if (root === null) return 0
    let left = Math.max(0, oneSideMax(root.left))
    let right = Math.max(0, oneSideMax(root.right))
    ans = Math.max(ans, left + right + root.val)
    return Math.max(left, right) + root.val
  }

  oneSideMax(root)
  return ans
}
// @lc code=end
```

## 根节点到叶节点数字之和

给你一个二叉树的根节点 `root` ，树中每个节点都存放有一个 `0` 到 `9` 之间的数字。

每条从根节点到叶节点的路径都代表一个数字：

- 例如，从根节点到叶节点的路径 `1 -> 2 -> 3` 表示数字 `123` 。

计算从根节点到叶节点生成的 **所有数字之和** 。

**叶节点** 是指没有子节点的节点。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/num1tree.jpg)

```
输入：root = [1,2,3]
输出：25
解释：
从根到叶子节点路径 1->2 代表数字 12
从根到叶子节点路径 1->3 代表数字 13
因此，数字总和 = 12 + 13 = 25
```

```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 建立的主要函数，用于求得所有路径之和
var sumNumbers = function (root) {
  let sum = 0
  const dfs = function (root, total) {
    if (!root.left && !root.right) {
      sum = sum + (total - 0)
      return
    }
    if (root.left) {
      dfs(root.left, total + '' + root.left.val)
    }
    if (root.right) {
      dfs(root.right, total + '' + root.right.val)
    }
  }
  dfs(root, root.val)
  return sum
}

// @lc code=end

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
// 创建一个测试用的 TreeNode
let root = new TreeNode(1, new TreeNode(2), new TreeNode(3))

// 测试 levelOrder 函数
console.log(sumNumbers(root)) // 期望输出： 25
```

## 平衡二叉树

给定一个二叉树，判断它是否是 平衡二叉树 

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/balance_1.jpg)

```
输入：root = [3,9,20,null,null,15,7]
输出：true
```

```js
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  return height(root) !== -1
}

function height(root) {
  if (!root) return 0
  const left = height(root.left)
  const right = height(root.right)
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    // 不是平衡树，则“剪枝”，直接返回
    return -1
  }
  return Math.max(left, right) + 1
}
// @lc code=end

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
let root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
)

console.log(isBalanced(root))

```

# 链表

## 相交链表

给你两个单链表的头节点 `headA` 和 `headB` ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 `null` 。

图示两个链表在节点 `c1` 开始相交**：**

[![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/160_statement.png)](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png)

题目数据 **保证** 整个链式结构中不存在环。

**注意**，函数返回结果后，链表必须 **保持其原始结构** 。

**自定义评测：**

**评测系统** 的输入如下（你设计的程序 **不适用** 此输入）：

- `intersectVal` - 相交的起始节点的值。如果不存在相交节点，这一值为 `0`
- `listA` - 第一个链表
- `listB` - 第二个链表
- `skipA` - 在 `listA` 中（从头节点开始）跳到交叉节点的节点数
- `skipB` - 在 `listB` 中（从头节点开始）跳到交叉节点的节点数

评测系统将根据这些输入创建链式数据结构，并将两个头节点 `headA` 和 `headB` 传递给你的程序。如果程序能够正确返回相交节点，那么你的解决方案将被 **视作正确答案** 。

 

**示例 1：**

[![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/160_example_1_1.png)](https://assets.leetcode.com/uploads/2018/12/13/160_example_1.png)

```
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
输出：Intersected at '8'
解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,6,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
— 请注意相交节点的值不为 1，因为在链表 A 和链表 B 之中值为 1 的节点 (A 中第二个节点和 B 中第三个节点) 是不同的节点。换句话说，它们在内存中指向两个不同的位置，而链表 A 和链表 B 中值为 8 的节点 (A 中第三个节点，B 中第四个节点) 在内存中指向相同的位置。
```

```js
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 双指针  时间复杂度 O(m+n),空间复杂度 O(1)
// 核心逻辑：消除长度差
// 1. 假设相交链表长度为 c，链表A为为长链表，则 长链表长度=a+c; 链表 B 为短链表，则短链表长度=b+c
// 2. 长链表和短链表同时向前走，当短链表走到末尾的时候，此时双方各自都走过的是短链表的长度，
// 3. 此时将短链表指向长链表，接着往下走，当长链表走到末尾的时候，此时双方各自都走过长链表的长度
// 4. 短链表走过的是长链表后半段（短链表的长度）和长链表前半段（长链表长度-短链表长度）。
// 5. 此时将长链表指向短链表头部，短链表指向下一个节点（刚好与短链表指向的位置重合，即后面的长度都一致）
// 6. 这样就可以一直往下遍历，来判断当两个链表值一致即返回，null=null 也会返回。

var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB){
        return null;
    }
    // 双指针
    let p1 = headA;
    let p2 = headB;
    while(p1 !== p2 ){
        p1 = p1 === null ? headB : p1.next;
        p2 = p2 === null ? headA : p2.next;
    }
    return p1
};
```

## 回文链表

给你一个单链表的头节点 `head` ，请你判断该链表是否为回文链表。如果是，返回 `true` ；否则，返回 `false` 。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/pal1linked-list.jpg)

```
输入：head = [1,2,2,1]
输出：true
```

```js
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 方法二：数组法
// 复杂度分析
// 时间复杂度：O(n)，其中 n 指的是链表的元素个数。
// 第一步：遍历链表并将值复制到数组中，O(n)。
// 第二步：双指针判断是否为回文，执行了 O(n/2) 次的判断，即 O(n)。
// 总的时间复杂度：O(2n) = O(n)。
// 空间复杂度：O(n)，其中 n 指的是链表的元素个数，我们使用了一个数组列表存放链表的元素值。
var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true
  }
  let arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  let len = arr.length
  for (let i = 0, j = len - 1; i < len, j > 0; i++, j--) {
    if (arr[i] !== arr[j]) {
      return false
    }
  }
  return true
}
// @lc code=end

console.log(isPalindrome([1, 2, 2, 1]))
```

## 环形链表

给你一个链表的头节点 `head` ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。**注意：`pos` 不作为参数进行传递** 。仅仅是为了标识链表的实际情况。

*如果链表中存在环* ，则返回 `true` 。 否则，返回 `false` 。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/circularlinkedlist.png)

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

```js
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 快慢指针是解决环形链表的不二法门
  let fast = head
  let slow = head

  while (fast) {
    if (fast.next === null) {
      return false
    }
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) return true
  }

  return false
}
```

## 环形链表Ⅱ

给定一个链表的头节点  `head` ，返回链表开始入环的第一个节点。 *如果链表无环，则返回 `null`。*

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（**索引从 0 开始**）。如果 `pos` 是 `-1`，则在该链表中没有环。**注意：`pos` 不作为参数进行传递**，仅仅是为了标识链表的实际情况。

**不允许修改** 链表。



 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/circularlinkedlist-1717072101181-14.png)

```
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
```

```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // 定义一个哈希表，用来存储节点
  var set = new Set()

  // 遍历链表，当链表里没有的时候，就插入到哈希表中。即将整个链表都放入哈希表中
  while (head) {
    if (!set.has(head)) {
      set.add(head)
    } else {
      // 如果哈希表里存在，就证明有环,返回下标
      return head
    }
    head = head.next
  }
  return null
}
// @lc code=end
```

## 随机链表的复制

给你一个长度为 `n` 的链表，每个节点包含一个额外增加的随机指针 `random` ，该指针可以指向链表中的任何节点或空节点。

构造这个链表的 **[深拷贝](https://baike.baidu.com/item/深拷贝/22785317?fr=aladdin)**。 深拷贝应该正好由 `n` 个 **全新** 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 `next` 指针和 `random` 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。**复制链表中的指针都不应指向原链表中的节点** 。

例如，如果原链表中有 `X` 和 `Y` 两个节点，其中 `X.random --> Y` 。那么在复制链表中对应的两个节点 `x` 和 `y` ，同样有 `x.random --> y` 。

返回复制链表的头节点。

用一个由 `n` 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 `[val, random_index]` 表示：

- `val`：一个表示 `Node.val` 的整数。
- `random_index`：随机指针指向的节点索引（范围从 `0` 到 `n-1`）；如果不指向任何节点，则为 `null` 。

你的代码 **只** 接受原链表的头节点 `head` 作为传入参数。

 

**示例 1：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/01/09/e1.png)

```
输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
```

```js
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null
  let cur = head
  let cNode = null // while 循环外初始化复制节点，避免每次都声明
  while (cur) {
    let next = cur.next // 保存cur.next不丢失
    cNode = new Node(cur.val, next, cur.random) // 复制原有节点
    cur.next = cNode // cur连接复制的cNode节点，为什么没写cNode.next = cur.next? 因为在Node方法里已经做了这一步
    cur = next
  } // 每个复制节点都会跟在原节点后面
  cur = head.next // 让cur指向head的下一个节点，也就是复制节点，因为我们用从复制节点开始纠正随机指针
  while (cur) {
    cur.random && (cur.random = cur.random.next) // 随机指针指向的节点后也是有复制节点，如果cur有随机指针，我们就让cur.random指向原节点随机指针指向节点的复制节点即可
    ;(cur = cur.next) && (cur = cur.next) // 每间隔一位才是复制节点
  }
  let temp = head.next // 保存一下head.next作为我们复制链表的头节点返回
  cur = head.next // 操作cur指针拆出我们的复制链表
  while (cur.next) {
    // 当cur.next 为null也就是已经遍历到最后一个复制节点了
    let next = head.next.next
    let temp = cur.next.next
    head.next = head.next.next // 让head连接head的下下个节点
    cur.next = cur.next.next // 让cur连接cur的下下个节点，cur与head间隔相连，拆成两条链表
    cur = temp
    head = next
  }
  head.next = null // 复制节点是最后一个节点不用指向null,head为复制节点的前一个节点需要断开去指向null,拆解完毕
  return temp
}
// @lc code=end
```

## 排序链表

给你链表的头结点 `head` ，请将其按 **升序** 排列并返回 **排序后的链表** 。

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/sort_list_1.jpg)

```
输入：head = [4,2,1,3]
输出：[1,2,3,4]
```

```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  // 将链表中的next指针打断，放入数组中
  let res = []
  if (!head) return null // 返回的是空节点，不是空数组

  while (head) {
    res.push(head)
    let temp = head.next
    head.next = null
    head = temp
  }
  // 排序链表中的值，然后进行拼接
  res.sort((a, b) => a.val - b.val).reduce((p, c) => (p.next = c))
  return res[0]
}
// @lc code=end
```

## 两数相加

给你两个 **非空** 的链表，表示两个非负的整数。它们每位数字都是按照 **逆序** 的方式存储的，并且每个节点只能存储 **一位** 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/addtwonumber1.jpg)

```
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
```

```js
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // p1 和 p2 是遍历两条链表的指针
  let p1 = l1,
    p2 = l2

  // dummy 是一个虚拟节点，p 是用于构建结果链表的指针
  let dummy = new ListNode(-1)
  let p = dummy

  // carry 用于存储进位
  let carry = 0

  // 只要链表 l1 和 l2 不为空，或者还有进位，就一直循环
  while (p1 !== null || p2 !== null || carry > 0) {
    // 初始化本次加和的结果为 carry
    let val = carry

    if (p1 !== null) {
      val += p1.val // 加上链表 l1 对应节点的值
      p1 = p1.next // p1 指针向前移
    }

    if (p2 !== null) {
      val += p2.val // 加上链表 l2 对应节点的值
      p2 = p2.next // p2 指针向前移
    }

    // 计算进位
    carry = Math.floor(val / 10)
    // 本节点的值应该是对10取余的结果
    val = val % 10

    // 新建一个节点存储本次加和的结果，加入到结果链表中
    p.next = new ListNode(val)
    p = p.next
  }

  // 返回结果链表（去除第一位的虚拟节点）
  return dummy.next
}

// @lc code=end

// 定义链表
function ListNode(val) {
  this.val = val
  this.next = null
}

// 构造链表2->4->3
let l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

// 构造链表5->6->4
let l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

// 按照题目要求处理两个链表
let node = addTwoNumbers(l1, l2)

// 根据定义的链表，输出链表，自测结果
while (node !== null) {
  console.log(node.val)
  node = node.next
}

/*
7
0
8
*/
```

## 删除链表的倒数第N个结点

给你一个链表，删除链表的倒数第 `n` 个结点，并且返回链表的头结点。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/remove_ex1.jpg)

```
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```

```js
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 删除链表的倒数第N个节点是一个典型的双指针问题
  let slow = head
  let fast = head
  let temp = head
  // 第一步：让快指针先走n步
  let count = n + 1
  while (count && fast) {
    fast = fast.next
    count--
  }
  if (!fast && count) {
    while (count) {
      slow = slow.next
      count--
    }
    return slow
  }
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  let stemp = slow.next.next
  slow.next = stemp
  return temp
}
// @lc code=end

// 定义链表,leetcode推荐的
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

// 构造链表1->2->3->4->5
let l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(3)
l1.next.next.next = new ListNode(4)
l1.next.next.next.next = new ListNode(5)

// 按照题目要求处理两个链表（以链表相加为例）
let node = removeNthFromEnd(l1, 2)

// 根据定义的链表，输出链表，遍历节点，输出每个节点的值
while (node !== null) {
  console.log(node.val)
  node = node.next
}

```

## K个一组翻转链表

给你链表的头节点 `head` ，每 `k` 个节点一组进行翻转，请你返回修改后的链表。

`k` 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 `k` 的整数倍，那么请将最后剩余的节点保持原有顺序。

你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/reverse_ex1.jpg)

```
输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]
```

```js
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  // 首先判断传入的链表的长度是否小于k，如果小于k，则返回原链表
  let flag = 0
  let temp = head
  while (temp) {
    temp = temp.next
    flag++
  }
  if (flag < k) {
    return head
  }
  // 初始化指针
  let prev = null
  let cur = head
  let n = k
  while (cur != null && n-- > 0) {
    // 首先保存后一个节点
    let next = cur.next
    // cur指针的next域指向前一个节点
    cur.next = prev
    prev = cur
    cur = next
  }
  // 修改head指针的next域指向递归的返回结果
  head.next = reverseKGroup(cur, k)
  return prev
}
// @lc code=end

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

let l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(3)
l1.next.next.next = new ListNode(4)
l1.next.next.next.next = new ListNode(5)

let node = reverseKGroup(l1, 3)

while (node !== null) {
  console.log(node.val)
  node = node.next
}
```

## 合并K个升序链表

给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。

 

**示例 1：**

```
输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
```

```js
var mergeKLists = function (lists) {
  // 暴力法
  if (lists.length === 0) return null
  const res = []
  for (let v of lists) {
    while (v) {
      res.push(v.val)
      v = v.next
    }
  }
  if (res.length === 0) return null
  res.sort((num1, num2) => num1 - num2)
  const temp = []
  for (let v of res) {
    temp.push(new ListNode(v))
  }
  for (let i = 0; i < temp.length - 1; i++) {
    temp[i].next = temp[i + 1]
  }
  temp[temp.length - 1].next = null
  return temp[0]
}
// @lc code=end
```

## LRU缓存

请你设计并实现一个满足 [LRU (最近最少使用) 缓存](https://baike.baidu.com/item/LRU) 约束的数据结构。

实现 `LRUCache` 类：

- `LRUCache(int capacity)` 以 **正整数** 作为容量 `capacity` 初始化 LRU 缓存
- `int get(int key)` 如果关键字 `key` 存在于缓存中，则返回关键字的值，否则返回 `-1` 。
- `void put(int key, int value)` 如果关键字 `key` 已经存在，则变更其数据值 `value` ；如果不存在，则向缓存中插入该组 `key-value` 。如果插入操作导致关键字数量超过 `capacity` ，则应该 **逐出** 最久未使用的关键字。

函数 `get` 和 `put` 必须以 `O(1)` 的平均时间复杂度运行。

**示例：**

```
输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
```

```js
/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.map = new Map()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  // 如果map中有这个key存在则返回，反之返回-1
  if (this.map.has(key)) {
    const value = this.map.get(key)
    this.map.delete(key)
    this.map.set(key, value)
    return this.map.get(key)
  } else {
    return -1
  }
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 首先判断这个key存在吗，存在则删除，重新放置 反之直接放置
  if (this.map.has(key)) {
    this.map.delete(key)
    this.map.set(key, value)
  } else {
    // 判断map的大小是否比题目给定的容量大
    if (this.map.size >= this.capacity) {
      this.map.delete(this.map.entries().next().value[0])
      this.map.set(key, value)
    } else {
      this.map.set(key, value)
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

// ["LRUCache","put","put","get","put","get","put","get","get","get"]
// [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
const lruCache = new LRUCache(2)
lruCache.put(1, 1)
lruCache.put(2, 2)
const res1 = lruCache.get(1)
lruCache.put(3, 3)
const res2 = lruCache.get(2)
lruCache.put(4, 4)
const res3 = lruCache.get(1)
const res4 = lruCache.get(3)
const res5 = lruCache.get(4)

console.log(res1, res2, res3, res4, res5)
// 1 -1(undefined) -1(undefined) 3 4

```



## 合并两个有序链表

将两个升序链表合并为一个新的 **升序** 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/merge_ex1.jpg)

```
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

```js
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // 虚拟头结点
  var dummy = new ListNode(-1),
    p = dummy
  var p1 = l1,
    p2 = l2

  while (p1 !== null && p2 !== null) {
    // 比较 p1 和 p2 两个指针
    // 将值较小的的节点接到 p 指针
    if (p1.val > p2.val) {
      p.next = p2
      p2 = p2.next
    } else {
      p.next = p1
      p1 = p1.next
    }
    // p 指针不断前进
    p = p.next
  }

  if (p1 !== null) {
    p.next = p1
  }

  if (p2 !== null) {
    p.next = p2
  }

  return dummy.next
}

// 首先定义一个ListNode构造函数
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

// 创建第一个链表：1 -> 2 -> 4
var l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(4)

// 创建第二个链表：1 -> 3 -> 4
var l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next.next = new ListNode(4)

var node = mergeTwoLists(l1, l2)
while (node !== null) {
  console.log(node.val)
  node = node.next
}

/* 
结果
1
1
2
3
4
4 
*/
```

## 反转链表

给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/rev1ex1.jpg)

```
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```

```js
// 定义一个名为 reverseList 的函数，其参数为链表的头节点 head
var reverseList = function (head) {
  // 初始化两个指针节点，a 和 b，同时初始化临时节点 c
    let cur = head;
    let pre = null;

    while (cur) {
        // 首先保存当前节点的下一个节点
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
}

// @lc code=end
function ListNode(val) {
  this.val = val
  this.next = null
}

let l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(3)
l1.next.next.next = new ListNode(4)
l1.next.next.next.next = new ListNode(5)

let node = reverseList(l1)
while (node !== null) {
  console.log(node.val)
  node = node.next
}
```

# 普通数组

## 最大子数组和

给你一个整数数组 `nums` ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

**子数组** 是数组中的一个连续部分。

**示例 1：**

```
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
```

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let len = nums.length
  //dp的长度与数组长度相同
  let dp = new Array(len).fill(0)
  dp[0] = nums[0]
  let result = dp[0]
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])

    result = Math.max(result, dp[i])
  }
  return result
}
// @lc code=end
```

## 合并区间

以数组 `intervals` 表示若干个区间的集合，其中单个区间为 `intervals[i] = [starti, endi]` 。请你合并所有重叠的区间，并返回 *一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间* 。

**示例 1：**

```
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
```

```js
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let res = []
  let m = intervals.length
  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1])
  let pre = intervals[0][0]
  let post = intervals[0][1]
  for (let i = 1; i < m; i++) {
    if (intervals[i][0] <= post) {
      post = Math.max(post, intervals[i][1])
    } else {
      res.push([pre, post])
      pre = intervals[i][0]
      post = intervals[i][1]
    }
  }
  res.push([pre, post])
  return res
}
// @lc code=end
```

## 轮转数组

给定一个整数数组 `nums`，将数组中的元素向右轮转 `k` 个位置，其中 `k` 是非负数。

**示例 1:**

```
输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右轮转 1 步: [7,1,2,3,4,5,6]
向右轮转 2 步: [6,7,1,2,3,4,5]
向右轮转 3 步: [5,6,7,1,2,3,4]
```

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const len = nums.length
  const res = new Array(len)
  for (let i = 0; i < len; i++) {
    res[(i + k) % len] = nums[i]
  }
  for (let i = 0; i < len; i++) {
    nums[i] = res[i]
  }
}
// @lc code=end
```

## 除自身以外数组的乘积

给你一个整数数组 `nums`，返回 *数组 `answer` ，其中 `answer[i]` 等于 `nums` 中除 `nums[i]` 之外其余各元素的乘积* 。

题目数据 **保证** 数组 `nums`之中任意元素的全部前缀元素和后缀的乘积都在 **32 位** 整数范围内。

请 **不要使用除法，**且在 `O(*n*)` 时间复杂度内完成此题。

**示例 1:**

```
输入: nums = [1,2,3,4]
输出: [24,12,8,6]
```

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = Array(nums.length).fill(1)

  let product = 1
  for (let i = 0; i < nums.length; i++) {
    result[i] = result[i] * product
    product = product * nums[i]
  }
  product = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * product
    product = product * nums[i]
  }
  return result
}
// @lc code=end
```

## 缺失的第一个正数

给你一个未排序的整数数组 `nums` ，请你找出其中没有出现的最小的正整数。

请你实现时间复杂度为 `O(n)` 并且只使用常数级别额外空间的解决方案。

**示例 1：**

```
输入：nums = [1,2,0]
输出：3
解释：范围 [1,2] 中的数字都在数组中。
```

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (
      nums[i] >= 1 &&
      nums[i] < nums.length &&
      nums[i] != nums[nums[i] - 1]
    ) {
      //while里面放置 下标i 的元素
      var tmp = nums[nums[i] - 1]
      nums[nums[i] - 1] = nums[i]
      nums[i] = tmp
    }
  }

  for (let i = 0; i < nums.length; i++) {
    //遍历判断
    if (nums[i] != i + 1) {
      return i + 1
    }
  }
  return nums.length + 1
}
// @lc code=end
```

# 矩阵

## 矩阵置零

给定一个 `*m* x *n*` 的矩阵，如果一个元素为 **0** ，则将其所在行和列的所有元素都设为 **0** 。请使用 **[原地](http://baike.baidu.com/item/原地算法)** 算法**。**



 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/mat1.jpg)

```
输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
输出：[[1,0,1],[0,0,0],[1,0,1]]
```

```js
// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  var row = matrix.length
  var col = matrix[0].length

  var map1 = {}
  var map2 = {}

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        map1[i] = i
        map2[j] = j
      }
    }
  }

  for (var i in map1) {
    for (var j = 0; j < col; j++) {
      matrix[i][j] = 0
    }
  }

  for (var i in map2) {
    for (var j = 0; j < row; j++) {
      matrix[j][i] = 0
    }
  }
  return matrix
}
// @lc code=end
```

## 螺旋矩阵

给你一个 `m` 行 `n` 列的矩阵 `matrix` ，请按照 **顺时针螺旋顺序** ，返回矩阵中的所有元素。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/spiral1.jpg)

```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
```

```js
// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  var m = matrix.length,
    n = matrix[0].length
  var upper_bound = 0,
    lower_bound = m - 1
  var left_bound = 0,
    right_bound = n - 1
  var res = []
  // res.length == m * n 则遍历完整个数组
  while (res.length < m * n) {
    if (upper_bound <= lower_bound) {
      // 在顶部从左向右遍历
      for (var j = left_bound; j <= right_bound; j++) {
        res.push(matrix[upper_bound][j])
      }
      // 上边界下移
      upper_bound++
    }

    if (left_bound <= right_bound) {
      // 在右侧从上向下遍历
      for (var i = upper_bound; i <= lower_bound; i++) {
        res.push(matrix[i][right_bound])
      }
      // 右边界左移
      right_bound--
    }

    if (upper_bound <= lower_bound) {
      // 在底部从右向左遍历
      for (var j = right_bound; j >= left_bound; j--) {
        res.push(matrix[lower_bound][j])
      }
      // 下边界上移
      lower_bound--
    }

    if (left_bound <= right_bound) {
      // 在左侧从下向上遍历
      for (var i = lower_bound; i >= upper_bound; i--) {
        res.push(matrix[i][left_bound])
      }
      // 左边界右移
      left_bound++
    }
  }
  return res
}
// @lc code=end
```

## 旋转图像

给定一个 *n* × *n* 的二维矩阵 `matrix` 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在**[ 原地](https://baike.baidu.com/item/原地算法)** 旋转图像，这意味着你需要直接修改输入的二维矩阵。**请不要** 使用另一个矩阵来旋转图像。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/mat1-1717254915197-5.jpg)

```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[7,4,1],[8,5,2],[9,6,3]]
```

```js
// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length
  const matrix_new = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix_new[j][n - i - 1] = matrix[i][j]
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = matrix_new[i][j]
    }
  }
}
// @lc code=end
```

## 搜索二维矩阵Ⅱ

编写一个高效的算法来搜索 `*m* x *n*` 矩阵 `matrix` 中的一个目标值 `target` 。该矩阵具有以下特性：

- 每行的元素从左到右升序排列。
- 每列的元素从上到下升序排列。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/searchgrid2.jpg)

```
输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
输出：true
```

```js
// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 如果矩阵为空，即行或列为0，返回false
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false
  }
  // 获取最右上角的元素的行数、列数
  let row = 0
  let col = matrix[0].length - 1
  // 遍历矩阵
  while (row < matrix.length && col >= 0) {
    if (target < matrix[row][col]) {
      // 目标值<右上角的值，去掉当前列
      col--
    } else if (target > matrix[row][col]) {
      // 目标值>右上角的值，去掉当前行
      row++
    } else {
      // 目标值与右上角的值相同
      return true
    }
  }
  // 遍历结束也没有找到
  return false
}
// @lc code=end
```

# 滑动窗口

## 无重复字符的最长子串

给定一个字符串 `s` ，请你找出其中不含有重复字符的 **最长 子串** 的长度。	

**示例 1:**

```
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

```js
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
```

## 找到字符串中所有字母异位词

给定两个字符串 `s` 和 `p`，找到 `s` 中所有 `p` 的 **异位词** 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

**异位词** 指由相同字母重排列形成的字符串（包括相同的字符串）。

**示例 1:**

```
输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
```

## 解法：

采用双指针的方法，也叫窗口滑动，设置表示p中每个字母个数的数组parray，设置count表示p还剩几个字符未与s子字符串匹配。count为0时，匹配成功，将左边界加入结果数组。

s窗口右边界上的元素若出现在p中，则count--，表示剩余未匹配的字符数量减少一个。 

```js
// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let count = p.length,
    result = [],
    left = 0,
    right = 0,
    parray = Array(27)
      .join('0')
      .split('')
      .map((x) => parseInt(x)) // 26个0组成的数组
  for (let pc of p) {
    parray[pc.charCodeAt() - 97]++ // parray初始化
  }
  while (right < s.length) {
    if (parray[s[right++].charCodeAt() - 97]-- >= 1) count--
    if (count === 0) result.push(left)
    if (right - left === p.length && parray[s[left++].charCodeAt() - 97]++ >= 0)
      count++
  }
  return result
}
// @lc code=end
```

# 双指针

给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

**请注意** ，必须在不复制数组的情况下原地对数组进行操作。

**示例 1:**

```
输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
```

## 移动零

```js
/**
 * @param {number[]} nums
 * @return {any} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slowIndex = 0
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] !== 0) {
      ;[nums[fastIndex], nums[slowIndex]] = [nums[slowIndex], nums[fastIndex]]
      slowIndex++
    }
  }
  return nums
}
// @lc code=end

console.log(moveZeroes([0, 1, 0, 3, 12]))
```



## 盛最多水的容器

给定一个长度为 `n` 的整数数组 `height` 。有 `n` 条垂线，第 `i` 条线的两个端点是 `(i, 0)` 和 `(i, height[i])` 。

找出其中的两条线，使得它们与 `x` 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

**说明：**你不能倾斜容器。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/question_11.jpg)

```
输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
```

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0,
    r = height.length - 1
  let ans = Math.min(height[l], height[r]) * (r - l)
  while (l < r) {
    if (height[l] < height[r]) l++
    else r--
    ans = Math.max(ans, Math.min(height[l], height[r]) * (r - l))
  }
  return ans
}
// @lc code=end

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
```



## 三数之和

给你一个整数数组 `nums` ，判断是否存在三元组 `[nums[i], nums[j], nums[k]]` 满足 `i != j`、`i != k` 且 `j != k` ，同时还满足 `nums[i] + nums[j] + nums[k] == 0` 。请

你返回所有和为 `0` 且不重复的三元组。

**注意：**答案中不可以包含重复的三元组。

**示例 1：**

```
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
```

**思路+时间复杂度**

看起来你分享了一个在JavaScript中解决 "3Sum"算法题的方法。这是一个经典的双指针技巧应用题。给定包含n个整数的数组nums，你的解决方案是寻找数组中是否存在三个元素a, b, c，使得b + c = -a，并返回所有满足条件且不重复的三元组。

你的解决方案大致过程如下：

1. 首先，你将数组进行了从小到大的排序。
2. 然后，你遍历了整个数组，如果当前的元素和前一个元素相同，你会跳过这个元素以避免重复的三元组出现。
3. 对于每一个不同的元素，你都设置了两个指针，一个指向它后面的第一个元素，另一个指向数组的最后一个元素。然后，你开始移动这两个指针，寻找能满足三数之和为0的情况。
4. 如果三数之和小于0，你就让前面的指针向后移动一位（因为数组是有序的，所以这样可以让三数之和变大）。如果三数之和大于0，你就让后面的指针向前移动一位（可以让三数之和变小）。
5. 当两个指针未相遇，并找到三数之和为0的情况时，你把这三个数添加进结果数组中。然后你移动两个指针，跳过所有相同的元素，以避免重复的三元组出现。

这个方法的时间复杂度为O(n^2)，因为需要对每个元素进行一次两层循环的确证。其中n为数组的长度。

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  let ans = []
  for (let i = 0; i < nums.length; i++) {
    // i && 是为了防止在 i = 0 时去比较 nums[0] 和 nums[-1]
    if (i && nums[i] == nums[i - 1]) continue
    let j = i + 1,
      k = nums.length - 1
    while (j < k) {
      let sum = nums[j] + nums[k]
      if (sum == -nums[i]) {
        ans.push([nums[i], nums[j], nums[k]])
        // j++后，我从nums[j]移动到了nums[j+1]上，还是同一个值，没变
        while (j < k && nums[j] == nums[j + 1]) j++
        while (j < k && nums[k] == nums[k - 1]) k--
        // 所以我要改变值，就要j++
        j++
        k--
      } else if (sum < -nums[i]) {
        j++
      } else {
        k--
      }
    }
  }
  return ans
}

// @lc code=end

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
```

## 接雨水

给定 `n` 个非负整数表示每个宽度为 `1` 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/rainwatertrap.png)

```
输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
```

```js
// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let total = 0
  let left = 0,
    right = height.length - 1,
    leftMax = 0,
    rightMax = 0
  while (left <= right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])
    if (leftMax < rightMax) {
      total += leftMax - height[left]
      left++
    } else {
      total += rightMax - height[right]
      right--
    }
  }
  return total
}
// @lc code=end
```

# 子串

## 和为K的子数组

给你一个整数数组 `nums` 和一个整数 `k` ，请你统计并返回 *该数组中和为 `k` 的子数组的个数* 。

子数组是数组中元素的连续非空序列。

**示例 1：**

```
输入：nums = [1,1,1], k = 2
输出：2
```

利用[前缀和](https://so.csdn.net/so/search?q=前缀和&spm=1001.2101.3001.7020)实现

```js
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let preSum = new Map()
  // preSun中存放 Key:前缀和 value:该前缀和出现的次数
  preSum.set(0, 1)

  let ans = 0,
    sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    // 若有 sum - sum1 = k 则存在
    let sum1 = sum - k
    // 如果该前缀和存在，则直接更新数值
    if (preSum.has(sum1)) {
      ans += preSum.get(sum1)
    }
    // 把前缀和 nums[0..i] 加入并记录出现次数
    preSum.set(sum, (preSum.get(sum) || 0) + 1)
  }
  return ans
}
// @lc code=end
```

## 滑动窗口最大值

给你一个整数数组 `nums`，有一个大小为 `k` 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 `k` 个数字。滑动窗口每次只向右移动一位。

返回 *滑动窗口中的最大值* 。

**示例 1：**

```
输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

**思路**

使用一个双端队列（队列两面都可进出），用于存储处于窗口中的值的下标，保证窗口头部元素永远是窗口最大值

- 1.当前进入的元素下标 - 窗口头部元素的下标 >= k 头部元素移出队列
- 2.如果当前数字大于队列尾，则删除队列尾，直到当前数字小于等于队列尾，或者队列空 （保证窗口中左侧的值均大于当前入队列的值，这样做可以保证当下次循环窗口头部的元素出队后，窗口头部元素仍然为最大值）
- 3.队列元素入队
- 4.第k次遍历后开始向结果中添加最大值

![foo](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E7%9A%84%E6%9C%80%E5%A4%A7%E5%80%BC.png)

时间复杂度：`O(n)`

空间复杂度：`O(n)`

- 使用优先队列也可以实现，时间复杂度为`O(nlogk)`

```js
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const window = []
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (i - window[0] > k - 1) {
      window.shift()
    }
    let j = window.length - 1
    while (j >= 0 && nums[window[j]] <= nums[i]) {
      j--
      window.pop()
    }
    window.push(i)
    if (i >= k - 1) {
      result.push(nums[window[0]])
    }
  }
  return result
}
// @lc code=end
```

## 最小覆盖子串

给你一个字符串 `s` 、一个字符串 `t` 。返回 `s` 中涵盖 `t` 所有字符的最小子串。如果 `s` 中不存在涵盖 `t` 所有字符的子串，则返回空字符串 `""` 。

**注意：**

- 对于 `t` 中重复字符，我们寻找的子字符串中该字符数量必须不少于 `t` 中该字符数量。
- 如果 `s` 中存在这样的子串，我们保证它是唯一的答案。

**示例 1：**

```
输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
```

1. 解题思路

先找出所有的包含T的子串
找出长度最小的那个子串，返回即可

2. 解题步骤：

用双指针维护一个滑动窗口
移动右指针，找到包含T的子串，移动左指针，尽量减少包含T的字串的长度
循环上述过程，找出包含T的最小子串

```js
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
```

# 图论

## 岛屿数量

给你一个由 `'1'`（陆地）和 `'0'`（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

 

**示例 1：**

```
输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1
```

```js
// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const dfs = (i, j) => {
    // 定义深度优先遍历函数
    // 越界、遇到水，则不访问了
    if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] === '0') return
    grid[i][j] = '0' // 访问过的的地方，标记为0
    dfs(i + 1, j) // 右
    dfs(i, j + 1) // 下
    dfs(i - 1, j) // 左
    dfs(i, j - 1) // 上
  }
  const row = grid.length // 矩阵的行、列
  const col = grid[0].length
  let islandsNum = 0 // 岛屿数量
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '1') {
        // 找到矩阵中，为1的地方，开始深度优先遍历
        dfs(i, j)
        islandsNum++
      }
    }
  }
  return islandsNum
}
// @lc code=end

const grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
]
console.log(numIslands(grid))

```

## 腐烂的橘子

在给定的 `m x n` 网格 `grid` 中，每个单元格可以有以下三个值之一：

- 值 `0` 代表空单元格；
- 值 `1` 代表新鲜橘子；
- 值 `2` 代表腐烂的橘子。

每分钟，腐烂的橘子 **周围 4 个方向上相邻** 的新鲜橘子都会腐烂。

返回 *直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 `-1`* 。

**示例 1：**

**![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/oranges.png)**

```
输入：grid = [[2,1,1],[1,1,0],[0,1,1]]
输出：4
```

```js
// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let queue = [] // 统计新鲜的橘子

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j])
      }
    }
  }

  let time = 0

  // 直到没有新鲜的橘子为止
  while (queue.length) {
    let next = [] // 储存下一轮新鲜的橘子
    let rot = [] // 储存下一轮腐烂的橘子

    // 遍历新鲜橘子，区分下一轮的新鲜橘子和腐烂橘子
    for (let k = 0; k < queue.length; k++) {
      let i = queue[k][0]
      let j = queue[k][1]
      if (
        (grid[i - 1] && grid[i - 1][j] === 2) ||
        (grid[i + 1] && grid[i + 1][j] === 2) ||
        grid[i][j - 1] === 2 ||
        grid[i][j + 1] === 2
      ) {
        // 四周有橘子，说明已腐烂
        rot.push([i, j])
      } else {
        next.push([i, j])
      }
    }

    // 这一轮没有腐烂的橘子，则返回-1
    if (!rot.length) {
      return -1
    }

    // 把这一轮腐烂的橘子标记成2
    for (let i = 0; i < rot.length; i++) {
      grid[rot[i][0]][rot[i][1]] = 2
    }

    queue = next
    time++
  }

  return time
}
// @lc code=end
```

## 课程表

你这个学期必须选修 `numCourses` 门课程，记为 `0` 到 `numCourses - 1` 。

在选修某些课程之前需要一些先修课程。 先修课程按数组 `prerequisites` 给出，其中 `prerequisites[i] = [ai, bi]` ，表示如果要学习课程 `ai` 则 **必须** 先学习课程 `bi` 。

- 例如，先修课程对 `[0, 1]` 表示：想要学习课程 `0` ，你需要先完成课程 `1` 。

请你判断是否可能完成所有课程的学习？如果可以，返回 `true` ；否则，返回 `false` 。

**示例 1：**

```
输入：numCourses = 2, prerequisites = [[1,0]]
输出：true
解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
```

思路：https://leetcode.cn/problems/course-schedule/solutions/250377/bao-mu-shi-ti-jie-shou-ba-shou-da-tong-tuo-bu-pai-/

```js
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0) // 入度数组
  const map = {} // 邻接表
  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++ // 求课的初始入度值
    if (map[prerequisites[i][1]]) {
      // 当前课已经存在于邻接表
      map[prerequisites[i][1]].push(prerequisites[i][0]) // 添加依赖它的后续课
    } else {
      // 当前课不存在于邻接表
      map[prerequisites[i][1]] = [prerequisites[i][0]]
    }
  }
  const queue = []
  for (let i = 0; i < inDegree.length; i++) {
    // 所有入度为0的课入列
    if (inDegree[i] == 0) queue.push(i)
  }
  let count = 0
  while (queue.length) {
    const selected = queue.shift() // 当前选的课，出列
    count++ // 选课数+1
    const toEnQueue = map[selected] // 获取这门课对应的后续课
    if (toEnQueue && toEnQueue.length) {
      // 确实有后续课
      for (let i = 0; i < toEnQueue.length; i++) {
        inDegree[toEnQueue[i]]-- // 依赖它的后续课的入度-1
        if (inDegree[toEnQueue[i]] == 0) {
          // 如果因此减为0，入列
          queue.push(toEnQueue[i])
        }
      }
    }
  }
  return count == numCourses // 选了的课等于总课数，true，否则false
}
// @lc code=end
```



## 实现 Trie（前缀树）

**[Trie](https://baike.baidu.com/item/字典树/9825209?fr=aladdin)**（发音类似 "try"）或者说 **前缀树** 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。

请你实现 Trie 类：

- `Trie()` 初始化前缀树对象。
- `void insert(String word)` 向前缀树中插入字符串 `word` 。
- `boolean search(String word)` 如果字符串 `word` 在前缀树中，返回 `true`（即，在检索之前已经插入）；否则，返回 `false` 。
- `boolean startsWith(String prefix)` 如果之前已经插入的字符串 `word` 的前缀之一为 `prefix` ，返回 `true` ；否则，返回 `false` 。

**示例：**

```
输入
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
输出
[null, null, true, false, true, null, true]

解释
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // 返回 True
trie.search("app");     // 返回 False
trie.startsWith("app"); // 返回 True
trie.insert("app");
trie.search("app");     // 返回 True
```

```js
// @lc code=start

/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.tree = {}
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let tree = this.tree
  for (const w of word) {
    if (tree[w] == undefined) {
      tree[w] = {}
    }
    tree = tree[w]
  }
  tree.isEnd = true
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let tree = this.tree
  for (const w of word) {
    if (tree[w] == undefined) {
      return false
    }
    tree = tree[w]
  }
  return tree.isEnd == true
}

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let tree = this.tree
  for (const w of prefix) {
    if (tree[w] == undefined) {
      return false
    }
    tree = tree[w]
  }
  return true
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
```

# 回溯

## 全排列

给定一个不含重复数字的数组 `nums` ，返回其 *所有可能的全排列* 。你可以 **按任意顺序** 返回答案。

**示例 1：**

```
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let matrix = []
  const subfunc = (arr, temp) => {
    if (arr.length === 0) {
      matrix.push(temp)
    }
    for (let i = 0, len = arr.length; i < len; i++) {
      let newarr = arr.slice(0, i).concat(arr.slice(i + 1))
      subfunc(newarr, temp.concat(arr[i]))
    }
  }
  subfunc(nums, [])
  return matrix
}
// @lc code=end
```

## 子集

给你一个整数数组 `nums` ，数组中的元素 **互不相同** 。返回该数组所有可能的子集（幂集）。

解集 **不能** 包含重复的子集。你可以按 **任意顺序** 返回解集。

**示例 1：**

```
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = []
  let track = []
  backtrack(nums, 0, track)
  return res
  function backtrack(nums, start, track) {
    res.push([...track])
    for (let i = start; i < nums.length; i++) {
      track.push(nums[i])
      backtrack(nums, i + 1, track)
      track.pop()
    }
  }
}
// @lc code=end
```

## 电话号码的字母组合

给定一个仅包含数字 `2-9` 的字符串，返回所有它能表示的字母组合。答案可以按 **任意顺序** 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/200px-telephone-keypad2svg.png)

 

**示例 1：**

```
输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

解题思路：

1. 假设输入是`'23'`，那么就需要在`'2'`对应的字母映射`'abc'`中分别选取一个。再以此为基础，从`'3'`对应的字母映射`'def'`中选取一个，组合成最终结果。
2. 由于输入的数字并不确定长度，因此选择用递归的方式遍历`digits`。
3. 每层递归处理的都通过参数`current`，选择当前需要处理的字母映射。
4. 在递归中利用`for`循环遍历字母映射，逐个完成对字母的选中，之后下探到下层递归，处理下一个数字。

```js
// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // 如果传入 digits 为空，则直接返回结果[]

  if (!digits || !digits.length) {
    return []
  }

  // 使用 Map 存储按键对应的字母

  const map = new Map([
    ['2', 'abc'],

    ['3', 'def'],

    ['4', 'ghi'],

    ['5', 'jkl'],

    ['6', 'mno'],

    ['7', 'pqrs'],

    ['8', 'tuv'],

    ['9', 'wxyz'],
  ])

  // 存储最终结果

  let result = []

  // 回溯生成所有的字符串组合

  function backtrack(str, current) {
    // 递归终止条件

    // 当生成的字符串长度等于输入长度时，表示生成完毕，储存结果并退出循环。

    // 若不退出，由于 current 已经超出了 digits 长度，会因 map.get 获取值为空而报错。

    if (str.length === digits.length) {
      result.push(str)

      return
    }

    // 当前层递归逻辑

    // 从 Map 中获取当前输入的数字映射的字母

    const digit = map.get(digits[current])

    // 遍历当前映射的字符串，生成不同组合

    for (let i = 0; i < digit.length; i++) {
      // 下探到下层递归

      // 在当前字符串中选取一个字母，进入下一层递归的选择

      backtrack(str + digit[i], current + 1)
    }
  }

  // 回溯生成组合，初始状态 str 为空，current 为 0

  backtrack('', 0)

  return result
}
// @lc code=end
```

## 组合总和

给你一个 **无重复元素** 的整数数组 `candidates` 和一个目标整数 `target` ，找出 `candidates` 中可以使数字和为目标数 `target` 的 所有 **不同组合** ，并以列表形式返回。你可以按 **任意顺序** 返回这些组合。

`candidates` 中的 **同一个** 数字可以 **无限制重复被选取** 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

对于给定的输入，保证和为 `target` 的不同组合数少于 `150` 个。

**示例 1：**

```
输入：candidates = [2,3,6,7], target = 7
输出：[[2,2,3],[7]]
解释：
2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
7 也是一个候选， 7 = 7 。
仅有这两种组合。
```

思路：递归

1、 从左至右遍历数组递归，如果i位置数字小于目标值，则放入路径数组，更新剩余目标值

2、继续递归遍历

3、递归出口：目标值为0，将路径数组放入结果数组

```js
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (nums, target) {
  let res = []
  let dfs = (idx, path, t) => {
    if (t === 0) {
      res.push([...path])
      return
    }
    for (let i = idx; i < nums.length; i++) {
      if (t >= nums[i]) dfs(i, [...path, nums[i]], t - nums[i])
    }
  }
  dfs(0, [], target)
  return res
}
// @lc code=end
```

 时间复杂度：O(s) s为所有可行解的长度之和

 [空间复杂度](https://so.csdn.net/so/search?q=空间复杂度&spm=1001.2101.3001.7020)：O(n)

## 括号生成

数字 `n` 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 **有效的** 括号组合。

**示例 1：**

```
输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
```

```js
// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = []
  const back = (path, left, right) => {
    if (path.length === n * 2) {
      res.push(path)
      return
    }
    if (left > 0) {
      back(path + '(', left - 1, right)
    }
    if (right > left) {
      back(path + ')', left, right - 1)
    }
  }
  back('', n, n)
  return res
}
// @lc code=end
```

## 单词搜索

给定一个 `m x n` 二维字符网格 `board` 和一个字符串单词 `word` 。如果 `word` 存在于网格中，返回 `true` ；否则，返回 `false` 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/word2.jpg)

```
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
```

```js
// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  function dfs(x, y, s) {
    if (s === word.length) return true
    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length)
      return false
    if (board[x][y] !== word[s]) return false

    let char = board[x][y]
    board[x][y] = '*'
    let res =
      dfs(x - 1, y, s + 1) ||
      dfs(x + 1, y, s + 1) ||
      dfs(x, y - 1, s + 1) ||
      dfs(x, y + 1, s + 1)
    board[x][y] = char
    return res
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(i, j, 0)) {
          return true
        }
      }
    }
  }
  return false
}
// @lc code=end
```

## 分割回文串

给你一个字符串 `s`，请你将 `s` 分割成一些子串，使每个子串都是 **回文串** 。返回 `s` 所有可能的分割方案。

 

**示例 1：**

```
输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
```

```js
// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = []
  let dfs = (cur, start) => {
    // 当前已经到达了最后一个元素
    if (start >= s.length) {
      res.push(cur.slice())
      return
    }
    for (let i = start; i < s.length; i++) {
      // 字符串切割
      let str = s.slice(start, i + 1)
      if (str && isPal(str)) {
        cur.push(str)
        dfs(cur, i + 1)
        // 回溯
        cur.pop()
      }
    }
  }
  dfs([], 0)
  return res
}
// 判断是否是回文
function isPal(str) {
  let len = Math.floor(str.length / 2)
  if (len === 0) {
    return true
  }
  let add = str.length % 2 === 0 ? 0 : 1
  let subStr = str.slice(0, len)
  for (let i = 0; i < len; i++) {
    if (subStr[len - i - 1] !== str[len + add + i]) {
      return false
    }
  }
  return true
}
// @lc code=end
```



## N皇后

按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。

**n 皇后问题** 研究的是如何将 `n` 个皇后放置在 `n×n` 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 `n` ，返回所有不同的 **n 皇后问题** 的解决方案。

每一种解法包含一个不同的 **n 皇后问题** 的棋子放置方案，该方案中 `'Q'` 和 `'.'` 分别代表了皇后和空位。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/queens.jpg)

```
输入：n = 4
输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
解释：如上图所示，4 皇后问题存在两个不同的解法。
```

```js
// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  var t = [],
    temp = [],
    res = []
  for (let i = 0; i < n; i++) {
    t.push(0)
  }
  for (let i = 0; i < n; i++) {
    temp.push([...t])
  } //判断能否摆放
  var jungle = function (i, j, n) {
    //横
    for (let k = 0; k < n; k++) {
      if (temp[i][k] == 1) return 0
    } //竖
    for (let k = 0; k < n; k++) {
      if (temp[k][j] == 1) return 0
    } //斜
    for (let k = 1; k + j < n && i - k >= 0; k++) {
      if (temp[i - k][j + k] == 1) return 0
    }
    for (let k = 1; k + i < n && j - k >= 0; k++) {
      if (temp[i + k][j - k] == 1) return 0
    }
    for (let k = 1; k + i < n && j + k < n; k++) {
      if (temp[i + k][j + k] == 1) return 0
    }
    for (let k = 1; i - k >= 0 && j - k >= 0; k++) {
      if (temp[i - k][j - k] == 1) return 0
    }
    return 1
  } //深搜遍历
  var dfs = function (e, n) {
    for (let i = 0; i < n; i++) {
      if (temp[e][i] == 0 && jungle(e, i, n)) {
        // console.log(e,i);
        temp[e][i] = 1 // console.log(temp);
        if (e == n - 1) {
          // console.log(temp);
          var ans = []
          for (let i1 = 0; i1 < n; i1++) {
            var a = ''
            for (let i2 = 0; i2 < n; i2++) {
              if (temp[i1][i2] == 0) a += '.'
              else a += 'Q'
            }
            ans.push(a)
          }
          res.push(ans)
        } else {
          dfs(e + 1, n)
        }
      }
      temp[e][i] = 0
    }
  }
  dfs(0, n)
  return res
}
// @lc code=end
```

# 二分查找

## 搜索插入位置

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 `O(log n)` 的算法。

 

**示例 1:**

```
输入: nums = [1,3,5,6], target = 5
输出: 2
```

```js
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0
  let end = nums.length - 1
  while (start <= end) {
    const mid = start + ((end - start) >> 1)
    if (nums[mid] === target) return mid

    if (nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return start
}
// @lc code=end
```

- 时间复杂度：O(logn)
- 空间复杂度：O(1)

## 搜索二维矩阵

给你一个满足下述两条属性的 `m x n` 整数矩阵：

- 每行中的整数从左到右按非严格递增顺序排列。
- 每行的第一个整数大于前一行的最后一个整数。

给你一个整数 `target` ，如果 `target` 在矩阵中，返回 `true` ；否则，返回 `false` 。

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/mat.jpg)

```
输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
输出：true
```

```js
// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const colLength = matrix[0].length // 缓存一行的元素数量，用于计算真实索引
  let left = 0 // 二分查找左边界
  let right = matrix.length * colLength - 1 // 二分查找右边界

  // 当左右边界相遇时，查找结束
  while (left <= right) {
    // 计算当前查找区域的中点
    const mid = (left + right) >> 1
    // 计算当前中点在矩阵中的哪一行
    const row = Math.floor(mid / colLength)
    // 计算当前中点在矩阵中的哪一列
    const col = mid % colLength

    // 如果当前中点值等于目标，查找成功
    if (matrix[row][col] === target) {
      return true
    }

    // 如果中值大于目标，表示目标在左半边，将右边界移动到左半边继续查找
    if (matrix[row][col] > target) {
      right = mid - 1
    } else {
      // 如果中值小于目标，表示目标在右半边，将左边界移动到右半边继续查找
      left = mid + 1
    }
  }

  return false
}
// @lc code=end
```

## 在排序数组中查找元素的第一个和最后一个位置

给你一个按照非递减顺序排列的整数数组 `nums`，和一个目标值 `target`。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 `target`，返回 `[-1, -1]`。

你必须设计并实现时间复杂度为 `O(log n)` 的算法解决此问题。

**示例 1：**

```
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
```

```js
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 两次二分搜索法，优化版
// 时间复杂度: O(logn)
// 空间复杂度: O(1)
var searchRange = function (nums, target) {
  let left = helper(nums, target - 1)
  let right = helper(nums, target) - 1
  if (
    left <= right &&
    left >= 0 &&
    right < nums.length &&
    nums[left] === target &&
    nums[right] === target
  ) {
    return [left, right]
  }
  return [-1, -1]
}
function helper(nums, target) {
  let i = 0,
    j = nums.length - 1
  // 寻找右边界right
  while (i <= j) {
    let m = Math.trunc((i + j) / 2)
    if (nums[m] <= target) {
      i = m + 1
    } else {
      j = m - 1
    }
  }
  return i
}
// @lc code=end
```

## 搜索旋转排序数组

整数数组 `nums` 按升序排列，数组中的值 **互不相同** 。

在传递给函数之前，`nums` 在预先未知的某个下标 `k`（`0 <= k < nums.length`）上进行了 **旋转**，使数组变为 `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]`（下标 **从 0 开始** 计数）。例如， `[0,1,2,4,5,6,7]` 在下标 `3` 处经旋转后可能变为 `[4,5,6,7,0,1,2]` 。

给你 **旋转后** 的数组 `nums` 和一个整数 `target` ，如果 `nums` 中存在这个目标值 `target` ，则返回它的下标，否则返回 `-1` 。

你必须设计一个时间复杂度为 `O(log n)` 的算法解决此问题。

**示例 1：**

```
输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
```

```js
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length == 0) return -1

  let letf = 0
  let right = nums.length - 1
  while (letf <= right) {
    // 二分法
    let mid = parseInt((right + letf) / 2)
    if (nums[mid] == target) return mid
    else if (nums[mid] >= nums[letf]) {
      // mid 左边是顺序排列
      if (nums[mid] > target && nums[letf] <= target) right = mid - 1
      else letf = mid + 1
    } else {
      // mid 右边顺序排列
      if (nums[mid] < target && nums[right] >= target) letf = mid + 1
      else right = mid - 1
    }
  }
  return -1
}
// @lc code=end
```

## 寻找旋转排序数组中的最小值

已知一个长度为 `n` 的数组，预先按照升序排列，经由 `1` 到 `n` 次 **旋转** 后，得到输入数组。例如，原数组 `nums = [0,1,2,4,5,6,7]` 在变化后可能得到：

- 若旋转 `4` 次，则可以得到 `[4,5,6,7,0,1,2]`
- 若旋转 `7` 次，则可以得到 `[0,1,2,4,5,6,7]`

注意，数组 `[a[0], a[1], a[2], ..., a[n-1]]` **旋转一次** 的结果为数组 `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]` 。

给你一个元素值 **互不相同** 的数组 `nums` ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 **最小元素** 。

你必须设计一个时间复杂度为 `O(log n)` 的算法解决此问题。

**示例 1：**

```
输入：nums = [3,4,5,1,2]
输出：1
解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。
```

```js
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0,
    high = nums.length - 1

  while (low < high) {
    let mid = low + Math.floor((high - low) / 2)

    if (nums[mid] > nums[high]) {
      low = mid + 1
    } else {
      // high 不需要变为 mid - 1
      high = mid
    }
  }

  return nums[low]
}
// @lc code=end
```

## 寻找两个正序数组的中位数

给定两个大小分别为 `m` 和 `n` 的正序（从小到大）数组 `nums1` 和 `nums2`。请你找出并返回这两个正序数组的 **中位数** 。

算法的时间复杂度应该为 `O(log (m+n))` 。

**示例 1：**

```
输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
```

```js
// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var findMedianSortedArrays = function (arr1, arr2) {
  // 容错处理
  if (!arr1.length && !arr2.length) return null
  // 合并并排序
  const total = [...arr1, ...arr2].sort((a, b) => a - b)
  // 中位数索引
  let midIndex = (total.length - 1) / 2

  // 两位
  if (String(midIndex).includes('.')) {
    const left = parseInt(midIndex)
    const right = parseInt(midIndex) + 1
    const midNumber = (total[left] + total[right]) / 2
    return midNumber.toFixed(5)
  } else {
    // 一位
    return total[midIndex].toFixed(5)
  }
}
// @lc code=end
```

# 栈

## 有效的括号

给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串 `s` ，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。
3. 每个右括号都有一个对应的相同类型的左括号。

**示例 1：**

```
输入：s = "()"
输出：true
```

**示例 2：**

```
输入：s = "()[]{}"
输出：true
```

```js
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var rightSymbols = []
  for (var i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      rightSymbols.push(')')
    } else if (s[i] == '{') {
      rightSymbols.push('}')
    } else if (s[i] == '[') {
      rightSymbols.push(']')
    } else if (rightSymbols.pop() != s[i]) {
      return false
    }
  }
  return !rightSymbols.length
}
// @lc code=end
```



## 最小栈

设计一个支持 `push` ，`pop` ，`top` 操作，并能在常数时间内检索到最小元素的栈。

实现 `MinStack` 类:

- `MinStack()` 初始化堆栈对象。
- `void push(int val)` 将元素val推入堆栈。
- `void pop()` 删除堆栈顶部的元素。
- `int top()` 获取堆栈顶部的元素。
- `int getMin()` 获取堆栈中的最小元素。

**示例 1:**

```
输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```

```js
// @lc code=start

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.min = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  //判断x和min当前栈顶的数哪个小，如果x小则把x推入min的栈顶
  if (this.min.length == 0 || this.min[this.min.length - 1] >= x) {
    this.min.push(x)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  //this.stack.pop();
  //判断stack中即将弹出的元素和min栈顶的元素是否相等，若相等，则要把min栈顶的元素弹出，防止找不到最小值
  if (this.stack[this.stack.length - 1] == this.min[this.min.length - 1]) {
    this.min.pop()
  }
  this.stack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1] //min栈顶保存当前栈中的最小值
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
```

## 字符串解码

给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: `k[encoded_string]`，表示其中方括号内部的 `encoded_string` 正好重复 `k` 次。注意 `k` 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 `k` ，例如不会出现像 `3a` 或 `2[4]` 的输入。

**示例 1：**

```
输入：s = "3[a]2[bc]"
输出："aaabcbc"
```

```js
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  if (s.length === 0) return ''
  let res = ''
  let count = 0
  let nums = [],
    strs = []
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (char >= '0' && char <= '9') {
      count = count * 10 + Number(char)
    } else if (char === '[') {
      nums.push(count)
      strs.push(res)
      count = 0
      res = ''
    } else if (char === ']') {
      let tmpCount = nums.pop()
      let tmpStr = res
      for (let k = 1; k < tmpCount; k++) {
        res += tmpStr
      }
      res = strs.pop() + res
    } else {
      res += char
    }
  }
  return res
}
// @lc code=end
```

## 每日温度

给定一个整数数组 `temperatures` ，表示每天的温度，返回一个数组 `answer` ，其中 `answer[i]` 是指对于第 `i` 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 `0` 来代替。

**示例 1:**

```
输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]
```

```js
// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  let stack = []
  // 初始化气温列表，默认值为0
  let res = new Array(T.length).fill(0)
  for (let i = 0; i < T.length; i++) {
    //将栈顶元素下标对应的值和当前元素进行比较
    while (T[i] > T[stack[stack.length - 1]] && stack.length) {
      let idx = stack.pop()
      res[idx] = i - idx
    }
    stack.push(i)
  }
  return res
}
// @lc code=end
```

## 柱状图中最大的矩形

给定 *n* 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

 

**示例 1:**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/histogram.jpg)

```
输入：heights = [2,1,5,6,2,3]
输出：10
解释：最大的矩形为图中红色区域，面积为 10
```

```js
// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let maxArea = 0
  let stack = []
  heights.push(0)
  heights.unshift(0)
  // heights = [0, ...heights, 0] 你也可以这样写
  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      maxArea = Math.max(
        maxArea,
        heights[stack.pop()] * (i - stack[stack.length - 1] - 1)
      )
    }
    stack.push(i)
  }
  return maxArea
}
// @lc code=end
```

# 堆

## 数组中的第K个最大元素

给定整数数组 `nums` 和整数 `k`，请返回数组中第 `**k**` 个最大的元素。

请注意，你需要找的是数组排序后的第 `k` 个最大的元素，而不是第 `k` 个不同的元素。

你必须设计并实现时间复杂度为 `O(n)` 的算法解决此问题。

**示例 1:**

```
输入: [3,2,1,5,6,4], k = 2
输出: 5
```

https://juejin.cn/post/6844903913150218248

```js
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let minHeap = new MinHeap()
  for (let i = 0; i < nums.length; i++) {
    if (minHeap.size() < k) minHeap.push(nums[i])
    else if (minHeap.top() < nums[i]) {
      minHeap.pop()
      minHeap.push(nums[i])
    }
  }
  return minHeap.top()
}
class MinHeap {
  constructor() {
    this.heap = []
    this.len = 0
  }
  size() {
    return this.len
  }
  push(val) {
    this.heap[++this.len] = val
    this.swin(this.len)
  }

  pop() {
    const ret = this.heap[1]
    this.swap(1, this.len--)
    this.heap[this.len + 1] = null
    this.sink(1)
    return ret
  }
  swin(ind) {
    while (ind > 1 && this.less(ind, parseInt(ind / 2))) {
      this.swap(ind, parseInt(ind / 2))
      ind = parseInt(ind / 2)
    }
  }
  sink(ind) {
    while (ind * 2 <= this.len) {
      let j = ind * 2
      if (j < this.len && this.less(j + 1, j)) j++
      if (this.less(ind, j)) break
      this.swap(ind, j)
      ind = j
    }
  }
  top() {
    return this.heap[1]
  }
  isEmpty() {
    return this.len === 0
  }

  swap(i, j) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
  less(i, j) {
    return this.heap[i] < this.heap[j]
  }
}
// @lc code=end
```

## 前K个高频元素

给你一个整数数组 `nums` 和一个整数 `k` ，请你返回其中出现频率前 `k` 高的元素。你可以按 **任意顺序** 返回答案。

 

**示例 1:**

```
输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
```

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let i = 0
  let obj = {}
  let arr = []
  while (i < nums.length) {
    if (obj[nums[i]]) {
      obj[nums[i]] = obj[nums[i]] + 1
    } else {
      obj[nums[i]] = 1
      arr.push(nums[i])
    }
    i++
  }
  arr.sort((a, b) => {
    return obj[b] - obj[a]
  })
  return arr.splice(0, k)
}
// @lc code=end
```

## 数据流的中位数

**中位数**是有序整数列表中的中间值。如果列表的大小是偶数，则没有中间值，中位数是两个中间值的平均值。

- 例如 `arr = [2,3,4]` 的中位数是 `3` 。
- 例如 `arr = [2,3]` 的中位数是 `(2 + 3) / 2 = 2.5` 。

实现 MedianFinder 类:

- `MedianFinder() `初始化 `MedianFinder` 对象。
- `void addNum(int num)` 将数据流中的整数 `num` 添加到数据结构中。
- `double findMedian()` 返回到目前为止所有元素的中位数。与实际答案相差 `10-5` 以内的答案将被接受。

**示例 1：**

```
输入
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
输出
[null, null, null, 1.5, null, 2.0]

解释
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // 返回 1.5 ((1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
```

解题思路
此题需要两个堆，大顶堆维护前一半的数据，小顶堆维护后一半的数据；
如果数据个数为n，如果n是偶数，则大顶堆和小顶堆维护一样的个数；如果n为奇数，则大顶堆的个数比小顶堆的个数多1；
插入新数据时，判断它与大顶堆堆顶的大小，如果小于堆顶元素，则插入大顶堆，否则插入小顶堆；
插入后，两个堆的个数不满足要求的话，就根据要求，从数量过多的堆删除堆顶元素做堆化调整，将堆顶元素插入到另一个堆的堆底，做堆化调整。

```js
// @lc code=start

/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.maxHeap = new Heap()
  this.minHeap = new Heap()
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let maxSize = this.maxHeap.getSize()
  let minSize = this.minHeap.getSize()
  if (maxSize === 0) {
    this.maxHeap.insert(num, false)
  } else {
    if (this.maxHeap.getTop() > num) {
      this.maxHeap.insert(num, false)
    } else {
      this.minHeap.insert(num, true)
    }
    maxSize = this.maxHeap.getSize()
    minSize = this.minHeap.getSize()
    if (minSize > maxSize) {
      // 需要从小顶堆删除堆顶元素，并放入到大顶堆
      let top = this.minHeap.pop(true)
      this.maxHeap.insert(top, false)
    } else if (maxSize - 1 > minSize) {
      // 需要从大顶堆删除堆顶元素，并放入到小顶堆
      let top = this.maxHeap.pop(false)
      this.minHeap.insert(top, true)
    }
  }
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let maxSize = this.maxHeap.getSize()
  let minSize = this.minHeap.getSize()
  if (maxSize === minSize) {
    return (this.maxHeap.getTop() + this.minHeap.getTop()) / 2
  } else {
    return this.maxHeap.getTop()
  }
}

class Heap {
  constructor() {
    this.data = [0]
    this.count = 0
  }

  getTop() {
    return this.data[1]
  }

  pop(minFlag) {
    let top = this.data[1]
    if (this.count > 1) {
      this.data[1] = this.data[this.count]
      this.data.splice(this.count, 1)
      this.count--
      let i = 1
      if (minFlag) {
        while (true) {
          let maxPos = i
          if (i * 2 <= this.count && this.data[i] > this.data[i * 2]) {
            maxPos = i * 2
          }
          if (
            i * 2 + 1 <= this.count &&
            this.data[maxPos] > this.data[i * 2 + 1]
          ) {
            maxPos = i * 2 + 1
          }
          if (i === maxPos) {
            break
          }
          this.swap(i, maxPos)
          i = maxPos
        }
      } else {
        while (true) {
          let maxPos = i
          if (i * 2 <= this.count && this.data[i] < this.data[i * 2]) {
            maxPos = i * 2
          }
          if (
            i * 2 + 1 <= this.count &&
            this.data[maxPos] < this.data[i * 2 + 1]
          ) {
            maxPos = i * 2 + 1
          }
          if (i === maxPos) {
            break
          }
          this.swap(i, maxPos)
          i = maxPos
        }
      }
    } else {
      this.data.splice(this.count, 1)
      this.count--
    }
    return top
  }

  insert(val, minFlag) {
    this.count++
    this.data[this.count] = val
    let i = this.count
    if (minFlag) {
      while (parseInt(i / 2) > 0 && this.data[i] < this.data[parseInt(i / 2)]) {
        this.swap(i, parseInt(i / 2))
        i = parseInt(i / 2)
      }
    } else {
      while (parseInt(i / 2) > 0 && this.data[i] > this.data[parseInt(i / 2)]) {
        this.swap(i, parseInt(i / 2))
        i = parseInt(i / 2)
      }
    }
  }

  getSize() {
    return this.count
  }

  swap(i, j) {
    let temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

```

# 贪心算法

## 买卖股票的最佳时机

给定一个数组 `prices` ，它的第 `i` 个元素 `prices[i]` 表示一支给定股票第 `i` 天的价格。

你只能选择 **某一天** 买入这只股票，并选择在 **未来的某一个不同的日子** 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 `0` 。

**示例 1：**

```
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
```

这段代码是一个寻找最大利润的算法，股票价格存储在一个数组prices之中。算法的主要目标是找到最佳的买入和卖出时间，以此获得最大利润。

现在我将以一种算法可视化的方式描述这段代码的运行过程。

1. 起始状态：这里我们有一个数组prices，它表示每一天的股票价格。maxPrice的初始值是数组最后一项的值，表示未来的最高价格。maxProfit初始化为0，表示当前的最大利润。

2. 开始反向遍历数组：从倒数第二个元素开始，算法会逐一检查每一个元素。在每一步中，都会尝试计算出如果在这一天买入股票（prices[i]），然后在未来的最高价（maxPrice）卖出，能得到多少利润（maxPrice - prices[i]）。

3. 更新最大利润和最高价格：如果新计算出的利润大于当前的最大利润，则更新maxProfit。同时，我们还需要更新maxPrice，使其始终保持是当前元素之后的最大元素值，也就是说在当前日期之后的可以卖出的最高价格。

4. 结束后返回最大利润：遍历完成后，maxProfit就是我们可以通过买卖股票获取的最大利润。

可视化表示如下（以prices = [7,1,5,3,6,4]为例）：

- 初始状态：
    - maxPrice = 4（prices最后一项），maxProfit = 0
    - prices = [7,1,5,3,6,4]

- 第一步（i=4）：
    - prices[i] = 6，尝试计算利润： maxPrice - prices[i] = 4 - 6 = -2。这是一个亏本的交易，所以我们不会更新maxProfit。
    - 因为prices[i] > maxPrice，所以更新maxPrice = 6。

- 第二步（i=3）：
    - prices[i] = 3，尝试计算利润：maxPrice - prices[i] = 6 - 3 = 3。这比当前的maxProfit大，所以我们更新maxProfit = 3。
    - 因为prices[i] < maxPrice，所以maxPrice保持不变。

- 第三步（i=2）...
    - 以此类推，一直到i=0，也就是价格数组的开始。

在这整个过程中，通过反向遍历和不断更新maxPrice和maxProfit，保证了每次都是以最高可能的价格售出股票，从而最终得到最大可能的利润。并且，由于这个算法只需要遍历一遍数组，所以时间复杂度是O(n)。

```js
var maxProfit = function (prices) {
  const len = prices.length
  let maxProfit = 0,
    maxPrice = prices[len - 1]
  for (let i = len - 2; i >= 0; i--) {
    maxProfit = Math.max(maxProfit, maxPrice - prices[i])
    maxPrice = Math.max(maxPrice, prices[i])
  }
  return maxProfit
}
```

## 跳跃游戏

给你一个非负整数数组 `nums` ，你最初位于数组的 **第一个下标** 。数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标，如果可以，返回 `true` ；否则，返回 `false` 。

 

**示例 1：**

```
输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
```

```js
var canJump = function (nums) {
  if (nums.length == 1) return true
  // 在现在这个位置上，需要移动count次才能到达最近的目标（目标指的是能到达结尾或者能到达最近的目标，其中最后一个目标能到达结尾）
  // 只有不行了，才会count++  如果距离为1，值为1，则1>0，所以重置   如果距离为1，值为0，则0<=0，不行了，count++,count表示，你等下得有一次跳count次数的数，才能救的了，否则救不活了  
  let count = 0
  // 注意，我是从nums.length-2开始的，所以最后一个元素的值根本无所谓，10000000还是-2222222222222都无所谓
  for (let i = nums.length - 2; i >= 0; i--) {
    console.log('在数组nums[', i, ']上的值是', nums[i], '当前count是', count)
    if (nums[i] <= count) {
      console.log('因为', nums[i], '小于等于', count, '所以')
      count++
      console.log('增加count，现在的count是', count)
    } else {
      console.log('因为', nums[i], '大于', count, '所以')
      count = 0
      console.log('重置count，现在的count是', count)
    }
  }
  console.log('结束遍历,最终的count是：', count)
  return count == 0
}

// 测试用例
console.log(canJump([4, 2, 1, 0, 4]))
```

## 跳跃游戏Ⅱ

给定一个长度为 `n` 的 **0 索引**整数数组 `nums`。初始位置为 `nums[0]`。

每个元素 `nums[i]` 表示从索引 `i` 向前跳转的最大长度。换句话说，如果你在 `nums[i]` 处，你可以跳转到任意 `nums[i + j]` 处:

- `0 <= j <= nums[i]` 
- `i + j < n`

返回到达 `nums[n - 1]` 的最小跳跃次数。生成的测试用例可以到达 `nums[n - 1]`。

**示例 1:**

```
输入: nums = [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
```

```js
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let n = nums.length
  let step = 0
  let end = 0
  let maxPos = 0
  for (let i = 0; i < n - 1; i++) {
    if (i <= maxPos) {
      maxPos = Math.max(maxPos, i + nums[i])
      if (i == end) {
        end = maxPos
        step++
      }
    }
  }
  return step
}

jump([2, 3, 1, 1, 4])

```

## 划分字母区间

给你一个字符串 `s` 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。

注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 `s` 。

返回一个表示每个字符串片段的长度的列表。

**示例 1：**

```
输入：s = "ababcbacadefegdehijhklij"
输出：[9,7,8]
解释：
划分结果为 "ababcbaca"、"defegde"、"hijhklij" 。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij" 这样的划分是错误的，因为划分的片段数较少。 
```

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

```js
var partitionLabels = function (s) {
  let map = new Map()
  let result = []
  let start = 0,
    end = 0
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = i
  }
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, map[s[i]])
    if (i == end) {
      result.push(end - start + 1)
      start = i + 1
    }
  }
  return result
}
```

# 动态规划

## 爬楼梯

假设你正在爬楼梯。需要 `n` 阶你才能到达楼顶。

每次你可以爬 `1` 或 `2` 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**示例 1：**

```
输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
```

```js
// 定义一个函数 climbStairs, 接收一个参数 n， 表示楼梯阶数
var climbStairs = function (n) {
  // 定义一个数组 dp, 用于存放每一阶对应的爬升方式数量
  let dp = []
  // 初始化dp数组的前三个值
  dp[0] = 0 // 无阶，爬楼梯方式为0
  dp[1] = 1 // 一阶，只能一次爬完，爬楼梯方式为1
  dp[2] = 2 // 二阶，可以一次爬两阶，或者一阶一阶爬，所以爬楼梯方式为2
  //从第 3 阶开始，计算每阶楼梯的爬升方式（dp[i] = dp[i - 1] + dp[i - 2]）
  // 每个阶梯的爬升方式都等于前两阶爬升方式之和
  // 使用 "for (let i = 3; i < n; i++)"，那么循环将在 i 等于 n-1 时停止，这意味着我们没有计算出爬到第 n 阶的所有可能的方法，只计算到了爬到第 n-1 阶的方法
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  // 返回n个楼梯的爬升方式
  return dp[n]
}
```

## 杨辉三角

给定一个非负整数 *`numRows`，*生成「杨辉三角」的前 *`numRows`* 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/1626927345-DZmfxB-PascalTriangleAnimated2.gif)

 

**示例 1:**

```
输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
```

```js
// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = [[1]] // 默认第一行是[1]
  for (let i = 1; i < numRows; i++) {
    res[i] = []
    res[i][0] = 1
    res[i][i] = 1
    for (let j = 1; j < i; j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
    }
  }
  return res
}
// @lc code=end
```



## 打家劫舍

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，**如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警**。

给定一个代表每个房屋存放金额的非负整数数组，计算你 **不触动警报装置的情况下** ，一夜之内能够偷窃到的最高金额。

 

**示例 1：**

```
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

```js
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  var last = 0,
    now = 0
  for (var i = 0; i < nums.length; i++) {
    var temp = last
    last = now
    now = Math.max(temp + nums[i], now)
  }

  return now
}
// @lc code=end
```



## 完全平方数

给你一个整数 `n` ，返回 *和为 `n` 的完全平方数的最少数量* 。

**完全平方数** 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，`1`、`4`、`9` 和 `16` 都是完全平方数，而 `3` 和 `11` 不是。

**示例 1：**

```
输入：n = 12
输出：3 
解释：12 = 4 + 4 + 4
```

## 状态定义

`dp[i]`: 和为 i 的完全平方数的最少数量

## 状态转移方程

```
dp[i] = Math.min(dp[i], i - j * j + 1)
```

`dp[i]` 可以由 `dp[i - j * j]  + 1` 推出，取二者中较小者。

## 初始化

```
dp[0] = 0
```

- 时间复杂度：O(n * sqrt(n))，sqrt 为平方根
- 空间复杂度：O(n)

```js
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    dp[i] = i
    for (let j = 1; i - j * j >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
    }
  }
  return dp[n]
}
// @lc code=end
```



## 零钱兑换

给你一个整数数组 `coins` ，表示不同面额的硬币；以及一个整数 `amount` ，表示总金额。

计算并返回可以凑成总金额所需的 **最少的硬币个数** 。如果没有任何一种硬币组合能组成总金额，返回 `-1` 。

你可以认为每种硬币的数量是无限的。

**示例 1：**

```
输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
```

```js
// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity) //动态规划，要求最小硬币个数，预设为无穷大
  dp[0] = 0 // 初始值
  for (let i = 1; i <= amount; i++) {
    // 为每个能被兑换的amount填入最小硬币数
    for (let j = 0; j < coins.length; j++) {
      let coin = coins[j] // 当前面额
      if (i - coin >= 0)
        // 大于面额值，才能被兑换
        dp[i] = Math.min(dp[i], dp[i - coin] + 1) // 需要比较减每个面额时，得到最小硬币个数
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount] // 无解时，值为预设值，返回-1
}
// @lc code=end
```



## 单词拆分

给你一个字符串 `s` 和一个字符串列表 `wordDict` 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 `s` 则返回 `true`。

**注意：**不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

**示例 1：**

```
输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
```

```js
// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let n = s.length
  if (!n) return true

  let wordSet = new Set(wordDict)
  let dp = []
  dp[0] = true

  for (let i = 0; i <= n; i++) {
    for (let j = i; j >= 0; j--) {
      let word = s.slice(j, i)
      if (wordSet.has(word) && dp[j]) {
        dp[i] = true
        break
      }
    }
  }

  return !!dp[n]
}
// @lc code=end
```



## 最长递增子序列

给你一个整数数组 `nums` ，找到其中最长严格递增子序列的长度。

**子序列** 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，`[3,6,2,7]` 是数组 `[0,3,1,6,2,2,7]` 的子序列。

 

**示例 1：**

```
输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
```

```js
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length == 0) return 0
  let dp = new Array(nums.length)
  dp.fill(1)
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1)
    }
    res = Math.max(res, dp[i])
  }
  return res
}
// @lc code=end
```



## 乘积最大子数组

给你一个整数数组 `nums` ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

测试用例的答案是一个 **32-位** 整数。

 

**示例 1:**

```
输入: nums = [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
```

**思路**

为了解决这个问题，首先我们创建了一个名为length的变量，表示nums数组的长度。然后，我们创建了三个变量：maxF、minF、multiply，他们的默认值都等于nums数组的第一项。其中maxF用于存储当前的最大子数组乘积，minF用于存储当前的最小子数组乘积，而multiply则是用来存储我们所要求的最大连续子数组的乘积。

随后我们从nums数组的第二个值开始，使用for循环对其进行遍历。在循环体内，我们创建了max和min变量，用于备份maxF和minF的值。

接着，我们用Math.max方法找出一个最大值，这个最大值要么是当前项，要么是包含当前项的子数组的乘积。我们把这个计算出来的最大值赋给maxF。

类似地，我们也用Math.min方法找出一个最小值，这个最小值也要么是当前项，要么是包含当前项的子数组的乘积。我们把这个最小值赋给minF。之所以需要计算并保留最小子数组的乘积，是因为存在负数的情况，负负得正，最小的负数乘积也可能成为最大值。

在完成这次循环后，我们再次使用Math.max方法更新multiply，以确保它保存的是所有迭代到目前为止的最大连续子数组的乘积。 

最后，当循环结束时，我们返回multiply变量，这就是我们要求的最大连续子数组的乘积。

```js
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let length = nums.length
  let maxF = nums[0]
  let minF = nums[0]
  let multiply = nums[0]
  for (let i = 1; i < length; i++) {
    let max = maxF
    let min = minF
    maxF = Math.max(max * nums[i], Math.max(nums[i], min * nums[i]))
    minF = Math.min(min * nums[i], Math.min(nums[i], max * nums[i]))
    multiply = Math.max(multiply, maxF)
  }
  return multiply
}
// @lc code=end
```



## 分割等和子集

给你一个 **只包含正整数** 的 **非空** 数组 `nums` 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

**示例 1：**

```
输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。
```

https://juejin.cn/post/7181434200736677949

```js
// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = 0
  nums.forEach((item) => {
    sum += item
  })
  if (sum % 2 === 1) {
    return false
  }
  let target = sum / 2

  //dp[j]表示背包总容量为j,最大可凑成j的子集和为dp[j]
  //1.倒序遍历背包,如果正序遍历背包,会导致同一个物品被放入多次
  //2.不可以先遍历背包再遍历物品,因为我们是一维数组的写法,背包一定是倒序遍历,如果先遍历背包,那么每
  //个dp[j]只会放入一个物品
  const dp = Array(target + 1).fill(0)
  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
    }
  }
  //当总容量为target,且最大可凑成target的子集和也为target时,说明找到了答案!!
  if (dp[target] === target) {
    return true
  }
  return false
}
// @lc code=end
```



## 最长有效括号

给你一个只包含 `'('` 和 `')'` 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

**示例 1：**

```
输入：s = "(()"
输出：2
解释：最长有效括号子串是 "()"
```

**示例 2：**

```
输入：s = ")()())"
输出：4
解释：最长有效括号子串是 "()()"
```

```js
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  var dp = new Array(s.length + 1).fill(0)
  var maxLen = 0
  for (let i = 1; i <= s.length; i++) {
    if (s[i - 1] == ')' && s[i - dp[i - 1] - 2] == '(') {
      dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2]
      maxLen = Math.max(maxLen, dp[i])
    }
  }
  return maxLen
}
// @lc code=end
```

# 多维动态规划

## 不同路径

一个机器人位于一个 `m x n` 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/1697422740-adxmsI-image.png)

```
输入：m = 3, n = 7
输出：28
```

**示例 2：**

```
输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下
```

```js
// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let dp = new Array(m) // 先创建一维数组
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n) // 开始转换成二维数组
    dp[i][0] = 1 // 由于只能向左移动，故到达第一行任一格子就只有一种走法
  }
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1 // 由于只能向下移动，故到达第一列任一格子就只有一种走法
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j] // 其余格子到达的方法是临近他的上方格子和左边格子路径之和
    }
  }
  return dp[m - 1][n - 1]
}
// @lc code=end
```

## 最小路径和

给定一个包含非负整数的 `*m* x *n*` 网格 `grid` ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

**说明：**每次只能向下或者向右移动一步。

 

**示例 1：**

![img](D:/%E6%96%87%E4%BB%B6/typora%E5%9B%BE%E7%89%87/minpath.jpg)

```
输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
```

```js
// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length // 缓存行数量
  let n = grid[0].length // 缓存列数量

  // 创建第一列的路径和初始值
  for (let i = 1; i < m; i++) {
    // 第一列只能从上一列走过来，因此每个路径和都为上一列加上这一列
    grid[i][0] += grid[i - 1][0]
  }

  // 创建第一行的路径和初始值
  for (let i = 1; i < n; i++) {
    // 第一行只能从上一行走过来，因此每个路径和都为上一行加上这一行
    grid[0][i] += grid[0][i - 1]
  }

  // 递推每个位置的路径和
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 当前位置的最小路径和，等于上一步的最小路径，加上当前的路径值
      grid[i][j] =
        // 由于要去最小路径和，当前位置只能从上方和左方走过来，因此取前两步的最小值
        Math.min(grid[i - 1][j], grid[i][j - 1]) +
        // 加上当前的路径值
        grid[i][j]
    }
  }

  // 走到最后位置时，自然就能推出到达终点的最小路径和
  return grid[m - 1][n - 1]
}
// @lc code=end
```

## 最长回文子串

给你一个字符串 `s`，找到 `s` 中最长的 回文 子串。

**示例 1：**

```
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
```

**示例 2：**

```
输入：s = "cbbd"
输出："bb"
```

```js
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let len = s.length
  var ans = s[0]
  let left, right, j
  for (var i = 0; i < len; i = j) {
    j = i + 1
    while (s[i] == s[j]) {
      j++
    }
    left = i - 1
    right = j
    while (left >= 0 && right < len && s[left] == s[right]) {
      left--
      right++
    }
    if (right - left - 1 > ans.length) {
      ans = s.slice(left + 1, right)
    }
  }
  return ans
}
// @lc code=end
```

## 最长公共子序列

给定两个字符串 `text1` 和 `text2`，返回这两个字符串的最长 **公共子序列** 的长度。如果不存在 **公共子序列** ，返回 `0` 。

一个字符串的 **子序列** 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

- 例如，`"ace"` 是 `"abcde"` 的子序列，但 `"aec"` 不是 `"abcde"` 的子序列。

两个字符串的 **公共子序列** 是这两个字符串所共同拥有的子序列。

**示例 1：**

```
输入：text1 = "abcde", text2 = "ace" 
输出：3  
解释：最长公共子序列是 "ace" ，它的长度为 3 。
```

```js
// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length,
    n = text2.length
  const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[m][n]
}
// @lc code=end
```



## 编辑距离

给你两个单词 `word1` 和 `word2`， *请返回将 `word1` 转换成 `word2` 所使用的最少操作数* 。

你可以对一个单词进行如下三种操作：

- 插入一个字符
- 删除一个字符
- 替换一个字符

**示例 1：**

```
输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
```

```js
// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let dp = Array.from(Array(word1.length + 1), () =>
    Array(word2.length + 1).fill(0)
  )

  for (let i = 1; i <= word1.length; i++) {
    dp[i][0] = i
  }

  for (let j = 1; j <= word2.length; j++) {
    dp[0][j] = j
  }

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + 1
        )
      }
    }
  }

  return dp[word1.length][word2.length]
}
// @lc code=end
```

# 技巧

## 只出现一次的数字

给你一个 **非空** 整数数组 `nums` ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。

**示例 1 ：**

```
输入：nums = [2,2,1]
输出：1
```

```js
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let num = 0
  for (let i = 0; i < nums.length; i++) {
    num ^= nums[i]
  }
  return num
}
// @lc code=end
```

## 多数元素

给定一个大小为 `n` 的数组 `nums` ，返回其中的多数元素。多数元素是指在数组中出现次数 **大于** `⌊ n/2 ⌋` 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

**示例 1：**

```
输入：nums = [3,2,3]
输出：3
```

```js
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = (obj[nums[i]] || 0) + 1
    if (obj[nums[i]] > nums.length / 2) {
      return nums[i]
    }
  }
}
// @lc code=end
```



## 颜色分类

给定一个包含红色、白色和蓝色、共 `n` 个元素的数组 `nums` ，**[原地](https://baike.baidu.com/item/原地算法)**对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

我们使用整数 `0`、 `1` 和 `2` 分别表示红色、白色和蓝色。

必须在不使用库内置的 sort 函数的情况下解决这个问题。

**示例 1：**

```
输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]
```

```js
// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let colors = [0, 0, 0]

  for (let i = 0; i < nums.length; i++) {
    colors[nums[i]]++
  }

  nums.length = 0
  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < colors[i]; j++) {
      nums.push(i)
    }
  }
}
// @lc code=end
```

## 下一个排列

整数数组的一个 **排列** 就是将其所有成员以序列或线性顺序排列。

- 例如，`arr = [1,2,3]` ，以下这些都可以视作 `arr` 的排列：`[1,2,3]`、`[1,3,2]`、`[3,1,2]`、`[2,3,1]` 。

整数数组的 **下一个排列** 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 **下一个排列** 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

- 例如，`arr = [1,2,3]` 的下一个排列是 `[1,3,2]` 。
- 类似地，`arr = [2,3,1]` 的下一个排列是 `[3,1,2]` 。
- 而 `arr = [3,2,1]` 的下一个排列是 `[1,2,3]` ，因为 `[3,2,1]` 不存在一个字典序更大的排列。

给你一个整数数组 `nums` ，找出 `nums` 的下一个排列。

必须**[ 原地 ](https://baike.baidu.com/item/原地算法)**修改，只允许使用额外常数空间。

**示例 1：**

```
输入：nums = [1,2,3]
输出：[1,3,2]
```

**示例 2：**

```
输入：nums = [3,2,1]
输出：[1,2,3]
```

```js
// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  for (var i = nums.length - 1; i > 0 && nums[i] <= nums[i - 1]; i--);
  if (i === 0) {
    reverse(0, nums.length - 1)
    return
  }
  for (var j = i + 1; j < nums.length && nums[i - 1] < nums[j]; j++);
  swap(i - 1, j - 1)
  reverse(i, nums.length - 1)
  return

  function reverse(start, end) {
    while (start < end) {
      swap(start, end)
      start++
      end--
    }
  }
  function swap(i, j) {
    var tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
  }
}
// @lc code=end
```

## 寻找重复数	

给定一个包含 `n + 1` 个整数的数组 `nums` ，其数字都在 `[1, n]` 范围内（包括 `1` 和 `n`），可知至少存在一个重复的整数。

假设 `nums` 只有 **一个重复的整数** ，返回 **这个重复的数** 。

你设计的解决方案必须 **不修改** 数组 `nums` 且只用常量级 `O(1)` 的额外空间。

**示例 1：**

```
输入：nums = [1,3,4,2,2]
输出：2
```

```js
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const length = nums.length

  for (let i = 0; i < length; ++i) {
    const val = Math.abs(nums[i])
    if (nums[val] < 0) {
      return val
    } else {
      nums[val] *= -1
    }
  }
}
// @lc code=end
```
