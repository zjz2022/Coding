/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
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
