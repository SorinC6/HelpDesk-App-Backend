const router = require("express").Router();
const responseStatus = require("../config/responseStatuses");
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

module.exports = router;
