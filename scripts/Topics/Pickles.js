import { getPickles } from "../database.js";


const pickles = getPickles()
export const picklesHTML = () => {
    
    let html = `<label for="pickles">Choose a Location:</label>
    `
    if(pickles.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = pickles.map(pickle=>
            `<li><input type="radio" name="pickles" value="${pickle.id}"/> ${pickle.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="pickles" name="pickles">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = pickles.map(pickle=>
            `<option value="${pickle.id}">${pickle.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}