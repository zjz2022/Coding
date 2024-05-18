const getValue: FN = (obj, key) => {
  return obj[key]
}
getValue({ a: 1 }, 'a')
getValue({ a: 1 }, 'b')
getValue('1', 'b')

type FN<T, K extends keyof T> = (obj: T, key: K) => T[K]
