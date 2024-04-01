"use strict"

const _= require('lodash')

const getInfoData = ({ filled = [], object = []}) => {
    return _.pick(object, filled)
}

module.exports =  {
    getInfoData
}