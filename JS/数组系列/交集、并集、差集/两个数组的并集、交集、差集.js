// 两个数组的并集、交集、差集
// 不能出现重复性，得到的是一个新数组
const arr1 = [33, 22, 22, 55, 33, 11, 33, 5]
const arr2 = [22, 22, 55, 77, 88, 88, 99, 99]

// 并集
const union = Array.from(new Set([...arr1, ...arr2]))
console.log('并集为' + union)

// 交集
const cross = Array.from(new Set(arr1.filter((item) => arr2.includes(item))))
console.log('交集为' + cross)

// 差集：并集去掉交集
const diff = Array.from(new Set(union.filter((item) => !cross.includes(item))))
console.log('差集为' + diff)
