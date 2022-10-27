import { getLocations } from "../database.js"


const locations = getLocations()

export const locationsHTML = () => {
    
    let html = `<label for="locations">Choose a Location:</label>
    `
    if(locations.length <= 3){
        html += `<ul>`
        const tempHTML = locations.map(location=>
            `<li><input type="radio" name="locations" value="${location.id}"/> ${location.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="locations" name="locations">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = locations.map(location=>
            `<option value="${location.id}">${location.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}