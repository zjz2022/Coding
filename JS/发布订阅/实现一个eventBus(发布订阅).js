class eventBus {
  on() {}
  off() {}
  once() {}
  emit() {}
}

const event = new eventBus()

//事件绑定
event.on('message', console.log.bind(null, 1))
event.on('message', console.log.bind(null, 2))
//事件触发
event.emit('message')

//输出 1 2
