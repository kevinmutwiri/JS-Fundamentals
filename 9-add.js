const process = require('process');

const args = process.argv;

function add(a, b)
{
    return a + b;
}

if (isNaN(args[2]) || isNaN(args[3]))
{
    console.log("NaN");
}
else
{
    const a = parseInt(args[2]);
    const b = parseInt(args[3]);
    console.log(add(a, b))
}
