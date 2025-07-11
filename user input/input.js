// In console 
let username1;

username1 = window.prompt("what is your name")
console.log(username1);




//declaring a function
// function greetuser()
// {
//     let username2 = document.getElementById("input_id").value;
//     document.getElementById("label_id").textContent = `Welcome ${username2}`;
// }


// using html page as well
let username2;

document.getElementById("button_id").onclick = function ()
{
    username2 = document.getElementById("input_id").value;
    document.getElementById("label_id").textContent = `Welcome ${username2}`;
    

}

