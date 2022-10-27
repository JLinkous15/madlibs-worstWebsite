import { getPlanets } from "../database.js"


const planets = getPlanets()
export const planetsHTML = () => {
    
    let html = `<label for="planets">Choose a Location:</label>
    `
    if(planets.length <= 3){
        html += `<ul>`
        const tempHTML = planets.map(planet=>
            `<li><input type="radio" name="planets" value="${planet.id}"/> ${planet.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="planets" name="planets">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = planets.map(planet=>
            `<option value="${planet.id}">${planet.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}