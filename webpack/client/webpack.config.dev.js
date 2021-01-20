const baseConfig = require("./webpack.config.base");
const merge = require("webpack-merge");
const webpack = require("webpack");

//	System Enviroment Variable
const DOMAIN = "http://localhost:3000";

const config = merge(baseConfig, {
    mode: "development",
    watch: true,
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.DOMAIN": JSON.stringify(DOMAIN),
        }),
    ],
});

module.exports = config;
