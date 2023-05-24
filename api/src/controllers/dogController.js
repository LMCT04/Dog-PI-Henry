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
            temperaments: dogs.temperament,
            created: false,
        }
    })


const getDBinfo = async () => {
    const database = await Dog.findAll({
        include: {
            model: Temperaments,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
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
    const razaDogs = await Dog.findAll({
        include: [{
            model: Temperaments,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }]
    });

    const cleanDogs = razaDogs.map((dogs) => {
        return {
            id: dogs.id,
            image: dogs.image.url,
            name: dogs.name,
            height: dogs.height.metric,
            weight: dogs.weight.metric,
            lifeSpan: dogs.life_span,
            temperaments: dogs.temperaments?.map(obj => obj.name).join(', '),
        }
    });
    const razas = await axios.get('https://api.thedogapi.com/v1/breeds')
    const razasOnly = razas.data.map(dogs => {
        return {
            id: dogs.id,
            image: dogs.image.url,
            name: dogs.name,
            height: dogs.height.metric,
            weight: dogs.weight.metric,
            lifeSpan: dogs.life_span,
            temperaments: dogs.temperaments,
        }
    })

    const response = [...cleanDogs, ...razasOnly];
    const responseClean = response.filter((dog) => dog.name.toLowerCase().includes(name.toLowerCase()));
    return responseClean
}

//----------------------------------------------------------------------------------

const DogByID = async (id, source) => {


    /*const dog = source === "api"
    ? (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)).data
    : await Dog.findByPk(id)
    return dog*/


    console.log(id)
    console.log(source)
    if(source === 'db'){
        const Dogs = await Dog.findByPk(id)
        return Dogs
    }
    if(source==='api') {
        const url = await axios.get('https://api.thedogapi.com/v1/breeds')
        const dog = url.data.find((d) => d.id == id)
        const cleanArr1 = {
            id: dog.id,
            image: dog.image.url,
            name: dog.name,
            height: dog.height.metric,
            weight: dog.weight.metric,
            lifeSpan: dog.life_span,
            temperaments: dog.temperament,
            created: false,
        }
        return cleanArr1
    }


    /*if (source === 'api') {
        const url = await axios.get('https://api.thedogapi.com/v1/breeds')
        const dog = url.data.find((d) => d.id == id)
        const cleanArr1 = {
            id: dog.id,
            image: dog.image.url,
            name: dog.name,
            height: dog.height.metric,
            weight: dog.weight.metric,
            lifeSpan: dog.life_span,
            temperaments: dog.temperament,
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

    const temperaments = Dogs.Temperaments.map(obj => obj.name).join(', ')

    const cleanDog = {
        id: Dogs.id,
        image: Dogs.image.url,
        name: Dogs.name,
        height: Dogs.height.metric,
        weight: Dogs.weight.metric,
        lifeSpan: Dogs.life_span,
        temperaments: temperaments,
        created: false,
    }

    return cleanDog*/
}

//---------------------------------------------------------------------------------- Temperaments     temperamnents     temperament

const createDog = async (image, name, height, weight, lifeSpan, temperaments) => {

        const response = await getAllDogs()
        const verificarName = response.filter((dog) => dog.name.toLowerCase() === name.toLowerCase());
        if (verificarName.length !== 0) return res.status(400).json({ error: "Ya exite la raza" });

        const dog = await Dog.create({ name, height, weight, lifeSpan, image });

        let temperamentfromDB = await Temperaments.findAll({
            where: {
                name: temperaments
            }
        })

        dog.addTemperaments(temperamentfromDB);
        return dog


        
    /*console.log(temperaments)
    const newDog = await Dog.create({image, name, height, weight, lifeSpan})

    let temperamentfromDB = await Temperaments.findAll({
        where: {
            name: temperaments
        }
    })
    await newDog.addTemperaments(temperamentfromDB)

    return newDog*/
}


module.exports = {
    getAllDogs,
    searchByName,
    DogByID,
    createDog,
    getAPIinfo
}