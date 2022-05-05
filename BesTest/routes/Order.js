const express = require('express');
var router = express.Router();



const stripe =require('stripe')("sk_test_51KsTWMGmgWtFO5XOFXCXZXTIswmhHCfRlqMkY40z69dS6w235pZbHyIatHWWTMz9BUDzETcMwGJ76FT2drdzNWtk00tAFT4NCu");

router.post("/", async (req, res) => {
    const total = req.body.amount;
    console.log("Payment Request recieved for this Dollar", total);
  
    const payment = await stripe.paymentIntents.create({
      amount: total*100,
      currency: "usd",
    });
  console.log(payment.client_secret)
    res.status(201).send({
      clientSecret: payment.client_secret,
    });
  });
module.exports = router;
