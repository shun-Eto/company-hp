import { makeStyles, Theme, createStyles } from "@material-ui/core";

//	types
import * as EnvTypes from "@src/types/environment";

import * as OrigStylesModule from "@src/client/assets/styles/origStyles";

const origStyles = new OrigStylesModule.default();
const { fontFamiPicker } = origStyles;

/*-*-*-*-* Basic *-*-*-*-*/
export const Basic = (params: { origTheme?: EnvTypes.Theme }) =>
	makeStyles((theme: Theme) => {
		/*-*-*-*-* properties *-*-*-*-*/
		const { origTheme } = params;

		/*-*-*-*-* component *-*-*-*-*/
		return createStyles({
			Basic: {
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				height: "100%",
			},

			"Basic-container": {
				flexGrow: 1,
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
			},
			"Basic-wrapper": {
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			},

			/*-*-*-*-* icon *-*-*-*-*/
			"Basic-icon": {
				position: "relative",
				height: 50,
				width: 50,
				display: "inline-block",
			},
			"icon-img": {
				display: "block",
				height: "100%",
				objectFit: "contain",
				animation: "$bound-anim 0.8s infinite",
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50% , -50%)",
				color: origTheme?.color ? origTheme.color : "unset",
			},
			"icon-faIcon": {
				display: "block",
				height: "100%",
				objectFit: "contain",
				animation: "$bound-anim 0.8s infinite",
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50% , -50%)",
				color: origTheme?.color ? origTheme.color : "unset",
			},
			"@keyframes bound-anim": {
				"0%": { top: "50%", transform: "translate(-50%,-50%) scale(1)" },
				"30%": { top: "30%" },
				"50%": { top: "50%", transform: "translate(-50%,-50%) scale(1)" },
				"90%": { top: "50%", transform: "translate(-50%,-50%) scale(1.1,0.8)" },
				"100%": { top: "50%", transform: "translate(-50%,-50%) scale(1)" },
			},

			/*-*-*-*-* label *-*-*-*-*/
			"Basic-label": {
				marginTop: theme.spacing(1),
				fontFamily: fontFamiPicker("basic"),
			},

			/*-*-*-*-* linear *-*-*-*-*/
			"Basic-linear": {
				width: "100%",
				backgroundColor: origTheme?.bgColor && origTheme?.bgColor,
			},
			"linear-bar1Indeterminate": {
				backgroundColor: origTheme?.color && origTheme.color,
			},
			"linear-bar2Indeterminate": {
				backgroundColor: origTheme?.color && origTheme.color,
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
