console.log(__dirname);
console.log(__filename)

setTimeout(() => {
    console.log('This runs after 2 seconds');
} , 2000)

setInterval(() => {
    console.log('Repeats after 1 sec');  
} , 1000)