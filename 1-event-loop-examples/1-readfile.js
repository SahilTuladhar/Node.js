const {readFile} = require('node:fs')

console.log('Starting the task');

readFile('../content/first.txt' , 'utf8' , (err , results)=>{
    try{
        console.log(results);
        console.log("File Read successfully");


    }catch(err){
        throw err
    }
    
})

console.log("Starting another Task");


