// .map() accepts a callback and applies that function to each element of an array, then return a new array
// it give a new array

//SYNTAX-> new_array = array.map(callback)

let numbers = [1, 2, 3, 4]

let squares = numbers.map(square)

function square(number)
{
    let result = Math.pow(number, 2)
    return result;
}

console.log(squares)


