import { makeStyles, Theme, createStyles } from "@material-ui/core";
import {
	basicStyles,
	basicColors,
} from "@src/client/assets/styles/basicStyles";
import { colorPicker } from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* Item *-*-*-*-*/
export const Item = (params: { active: boolean }) =>
	makeStyles((theme: Theme) => {
		/*-*-*-*-* properties *-*-*-*-*/
		const { active } = params;

		/*-*-*-*-* component *-*-*-*-*/
		return createStyles({
			Item: {},

			/*-*-*-*-* label *-*-*-*-*/
			Item_Label: {},
			"Item_Label-label": {
				backgroundColor: active
					? colorPicker("blueGray-700")
					: colorPicker("blueGray-800"),
				color: active ? colorPicker("brandWhite") : "white",
				padding: theme.spacing(1.5, 2),
				borderRadius: theme.shape.borderRadius,
				borderBottomLeftRadius: 0,
				borderBottomRightRadius: 0,
				marginBottom: theme.spacing(0.5),
				fontSize: basicStyles["fontSize-sm"],
			},

			/*-*-*-*-* input *-*-*-*-*/
			"Item_Input-input": {
				marginTop: theme.spacing(0.5),
				borderRadius: theme.shape.borderRadius,
				borderTopLeftRadius: 0,
				borderTopRightRadius: 0,
				backgroundColor: "white",
				flexWrap: "wrap",
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
