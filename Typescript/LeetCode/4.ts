
/*
 * @Description: 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
算法的时间复杂度应该为 O(log (m+n)) 。
 * 若不去重的话，ts会相对简单些
 * @FilePath: /Typescript/LeetCode/4.ts
 * So do you want take a leap of faith or become an old man, filled with regret waiting to die alone ?
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number | undefined {
    const result = nums1.concat(nums2).sort((a, b) => a - b)
    const medianLocation = (result.length - 1) / 2

    return ((result[Math.floor(medianLocation)] + result[Math.ceil(medianLocation)]) / 2)
}