import express from "express";
import path from "path";

const __dirName = path.resolve();
const htmlPath = path.join(__dirName, "html");

const app = express();
const PORT = process.env.LABY_PORT;

app.use("/", express.static(htmlPath));

app.listen(PORT, () => {
  console.log(`Server listening... ${PORT}`);
});
