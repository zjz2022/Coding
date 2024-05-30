/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
