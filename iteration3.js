const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(array){
    let suma=0;
    for(let i=0;i<array.length;i++){
        //console.log(array[i])
       suma+=array[i];
    }

    console.log(suma)
}
sumAll(numbers);