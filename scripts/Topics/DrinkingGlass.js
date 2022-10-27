import { getDrinkingGlasses } from "../database.js"

const drinkingGlass = getDrinkingGlasses() 

export const drinkingGlassHTML = () => {
    
    let html = `<label for="drinkingGlass">Choose a Drinking Glass:</label>
    `
    if(drinkingGlass.length <= 3){
        html += `<ul>`
        const tempHTML = drinkingGlass.map(glass=>
            `<li><input type="radio" name="drinkingGlass" value="${glass.id}"/> ${glass.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="drinkingGlass" name="drinkingGlass">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = drinkingGlass.map(glass=>
            `<option value="${glass.id}">${glass.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}