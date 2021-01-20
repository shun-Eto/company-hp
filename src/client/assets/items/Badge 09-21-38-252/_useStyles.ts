import { makeStyles, Theme, createStyles } from "@material-ui/core";
import {
	basicStyles,
	basicColors,
} from "@src/client/assets/styles/basicStyles";
import { colorPicker } from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* Badge *-*-*-*-*/
export const Badge = (params: { origTheme?: EnvTypes.Theme }) =>
	makeStyles((theme: Theme) => {
		/*-*-*-*-* properties *-*-*-*-*/
		const { origTheme } = params;

		/*-*-*-*-* component *-*-*-*-*/
		return createStyles({
			Badge: {},
			"Badge-faIcon": {
				color: origTheme?.iconColor
					? origTheme.iconColor
					: colorPicker("brandBlack"),
			},
			"label-rightButton": {
				position: "absolute",
				bottom: 5,
				right: 8,
				transform: "translate(100%, 100%)",
				fontSize: basicStyles["fontSize-xs"],
				padding: theme.spacing(0.5),
				borderRadius: theme.shape.borderRadius,
				border: `solid 1px ${colorPicker("gray-300")}`,
				lineHeight: 1,
				fontWeight: "bolder",
				backgroundColor: origTheme?.bgColor ? origTheme.bgColor : "white",
				color: origTheme?.color ? origTheme.color : "unset",
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
