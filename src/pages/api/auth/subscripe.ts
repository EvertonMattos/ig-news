import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { stripe } from '../../../service/stripe';

export default async (req: NextApiRequest, resp: NextApiResponse) => {
  if (req.method === "POST") {
    const session = await getSession({req})
    
    const stripeCustom = await stripe.customers.create({
      email:session.user.email,
    })

    const   stripeCkeckoutSession = await stripe.checkout.sessions.create({
      customer:stripeCustom.id,
      payment_method_types: ["card"],
      billing_address_collection: "required",
      line_items: [
        {
          price: "price_1L2Io8IWOhKMk6rlUOv43TF7",
          quantity: 1,
        },
      ],
      mode: "subscription",
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });
    return resp.status(200).json({sessionId:stripeCkeckoutSession.id})
  } else {
    resp.setHeader("Allow", "POST");
    resp.status(405).end("Method not allowed");
  }
};
