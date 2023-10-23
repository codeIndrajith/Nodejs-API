const express = require('express')
const { getControllers , getController , getControllerId , createController , updateController , deleteController , getBootcampInRadius} = require('../controllers/controllers')
const router = express.Router()

router.route('/radius/:zipcode/:distance').get(getBootcampInRadius)

router.route('/')
    .get(getControllers)
    .post(getController)

router.route('/:id')
    .get(getControllerId)
    .post(createController)
    .put(updateController)
    .delete(deleteController)

module.exports = router;