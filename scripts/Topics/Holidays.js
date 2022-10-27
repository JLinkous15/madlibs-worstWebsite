import { getHolidays } from "../database.js";

const holidays = getHolidays() 

export const holidaysHTML = () => {
    
    let html = `<label for="holidays">Choose a Holiday:</label>
    `
    if (holidays.length <= 3) {
        
        html += `<ul id="questions">`
        const tempHTML = holidays.map(
            holiday =>
            `<li><input type="radio" name="holidays" value="${holiday.id}"/> ${holiday.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        
        html += `<select id="holidays" name="holidays">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = holidays.map(
            holiday =>
            `<option value="${holiday.id}">${holiday.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}