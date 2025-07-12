//call back is used to pass a function inside another function.
// it makes sure that the functions are executed in the order we want
// eg: if our greet() is very large, bye() will be executed in the console before greet()
// this mean we will see "bye" before "welcome". We will use call back to prevent this

function greet(callback)       // pass an parameter as we have called it with a argumnet below. we can write anything in place of "callback"
{
    console.log("welcome")
    callback();                  //call the function using parenthesis
}

function bye()
{
    console.log("bye")
}

greet(bye)                     //call the 1st function my passing the second function as its argumnet