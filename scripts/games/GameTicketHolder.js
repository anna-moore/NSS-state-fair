const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

//listening for the custom event to place colored squares on DOM
export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", event => {
        console.log("game event listening")
        //In the body of the event listener callback function, 
        // add a new <div> element to the content target that has 
        // the correct classes on it. 
        contentTarget.innerHTML += `<div class="person player"></div>`
    })
}