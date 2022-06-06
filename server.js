const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const jediSith = {
    'qui-gon jinn': {
        'Name': 'Qui-Gon Jinn',
        'Race': 'Human',
        'birthdate': '80 BBY', 
        'Homeworld': 'Coruscant',
        'Affiliation': 'Jedi',
        'Title': 'Jedi Master',
        'Lightsaber': 'Green',
        'Appearance': 'Phantom Menace',
        'Master': 'Dooku',  
    },
    'yoda': {
        'Name': 'Yoda',
        'Race': 'Unknown',
        'birthdate': '896 BBY', 
        'Homeworld': 'Unknown',
        'Affiliation': 'Jedi',
        'Title': 'Jedi Master',
        'Lightsaber': 'Green',
        'Appearance': 'Empire Strikes Back',
        'Master': 'Unknown',
    },
    'obi-wan kenobi': {
        'Name': 'Obi-Wan Kenobi',
        'Race': 'Human',
        'birthdate': '57 BBY', 
        'Homeworld': 'Stewjon',
        'Affiliation': 'Jedi',
        'Title': 'Jedi Master',
        'Lightsaber': 'Blue',
        'Appearance': 'Star Wars (A.K.A: A New Hope)',
        'Master': 'Qui-Gon Jinn',
    },
    'anakin skywalker': {
        'Name': 'Anakin Skywalker',
        'Race': 'Human',
        'birthdate': '41 BBY', 
        'Homeworld': 'Tatooine',
        'Affiliation': 'Jedi',
        'Title': 'Jedi Padawan',
        'Lightsaber': 'Blue',
        'Appearance': 'Return of the Jedi',
        'Master': 'Obi-Wan Kenobi',
    },
    'darth vader': {
        'Name': 'Darth Vader',
        'Race': 'Human',
        'birthdate': '41 BBY', 
        'Homeworld': 'Tatooine',
        'Affiliation': 'Sith',
        'Title': 'Sith Lord',
        'Lightsaber': 'Red',
        'Appearance': 'Star Wars (A.K.A: A New Hope)',
        'Master': 'Darth Sidious',
    },
    'luke skywalker': {
        'Name': 'Luke Sywalker',
        'Race': 'Human',
        'birthdate': '19 BBY', 
        'Homeworld': 'Tatooine',
        'Affiliation': 'Jedi',
        'Title': 'Jedi Master',
        'Lightsaber': 'Green',
        'Appearance': 'Star Wars (A.K.A: A New Hope)',
        'Master': 'Yoda',
    },
    'ben solo': {
        'Name': 'Ben Solo',
        'Race': 'Human',
        'birthdate': '5 ABY', 
        'Homeworld': 'Chandrila',
        'Affiliation': 'Jedi',
        'Title': 'Jedi Padawan',
        'Lightsaber': 'Blue',
        'Appearance': 'The Force Awakens',
        'Master': 'Luke Sywalker',
    },
    'kylo ren': {
        'Name': 'Kylo Ren',
        'Race': 'Human',
        'birthdate': '5 ABY', 
        'Homeworld': 'Chandrila',
        'Affiliation': 'Sith',
        'Title': 'Supreme Leader',
        'Lightsaber': 'Red',
        'Appearance': 'The Force Awakens',
        'Master': 'Snoke',
    },
    'rey skywalker': {
        'Name': 'Rey Skywalker',
        'Race': 'Human',
        'birthdate': '15 ABY', 
        'Homeworld': 'Jakku',
        'Affiliation': 'Jedi',
        'Title': 'Jedi Padawan',
        'Lightsaber': 'Yellow',
        'Appearance': 'The Force Awakens',
        'Master': 'Luke Sywalker',
    },
    'darth sidius': {
        'Name': 'Darth Sidius',
        'Race': 'Human',
        'birthdate': '84 BBY', 
        'Homeworld': 'Naboo',
        'Affiliation': 'Sith',
        'Title': 'The Emperor',
        'Lightsaber': 'Red',
        'Appearance': 'Empire Strikes Back',
        'Master': 'Darth Plagueis',
    },
    'darth maul': {
        'Name': 'Darth Maul',
        'Race': 'Zabrak',
        'birthdate': '54 BBY', 
        'Homeworld': 'Dathomir',
        'Affiliation': 'Sith',
        'Title': 'Sith Apprentice',
        'Lightsaber': 'Red',
        'Appearance': 'Phantom Menace',
        'Master': 'Darth Sidius',
    },
    'mace windu': {
        'Name': 'Mace Windu',
        'Race': 'Human',
        'birthdate': '72 BBY', 
        'Homeworld': 'Haruun Kal',
        'Affiliation': 'Jedi',
        'Title': 'Jedi Master',
        'Lightsaber': 'Purple',
        'Appearance': 'The Phantom Menace',
        'Master': 'Yoda',
    },
    'snoke': {
        'Name': 'Snoke',
        'Race': 'Humanoid Genetic Strandcast',
        'birthdate': '19 BBY', 
        'Homeworld': 'Exegol',
        'Affiliation': 'Sith',
        'Title': 'Supreme Leader',
        'Lightsaber': 'None',
        'Appearance': 'Force Awakens',
        'Master': 'Darth Sidius',
    },
    'Unknown': {
        'Name': 'Unknown',
        'Race': 'Unknown',
        'birthdate': 'Unknown', 
        'Homeworld': 'Unknown',
        'Affiliation': 'Unknown',
        'Title': 'Unknown',
        'Lightsaber': 'Unknown',
        'Appearance': 'Unknown',
        'Master': 'Unknown',
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const forceUser = request.params.name.toLowerCase()
    if (jediSith[forceUser]) {
        response.json(jediSith[forceUser])
    } else {
        response.json(jediSith['Unknown'])
    }
})

/* app.get('/api/:person', (request, response) => {
    const forceUser = request.params.name.toLowerCase()
    if(person[forceUser]){
        response.json(person[forceUser])
    }else{
        response.json(person['Unknown'])
    }
}) */


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})