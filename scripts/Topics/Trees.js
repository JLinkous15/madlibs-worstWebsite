import { getTrees } from "../database.js"


const trees = getTrees()

export const treesHTML = () => {
    
    let html = `<label for="trees">Choose a Tree:</label>
    `
    if(trees.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = trees.map(tree=>
            `<li><input type="radio" name="trees" value="${tree.id}"/> ${tree.name}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="trees" name="trees">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = trees.map(tree=>
            `<option value="${tree.id}">${tree.name}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}