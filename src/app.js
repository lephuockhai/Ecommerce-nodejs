//mission file app.js

// when want to use module, must be call function require.<module_name>

//declara dotenv to use .env
require('dotenv').config()
const express = require('express') //add module express vao project
const app = express() //initial a new app use express module
const morgan = require('morgan')
const compression = require("compresion")
const {default: helmet} = require('helmet') // hidden nhung thong tin, ngan chan ben thu 3 truy cap va lay thong tin 

// console.log('Process::', process.env)

// init middleware

// format of morgan
{
    app.use(morgan("dev")) //dev
};

{
    app.use(helmet()) // la 1 middleware dung de bao mat app express
};

{
    app.use(compression()) // dung de nen cac file, thong tin o server de giam kich thuoc gui den client
};

{
    app.use(express.json())
};

{
    app.use(express.urlencoded({
        extended: true
    }))
}
//init db
require('./dbs/init.mongodb')
// const { checkOverload } = require('./helpers/check.connect')
// checkOverload()

//init router
app.use('/', require('./routes'))

//handling error

app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    const statusCode = error.status || 500
    return res.status(statusCode).json({
        status: 'Error',
        code: statusCode,
        message: error.message || 'internal Server Error'
    })
})


module.exports = app
