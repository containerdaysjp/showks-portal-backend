const path = require("path"),
  app = require("express")(),
  http = require("http").Server(app),
  io = require("socket.io")(http),
  port = process.env.PORT || 8080;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

http.listen(port, () => {
  console.log("listening on port", port);
});

io.on("connection", socket => {
  console.log("Connected!!!");
});
