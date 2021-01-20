import { makeStyles, Theme, createStyles } from "@material-ui/core";

//	modules
import * as OrigStylesModule from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";

//	classes
const origStylesClass = new OrigStylesModule.default();

/*-*-*-*-* small *-*-*-*-*/
export const ItemSm = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Item: {},
		});
	})();

/*-*-*-*-* large *-*-*-*-*/
export const ItemLg = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Item: {},
		});
	})();
/*
export const Root = (params: {}) =>
    makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Root: {},
		});
    })();
*/
