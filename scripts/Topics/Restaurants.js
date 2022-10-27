import { getRestaurants } from "../database.js";

const restaurants = getRestaurants()

export const restaurantsHTML = () => {
    
    let html = `<label for="restaurants">Choose a Restaurant:</label>
    `
    if(restaurants.length <= 3){
        html += `<ul>`
        const tempHTML = restaurants.map(restaurant=>
            `<li><input type="radio" name="restaurants" value="${restaurant.id}"/> ${restaurant.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="restaurants" name="restaurants">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = restaurants.map(restaurant=>
            `<option value="${restaurant.id}">${restaurant.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}