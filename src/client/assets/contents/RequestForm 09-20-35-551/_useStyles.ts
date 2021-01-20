import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { Height } from "@material-ui/icons";
import {
	basicStyles,
	basicColors,
} from "@src/client/assets/styles/basicStyles";
import { colorPicker } from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";
import { relative } from "path";

/*-*-*-*-* RequestForm *-*-*-*-*/
export const RequestForm = (params: { width?: number }) =>
	makeStyles((theme: Theme) => {
		/*-*-*-*-* properties *-*-*-*-*/
		const { width } = params;
		const unitWidth = 916;
		const scale = width ? width / unitWidth : 1;

		/*-*-*-*-* component *-*-*-*-*/
		return createStyles({
			wrapper: {
				position: "relative",
				width: width ? width : unitWidth,
				height: width ? width * 1.415 : unitWidth * 1.415,
			},
			RequestForm: {
				transform: `scale(${scale})`,
				transformOrigin: "top left",
				width: unitWidth,
				height: unitWidth * 1.415,
				position: "absolute",
				top: 0,
				left: 0,
				padding: theme.spacing(1.5),
			},

			"RequestForm-head": {},
			"RequestForm-form": {},
			"RequestForm-foot": {},
		});
	})();

/*-*-*-*-* PlanConditions *-*-*-*-*/
export const PlanConditions = (params: { width?: number; height?: number }) =>
	makeStyles((theme: Theme) => {
		const { width, height } = params;
		const unitWidth = 320;
		const scale = width ? width / unitWidth : 1;

		return createStyles({
			wrapper: {
				position: "relative",
				width: width ? width : unitWidth,
				height: width && height ? height * scale : height,
			},
			PlanConditions: {
				transform: `scale(${scale})`,
				transformOrigin: "top left",
				width: unitWidth,
				position: "absolute",
				top: 0,
				left: 0,
			},

			"PlanConditions-item": {
				marginBottom: theme.spacing(4),
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
