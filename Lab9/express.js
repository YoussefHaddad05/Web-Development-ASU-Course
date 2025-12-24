const express = require("express");
const course = require("./model/modelcourse");
const router = require("./routes/courseroute");

const app = express();
app.use(express.json());

app.use("/course", router);

app.listen(3000, () => console.log("Server running on port 3000"));
