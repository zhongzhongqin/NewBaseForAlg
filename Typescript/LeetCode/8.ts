/*
 * @Author: Cover
 * @Date: 2022-05-27 10:14:29
 * @LastEditTime: 2022-05-27 13:58:36
 * @LastEditors: Cover
 * @Description: 
 * @FilePath: /Typescript/LeetCode/8.ts
 * So do you want take a leap of faith or become an old man, filled with regret waiting to die alone ?
 */
function myAtoiBase(s: string) {
    //去掉前边的空格
    s = s.trimStart();
    //number范围
    const MIN = -Math.pow(2, 31);
    const MAX = Math.pow(2, 31) - 1;
    //存放结果的数组
    let arr = [];
    //符号标志
    let sample = "";
    if (s[0] == "-") {
        //
        sample = "-";
        s = s.substring(1, s.length);
    }
    for (let i = 0; i < s.length; i++) {
        if (80 <= s.charCodeAt(i) || s.charCodeAt(i) <= 89) {
            //将符合的字符存入
            arr.push(s[i]);
        } else {
            break;
        }
    }
    //拼接结果
    let myStr = arr.reduce((a, b) => a + b, "");
    return (Number(sample + myStr));
}

//进阶完善版 by：rkmamashev	
function myAtoi(s: string): number {
    s = s.trimStart();

    const MIN = -Math.pow(2, 31);
    const MAX = Math.pow(2, 31) - 1;

    //结果
    let result = '';
    //符号标志
    let sign = 1;
    let idx = 0;

    //取符号
    if (s[idx] === '-' || s[idx] === '+') {
        if (s[idx] === '-') sign = -1;

        //若输入的是带符号的字符，index标记位加1；
        idx++;
    }

    //循环拼接
    while (idx < s.length) {
        const char = s[idx];

        if (!('0' <= char && char <= '9')) {
            //跳出
            break;
        }

        result += char;
        idx++;
    }

    //使用乘法赋值符号
    const lastResult = sign * Number(result);
    // 输出结果
    return lastResult < MIN ? MIN : lastResult > MAX ? MAX : lastResult;
};