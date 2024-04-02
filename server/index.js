const express = require("express");
const dbConnect  = require("./configs/database");
const allRoutes = require("./routes/index");
const cors = require("cors");
require("dotenv").config();


const app = express();
const PORT = process.env.PORT;
dbConnect();

app.use(cors());
app.use(express.json());
app.use("/api/v1", allRoutes);


app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})