/*
 * @Author: Cover
 * @Date: 2022-05-27 14:02:35
 * @LastEditTime: 2022-05-27 14:54:39
 * @LastEditors: Cover
 * @Description:给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
-121,121-不是；
 * 援引7.ts可做此判断；
 * @FilePath: /Typescript/LeetCode/9.ts
 * So do you want take a leap of faith or become an old man, filled with regret waiting to die alone ?
 */
function isPalindrome(x:number){
    if(x < 0){
        return false;
    }

    //用此保存原数据
    let sourceNum = x;
    //将x翻转之后的数
    let reversed = 0
    while (x > 0) {
        const remainder = x % 10
        reversed = reversed * 10 + remainder
        x = Math.floor(x / 10)
    }

    return  reversed === sourceNum;
}