const get_AllTemperaments_Handler = (req, res) => {
    try{
        res.send('get_AllTemperaments_Handler')
    } catch (error) {
        res.status(400).json('Error get_AllTemperaments_Handler')
    }
}


module.exports = {
    get_AllTemperaments_Handler,
}