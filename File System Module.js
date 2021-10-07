const fs = require('fs');
//Create Directory 
fs.mkdir((__dirname,'Temp'),(err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Directory created successfully! ");
    }    
})
//Remove Directory
fs.rmdir((__dirname,'Temp'), (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Directory romoved successfully! ");
    }    
})
//create file and write into it
fs.writeFile("dcs.txt","welcome to dcs", function(err, result){
    if(err) {
        console.log(err);
    }
    else {
        console.log("File created successfully!");
    }
});
//read from the file
fs.readFile("dcs.txt","utf8",function(err, data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})

//Append data to file
fs.appendFile('dcs.txt','\nAppended data ...',function (err) {
    if(err){
        console.log(err);
    }
    else {
        console.log("Data appended...");
    }
})

//Update / Replace file with new data

fs.writeFile('dcs.txt',"Hello! Reshma here",'utf8',function (err){
    if(err){
        console.log(err);
    }
    else {
        console.log("File replace with new data");
    }
})

//Rename File

fs.rename('dcs.txt','MCA.txt', (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Renamed...");
    }
})

//Delete File
fs.unlink("MCA.txt", (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("File deleted");
    }

})





