import { locationsHTML } from "./Locations.js"
import { treesHTML } from "./Trees.js"
import { vehiclesHTML } from "./Vehicles.js"
import { figuresHTML } from "./HistoricalFigures.js"
import { foodsHTML } from "./Foods.js"
import { animalsHTML } from "./Animals.js"

const locations = locationsHTML()

export const Madlibs = () => {
    return `
        <div id="events">
            ${locationsHTML()}
            ${treesHTML()}
            ${vehiclesHTML()}
            ${figuresHTML()}
            ${foodsHTML()}
            ${animalsHTML()}
            
        </div>
        <div id="encouraging">

        </div>
    `
}