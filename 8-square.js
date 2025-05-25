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
        for (let j = 0; j < size; j++)
        {
            process.stdout.write('x');
        }
        console.log();
    }
}
