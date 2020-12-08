const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

//listening for the custom event to place colored squares on DOM
export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", event => {
        console.log("food event listening")
        //In the body of the event listener callback function, 
        // add a new <div> element to the content target that has 
        // the correct classes on it. 
        contentTarget.innerHTML += `<div class="person eater"></div>`
    })
}