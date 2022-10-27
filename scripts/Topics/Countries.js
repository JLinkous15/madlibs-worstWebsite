import { getCountries } from "../database.js";


const countries = getCountries()
export const countriesHTML = () => {
    
    let html = `<label for="countries">Choose a Country:</label>
    `
    if(countries.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = countries.map(country=>
            `<li><input type="radio" name="countries" value="${country.id}"/> ${country.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="countries" name="countries">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = countries.map(country=>
            `<option value="${country.id}">${country.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}