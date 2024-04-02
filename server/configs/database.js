const mongoose = require("mongoose");
require("dotenv").config();

const db_url = process.env.DATABASE_URL;

const dbConnect = async()=>{
    mongoose.connect(db_url)
    .then(()=>{
        console.log("Connected to database");
    })
    .catch((err)=>{
        console.log("error in connecting database");
        console.log(err);
        process.exit(1);
    });
};

module.exports = dbConnect;