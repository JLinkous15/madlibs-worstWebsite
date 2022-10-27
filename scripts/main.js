
import { MadLibs } from "./madlibs.js"

const container = document.querySelector("#mainContainer") 

const renderAllHTML = () => { 
    container.innerHTML = MadLibs()
}

renderAllHTML()
