// requirements
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// configurations
const server = express();
const port = process.env.PORT || 3000;
server.use(cors());
server.use(express.json({ extended: false }));

// hanlding
server.use("/api", require("./routes").encryptRoute);
server.use("/api", require("./routes").decryptRoute);
server.get("/", (req, res) => {
  res.json({ test: "test" })
}); 

server.listen(port, () => console.log(`Server is running on port ${port}`));
