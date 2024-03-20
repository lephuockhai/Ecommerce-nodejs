'use strict'
/**
 * 3 check count number of connect database
 */
const mongoose = require('mongoose')
const os = require('os')
const process = require('process')
const _SECOND = 5000
// count connect
const countConnect = () => {
    const Numconnect = mongoose.connections.length
    console.log(`there is ${Numconnect} connect to DB`)
}

//check overload connect

const checkOverload = () => {
    // function setInterval la mot ham tich hop dung de thuc hien hanh dong lap di lap lai trong 1 khoang thoi gian duoc set
    setInterval( () => {
        const numConnect = mongoose.connections.length 
        const numCore = os.cpus().length // check trong may co bao nhieu core
        const memoryUsage = process.memoryUsage().rss; // memory da su dung

        const maxConnection = numCore * 5;
        console.log(`active connections: ${numConnect}`)
        console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} mb`)

        if (numConnect >= maxConnection) {
            console.log(`connect overload detected`)
        }
    }, _SECOND)
}

module.exports = {
    countConnect,
    checkOverload
}