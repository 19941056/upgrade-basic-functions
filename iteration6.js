const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(array){
      let newArray=[];
      for (let i = 0; i < array.length; i++) {
          if(!newArray.includes(array[i])){
              newArray.push(array[i]);
          }
          
      }
      console.log(newArray);
  }
  removeDuplicates(duplicates);
  