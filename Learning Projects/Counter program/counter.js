let counter = 0;
document.getElementById("increase_id").onclick = function()
{
    counter += 1;
    document.getElementById("h1_id").textContent = counter;

}

document.getElementById("decrease_id").onclick = function()
{
    counter -= 1;
    document.getElementById("h1_id").textContent = counter;

}

document.getElementById("reset_id").onclick = function()
{
    counter = 0;
    document.getElementById("h1_id").textContent = counter;

}





// We can also be donw with the help of if/else in the following way(by chat gpt):
/*
let counter = 0;

// Attach the same function to all 3 buttons
document.getElementById("increase_id").onclick = handleClick;
document.getElementById("decrease_id").onclick = handleClick;
document.getElementById("reset_id").onclick = handleClick;

function handleClick(event) {
    const clickedId = event.target.id; // Get which button was clicked

    if (clickedId === "increase_id") {
        counter += 1;
    } else if (clickedId === "decrease_id") {
        counter -= 1;
    } else if (clickedId === "reset_id") {
        counter = 0;
    }

    // Update the display
    document.getElementById("h1_id").textContent = counter;
}
*/