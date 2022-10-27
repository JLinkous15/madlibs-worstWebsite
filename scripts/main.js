import { madlibs } from "./madlibs.js"

const mainContainer = document.querySelector("#mainContainer")

const finalHTML = () => {
    mainContainer.innerHTML = madlibs()
}

finalHTML()