const database = {
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