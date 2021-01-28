import express, { Request } from "express";
import http from "http";
import rootDir from "app-root-path";

//	cors
import cors from "./assets/modules/cors";

//	modules
import * as EnvModule from "@src/server/assets/modules/enviroment";

//	assets

//	classes
const envClass = new EnvModule.default();

/********** use **********/
const app = express();
app.use("/static", express.static(rootDir + "/dist/public/"));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());
app.use(express.json({ limit: "50mb" }));

//	redirect https
app.get("*", function (req, res, next) {
	console.log("test");
	const protocol = req.headers["x-forwarded-proto"];
	const hostname = req.hostname;
	if (protocol != "https" && hostname !== "localhost")
		res.redirect(envClass.config.DOMAIN_CLIENT_WWW + req.url);
	else next();
});

/********** Client Server Routing **********/
app.get("/bundle.js", (req, res, next) => {
	return res.sendFile(rootDir + "/dist/client/bundle.js");
});
app.get("/favicon.png", (req, res, next) => {
	return res.sendFile(rootDir + "/dist/client/favicon.png");
});
//	server 以外の GET
app.get(/^(?!\/server).*$/, (req, res, next) =>
	res.sendFile(rootDir + "/dist/client/index.html")
);

/*-*-*-*-* Server Routing *-*-*-*-*/
import * as contactRouter from "./routes/contact/index";
app.use("/contact", contactRouter.default);

/********** listen **********/
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, () => {
	console.log(`Success Connected Server : port ==> ${port}`);
});

/********** default **********/
export default app;
