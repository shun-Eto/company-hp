import express from "express";
import http from "http";
import rootDir from "app-root-path";

/*-*-*-*-* use *-*-*-*-*/
const app = express();

/*-*-*-*-* Client Server Routing *-*-*-*-*/
app.get("/bundle.js", (req, res, next) => {
	return res.sendFile(rootDir + "/dist/client/bundle.js");
});
app.get("/favicon.png", (req, res, next) => {
	return res.sendFile(rootDir + "/dist/client/favicon.png");
});
app.get("*", (req, res) => {
	const proto = req.headers["x-forwarded-proto"];
	const domain = process.env["DOMAIN_CLIENT_WWW"];
	const url = req.url;
	if (proto !== "https") {
		//	redirect to https
		return res.redirect(`${domain}${url}`);
	} else {
		return res.sendFile(rootDir + "/dist/client/index.html");
	}
});

/*-*-*-*-* listen *-*-*-*-*/
//	socket
const server: http.Server = http.createServer(app);
//	server
const port = process.env.PORT || 8000;
server.listen(port, () => {
	console.log(`listening on ( local ) * localhost:${port}`);
});

/*-*-*-*-* default *-*-*-*-*/
export default app;
