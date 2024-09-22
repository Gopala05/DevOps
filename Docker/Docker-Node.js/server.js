var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello GK, Nice Meeeting You!, this server is running on Docker");
  })
  .listen(5000);
