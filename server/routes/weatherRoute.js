const express = require("express");
const router = express.Router();
const weatherControllers = require("../controllers/weatherController");

router.get("/weather", weatherControllers.cityWeather);

module.exports = router;
