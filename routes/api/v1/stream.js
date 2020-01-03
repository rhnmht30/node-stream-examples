const router = require("express").Router();

const {
	fileWithStream,
	fileWithoutStream
} = require("./../../../controllers/stream_controller");
const { catchErrors } = require("./../../../config/errorHandler");

router.get("/withoutStream", catchErrors(fileWithoutStream));
router.get("/withStream", catchErrors(fileWithStream));

module.exports = router;
