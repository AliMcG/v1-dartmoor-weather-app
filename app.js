import express from "express"
import logger from "morgan"
import "dotenv/config"
import weatherRouter from "./routes/index.js"
const PORT = "5010";
const app = express();
// const PORT = "5000";

// Logger show helpful messages in the console.
app.use(logger("dev"));
// Lets through json data.
app.use(express.json());
// Hosts the front-end html from the public folder.
app.use(express.static("public"));

app.use("/api", weatherRouter);

/** This renders the front-end */
// app.get("/", (req, res) => {
//   res.render("index", { title: "Dartmoor" });
// });
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

export default app;