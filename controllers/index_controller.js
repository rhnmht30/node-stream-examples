require("dotenv").config();
const fs = require("fs");

module.exports.index = (req, res) => {
	fs.exists("public/big.file", exists => {
		if (!exists) {
			const file = fs.createWriteStream("public/big.file");

			for (let i = 0; i <= 200000; i++) {
				file.write(
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n"
				);
			}

			file.end();
		}
	});
	return res.json({
		message: "Welcome to API! A file has been created in public folder",
		downloadFile: {
			withoutStream: `http://${req.headers.host}/api/v1/file/withoutStream`,
			withStream: `http://${req.headers.host}/api/v1/file/withStream`
		}
	});
};
