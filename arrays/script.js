let names = ["Manav", "Himal", "mausam", "khitiz"]

console.log(names[3])   // this gives khitiz

names.push("kausal");   // adds kausal to last to the array
names.pop();            //pops the last element i.e kausal

console.log("Our hackathon team members are named below:")

for (let i = 0; i < names.length; i++)
{
    console.log(names[i]);
}
