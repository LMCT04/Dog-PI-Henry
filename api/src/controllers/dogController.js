const axios = require('axios')
const { Dog, Temperaments } = require('../db')


const cleanArr = (arr) => 
    arr.data.map((dogs) => {
        return {
            id: dogs.id,
            image: dogs.image.url,
            name: dogs.name,
            height: dogs.height.metric,
            weight: dogs.weight.metric,
            lifeSpan: dogs.life_span,
            temperaments: dogs.temperaments?.map(obj => obj.name).join(', '),
            created: false,
        }
    })

const getDBinfo = async () => {
    const database = await Dog.findAll({
        include: [{
            model: Temperaments,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }]
    })
    return database
}

const getAPIinfo = async () => {
    const url = await axios.get('https://api.thedogapi.com/v1/breeds')
    const filter = cleanArr(url)
    return filter
}

const getAllDogs = async () => {
    const api = await getAPIinfo()
    const db = await getDBinfo()
    const response = [...api, ...db]
    return response
}

//----------------------------------------------------------------------------------

const searchByName = async (name) => {
    const DBdogs = await Dog.findAll({
        where: {
            name: name,
        }
    })
    const APIdogs = await axios.get(
        `https://api.thedogapi.com/v1/breeds/search?q=${name}`
    )
    const APIinfo2 = cleanArr(APIdogs)
    return [...DBdogs, ...APIinfo2]
}

//----------------------------------------------------------------------------------

const DogByID = async (id, source) => {
    if(source === 'api') {
        const url = await axios.get('https://api.thedogapi.com/v1/breeds')
        const dog = url.data.find((d) => d.id == id)
        const cleanArr1 = {
            id: dog.id,
            image: dog.image.url,
            name: dog.name,
            height: dog.height.metric,
            weight: dog.weight.metric,
            lifeSpan: dog.life_span,
            temperaments: dog.temperaments,
            created: false,
        }
        return cleanArr1
    }

    const Dogs = await Dog.findByPk(id, {
        include: [{
            model: Temperaments,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }]
    })

    const cleanDog = {
        id: Dogs.id,
        image: Dogs.image.url,
        name: Dogs.name,
        height: Dogs.height.metric,
        weight: Dogs.weight.metric,
        lifeSpan: Dogs.life_span,
        temperaments: Dogs.temperaments?.map(obj => obj.name).join(', '),
        created: false,
    }

    return cleanDog
}

const createDog = async (image, name, height, weight, lifeSpan, temperaments) => {

    const newDog = await Dog.create({image, name, height, weight, lifeSpan})
    const temperamentsDB = await Temperaments.findAll({
        where: {
            name: temperaments
        }
    })

    newDog.addTemperament(temperamentsDB)
    return newDog
}

//console.log(getAllDogs())

module.exports = {
    getAllDogs,
    searchByName,
    DogByID,
    createDog,
    getAPIinfo
}