import { getBodiesOfWater } from "../database.js";


const bodiesOfWater = getBodiesOfWater()
export const waterHTML = () => {
    
    let html = `<label for="bodiesOfWater">Choose a body of water:</label>
    `
    if(bodiesOfWater.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = bodiesOfWater.map(bodyOfWater=>
            `<li><input type="radio" name="bodiesOfWater" value="${bodyOfWater.id}"/> ${bodyOfWater.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="bodiesOfWater" name="bodiesOfWater">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = bodiesOfWater.map(bodyOfWater=>
            `<option value="${bodyOfWater.id}">${bodyOfWater.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}