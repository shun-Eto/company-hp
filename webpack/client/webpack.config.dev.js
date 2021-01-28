const baseConfig = require("./webpack.config.base");
const merge = require("webpack-merge");
const webpack = require("webpack");

//	System Enviroment Variable
const DOMAIN_API = JSON.stringify("http://localhost:4000");
const DOMAIN_CLIENT_COMPANY = JSON.stringify("http://localhost:8080");
const DOMAIN_SERVER_COMPANY = JSON.stringify("http://localhost:3000");

const config = merge(baseConfig, {
	mode: "development",
	watch: true,
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				DOMAIN_API,
				DOMAIN_CLIENT_COMPANY,
				DOMAIN_SERVER_COMPANY,
			},
		}),
	],
});

module.exports = config;
