// 创建一个名为findLongestWordLength的函数，它接受一个字符串参数str
function findLongestWordLength(str) {
  // 使用split方法将字符串str按空格分割，得到一个单词的数组
  // 使用map函数将这个单词数组映射到它们各自的长度，得到一个长度数组
  // 使用reduce方法在这个长度数组中找出最大值
  return str
    .split(' ') // 分割字符串成为单词数组
    .map((word) => word.length) //将每个单词映射到它的长度
    .reduce((max, current) => (current > max ? current : max), 0) // 找出数组中的最大值
}

// 测试我们的函数
console.log(findLongestWordLength('These are some example words for the example')) // 输出：7
