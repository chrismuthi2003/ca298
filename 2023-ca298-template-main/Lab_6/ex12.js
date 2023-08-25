let x = 5;
let y = 2;

function add(x, y)
{
    return x + y;
}

function printer(myCallback)
{
    return myCallback;
}

(function ()
{
    console.log(printer(x + y));
})();
