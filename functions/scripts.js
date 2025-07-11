//there are many types of function is js. some of them are discussed below

//✔1 Named function/NOrmal functions
function greet_user1(username)
{
    console.log(`welcome back ${username}`)
}
greet_user1("Manav")

//✔2 Arrow function
const greet_user2 = (username) => {
    console.log(`Hello ${username}`)

}
greet_user2("Manav")


//✔ 3 Ananomoyus functions (A function without a name)
document.getElementById("button_id").onclick = function ()
{
    username2 = document.getElementById("input_id").value;
    document.getElementById("label_id").textContent = `Welcome ${username2}`;
}




