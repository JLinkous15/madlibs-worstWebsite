import { getTools } from "../database.js";

const tools = getTools()

export const toolsHTML = () => {
    
    let html = `<label for="tools">Choose a Tool:</label>
    `
    if(tools.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = tools.map(tool=>
            `<li><input type="radio" name="tools" value="${tool.id}"/> ${tool.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="tools" name="tools">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = tools.map(tool=>
            `<option value="${tool.id}">${tool.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}