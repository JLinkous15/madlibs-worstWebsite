import { getAnimals } from "./database.js"


const animals = getAnimals()
export const animalsHTML = () => {
    
    let html = `<label for="animals">Choose an Animal:</label>
    `
    if(animals.length <= 3){
        html += `<ul>`
        const tempHTML = animals.map(animal=>
            `<li><input type="radio" name="animals" value="${animal.id}"/> ${animal.name}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="animals" name="animals">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = animals.map(animal=>
            `<option value="${animal.id}">${animal.name}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}