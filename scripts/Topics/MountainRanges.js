import { getMountainRanges } from "../database.js";


const mountainRanges = getMountainRanges()
export const mountainRangesHTML = () => {
    
    let html = `<label for="mountainRanges">Choose a Mountain Range:</label>
    `
    if(mountainRanges.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = mountainRanges.map(mountainRange=>
            `<li><input type="radio" name="mountainRanges" value="${mountainRange.id}"/> ${mountainRange.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="mountainRanges" name="mountainRanges">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = mountainRanges.map(mountainRange=>
            `<option value="${mountainRange.id}">${mountainRange.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}