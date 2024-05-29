const fs = require('fs');
const app = require('./app');


console.log(app.x);
console.log(app.y);
console.log(app.add(3, 7));

fs.writeFileSync('para.txt', 'this is a paragraph of some content lorem 25 of world');
console.log(__dirname);             //C:\Users\Shiva Gupta\OneDrive\Desktop\nodeJS\01_first
console.log(__filename);            //C:\Users\Shiva Gupta\OneDrive\Desktop\nodeJS\01_first\index.js