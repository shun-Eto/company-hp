import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { Basic } from "@src/client/assets/items/LoadingWindow/_useStyles";

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
			Root: {},
		});
	})();

export const AboutUsSm = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			AboutUs: {},
		});
	})();

export const AboutUsLg = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			AboutUs: {
				height: "100%",
			},

			Top: {
				height: "100%",
			},

			Form: {
				padding: theme.spacing(5, 0),
			},

			SNS: {
				padding: theme.spacing(5, 0),
			},
		});
	})();

/*-*-*-*-* CategoryLabel *-*-*-*-*/
export const CategoryLabel = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			CategoryLabel: {
				textAlign: "center",
				marginBottom: theme.spacing(6),
			},
			label: {
				fontFamily: fontFamiPicker("basic"),
				fontWeight: "bold",
				fontSize: fontSizePicker("xl"),
				borderBottom: `double 3px ${colorPicker("gray")}`,
				paddingBottom: theme.spacing(1),
				color: colorPicker("brandBlack"),
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
