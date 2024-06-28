const express = require('express');
const app = express();

app.get('/health', (req, res)=>{
    res.send("server is healthy!!!")
})


const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}`)
})