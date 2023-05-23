const {
    getAllTemps
} = require('../controllers/tempController')


const get_AllTemperaments_Handler = async (req, res) => {
    try{
        const result = await getAllTemps()
        res.status(200).send(result)
    } catch (error) {
        res.status(400).json('Error get_AllTemperaments_Handler')
    }
}


module.exports = {
    get_AllTemperaments_Handler,
}