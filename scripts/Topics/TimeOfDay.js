import { getTimeOfDays } from "../database.js";

const timeOfDays = getTimeOfDays()

export const timeOfDayHTML = () => {
    
    let html = `<label for="timeOfDays">Choose a Time Of Day:</label>
    `
    if(timeOfDays.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = timeOfDays.map(timeOfDay=>
            `<li><input type="radio" name="timeOfDays" value="${timeOfDay.id}"/> ${timeOfDay.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="timeOfDays" name="timeOfDays">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = timeOfDays.map(timeOfDay=>
            `<option value="${timeOfDay.id}">${timeOfDay.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}