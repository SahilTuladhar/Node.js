const {createServer} = require('node:http')

const server = createServer((req , res) => {
if (req.url == '/'){
    console.log("Req received");
    res.write("Welcome to the Home page");
    res.end();
    return;
}
})

server.listen(5000, ()=>{
console.log('Listening to port 5000....');
})

