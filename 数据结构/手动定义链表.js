// 当在白板写代码的时候，一般要自己定义链表，否则你怎么验证输出结果呢？ 面美团在美团视频面试，面快手在轻雀，都是对着白板写代码，自己写自测样例
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

// 按照题目要求处理两个链表（以链表相加为例）
let node = addTwoNumbers(l1, l2)

// 根据定义的链表，输出链表，遍历节点，输出每个节点的值
while (node !== null) {
  console.log(node.val)
  node = node.next
}
