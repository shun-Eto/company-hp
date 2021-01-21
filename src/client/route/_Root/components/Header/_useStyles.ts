import { makeStyles, Theme, createStyles } from "@material-ui/core";

//	modules
import * as OrigStylesModule from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";

//	classes
const origStylesClass = new OrigStylesModule.default();
const colorPicker = origStylesClass.colorPicker;

/*-*-*-*-* Root *-*-*-*-*/
export const Root = (params: {}) =>
	makeStyles((theme: Theme) => {
		/*-*-*-*-* properties *-*-*-*-*/
		const {} = params;

		/*-*-*-*-* component *-*-*-*-*/
		return createStyles({
			AppBar: {
				background: colorPicker("brandBlack", 0.9),
				...origStylesClass.backdropFilter(),
			},
			Toolbar: {},
			Container: {
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
			},

			Logo: {
				height: 48,
				flexGrow: 1,
			},
			Menu: {},
		});
	})();

/*-*-*-*-* Logo *-*-*-*-*/
export const Logo = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Logo: {
				display: "inline-block",
				height: "100%",
				objectFit: "contain",
			},
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
