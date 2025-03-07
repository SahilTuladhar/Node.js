const path = require('path');

console.log('path info:', path);

console.log('Sperator:' , path.sep);

// Combinining paths or path segments

const filePath = path.join('/content' , 'subfolder' ,'text.txt')
console.log(filePath);

// obataining the base path segment

const base = path.basename(filePath)
console.log(`The base segment is: ${base}`);

// Resolving multiple paths or segments to get absolute path

const absolutePath = path.resolve(__dirname , 'content' ,'subfolder','test.txt')
console.log(absolutePath);

console.log(path.resolve('foo/bar' , '/tsx/tta')); // here if the absolute path is encountered first then the rest is ignmored






