/*
题目描述：
输入：a，b
输出：a+b
*/
const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  // line是输入，所以不需要定义类型
  // 输入字符串line，用空格隔开，比如我输入：a b c d e f g
  while ((line = await readline())) {
    // 定义一个数组tokens，用来把刚才输入的每一个量存放到数组中，然后我再利用数组方便查询的特点，定义每个变量
    let tokens = line.split(' ')
    let a = parseInt(tokens[0])
    let b = parseInt(tokens[1])
    // return 改为 console.log ，直接输出结果
    console.log(a + b)
  }
})()
