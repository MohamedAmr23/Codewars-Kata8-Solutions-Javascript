// function updateLight(current) {
//     switch (current){
//         case 'green':
//           return 'yellow'
//         case 'yellow':
//           return 'red'
//         default :
//           return 'green'
//     }
  
//   }
//   you can also use if statement

function updateLight(current) {
       return current =='green' ? 'yellow' :current === 'yellow' ?'red':'green'
  
  }
  console.log(updateLight(''))