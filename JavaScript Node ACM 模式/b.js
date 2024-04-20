/*
题目描述：
第一行输入：n（传入的个数）
第二行输入：a b (输入的数字)
输出：a+b
*/
const rl = require('readline').createInterface({ input: process.stdin })
let iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  let num = await readline()
  for (let i = 0; i < num; i++) {
    let arr = (await readline()).split(' ')
    let res = parseInt(arr[0]) + parseInt(arr[1])
    console.log(res)
  }
})()
