export const DOMAIN = process.env.DOMAIN || "https://company.sopherre.com";

export default class {
	/*-*-*-*-* properties *-*-*-*-*/
	config = {
		DOMAIN_CLIENT_WWW:
			process.env["DOMAIN_CLIENT_WWW"] || "https://www.sopherre.com",
		MONGO_URI: process.env["MONGO_URI"] || "",
	};

	/*-*-*-*-* constructor *-*-*-*-*/
	constructor() {}

	/*-*-*-*-* methods *-*-*-*-*/
}
