import { getLooms } from "../database.js"


const looms = getLooms()
export const loomsHTML = () => {
    
    let html = `<label for="looms">Choose a Location:</label>
    `
    if(looms.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = looms.map(loom=>
            `<li><input type="radio" name="looms" value="${loom.id}"/> ${loom.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="looms" name="looms">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = looms.map(loom=>
            `<option value="${loom.id}">${loom.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}