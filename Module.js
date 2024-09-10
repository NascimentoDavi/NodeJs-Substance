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