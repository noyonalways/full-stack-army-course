const router = require("express").Router();

router.use("/api/v1/tickets", require("../routes/ticket.route"));

router.get("/health", (_req, res) => {
	res.status(200).json({ message: "Success" });
});

router.get("/", (_req, res) => {
	res.status(200).json({ message: "Home Route" });
});

module.exports = router;
