/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 快慢指针是解决环形链表的不二法门
  let fast = head
  let slow = head

  while (fast) {
    if (fast.next === null) {
      return false
    }
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) return true
  }

  return false
}
// @lc code=end
