import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { basicStyles } from "@src/client/assets/styles/basicStyles.ts 09-37-15-132";

//	modules
import * as OrigStylesModule from "@src/client/assets/styles/origStyles";

//	classes
const origStylesClass = new OrigStylesModule.default();

/*-*-*-*-* Root *-*-*-*-*/
export const Root = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Root: {
				height: "100%",
				backgroundColor: origStylesClass.colorPicker("brandWhite"),
			},
		});
	})();

/*-*-*-*-* small : Root *-*-*-*-*/
export const RootSm = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Root: {
				height: "100%",
			},
		});
	})();

/*-*-*-*-* large : Root *-*-*-*-*/
export const RootLg = (params: {
	header?: HTMLDivElement;
	nav?: HTMLDivElement;
	footer?: HTMLDivElement;
}) =>
	makeStyles((theme: Theme) => {
		const { header, nav, footer } = params;

		return createStyles({
			Root: {
				height: "100%",
				position: "relative",
			},

			/*-*-*-*-* header *-*-*-*-*/
			header: {
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
			},

			/*-*-*-*-* body *-*-*-*-*/
			body: {
				height: "100%",
				paddingTop: header?.clientHeight,
				paddingBottom: (footer?.clientHeight || 0) + (nav?.clientHeight || 0),
				...basicStyles.scrollInVisible({ scrollY: true }),
			},

			/*-*-*-*-* nav *-*-*-*-*/
			navigator: {
				position: "fixed",
				bottom: 0,
				left: 0,
				paddingBottom: footer?.clientHeight,
				width: "100%",
			},

			/*-*-*-*-* footer *-*-*-*-*/
			footer: {
				position: "fixed",
				bottom: 0,
				left: 0,
				width: "100%",
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
