//querySelectorAll creates an array 
const contentTarget = document.querySelectorAll(".people")
const eventHub = document.querySelector("#state-fair")

//listening for the custom event to place colored squares on DOM
export const FullPackageTicketHolders = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", event => {
        console.log("full package event listening")
        console.log(contentTarget)
        //In the body of the event listener callback function, 
        // add a new <div> element to the content target that has 
        // the correct classes on it. 
        //loop over all four categories
        for(let element of contentTarget ){
            element.innerHTML += `<div class="person bigSpender"></div>`
        }
        
    })
}