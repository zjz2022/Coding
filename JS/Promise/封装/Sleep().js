// const sleep = (time) => {
//   return new Promise((resolve) => setTimeout(resolve, time))
// }

const sleep = (time) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve()
    }, time)
  )
}
sleep(3000).then(() => {
  console.log(1)
})
