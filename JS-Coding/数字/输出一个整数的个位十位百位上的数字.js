var num = 651234
//千位，除以1000取整
var a = parseInt(num / 1000)
console.log(a)
//百位：
//var b=parsInt((num-a*num)/100)
var b = parseInt((num % 1000) / 100)
console.log(b)
//十位
var c = parseInt((num % 100) / 10)
console.log(c)
//个位
var d = num % 10
console.log(d)
//各位数字之和
console.log(a + b + c + d)
