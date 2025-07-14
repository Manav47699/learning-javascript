// same as dictonary in python

let age = {
    "Manav": 19,
    "mausam": 20,

}

let info = {
    name: "Manav",
    age: 19,
    marks: 3.57,
    target_marks: 3.8,
// we can also make a fucntion inside the object i.e the method() of that object
    greet: () => console.log("HI my nanme is Manav.NIce to meet you")
}



// if the key is in " ", call with bracket
console.log(age["Manav"])

//if the key is normally written, call with dot
console.log(info.name)
console.log(info.marks)


//called the method "greet()" of an object 'info'.
info.greet();