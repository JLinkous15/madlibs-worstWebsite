import { getSandwiches } from "../database.js";

const sandwiches = getSandwiches()

export const sandwichesHTML = () => {
    
    let html = `<label for="sandwiches">Choose a Sandwich:</label>
    `
    if(sandwiches.length <= 3){
        html += `<ul>`
        const tempHTML = sandwiches.map(sandwich=>
            `<li><input type="radio" name="sandwiches" value="${sandwich.id}"/> ${sandwich.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="sandwiches" name="sandwiches">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = sandwiches.map(sandwich=>
            `<option value="${sandwich.id}">${sandwich.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}