function noBoringZeros(n) {
    toString=String(n)
    while(toString.endsWith(0)){
        toString=toString.slice(0,toString.length-1)
    }
    return Number(toString)
  }
  console.log(noBoringZeros(12345000000))