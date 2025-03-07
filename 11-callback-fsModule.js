const fs = require("node:fs");

console.log("Before starting the operation");

fs.readFile("./content/first.txt", "utf8", (err, results) => {
  if (err) {
    console.log(err);
  } else {
    const file1 = results;

    fs.readFile('./content/second.txt' , 'utf8' , (err , results)=>{
        
      if (err){
        throw err
      }
      else{
        const file2 = results

        fs.writeFile('./content/results-async.txt' , `Results:${file1} , ${file2}` , (err , results)=>{
          if (err){
          throw err
          }
          else{
            console.log("File written successfully");
          }
        })

      }
    })
  }
});

console.log("file read initiated by not waiting for completion");
