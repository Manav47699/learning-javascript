// .filter() creates a new array by filtering out elements
// it gives a new array
//SYNTAX -> new_array = array.filter(callback)


let numbers = [0, 1, 2, 3, 4]


/*
This is also ok but .filter() expect that we will return a boolen value i.e an expression directly
function iseven(number)
{
    if (number % 2 == 0)
    {
        return number
    }
}
function isodd(number)
{
    if (number % 2 != 0)
    {
        return number
    }
}
*/


function iseven(number)
{
    return number % 2 == 0;              //this return a boleen value that is either TRUE or FALSE
}
function isodd(number)
{
    return number % 2 != 0;             //this return a boolen value i.e either TRUE or FALSE
}

let even_numbers = numbers.filter(iseven)
let odd_numbers = numbers.filter(isodd)

console.log(even_numbers)
console.log(odd_numbers)