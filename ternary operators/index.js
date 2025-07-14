// SYNTAX: condition ? codeifTRUE : codeifFalse

let number
number = window.prompt("Enter a number to check if it is odd or even")
number = Number(number)
number % 2 == 0 ? console.log("the number is even") : console.log("The number is odd");