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
			},
			"form-name": {
				fontSize: fontSizePicker("lg"),
				fontWeight: "bold",
				fontFamily: fontFamiPicker("basic"),
				letterSpacing: 2,
				textShadow: origStyles["textShadow-paleColor"](
					colorPicker("brandBlack")
				),
				color: colorPicker("brandBlack"),
			},
			"form-actions": {
				textAlign: "right",
			},
		});
	})();

/*-*-*-*-* FormItem *-*-*-*-*/
export const FormItem = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			item: {
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				fontFamily: fontFamiPicker("basic"),
				margin: theme.spacing(1, 0, 0.5),
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
			},
			"item-children-link": {
				letterSpacing: 1.3,
				wordBreak: "break-all",
				fontSize: fontSizePicker("sm"),
				color: colorPicker("blue-700"),
				...origStyles["ellipsis-multiLine"](1),
			},
			"item-divider": {
				backgroundColor: colorPicker("gray-200"),
				margin: theme.spacing(0.5, 0),
			},
			"item-description": {
				fontFamily: fontFamiPicker("basic"),
				fontSize: fontSizePicker("sm"),
				padding: theme.spacing(0.5, 1),
				whiteSpace: "break-spaces",
			},
		});
	})();

/*-*-*-*-* ActionItem *-*-*-*-*/
export const ActionItem = (params: { type?: string }) =>
	makeStyles((theme: Theme) => {
		const { type } = params;

		return createStyles({
			ActionItem: {
				margin: theme.spacing(0.5),
			},
			Paper: {
				padding: theme.spacing(1),
				borderRadius: "50%",
				lineHeight: 1,
				backgroundColor:
					type === "appStore"
						? colorPicker("blue-500")
						: type === "playStore"
						? colorPicker("red-400")
						: type === "gitHub"
						? colorPicker("blueGray-900")
						: colorPicker("blueGray-600"),
			},
			faIcon: {
				width: "20px !important",
				height: "20px !important",
				color: "white",
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
