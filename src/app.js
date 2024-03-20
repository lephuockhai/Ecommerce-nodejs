//mission file app.js

// when want to use module, must be call function require.<module_name>
const express = require('express'); //add module express vao project
const morgan = require('morgan');
const compression = require("compresion");
const {default: helmet} = require('helmet'); // hidden nhung thong tin, ngan chan ben thu 3 truy cap va lay thong tin 
const app = express(); //initial a new app use express module

// init middleware

// format of morgan
{
    app.use(morgan("dev")); //dev
};

{
    app.use(helmet()); // la 1 middleware dung de bao mat app express
};

{
    app.use(compression()); // dung de nen cac file, thong tin o server de giam kich thuoc gui den client
};
//init db
require('./dbs/init.mongodb')
const { checkOverload } = require('./helpers/check.connect')
// checkOverload()

//init router
app.get('/', (req, res, next) => {
    const strCompress = "Hello my Fen"
    return res.status(200).json({
        message: "Welcome to my web server!",
        metadata: strCompress.repeat(10000)
    })
})

//handling error

module.exports = app;   
