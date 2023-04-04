

function arrayOfNumbers(vector){
    let result = [];

    for( index = 0; index < vector.length; index += 1){
        let numbers = vector[index];
        for(let index2 = 0; index2 < numbers.length; index2 += 1){
            let current = numbers[index2]
        if ((current % 2) === 0){
            result.push([current])
        }
        }
    }
    
    return result
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
console.log(arrayOfNumbers(vector))