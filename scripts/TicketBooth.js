const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

//event for rides
eventHub.addEventListener("click", clickEvent =>{
    if(clickEvent.target.id === "rideTicket"){
        const ticketPurchased = clickEvent.target.value
       const rideEvent = new CustomEvent("rideTicketPurchased", {
           detail: {
               ticket: ticketPurchased
           }
       })
    eventHub.dispatchEvent(rideEvent)   
    }   
})

//event for tickets
eventHub.addEventListener("click", clickEvent =>{
    if(clickEvent.target.id === "gameTicket"){
       
       const gameEvent = new CustomEvent("gameTicketPurchased", {
           detail: {
               ticket: clickEvent.target.value
           }
       })
    eventHub.dispatchEvent(gameEvent)   
    }   
})


//event for food
eventHub.addEventListener("click", clickEvent =>{
    if(clickEvent.target.id === "foodTicket"){
       
       const foodEvent = new CustomEvent("foodTicketPurchased", {
           detail: {
               ticket: clickEvent.target.value
           }
       })
    eventHub.dispatchEvent(foodEvent)   
    }   
})

//event for sideshow
eventHub.addEventListener("click", clickEvent =>{
    if(clickEvent.target.id === "sideshowTicket"){
       
       const sideshowEvent = new CustomEvent("sideshowTicketPurchased", {
           detail: {
               ticket: clickEvent.target.value
           }
       })
    eventHub.dispatchEvent(sideshowEvent)   
    }   
})

//event for full package ticket 
eventHub.addEventListener("click", clickEvent =>{
    if(clickEvent.target.id === "fullPackageTicket"){
       
       const fullPackageEvent = new CustomEvent("fullPackageTicketPurchased", {
           detail: {
               ticket: clickEvent.target.value
           }
       })
    eventHub.dispatchEvent(fullPackageEvent)   
    }   
})

//display three buttons
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

