"use strict"
//payload chua data de van chuyen qua he thong nay den he thong khac thong qua token
//publickey de verify 
//PrivateKey chi dien ra 1 lan no chi tao ra va day qua browser chu khong giu lai trong he thong

const JWT = require('jsonwebtoken')

const createTokenPair = async (payload, publicKey, privateKey) => {
    try {
        //accessToken
        const accessToken = await JWT.sign(payload, publicKey, {
            expiresIn: '2 days'
        })

        const refreshToken = await JWT.sign(payload, privateKey, {
            expiresIn: '7 days'
        })
//nếu như dùng privatekey vừa sign vừa verify nó là 1 sai lầm khi ngta bắt được provate key thì sẽ gỉa chữ ký được 
        JWT.verify(accessToken, publicKey, (err, decode) => {
            if (err){
                console.error('error verify', err)
            }
            else {
                console.log('decode verify', decode)
            }
        })

        return {accessToken, refreshToken}
    } catch (error) {
        
    }
}

module.exports = {
    createTokenPair
}