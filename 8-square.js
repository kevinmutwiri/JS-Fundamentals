const process = require('process');

const args = process.argv;

if (isNaN(args[2]))
{
    console.log("Missing size");
}
else
{
    size = parseInt(args[2]);
    for (let i = 0; i < size; i++)
    {
        console.log("X".repeat(size));
    }
}
