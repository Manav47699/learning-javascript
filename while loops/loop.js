//making a logging in feature
let username;
let password;
let access = false;

while (true) {
    username = window.prompt("enter the username");
    password = window.prompt("Enter the password");
    if (username === "Manav" && password === "1")
    {
        access = true;
        console.log("congrats, now you have the acess")
        break;
    }
}