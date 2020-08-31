// Code your solution here!

function printString(myString) {
    console.log(myString[0])
    if (myString.length > 1) {
    let substring = myString.substring(1, myString.length)
    printString(substring)
    } else {
        return true
    }
}

function reverseString(string) {
    if (string === '') {
        return ""
    } else {
        return reverseString(string.substr(1)) + string[0]
    }
}

function isPalindrome(string) {
    let startpoint = 0 
    let endpoint = string.length - 1 
    let compareIndexA = parseInt((endpoint - startpoint)/2)
    let compareIndexB = Math.round((endpoint - startpoint)/2)
    if (string[compareIndexA] === string[compareIndexB]) {
        let newString = string.substr(0, compareIndexA) + string.substr(compareIndexB + 1)
        if (newString === '') {
            return true
        } else {
        return isPalindrome(newString)
        }
    } else {
        return false
    }
}

function addUpTo(array, index) {
    if (index === 0) {
        return array[0]
    } else {
        let num1 = array.shift()
        let num2 = array.shift()
        array.unshift(num1 + num2)
        return addUpTo(array, index - 1)
    }
}

function maxOf(array) {
    if (array.length === 1) {
        return array[0]
    } else {
        if (array[0] < array[1]) {
            array.shift() 
        } else {
            array.splice(1, 1)
        }
        return maxOf(array)
    }
}

function includesNumber(array, number) {
    if (array[0] === number) {
        return true
    } else {
        array.shift() 
        if (array.length === 0) {
            return false
        } else {
            return includesNumber(array, number)
        }
    }
}