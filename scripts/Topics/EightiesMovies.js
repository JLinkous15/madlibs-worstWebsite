import {getEightiesMovies} from "../database.js"

const movies = getEightiesMovies() 

export const eightiesMoviesHTML = () => {
    
    let html = `<label for="movies">Choose a Movie:</label>
    `
    if (movies.length <= 3) {
        
        html += `<ul>`
        const tempHTML = movies.map(movie=>
            `<li><input type="radio" name="movies" value="${movie.id}"/> ${movie.type}</li>`
            )
        html += `${tempHTML.join("")}</ul>`
    } else {

        html += `<select id="movies" name="movies">
        <option value="0">Prompt to select resource...</option>`

        const tempHTML = movies.map(movie=>
            `<option value="${movie.id}">${movie.type}</option>`)
            
        html += `${tempHTML.join("")}</select>`
    }
    
    return html
}