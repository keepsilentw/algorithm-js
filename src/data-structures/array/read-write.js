var print = require('../../util')

var nums = []
for (var i = 0; i < 100; i++) {
	nums[i] = i + 1
}

var numbers = [1, 2, 3, 4, 5]
var sum = 0
var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]
print(sum)  // 15

var numbers = [1, 2, 3, 6, 16, 29]
var sum = 0
for (var i = 0; i < numbers.length; i++) {
	sum += numbers[i]
}
print(sum) // 57
