const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const Parent = require('../models/Parent');
const { check, validationResult } = require('express-validator');
// const normalize = require('normalize-url');
// @route post api/user
// @desc Test route
//@acess Public

router.post(
  '/',
  [
    check('firstname', 'firstname is required')
      .not()
      .isEmpty(),
    check('lastname', 'lastname is required')
      .not()
      .isEmpty(),
    
    check('email', 'Please include a valid email').isEmail(),

    check('password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      firstname,
      lastname,
      email,
      RIB,
      password
    } = req.body;
    try {
      let Parent = await Parent.findOne({ email });
      if (Parent) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Useral ready exists' }] });
      }
    //   const avatar = gravatar.url(email, {
    //     s: '200',
    //     r: 'pg',
    //     d: 'mm'
    //   });
      Parent = new Parent({
        firstname,
        lastname,
        email,
        RIB,
        password
      });
      const salt = await bcrypt.genSalt(10);

      Parent.password = await bcrypt.hash(password, salt);
      await Parent.save();
      const payload = {
        Parent: {
          Parent: Parent.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
module.exports = router;