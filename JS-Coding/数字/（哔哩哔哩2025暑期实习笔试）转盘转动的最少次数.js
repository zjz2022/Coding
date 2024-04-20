/*
ACM JS Node 模式
密码锁，四位数，每次可以把一个数字往下拨，即9变成8,8变成7,1变成0,0变成9（重点？）
设计算法，计算从一个数字到另一个数字的最少次数
输入描述：
两个长度为4的、仅有数字字符组成的字符串，用空格隔开
输出描述：
最小的拨动次数
示例1
输入；
9999 8888
输出
4
说明
每个位置分别拨动1次即可
*/

const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  while ((line = await readline())) {
    let tokens = line.split(' ')
    let a = parseInt(tokens[0])
    let b = parseInt(tokens[1])
    console.log(a + b)
  }
})()
