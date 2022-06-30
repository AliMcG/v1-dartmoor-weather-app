import express from "express"
import { getDartmeetWeather, getPostbridgeWeather, getHavfordWeather } from "../models/index.js"

const weatherRouter = express.Router();

weatherRouter.get("/dartmeet", async (req, res) => {
  const result = await getDartmeetWeather();
  res.json({success: true, payload: result});
})

weatherRouter.get("/postbridge", async (req, res) => {
  const result = await getPostbridgeWeather();
  res.json({success: true, payload: result});
})

weatherRouter.get("/havford", async (req, res) => {
  const result = await getHavfordWeather();
  res.json({success: true, payload: result});
})

weatherRouter.get("/test", (req, res) => {
  res.sendStatus(200);
})


export default weatherRouter;