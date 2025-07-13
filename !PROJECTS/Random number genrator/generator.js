let random_num = Math.random()

//random number is genrated, multiplied by 100, added 1 to make it 0-99 to 1-100 and finally floor value is used to remove decimals
let random = Math.floor(Math.random() * 100 + 1)

document.getElementById("h1_id").textContent = random_num;

document.getElementById("h2_id").textContent = random;
