import express from "express";

const app = express();
const PORT = process.env.LABY_PORT;

app.get("/", (_req, res, _nextFunc) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server listening... ${PORT}`);
});

// error handler
app.use((_req, res, _nextFunc) => {
  res.status(404).send("404notfound");
});
