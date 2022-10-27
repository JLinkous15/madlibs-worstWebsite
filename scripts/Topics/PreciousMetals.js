import { getPreciousMetals } from "../database.js";


const preciousMetals = getPreciousMetals()
export const preciousMetalsHTML = () => {
    
    let html = `<label for="preciousMetals">Choose a Location:</label>
    `
    if(preciousMetals.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = preciousMetals.map(preciousMetal=>
            `<li><input type="radio" name="preciousMetals" value="${preciousMetal.id}"/> ${preciousMetal.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="preciousMetals" name="preciousMetals">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = preciousMetals.map(preciousMetal=>
            `<option value="${preciousMetal.id}">${preciousMetal.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}