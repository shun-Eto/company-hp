import cors from "cors";

const options: cors.CorsOptions = {
	allowedHeaders: [
		"Origin",
		"X-Requested-With",
		"Content-Type",
		"Accept",
		"X-Access-Token",
	],
	credentials: true,
	methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
	origin: process.env["DOMAIN_CLIENT_WWW"],
	preflightContinue: false,
};

export default () => {
	return cors(options);
};
