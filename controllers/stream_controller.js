const fs = require("fs");

module.exports.fileWithoutStream = (req, res) => {
	fs.readFile("public/big.file", (err, data) => {
		if (err) throw err;
		res.end(data);
		// res.json({ message: "A file will be served as a whole chunk!" }, data);
	});
};

module.exports.fileWithStream = (req, res) => {
	const src = fs.createReadStream("public/big.file");
	src.pipe(res);
	// res.json({ message: "A file will be served as a stream of chunks" });
};
