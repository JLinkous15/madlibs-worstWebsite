import { locationsHTML } from "./Topics/Locations.js"
import { treesHTML } from "./Topics/Trees.js"
import { vehiclesHTML } from "./Topics/Vehicles.js"
import { figuresHTML } from "./Topics/HistoricalFigures.js"
import { foodsHTML } from "./Topics/Foods.js"
// import { animalsHTML } from "./Topics/Animals.js"

const locations = locationsHTML()

export const Madlibs = () => {
    return `
        <div id="events">
            ${locationsHTML()}
            ${treesHTML()}
            ${vehiclesHTML()}
            ${figuresHTML()}
            ${foodsHTML()}
            
            
        </div>
        <div id="encouraging">

        </div>
    `
}