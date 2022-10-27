import { getFoods } from "../database.js"

const foods = getFoods()

export const foodsHTML = () => {
    
    let html = `<label for="foods">Choose a Food:</label>
    `
    if (foods.length <= 3){
        html += `<ul>`
        const tempHTML = foods.map(food=>
            `<li><input type="radio" name="foods" value="${food.id}"/> ${food.name}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="foods" name="foods">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = foods.map(food=>
            `<option value="${food.id}">${food.name}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}