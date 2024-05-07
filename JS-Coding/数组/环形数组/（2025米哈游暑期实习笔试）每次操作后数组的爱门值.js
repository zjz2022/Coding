/*
JS Node ACM模式
爱莉希雅定义一个长度为 m 的环形数组的爱门值为:将环形数组从小到大排序后，若lcm(ai,a prev(i)+ a next(i))>k，则ai(1 <=i<= m)是可爱数，环形数组的爱门值是所有可爱数之和。
其中， a prev(i),a next(i)分别表示 ai的前一个和后一个元素(有可能是同一个)，lcm(x,y)表示x和y的最小公倍数,环形数组的第一个元素和最后一个元素相邻。
现在米小游有一个空的环形数组，她会进行n次操作，每次操作会在环形数组中插入一个数字，她想知道每次操作后环形数组的爱门值。

输入描述
第一行输入两个整数 n,k(1 ≤n≤ 10^5,1 ≤k≤ 10^18)，如题目描述。
第二行输入 n 个整数 xi(1 <=xi <= 10^9)表示每次操作插入的数字

输出描述
输出 n 个整数，分别表示每次操作后数组的爱门值。

补充说明

示例1
输入
3 10
6 3 2
输出
6 3 11
说明
操作 1 后，排序后环形数组为[6]，
lcm(a1,a1 +a1)= 12，爱门值为 6。
操作 2 后，排序后环形数组为「3,6]，
lcm(a1,a2+a2)=12,lcm(a2,a1+a1)=6爱门值为 3。
操作 3 后，排序后环形数组为[2,3,6]
lcm(a1,a2+a3)=18,lcm(a2,a1+a3)=24,lcm(a3,a1+ a2)=30
爱门值为2+3+6=11。
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
