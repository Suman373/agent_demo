const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Server live");
});

app.listen(6000,()=>console.log(`Server running at port 6000`));