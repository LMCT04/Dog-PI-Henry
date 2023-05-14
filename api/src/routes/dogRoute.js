const { Router } = require('express')
const {
    get_AllDogs_Handler,
    get_DogsbyId_Handler,
    post_Dogs_Handler,
} = require('../handlers/dogHandler')


const dogRouter = Router()

dogRouter.get('/', get_AllDogs_Handler)
dogRouter.get('/:id', get_DogsbyId_Handler)
dogRouter.post('/', post_Dogs_Handler)


module.exports = dogRouter