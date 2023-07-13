// global variable
let globalVariable = 'Welcome';

function outer() {
    alert(globalVariable); // alerting the global variable

    let course = 'Holberton'; // local variable in outer function

    function inner() {
        alert(`${globalVariable} ${course}`); // access to both global and outer's local variable

        let exclamation = '!'; // local variable in inner function

        function inception() {
            alert(`${globalVariable} ${course}${exclamation}`); // access to variables from all scopes
        }

        inception();
    }

    inner();
}

// Call outer function
outer();
