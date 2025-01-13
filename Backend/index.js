require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

const Razorpay = require('razorpay');
const port = process.env.PORT || 3002;
const router = require('./route/routers');

require('./db/db');
//express related stuff
app.use(cors());
app.use(bodyParser.json());
app.use('/static', express.static('static'));
app.use(router);
app.use(express.urlencoded());
app.use(express.json());



app.listen(port, () => { 
    console.log("server running");
 });
