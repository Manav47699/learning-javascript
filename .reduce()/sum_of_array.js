// .reduce() is used to reduce an array to give single element (e.g sum, max etc)
// it gives a new variable
// SYNTAX -> new_variable = array.reduce(callback)

/*
Here is the work flow
total: 1, current: 2
total: 3, current: 3
total: 6, current: 4
*/

let numbers = [1, 2, 3, 4, 5]

function sum_of_array(total, next_number)        // in first iteration, total takes the value of the 1st number in the array
{
    let result = total + next_number;
    return result;
}

sum = numbers.reduce(sum_of_array)

console.log(sum)