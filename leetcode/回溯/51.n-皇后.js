/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  var t = [],
    temp = [],
    res = []
  for (let i = 0; i < n; i++) {
    t.push(0)
  }
  for (let i = 0; i < n; i++) {
    temp.push([...t])
  } //判断能否摆放
  var jungle = function (i, j, n) {
    //横
    for (let k = 0; k < n; k++) {
      if (temp[i][k] == 1) return 0
    } //竖
    for (let k = 0; k < n; k++) {
      if (temp[k][j] == 1) return 0
    } //斜
    for (let k = 1; k + j < n && i - k >= 0; k++) {
      if (temp[i - k][j + k] == 1) return 0
    }
    for (let k = 1; k + i < n && j - k >= 0; k++) {
      if (temp[i + k][j - k] == 1) return 0
    }
    for (let k = 1; k + i < n && j + k < n; k++) {
      if (temp[i + k][j + k] == 1) return 0
    }
    for (let k = 1; i - k >= 0 && j - k >= 0; k++) {
      if (temp[i - k][j - k] == 1) return 0
    }
    return 1
  } //深搜遍历
  var dfs = function (e, n) {
    for (let i = 0; i < n; i++) {
      if (temp[e][i] == 0 && jungle(e, i, n)) {
        // console.log(e,i);
        temp[e][i] = 1 // console.log(temp);
        if (e == n - 1) {
          // console.log(temp);
          var ans = []
          for (let i1 = 0; i1 < n; i1++) {
            var a = ''
            for (let i2 = 0; i2 < n; i2++) {
              if (temp[i1][i2] == 0) a += '.'
              else a += 'Q'
            }
            ans.push(a)
          }
          res.push(ans)
        } else {
          dfs(e + 1, n)
        }
      }
      temp[e][i] = 0
    }
  }
  dfs(0, n)
  return res
}
// @lc code=end
