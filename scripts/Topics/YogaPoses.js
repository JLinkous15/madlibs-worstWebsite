import { getYogaPoses } from "../database.js"

const yogaPoses = getYogaPoses()

export const yogaPosesHTML = () => {
    
    let html = `<label for="yogaPoses">Choose a Yoga Pose:</label>
    `
    if(yogaPoses.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = yogaPoses.map(yogaPose=>
            `<li><input type="radio" name="yogaPoses" value="${yogaPose.id}"/> ${yogaPose.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="yogaPoses" name="yogaPoses">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = yogaPoses.map(yogaPose=>
            `<option value="${yogaPose.id}">${yogaPose.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}