function well(x){
    let good =0
     x.map((item)=>item==='good'?good+=1:'')
    //  if (good == 2 || good ==1 ){
    //     return 'Publish!'
    //  }else if (good>=2){
    //     return 'I smell a series!'
    //  }else{
    //     return 'Fail!'
    //  }
     return good == 2 || good ==1 ? 'Publish!' : good>=2 ?'I smell a series!':'Fail!'
  }
  console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))