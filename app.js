import express from "express"
import logger from "morgan"
import "dotenv/config"
import weatherRouter from "./routes/index.js"

const app = express();
const PORT = "3000";

// Logger show helpful messages in the console.
app.use(logger("dev"));
// Lets through json data.
app.use(express.json());
// Hosts the front-end html from the public folder.
app.use(express.static("public"));

app.use("/api", weatherRouter);

/** This renders the front-end */
app.get("/", (req, res) => {
  res.render("index", { title: "Dartmoor" });
});

// Listening on Localhost:3000
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
