import { getBeatles } from "../database.js";

const beatles = getBeatles()

export const beatlesHTML = () => {
    
    let html = `<label for="beatles">Choose a beatle:</label>
    `
    if(beatles.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = beatles.map(beatle=>
            `<li><input type="radio" name="beatles" value="${beatle.id}"/> ${beatle.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="beatles" name="beatles">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = beatles.map(beatle=>
            `<option value="${beatle.id}">${beatle.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}