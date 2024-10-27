// function noBoringZeros(n) {
//     while(n % 10 ==0 && n!=0){
//          n/=10
//     }
//     return n
//   }
//   console.log(noBoringZeros(12345000000))


function noBoringZeros(n) {
   return +`${n}`.replace(/0*$/,"")
  }
  console.log(noBoringZeros(12345000000))