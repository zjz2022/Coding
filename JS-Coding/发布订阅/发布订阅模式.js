//发布订阅模式
let EventMap = new Map()
function myEmit(event) {
  EventMap.has(event) &&
    EventMap.get(event).forEach((item) => {
      item()
    })
}
function mySub(event, fn) {
  EventMap.has(event) || EventMap.set(event, [])
  EventMap.get(event).push(fn)
}

mySub('Click1', () => {
  console.log('Click11')
})
mySub('Click1', () => {
  console.log('Click12')
})
mySub('Click2', () => {
  console.log('Click21')
})
myEmit('Click1')
myEmit('Click2')
