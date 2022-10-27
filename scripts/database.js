const database = {

    locations: [
        {
            id: 1,
            name: "Muscle Beach"

        },
        {
            id: 2,
            name: "Great Smokey Mountains"

        },
        {
            id: 3,
            name: "The Mall of America"

        },
        {
            id: 4,
            name: "Four Seasons Total Landscaping",
        },
        {
            id: 5,
            name: "the bathroom"

        },
        {
            id: 6,
            name: "cloud-base"

        },
        {
            id: 7,
            name: "brewery down the road"

        },
        {
            id: 8,
            name: "the bottom of the Atlantic ocean"

        },
        {
            id: 9,
            name: "Great Salt Lake"

        }

    ],
    historicalfigures: [
        {
            id: 1,
            name: "Ramses II",
            display: 2

        },
        {
            id: 2,
            name: "John Long",
            display: 2

        },
        {
            id: 3,
            name: "Big Bird",
            display: 2

        },
    ],
    vehicles: [
        {
            id: 9,
            name: "Great Salt Lake",
            display: 1

        },

    ],

    animals: [

    ],

    foods: [

    ],
    timeOfDay: [

        {
            id: 1,
            name: "morning",
            display: 2

        },
        {
            id: 2,
            name: "noon",
            display: 2

        },
        {
            id: 2,
            name: "night",
            display: 2

        },

    ],
    trees : [
        {
            id: 1,
            name: "cedar", 
        },
        {
            id: 2,
            name: "tulip poplar", 
        },
        {
            id: 3,
            name: "maple", 
        },
        {
            id: 4,
            name: "pine", 
        },
        {
            id: 5,
            name: "white oak", 
        },
        {
            id: 6,
            name: "princess", 
        },
        {
            id: 7,
            name: "red oak", 
        },
        {
            id: 8,
            name: "ginco", 
        },
        {
            id: 9,
            name: "beech", 
        },
        {
            id: 10,
            name: "coastal redwood", 
        },
        {
            id: 11,
            name: "sycamore", 
        },
        {
            id: 12,
            name: "ash", 
        },
        {
            id: 13,
            name: "apple", 
        },
        {
            id: 14,
            name: "American chestnut", 
        },
    ],



    encouragements: [
        {
            id: 1,
            motivator: "Welcome to MAD-Libs, a home to foster your creativity in story telling."
        },
        {
            id: 2,
            motivator: "Along this journey, you will discover how every desicion has an outcome."
        },
        {
            id: 3,
            motivator: "When the right choice presents itself, deep down, you will know it."
        },
        {
            id: 4,
            motivator: "As time passes, you become more aware of the intricacies that led you to where you are."
        },
        {
            id: 5,
            motivator: "Knowledge of what's to come will reveal itself as you push forward."
        },
        {
            id: 6,
            motivator: "Patience is a skill that is nurtured through adversity."
        },
        {
            id: 7,
            motivator: "You will remember the brightest moments at your event horizon."
        },
        {
            id: 8,
            motivator: "Let go of all thought and let the MAD-Libs take over."
        },
        {
            id: 9,
            motivator: "Allow your mind to wander to new places whilst in search of the answers."
        },
        {
            id: 10,
            motivator: "No wrong answers exist when you let go of self preservation."
        },
        {
            id: 11, 
            motivator: "Moving through time is akin to moving through space, it requires intentionality."
        },
        {
            id: 12,
            motivator: "Remember why you chose the choices you made."
        },
        {
            id: 13,
            motivator: "Upon investigation of your reality, you may realize the significance of the most subtle details."
        },
        {
            id: 14,
            motivator: "When choosing from a myriad of options it is sometimes best to focus on the simplicity of its outcome."
        },
        {
            id: 15,
            motivator: "When it seems that the end is near, look back and celebrate how far you have come."
        }
    ],
    madResponse: [
        {
            id: 1,
            response: `
            There once was a tale, 
            of a little snail, 
            who got lost in the forest and found some old rail. 
            The little snail, 
            followed the rail, 
            leading it to a cavern of shale. 
            Inch by inch, the light grew dimmer, 
            with every slither, the halls moved slimmer. 
            By the time the snail looked around, 
            it was then melting into the ground.
            `
        }
    ]
}

export const getEncouragements = () => {
    return database.encouragements.map(encouragement => ({...encouragement}))
}

export const getMadResponse = () => {
    return database.madResponse.map(madResponse => ({...madResponse}))

}

export const getLocations = () => {
    return database.locations.map(location => ({...location}))
}

export const getTrees = () => {
    return database.trees.map(tree => ({...tree}))
}

export const getFoods = () => {
    return database.foods.map(food => ({...food}))
}

export const getAnimals = () => {
    return database.animals.map(animal => ({...animal}))
}

export const getFigures = () => {
    return database.historicalfigures.map(figure => ({...figure}))
}

export const getVehicles = () => {
    return database.vehicles.map(vehicle => ({...vehicle}))
}