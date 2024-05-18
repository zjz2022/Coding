// 打印1,2,3,4,5，每隔一秒打印一个数字
// for (let i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log('过了' + i + '秒打印的数字为' + i)
//   }, i * 1000)
// }
// for (let i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, i * 1000)
// }
for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i)
  }, i * 1000)
}
