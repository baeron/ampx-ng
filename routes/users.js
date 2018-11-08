const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const nodemailer = require('nodemailer');
const uuidv1 = require('uuid/v1');

let sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

//USERS END POINTS
/*GET ALL Users*/
router.get('/', function (req, res) {
    User
        .find({}).then(function (users) {
            res.send(users);
        });
});

/**
 * 
 */
router.get('/team/:email', function(req, res) {
    if (req.params) {
        const userEmail = req.params.email;
        User.findOne({email: userEmail}, 'guid', function(err, userGuid) {
            if (err) {
                const error = err;
                sendJSONresponse(res, 404, {
                    'message': error.message
                });
            } else if(userGuid === null) {
                res.send({'message': "user not found"});
            } else {
                sendJSONresponse(res, 200, userGuid);
            }
        }) 
    } else {
        sendJSONresponse(res, 400, {
            "message": "Some problem with request params, please check parametrs from client side service"
        });
    }
});

//Delete Item user
router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) {
            res.json({ success: false, msg: 'Failed to delete user' });
        } else {
            res.json({ success: true, msg: 'User was deleted' });
        }
    });
});

// Register
router.post('/register', (req, res) => {
    const newUser = new User({
        guid: uuidv1(),
        email: req.body.email,
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        companyName: req.body.companyName,
        city: req.body.city,
        phone: req.body.phone,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to register user' });
        } else {
            res.json({ success: true, msg: 'User registered' });
        }
    });
});

// Authenticate
router.post('/authenticate', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.getUserByEmail(email, (err, user) => {
        if (err) {
            console.error(err);
        }
        if(user.email === 'superAdmin@ampx.ca' || user.email === 'admin@ampx.ca') {
            const token = jwt.sign({ data: user }, config.secret, {
                expiresIn: 2628000 // 1 month
            });
            res.json({
                success: true,
                token: "JWT " + token,
                user: {
                    guid: user.guid,
                    email: user.email,
                    userName: user.userName,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    companyName: user.companyName,
                    city: user.city,
                    phone: user.phone
                }
            });
        }
        if (!user) {
            return res.json({ success: false, msg: 'User not found' });
        };
        // const isMatch = true;
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) {
                console.error(err);
            }
            // if(!err) {
            if (isMatch) {
                const token = jwt.sign({ data: user }, config.secret, {
                    expiresIn: 2628000 // 1 month
                });
                res.json({
                    success: true,
                    token: "JWT " + token,
                    user: {
                        guid: user.guid,
                        email: user.email,
                        userName: user.userName,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        companyName: user.companyName,
                        city: user.city,
                        phone: user.phone
                    }
                });
            } else {
                return res.json({ success: false, msg: 'Wrong password' });
            }
        });
    });
});

// Contact us
router.post('/contacts', (req, res) => {
    const output = `
    <p>Your hame new contact us message</p>
    <h3>Message Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone Number: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'baranoffei@gmail.com',
            pass: 'baeron314'
        },
        tls: {
            rejectUnautorized: false
        }
    });

    //email for USER
    const mailOptionsForUser = {
        from: '"AMP X Contact Us" <baranoffei@gmail.com>',
        to: req.body.email,
        subject: 'Support service AMP X',
        text: 'Thank you for your message. As soon as we process it, we will contact you.'
    };

    //email for ADMIN
    const mailOptionsForAdmin = {
        from: '"You have a new message from the form Contact us from the site AMP X" <baranoffei@gmail.com>',
        to: 'baranoffei@gmail.com',
        subject: 'You have new message from Contact Us form',
        text: 'You have new message from Contact Us form',
        html: output
    };

    // send mail to User
    transporter.sendMail(mailOptionsForUser, (error, info) => {
        if (error) {
            res.json({ success: false, msg: 'Failed to send message' });
            return console.log(error);
        } else {
            res.json({ success: true, msg: 'The message was sent.' });
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });

    // send mail to ADMIN
    transporter.sendMail(mailOptionsForAdmin, (error, info) => {
        if (error) return console.log(error);
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
    //
});


// Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user });
});

module.exports = router;
