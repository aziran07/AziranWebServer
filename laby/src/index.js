import express from "express";
import path from "path";

const __dirName = path.resolve();
const htmlPath = path.join(__dirName, "html");

const app = express();
const PORT = process.env.LABY_PORT;

app.use("/", express.static(htmlPath));

app.get("/Rna.html", (_req, res) => {
  res.sendFile(path.join(htmlPath, "dream.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening... ${PORT}`);
});

// error handler
app.use((_req, res, _nextFunc) => {
  res.status(404).send("404notfound");
});
