const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

//event for rides
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "purchase--rideTicket") {

        const rideEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                ticket: clickEvent.target.value
            }
        })
        eventHub.dispatchEvent(rideEvent)
    }
})

//event for tickets
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "purchase--gameTicket") {

        const gameEvent = new CustomEvent("gameTicketPurchased", {
            detail: {
                ticket: clickEvent.target.value
            }
        })
        eventHub.dispatchEvent(gameEvent)
    }
})


//event for food
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "purchase--foodTicket") {

        const foodEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                ticket: clickEvent.target.value
            }
        })
        eventHub.dispatchEvent(foodEvent)
    }
})

//event for sideshow
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "purchase--sideshowTicket") {

        const sideshowEvent = new CustomEvent("sideshowTicketPurchased", {
            detail: {
                ticket: clickEvent.target.value
            }
        })
        eventHub.dispatchEvent(sideshowEvent)
    }
})

//event for full package ticket 
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "purchase--fullPackageTicket") {

        const fullPackageEvent = new CustomEvent("fullPackageTicketPurchased", {
            detail: {
                ticket: clickEvent.target.value
            }
        })
        eventHub.dispatchEvent(fullPackageEvent)
    }
})

//event for any button clicked, ticket count
eventHub.addEventListener("click", e => {
    //guard 
    if (!e.target.classList.contains("btn")) {
        return
    }
    //ticket counter to be passed
    let ticketCount = 1
    // however is id is full package updating tocket count 
    if (e.target.id === "purchase--fullPackageTicket") {
        ticketCount = 4
    }
    //key contains amount of tickets purchased
    const ticketEvent = new CustomEvent("anyButtonClicked", {
        detail: {
            ticketSale: ticketCount
        }
    })
    //dispath the number in the counter (ticketCount)
    eventHub.dispatchEvent(ticketEvent)
})

//display five buttons
//addinged class of btn for guarding statement in line 73
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button class="btn" id="purchase--rideTicket">Ride Ticket</button>
            <button class="btn" id="purchase--foodTicket">Food Ticket</button>
            <button class="btn" id="purchase--gameTicket">Game Ticket</button>
            <button class="btn" id="purchase--sideshowTicket">Sideshow Ticket</button>
            <button class="btn" id="purchase--fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

