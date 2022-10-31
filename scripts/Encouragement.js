import { getEncouragements } from "./database.js"

const encouragements = getEncouragements()

export const encouragementList = () => {
    return `
    <div class="smallContainer">
    <ul id="encouragements">
    ${encouragements.map(taco=>
        `<li class="affirmation">${taco.motivator}</li>`)}
    </ul>
    </div>`
}