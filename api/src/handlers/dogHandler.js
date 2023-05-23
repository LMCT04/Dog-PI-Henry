const {
    getAllDogs,
    searchByName,
    DogByID,
    createDog,
} = require('../controllers/dogController')


const get_AllDogs_Handler = async (req, res) => {
    const { name } = req.query
    try{
        const result = 
            name
            ? await searchByName(name)
            : await getAllDogs()
        if(result.length === 0) throw Error('Dog not Found')
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json('Error get_AllDogs_Handler')
    }
}

const get_DogsbyId_Handler = async (req, res) => {
    const { id } = req.params
    const source = 
        isNaN(id)
        ? 'bdd'
        : 'api'
    try{
        const result = await DogByID(id, source)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).json('Error get_DogsbyId_Handler')
    }
}

const post_Dogs_Handler = async (req, res) => {
    const { image, name, height, weight, lifeSpan, temperaments } = req.body

    try{
        const newDog = await createDog(image, name, height, weight, lifeSpan, temperaments)
        res.status(200).json(newDog)
    } catch (error) {
        res.status(400).json('Error post_Dogs_Handler')
    }
}


module.exports = {
    get_AllDogs_Handler,
    get_DogsbyId_Handler,
    post_Dogs_Handler,
}