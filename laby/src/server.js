import express from 'express';

const PORT=process.env.LABY_PORT;

const app=express();

app.get('/',  (req, res) => {
    res.send("this is root");
})

app.listen(PORT, () => {
    console.log("Server Listening...");
})