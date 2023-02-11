import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'

//twilio instance
import { createClient } from './twilio.js'

const app = express()

app.use(express.json())

createClient()


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Application running on PORT: ${PORT}`);
})