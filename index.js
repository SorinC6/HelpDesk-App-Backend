require("dotenv").config(); //for loading from .env file

const server = require("./api/server");

server.get("/", (req, res) => {
  res.send("<h1>Help Desk Web App</h1>");
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n*** Server running on http://localhost:${port}  ***\n`);
});
