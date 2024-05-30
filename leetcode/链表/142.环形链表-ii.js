/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // 定义一个哈希表，用来存储节点
  var set = new Set()

  // 遍历链表，当链表里没有的时候，就插入到哈希表中。即将整个链表都放入哈希表中
  while (head) {
    if (!set.has(head)) {
      set.add(head)
    } else {
      // 如果哈希表里存在，就证明有环,返回下标
      return head
    }
    head = head.next
  }
  return null
}
// @lc code=end
