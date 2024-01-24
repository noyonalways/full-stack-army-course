const db = require("../db/db");

exports.findTicketByTicketId = (req, res) => {
	const { ticketId } = req.params;
	const ticket = db.findById(ticketId);
	res.status(200).json(ticket);
};

exports.updateTicketByTicketId = (req, res) => {
	const { ticketId } = req.params;
	const updatedTicket = db.updateById(ticketId, req.body);
	res
		.status(200)
		.json({ message: "Ticket updated successfully", updatedTicket });
};

exports.deleteTicketByTicketId = (req, res) => {
	const { ticketId } = req.params;
	db.deleteById(ticketId);
	res.status(203).send();
};

exports.findTicketsByUsername = (req, res) => {
	const { username } = req.params;
	const tickets = db.findByUsername(username);
	res.status(200).json({ total: tickets.length, data: tickets });
};

exports.updateTicketsByUsername = (req, res) => {
	const { username } = req.params;
	const updatedTickets = db.updateBulk(username, req.body);
	res.status(200).json(updatedTickets);
};

exports.deleteTicketsByUsername = (req, res) => {
	const { username } = req.params;
	db.deleteBulk(username);
	res.status(203).send();
};

exports.createATicket = (req, res) => {
	const { username, price } = req.body;
	const ticket = db.create(username, price);
	res.status(201).json({ message: "Ticket created successfully", ticket });
};

exports.createBulkTicket = (req, res) => {
	const { username, price, quantity } = req.body;
	const tickets = db.createBulk(username, price, quantity);
	res
		.status(201)
		.json({ message: "Bulk Ticket created successfully", tickets });
};

exports.drawWinners = (req, res) => {
	const winnerCount = req.query.wc || 3;
	const winners = db.draw(winnerCount);
	res.status(200).json(winners);
};

exports.findAllTickets = (_req, res) => {
	const tickets = db.find();
	res.status(200).json({ total: tickets.length, data: tickets });
};
