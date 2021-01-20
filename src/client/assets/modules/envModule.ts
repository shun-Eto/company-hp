export default class {
	/*-*-*-*-* properties *-*-*-*-*/
	config = {
		DOMAIN_API: process.env["DOMAIN_API"] || "https://api.sopherre.com",
		DOMAIN_CLIENT_WWW:
			process.env["DOMAIN_CLIENT_WWW"] || "https://www.sopherre.com",
		DOMAIN_SERVER_SOPHERRE:
			process.env["DOMAIN_SERVER_SOPHERRE"] ||
			"https://www-server.sopherre.com",
	};

	/*-*-*-*-* constructor *-*-*-*-*/
	constructor() {}

	/*-*-*-*-* methods *-*-*-*-*/
}
