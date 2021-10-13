const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const fs = require("fs");
var filename = "";
var content = "";

var createFile = () => {
    fs.writeFile(filename,content, function(err, result){
        if(err) {
            console.log(err);
        }
        else {
            console.log("File created successfully!");
        }
        repeat();
    });
    
};

var createFileWizard = () => {
    console.log("\nWelcom to the file creation wizard");
    rl.question("Name of the file: ", (ans) => {
        filename = ans + ".txt";
        rl.question("\nContent of the file: ", (ans) => {
            content = ans;
            createFile();
        });
    });
    repeat();
};
var readFile = () => {
    fs.readFile("dcs.txt","utf8",function(err, data){
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
        }
    })
    
}; 
var readFile = () => {
    54.55
};
var readFileWizard = () => {
    console.log("\nWelcom to the file creation wizard");
    rl.question("Name of the file: ", (ans) => {
        filename = ans + ".txt";
        readFile();
    });
    repeat();
};

var appenToFileWizard = () => {
    console.log("append");
    repeat();
}
var renameFileWizard = () => {
    console.log("rename");
    repeat();
}

var deleteFileWizard = () => {
    console.log("delete");
    repeat();
}

var instructions = () => {
    console.log("\nEnter 0 to exit");
    console.log("\nEnter 1 to create a new text file");
    console.log("\nEnter 2 to read the content of a file");
    console.log("\nEnter 3 to append to an existing file");
    console.log("\nEnter 4 to rename a file");
    console.log("\nEnter 5 to delete a file");
}
var start = () => {    //rl.question("Please enter your name ", answer => {
    rl.question("Please enter your Choice ", function(answer){
        if(answer === "0"){
            rl.close();
        }
        else if(answer === "1"){
            createFileWizard();
        }
        else if(answer === "2"){
            readFileWizard();
        }
        else if(answer === "3"){
            appenToFileWizard();
        }
        else if(answer === "4"){
            renameFileWizard();
        }
        else if(answer === "5"){
            deleteFileWizard();
        }
        else {
            console.log("Wrong choice. Please try again ");
            start();
        }
    });
}
var repeat = () => {
    instructions();
    start();
}
console.log("Welcom to the file system!");
repeat();