import express from "express"
import { getDartmeetWeather } from "../models/index.js"

const weatherRouter = express.Router();

weatherRouter.get("/dartmeet", async (req, res) => {
  const result = await getDartmeetWeather();
  res.json({success: true, payload: result});
})


export default weatherRouter;