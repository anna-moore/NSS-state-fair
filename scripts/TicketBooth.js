const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

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



export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
        </div>
    `
}

