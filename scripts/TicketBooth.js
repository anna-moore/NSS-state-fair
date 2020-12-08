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

//display three buttons
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
        </div>
    `
}

