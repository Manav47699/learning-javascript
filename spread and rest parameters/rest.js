// rest parameter bundles seperate elments into an array

function team(...names)       //This function can take any number of arguments    
{
    console.log(names)         //// logs as an array: [ 'Manav', 'himal', 'mausam' ]
    console.log(...names)      //// logs individual items: Manav himal mausam
}

let name1 = "Manav"
let name2 = "himal"
let name3 = "mausam"

team(name1, name2, name3)