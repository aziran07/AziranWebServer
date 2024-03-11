import express, { Request, Response, NextFunction } from "express";

const app = express();
const PORT: string = process.env.LABY_PORT;

app.get("/", (_req: Request, res: Response, _nextFunc: NextFunction) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server listening... ${PORT}`);
});

// error handler
app.use((_req: Request, res: Response, _nextFunc: NextFunction) => {
  res.status(404).send("404notfound");
});
