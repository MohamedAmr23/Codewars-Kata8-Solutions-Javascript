function stringy(size) {
    // let strResult = '';
    // for (let i =1 ; i<=size ; i++){
    //     if(i % 2 ==0){
    //         strResult += 0
    //     }else{
    //         strResult+=1
    //     }
    // }  
    // return strResult
    return Array.from({length:size}, (_,index)=> (index + 1) % 2 ==0?'0':'1').join('')
  }

  console.log(stringy(6))