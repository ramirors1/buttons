import { sendRequest } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userAttendees = document.querySelector("input[name='attendees']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userDate = document.querySelector("input[name='date']").value
        const userLength = document.querySelector("input[name='length']").value
 


        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            attendees: userAttendees,
            address: userAddress,
            date: userDate,
            length: userLength 
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})

export const RequestForm = () => {
    let html =  `
    <div class="field">
        <label class="label" for="parentName">Parent Name</label>
        <input type="text" name="parentName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="childName">Child Name</label>
        <input type="text" name="childName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="attendees">Attendees</label>
        <input type="number" name="attendees" class="input" />
    </div>
    <div class="field">
        <label class="label" for="address">Address</label>
        <input type="text" name="address" class="input" />
    </div>
    <div class="field">
        <label class="label" for="date">Date</label>
        <input type="date" name="date" class="input" />
    </div>
    <div class="field">
        <label class="label" for="lenght">Length</label>
        <input type="number" name="length" class="input" />
    </div>

    <button class="button" id="submitRequest">Submit Request</button>
`
    return html
}