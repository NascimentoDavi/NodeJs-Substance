# NodeJs-Substance

## Global Object
### The global object in Node.js itself, similar to the window object in a browser environment.
```javascript
global.myGlobalVar = "I am global!";
console.log(myGlobalVar); // Output: I am global!
```

## OS Module
### The os module in Node.js is a built-in module that provides operating system-related utility methods and properties.
```javascript
const os = require('os');

// Get the architecture of the CPU
console.log(`CPU Architecture: ${os.arch()}`);

// Get the platform of the operating system
console.log(`Platform: ${os.platform()}`);

// Get the operating system type
console.log(`OS Type: ${os.type()}`);

// Get the system uptime in seconds
console.log(`System Uptime: ${os.uptime()} seconds`);

// Get the free system memory in bytes
console.log(`Free Memory: ${os.freemem()} bytes`);

// Get the total system memory in bytes
console.log(`Total Memory: ${os.totalmem()} bytes`);

// Get the network interfaces
console.log('Network Interfaces:', os.networkInterfaces());

// Get the home directory of the current user
console.log(`Home Directory: ${os.homedir()}`);

// Get the temporary directory
console.log(`Temporary Directory: ${os.tmpdir()}`);

// Get the endianness of the CPU
console.log(`Endianness: ${os.endianness()}`);

// Get the CPU information
console.log('CPU Info:', os.cpus());

// Get the hostname of the operating system
console.log(`Hostname: ${os.hostname()}`);
```