"use strict"

const express = require('express')
const { apiKey, permission } = require('../auth/checkAuth')
const router = express.Router()

//kiem tra api key co ton tai ben trong headers cua url hay khong
router.use(apiKey)

//kiem tra permission ben trong header cuar url co ton ton quyn hay khong
router.use(permission('0000'))

router.use('/v1/api', require('./access'))

module.exports = router