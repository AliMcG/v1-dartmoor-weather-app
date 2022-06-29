import express from "express"
import { getDartmeet } from "../models/index.js"

const weatherRouter = express.Router();

weatherRouter.get("/dartmeet", async (req, res) => {
  const result = await getDartmeet();
  res.json({success: true, payload: result});
})


export default weatherRouter;