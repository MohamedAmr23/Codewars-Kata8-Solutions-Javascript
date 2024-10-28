// function shortcut (string) {
//     let stringToArray=string.split('')
//     let newArr=[]
//     for(let i=0;i<stringToArray.length;i++){
       
//         if(stringToArray[i] == 'e' || stringToArray[i] == 'a' ||stringToArray[i] == 'o' || stringToArray[i] == 'i'||stringToArray[i] == 'u'){
//             continue
//         }else{
//             newArr.push(stringToArray[i])
//         }
//     }
//     return newArr.join('')
//   }
//   console.log(shortcut('how are you today?'))
// another solution
function shortcut (string) {
    let stringToArray=string.split('')
    
    return string.replace(/[aeiou]/g,"")
  }
  console.log(shortcut('  aeweoiy ?'))