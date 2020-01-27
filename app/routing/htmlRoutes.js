var path = require("path");

module.exports = function(app) {
	// shows survey page
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	// fallback homepage 
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};