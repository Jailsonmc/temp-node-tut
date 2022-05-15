
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// console.log(__dirname);
// console.log(__filename);

// setInterval(() => {
//     console.log('Hello World');
// }, 1000);

const path = require('path');
console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);