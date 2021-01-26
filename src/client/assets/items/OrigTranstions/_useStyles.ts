import { makeStyles, Theme, createStyles } from "@material-ui/core";

//	modules
import * as OrigStylesModule from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";

//	classes
const origStyles = new OrigStylesModule.default();
const { colorPicker, fontFamiPicker, fontSizePicker } = origStyles;

/*-*-*-*-* Item *-*-*-*-*/
export const Item = (params: {}) =>
	makeStyles((theme: Theme) => {
		/*-*-*-*-* properties *-*-*-*-*/
		const {} = params;

		/*-*-*-*-* component *-*-*-*-*/
		return createStyles({
			Item: {},
		});
	})();

/*-*-*-*-* SlideLeft *-*-*-*-*/
export const SlideLeft = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			SlideLeft: {},
			container: {
				height: "100%",
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
			},
			wrapper: {
				width: "100%",
				lineHeight: 1,
				textAlign: "center",
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
