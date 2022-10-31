import { getFoods } from "../database.js"

const foods = getFoods()

export const foodsHTML = () => {
    
    let html = `<label for="foods">Choose a Food:</label>
    `
    if (foods.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = foods.map(food=>
            `<li><input type="radio" name="foods" value="${food.id}"/> ${food.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="foods" name="foods">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = foods.map(food=>
            `<option value="${food.id}">${food.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}