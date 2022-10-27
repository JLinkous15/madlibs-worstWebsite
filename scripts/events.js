import { getEncouragements, setEncouragements } from "./database.js"

const encouragement = getEncouragements()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "encouragment") {
            setEncouragements(parseInt(event.target.value))
        }
    }
)

export const Events = () => {
    let html = ""
    html += `<select id="encouragement">`
    html += `<option value="0">Pick your motivation</option>`
    const listItems = encouragement.map(encouragement => {
        return `<input type="radio" value="${encouragement.id}">${encouragement.motivator} 
        `
    })

    html += listItems.join("")
    html += "</select>"

    return html
}
