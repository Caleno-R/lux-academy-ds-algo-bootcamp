function simpleArraySum(ar) {
  var sum = 0

  for (var i in ar) {
    sum += ar[i]
  }
  return sum
}

//testing the function

let testArr1 = [1, 2, 3, 4, 5]
console.log(simpleArraySum(testArr1))

let testArr2 = [1.1, 2.2, 3.3, 4.4, 5.5]
console.log(simpleArraySum(testArr2))
