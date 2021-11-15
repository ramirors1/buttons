import { Requests } from "./Requests.js"
import { RequestForm } from "./RequestForm.js"

export const Buttons = () => {
    return `
    <h1>Buttons the Clown</h1>
    <section class="RequestForm">
    ${RequestForm()}
    </section>

    <section class="Request">
        <h2>Requests</h2>
        ${Requests()}
    </section>
    `
}