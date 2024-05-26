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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // 虚拟头结点
  var dummy = new ListNode(-1),
    p = dummy;
  var p1 = l1,
    p2 = l2;

  while (p1 !== null && p2 !== null) {
    // 比较 p1 和 p2 两个指针
    // 将值较小的的节点接到 p 指针
    if (p1.val > p2.val) {
      p.next = p2;
      p2 = p2.next;
    } else {
      p.next = p1;
      p1 = p1.next;
    }
    // p 指针不断前进
    p = p.next;
  }

  if (p1 !== null) {
    p.next = p1;
  }

  if (p2 !== null) {
    p.next = p2;
  }

  return dummy.next;
};
// @lc code=end
