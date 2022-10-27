import { getDanceMoves } from "../database.js"

const danceMoves = getDanceMoves() 

export const danceMovesHTML = () => {
    
    let html = `<label for="danceMoves">Choose a Dance Move:</label>
    `
    if(danceMoves.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = danceMoves.map(danceMove=>
            `<li><input type="radio" name="danceMoves" value="${danceMove.id}"/> ${danceMove.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="danceMoves" name="danceMoves">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = danceMoves.map(danceMove=>
            `<option value="${danceMove.id}">${danceMove.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}