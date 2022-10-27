
import { Madlibs } from "./madlibs.js"


const container = document.querySelector("#mainContainer") 

const renderAllHTML = () => { 
    container.innerHTML = Madlibs()
}

renderAllHTML()
