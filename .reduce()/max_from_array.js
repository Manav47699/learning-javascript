// we can use Math.max(numbers), but for the sake of learning I guess😁

let numbers = [1, 2, 3, 4, 5]

function max_from_array(total, next_number)
{
    if (total < next_number)
    {
        total = next_number
        return total
    }
    else
    {
        return total
    }
}

max = numbers.reduce(max_from_array)

console.log(max)
