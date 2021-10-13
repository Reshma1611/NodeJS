const fs = require("os");
console.log("Platform: " + fs.platform());
console.log("Architecture: " + fs.arch());
console.log("Free memory: " + fs.freemem());
console.log("Total memory: " + fs.totalmem());
console.log("User info: " + fs.userInfo());