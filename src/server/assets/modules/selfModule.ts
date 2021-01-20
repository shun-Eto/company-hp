import { NextFunction, Request, Response } from "express";

//  api
import * as MongoModule from "@src/server/api/Mongo/mongoModule";

//  modules
import * as EnvModule from "@src/server/assets/modules/enviroment";
import * as OrigModule from "@src/server/assets/modules/origModule";

//	assets

//	types

//  classes
const envClass = new EnvModule.default();
const mongoClass = new MongoModule.default("assets", "selfModule");
const origClass = new OrigModule.default();

interface Detail {
	fullUrl?: string;
	title?: string;
	description?: string;
	imgPath?: string;
	type?: "website" | "blog" | "article" | "product";
}

//  class
export default class {
	/*-*-*-*-* properties *-*-*-*-*/

	/*-*-*-*-* constructor *-*-*-*-*/
	constructor() {}

	/*-*-*-*-* methods *-*-*-*-*/
}
