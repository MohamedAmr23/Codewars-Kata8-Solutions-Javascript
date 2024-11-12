function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((acc,curr)=>acc+curr) + arr2.reduce((acc,curr)=>acc+curr)
  }
  console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]))