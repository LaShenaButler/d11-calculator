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
        //eval() function should be avoided for security reasons in web applications.
        var y = eval(x); 

        // display y in the input/output box
        document.getElementById('output').value = y;
    }

    // add an event listener to the clear button
    document.getElementById('btnClear').addEventListener('click', clearScreen);

    // add an event listener to the solve button
    document.getElementById('btnSolve').addEventListener('click', 
        solve);


    // go to btn1, add a click event listener, to call the btnOne function
    document.getElementById('btn1').addEventListener('click',
        function btnOne()  { display('1');
        });

    // go to btn2, add a click event listerner, to call the btntwo function
    document.getElementById('btn2').addEventListener('click',
        function ()  { display('2');
        }
    );

    // go to btn3, add a click event listerner, to call the btnThree function
    document.getElementById('btn3').addEventListener('click',
        () => { display('3');
        } 
    );

    // go to btn4, add a click event listerner, to call the btnFour function
    document.getElementById('btn4').addEventListener('click', () => { display('4');});

    // go to btn5, make it variable btn5
    // go to btn5, add a click event listerner, to call the btnFive function
    var btn5 = document.getElementById('btn5');
    btn5.addEventListener('click', () => { display('5');});

    // go to btn6
    // go to btn6, add a click event listerner, to call the btnSix function
    var btn5 = document.getElementById('btn6');
    btn5.addEventListener('click', () => { display('6');});


    // go to btn7,
    // go to btn7, add a click event listerner, to call the btnSeven function
    var btn7 = document.getElementById('btn7');
    btn7.addEventListener('click', () => { display('7');});

    // go to btn8, add a click event listerner, to call the btnEight function
    var btn8 = document.getElementById('btn8');
    btn8.addEventListener('click', () => { display('8');});

    // go to btn9, add a click event listerner, to call the btnNine function
    var btn9 = document.getElementById('btn9');
    btn9.addEventListener('click', () => { display('9');});

    // go to btn0, add a click event listerner, to call the btnZero function
    var btn0 = document.getElementById('btn0');
    btn0.addEventListener('click', () => { display('0');});
