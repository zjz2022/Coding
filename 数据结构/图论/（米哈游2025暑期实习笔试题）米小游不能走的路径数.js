/*
JS Node ACM 模式
米小游一发十连就抽到了优菈，所以她正在打急冻树给优菈升级(是不是打错BOSS了?)。
一颗树上有 n 个节点，每个节点都用一个字母'd'或'j'表示节点的属性。如果一条路径同时经过了属性为'd'和'j'节点，那么走这条路径就会被冻结。
米小游不想被冻结，她想知道有多少条路径是她不能走的。
输入描述
第一行输入一个整数n(1 <= n <= 10^5)。
第二行输入一个长度为 n 的仅由'j'和'd'组成的字符串。
接下来n -1行，每行输入两个整数 u,v(1 <= u,v <= n)表示节点 u 和节点 v之间有一条边。

输出描述
输出一个整数表示米小游不能走的路径数。

示例 1

输入
5
jjd
1 2
1 3

输出
2

说明
路径1-3(3-1)是不能走的。
路径2-1-3(3-1-2)是不能走的。
因此答案为2。
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
