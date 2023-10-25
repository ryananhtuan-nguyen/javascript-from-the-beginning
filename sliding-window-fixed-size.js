/*

Given an array arr = [1,2,3,5,8,4,8,0,4,2,6,4].
Calculate the largest subarray sum size 3

*/

const arr = [1, 2, 3, 5, 8, 0, 4, 2, 6, 4]

// First approach, calculating every subarray of 3

function findLargestSubarray(arr) {
  let max = 0
  for (let i = 0; i + 2 < arr.length; i++) {
    console.log(arr[i], arr[i + 1], arr[i + 2])
    if (arr[i] + arr[i + 1] + arr[i + 2] > max) {
      max = arr[i] + arr[i + 1] + arr[i + 2]
    }
  }
  return max
}

console.log(findLargestSubarray(arr))
//---------------------------------
//can be also written as-----------
//---------------------------------

function findLargestSubarray1(arr, n) {
  let max = 0
  for (let i = 0; i < arr.length - 2; i++) {
    const current = []
    for (let j = 0; j < n; j++) {
      current.push(arr[i + j])
    }
    console.log(current)
    const currentSum = current.reduce((a, b) => a + b, 0)
    if (currentSum > max) max = currentSum
  }
  return max
}
console.log(findLargestSubarray1(arr, 3))
