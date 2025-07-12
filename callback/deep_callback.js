function sum(callback, x, y)
{
    result = x + y
    callback(result);        //pass result to callback

}

function display(value)                  //here display() is equivalent to callback() and result is equivalent to value
{
    console.log("the sum is : ", value)
    

}



sum(display, 5, 10)

/*
Here is the work flow

sum(display, 5, 10) 
  └──> calculates result (5 + 10 = 15)
        └──> calls callback(result) → display(15)
              └──> prints the result
*/