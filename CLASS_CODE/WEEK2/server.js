const http = require("http");
const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello from home");
  } else if (req.url === "/details") {
    res.end("Hello from details");
  } else {
    res.end("404 not found");
  }
});
app.listen(8000);
