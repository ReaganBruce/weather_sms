import * as dotenv from 'dotenv'
dotenv.config()

const twilioEnv = {
    accountSid: process.env.ACCOUNT_SID,
    accountToken: process.env.AUTH_TOKEN,
    fromNumber: process.env.TWILIO_FROM,
    toNumber: process.env.TWILIO_TO
}

const weatherEnv = {
    weatherApiKey: process.env.WEATHER_API_KEY
}

export {
    twilioEnv,
    weatherEnv
}