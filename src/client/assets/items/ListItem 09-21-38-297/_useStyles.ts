import { makeStyles, Theme, createStyles } from "@material-ui/core";
import {
	basicStyles,
	basicColors,
} from "@src/client/assets/styles/basicStyles";
import { colorPicker } from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* OrigListItem *-*-*-*-*/
export const OrigListItem = (params: { origTheme?: EnvTypes.Theme }) =>
	makeStyles((theme: Theme) => {
		const { origTheme } = params;

		return createStyles({
			ListItem: {
				paddingRight: 0,
				marginBottom: theme.spacing(1.5),
				color: origTheme?.color ? origTheme.color : colorPicker("brandBlack"),
				backgroundColor: origTheme?.bgColor ? origTheme.bgColor : "unset",
				"&:hover": {
					color: origTheme?.hoveredColor ? origTheme.hoveredColor : "unset",
					backgroundColor: origTheme?.hoveredBgColor
						? origTheme.hoveredBgColor
						: "unset",
				},
			},

			/*-*-*-*-* icon *-*-*-*-*/
			"ListItem-icon": {
				paddingLeft: theme.spacing(0.5),
				color: colorPicker("brandBlack"),
			},

			/*-*-*-*-* text *-*-*-*-*/
			"ListItem-text": {
				...basicStyles["ellipsis-multiLine"](1),
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
