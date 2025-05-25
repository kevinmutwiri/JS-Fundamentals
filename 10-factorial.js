const process = require('process');

let args = process.argv;

function factorial(n)
{
    if (n === 1 || n === 0 || n === "NaN")
    {
        return 1;
    }
    else
    {
        return n * factorial(n-1);
    }
}

if (isNaN(args[2]))
{
    args[2] = "NaN";
}
else
{
    args[2] = parseInt(args[2]);
}

console.log(factorial(args[2]));
