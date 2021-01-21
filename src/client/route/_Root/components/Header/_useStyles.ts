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
			AppBar: {
				background: colorPicker("brandBlack", 0.9),
				...origStylesClass.backdropFilter(),
			},
			Toolbar: {},
			Container: {
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
			},

			Logo: {
				height: 48,
				flexGrow: 1,
			},
			Menu: {},
		});
	})();

/*-*-*-*-* Logo *-*-*-*-*/
export const Logo = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Logo: {
				display: "inline-block",
				height: "100%",
				objectFit: "contain",
			},
		});
	})();

export const OrigMenu = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Root: {},

			/*-*-*-*-* IconButton *-*-*-*-*/
			IconButton: {},
			"IconButton-faIcon": {
				color: "white",
			},

			/*-*-*-*-* Menu *-*-*-*-*/
			Menu: {},
			MenuList: {
				padding: 0,
			},
			"Menu-Paper": {
				height: "100%",
				padding: theme.spacing(1, 2),
				maxWidth: 80 * 3 + theme.spacing(2) * 4 + 16,
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap",
				outline: "none",
			},
		});
	})();

export const MenuIcon = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Root: {},
			ButtonBase: {
				margin: theme.spacing(0.5, 1),
				padding: theme.spacing(1),
				borderRadius: theme.shape.borderRadius,
				display: "flex",
				flexDirection: "column",
				alignItems: "stretch",
				width: 80,
			},

			/*-*-*-*-* Icon *-*-*-*-*/
			Icon: {
				width: "auto",
				height: "auto",
				padding: theme.spacing(0.5),
			},
			"Icon-img": {
				display: "inline-block",
				width: "100%",
				objectFit: "contain",
			},

			/*-*-*-*-* FormLabel *-*-*-*-*/
			FormLabel: {
				fontSize: fontSizePicker("sm"),
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
