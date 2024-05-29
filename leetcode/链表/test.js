var mergeTwoLists = function (list1, list2) {
  // 创建一个新的节点实例作为结果链表的头部
  var head = new ListNode(0)

  // 创建一个变量result，让其指向新链表的最后一个节点
  var result = head

  // 循环比较两个列表的节点，直到其中一个列表为null
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      // 如果list1的当前节点值小于list2的，将list1的当前节点添加到结果链表
      result.next = list1
      // 将list1的当前节点指针向后移动一位
      list1 = list1.next
    } else {
      // 如果list1的当前节点值大于等于list2的，将list2的当前节点添加到结果链表
      result.next = list2
      // 将list2的当前节点指针向后移动一位
      list2 = list2.next
    }
    // 将result向后移动一位以准备下次添加新的节点
    result = result.next
  }

  // 如果一个列表先为null，那么result的next指针应该直接指向另一个还有剩余节点的列表
  if (list1 != null) {
    result.next = list1
  } else {
    result.next = list2
  }

  // 返回结果链表，注意我们的结果链表实际上是从dummy的next开始的，所以要返回head.next
  return head.next
}
// @lc code=end

// 首先定义一个ListNode构造函数
function ListNode(val) {
  this.val = val
  this.next = null
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
