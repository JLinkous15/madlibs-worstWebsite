import { getVehicles } from "../database.js"


const vehicles = getVehicles()

export const vehiclesHTML = () => {
    
    let html = `<label for="vehicles">Choose a Vehicle:</label>
    `
    if(vehicles.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = vehicles.map(vehicle=>
            `<li><input type="radio" name="vehicles" value="${vehicle.id}"/> ${vehicle.name}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="vehicles" name="vehicles">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = vehicles.map(vehicle=>
            `<option value="${vehicle.id}">${vehicle.name}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}