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

			"Item-table": {
				tableLayout: "fixed",
			},
			"Item-tableHead": {
				visibility: "collapse",
			},
			"Item-tableBody": {
				borderRight: `solid 2px ${colorPicker("gray", 0.7)}`,
				borderLeft: `solid 2px ${colorPicker("gray", 0.7)}`,
			},

			/*-*-*-*-* spMention *-*-*-*-*/
			"spMention-label": {
				marginBottom: theme.spacing(0.5),
			},
			"spMention-text": {},

			/*-*-*-*-* outsource *-*-*-*-*/
			//	Name
			"outsourceName-name": {
				marginBottom: theme.spacing(0.5),
			},
			// Hour
			outsourceHour: {
				display: "flex",
				flexDirection: "row",
				alignItems: "flex-start",
				marginBottom: theme.spacing(0.5),
			},
			"outsourceHour-month": {
				flexBasis: "60%",
				flexShrink: 0,
				paddingRight: theme.spacing(0.5),
			},
			"outsourceHour-hour": {
				flexGrow: 1,
			},
			//	Money
			"outsourceMoney-money": {
				marginBottom: theme.spacing(0.5),
			},
			"outsourceMoney-tax": {
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				whiteSpace: "nowrap",
				color: colorPicker("gray"),
			},

			/*-*-*-*-* check *-*-*-*-*/
			checkHour: {
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
			},
			"checkHour-PIC": {
				flexBasis: "60%",
				flexShrink: 0,
				paddingRight: theme.spacing(0.5),
			},
			"checkHour-hour": {
				flexGrow: 1,
			},
		});
	})();

/*-*-*-*-* StyledTextField *-*-*-*-*/
export const StyledTextField = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			input: {
				padding: theme.spacing(0, 0.5),
			},
			multiline: {
				padding: theme.spacing(0),
				fontSize: basicStyles["fontSize-sm"],
			},
		});
	})();

/*-*-*-*-* StyledCheckbox *-*-*-*-*/
export const StyledCheckbox = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			"FormControlLabel-root": {
				margin: 0,
			},
			"FormControlLabel-label": {
				fontSize: basicStyles["fontSize-sm"],
			},
			Checkbox: {
				padding: theme.spacing(0, 0.5, 0, 0),
			},
		});
	})();

/*-*-*-*-* RequestArticle *-*-*-*-*/
export const RequestArticle = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			articleHour: {
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
			},
			"articleHour-hour": {
				paddingRight: theme.spacing(0.5),
				flexBasis: "60%",
				flexShrink: 0,
			},
			"articleHour-PIC": {
				flexGrow: 1,
			},
		});
	})();

/*-*-*-*-* PICAuthcomplete *-*-*-*-*/
export const PICAuthcomplete = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			/*-*-*-*-* hour *-*-*-*-*/
			//	PIC
			PIC: {
				flexBasis: "60%",
				flexShrink: 0,
			},
			"PIC-root": {
				padding: "2px 3px !important",
				fontSize: basicStyles["fontSize-sm"],
			},
			"PIC-input": {
				padding: "2px 2px !important",
				textAlign: "center",
			},
			"PIC-label": {
				transform: "translate(8px, 6px) scale(1);",
				fontSize: basicStyles["fontSize-sm"],
			},
			//	popper
			popper: {
				minWidth: 100,
			},
		});
	})();

/*-*-*-*-* OrigInput *-*-*-*-*/
export const OrigInput = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			OrigInput: {},
			//	text
			text: {
				flexGrow: 1,
			},
			"text-root": {
				padding: "2px",
			},
			"text-input": {
				padding: "3px 2px",
				textAlign: "center",
				fontSize: basicStyles["fontSize-sm"],
			},
			label: {
				fontSize: basicStyles["fontSize-sm"],
				transform: "translate(6px, 8px) scale(1);",
			},
		});
	})();

/*-*-*-*-* OutsourceList *-*-*-*-*/
export const OutsourceList = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			select: {
				padding: "4px",
				fontSize: basicStyles["fontSize-sm"],
			},
			label: {
				transform: "translate(14px, 8px) scale(1);",
				fontSize: basicStyles["fontSize-sm"],
			},
		});
	})();

/*-*-*-*-* Money *-*-*-*-*/
export const Money = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			input: {
				fontSize: basicStyles["fontSize-sm"],
				textAlign: "center",
			},
		});
	})();

/*-*-*-*-* MonthSelect *-*-*-*-*/
export const MonthSelect = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			label: {
				transform: "translate(10px, 8px) scale(1);",
				fontSize: basicStyles["fontSize-sm"],
			},
			select: {
				padding: "4px !important",
				fontSize: basicStyles["fontSize-sm"],
				textAlign: "center",
			},
			icon: {
				visibility: "collapse",
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
