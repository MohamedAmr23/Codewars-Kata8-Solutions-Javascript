function expressionMatter(a, b, c) {
    return Math.max(
        a + b + c,
        a * b * c,
        a * ( b + c ),
        c * ( a + b)
    );
}
console.log(expressionMatter(3, 5, 7))