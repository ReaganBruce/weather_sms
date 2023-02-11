import twilio from "twilio";
import { twilioEnv } from "../env.js";

const clientInstance = twilio(twilioEnv.accountSid, twilioEnv.accountToken);

const createTwilioClient = async () => {
  try {
    await clientInstance.messages.create({
      body: "Just testing, bro.",
      from: twilioEnv.fromNumber,
      to: twilioEnv.toNumber,
    });
    console.log(`SMS sent successfully to ${twilioEnv.toNumber}`);
  } catch (err) {
    console.error(err);
  }
};

export { createTwilioClient };
