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
			Paper: {
				padding: theme.spacing(3, 6),
			},

			"children-text": {
				fontFamily: fontFamiPicker("basic"),
				fontWeight: "bold",
				margin: theme.spacing(1, 0),
				fontSize: fontSizePicker("md"),
				letterSpacing: 1.3,
			},
			"children-wrapper": {},
		});
	})();

export const InfoItem = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			InfoItem: {
				padding: theme.spacing(3, 0),
			},

			/*-*-*-*-* label *-*-*-*-*/
			label: {
				margin: theme.spacing(1, 0),
				paddingLeft: theme.spacing(1),
			},
			"label-Typography": {
				fontFamily: fontFamiPicker("basic"),
			},

			/*-*-*-*-* text *-*-*-*-*/
			text: {},
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
