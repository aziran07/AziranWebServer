const express=require('express');

const PORT=3733;

const app=express();

app.get('/',  (req, res) => {
    res.send("this is root");
})

app.listen(PORT, () => {
    console.log("Server Listening...");
})