/*

Given an array arr = [1,2,3,5,8,4,8,0,4,2,6,4].
Calculate the largest subarray sum size 3

*/

const random_numbers = [
  135, 764, 289, 501, 834, 176, 633, 317, 432, 71, 892, 625, 415, 298, 662, 468,
  144, 779, 823, 41, 398, 969, 584, 259, 30, 768, 933, 75, 601, 189, 898, 451,
  517, 246, 832, 715, 570, 97, 58, 889, 850, 952, 191, 686, 286, 84, 297, 542,
  700, 486, 154, 525, 330, 592, 741, 127, 453, 639, 576, 136, 871, 396, 814,
  184, 721, 617, 794, 73, 180, 936, 381, 31, 98, 737, 267, 629, 643, 210, 738,
  981, 217, 226, 683, 244, 937, 49, 891, 498, 948, 907, 42, 819, 44, 488, 713,
  595, 938, 866, 396, 33, 69, 621, 970,
]

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

// console.log(findLargestSubarray(arr))
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
    // console.log(current)
    const currentSum = current.reduce((a, b) => a + b, 0)
    if (currentSum > max) max = currentSum
  }
  return max
}
// console.log(findLargestSubarray1(arr, 3))

//---------------------------------
//Sliding window-------------------
//---------------------------------

function slidingWindow(arr, n) {
  let max = 0
  let currentSum = 0
  for (let i = 0; i < n; i++) {
    currentSum += arr[i]
  }
  // console.log(max)
  max = currentSum
  for (let i = 1; i < arr.length - n; i++) {
    currentSum = max - arr[i] + arr[i + n - 1]
    if (currentSum > max) {
      max = currentSum
    }
  }
  return max
}

// slidingWindow(random_numbers, 20)

const maxSubArray = (nums) => {
  let maxSum = -Infinity
  let currentSum = 0

  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i])

    maxSum = Math.max(currentSum, maxSum)
  }
  return maxSum
}
console.log(findLargestSubarray1(random_numbers))
console.log(maxSubArray(random_numbers))
