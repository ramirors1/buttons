const applicationState = {  //This module will manage the state of data, retrieve data from json database
    requests: []
         
}

const API = "http://localhost:8088"

export const fetchRequests = () => {  //exports and declares a function
    return fetch(`${API}/requests`)  //gets data from the json database, specifically the requests object
        .then(response => response.json())
        .then((
            Requests) => {
                // Store the external state in application state
                applicationState.requests = Requests  //requested data is stored in applicationState of requests
            }
        )
}

export const getRequests = () => {
    return [...applicationState.requests]
}

export const sendRequest = (userClownRequest) => {
    const fetchOptions = {
        method: "POST",  //post is used to post something to the database
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userClownRequest)
    }
    const mainContainer = document.querySelector("#container");

    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                const mainContainer = document.querySelector("#container");
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}