"use strict"

const bcrypt = require('bcrypt')
const crypto = require('node:crypto')
const shopModel = require("../models/shop.model")
const keyTokenService = require('./keyToken.service')
const { createTokenPair } = require('../auth/authUtils')
const { getInfoData } = require('../utils')
const { ConflictRequestError } = require('../core/error.response')
const { CREATED, OK } = require('../core/success.respone')
// const { _ } = require('lodash')


/**
 * SHOP :00001
 * WRITER: 00002
 * EDITOR: 00003
 */

const shopRoles = {
    SHOP: '00001',
    WRITER: '00002',
    EDITOR: '00003',
    ADMIN: '00000'
}

class AccessService {
    static signUp = async ({email, name, password}) => {
        const holderShop = await shopModel.findOne({email}).lean() // lean giup truy van nhanh hon, tra ve ket qua thuan tuy
        if(holderShop) {
            throw new ConflictRequestError('Email already registed!')
        }

        const passwordHash = await bcrypt.hash(password, 10)

        const newShop = await shopModel.create({name, email, password: passwordHash, roles: [shopRoles.SHOP]})

        //khi newshop da duoc tao
        if (newShop) {
            const privateKey = crypto.randomBytes(64).toString('hex')
            const publicKey = crypto.randomBytes(64).toString('hex')


            console.log({ privateKey, publicKey }) // if exists then save keystore

            //truyền vào shopid và publickey đã tạo để tạo toke n
            const keyStore = await keyTokenService.createKeyToken({
                userId: newShop._id,
                publicKey,
                privateKey
            })

            // neu khong ton tai token thi tra ve error
            if (!keyStore) { 
                throw new ConflictRequestError('keyStore error', 409)
            }

            //neu da toi tai thi sẽ tạo cặp token đẩy về user và thành công

            // create token pair 
            const tokens = await createTokenPair({userId: newShop._id, email}, publicKey, privateKey)
            return {
                code: 201,
                metadata: {
                    shop: getInfoData({filled: ['_id', 'name', 'email'], object: newShop}),
                    tokens
                }
            }
        }

        return {
            code: 200, // tao thanh cong nhung null
            metadata: null
        }

    }
}

module.exports = AccessService