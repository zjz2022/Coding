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
  // 初始化两个指针节点，a 和 b，同时初始化临时节点 c
  let a = null
  let b = head
  let c = null

  // 从头节点开始进行循环
  while (b) {
    // 记录 b 的后续节点 next，因为后续会改变 b 的 next 属性
    c = b.next

    // b 的 next 属性 现在应指向其前一个节点 a
    b.next = a

    // 移动 a 和 b 的指针位置，为下一轮循环做准备
    // a 现在应该指向 b，即 a 向后移动一位
    a = b
    // b 现在应该指向 c，即 b 向后移动一位
    b = c
  }

  // 当 b 为空（即 b 已经指向原链表的末尾），完成循环
  // 此时 a 指向新链表的头节点

  return a // 返回新的头节点
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
