/*
版本号排序
给定一个版本号数组['4.8', '1.7.1', '4.1.9', '5'] ，按照规则进行升序排序。

排序结果：["1.7.1", "4.1.9", "4.8", "5"]

注意：对于首位相同的版本号，进行第二位以及其余位的判断。
*/
function arrSort(arr) {
  arr.sort((version1, version2) => {
    //先对字符串进行分隔
    const v1 = version1.split('.')
    const v2 = version2.split('.')
    const len = Math.max(v1.length, v2.length)
    //依次比较
    for (let i = 0; i < len; i++) {
      //将字符串转化为数字
      const n1 = Number(v1[i] || 0)
      const n2 = Number(v2[i] || 0)
      if (n1 > n2) return 1
      if (n1 < n2) return -1
    }
    return 0
  })
}

const arr = ['4.8', '1.7.1', '4.1.9', '5']
arrSort(arr)
console.log(arr) //["1.7.1", "4.1.9", "4.8", "5"]
