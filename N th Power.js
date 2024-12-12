function index(array, n){
    return array.length -1 < n ? -1 : Math.pow(array[n], n);
}
console.log(index([1,2,3,4], 2));