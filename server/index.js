const express = require("express");
const dbConnect  = require("./configs/database");
const allRoutes = require("./routes/index");
const cors = require("cors");
require("dotenv").config();


const app = express();
const PORT = process.env.PORT;
dbConnect();


const corsOptions = {
    origin: ['https://paytmlike.vercel.app', 'http://localhost:4000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
};

app.use(cors(corsOptions));


app.use(express.json());
app.use("/api/v1", allRoutes);


app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})