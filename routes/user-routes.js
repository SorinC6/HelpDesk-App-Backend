const router = require("express").Router();
const bcrypt = require("bcryptjs");

const dbHelpers = require("../models/userHelper");

router.get("/users", async (req, res) => {
  try {
    const users = await dbHelpers.getAllUsers();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: "error trying to get the users" });
  }
});

module.exports = router;
