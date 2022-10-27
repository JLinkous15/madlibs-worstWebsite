import { getEncouragements } from "./database.js"

const encouragements = getEncouragements()

export const encouragementList = () => {
    return `
    <ul id="encouragements">
    ${encouragements.map(taco=>
        `<li class="affirmation">${taco.motivator}</li>`)}
    </ul>`
}