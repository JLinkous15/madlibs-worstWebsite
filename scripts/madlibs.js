import { animalsHTML } from "./Topics/Animals.js"
import { aromasHTML } from "./Topics/Aromas.js"
import { beatlesHTML } from "./Topics/Beatles.js"
import { condimentsHTML } from "./Topics/Condiments.js"
import { danceMovesHTML } from "./Topics/DanceMoves.js"
import { drinkingGlassHTML } from "./Topics/DrinkingGlass.js"
import { eightiesMoviesHTML } from "./Topics/EightiesMovies.js"
import { famousRevolutionsHTML } from "./Topics/FamousRevolutions.js"
import { foodsHTML } from "./Topics/Foods.js"
import { grillsHTML } from "./Topics/Grills.js"
import { historicalFiguresHTML } from "./Topics/HistoricalFigures.js"
import { holidaysHTML } from "./Topics/Holidays.js"
import { hotelsHTML } from "./Topics/Hotels.js"
import { illnessesHTML } from "./Topics/Illnesses.js"
import { legumesHTML } from "./Topics/Legumes.js"
import { locationsHTML } from "./Topics/Locations.js"
import { loomsHTML } from "./Topics/Loom.js"
import { mountainRangesHTML } from "./Topics/MountainRanges.js"
import { patternsHTML } from "./Topics/Patterns.js"
import { picklesHTML } from "./Topics/Pickles.js"
import { planetsHTML } from "./Topics/Planets.js"
import { preciousMetalsHTML } from "./Topics/PreciousMetals.js"
import { precipitationsHTML } from "./Topics/Precipitations.js"
import { restaurantsHTML } from "./Topics/Restaurants.js"
import { sandwichesHTML } from "./Topics/Sandwiches.js"
import { sausagesHTML } from "./Topics/Sausages.js"
import { shapesHTML } from "./Topics/Shapes.js"
import { shoesHTML } from "./Topics/Shoes.js"
import { sportsHTML } from "./Topics/Sports.js"
import { timeOfDayHTML } from "./Topics/TimeOfDay.js"
import { toiletriesHTML } from "./Topics/Toiletries.js"
import { toolsHTML } from "./Topics/Tools.js"
import { treesHTML } from "./Topics/Trees.js"
import { vehiclesHTML } from "./Topics/Vehicles.js"
import { weathersHTML } from "./Topics/Weathers.js"
import { windowTintsHTML } from "./Topics/WindowTint.js"
import { yogaPosesHTML } from "./Topics/YogaPoses.js"
import { encouragementList } from "./Encouragement.js"
import { getMadResponses } from "./database.js"



export const Madlibs = () => {
    return `
        <div id="events">

        ${animalsHTML()}
        ${aromasHTML()}
        ${beatlesHTML()}
        ${condimentsHTML()}
        ${danceMovesHTML()}
        ${drinkingGlassHTML()}
        ${eightiesMoviesHTML()}
        ${famousRevolutionsHTML()}
        ${foodsHTML()}
        ${grillsHTML()}
        ${historicalFiguresHTML()}
        ${holidaysHTML()}
        ${hotelsHTML()}
        ${illnessesHTML()}
        ${legumesHTML()}
        ${locationsHTML()}
        ${loomsHTML()}
        ${mountainRangesHTML()}
        ${patternsHTML()}
        ${picklesHTML()}
        ${planetsHTML()}
        ${preciousMetalsHTML()}
        ${precipitationsHTML()}
        ${restaurantsHTML()}
        ${sandwichesHTML()}
        ${sausagesHTML()}
        ${shapesHTML()}
        ${shoesHTML()}
        ${sportsHTML()}
        ${timeOfDayHTML()}
        ${toiletriesHTML()}
        ${toolsHTML()}
        ${treesHTML()}
        ${vehiclesHTML()}
        ${weathersHTML()}
        ${windowTintsHTML()}
        ${yogaPosesHTML()}

        </div>
        
        <div id="encouraging">
        ${encouragementList()}
        </div>
    `
}

const madResponses = getMadResponses()
document.addEventListener(
    "click",
    (e) => {
        const clickedItem = e.target
        if(clickedItem.id === "button"){
            for(const r of madResponses){
             return window.alert(`${r.response}`)
            }
         }
    }
)