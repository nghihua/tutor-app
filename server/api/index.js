const router = require("express").Router();

const user = require("./user");
const auth = require("./auth");

router.use("/auth", auth);
router.use("/user", user);

module.exports = router;