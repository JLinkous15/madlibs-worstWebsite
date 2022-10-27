import { getShoes } from "../database.js";

const shoes = getShoes()

export const shoesHTML = () => {
    
    let html = `<label for="shoes">Choose a Shoe:</label>
    `
    if(shoes.length <= 3){
        html += `<ul>`
        const tempHTML = shoes.map(shoe=>
            `<li><input type="radio" name="shoes" value="${shoe.id}"/> ${shoe.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="shoes" name="shoes">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = shoes.map(shoe=>
            `<option value="${shoe.id}">${shoe.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}