import { makeStyles, Theme, createStyles } from "@material-ui/core";
import {
	basicStyles,
	basicColors,
} from "@src/client/assets/styles/basicStyles";
import { colorPicker } from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* Item *-*-*-*-*/
export const Item = (params: { origTheme?: EnvTypes.Theme }) =>
	makeStyles((theme: Theme) => {
		/*-*-*-*-* properties *-*-*-*-*/
		const { origTheme } = params;

		/*-*-*-*-* component *-*-*-*-*/
		return createStyles({
			Item: {
				width: "100%",
				textAlign: "center",
				height: "100%",
				display: "inline-block",
			},

			"Item-input": {
				fontSize: basicStyles.fontSize,
				textAlign: "center",
				border: `solid 1px ${colorPicker("gray-400")}`,
				borderRadius: theme.shape.borderRadius,
				...origTheme,
			},
			"Item-wrapper": {},
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
