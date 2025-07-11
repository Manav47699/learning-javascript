let text = document.getElementById("age_id");         //now "text holds the place inside (age_id) section of our html documnet"
let mysubmit = document.getElementById("submit_id");   //mysubmit is a variable that is used to represent the button in this js file
let result = document.getElementById("result_id");     //just another variable that holds the place inside the result_id section of out HTML document
let age;


mysubmit.onclick =function()
{
    age = document.getElementById("age_id").value
    age = Number(age);

    if (age >= 18 && age <= 110)
    {
        
        result.textContent = "Hell yeah, welcome bro"
    }
    else if (age < 18 && age >=0)
    {
        result.textContent = "Hell no kid, go home"
    }
    else if (age == "")
    {
        result.textContent = "nigga say sumthing"
    }
    else 
    {
        result.textContent = "Hell nahh nigga"
    }


}