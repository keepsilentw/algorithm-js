var print = require('../../util')

var nums = []
for (var i = 0; i < 10; i++) {
	nums[i] = i + 1
}
var samenums = nums
nums[0] = 400
print(samenums[0]) // 400

function copy(arr1, arr2) {
	for (var i = 0; i < arr1.length; i++) {
		arr2[i] = arr1[i]
	}
}

var nums = []
for (var i = 0; i < 10; i++) {
	nums[i] = i + 1
}
var samenums = []
copy(nums, samenums)
nums[0] = 400
print(samenums[0]) // 1

var nums = [1, 2, 3, 4, 5]
print(nums)
