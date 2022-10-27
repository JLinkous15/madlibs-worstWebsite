const database = {

    locations: [
        {
            id: 1,
            name: "Muscle Beach",
            display: 1

        },
        {
            id: 2,
            type: "Great Smokey Mountains",
            display: 1

        },
        {
            id: 3,
            type: "The Mall of America",
            display: 1

        },
        {
            id: 4,
            type: "Four Seasons Total Landscaping",
            display: 1

        },
        {
            id: 5,
            type: "the bathroom",
            display: 1

        },
        {
            id: 6,
            type: "cloud-base",
            display: 1,

        },
        {
            id: 7,
            type: "brewery down the road",
            display: 1

        },
        {
            id: 8,
            type: "the bottom of the Atlantic ocean",
            display: 1

        },
        {
            id: 9,
            type: "Great Salt Lake",
            display: 1

        },

    ],
    historicalfigures: [
        {
            id: 1,
            type: "Ramses II",
            display: 2

        },
        {
            id: 2,
            type: "John Long",
            display: 2

        },
        {
            id: 3,
            type: "Big Bird",
            display: 2

        },
    ],
    vehicles: [
        {
            id: 9,
            type: "Great Salt Lake",
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
            type: "morning",
            display: 2

        },
        {
            id: 2,
            type: "noon",
            display: 2

        },
        {
            id: 2,
            type: "night",
            display: 2

        },

    ],
    trees : [
        {
            id: 1,
            type: "cedar",
            display: 1

        },
        {
            id: 2,
            type: "tulip poplar",
            display: 1

        },
        {
            id: 3,
            type: "maple",
            display: 1

        },
        {
            id: 4,
            type: "pine",
            display: 1

        },
        {
            id: 5,
            type: "white oak",
            display: 1

        },
        {
            id: 6,
            type: "princess",
            display: 1

        },
        {
            id: 7,
            type: "red oak",
            display: 1

        },
        {
            id: 8,
            type: "ginco",
            display: 1

        },
        {
            id: 9,
            type: "beech",
            display: 1

        },
        {
            id: 10,
            type: "coastal redwood",
            display: 1

        },
        {
            id: 11,
            type: "sycamore",
            display: 1

        },
        {
            id: 12,
            type: "ash",
            display: 1

        },
        {
            id: 13,
            type: "apple",
            display: 1

        },
        {
            id: 14,
            type: "American chestnut",
            display: 1

        },
    ],
    locations: [
        {
            id: 1,

        }
    ],
    locations: [
        {
            id: 1,

        }
    ],
    locations: [
        {
            id: 1,

        }
    ],
    locations: [
        {
            id: 1,

        }
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