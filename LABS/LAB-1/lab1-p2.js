const http = require("http");
const fs = require("fs");
const path = require("path");

const app = http.createServer((req, res) => {
  if (req.url === "/homepage") {
    let webpage = fs.readFileSync("/homepage.html");
    res.end(webpage);
  } else if (req.url === "/about") {
    res.end("ABOUT");
  } else if (req.url === "/contact_us") {
    res.end("CONTACT US");
  } else if (req.url === "/login") {
    res.end("LOGIN");
  } else if (req.url === "/fetch_data") {
    res.end("FETCH DATA");
  } else {
    res.end("404 NOT FOUND!");
  }
});

let port = 8000;

app.listen(port, () => {
  console.log(`https:localhost:${port}`);
});
