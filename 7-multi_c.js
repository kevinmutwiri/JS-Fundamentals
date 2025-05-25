const process = require('process');

const args = process.argv;

if (isNaN(args[2]))
{
    console.log("Missing number of occurrences");
}
else
{
    count = parseInt(args[2]);
    for (let i = 0; i < count; i++)
    {
        console.log("C is fun");
    }
}
