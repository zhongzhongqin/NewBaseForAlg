/*
 * @Author: Cover
 * @Date: 2022-05-26 10:46:34
 * @LastEditTime: 2022-05-26 18:02:29
 * @LastEditors: Cover
 * @Description: 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
 * @FilePath: /Typescript/LeetCode/6.ts
 * So do you want take a leap of faith or become an old man, filled with regret waiting to die alone ?
 */

/***
 * JS版
 */
var convertJS = function (s, numRows) {
    // return original string if can't zigzag
    // 当无法Z排列时，返回原字符串。
    if (numRows === 1 || s.length < numRows) return s;

    //用于保存convert之后的字符串行
    let rows = []
    let converted = '';
    let reverse = false;
    let count = 0

    // prepare rows
    // 生成对应具体行数的数组
    for (let i = 0; i < numRows; i++) rows[i] = [];
    // reverse the push flow when reaching turning points
    // 当接近“转折点”时，修改reverse，以修改字符存放位置
    // rows[0 --> numRos - 1]皆是存放字符的数组；
    for (let i = 0; i < s.length; i++) {
        rows[count].push(s[i]);
        reverse ? count-- : count++;

        /**
         * 1   1
         * 2 2 2 ==> 以numRows = 3为例；当count为0时，则增大count reverse为false；当count为 numRows - 1时，则缩减count；
         * 3   3
         * 
         * 这样就很好理解了
         */
        if (count === numRows - 1 || count === 0) reverse = !reverse;
    }
    // put together converted string
    // 将rows的字符连接起来，即是目标string；
    return rows.reduce((converted, cur) => converted + cur.join(''), '');
};

/**
 * TS版
 * @param s 原字符串 
 * @param numRows 行数
 * @returns 
 */
function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;

    //创建同行数大小的数组，用于存放每行的字符串；
    const stack = new Array(numRows).fill('');
    //标志位
    let idx = 0;
    let isZigZag = false;

    for (let char of s) {
        //字符串拼接的方式将字符存入数组；
        stack[idx] += char;

        if (idx === numRows - 1 && !isZigZag) isZigZag = true;

        if (idx === 0 && isZigZag) isZigZag = false;

        isZigZag ? idx-- : idx++;
    }

    //拼接并返回；
    return stack.join('');
};