const baseConfig = require("./webpack.config.base");
const merge = require("webpack-merge");
const webpack = require("webpack");

//	System Environment Variable
const DOMAIN_CLIENT_WWW = JSON.stringify("http://localhost:8080");
const MONGO_URI = JSON.stringify(
	"mongodb+srv://shun:Shun_831510@sopherre.hrdc0.mongodb.net/Sopherre"
);

//	config
const config = merge(baseConfig, {
	mode: "development",
	watch: true,
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				DOMAIN_CLIENT_WWW,
				MONGO_URI,
			},
		}),
	],
});

module.exports = config;
