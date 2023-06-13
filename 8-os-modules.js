const os = require("os")

//info about currenent user
const user = os.userInfo()
console.log(user);

//method returns the system uptime in seconds

console.log(`The System Uptiome is ${os.uptime} seconds`);

//methods returns the opersting system type

console.log(`This is a ${os.type()} sytem.`);

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs);

const { log } = require("console")
const os = require("os")

// os version
// console.log(os.version());

//some random sytem property
// console.log(os.arch());

//another random stuff
// console.log(os.availableParallelism());

//system properties
// console.log(os.cpus());

console.log(os.loadavg());