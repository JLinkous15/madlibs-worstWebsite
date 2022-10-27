import { getAromas } from "../database.js";


const aromas = getAromas()

export const aromasHTML = () => {
    
    let html = `<label for="aroma">Choose an aroma!:</label>
    `
    if(aromas.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = aromas.map(aroma=>
            `<li><input type="radio" name="aromas" value="${aroma.id}"/> ${aroma.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="aromas" name="aromas">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = aromas.map(aroma=>
            `<option value="${aroma.id}">${aroma.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}