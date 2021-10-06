const mixedElements=[6,1,'Rayo',1,'vallecano','10','upgrade',8,'hub'];

function averageWord(array){
    let suma=0;
    for (let i = 0; i < array.length; i++) {
        if(typeof array[i]==='string'){
            suma+=array[i].length;
        }else{
            suma+=array[i];
        }
        
    }
    console.log(suma)
}
averageWord(mixedElements);


















/*
function averageWord(array){
    let sumNumb=0;
       
for (let i = 0;i < array.length;i++) {
    
   if(typeof array[i]==='string'){
    sumNumb+=array[i].length
   }else{
       sumNumb+=array[i];
   }
   
}
    console.log(sumNumb);
    
}
averageWord(mixedElements);

*/
