import { makeStyles, Theme, createStyles } from "@material-ui/core";
import {
	basicStyles,
	basicColors,
} from "@src/client/assets/styles/basicStyles";
import { colorPicker } from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* Item *-*-*-*-*/
export const Item = (params: {}) =>
	makeStyles((theme: Theme) => {
		/*-*-*-*-* properties *-*-*-*-*/
		const {} = params;

		/*-*-*-*-* component *-*-*-*-*/
		return createStyles({
			Item: {},

			"Item-table": {
				tableLayout: "fixed",
			},
			"Item-tableHead": {
				visibility: "collapse",
				height: 0,
			},
			"Item-tableBody": {
				borderTop: `solid 2px ${colorPicker("gray", 0.5)}`,
			},

			"Item-checkbox": {},
			"Item-checkbox-label": {
				fontSize: basicStyles["fontSize-sm"],
			},
			"Item-checkbox-label-root": {
				margin: 0,
			},
		});
	})();

export const StyledTextField = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			input: {
				padding: theme.spacing(0.4, 0.5),
			},
			multiline: {
				padding: theme.spacing(0),
			},
		});
	})();

export const StyledCheckbox = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			"FormControlLabel-root": {
				margin: 0,
			},
			"FormControlLabel-label": {
				fontSize: basicStyles["fontSize-sm"],
			},
			Checkbox: {
				padding: theme.spacing(0.5),
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
