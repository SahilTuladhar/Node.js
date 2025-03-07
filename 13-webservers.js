const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Welcome, To our home Page");
    res.end();
    return;
  } 
 else if (req.url == "/about") {
    res.write("This page provides a short history");
    res.end();
    return;
  }else
  res.write(
    `<h1>Opps!</h1>
    <p>Page Not Found</p>
    <a href ='/'>Back home</a>
             `
  );
  res.end();
});

server.listen(5000);
