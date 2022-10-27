import { getFigures } from "./database.js"


const figures = getFigures()
export const figuresHTML = () => {
    
    let html = `<label for="figures">Choose a Location:</label>
    `
    if(figures.length <= 3){
        html += `<ul>`
        const tempHTML = figures.map(figure=>
            `<li><input type="radio" name="figures" value="${figure.id}"/> ${figure.name}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="figures" name="figures">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = figures.map(figure=>
            `<option value="${figure.id}">${figure.name}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}