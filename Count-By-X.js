function countBy(x, n) {
    let z = [];
    for (let i=1;i<=n;i++){
        z.push(x * i)
    }
    return z;

  }
 console.log(countBy(2,5)) 


//  another solution
function countBy(x, n) {
   return Array.from(Array(n + 1).keys())
     .slice(1)
     .map((num) => num * x);

  

  }
 console.log(countBy(2,5)) 