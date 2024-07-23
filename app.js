    function display(param) {
        // go to the input/output box and add the parameter to it
        // without clearing the existing value in it by using += oppose to =
        document.getElementById('output').value += param;
    }

    function clearScreen() {
        document.getElementById('output').value = "";
    }

    function solve() {
        // grab the expression/value in the input box and add it to variable x
        var x = document.getElementById('output').value;       

        // solve the expression and assign it variable y 
        var y = eval(x); //eval() function should be avoided for security reasons in web applications.
        // display y in the input/output box
        document.getElementById('output').value = y;
    }

    // add an event listener to the clear button
    document.getElementById('btnClear').addEventListener('click', clearScreen);

    // add an event listener to the solve button
    document.getElementById('btnSolve').addEventListener('click', solve);
