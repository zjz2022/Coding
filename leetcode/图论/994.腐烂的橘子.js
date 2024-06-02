/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let queue = [] // 统计新鲜的橘子

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j])
      }
    }
  }

  let time = 0

  // 直到没有新鲜的橘子为止
  while (queue.length) {
    let next = [] // 储存下一轮新鲜的橘子
    let rot = [] // 储存下一轮腐烂的橘子

    // 遍历新鲜橘子，区分下一轮的新鲜橘子和腐烂橘子
    for (let k = 0; k < queue.length; k++) {
      let i = queue[k][0]
      let j = queue[k][1]
      if (
        (grid[i - 1] && grid[i - 1][j] === 2) ||
        (grid[i + 1] && grid[i + 1][j] === 2) ||
        grid[i][j - 1] === 2 ||
        grid[i][j + 1] === 2
      ) {
        // 四周有橘子，说明已腐烂
        rot.push([i, j])
      } else {
        next.push([i, j])
      }
    }

    // 这一轮没有腐烂的橘子，则返回-1
    if (!rot.length) {
      return -1
    }

    // 把这一轮腐烂的橘子标记成2
    for (let i = 0; i < rot.length; i++) {
      grid[rot[i][0]][rot[i][1]] = 2
    }

    queue = next
    time++
  }

  return time
}
// @lc code=end
