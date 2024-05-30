/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 随机链表的复制
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null
  let cur = head
  let cNode = null // while 循环外初始化复制节点，避免每次都声明
  while (cur) {
    let next = cur.next // 保存cur.next不丢失
    cNode = new Node(cur.val, next, cur.random) // 复制原有节点
    cur.next = cNode // cur连接复制的cNode节点，为什么没写cNode.next = cur.next? 因为在Node方法里已经做了这一步
    cur = next
  } // 每个复制节点都会跟在原节点后面
  cur = head.next // 让cur指向head的下一个节点，也就是复制节点，因为我们用从复制节点开始纠正随机指针
  while (cur) {
    cur.random && (cur.random = cur.random.next) // 随机指针指向的节点后也是有复制节点，如果cur有随机指针，我们就让cur.random指向原节点随机指针指向节点的复制节点即可
    ;(cur = cur.next) && (cur = cur.next) // 每间隔一位才是复制节点
  }
  let temp = head.next // 保存一下head.next作为我们复制链表的头节点返回
  cur = head.next // 操作cur指针拆出我们的复制链表
  while (cur.next) {
    // 当cur.next 为null也就是已经遍历到最后一个复制节点了
    let next = head.next.next
    let temp = cur.next.next
    head.next = head.next.next // 让head连接head的下下个节点
    cur.next = cur.next.next // 让cur连接cur的下下个节点，cur与head间隔相连，拆成两条链表
    cur = temp
    head = next
  }
  head.next = null // 复制节点是最后一个节点不用指向null,head为复制节点的前一个节点需要断开去指向null,拆解完毕
  return temp
}
// @lc code=end
