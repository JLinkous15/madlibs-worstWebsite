import { getIllnesses } from "../database.js"

const illnesses = getIllnesses() 

export const illnessesHTML = () => {
    
    let html = `<label for="illnesses">Choose an Illness:</label>
    `
    if (illnesses.length <= 3) {
        
        html += `<ul id="questions">`
        const tempHTML = illnesses.map(illness=>
            `<li><input type="radio" name="illnesses" value="${illness.id}"/> ${illness.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        
        html += `<select id="illnesses" name="illnesses">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = illnesses.map(
            illness =>
            `<option value="${illness.id}">${illness.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}