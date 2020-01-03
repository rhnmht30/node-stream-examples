const express = require("express");
const router = express.Router();

const { index } = require("./../../../controllers/index_controller");
const { catchErrors } = require("./../../../config/errorHandler");

router.get("/", catchErrors(index));

module.exports = router;
