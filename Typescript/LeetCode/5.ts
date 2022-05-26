/*
 * @Author: Cover
 * @Date: 2022-05-25 10:34:04
 * @LastEditTime: 2022-05-26 11:53:57
 * @LastEditors: Cover
 * @Description: 给你一个字符串 s，找到 s 中最长的回文子串。
 * @FilePath: /Typescript/LeetCode/5.ts
 * So do you want take a leap of faith or become an old man, filled with regret waiting to die alone ?
 */

//对比typescript会更方便理解
function longestPalindromeJS(s) {
    let ll = 0, rr = 0;

    for (let i = 0; i < s.length; i++)
        for (let j of [i, i + 1])
            for (let l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
                [ll, rr] = (r - l + 1) > (rr - ll + 1) ? [l, r] : [ll, rr];

    return s.substring(ll, rr + 1);
}

function longestPalindrome(s: string): string {
    if (!s || s.length <= 1) { return s }
    let longestPalindrome = s.substring(0, 1)

    for (let i = 0; i < s.length; i++) {
        [expand(s, i, i), expand(s, i, i + 1)].forEach((maybeLongest) => {
            if (maybeLongest.length > longestPalindrome.length) {
                longestPalindrome = maybeLongest
            }
        })
    }

    return longestPalindrome
}

//找出回文子串
function expand(s: string, begin: number, end: number): string {
    while (begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
        begin--
        end++
    }

    return s.substring(begin + 1, end)
}