import { getShapes } from "../database.js"

const shapes = getShapes()

export const shapesHTML = () => {
    
    let html = `<label for="shapes">Choose a Shape:</label>
    `
    if(shapes.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = shapes.map(shape=>
            `<li><input type="radio" name="shapes" value="${shape.id}"/> ${shape.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="shapes" name="shapes">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = shapes.map(shape=>
            `<option value="${shape.id}">${shape.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}