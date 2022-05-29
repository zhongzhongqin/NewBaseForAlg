/*
 * @Author: Cover
 * @Date: 2022-05-22 17:01:31
 * @LastEditTime: 2022-05-29 14:12:46
 * @LastEditors: Cover
 * @Description: 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * @FilePath: \NewBaseForAlg\Typescript\LeetCode\3.ts
 * So do you want take a leap of faith or become an old man, filled with regret waiting to die alone ?
 */

function lengthOfLongestSubstringJS(s) {
    const map = {};
    var left = 0;

    return s.split('').reduce((max, v, i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Math.max(max, i - left + 1);
    }, 0);
}

function lengthOfLongestSubstring(s: string): number {
    const scanner: string[] = []
    let longest = 0

    for (const char of s) {
        const possibleIndex = scanner.indexOf(char)

        if (possibleIndex !== -1) { scanner.splice(0, possibleIndex + 1) }
        scanner.push(char)
        longest = Math.max(longest, scanner.length)
    }

    return longest
}