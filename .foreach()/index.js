// SYNTAX -> array.forEach(callback)
// it does NOT give a new array
// forEach() is used to iterate/loop over the elements of an array and apply a specified function (callback) to each element


console.log("working!!")
let numbers = [1, 2, 3, 4]



function square(number, i, array)
{
    array[i] = Math.pow(number, 2)        // eg: numbers[3] = pow(4,2)
}

numbers.forEach(square);        //calls square() multiple times i.e 1 time for each number in numbers[]

function display(number)
{
    console.log(number)
}

numbers.forEach(display);      //calls display() multiple times i.e 1 time for each number in numbers[]

//OUTPUT in console: working   1     4      9      16