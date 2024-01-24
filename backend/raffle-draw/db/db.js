const Ticket = require("../models/Ticket");
const { readFile, writeFile } = require("../utils");

class MyDB {
	#tickets;

	constructor() {
		(async () => {
			this.#tickets = await readFile();
		})();
	}

	/**
	 * create and save a new ticket
	 * @param {string} username
	 * @param {number} price
	 * @returns {Ticket} return a ticket object
	 */
	create(username, price) {
		const ticket = new Ticket(username, price);
		this.#tickets.push(ticket);
		writeFile(this.#tickets);
		return ticket;
	}

	/**
	 * create multiple ticket for a single user
	 * @param {string} username
	 * @param {number} price
	 * @param {number} quantity
	 * @returns {[Ticket]} returns array of ticket
	 */
	createBulk(username, price, quantity) {
		const result = [];
		for (let i = 0; i < quantity; i++) {
			const ticket = this.create(username, price);
			result.push(ticket);
		}
		writeFile(this.#tickets);
		return result;
	}

	/**
	 * return all available tickets
	 */
	find() {
		return this.#tickets;
	}

	/**
	 * find ticket by ticket id
	 * @param {string} ticketId
	 * @returns {Ticket} ticket
	 */
	findById(ticketId) {
		const ticket = this.#tickets.find(
			/**
			 * @param {Ticket} ticket
			 */
			(ticket) => ticket.id === ticketId
		);
		return ticket;
	}

	/**
	 * find tickets by username for a given user
	 * @param {string} username
	 * @returns {[Ticket]}
	 */
	findByUsername(username) {
		const tickets = this.#tickets.filter(
			/**
			 * @param {Ticket} ticket
			 */
			(ticket) => ticket.username === username
		);
		return tickets;
	}

	/**
	 * @param {string} ticketId
	 * @param {{username: string, price: number}} ticketBody
	 * @returns {Ticket|null} Updated ticket or null if not found
	 */
	updateById(ticketId, ticketBody) {
		const ticket = this.findById(ticketId);

		if (!ticket) {
			console.error(`Ticket with ID ${ticketId} not found.`);
			return null; // or throw an error based on your error handling strategy
		}

		ticket.username = ticketBody.username || ticket.username;
		ticket.price = ticketBody.price || ticket.price;
		ticket.updatedAt = new Date();

		writeFile(this.#tickets);
		return ticket;
	}

	/**
	 *
	 * @param {string} username
	 * @param {{username: string, price: number}} ticketBody
	 * @returns {Ticket[]}
	 */
	updateBulk(username, ticketBody) {
		const tickets = this.findByUsername(username);
		const updatedTickets = tickets.map(
			/**
			 * @param {Ticket} ticket
			 */
			(ticket) => {
				return this.updateById(ticket.id, ticketBody);
			}
		);
		// writeFile(this.#tickets);
		return updatedTickets;
	}

	/**
	 *
	 * @param {string} ticketId
	 * @returns {boolean}
	 */
	deleteById(ticketId) {
		const index = this.#tickets.findIndex(
			/**
			 * @param {Ticket} ticket
			 */
			(ticket) => ticket.id === ticketId
		);

		if (index !== -1) {
			this.#tickets.splice(index, 1);
			return true;
		} else {
			return false;
		}
	}

	deleteBulk(username) {
		const tickets = this.findByUsername(username);
		const deletedResult = tickets.map(
			/**
			 * @param {Ticket} ticket
			 */
			(ticket) => this.deleteById(ticket.id)
		);

		return deletedResult;
	}

	/**
	 *
	 * @param {number} winnerCount
	 * @returns {Ticket[]}
	 */
	draw(winnerCount) {
		// let indexes = new Array(winnerCount);
		// for (let i = 0; i < indexes.length; i++) {
		// 	let index = Math.floor(Math.random() * this.#tickets.length);

		// 	indexes[i] = index;
		// }

		let winnerIndexes = new Array(winnerCount);
		let index = 0;
		while (index < winnerCount) {
			let winnerIndex = Math.floor(Math.random() * this.#tickets.length);
			// console.log('winner index', winnerIndex);
			if (!winnerIndexes.includes(winnerIndex)) {
				winnerIndexes[index++] = winnerIndex;
				continue;
			}
		}

		const winners = winnerIndexes.map((index) => this.#tickets[index]);
		return winners;
	}
}

const myDB = new MyDB();
module.exports = myDB;
