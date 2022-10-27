import { getSports } from "../database.js";

const sports = getSports()

export const sportsHTML = () => {
    
    let html = `<label for="sports">Choose a Sport:</label>
    `
    if(sports.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = sports.map(sport=>
            `<li><input type="radio" name="sports" value="${sport.id}"/> ${sport.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="sports" name="sports">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = sports.map(sport=>
            `<option value="${sport.id}">${sport.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}