const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

//listening for the custom event to place colored squares on DOM
export const SideshowTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", event => {
        console.log("sideshow event listening")
        //In the body of the event listener callback function, 
        // add a new <div> element to the content target that has 
        // the correct classes on it. 
        contentTarget.innerHTML += `<div class="person gawker"></div>`
    })
}