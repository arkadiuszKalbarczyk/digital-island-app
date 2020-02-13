const express = require("express");
const http = require("http");
const path = require("path");
const publicPath = path.join(__dirname, "..", "build");
const port = process.env.PORT || "8080";
const app = express();

app.use(express.static(publicPath));
app.set("port", port);

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
