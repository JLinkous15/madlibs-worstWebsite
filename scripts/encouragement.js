import { getEncouragements } from "./database.js"

const encouragements = getEncouragements()

export const encouragementList = () => {
    return `
    <ul id="encouragements">
    ${encouragements.map(encouragement=>`<li class="affirmation">${encouragement.text}</li>`)}
    </ul>`
}