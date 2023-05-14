const { Router } = require('express')
const {
    get_AllTemperaments_Handler,
} = require('../handlers/tempHandler')


const temperamentRouter = Router()

temperamentRouter.get('/', get_AllTemperaments_Handler)


module.exports = temperamentRouter