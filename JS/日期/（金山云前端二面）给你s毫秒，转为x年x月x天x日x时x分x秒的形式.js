// 给你s毫秒，转为x年x月x天x日x时x分x秒的形式
// 把毫秒转换为 x天x小时x分钟x秒
function millisecond2DayHourMinuteSecond(ms) {
  const prefix = ms < 0 ? '-' : ''
  const n_ms = Math.abs(ms)

  const X = {
    D: 1000 * 60 * 60 * 24,
    H: 1000 * 60 * 60,
    M: 1000 * 60,
    S: 1000,
    f: (v, unit) => (v === 0 ? '' : `${v}${unit}`),
    d: (v) => X.f(Math.floor(v / X.D), '天'),
    h: (v) => X.f(Math.floor((v % X.D) / X.H), '小时'),
    m: (v) => X.f(Math.floor((v % X.H) / X.M), '分钟'),
    s: (v) => X.f(Math.floor((v % X.M) / X.S), '秒'),
  }

  return `${prefix}${X.d(n_ms)}${X.h(n_ms)}${X.m(n_ms)}${X.s(n_ms)}`
}

console.log(millisecond2DayHourMinuteSecond(0)) // 空字符串
console.log(millisecond2DayHourMinuteSecond(1001)) // "1秒"
console.log(millisecond2DayHourMinuteSecond(60000)) // "1分钟"
console.log(millisecond2DayHourMinuteSecond(3600000)) // "1小时"
console.log(millisecond2DayHourMinuteSecond(86400000)) // "1天"
console.log(millisecond2DayHourMinuteSecond(90061000)) // "1天1小时1分钟1秒"
console.log(millisecond2DayHourMinuteSecond(-90061000)) // "-1天1小时1分钟1秒"
