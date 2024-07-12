const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // remove cors policy here

  //   res.writeHead(200, { "Content-Type": "text/html" });
  // res.write('<h1>Hello, world!</h1>');
  //   res.write(req.url);

  /*
    //* Split a query
    let q = url.parse(req.url, true).query;
    let txt = q.year + " " + q.month;
    res.end(txt);
    */

  //* Read a file
  fs.readFile(__dirname + "/demo.html", function (err, data) {
    // added cors header here
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Access-Control-Allow-Origin": "*",
    });
    res.write(data);
  });

  //   res.end("<h1>Hello, world!</h1>");
  res.end();
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
