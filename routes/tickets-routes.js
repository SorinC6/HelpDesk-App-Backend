const router = require("express").Router();
const { responseStatus } = require("error-express-handler");
const restricted = require("../middleware/restrictedRoute");
const validRole = require("../middleware/roleCheck");
const dbHelpers = require("../models/ticketHelpers");
const validSchema = require("../middleware/validate");

//POST
router.get(
  "/tickets",
  restricted,
  validRole([1, 2, 3]),
  async (req, res, next) => {
    try {
      const result = await dbHelpers.getTicket();
      res.status(responseStatus.successful).json({ result });
    } catch (error) {
      next(responseStatus.serverError);
    }
  }
);

router.post("/tickets", restricted, async (req, res, next) => {
  const ticket = req.body;
  try {
    const [id] = await dbHelpers.addTicket(ticket);
    if (id) {
      const newTicket = await dbHelpers.getTicket(id);
      res.status(responseStatus.successful).json(newTicket);
    } else {
      next(responseStatus.notFound);
    }
  } catch (error) {
    next(responseStatus.serverError);
  }
});

module.exports = router;
