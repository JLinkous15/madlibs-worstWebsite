import { getWeathers } from "../database.js";

const weathers = getWeathers()

export const weathersHTML = () => {
    
    let html = `<label for="weathers">Choose a Weather:</label>
    `
    if(weathers.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = weathers.map(weather=>
            `<li><input type="radio" name="weathers" value="${weather.id}"/> ${weather.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="weathers" name="weathers">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = weathers.map(weather=>
            `<option value="${weather.id}">${weather.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}