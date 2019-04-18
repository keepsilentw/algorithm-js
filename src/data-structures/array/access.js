var print = require('../../util')

var names = ['Tom', 'Jack', 'Steve', 'Allen', 'William', 'Charles', 'Robert', 'Lucy']
var name = 'David'
var position = names.indexOf(name)
if (position >= 0) {
	print('Found ' + name + ' at position ' + position)
} else {
	print(name + ' not found in array')
}

var names = ['Tom', 'Jack', 'James', 'Allen', 'Sophia', 'Tom', 'Kevin', 'Judy', 'Diana', 'Jessie']
var name = 'Tom'
var firstPos = names.indexOf(name)
print('First Found ' + name + ' at position ' + firstPos)
var lastPos = names.lastIndexOf(name)
print('last Found ' + name + ' at position ' + lastPos)

var namestr = names.join()
print(namestr)
namestr = names.toString()
print(namestr)

var cisDept = ['Tom', 'Jack', 'James', 'Allen', 'Sophia']
var dmpDept = ['Kevin', 'Judy', 'Diana', 'Jessie']
var itDiv = cisDept.concat(dmpDept)
print(itDiv)
itDiv = dmpDept.concat(cisDept)
print(itDiv)
