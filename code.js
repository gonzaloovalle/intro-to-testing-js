// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    if (typeof input == "string"){
        return "Hello, " + input + "!";
    } else if (input === true){
        return "Hello, World!";
    } else {
        return "Hello, World!";
    }
}

// isFive function
function isFive(input) {
    return input == 5;
}

// isEven function
function isEven(input) {
    return input % 2 === 0 && typeof input !== 'boolean';
}