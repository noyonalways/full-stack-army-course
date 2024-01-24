const router = require("express").Router();
const { findTicketByTicketId, updateTicketByTicketId, deleteTicketByTicketId, findTicketsByUsername, updateTicketsByUsername, deleteTicketsByUsername, createATicket, createBulkTicket, drawWinners, findAllTickets } = require("../controllers/ticket.controller");


router
	.route("/t/:ticketId")
	.get(findTicketByTicketId)
	.patch(updateTicketByTicketId)
	.delete(deleteTicketByTicketId);

router
	.route("/u/:username")
	.get(findTicketsByUsername)
	.patch(updateTicketsByUsername)
	.delete(deleteTicketsByUsername);

router.post("/sell", createATicket);
router.post("/bulk-sell", createBulkTicket);
router.get("/draw", drawWinners);
router.get("/", findAllTickets);

module.exports = router;
