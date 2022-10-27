import { getGrills } from "../database.js"

const grills = getGrills() 

export const grillsHTML = () => {
    
    let html = `<label for="grills">Choose a Grill:</label>
    `
    if (grills.length <= 3) {
        
        html += `<ul id="questions">`
        const tempHTML = grills.map(grill=>
            `<li><input type="radio" name="grills" value="${grill.id}"/> ${grill.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        
        html += `<select id="grills" name="grills">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = grills.map(
            grill =>
            `<option value="${grill.id}">${grill.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}