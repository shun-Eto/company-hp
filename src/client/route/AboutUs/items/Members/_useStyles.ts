import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { Basic } from "@src/client/assets/items/LoadingWindow/_useStyles";

//	modules
import * as OrigStylesModule from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";

//	classes
const origStyles = new OrigStylesModule.default();
const { colorPicker, fontFamiPicker, fontSizePicker } = origStyles;

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

/*-*-*-*-* MemberItem *-*-*-*-*/
export const MemberItem = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			MemberItem: {
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
			},

			/*-*-*-*-* icon *-*-*-*-*/
			icon: {
				padding: theme.spacing(2),
			},
			"icon-img": {
				height: 100,
				width: 100,
				flexShrink: 0,
				padding: theme.spacing(0.5),
				[theme.breakpoints.down("xs")]: {
					height: 80,
					width: 80,
				},
			},

			/*-*-*-*-* form *-*-*-*-*/
			form: {
				flexGrow: 1,
				padding: theme.spacing(2, 2, 2, 0),
			},
			"form-divider": {
				marginTop: theme.spacing(1),
			},
			"form-text": {
				fontFamily: fontFamiPicker("basic"),
				wordBreak: "break-all",
				letterSpacing: 1.3,
				fontSize: fontSizePicker("sm"),
				textAlign: "left",
			},
			"form-name": {
				fontSize: fontSizePicker("lg"),
				fontWeight: "bold",
				fontFamily: fontFamiPicker("basic"),
				letterSpacing: 2,
				textAlign: "left",
			},
			"form-position": {
				fontSize: fontSizePicker("basic"),
				fontFamily: fontFamiPicker("basic"),
				letterSpacing: 1.5,
				textAlign: "left",
			},
			"form-birthday": {},
			"form-hobby": {
				color: "inherit",
				border: `solid 1px ${colorPicker("gray-300")}`,
				padding: theme.spacing(0.5, 1),
				fontSize: fontSizePicker("sm"),
				borderRadius: theme.shape.borderRadius,
				margin: theme.spacing(0.5, 0.5, 0.5, 0),
				whiteSpace: "nowrap",
				display: "inline-block",
				textAlign: "left",
			},
		});
	})();

/*-*-*-*-* MemberFormItem *-*-*-*-*/
export const MemberFormItem = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			item: {
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				fontFamily: fontFamiPicker("basic"),
				margin: theme.spacing(0.5, 0, 0.5),
			},

			"item-faIcon": {
				marginRight: theme.spacing(1),
				color: colorPicker("gray"),
			},
			"item-label": {
				fontFamily: "inherit",
				fontSize: fontSizePicker("sm"),
			},
			"item-children": {
				color: colorPicker("brandBlack"),
				textAlign: "left",
			},
			"item-children-link": {
				letterSpacing: 1.3,
				wordBreak: "break-all",
				fontSize: fontSizePicker("sm"),
				color: colorPicker("blue-700"),
			},
			"item-divider": {
				backgroundColor: colorPicker("gray-200"),
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
