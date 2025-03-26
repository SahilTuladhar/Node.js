const http = require('http')

const server = http.createServer((req, res) => {
 if (req.url === '/'){
    res.end("Home Page")
    return;
 }
  
  else if (req.url ==='/about'){

    // Blocking Code

    for (let i = 0 ; i < 1000 ; i++){
        for (let j = 0 ; j < 1000 ; j ++){
            console.log(`${i} ${j}`);
            
        }
    }

    res.end("about the company")
    return;

    
  }

  else{
    res.end("Nothing Found here")
  }

  res.end()

})

server.listen(5000, () => {
    console.log("Listening to port 5000");
    
})