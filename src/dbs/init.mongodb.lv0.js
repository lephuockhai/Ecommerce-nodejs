'use strict'
const mongoose = require('mongoose');

const connectString = `mongodb://localhost:27017/ecommerce`;

mongoose.connect(connectString)
.then( _ => console.log("connected mongodb success")) // neu ket noi thanh cong thi in ra ..
.catch(err => console.log(`error connect: ${err}`)); // neu ket noi that bai thi in ra ...

if (1 === 1){
    mongoose.set('debug', true);
    mongoose.set('debug', {color: true});
}

module.exports = mongoose;