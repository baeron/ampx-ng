const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
mongoose.plugin(schema => { schema.options.usePushEach = true });
const config = require('./config/database');
// const nodemailer = require('nodemailer');

const app = express();
mongoose.Promise = global.Promise;

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+ config.database);
});

// On Error
mongoose.connection.on('error', (err) => { 
  console.log('Database error: ' + err);
});

const users = require('./routes/users');
const project = require('./routes/project');

//TODO: move to envirovment for prod and dev

// Port Number
const port = 3000;

// for deploy
// const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//
require('./config/passport')(passport);

app.use('/users', users);
app.use('/project', project);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
