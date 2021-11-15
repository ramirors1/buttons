import { Buttons } from "./Buttons.js"
import { fetchRequests } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
    .then(  //an argument for a .then will always be a function
        () => {
    mainContainer.innerHTML = Buttons()
        }
    )
}
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
render()

