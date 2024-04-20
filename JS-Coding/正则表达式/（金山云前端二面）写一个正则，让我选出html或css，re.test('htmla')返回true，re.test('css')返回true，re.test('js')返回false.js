// 写一个正则，让我选出html或css，re.test('htmla')返回true，re.test('css')返回true，re.test('js')返回false
let re = new RegExp('html|css')
console.log(re.test('html')) // 返回 true
console.log(re.test('css')) // 返回 true
console.log(re.test('js')) // 返回 false
