import express from "express";

//File Imports
import { createTwilioClient } from "./instances/twilio.js";
import { getLocalWeather } from "./instances/weatherApi.js";

const app = express();
app.use(express.json());

createTwilioClient(); //Twilio Instance
getLocalWeather(); //weatherAPI Instance

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Application running on PORT: ${PORT}`);
});
