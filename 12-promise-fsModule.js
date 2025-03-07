// async function fetchData() {
//   try{
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve("Data fetched")
//         },5000);
//       });

//       let result = await promise; 
//       console.log(result);
      
//   }catch(error){
//     console.log(error);
//   }
// }

// fetchData();


const { writeFile , readFile} = require('node:fs/promises')

async function fileHandling(path1 , path2){
  
    try{
        const file1 = await readFile(path1,'utf8')
        const file2 = await readFile(path2 , 'utf8')

        writeFile('./content/results-promise' , `Result: ${file1} , ${file2}`)
    }catch(err){
        throw err
    }
}

fileHandling('./content/first.txt' , './content/second.txt')
