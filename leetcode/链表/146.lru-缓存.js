/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.map = new Map()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  // 如果map中有这个key存在则返回，反之返回-1
  if (this.map.has(key)) {
    const value = this.map.get(key)
    this.map.delete(key)
    this.map.set(key, value)
    return this.map.get(key)
  } else {
    return -1
  }
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 首先判断这个key存在吗，存在则删除，重新放置 反之直接放置
  if (this.map.has(key)) {
    this.map.delete(key)
    this.map.set(key, value)
  } else {
    // 判断map的大小是否比题目给定的容量大
    if (this.map.size >= this.capacity) {
      this.map.delete(this.map.entries().next().value[0])
      this.map.set(key, value)
    } else {
      this.map.set(key, value)
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

// ["LRUCache","put","put","get","put","get","put","get","get","get"]
// [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
const lruCache = new LRUCache(2)
lruCache.put(1, 1)
lruCache.put(2, 2)
const res1 = lruCache.get(1)
lruCache.put(3, 3)
const res2 = lruCache.get(2)
lruCache.put(4, 4)
const res3 = lruCache.get(1)
const res4 = lruCache.get(3)
const res5 = lruCache.get(4)

console.log(res1, res2, res3, res4, res5)
// 1 -1(undefined) -1(undefined) 3 4
