'use strict'

const {model, Schema, Types} = require('mongoose');

const DOCUMENT_NAME = 'Shop'
const COLLECTION_NAME = 'Shops'

//call function !dmbgum
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const shopSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        maxLength: 150
    }, //name shop
    email:{
        type: String,
        unique: true,
        trim: true
    }, //email sign up shop account
    password:{
        type: String,
        required: true
    }, // password
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    }, //did shop active?
    verify:{
        type: Schema.Types.Boolean,
        default: false
    }, //da dang ky thanh cong hay chua
    roles:{
        type: Array,
        default: []
    } //quyen cua shop
},
    {
        timestamps: true,
        collection: COLLECTION_NAME
    });

//Export the model
module.exports = model(DOCUMENT_NAME, shopSchema);
