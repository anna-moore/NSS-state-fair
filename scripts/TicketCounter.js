// This is a module-level variable. It is not scoped to a function
const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")


let ticketSales = 0
//read event for every ticket purchased
//create ticket counter
// update ticket counter after every event recieve 

export const TicketCounter = () =>{
    eventHub.addEventListener("anyButtonClicked", event =>{
        console.log("button is listening")
        
        ticketSales++
        contentTarget.innerHTML = `Total tickets purchased: ${ticketSales}`
    })
}