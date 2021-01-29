import { makeStyles, Theme, createStyles } from "@material-ui/core";

//	modules
import * as OrigStylesModule from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";

//	classes
const origStyles = new OrigStylesModule.default();
const { fontFamiPicker, fontSizePicker, colorPicker } = origStyles;

/*-*-*-*-* Item *-*-*-*-*/
export const Item = (params: {}) =>
	makeStyles((theme: Theme) => {
		/*-*-*-*-* properties *-*-*-*-*/
		const {} = params;

		/*-*-*-*-* component *-*-*-*-*/
		return createStyles({
			Item: {
				textAlign: "center",
			},

			"item-root": {
				margin: theme.spacing(2, 0),
				position: "relative",
			},
			"item-input": {
				backgroundColor: "white",
				textAlign: "left",
				"&:focus": {
					backgroundColor: "white",
				},
			},
			"item-countLabel": {
				position: "absolute",
				top: 0,
				right: 0,
				transform: "translate(-10%,-120%)",
				fontSize: fontSizePicker("sm"),
			},

			submit: {
				marginTop: theme.spacing(4),
				minWidth: 200,
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
