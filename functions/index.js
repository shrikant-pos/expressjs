// import * as express from "express";
// import * as admin from "firebase-admin";
// import * as functions from "firebase-functions";

var express    = require('express');
var admin    = require('firebase-admin');
var functions    = require('firebase-functions');
var index_route = require('./app/core/routes/index.route');

admin.initializeApp(functions.config().firebase);

const app = express();
// https://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable("x-powered-by");

app.get("/useres/:uid", async function getUser(req, res) {
   // Guess what, uid will NEVER be null in this context because of the Express router.
   const uid = req.params.uid;
   res.status(200).send(`You requested user with UID = ${uid}`);
});

app.use('/api', index_route);

// This line is important. What we are doing here is exporting ONE function with the name
// `api` which will always route
exports.api = functions.https.onRequest(app);