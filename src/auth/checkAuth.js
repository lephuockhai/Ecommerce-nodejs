'use strict'

const { keyBy } = require("lodash")
const { findById } = require("../services/apikey.service")

//
const HEADER = {
    API_KEY: 'x-api-key',
    AUTHORIZATION: 'authorization'
}

const apiKey = async ( req, res, next ) => {
    try {
        const key = req.headers[HEADER.API_KEY]?.toString()
        if (!key) {
            throw new BadRequestError('Key is not exists!', 403)
            // return res.status(403).json({
            //     message: 'Forbidden error'
            // })
        }

        const objKey = await findById(key)
        if (!objKey) {
            throw new BadRequestError('objKey is not exists!', 403)
            // return res.status(403).json({
            //     message: 'objKey not exists'
            // })
        }

        req.objKey = objKey
        return next()

    } catch (error) {
        
    }
}

const permission = (permission) => {
    return (req, res, next) => {
        if (!req.objKey.permissions) {
            throw new BadRequestError('permission denined', 403)
            // return res.status(403).json({
            //     message: 'permission denined'
            // })
        }

        const validPermission = req.objKey.permissions.includes(permission)
        if (!validPermission) {
            throw new BadRequestError('permission is invalid', 403)
            // return res.status(403).json({
            //     message: 'permission is invalid'
            // })
        }
        return next()
    }
}

const asyncHandler = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(next)
    }
}

module.exports = {
    apiKey,
    permission,
    asyncHandler
}