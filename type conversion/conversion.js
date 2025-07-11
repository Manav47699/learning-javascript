let age1;
let age2

age1 = window.prompt("What is you age1?")  // user input will be in string
age2 = window.prompt("what is your age2");

// ⚡
console.log(`Your age after 2 years will be ${age1 += 1}`);
//This will give the following result -> "Your age after 2 years will be 201"


//✔
age2 = Number(age2)
console.log(`Your age after 2 years will be ${age2 + 2}`);
