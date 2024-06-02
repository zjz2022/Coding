/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.min = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  //判断x和min当前栈顶的数哪个小，如果x小则把x推入min的栈顶
  if (this.min.length == 0 || this.min[this.min.length - 1] >= x) {
    this.min.push(x)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  //this.stack.pop();
  //判断stack中即将弹出的元素和min栈顶的元素是否相等，若相等，则要把min栈顶的元素弹出，防止找不到最小值
  if (this.stack[this.stack.length - 1] == this.min[this.min.length - 1]) {
    this.min.pop()
  }
  this.stack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1] //min栈顶保存当前栈中的最小值
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
