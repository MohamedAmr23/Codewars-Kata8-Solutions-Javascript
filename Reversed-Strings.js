function solution(str){
  let strToArr=str.split('')
   let stringReversed= strToArr.reverse()
  return stringReversed.join('')
}
console.log(solution('world'))
// another solution
function solution(str){
  return str.split('').reverse().join('')
}
console.log(solution('world'))

// another solution
function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
  }
  console.log(reverseString("hello")) ;