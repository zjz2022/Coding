/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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

// 构造链表2->4->3
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
