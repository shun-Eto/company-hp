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
		});
	})();

/*-*-*-*-* Basic *-*-*-*-*/
export const Basic = (params: { origTheme?: EnvTypes.Theme }) =>
	makeStyles((theme: Theme) => {
		const { origTheme } = params;

		return createStyles({
			Basic: {
				display: "inline-block",
				padding: theme.spacing(0.5, 1.5),
				border: `solid 1px ${colorPicker("gray-300")}`,
				borderRadius: theme.shape.borderRadius,
				fontSize: basicStyles["fontSize-sm"],
				margin: theme.spacing(0.5),
				maxWidth: "100%",
				...origTheme,
				...basicStyles.ellipsis(),
				backgroundColor: origTheme?.bgColor ? origTheme.bgColor : "unset",
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
