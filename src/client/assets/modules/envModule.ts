export default class {
	/*-*-*-*-* properties *-*-*-*-*/
	config = {
		DOMAIN_API: process.env["DOMAIN_API"] || "https://api.sopherre.com",
		DOMAIN_CLIENT_COMPANY:
			process.env["DOMAIN_CLIENT_COMPANY"] || "https://company.sopherre.com",
		DOMAIN_SERVER_COMPANY:
			process.env["DOMAIN_SERVER_COMPANY"] ||
			"https://company-server.sopherre.com",
	};

	/*-*-*-*-* constructor *-*-*-*-*/
	constructor() {}

	/*-*-*-*-* methods *-*-*-*-*/
}
