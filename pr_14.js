// Write a function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.
function createCounter()
{
    var counter = 0;
    return function()
    {
        counter++;
        console.log(counter);
    }
}
let x=createCounter();
x();
x();
x();
