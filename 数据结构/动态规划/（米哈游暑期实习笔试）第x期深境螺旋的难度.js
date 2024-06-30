/*
ACM JS Node模式
米小游是《原神》的策划，她希望每期深境螺旋的难度尽可能一样。
已知第一期深境螺旋的难度为 a1，第二期深境螺旋的难度为 a2，那么从第三期开始，每期的难度为 ai=[(a(i-1) + a(i-2))/2]，米小游想知道按照这个规则，第x期深境螺旋的难度是多少?
输入描述
输入三个整数a1,a2,x(1<=a1,a2,x<=10^9)表示询问
输出描述
输出第x期深境螺旋的难度。
*/
const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  while ((line = await readline())) {
    let tokens = line.split(' ')
    let a = parseInt(tokens[0])
    let b = parseInt(tokens[1])
    let x = parseInt(tokens[2])
    // 第 x 期的临时结果
    let temp
    // 从第 3 期开始计算
    for (let i = 3; i <= x; i++) {
      temp = Math.floor((a + b) / 2)
      a = b
      b = temp
      // 首先，我们从第三期开始（i=3），因为前两期的难度已经给出。我们用a和b（即a1和a2）的平均值计算出了第三期的难度，并将结果存储在temp变量中。

      // 接着将a的值更新为b，b的值更新为temp，也就是说在下一轮循环（i=4）中，a和b分别表示了第二期和第三期的难度，然后继续使用它们计算第四期的难度。

      // 然后，这个过程将一直继续下去，直到我们计算出第x期的深渊难度。
    }
    // 输出第 x 期深境螺旋的难度
    console.log(x < 3 ? (x === 1 ? a : b) : temp)
    // 首先判断 x 是否小于 3：

    // - 如果 x 小于 3（也就是只有1和2的情况），那么我们知道这两期的深渊难度已经给出，不需要进行计算，可以直接输出，所以进行第二次判断：

    // - 如果 x等于1，那么输出 a，因为 a 是第一期的深渊难度。
    // - 否则，表明 x 等于2，输出 b，因为 b是第二期的深渊难度。

    // - 如果 x 不小于 3（也就是从第三期开始），那么深渊的难度需要根据前两期进行计算，计算的结果我们已经存放在了 temp 变量中，所以这时候就直接输出 temp。

    // 所以这句代码的作用就是，在确定了期数 x 之后，决定输出哪一个值——第一期深渊难度、第二期深渊难度，或者是计算出来的第 x 期深渊难度。
  }
})()
