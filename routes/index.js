import express from "express";
import {
  getDartmeetWeather,
  getPostbridgeWeather,
  getHavfordWeather,
  getChagfordWeather,
  getDowntonWeather,
  getSouthzealWeather,
} from "../models/index.js";

const weatherRouter = express.Router();

weatherRouter.get("/dartmeet", async (req, res) => {
  const result = await getDartmeetWeather();
  res.json({ success: true, payload: result });
});

weatherRouter.get("/postbridge", async (req, res) => {
  const result = await getPostbridgeWeather();
  res.json({ success: true, payload: result });
});

weatherRouter.get("/havford", async (req, res) => {
  const result = await getHavfordWeather();
  res.json({ success: true, payload: result });
});

weatherRouter.get("/downton", async (req, res) => {
  const result = await getDowntonWeather();
  res.json({ success: true, payload: result });
});

weatherRouter.get("/south-zeal", async (req, res) => {
  const result = await getSouthzealWeather();
  res.json({ success: true, payload: result });
});

weatherRouter.get("/chagford", async (req, res) => {
  const result = await getChagfordWeather();
  res.json({ success: true, payload: result });
});

export default weatherRouter;
