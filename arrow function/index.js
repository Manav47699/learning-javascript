//SYNTAX: (parameter) => {
//          some code
//               }

//it is used to write "function expressions" good for simple functions that is only used ones

//using fucntion expression
let hello = function ()
{
    console.log("hi")
}
hello();                 //here "hello()" repersents the "function()" from above


//using arrow function
let hi = (name) => {
    console.log(`HI ${name}`)
}
hi("manav");
