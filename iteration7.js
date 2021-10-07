const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  
  function finderName(param,nombre){
      for (let i = 0; i < param.length; i++) {
          if(param[i]===nombre){
              return i
          }
          
      }
      return 'No hay resultado'
  }
  console.log(finderName(nameFinder, 'Marc'));
  
  
  
  
  
  /*
  function finderName(array,nombre){
      for(let i=0;i<array.lenght;i++){
          if(array[i]===nombre){
              return array[i]
          }
             }
          return 'No hay resultado'
  }
  console.log(finderName(nameFinder,'Marc'));
  */
 /*
  function finderName(param, name) {
    for (let index = 0; index < param.length; index++) {
        if (param[index] === name) {
            return index
        }
    }
    return 'No hay resultado';
}

console.log(finderName(nameFinder, 'Marc'));
*/