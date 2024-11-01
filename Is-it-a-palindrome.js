function isPalindrome(x) {
    // element reverse
    let elementReverse=x.split('').reverse().join('').toLowerCase()
    if(x.toLowerCase() == elementReverse){
        return true
    }else{
        return false
    }
  }

  console.log(isPalindrome("madam"))