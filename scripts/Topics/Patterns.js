import { getPatterns } from "../database.js" 


const patterns = getPatterns()
export const patternsHTML = () => {
    
    let html = `<label for="patterns">Choose a Location:</label>
    `
    if(patterns.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = patterns.map(pattern=>
            `<li><input type="radio" name="patterns" value="${pattern.id}"/> ${pattern.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="patterns" name="patterns">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = patterns.map(pattern=>
            `<option value="${pattern.id}">${pattern.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}