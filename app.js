const http = require("http");

const server = http.createServer((req, res) => {
res.write("Welcome to My Cloud Dynamic Web Application 🚀");
res.end();
});

server.listen(8080);
