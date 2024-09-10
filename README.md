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

## File System
### The fs module in Node.js is a built-in module that provides an API for interacting with the file system. It allows you to read, write, and manipulate files and directories on the system where the Node.js application is running.

```javascript
const fs = require('fs');

// Reading file synchronously
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);

// Reading file asynchronously - does not   prevents other code below for running.
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

  console.log("it comes before the asynchronously code above");

// Writing files
fs.writeFile('./blog1.txt','Hello World', () => {
    console.log("File was written");
});

// Creating directories - asynchronously
fs.mkdir('new-directory', { recursive: true }, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log('Directory created succesfully');
})

// Creating directories - synchronously
try {
    fs.mkdirSync('new-directory', { recursive: true });
    console.log('Directory created successfully!');
  } catch (err) {
    console.error(err);
  }

//
```

## Server and Client
### In order to create a server in NodeJS, we use the built-in module http.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method); // Get the URL and the method used in the request
    res.setHeader('Content-Type', 'text/plain');
    // res.setHeader('Content-Type', 'text/html')
    // res.write('<p>Hello, World!</p>');
    res.write("Hello, World");
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})
```

## However, it is not good to keep the HTML code inside the js file. Becase of that, we are gonna create a separated html file.

  