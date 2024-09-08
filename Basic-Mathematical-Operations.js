function basicOp(operation, value1, value2){
  switch (operation){
    case '+':
        return value1+value2
        break;
    case '-':
        return value1-value2
        break;
    case '*':
        return value1*value2
        break;
    default :
        return value1/value2
       

  }
  }
console.log(basicOp('/', 49, 7))  


// another solution
function basicOp(o, a, b){
    return eval(a+o+b)
}
console.log(basicOp('/', 49, 7))  





