import { makeStyles, Theme, createStyles } from "@material-ui/core";

//	modules
import * as OrigStylesModule from "@src/client/assets/styles/origStyles";

//	classes
const origStylesClass = new OrigStylesModule.default();

/*-*-*-*-* HomeSm *-*-*-*-*/
export const HomeSm = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Home: {},
		});
	})();

/*-*-*-*-* HomeLg *-*-*-*-*/
export const HomeLg = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Home: {
				height: "100%",
				scrollBehavior: "smooth",
				padding: theme.spacing(0, 3),
				...origStylesClass.scrollVisibled({ scrollY: true }),
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
