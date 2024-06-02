/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  function dfs(x, y, s) {
    if (s === word.length) return true
    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length)
      return false
    if (board[x][y] !== word[s]) return false

    let char = board[x][y]
    board[x][y] = '*'
    let res =
      dfs(x - 1, y, s + 1) ||
      dfs(x + 1, y, s + 1) ||
      dfs(x, y - 1, s + 1) ||
      dfs(x, y + 1, s + 1)
    board[x][y] = char
    return res
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(i, j, 0)) {
          return true
        }
      }
    }
  }
  return false
}
// @lc code=end
