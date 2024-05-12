/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
// 定义一个名为 reverseList 的函数，其参数为链表的头节点 head
var reverseList = function (head) {
  let a = null
  let b = head
  let c = null
  while (b) {
    c = b.next
    b.next = a
    a = b
    b = c
  }
  return a
}

// @lc code=end
function ListNode(val) {
  this.val = val
  this.next = null
}

let l1 = new ListNode(2)
l1.next = new ListNode(3)
l1.next.next = new ListNode(6)

let node = reverseList(l1)
while (node !== null) {
  console.log(node.val)
  node = node.next
}
