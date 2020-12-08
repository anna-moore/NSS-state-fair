const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

//listening for the custom event to place colored squares on DOM
export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", event => {
        console.log("ride event listening")
        //In the body of the event listener callback function, 
        // add a new <div> element to the content target that has 
        // the correct classes on it. 
        contentTarget.innerHTML += `<div class="person rider"></div>`
    })
}

