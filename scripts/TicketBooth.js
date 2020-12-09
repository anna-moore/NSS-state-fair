const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

//event for rides
eventHub.addEventListener("click", clickEvent =>{
    if(clickEvent.target.id === "purchase--rideTicket"){
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
    if(clickEvent.target.id === "purchase--gameTicket"){
       
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
    if(clickEvent.target.id === "purchase--foodTicket"){
       
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
    if(clickEvent.target.id === "purchase--sideshowTicket"){
       
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
    if(clickEvent.target.id === "purchase--fullPackageTicket"){
       
       const fullPackageEvent = new CustomEvent("fullPackageTicketPurchased", {
           detail: {
               ticket: clickEvent.target.value
           }
       })
    eventHub.dispatchEvent(fullPackageEvent)   
    }   
})

eventHub.addEventListener("click", e =>{
    if(e.target.id.startsWith("purchase")){
        
        const ticketEvent = new CustomEvent ("anyButtonClicked",{
                detail:{
                    anyButton: e.target.value
                }
        })
       eventHub.dispatchEvent(ticketEvent) 
       console.log(e.target.value)
    }
    
})

//display three buttons
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="purchase--rideTicket">Ride Ticket</button>
            <button id="purchase--foodTicket">Food Ticket</button>
            <button id="purchase--gameTicket">Game Ticket</button>
            <button id="purchase--sideshowTicket">Sideshow Ticket</button>
            <button id="purchase--fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

