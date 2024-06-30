/**
 *## 有一个缓冲池，最多可以并发执行五个进程，且可以实现没完成一个进程就执行下一个进程

- 当时没有理解题目意思，结果用Promise.all来实现了，虽然可以完成并发，但是不能实现每完成一个进程就执行下一个，因为并没有把进程存下来，也就是没有实现缓冲的效果
 */

// https://cloud.tencent.cn/developer/information/%E5%9C%A8Javascript%E4%B8%AD%E4%BD%BF%E7%94%A8%E7%BC%93%E5%86%B2%E6%B1%A0%E5%A4%A7%E5%B0%8F%E5%B9%B6%E5%8F%91%E6%89%A7%E8%A1%8Cpromises
