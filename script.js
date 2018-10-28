const fs = require('fs');

const text = fs.readFileSync('temp.txt', 'utf-8');
console.log(text);
