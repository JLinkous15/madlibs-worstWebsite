import { getLegumes } from "../database.js";


const legumes = getLegumes()
export const legumesHTML = () => {
    
    let html = `<label for="legumes">Choose a Location:</label>
    `
    if(legumes.length <= 3){
        html += `<ul>`
        const tempHTML = legumes.map(legume=>
            `<li><input type="radio" name="legumes" value="${legume.id}"/> ${legume.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="legumes" name="legumes">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = legumes.map(legume=>
            `<option value="${legume.id}">${legume.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}