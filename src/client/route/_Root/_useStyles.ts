import { makeStyles, Theme, createStyles } from "@material-ui/core";

//	modules
import * as OrigStylesModule from "@src/client/assets/styles/origStyles";

//	classes
const origStyles = new OrigStylesModule.default();
const { colorPicker } = origStyles;

/*-*-*-*-* Root *-*-*-*-*/
export const Root = (params: { height: number }) =>
	makeStyles((theme: Theme) => {
		const { height } = params;

		return createStyles({
			Root: {
				height,
				backgroundColor: origStyles.colorPicker("brandWhite"),
			},
		});
	})();

/*-*-*-*-* small : Root *-*-*-*-*/
export const RootSm = (params: { header?: HTMLDivElement | null }) =>
	makeStyles((theme: Theme) => {
		const { header } = params;

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
				zIndex: 1000,
			},

			/*-*-*-*-* container *-*-*-*-*/
			container: {
				paddingTop: header?.clientHeight,
				height: "100%",
				...origStyles.scrollVisibled({ scrollY: true }),
			},

			/*-*-*-*-* footer *-*-*-*-*/
			footer: {
				padding: theme.spacing(2, 0),
			},

			/*-*-*-*-* navigator *-*-*-*-*/
			navigator: {
				position: "fixed",
				bottom: 8,
				right: 8,
				zIndex: 1000,
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
		console.log("nav?.clientHeight", nav?.clientHeight);
		console.log("footer?.clientHeight", footer?.clientHeight);

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
				zIndex: 1000,
			},

			/*-*-*-*-* body *-*-*-*-*/
			body: {
				height: "100%",
				paddingTop: header?.clientHeight,
				paddingBottom: (footer?.clientHeight || 0) + (nav?.clientHeight || 0),
				...origStyles.scrollVisibled({ scrollY: true }),
			},

			/*-*-*-*-* nav *-*-*-*-*/
			navigator: {
				position: "fixed",
				bottom: 0,
				left: 0,
				marginBottom: footer?.clientHeight,
				height: "auto",
				width: "100%",
				zIndex: 1000,
			},

			/*-*-*-*-* footer *-*-*-*-*/
			footer: {
				position: "fixed",
				bottom: 0,
				left: 0,
				width: "100%",
				zIndex: 1000,
				background: colorPicker("brandWhite", 0.5),
				...origStyles.backdropFilter(),
				textShadow: origStyles["textShadow-color"](colorPicker("brandWhite")),
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
