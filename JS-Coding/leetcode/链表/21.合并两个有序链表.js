/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
let mergedTwoLists = (list1, list2) => {
  let head = new ListNode(0)
  let result = head
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      result.next = list1
      list1 = list1.next
    } else {
      result.next = list2
      list2 = list2.next
    }
    result = result.next
  }
  if (list1 !== null) {
    result.next = list1
  } else {
    result.next = list2
  }
  return head.next
}
// @lc code=end

function ListNode(val) {
  this.val = val
  this.next = null
}

let l1 = new ListNode(1)
l1.next = new ListNode(3)
l1.next.next = new ListNode(6)

let l2 = new ListNode(2)
l2.next = new ListNode(4)
l2.next.next = new ListNode(7)

let node = mergedTwoLists(l1, l2)
while (node !== null) {
  console.log(node.val)
  node = node.next
}
