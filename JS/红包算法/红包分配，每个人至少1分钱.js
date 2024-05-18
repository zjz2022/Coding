// 引入需要的库
const Decimal = require('decimal.js')

function randomRedPacket(leftMoney, leftPeople) {
  // 将剩余红包金额转换为 Decimal 类型进行计算
  let leftMoneyDecimal = new Decimal(leftMoney)

  // 计算剩余人均红包金额，保留两位小数
  let result = leftMoneyDecimal.dividedBy(leftPeople).toDecimalPlaces(2)

  // 计算二倍均值
  result = result.times(2)

  // 将金额单位从元转换为分，并保证是一个整数
  let limit = Math.floor(result.times(100).toNumber())

  // 在 1 到 limit 之间随机生成一个整数作为抢到的红包金额（单位：分）
  let amount = Math.floor(Math.random() * limit) + 1

  // 将抢到的红包金额从分转换为元，并保留两位小数
  amount = (amount / 100).toFixed(2)

  // 更新剩余的红包金额
  leftMoneyDecimal = leftMoneyDecimal.minus(amount)

  // 返回抢到的红包金额和剩余的红包金额
  return { amount: amount, leftMoney: leftMoneyDecimal.toFixed(2) }
}
