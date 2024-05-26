class Scheduler {
  constructor(max) {
    this.max = max
    this.count = 0
    this.queue = []
  }
  async add(fn) {
    if (this.count >= this.max) {
      await new Promise((resolve) => this.queue.push(resolve))
    }
    this.count++
    const res = await fn()
    this.count--
    this.queue.length && this.queue.shift()()
    return res
  }
}

class Scheduler {
  constructor(max) {
    this.max = max
    this.count = 0
    this.queue = []
  }
  add(fn) {
    this.queue.push(fn)
  }
  start() {
    for (let i = 0; i < this.max; i++) {
      this.doNext()
    }
  }
  doNext() {
    if (this.queue.length && this.max >= this.count) {
      this.count++
      this.queue
        .shift()()
        .then(() => {
          this.count--
          this.doNext()
        })
    }
  }
}

const scheduler = new Scheduler(2)

const timeout = (time) => new Promise((resolve) => setTimeout(resolve, time))

const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)))
}

addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)
function limitQueue(urls, limit) {
  // 完成任务数
  let i = 0
  // 填充满执行队列
  for (let excuteCount = 0; excuteCount < limit; excuteCount++) {
    run()
  }
  // 执行一个任务
  function run() {
    // 构造待执行任务 当该任务完成后 如果还有待完成的任务 继续执行任务
    new Promise((resolve, reject) => {
      const url = urls[i]
      i++
      resolve(fn(url))
    }).then(() => {
      if (i < urls.length) run()
    })
  }
}
const fn = (url) => {
  // 实际场景这里用axios等请求库 发请求即可 也不用设置延时
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('完成一个任务', url, new Date())
      resolve({ url, date: new Date() })
    }, 1000)
  })
}
const urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

;(async (_) => {
  await limitQueue(urls, 4)
})()
