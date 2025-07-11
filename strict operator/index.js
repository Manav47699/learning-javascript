//Strict  operators compare both the values and the datatype

const pi = 3.14;

if (pi == "3.14")
{
    console.log("value matches but no the data type")

}
else if (pi === 3.14)
{
    console.log("value and datatype both matches")

}