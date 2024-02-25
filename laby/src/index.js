import express from "express";
import path from "path";

const __dirName = path.resolve();
const htmlPath = path.join(__dirName, "html");

const app = express();
const PORT = process.env.LABY_PORT;

app.use("", express.static(path.join(htmlPath, "data")));
app.get("/", async (_req, res) => {
  res.sendFile(path.join(htmlPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening... ${PORT}`);
});
