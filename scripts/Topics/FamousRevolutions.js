import { getFamousRevolutions } from "../database.js";

const revolutions = getFamousRevolutions()

export const famousRevolutionsHTML = () => {
    
    let html = `<label for="revolutions">Choose a Revolution:</label>
    `
    if (revolutions.length <= 3) {
        
        html += `<ul>`
        const tempHTML = revolutions.map(revolution=>
            `<li><input type="radio" name="revolutions" value="${revolution.id}"/> ${revolution.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        
        html += `<select id="revolutions" name="revolutions">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = revolutions.map(
            revolution =>
            `<option value="${revolution.id}">${revolution.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}