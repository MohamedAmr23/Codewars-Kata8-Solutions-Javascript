function pipeFix(numbers) {
    let newArr = [];
    //   for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    //     newArr.push(i);
    //   }
    //   return newArr;
  
    let [start, end] = [Math.min(...numbers), Math.max(...numbers)];
  
    while (start <= end) {
      newArr.push(start);
      start++;
    }
    return newArr;
  }
  console.log(pipeFix([-1, 4]));