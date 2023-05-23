//const { getAPIinfo } = require('./dogController')

/*const { Temperaments } = require("../db")
const axios = require('axios')


const getApi= async ()=>{
    const response= await axios.get('https://api.thedogapi.com/v1/breeds')
    const data = response.data.map(dog=>{
        return {
            id: dog.id,
            image: dog.image.url,
            name: dog.name,
            height: dog.height.metric,
            weight: dog.weight.metric,
            lifeSpan: dog.life_span,
            temperaments: dog.temperaments,
        }
    })
    return data
}



const getAllTemps = async () => {
    const allTemp = await getApi()

    const filterTemps = allTemp.filter((t) => t.temperament !== " ")

    const temperaments = filterTemps.map((temps) => temps.temperament)

    const temps= temperaments.toString().split(', ' && ',')

    temps.forEach((e) => {
        const thisTemp = e.trim()
        Temperaments.findOrCreate({
            where: {
                name: thisTemp
            }
        })
    })

    return await Temperaments.findAll()
}*/

const axios = require('axios');
const { Temperaments } = require('../db');

const getAllTemps = async () =>{
    
    
    const allData = await axios.get('https://api.thedogapi.com/v1/breeds');
    
    let allTemperaments = allData.data
    .map((dog) => (dog.temperament ? dog.temperament : "No info"))
    .map((dog) => dog?.split(", "));

    let oneTemperament = [...new Set(allTemperaments.flat())];
    oneTemperament.forEach((element) => {
    if (element) {
        Temperaments.findOrCreate({
        where: { name: element },
        });
    }
    });
    oneTemperament = await Temperaments.findAll();
    return oneTemperament;

}


module.exports = {
    getAllTemps,
}