const readline = require("readline");

var fileName = "";
var content = "";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const fs = require("fs");
const { RSA_X931_PADDING } = require("constants");
const { off } = require("process");
//rl.question("Please enter your name", function(answer){
var instruction = () => {
    console.log("\nEnter 0 to Exit");
    console.log("\nEnter 1 to create a new text file");
    console.log("\nEnter 2 to read the content of the file");
    console.log("\nEnter 3 to append to an existing file");
    console.log("\nEnter 4 to to rename a file");
    console.log("\nEnter 5 to to delete a file");
    start();
}
var createFileWizard = () => {
    console.log("\nWelcome to the file creation wizard\n");
    //It is async function
    rl.question("Name of the file: ", (answer) => {
        fileName = answer + ".txt";
        rl.question("Content of the file: ", (answer) => {
            content = answer;
            createFile();
        });
    });
    
    repeat();
}
var createFile = () => {
    fs.writeFile(fileName,content, (err) => {
        if(err){
            console.log(err);
        }
        else {
            console.log("\nFile save successfully");
        }
        repeat();
    });
};
var readFileWizard = () => {

    rl.question("Name of the file to read: ", (ans) => {
        fileName = ans + ".txt";
        readFile();
    });
    
    repeat();
}
var readFile = () => {
    fs.readFile(fileName,"utf8",function(err, data){
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
        }
    })
    repeat();
}
var start = () => {
    rl.question("Please enter your Choice: ", (answer) => {    
        if(answer === "0")
        {
            rl.close();
        }
        else if(answer === "1"){
            createFileWizard();
        } else if(answer === "2")
        {
            readFileWizard();
        }else if(answer === "3")
        {
            appendToFieWizard();
        }else if(answer === "4")
        {
            renameFileWizard();
        }else if(answer === "5")
        {
            deleteFileWizard();

        }
        else{
            console.log("Wrong choice");
            start();
        }
    });
}

var repeat = () => {
    instruction();
}
console.log("Welcome to file system");
repeat();