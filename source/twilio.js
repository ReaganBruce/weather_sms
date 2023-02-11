import * as dotenv from 'dotenv'
dotenv.config()
import twilio from 'twilio'


//test module for twilio SMS
const accountSid = process.env.ACCOUNT_SID
const accountToken = process.env.AUTH_TOKEN

const fromNumber = process.env.TWILIO_FROM
const toNumber = process.env.TWILIO_TO

const clientInstance = twilio(accountSid, accountToken)


const createClient = async () => {
    try {
        await clientInstance.messages.create({
            body: "HELLO, LOL",
            from: fromNumber,
            to: toNumber
        })
        console.log(`SMS sent successfully to ${toNumber}`)
    } catch (err) {
        console.error(err)
    }
}

export { createClient }