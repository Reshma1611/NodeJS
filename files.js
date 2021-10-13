const readFile = require("readline");
const rl = readlink.createInterface({
    input: process.stdin,
    output: process.stdout,

});
const fs = require("fs");
rl.question("Please enter your name: ", function (answer) {
    console.log("Hello " + answer);
    rl.console();
});
const { rawListeners } = require("process");
const { readlink } = require("fs");

var start = () => {
    
}

var repeat = () => {
    instructions();
    start();
};

console.log("Welcome to File System! ");;
repeat();