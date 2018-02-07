// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function steps(n) {
  for(let i = 1; i <= n; i++){
    let string = '';
    string += ('#'.repeat(i));
    string += (' '.repeat(n-i))
    console.log(string);
  }
}

module.exports = steps;

  // for(let row = 1; row <= n; row++){
  //   let stairs = '';
  //   for(let col = 1; col <= n; col++){
  //     if(col <= row){
  //       stairs += '#';
  //     }else{
  //       stairs += ' ';
  //     }
  //   }
  //   console.log(stairs);
  // }


  // for(let i = 1; i <= n; i++){
  //   let string = '';
  //   string += ('#'.repeat(i));
  //   string += (' '.repeat(n-i))
  //   console.log(string);
  // }


// Long, recursive solution:
// function steps(n, row = 0, stair = '') {
//   if(n === row) {
//     return;
//   }
  
//   if(n === stair.length) {
//     console.log(stair);
//     return steps(n, row +1);
//   }
  
//   if(stair.length <= row) {
//     stair += '#';
//   }else{
//     stair += ' ';
//   }
//   steps(n, row, stair);
// }