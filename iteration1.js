/*
function sum(numberOne,numberTwo){
    if(numberOne>numberTwo){
        console.log(numberOne)
    }
    if(numberTwo>numberOne){
        console.log(numberTwo)
    }
    
}
sum(4,5);
*/
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(array) {
    let longest=array[0];
    for( let i=0;i<array.length;i++){
        
    if(array[i].length>longest.length){
        longest=array[i];
        
    }
    
   } 
   return(longest)
}
console.log(findLongestWord(avengers));