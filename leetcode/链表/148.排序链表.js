/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
