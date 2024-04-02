const express = require("express");

const app = express();



app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})