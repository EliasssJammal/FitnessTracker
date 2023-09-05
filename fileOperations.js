const fs = require('fs');

//read a file
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:', data);
});