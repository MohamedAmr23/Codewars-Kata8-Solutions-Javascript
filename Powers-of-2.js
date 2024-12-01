function powersOfTwo(n) {
    return Array(n + 1).fill(0).map((n, i) => n + i).map((n) => Math.pow(2, n));
}
console.log(powersOfTwo(4));