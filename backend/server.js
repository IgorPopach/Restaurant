const mongoose = require("mongoose");
const express = require("express");
const path = require('path');
const passport = require('passport');
const bodyParser = require("body-parser");
const logger = require("morgan");
const session = require('express-session');
const cookieParser = require('cookie-parser')
const TableRouter = require('./routes/table');
const DishesRouter = require('./routes/dishes');
// const AuthRouter = require('./routes/auth');

const API_PORT = 3001;
const app = express();

const users = require('./routes/user'); 

const dbRoute = require('./constants/db');

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());

app.use(logger("dev"));

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
require('./passport')(passport);

app.use(passport.session());
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use(express.static('./../client/build'));

app.use('/api/users', users);
app.use('/api/Table', TableRouter);
// app.use('/api/auth', AuthRouter);
app.use('/api/Dishes', DishesRouter);

app.get('*', (req, res) => res.sendFile(path.join(__dirname + './../client/build/index.html')));

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));