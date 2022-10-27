import { getToiletries } from "../database.js"

const toiletries = getToiletries()

export const toiletriesHTML = () => {
    
    let html = `<label for="toiletries">Choose a Toiletry:</label>
    `
    if(toiletries.length <= 3){
        html += `<ul id="questions">`
        const tempHTML = toiletries.map(toiletry=>
            `<li><input type="radio" name="toiletrys" value="${toiletry.id}"/> ${toiletry.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {
        html += `<select id="toiletries" name="toiletries">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = toiletries.map(toiletry=>
            `<option value="${toiletry.id}">${toiletry.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}
