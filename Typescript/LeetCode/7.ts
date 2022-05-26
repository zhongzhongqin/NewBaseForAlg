/*
 * @Author: Cover
 * @Date: 2022-05-26 18:01:44
 * @LastEditTime: 2022-05-26 19:16:16
 * @LastEditors: Cover
 * @Description: 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
假设环境不允许存储 64 位整数（有符号或无符号）。
 * @FilePath: /Typescript/LeetCode/7.ts
 * So do you want take a leap of faith or become an old man, filled with regret waiting to die alone ?
 */
const minInt = -Math.pow(2, 31)
const maxInt = -minInt - 1

function reverse(x: number): number {
    const isNegative = x < 0
    let reversed = 0
    if (isNegative) { x = -x }

    while (x > 0) {
        const remainder = x % 10
        reversed = reversed * 10 + remainder
        x = Math.floor(x / 10)
    }

    if (reversed > maxInt) { return 0 }
    return isNegative ? -reversed : reversed
}