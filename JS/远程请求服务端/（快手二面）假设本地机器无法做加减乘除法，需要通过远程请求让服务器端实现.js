// 假设本地机器无法做加减乘除法，需要通过远程请求让服务器端实现
// 以加法为例，现有远程API的模拟实现
const addRemote = async (a, b) => new Promise(resolve => {
    setTimeout(() => resolve(a + b), 1000)
})
// 请实现本地方法add，调用addRemote，能最优实现输入数字的加法
async function add (..rest) {
  // 你的实现
}

// 请用实例验证运行结果
add(1, 2).then(result => {
  console.log(result) // 3
})

add(3, 5, 2).then(result => {
  console.log(result) // 10
})