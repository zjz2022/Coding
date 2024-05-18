const reactive = (obj) => {
  return new Proxy(obj, {
    get(target, key, receiver) {
      track(target, key)
      return Reflect.get(target, key, receiver)
    },
    set(target, key, val, receiver) {
      Reflect.set(target, key, val, receiver)
      trigger(target, key)
    },
  })
}

const bucket = new WeakMap()

let activeEffect

const track = (target, key) => {
  let map = bucket.get(target)
  if (!map) {
    bucket.set(target, (map = new Map()))
  }
  let deps = map.get(key)
  if (!deps) {
    map.set(key, (deps = new Set()))
  }
  deps.add(activeEffect)
  activeEffect.deps.push(deps)
}

const trigger = (target, key) => {
  let map = bucket.get(target)
  if (!map) return
  let deps = map.get(key)
  if (!deps) return
  deps.forEach((fn) => {
    fn()
  })
}

const effect = (fn) => {
  const effectFn = () => {
    activeEffect = effectFn
    fn()
    activeEffect = undefined
  }
  effectFn.deps = []
  effectFn()
  return effectFn
}

const test = reactive({
  name: 'tt',
})

const hello = effect(() => {
  console.log('hello', test.name)
})

const bye = effect(() => {
  console.log('bye', test.name)
})

let temp = 9
const change = effect(() => {
  temp++
  test.name = temp
})

test.name = 2222
