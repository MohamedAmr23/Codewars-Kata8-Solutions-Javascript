function sumMul(n, m) {
  if (m <= 0) {
    return "INVALID";
  } else {
    let newArr = [];
    for (let i = n; i < m; i += n) {
      newArr.push(i);
    }
    return newArr.reduce((acc, cur) => acc + cur);
  }
}
console.log(sumMul(4, -7));
