"use strict"

const keyTokenModel = require("../models/keyToken.model")

// tao class

class keyTokenService {
    static createKeyToken = async ({userId, publicKey, privateKey}) => {
        try {
            const tokens = await keyTokenModel.create({
                user: userId,
                publicKey,
                privateKey
            })

            return tokens ? tokens.publicKey : null // neu token ton tai thi se tra ve publicKey cua token con keu khong ton tai thi se tra ve null
        } catch (error) {
            return error
        }
    }
}

module.exports = keyTokenService