import { getSausages } from "./database.js"

const sausages = getsausages()

export const sausagesHTML = () => {
    
    let html = `<label for="sausages">Choose a sausage:</label>
    `
    if(sausages.length <= 3){
        html += `<ul>`
        const tempHTML = sausages.map(sausage=>
            `<li><input type="radio" name="sausages" value="${sausage.id}"/> ${sausage.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="sausages" name="sausages">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = sausages.map(sausage=>
            `<option value="${sausage.id}">${sausage.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}