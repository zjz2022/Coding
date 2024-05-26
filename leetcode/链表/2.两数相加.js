/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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

// 根据定义的链表，输出链表
while (node !== null) {
  console.log(node.val)
  node = node.next
}
