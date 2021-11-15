import { getRequests, deleteRequest } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    const mainContainer = document.querySelector("#container")

    mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

    let html = `
        <ul class = "requestClass">
            ${
                requests.map((request) => `
                <li class="requestClass_bullet">
                    <input type="radio" value=request--${request.id} name="request"> 
                    ${request.parentName} parent of
                    ${request.childName} has a party at
                    ${request.address} on
                    ${request.date}
                    <button class="request__delete"
                    id="request--${request.id}">
                    Deny
                    </button>
                </li>`
                ).join("")}
        </ul>`

    return html
}