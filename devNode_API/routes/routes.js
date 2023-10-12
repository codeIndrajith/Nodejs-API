const express = require('express')
const { getControllers , getController , createController , updateController , deleteController} = require('../controllers/controllers')
const router = express.Router()

router.route('/')
    .get(getControllers)
    .post(getController)

router.route('/:id')
    .post(createController)
    .put(updateController)
    .delete(deleteController)

module.exports = router;