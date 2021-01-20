import { makeStyles, Theme, createStyles } from "@material-ui/core";

//	modules
import * as OrigStylesModule from "@src/client/assets/styles/origStyles";

//	classes
const origStylesClass = new OrigStylesModule.default();

/*-*-*-*-* Root *-*-*-*-*/
export const Root = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Root: {
				height: "100%",
				backgroundColor: origStylesClass.colorPicker("brandWhite"),
			},
		});
	})();

/*-*-*-*-* small : Root *-*-*-*-*/
export const RootSm = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Root: {
				height: "100%",
			},
		});
	})();

/*-*-*-*-* large : Root *-*-*-*-*/
export const RootLg = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Root: {
				height: "100%",
			},

			container: {
				height: "100%",
				display: "flex",
				flexDirection: "column",
				position: "relative",
			},

			contents: {
				flexGrow: 1,
				position: "relative",
				overflow: "hidden",
				flexBasis: "100%",
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
