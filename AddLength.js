function addLength(str) {
    return str.split(' ').map((ele)=>ele + " " + ele.length )
}
console.log(addLength('apple ban'))