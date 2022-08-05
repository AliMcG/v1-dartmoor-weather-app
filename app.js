import express from "express";
import logger from "morgan";

import "dotenv/config";
import weatherRouter from "./routes/index.js";
const PORT = process.env.PORT || 5010;
const app = express();

// Logger show helpful messages in the console.
app.use(logger("dev"));
// Lets through json data.
app.use(express.json());


/** This renders the front-end */
app.get("/", (req, res) => {
  res.render("index", { title: "Dartmoor" });
});
app.use("/api", weatherRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

export default app;
