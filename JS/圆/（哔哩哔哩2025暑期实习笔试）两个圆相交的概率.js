/*
ACM JS Node模式
平面上有一个半径为R的圆形，小红在园内任意一点，以该点为圆心做一个半径为r的圆。计算两个圆相交的概率
输入描述：
两个正整数R和r，用空格隔开
1<=R,r<=10^9
输出描述：
一个小数，代表两个圆相交的概率。如果你的答案和标准答案的误差不超过10^-5，则认为答案正确。
示例一
输入
2 1
输出
0.75
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
