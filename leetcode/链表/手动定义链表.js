// 定义链表,leetcode推荐的
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

// 构造链表2->4->3
let l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

// 构造链表5->6->4
let l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

// 按照题目要求处理两个链表（以链表相加为例）
let node = addTwoNumbers(l1, l2)

// 根据定义的链表，输出链表，遍历节点，输出每个节点的值
while (node !== null) {
  console.log(node.val)
  node = node.next
}
