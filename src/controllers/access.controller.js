"use strict"

const { OK, CREATED } = require("../core/success.respone")
const AccessService = require("../services/access.service")

// const { model } = require("mongoose")
class AccessController {
    static signUp = async (req, res, next) => {
            new CREATED({
                message: 'Registed!',
                metadata: await AccessService.signUp(req.body)
            }).send(res)
    }
}

module.exports = AccessController