import { getWindowTints } from "../database.js"

const windowTints = getWindowTints() 

export const windowTintsHTML = () => {
    
    let html = `<label for="windowTints">Choose a Window Tint:</label>
    `
    if(windowTints.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = windowTints.map(windowTint=>
            `<li><input type="radio" name="windowTints" value="${windowTint.id}"/> ${windowTint.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="windowTints" name="windowTints">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = windowTints.map(windowTint=>
            `<option value="${windowTint.id}">${windowTint.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}