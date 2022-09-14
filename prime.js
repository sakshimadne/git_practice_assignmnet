// console.log('help me to  wright prime number')

let count = 0
let num = 13
for (let i = 1; i <= 15; i++) {
  if (num % i == 0) {
    count++
  }
}
if (count == 2) {
  console.log('prime')
} else {
  console.log('not a prime')
}
