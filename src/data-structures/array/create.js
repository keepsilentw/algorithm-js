var print = require('../../util')

var numbers = []
print(numbers.length)  // 0

var numbers = [1, 2, 3, 4, 5]
print(numbers.length) // 5

var numbers = new Array()
print(numbers.length)  // 0

var numbers = new Array(1, 2, 3, 4, 5)
print(numbers.length)  // 5

var numbers = new Array(10)
print(numbers.length)  // 10

var objects = [1, 'Tom', true, null]
print(objects.length)  // 4

var numbers = 3
var arr = [6, 16, 616]
print(Array.isArray(numbers))  // false
print(Array.isArray(arr))  // true
