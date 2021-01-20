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
			Item: {
				display: "flex",
				flexDirection: "row",
				alignItems: "flex-end",
			},

			/*-*-*-*-* label *-*-*-*-*/
			"Item-label": {
				flexGrow: 1,
			},
			"label-subTitle": {
				fontSize: basicStyles["fontSize-sm"],
			},
			"label-title": {
				fontSize: basicStyles["fontSize-md"],
				fontWeight: "bold",
				color: colorPicker("gray-800"),
			},

			/*-*-*-*-* actions *-*-*-*-*/
			"Item-action": {
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
			},
			"action-label": {
				margin: theme.spacing(0, 0.5),
			},
			"action-FormControlLabel": {
				margin: theme.spacing(0, 0.5),
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
