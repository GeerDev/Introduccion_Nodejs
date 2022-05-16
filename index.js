let http = require("http");
const uc = require('upper-case');

console.log(uc);
console.log("Hola patata")

http.createServer((req, res) =>{
    res.writeHead(418, { "Content-Type": "text/html" });
    res.end(uc.upperCase("¡Hola German!"));
  })
  .listen(4001);

// const http = require("http");
// const fs = require('fs');

// http.createServer((req, res) => {
//     fs.readFile('./pages/test1.html', (err, data) => {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//     });
//   }).listen(4001);

// const url = require('url');
// const adr = 'http://localhost:8080/default.html?year=2017&month=february';
// const q = url.parse(adr, true);

// console.log(q.host); //'localhost:8080'
// console.log(q.pathname); //'/default.html'
// console.log(q.search); //'?year=2017&month=february'

// const qdata = q.query; //{ year: 2017, month: 'february' }
// console.log(qdata.month); //'february'

// const http = require("http");
// const url = require("url");
// const fs = require("fs");

// http.createServer((req, res) => {
//     const q = url.parse(req.url, true);
//     const filename = "./pages" + q.pathname + ".html";
//     console.log(filename)
//     fs.readFile(filename, (err, data) => {
//       try {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         return res.end();
//       } catch (error) {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         console.error(error);
//         return res.end("404 Not Found");
//       }
//     });
//   }).listen(4001);