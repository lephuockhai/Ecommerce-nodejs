'use strich'


const mongoose = require('mongoose')
connectString = 'mongodb://localhost:27017/ecommerce'
const { countConnect } = require('../helpers/check.connect')
class Database {
    constructor() {
        this.connect()
    }

    connect(type = 'mongdb'){
        if (1 === 1) {
            mongoose.set('debug', true)
            mongoose.set('debug', {color: true})
        }
        mongoose.connect(connectString, {
            maxPoolSize: 50
        }).then(_ => {
            console.log(`connect success to DB PRO`)
            countConnect()
        }).catch(err => {
            console.log(`error ${err}`)
        })
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb