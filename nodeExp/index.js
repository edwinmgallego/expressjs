const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const read = fs.createReadStream("./static/index.html");
  read.pipe(res);
  console.log("hello world");
});

server.listen(3000);
console.log(`server on port ${3000}`);
