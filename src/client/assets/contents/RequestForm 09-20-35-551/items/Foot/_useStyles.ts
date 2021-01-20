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
			Item: {
				paddingTop: 4,
				display: "flex",
				flexDirection: "row",
			},

			/*-*-*-*-* mention *-*-*-*-*/
			"Item-mention": {
				flexGrow: 1,
			},
			"mention-1": {
				fontSize: basicStyles["fontSize-xs"],
			},
			"mention-2": {
				fontSize: basicStyles["fontSize-xs"],
			},

			/*-*-*-*-* action *-*-*-*-*/
			"Item-action": {},
			"action-submitBtn": {},
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
