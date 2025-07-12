// function expression has 2 main features/functions
// 1) it is a way to define functions as values or variables
// 2) it can be used to pass a whole function as a parameter.
// in the following example, "squares" is our variable and we are also passing a whole function() as a parameter



let numbers = [1, 2, 3, 4]

squares = numbers.map(function(number)     //here we are using a anonymous function
{
    result = Math.pow(number, 2)
    //console.log(result)
    return(result)
})

console.log(squares);

