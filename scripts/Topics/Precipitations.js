import { getPrecipitations } from "../database.js";

const precipitations = getPrecipitations()

export const precipitationsHTML = () => {
    
    let html = `<label for="precipitations">Choose a Precipitation:</label>
    `
    if(precipitations.length <= 3){
        html += `<ul>`
        const tempHTML = precipitations.map(precipitation=>
            `<li><input type="radio" name="precipitations" value="${precipitation.id}"/> ${precipitation.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="precipitations" name="precipitations">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = precipitations.map(precipitation=>
            `<option value="${precipitation.id}">${precipitation.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}