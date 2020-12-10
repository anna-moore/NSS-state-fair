// Import and invoke the ticket booth component function
import { GameTicketHolders } from "./games/GameTicketHolder.js"
import { RideTicketHolders } from "./rides/RideTicketHolders.js"
import { TicketBooth } from "./TicketBooth.js"
import { FoodTicketHolders } from "./food/FoodTicketHolder.js"
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolder.js"
import { FullPackageTicketHolders } from "./FullPackageTicket.js"
import { TicketCounter } from "./TicketCounter.js"

TicketBooth()
TicketCounter()
RideTicketHolders()
GameTicketHolders()
FoodTicketHolders()
SideshowTicketHolders()
FullPackageTicketHolders()