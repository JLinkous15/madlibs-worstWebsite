import { getCondiments } from "../database.js";

const condiments = getCondiments()
export const condimentsHTML = () => {
    
    let html = `<label for="condiments">Choose a Condiment:</label>
    `
    if(condiments.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = condiments.map(condiment=>
            `<li><input type="radio" name="condiments" value="${condiment.id}"/> ${condiment.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="condiments" name="condiments">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = condiments.map(condiment=>
            `<option value="${condiment.id}">${condiment.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}