import { makeStyles, Theme, createStyles } from "@material-ui/core";

//	modules
import * as OrigStylesModule from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";

//	classes
const origStylesClass = new OrigStylesModule.default();
const { colorPicker, fontFamiPicker, fontSizePicker } = origStylesClass;

/*-*-*-*-* Root *-*-*-*-*/
export const Root = (params: {}) =>
	makeStyles((theme: Theme) => {
		/*-*-*-*-* properties *-*-*-*-*/
		const {} = params;

		/*-*-*-*-* component *-*-*-*-*/
		return createStyles({
			Root: {
				padding: theme.spacing(0.5, 1),
				background: colorPicker("brandWhite", 0.5),
				...origStylesClass.backdropFilter(),
				textShadow: origStylesClass["textShadow-color"](
					colorPicker("brandWhite")
				),
			},

			Copyright: {
				textAlign: "center",
				margin: theme.spacing(0.5, 0),
			},

			Links: {
				textAlign: "center",
				margin: theme.spacing(0.5, 0),
			},
		});
	})();

export const Copyright = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Typography: {
				fontFamily: fontFamiPicker("basic"),
				color: colorPicker("brandBlack", 1),
			},
			"Typography-faIcon": {
				margin: theme.spacing(0, 1),
				filter: origStylesClass.dropShadow(colorPicker("white")),
			},
		});
	})();

export const OrigLink = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Link: {
				margin: theme.spacing(0, 2),
				fontSize: fontSizePicker("sm"),
				color: colorPicker("brandBlack", 0.8),
				cursor: "pointer",
				transition: "color 0.5s",
				fontFamily: fontFamiPicker("basic"),
				"&:hover": {
					color: colorPicker("brandBlack", 1),
					textDecoration: "underline",
					textUnderlineOffset: "2px",
				},
			},

			"Link-faIcon": {
				marginRight: theme.spacing(0.5),
				filter: origStylesClass.dropShadow(colorPicker("white")),
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
