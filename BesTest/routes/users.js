const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const SecretCode = require("../models/SecretCode");
const nodemailer = require("nodemailer");

async function SendMail(user, code) {
  // Create a SMTP transporter object
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "BesTest2022@gmail.com",
      pass: "BT24042022",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Message object
  let message = {
    from: "BesTest2022@gmail.com",
    to: user.email,
    // Subject of the message
    subject: "Password reset",
    // plaintext body
    // text: msg,
    html: `<div>
            <p>Hello ${user.lastname}</p>\
             <br>
             <p> Here is your Secret Code to reset password : <span style="font-weight:500"> ${code} </span> </p>
             </div>`,
  };

  await transporter.sendMail(message, (error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully!");
    }
  });
  transporter.close();
}

router.post(
  "/signup",
  [
    check("firstname", "firstname is required").not().isEmpty(),
    check("lastname", "lastname is required").not().isEmpty(),
    check("typeuser", "type of user is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { firstname, lastname, typeuser, email, password } = req.body;

      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .send({ errors: [{ msg: "User already exists" }] });
      }
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });
      user = new User({
        firstname,
        lastname,
        email,
        avatar,
        typeuser,
        password,
      });
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);
      await user.save();
      const payload = {
        id: user.id,
      };

      // create a token using json webtoken
      const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "2h",
      });
      res.status(200).send({ user, token });
    } catch (err) {
      console.error(err.message);
      res.status(400).send({ errors: [{ msg: "Cannot Login", error: err }] });
    }
  }
);

router.post(
  "/signin",
  [
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { email, password } = req.body;

      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send({ errors: [{ msg: "Bad credentials" }] });
      }

      // Check password
      const result = await bcrypt.compare(password, user.password);

      if (!result) {
        res.status(400).send({ errors: [{ msg: "Bad credentials" }] });
        return;
      }

      // create a token using json webtoken
      const token = jwt.sign(
        {
          id: user._id,
        },
        process.env.SECRET_KEY,
        { expiresIn: "2h" }
      );
      res.status(200).send({ user, token });
    } catch (err) {
      console.error(err.message);
      res.status(400).send({ errors: [{ msg: "Cannot Login", error: err }] });
    }
  }
);

router.post("/resetPassword", async (req, res) => {
  try {
    // Get email from req.body
    const { email } = req.body;

    // Check user
    const finduser = await User.findOne({ email });
    if (!finduser) {
      return res.status(400).send({ msg: "Couldn't find account" });
    }

    // Generate Secret Code
    const code = Math.floor(100000 + Math.random() * 900000);

    // Save code in DB with user id
    const newcode = new SecretCode({ user: finduser, code });
    await newcode.save();
    // Send Email to user
    SendMail(finduser, code);
    res
      .status(200)
      .send({ msg: "Please check your Email to get the secret key" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "Cannot reset password", error });
  }
});

router.post("/CheckSecretCode", async (req, res) => {
  try {
    // Get secret code from req.body
    const { code } = req.body;
    // find secret code
    const findcode = await SecretCode.findOne({ code })
      .populate("user")
      .sort({ _id: -1 })
      .limit(1);
    if (!findcode) {
      return res.status(400).send({ msg: "Invalid code !" });
    }
    // send ok
    res.status(200).send({ msg: "Secret Key is valid", findcode });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "Cannot Check Secret Code", error });
  }
});

router.put("/resetNewPassword/:id", async (req, res) => {
  try {
    // Get new and confirm password from req.body
    const { newpass, confirmpass } = req.body;
    // Get user id from req.params
    const { id } = req.params;
    // Check if 2 password is equal
    if (newpass !== confirmpass) {
      return res.status(400).send({ msg: "Check passwords" });
    }
    // replace password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(newpass, salt);
    await User.updateOne({ _id: id }, { $set: { password: hashedpassword } });

    res.status(200).send({ msg: "Password updated successfully!"});
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "Cannot set new password", error });
  }
});

module.exports = router;
