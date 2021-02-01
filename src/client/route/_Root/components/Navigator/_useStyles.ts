import { makeStyles, Theme, createStyles, Hidden } from "@material-ui/core";

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
				textShadow: origStylesClass["textShadow-color"](
					colorPicker("brandWhite")
				),
				textAlign: "center",
				minHeight: 58,
			},
		});
	})();

export const NavigatorSm = (params: { active: boolean }) =>
	makeStyles((theme: Theme) => {
		const { active } = params;
		return createStyles({
			Navigator: {},
			staticTooltipLabel: {
				whiteSpace: "nowrap",
			},
			staticTooltipClosed: {},
			actions: {},
			actionsClosed: {
				height: 0,
			},
		});
	})();

export const NavigatorLg = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Navigator: {
				minHeight: 58,
				padding: theme.spacing(0.5, 1),
				textShadow: origStylesClass["textShadow-color"](
					colorPicker("brandWhite")
				),
				textAlign: "center",
			},
		});
	})();

export const NavItem = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			ButtonBase: {
				borderRadius: theme.shape.borderRadius,
				width: "100%",
			},
			NavItem: {
				display: "inline-block",
				width: "100%",
			},
			Typography: {
				fontWeight: "bold",
				padding: theme.spacing(1, 2),
				color: colorPicker("brandWhite"),
				textShadow: origStylesClass["textShadow-color"](
					colorPicker("brandBlack", 0.6)
				),
				fontFamily: fontFamiPicker("basic"),
			},
			Divider: {
				height: 2,
				backgroundColor: colorPicker("brandBlack", 0.3),
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
