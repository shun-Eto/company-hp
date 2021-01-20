import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import {
	basicStyles,
	basicColors,
} from "@src/client/assets/styles/basicStyles";
import { colorPicker } from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* Square *-*-*-*-*/
export const Square = (params: { width?: number }) =>
	makeStyles((theme: Theme) => {
		/*-*-*-*-* properties *-*-*-*-*/
		const { width } = params;
		const unitWidth = 120;
		const scale = width ? width / unitWidth : 1;
		const border = `solid 4px ${colorPicker("red-400")}`;

		const basicStampStyle: CSSProperties = {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "center",
			fontSize: 26,
			lineHeight: 1,
			fontFamily: "Roboto, Helvetica, Arial, sans-serif",
			color: colorPicker("red-400"),
			fontWeight: "bold",
		};

		/*-*-*-*-* component *-*-*-*-*/
		return createStyles({
			wrapper: {
				position: "relative",
				width: width ? width : unitWidth,
				height: width ? width : unitWidth,
				margin: "auto",
			},
			Square: {
				display: "flex",
				flexDirection: "column",
				backgroundColor: "white",
				width: unitWidth,
				height: unitWidth,
				position: "absolute",
				top: 0,
				left: 0,
				transform: `scale(${scale})`,
				transformOrigin: "top left",
				border: border,
				borderRadius: theme.shape.borderRadius * 6,
			},

			"Square-start": {
				flexGrow: 1,
				flexShrink: 0,
				flexBasis: "33%",
				...basicStampStyle,
			},
			"Square-center": {
				flexGrow: 1,
				flexShrink: 0,
				flexBasis: "33%",
				borderTop: border,
				borderBottom: border,
				...basicStampStyle,
			},
			"Square-end": {
				flexGrow: 1,
				flexShrink: 0,
				flexBasis: "33%",
				...basicStampStyle,
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
