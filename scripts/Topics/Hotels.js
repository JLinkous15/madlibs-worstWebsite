import { getHotels } from "../database.js";

const hotels = getHotels() 

export const hotelsHTML = () => {
    
    let html = `<label for="hotels">Choose a hotel:</label>
    `
    if (hotels.length <= 3) {
        
        html += `<ul>`
        const tempHTML = hotels.map(hotel=>
            `<li><input type="radio" name="hotels" value="${hotel.id}"/> ${hotel.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        
        html += `<select id="hotels" name="hotels">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = hotels.map(
            hotel =>
            `<option value="${hotel.id}">${hotel.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}