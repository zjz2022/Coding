/**
 * https://www.jianshu.com/p/afae17bb6fc6
 */
// 一个异步请求的示例
const fetchDemo = fetch('https://mock.cangdu.org/mock/5fa25923bcab7337c1b1c274/simple_shopping/product_list')

// 总共需要请求的次数
const lens = 23
// 每次最大的请求数量
const max = 5

// 假设有这么多次的请求
const fetchDemoArr = new Array(lens).fill(fetchDemo)
// 设定下标
let idx = 0
// 当 idx 小于总共次数的时候就进行循环处理
while (idx < lens) {
  // 每次都取到最大的请求数量
  const curArr = fetchDemoArr.slice(idx, idx + max)
  // 使用 promise.all 进行并发请求
  Promise.all(curArr)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  // 下标累加
  idx += max
}
